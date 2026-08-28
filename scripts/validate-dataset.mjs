import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { ROOT, EXPECTED_RECORDS, buildAll, impactSummary, readJson, stableJson, validateMaster } from './lib/dataset-core.mjs';
import { validatePublisherReview } from '../assets/publisher-review-state.mjs';

const master = readJson('data/papers-master.json');
const mapping = readJson('data/country-mapping.json');
const map = readJson('data/world-map.json');
const changes = readJson('data/changes.json');
const publisherReview = readJson('data/publisher-enrichment-review.json');
const referencesMetadata = readJson('data/references-metadata.json');
const realmOnDisk = readJson('data/pinn-realm.json');
const validation = validateMaster(master, mapping, map);
const failures = [...validation.errors];
const check = (condition, message) => { if (!condition) failures.push(message); };
const hasObsoleteYearMetadata = (value) => Object.keys(value || {}).some((key) => /legacy/i.test(key) && /year/i.test(key));
const generated = buildAll(master, mapping);

for (const [relativePath, value] of [
  ['data/references.json', generated.references],
  ['data/references-metadata.json', generated.referencesMetadata],
  ['data/pinn-realm.json', generated.realm]
]) {
  check(fs.readFileSync(path.join(ROOT, relativePath), 'utf8') === stableJson(value), relativePath + ' is not synchronized with papers-master.json');
}

check(master.metadata.record_count === master.papers.length, 'master record_count metadata is stale');
check(master.papers.length === EXPECTED_RECORDS, 'expected ' + EXPECTED_RECORDS + ' canonical papers');
check(master.papers.every((paper) => Number.isInteger(paper.year)), 'every canonical paper requires an integer publication year');
check(master.papers.every((paper) => paper.overrides === undefined), 'obsolete paper overrides remain in the canonical master dataset');
check(!hasObsoleteYearMetadata(master.metadata.maintenance), 'obsolete legacy year metadata remains in master maintenance metadata');
check(!hasObsoleteYearMetadata(referencesMetadata), 'obsolete legacy year metadata remains in References metadata');
check(!hasObsoleteYearMetadata(realmOnDisk.metadata), 'obsolete legacy year metadata remains in PINN Realm metadata');
check(Array.isArray(changes.changes) && changes.changes.length > 0, 'audit trail is empty');
check(changes.changes[0].version !== undefined, 'audit trail entries require versions');
failures.push(...validatePublisherReview(publisherReview, master, changes.changes));

const masterById = new Map(master.papers.map((paper) => [paper.id, paper]));
const referencesById = new Map(generated.references.map((paper) => [paper.id, paper]));
const realmById = new Map(generated.realm.papers.map((paper) => [paper.id, paper]));
check(masterById.size === EXPECTED_RECORDS, 'master ID set is incomplete');
check(referencesById.size === EXPECTED_RECORDS, 'References ID set is incomplete');
check(realmById.size === EXPECTED_RECORDS, 'PINN Realm ID set is incomplete');
const yearMismatches = master.papers.filter((paper) => referencesById.get(paper.id)?.year !== paper.year || realmById.get(paper.id)?.year !== paper.year);
check(yearMismatches.length === 0, 'publication-year source invariant failed for IDs: ' + yearMismatches.map((paper) => paper.id).join(', '));

const canonicalYearCounts = new Map();
for (const paper of master.papers) canonicalYearCounts.set(paper.year, (canonicalYearCounts.get(paper.year) || 0) + 1);
for (const year of generated.realm.metadata.years) {
  check(generated.realm.papers.filter((paper) => paper.year === year).length === canonicalYearCounts.get(year), 'Realm annual publication count for ' + year + ' is not canonical');
}
check([...canonicalYearCounts.keys()].sort((a, b) => a - b).join(',') === generated.realm.metadata.years.join(','), 'Realm year filter values are not derived from canonical publication years');
check(generated.realm.collaborations.every((pair) => pair.a < pair.b && pair.a !== pair.b), 'collaboration pairs are not canonical unordered non-self pairs');
check(generated.realm.metadata.national_paper_count + generated.realm.metadata.international_paper_count === master.papers.length, 'national and international counts do not sum to the master record count');

