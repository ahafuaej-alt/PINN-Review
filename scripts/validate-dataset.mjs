import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { ROOT, buildAll, effectiveRealmYear, impactSummary, readJson, stableJson, validateMaster } from './lib/dataset-core.mjs';

const master = readJson('data/papers-master.json');
const mapping = readJson('data/country-mapping.json');
const map = readJson('data/world-map.json');
const changes = readJson('data/changes.json');
const validation = validateMaster(master, mapping, map);
const failures = [...validation.errors];
const check = (condition, message) => { if (!condition) failures.push(message); };
const generated = buildAll(master, mapping);

for (const [relativePath, value] of [
  ['data/references.json', generated.references],
  ['data/references-metadata.json', generated.referencesMetadata],
  ['data/pinn-realm.json', generated.realm]
]) {
  check(fs.readFileSync(path.join(ROOT, relativePath), 'utf8') === stableJson(value), `${relativePath} is not synchronized with papers-master.json`);
}

check(master.metadata.record_count === master.papers.length, 'master record_count metadata is stale');
check(master.metadata.maintenance.legacy_realm_year_override_count === validation.warnings.length, 'legacy year override metadata is stale');
check(Array.isArray(changes.changes) && changes.changes.length > 0, 'audit trail is empty');
check(changes.changes[0].version !== undefined, 'audit trail entries require versions');
check(generated.realm.papers.every((paper) => paper.year === effectiveRealmYear(master.papers.find((record) => record.id === paper.id))), 'Realm years are not generated from master records');
check(generated.realm.collaborations.every((pair) => pair.a < pair.b && pair.a !== pair.b), 'collaboration pairs are not canonical unordered non-self pairs');
check(generated.realm.metadata.national_paper_count + generated.realm.metadata.international_paper_count === master.papers.length, 'national and international counts do not sum to the master record count');

// Prove the most important maintenance invariant without changing any files:
// one paper edit must propagate to reference analytics and Realm timelines.
const simulated = structuredClone(master);
const candidate = simulated.papers.find((paper) => Number.isInteger(paper.year) && !paper.overrides?.realm_year);
const originalYear = candidate.year;
candidate.year = originalYear === 2024 ? 2023 : 2024;
delete candidate.overrides;
candidate.venue = { name: 'Validation Venue', type: 'journal' };
candidate.doi = '10.1234/validation';
candidate.publisher_url = 'https://doi.org/10.1234/validation';
const impact = impactSummary(master, simulated, candidate.id, mapping);
const simulatedGenerated = buildAll(simulated, mapping);
const simulatedReference = simulatedGenerated.references.find((paper) => paper.id === candidate.id);
const simulatedRealmPaper = simulatedGenerated.realm.papers.find((paper) => paper.id === candidate.id);
check(simulatedReference.year === candidate.year, 'simulated year edit did not reach References');
check(simulatedRealmPaper.year === candidate.year, 'simulated year edit did not reach PINN Realm');
check(simulatedReference.venue === 'Validation Venue', 'simulated venue edit did not reach References');
check(simulatedReference.doi === '10.1234/validation', 'simulated DOI edit did not reach References');
check(impact.references_year_counts.length === 2, 'simulated edit did not recalculate bibliography year totals');
check(impact.realm_year_counts.length === 2, 'simulated edit did not recalculate Realm year totals');

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join('\n'));
  process.exit(1);
}

console.log(JSON.stringify({
  status: 'passed',
  version: master.metadata.dataset_version,
  records: master.papers.length,
  mapped_countries: Object.keys(mapping).length,
  realm_years: generated.realm.metadata.year_count,
  collaboration_pairs: generated.realm.metadata.collaboration_pair_count,
  legacy_year_overrides_reported: validation.warnings.length,
  audit_entries: changes.changes.length,
  propagation_test: {
    paper_id: candidate.id,
    from_year: originalYear,
    to_year: candidate.year,
    references_recalculated: true,
    realm_recalculated: true,
    metadata_recalculated: true
  }
}, null, 2));
