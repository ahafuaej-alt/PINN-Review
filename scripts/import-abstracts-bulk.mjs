import fs from 'node:fs';
import process from 'node:process';
import { gunzipSync } from 'node:zlib';
import {
  buildAll,
  bumpPatchVersion,
  normalizeDoi,
  readJson,
  validateMaster,
  writeJsonAtomic
} from './lib/dataset-core.mjs';
import { generateDatasets } from './build-datasets.mjs';

const partsDirectory = process.argv[2] || 'data';
const partNames = fs.readdirSync(partsDirectory)
  .filter((name) => /^abstract-import\.part\d+\.b64$/u.test(name))
  .sort((left, right) => left.localeCompare(right, 'en', { numeric: true }));
if (!partNames.length) throw new Error('No abstract-import.partNN.b64 files were found');

const encoded = partNames
  .map((name) => fs.readFileSync(`${partsDirectory}/${name}`, 'utf8').replace(/\s+/gu, ''))
  .join('');
const source = JSON.parse(gunzipSync(Buffer.from(encoded, 'base64')).toString('utf8'));

if (source.schema_version !== '1.0.0') throw new Error('Unsupported abstract import schema');
if (!Array.isArray(source.records) || source.records.length !== source.source?.record_count) {
  throw new Error('Abstract import record count does not match its source metadata');
}

const ids = source.records.map((record) => record.id);
if (ids.some((id) => !Number.isInteger(id))) throw new Error('Every imported abstract requires an integer paper ID');
if (new Set(ids).size !== ids.length) throw new Error('Abstract import contains duplicate paper IDs');

const empty = source.records.filter((record) => !String(record.abstract || '').trim());
if (empty.length) throw new Error(`Abstract import contains empty abstracts for: ${empty.map((record) => record.id).join(', ')}`);

const master = readJson('data/papers-master.json');
const mapping = readJson('data/country-mapping.json');
const worldMap = readJson('data/world-map.json');
const changesLog = readJson('data/changes.json');
const next = structuredClone(master);
const byId = new Map(next.papers.map((paper) => [paper.id, paper]));
const missing = ids.filter((id) => !byId.has(id));
if (missing.length) throw new Error(`Abstract import references unknown paper IDs: ${missing.join(', ')}`);

const doiMismatches = [];
for (const record of source.records) {
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

for (const record of source.records) {
  const paper = byId.get(record.id);
  const abstract = String(record.abstract).trim();
  if (paper.abstract === abstract) {
    unchanged.push(record.id);
    continue;
  }

  const importedDoi = normalizeDoi(record.doi);
  const canonicalDoi = normalizeDoi(paper.doi);
  paper.abstract = abstract;
  paper.last_updated = today;
  paper.provenance ||= {};
  paper.provenance.abstract_source = {
    filename: source.source.filename,
    sha256: source.source.sha256,
    imported_at: today,
    evidence_url: String(paper.publisher_url || record.publisher_url || (canonicalDoi ? `https://doi.org/${canonicalDoi}` : paper.provenance.evidence_url || '')).trim() || null,
    imported_doi: importedDoi,
    canonical_doi: canonicalDoi,
    doi_match: !doiMismatchIds.has(record.id)
  };
  changed.push(record.id);
}

if (!changed.length) throw new Error('All imported abstracts are already current; no dataset changes were produced');

const nextVersion = bumpPatchVersion(master.metadata.dataset_version);
next.metadata.dataset_version = nextVersion;
next.metadata.last_updated = today;
next.metadata.record_count = next.papers.length;
next.metadata.maintenance.legacy_realm_year_override_count = next.papers.filter((paper) => paper.overrides?.realm_year !== undefined).length;
next.metadata.maintenance.abstract_import = {
  date: today,
  version: nextVersion,
  source_file: source.source.filename,
  source_sha256: source.source.sha256,
  supplied_records: source.records.length,
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

const audits = changed.map((id) => {
  const record = source.records.find((item) => item.id === id);
  const paper = byId.get(id);
  const canonicalDoi = normalizeDoi(paper.doi);
  return {
    change_id: `paper-${id}-${today}-${nextVersion}-abstract-import`,
    version: nextVersion,
    date: today,
    paper_id: id,
    changed_fields: ['abstract'],
    reason: `Import the publisher/PDF-derived exact abstract supplied in ${source.source.filename}.`,
    evidence: {
      url: paper.publisher_url || record.publisher_url || (canonicalDoi ? `https://doi.org/${canonicalDoi}` : null),
      note: `Bulk exact-abstract import; source SHA-256 ${source.source.sha256}.${doiMismatchIds.has(id) ? ' The imported DOI differed from the canonical record; the canonical DOI was retained.' : ''}`
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
  source_parts: partNames,
  supplied: source.records.length,
  changed: changed.length,
  unchanged: unchanged.length,
  doi_mismatches: doiMismatches,
  changed_ids: changed,
  unchanged_ids: unchanged,
  generated
}, null, 2));