// Prove the maintenance invariant without changing production files:
// one canonical publication-year edit must propagate to References, Realm,
// annual totals, and country/year analytics through the normal generator.
const simulated = structuredClone(master);
const candidate = simulated.papers.find((paper) => Number.isInteger(paper.year));
const originalYear = candidate.year;
const replacementYear = originalYear === 2024 ? 2023 : 2024;
candidate.year = replacementYear;
candidate.venue = { name: 'Validation Venue', type: 'journal' };
candidate.doi = '10.1234/validation';
candidate.publisher_url = 'https://doi.org/10.1234/validation';
candidate.abstract = 'Validation abstract for synchronized reference content.';
candidate.graphical_abstract = { image_url: 'https://example.org/validation.webp', width: 3840, height: 2160, format: 'webp', color_space: 'sRGB', alt_text: 'Validation graphical abstract.', caption: 'Validation caption.' };
const impact = impactSummary(master, simulated, candidate.id, mapping);
const beforeGenerated = buildAll(master, mapping);
const simulatedGenerated = buildAll(simulated, mapping);
const simulatedReference = simulatedGenerated.references.find((paper) => paper.id === candidate.id);
const simulatedRealmPaper = simulatedGenerated.realm.papers.find((paper) => paper.id === candidate.id);
check(simulatedReference.year === candidate.year, 'simulated year edit did not reach References');
check(simulatedRealmPaper.year === candidate.year, 'simulated year edit did not reach PINN Realm');
check(simulatedReference.year === simulatedRealmPaper.year, 'simulated year edit produced divergent consumer years');
check(simulatedReference.venue === 'Validation Venue', 'simulated venue edit did not reach References');
check(simulatedReference.doi === '10.1234/validation', 'simulated DOI edit did not reach References');
check(simulatedReference.reference_type === 'journal', 'simulated reference type did not reach References');
check(Array.isArray(simulatedReference.countries) && simulatedReference.countries.length === candidate.countries.length, 'country details did not reach References');
check(simulatedReference.abstract === candidate.abstract, 'abstract did not reach References');
check(simulatedReference.graphical_abstract?.image_url === candidate.graphical_abstract.image_url, 'graphical abstract did not reach References');
check(impact.reference_publication_counts.length === 2, 'simulated edit did not recalculate bibliography year totals');
check(impact.realm_publication_counts.length === 2, 'simulated edit did not recalculate Realm year totals');
const candidateIso3 = simulatedGenerated.realm.papers.find((paper) => paper.id === candidate.id).country_codes[0];
const beforeCountry = beforeGenerated.realm.countries.find((country) => country.iso3 === candidateIso3);
const afterCountry = simulatedGenerated.realm.countries.find((country) => country.iso3 === candidateIso3);
check((beforeCountry.annual[String(originalYear)]?.total || 0) - (afterCountry.annual[String(originalYear)]?.total || 0) === 1, 'simulated year edit did not leave the original Realm country/year bucket');
check((afterCountry.annual[String(replacementYear)]?.total || 0) - (beforeCountry.annual[String(replacementYear)]?.total || 0) === 1, 'simulated year edit did not enter the replacement Realm country/year bucket');

if (failures.length) {
  console.error(failures.map((failure) => '- ' + failure).join('\n'));
  process.exit(1);
}

console.log(JSON.stringify({
  status: 'passed',
  version: master.metadata.dataset_version,
  records: master.papers.length,
  mapped_countries: Object.keys(mapping).length,
  realm_publication_years: generated.realm.metadata.year_count,
  collaboration_pairs: generated.realm.metadata.collaboration_pair_count,
  publication_year_invariant: {
    ids_checked: EXPECTED_RECORDS,
    matches: EXPECTED_RECORDS - yearMismatches.length,
    mismatches: yearMismatches.length,
    active_overrides: 0,
    source: 'papers-master.json#paper.year'
  },
  audit_entries: changes.changes.length,
  propagation_test: {
    paper_id: candidate.id,
    from_year: originalYear,
    to_year: candidate.year,
    references_recalculated: true,
    realm_recalculated: true,
    country_year_analytics_recalculated: true,
    metadata_recalculated: true
  }
}, null, 2));
