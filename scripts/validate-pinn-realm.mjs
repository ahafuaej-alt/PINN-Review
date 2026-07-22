import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const ROOT = path.resolve(import.meta.dirname, '..');
const realm = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/pinn-realm.json'), 'utf8'));
const map = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/world-map.json'), 'utf8'));
const references = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/references.json'), 'utf8'));
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const paperById = new Map(realm.papers.map((paper) => [paper.id, paper]));
const referenceById = new Map(references.map((reference) => [reference.id, reference]));
const countryByIso3 = new Map(realm.countries.map((country) => [country.iso3, country]));
const mapIds = new Set(map.locations.map((location) => location.map_id));
check(map.locations.every((location) => typeof location.name === 'string' && location.name.trim()), 'one or more map locations lack a readable name');
check(map.locations.every((location) => typeof location.map_id === 'string' && location.map_id.trim() && location.map_id !== 'undefined'), 'one or more map locations lack a stable identifier');
check(mapIds.size === map.locations.length, 'world-map location identifiers are not unique');

check(realm.papers.length === 853, `expected 853 papers, found ${realm.papers.length}`);
check(new Set(realm.papers.map((paper) => paper.id)).size === 853, 'paper IDs are not unique');
check(realm.countries.length === 63, `expected 63 mapped countries, found ${realm.countries.length}`);
check(realm.collaborations.length === realm.metadata.collaboration_pair_count, 'collaboration-pair metadata is inconsistent');
check(realm.papers.every((paper) => referenceById.get(paper.id)?.title === paper.title), 'one or more paper titles do not match the References dataset');
check(realm.countries.every((country) => mapIds.has(country.map_id)), 'one or more mapped countries lack world-map geometry');
check(realm.collaborations.every((pair) => pair.a < pair.b && pair.a !== pair.b), 'collaboration pairs are not canonical unordered non-self pairs');

const expectedPairs = new Map();
for (const paper of realm.papers) {
  check(paper.countries.length === new Set(paper.countries).size, `paper ${paper.id} contains a duplicate country`);
  check(paper.country_codes.length === paper.countries.length, `paper ${paper.id} has inconsistent country codes`);
  check(Boolean(paper.title), `paper ${paper.id} has no title`);
  for (let first = 0; first < paper.country_codes.length; first += 1) {
    for (let second = first + 1; second < paper.country_codes.length; second += 1) {
      const [a, b] = [paper.country_codes[first], paper.country_codes[second]].sort();
      const key = `${a}--${b}`;
      expectedPairs.set(key, [...(expectedPairs.get(key) || []), paper.id]);
    }
  }
}

check(expectedPairs.size === realm.collaborations.length, `expected ${expectedPairs.size} collaboration pairs, found ${realm.collaborations.length}`);
for (const pair of realm.collaborations) {
  const key = `${pair.a}--${pair.b}`;
  const expected = expectedPairs.get(key) || [];
  check(JSON.stringify(pair.paper_ids) === JSON.stringify(expected), `${key} has incorrect paper IDs`);
  check(new Set(pair.paper_ids).size === pair.paper_ids.length, `${key} contains a duplicate paper ID`);
  check(pair.paper_ids.every((id) => {
    const paper = paperById.get(id);
    return paper?.country_codes.includes(pair.a) && paper.country_codes.includes(pair.b);
  }), `${key} contains a paper without both countries`);
}

for (const country of realm.countries) {
  const expected = realm.papers.filter((paper) => paper.country_codes.includes(country.iso3)).map((paper) => paper.id);
  const national = realm.papers.filter((paper) => paper.country_codes.length === 1 && paper.country_codes[0] === country.iso3).map((paper) => paper.id);
  const international = expected.filter((id) => paperById.get(id).country_codes.length >= 2);
  check(JSON.stringify(country.paper_ids) === JSON.stringify(expected), `${country.name} total paper IDs are incorrect`);
  check(JSON.stringify(country.national_paper_ids) === JSON.stringify(national), `${country.name} national paper IDs are incorrect`);
  check(JSON.stringify(country.international_paper_ids) === JSON.stringify(international), `${country.name} international paper IDs are incorrect`);
}

for (const year of ['all', ...realm.metadata.years]) {
  const papers = realm.papers.filter((paper) => year === 'all' || paper.year === year);
  const activePairs = realm.collaborations.filter((pair) => pair.paper_ids.some((id) => year === 'all' || paperById.get(id).year === year));
  const international = papers.filter((paper) => paper.countries.length >= 2);
  check(papers.length > 0, `year filter ${year} unexpectedly has no papers`);
  check(international.every((paper) => paper.country_codes.length >= 2), `year filter ${year} misclassifies an international paper`);
  check(activePairs.every((pair) => pair.a !== pair.b), `year filter ${year} contains a self pair`);
}

check(/^\.\.\/references\/\?q=\{id\}#ref=\{id\}$/.test(realm.metadata.reference_url_pattern), 'reference URL pattern does not match the live References deep-link convention');
check(realm.validation.unmatched_title_ids.length === 0, 'unmatched title IDs were reported');

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join('\n'));
  process.exit(1);
}

console.log(JSON.stringify({
  status: 'passed',
  papers: realm.papers.length,
  countries: realm.countries.length,
  years_tested: realm.metadata.years.length + 1,
  collaboration_pairs: realm.collaborations.length,
  reference_titles_matched: realm.papers.length,
  map_geometries: map.locations.length
}, null, 2));
