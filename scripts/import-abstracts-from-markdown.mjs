import fs from 'node:fs';
import process from 'node:process';
import { createHash } from 'node:crypto';
import {
  buildAll,
  bumpPatchVersion,
  normalizeDoi,
  readJson,
  validateMaster,
  writeJsonAtomic
} from './lib/dataset-core.mjs';
import { generateDatasets } from './build-datasets.mjs';

const sourcePath = process.argv[2] || 'data/journal_articles_exact_abstracts_2.md';
const sourceText = fs.readFileSync(sourcePath, 'utf8');
const sourceSha256 = createHash('sha256').update(Buffer.from(sourceText, 'utf8')).digest('hex');
const sourceFilename = sourcePath.split('/').pop();

function cleanOptional(value) {
  const cleaned = String(value ?? '').trim().replace(/^\\([\[\]])/gu, '$1');
  if (!cleaned || /^(?:\[?not available\]?|n\/?a|none|null|unknown)$/iu.test(cleaned)) return '';
  return cleaned;
}

const sections = sourceText.split(/^\\---\s*$/gmu);
const records = [];
for (const section of sections) {
  const idMatch = section.match(/^## Paper ID (\d+)\s*$/mu);
  if (!idMatch) continue;

  const doiMatch = section.match(/^\*\*DOI:\*\*\s*(.*?)\s*$/mu);
  const publisherMatch = section.match(/^\*\*Publisher URL:\*\*\s*(.*?)\s*$/mu);
  const abstractMatch = section.match(/^### Exact abstract\s*\n\s*([\s\S]*)$/mu);

  records.push({
    id: Number(idMatch[1]),
    doi: cleanOptional(doiMatch?.[1]),
    publisher_url: cleanOptional(publisherMatch?.[1]),
    abstract: String(abstractMatch?.[1] ?? '').trim()
  });
}

if (records.length !== 420) {
  throw new Error(`Expected 420 abstract records, found ${records.length}`);
}
const ids = records.map((record) => record.id);
if (ids.some((id) => !Number.isInteger(id))) throw new Error('Every imported abstract requires an integer paper ID');
if (new Set(ids).size !== ids.length) throw new Error('Abstract source contains duplicate paper IDs');
const empty = records.filter((record) => !record.abstract);
if (empty.length) throw new Error(`Abstract source contains empty abstracts for: ${empty.map((record) => record.id).join(', ')}`);

const master = readJson('data/papers-master.json');
const mapping = readJson('data/country-mapping.json');
const worldMap = readJson('data/world-map.json');
const changesLog = readJson('data/changes.json');
const next = structuredClone(master);
const byId = new Map(next.papers.map((paper) => [paper.id, paper]));
const missing = ids.filter((id) => !byId.has(id));
if (missing.length) throw new Error(`Abstract source references unknown paper IDs: ${missing.join(', ')}`);

const doiMismatches = [];
for (const record of records) {
  const paper = byId.get(record.id);
  const supplied = normalizeDoi(record.doi);
  const stored = normalizeDoi(paper.doi);
  if (supplied && stored && supplied.toLocaleLowerCase('en') !== stored.toLocaleLowerCase('en')) {
    doiMismatches.push({ id: record.id, supplied, stored });
  }
}
const doiMismatchIds = new Set(doiMismatches.map((record) => record.id));
if (doiMismatches.length) {
  console.warn(`DOI cross-check warnings (${doiMismatches.length}); canonical DOI values are retained:\n${doiMismatches.map(({ id, supplied, stored }) => `paper ${id}: import=${supplied}, canonical=${stored}`).join('\n')}`);
}

const today = new Date().toISOString().slice(0, 10);
const changed = [];
const unchanged = [];
for (const record of records) {
  const paper = byId.get(record.id);
  if (paper.abstract === record.abstract) {
    unchanged.push(record.id);
    continue;
  }

  const importedDoi = normalizeDoi(record.doi);
  const canonicalDoi = normalizeDoi(paper.doi);
  paper.abstract = record.abstract;
  paper.last_updated = today;
  paper.provenance ||= {};
  paper.provenance.abstract_source = {
    filename: sourceFilename,
    sha256: sourceSha256,
    imported_at: today,
    evidence_url: String(
      paper.publisher_url ||
      record.publisher_url ||
      (canonicalDoi ? `https://doi.org/${canonicalDoi}` : paper.provenance.evidence_url || '')
    ).trim() || null,
    imported_doi: importedDoi || null,
    canonical_doi: canonicalDoi || null,
    doi_match: !doiMismatchIds.has(record.id)
  };
  changed.push(record.id);
}

if (!changed.length) throw new Error('All supplied abstracts are already current; no dataset changes were produced');

const nextVersion = bumpPatchVersion(master.metadata.dataset_version);
next.metadata.dataset_version = nextVersion;
next.metadata.last_updated = today;
next.metadata.record_count = next.papers.length;
next.metadata.maintenance ||= {};
next.metadata.maintenance.legacy_realm_year_override_count = next.papers.filter((paper) => paper.overrides?.realm_year !== undefined).length;
next.metadata.maintenance.abstract_import = {
  date: today,
  version: nextVersion,
  source_file: sourceFilename,
  source_sha256: sourceSha256,
  supplied_records: records.length,
  changed_records: changed.length,
  unchanged_records: unchanged.length,
  doi_mismatch_records: doiMismatches
};

const validation = validateMaster(next, mapping, worldMap);
if (validation.errors.length) throw new Error(validation.errors.join('\n'));
buildAll(next, mapping);

const affectedViews = [
  'Reference cards, nested abstract details, search, filtering, analytics, and CSV exports',
  'Canonical master JSON, generated reference JSON, machine-readable metadata, provenance, and dataset version'
];

const recordById = new Map(records.map((record) => [record.id, record]));
const audits = changed.map((id) => {
  const record = recordById.get(id);
  const paper = byId.get(id);
  const canonicalDoi = normalizeDoi(paper.doi);
  return {
    change_id: `paper-${id}-${today}-${nextVersion}-abstract-import`,
    version: nextVersion,
    date: today,
    paper_id: id,
    changed_fields: ['abstract'],
    reason: `Import the exact abstract supplied in ${sourceFilename}.`,
    evidence: {
      url: paper.publisher_url || record.publisher_url || (canonicalDoi ? `https://doi.org/${canonicalDoi}` : null),
      note: `Bulk exact-abstract import; source SHA-256 ${sourceSha256}.${doiMismatchIds.has(id) ? ' The supplied DOI differed from the canonical record; the canonical DOI was retained.' : ''}`
    },
    submitted_by: null,
    impact: {
      paper_id: id,
      changed_fields: ['abstract'],
      references_year_counts: [],
      realm_year_counts: [],
      realm_country_count: null,
      collaboration_pair_count: null,
      affected_views: affectedViews
    }
  };
});

writeJsonAtomic('data/papers-master.json', next);
changesLog.changes.unshift(...audits);
writeJsonAtomic('data/changes.json', changesLog);
const generated = generateDatasets();

console.log(JSON.stringify({
  status: 'applied',
  version: nextVersion,
  source_file: sourceFilename,
  source_sha256: sourceSha256,
  supplied: records.length,
  changed: changed.length,
  unchanged: unchanged.length,
  doi_mismatches: doiMismatches,
  changed_ids: changed,
  unchanged_ids: unchanged,
  generated
}, null, 2));
