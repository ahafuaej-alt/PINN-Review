import fs from 'node:fs';
import process from 'node:process';
import { buildAll, bumpPatchVersion, impactSummary, normalizeDoi, readJson, validateMaster, writeJsonAtomic } from './lib/dataset-core.mjs';
import { generateDatasets } from './build-datasets.mjs';

const allowedFields = new Set(['title', 'citation', 'doi', 'publisher_url', 'venue', 'year', 'access', 'countries']);
const usage = 'Usage: node scripts/apply-paper-update.mjs update.json [--dry-run]';

const loadUpdate = () => {
  const file = process.argv.slice(2).find((argument) => !argument.startsWith('--'));
  if (!file) throw new Error(usage);
  return JSON.parse(fs.readFileSync(file, 'utf8'));
};

const update = loadUpdate();
if (update.schema_version !== '1.0.0') throw new Error('Update package schema_version must be 1.0.0');
if (!Number.isInteger(update.id)) throw new Error('Update package requires a numeric paper id');
if (!update.changes || typeof update.changes !== 'object' || Array.isArray(update.changes)) throw new Error('Update package requires a changes object');
for (const field of Object.keys(update.changes)) if (!allowedFields.has(field)) throw new Error(`Field “${field}” cannot be updated by this workflow`);
if (!String(update.reason || '').trim()) throw new Error('A reason is required for the audit trail');
if (!String(update.evidence?.url || '').startsWith('https://')) throw new Error('An HTTPS evidence URL is required');

const master = readJson('data/papers-master.json');
const mapping = readJson('data/country-mapping.json');
const worldMap = readJson('data/world-map.json');
const changesLog = readJson('data/changes.json');
const next = structuredClone(master);
const paper = next.papers.find((record) => record.id === update.id);
if (!paper) throw new Error(`Paper ${update.id} does not exist`);
const previousYear = paper.year;

for (const [field, rawValue] of Object.entries(update.changes)) {
  if (field === 'doi') paper.doi = normalizeDoi(rawValue);
  else if (field === 'year') paper.year = rawValue === null || rawValue === '' ? null : Number(rawValue);
  else if (field === 'countries') paper.countries = [...new Set(rawValue.map((country) => String(country).trim()).filter(Boolean))];
  else if (field === 'venue') paper.venue = { name: String(rawValue.name || '').trim(), type: rawValue.type };
  else paper[field] = rawValue === null ? null : String(rawValue).trim();
}

if ('doi' in update.changes && !('publisher_url' in update.changes) && paper.doi) paper.publisher_url = `https://doi.org/${paper.doi}`;
if ('year' in update.changes && !update.options?.preserve_realm_year_override) {
  if (paper.overrides) delete paper.overrides.realm_year;
  if (paper.overrides && !Object.keys(paper.overrides).length) delete paper.overrides;
}
if ('year' in update.changes && !('citation' in update.changes) && paper.year !== null) {
  const newYearPattern = new RegExp(`\\b${paper.year}\\b`);
  if (!newYearPattern.test(paper.citation)) {
    if (!Number.isInteger(previousYear)) throw new Error('Citation text must be supplied when adding a year that is not already present in the citation');
    const oldYearPattern = new RegExp(`\\b${previousYear}\\b`, 'g');
    const occurrences = paper.citation.match(oldYearPattern)?.length || 0;
    if (occurrences !== 1) throw new Error(`Citation year cannot be synchronized safely: ${previousYear} occurs ${occurrences} times; include corrected citation text in the update package`);
    paper.citation = paper.citation.replace(oldYearPattern, String(paper.year));
  }
}

const today = new Date().toISOString().slice(0, 10);
paper.last_updated = today;
paper.provenance ||= {};
paper.provenance.evidence_url = update.evidence.url;
paper.provenance.note = update.evidence.note || update.reason;
next.metadata.dataset_version = bumpPatchVersion(master.metadata.dataset_version);
next.metadata.last_updated = today;
next.metadata.record_count = next.papers.length;
next.metadata.maintenance.legacy_realm_year_override_count = next.papers.filter((record) => record.overrides?.realm_year !== undefined).length;

const masterValidation = validateMaster(next, mapping, worldMap);
if (masterValidation.errors.length) throw new Error(masterValidation.errors.join('\n'));
const impact = impactSummary(master, next, update.id, mapping);
if (!impact.changed_fields.length) throw new Error('The update does not change any stored value');
buildAll(next, mapping);

const audit = {
  change_id: `paper-${update.id}-${today}-${next.metadata.dataset_version}`,
  version: next.metadata.dataset_version,
  date: today,
  paper_id: update.id,
  changed_fields: impact.changed_fields,
  reason: update.reason.trim(),
  evidence: { url: update.evidence.url, note: update.evidence.note || null },
  submitted_by: update.submitted_by || null,
  impact
};

if (process.argv.includes('--dry-run')) {
  console.log(JSON.stringify({ status: 'valid dry run', version: next.metadata.dataset_version, audit }, null, 2));
  process.exit(0);
}

writeJsonAtomic('data/papers-master.json', next);
changesLog.changes.unshift(audit);
writeJsonAtomic('data/changes.json', changesLog);
const generated = generateDatasets();
console.log(JSON.stringify({ status: 'applied', version: next.metadata.dataset_version, audit, generated }, null, 2));
