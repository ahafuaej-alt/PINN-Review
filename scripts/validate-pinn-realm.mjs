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
const mainLandmassAnchor = (pathData) => {
  const pointMarker = String(pathData || '').match(/^M(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)[ma]/);
  if (pointMarker) return { x: Number(pointMarker[1]), y: Number(pointMarker[2]) };
  const subpaths = String(pathData || '').match(/M[^M]+/g) || [];
  let best = null;
  for (const subpath of subpaths) {
    const coordinates = [...subpath.matchAll(/-?\d+(?:\.\d+)?/g)].map((match) => Number(match[0]));
    if (coordinates.length < 4 || coordinates.length % 2) continue;
    const xs = [];
    const ys = [];
    for (let position = 0; position < coordinates.length; position += 2) {
      xs.push(coordinates[position]);
      ys.push(coordinates[position + 1]);
    }
    const minimumX = Math.min(...xs);
    const maximumX = Math.max(...xs);
    const minimumY = Math.min(...ys);
    const maximumY = Math.max(...ys);
    const area = (maximumX - minimumX) * (maximumY - minimumY);
    if (!best || area > best.area) best = { area, x: (minimumX + maximumX) / 2, y: (minimumY + maximumY) / 2 };
  }
  return best ? { x: best.x, y: best.y } : null;
};
const anchors = new Map(map.locations.map((location) => [location.map_id, mainLandmassAnchor(location.path)]));
check(map.locations.every((location) => typeof location.name === 'string' && location.name.trim()), 'one or more map locations lack a readable name');
check(map.locations.every((location) => typeof location.map_id === 'string' && location.map_id.trim() && location.map_id !== 'undefined'), 'one or more map locations lack a stable identifier');
check(mapIds.size === map.locations.length, 'world-map location identifiers are not unique');
check([...anchors.values()].every((anchor) => anchor && Number.isFinite(anchor.x) && Number.isFinite(anchor.y) && anchor.x >= 0 && anchor.x <= 1000 && anchor.y >= 0 && anchor.y <= 530), 'one or more collaboration anchors are invalid or outside the map view box');
check(anchors.get('250')?.x > 480 && anchors.get('250')?.y < 150, 'France collaboration anchor is not on metropolitan France');
check(anchors.get('643')?.x > 600, 'Russia collaboration anchor is not on the main Eurasian landmass');

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
  for (const year of realm.metadata.years) {
    const annual = country.annual[String(year)] || { total: 0, national: 0, international: 0 };
    const expectedAnnual = expected.filter((id) => paperById.get(id).year === year);
    const expectedNational = national.filter((id) => paperById.get(id).year === year);
    const expectedInternational = international.filter((id) => paperById.get(id).year === year);
    check(annual.total === expectedAnnual.length, `${country.name} has an incorrect total for ${year}`);
    check(annual.national === expectedNational.length, `${country.name} has an incorrect national total for ${year}`);
    check(annual.international === expectedInternational.length, `${country.name} has an incorrect international total for ${year}`);
  }
}

check(realm.metadata.years.reduce((sum, year) => sum + realm.papers.filter((paper) => paper.year === year).length, 0) === 853, 'annual publication totals do not sum to 853');
check(realm.metadata.years.reduce((sum, year) => sum + realm.papers.filter((paper) => paper.year === year && paper.countries.length >= 2).length, 0) === realm.metadata.international_paper_count, 'annual international totals do not match metadata');

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
