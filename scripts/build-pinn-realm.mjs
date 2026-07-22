import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const ROOT = path.resolve(import.meta.dirname, '..');
const SOURCE_PATH = path.resolve(ROOT, process.argv[2] || 'data/sources/papers-countries-and-year.md');
const REFERENCES_PATH = path.resolve(ROOT, 'data/references.json');
const MAP_PATH = path.resolve(ROOT, 'data/world-map.json');
const OUTPUT_PATH = path.resolve(ROOT, 'data/pinn-realm.json');

// This is the explicit normalization layer between the standardized source
// vocabulary, ISO 3166-1 alpha-3, and the alpha-2 identifiers in the SVG map.
const COUNTRY_MAPPING = {
  'Australia': { iso3: 'AUS', map_id: '036' },
  'Austria': { iso3: 'AUT', map_id: '040' },
  'Belarus': { iso3: 'BLR', map_id: '112' },
  'Belgium': { iso3: 'BEL', map_id: '056' },
  'Brazil': { iso3: 'BRA', map_id: '076' },
  'Brunei': { iso3: 'BRN', map_id: '096' },
  'Bulgaria': { iso3: 'BGR', map_id: '100' },
  'Canada': { iso3: 'CAN', map_id: '124' },
  'Chile': { iso3: 'CHL', map_id: '152' },
  'China': { iso3: 'CHN', map_id: '156' },
  'Colombia': { iso3: 'COL', map_id: '170' },
  'Cuba': { iso3: 'CUB', map_id: '192' },
  'Cyprus': { iso3: 'CYP', map_id: '196' },
  'Czech': { iso3: 'CZE', map_id: '203' },
  'Denmark': { iso3: 'DNK', map_id: '208' },
  'Egypt': { iso3: 'EGY', map_id: '818' },
  'Estonia': { iso3: 'EST', map_id: '233' },
  'Finland': { iso3: 'FIN', map_id: '246' },
  'France': { iso3: 'FRA', map_id: '250' },
  'Germany': { iso3: 'DEU', map_id: '276' },
  'Greece': { iso3: 'GRC', map_id: '300' },
  'Hungary': { iso3: 'HUN', map_id: '348' },
  'India': { iso3: 'IND', map_id: '356' },
  'Iran': { iso3: 'IRN', map_id: '364' },
  'Iraq': { iso3: 'IRQ', map_id: '368' },
  'Ireland': { iso3: 'IRL', map_id: '372' },
  'Israel': { iso3: 'ISR', map_id: '376' },
  'Italy': { iso3: 'ITA', map_id: '380' },
  'Japan': { iso3: 'JPN', map_id: '392' },
  'Kazakhstan': { iso3: 'KAZ', map_id: '398' },
  'Lithuania': { iso3: 'LTU', map_id: '440' },
  'Malaysia': { iso3: 'MYS', map_id: '458' },
  'Mexico': { iso3: 'MEX', map_id: '484' },
  'Morocco': { iso3: 'MAR', map_id: '504' },
  'Netherlands': { iso3: 'NLD', map_id: '528' },
  'New Zealand': { iso3: 'NZL', map_id: '554' },
  'Norway': { iso3: 'NOR', map_id: '578' },
  'Pakistan': { iso3: 'PAK', map_id: '586' },
  'Peru': { iso3: 'PER', map_id: '604' },
  'Philippines': { iso3: 'PHL', map_id: '608' },
  'Poland': { iso3: 'POL', map_id: '616' },
  'Portugal': { iso3: 'PRT', map_id: '620' },
  'Qatar': { iso3: 'QAT', map_id: '634' },
  'Romania': { iso3: 'ROU', map_id: '642' },
  'Russian Federation': { iso3: 'RUS', map_id: '643' },
  'Saudi Arabia': { iso3: 'SAU', map_id: '682' },
  'Serbia': { iso3: 'SRB', map_id: '688' },
  'Singapore': { iso3: 'SGP', map_id: '702' },
  'South Africa': { iso3: 'ZAF', map_id: '710' },
  'South Korea': { iso3: 'KOR', map_id: '410' },
  'Spain': { iso3: 'ESP', map_id: '724' },
  'Sweden': { iso3: 'SWE', map_id: '752' },
  'Switzerland': { iso3: 'CHE', map_id: '756' },
  'Taiwan': { iso3: 'TWN', map_id: '158' },
  'Tanzania': { iso3: 'TZA', map_id: '834' },
  'Thailand': { iso3: 'THA', map_id: '764' },
  'Tunisia': { iso3: 'TUN', map_id: '788' },
  'Türkiye': { iso3: 'TUR', map_id: '792' },
  'Ukraine': { iso3: 'UKR', map_id: '804' },
  'United Arab Emirates': { iso3: 'ARE', map_id: '784' },
  'United Kingdom': { iso3: 'GBR', map_id: '826' },
  'United States': { iso3: 'USA', map_id: '840' },
  'Vietnam': { iso3: 'VNM', map_id: '704' }
};

const fail = (message) => {
  console.error(`PINN Realm build failed: ${message}`);
  process.exit(1);
};

const parseSource = (markdown) => {
  const rows = [];
  for (const line of markdown.split(/\r?\n/)) {
    const match = line.match(/^\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|\s*(\d{4})\s*\|\s*$/);
    if (!match) continue;
    rows.push({
      id: Number(match[1]),
      countries: [...new Set(match[2].split(',').map((country) => country.trim()).filter(Boolean))],
      year: Number(match[3])
    });
  }
  return rows;
};

const sourceRows = parseSource(fs.readFileSync(SOURCE_PATH, 'utf8'));
const references = JSON.parse(fs.readFileSync(REFERENCES_PATH, 'utf8'));
const worldMap = JSON.parse(fs.readFileSync(MAP_PATH, 'utf8'));
const referenceById = new Map(references.map((reference) => [Number(reference.id), reference]));
const sourceIds = new Set(sourceRows.map((row) => row.id));
const sourceCountries = [...new Set(sourceRows.flatMap((row) => row.countries))].sort((a, b) => a.localeCompare(b));
const mapIds = new Set(worldMap.locations.map((location) => location.map_id));

if (sourceRows.length !== 853) fail(`expected 853 table rows, found ${sourceRows.length}`);
if (sourceIds.size !== sourceRows.length) fail('paper IDs are not unique');
const missingIds = Array.from({ length: 853 }, (_, index) => index + 1).filter((id) => !sourceIds.has(id));
if (missingIds.length) fail(`missing paper IDs: ${missingIds.join(', ')}`);
const missingMappings = sourceCountries.filter((country) => !COUNTRY_MAPPING[country]);
if (missingMappings.length) fail(`unmapped country names: ${missingMappings.join(', ')}`);
const missingMapShapes = sourceCountries.filter((country) => !mapIds.has(COUNTRY_MAPPING[country].map_id));
if (missingMapShapes.length) fail(`countries without map geometry: ${missingMapShapes.join(', ')}`);
const unmatchedTitles = sourceRows.map((row) => row.id).filter((id) => !referenceById.get(id)?.title);
if (unmatchedTitles.length) fail(`paper IDs without matched titles: ${unmatchedTitles.join(', ')}`);

const papers = sourceRows
  .sort((a, b) => a.id - b.id)
  .map((row) => ({
    id: row.id,
    title: referenceById.get(row.id).title,
    year: row.year,
    countries: row.countries,
    country_codes: row.countries.map((country) => COUNTRY_MAPPING[country].iso3)
  }));

const countryRecords = new Map(sourceCountries.map((name) => {
  const mapping = COUNTRY_MAPPING[name];
  return [mapping.iso3, {
    name,
    iso3: mapping.iso3,
    map_id: mapping.map_id,
    paper_ids: [],
    national_paper_ids: [],
    international_paper_ids: [],
    annual: {}
  }];
}));

const collaborationRecords = new Map();
for (const paper of papers) {
  const international = paper.country_codes.length >= 2;
  for (const iso3 of paper.country_codes) {
    const country = countryRecords.get(iso3);
    country.paper_ids.push(paper.id);
    (international ? country.international_paper_ids : country.national_paper_ids).push(paper.id);
    const year = String(paper.year);
    country.annual[year] ||= { total: 0, national: 0, international: 0 };
    country.annual[year].total += 1;
    country.annual[year][international ? 'international' : 'national'] += 1;
  }
  if (!international) continue;
  for (let first = 0; first < paper.country_codes.length; first += 1) {
    for (let second = first + 1; second < paper.country_codes.length; second += 1) {
      const [a, b] = [paper.country_codes[first], paper.country_codes[second]].sort();
      if (a === b) fail(`self-collaboration generated for paper ${paper.id}`);
      const key = `${a}--${b}`;
      collaborationRecords.set(key, collaborationRecords.get(key) || { a, b, paper_ids: [], annual: {} });
      const collaboration = collaborationRecords.get(key);
      if (!collaboration.paper_ids.includes(paper.id)) collaboration.paper_ids.push(paper.id);
      const year = String(paper.year);
      collaboration.annual[year] ||= [];
      if (!collaboration.annual[year].includes(paper.id)) collaboration.annual[year].push(paper.id);
    }
  }
}

const years = [...new Set(papers.map((paper) => paper.year))].sort((a, b) => a - b);
const nationalPaperCount = papers.filter((paper) => paper.countries.length === 1).length;
const internationalPaperCount = papers.length - nationalPaperCount;
const mappingOutput = Object.fromEntries(Object.entries(COUNTRY_MAPPING).sort(([a], [b]) => a.localeCompare(b)));

const output = {
  metadata: {
    title: 'PINN Realm country and international-cooperation dataset',
    version: '1.0.0',
    last_updated: '2026-07-22',
    source_file: path.basename(SOURCE_PATH),
    reference_source: path.basename(REFERENCES_PATH),
    paper_count: papers.length,
    country_count: sourceCountries.length,
    year_count: years.length,
    year_range: `${years[0]}–${years.at(-1)}`,
    years,
    national_paper_count: nationalPaperCount,
    international_paper_count: internationalPaperCount,
    collaboration_pair_count: collaborationRecords.size,
    reference_url_pattern: '../references/?q={id}#ref={id}',
    methodology: 'Countries are taken from author-affiliation country records. A paper with one unique country is national; a paper with two or more unique countries is international. Every international paper contributes once to each unordered country pair.'
  },
  country_name_mapping: mappingOutput,
  papers,
  countries: [...countryRecords.values()].sort((a, b) => a.name.localeCompare(b.name)),
  collaborations: [...collaborationRecords.values()].sort((left, right) => left.a.localeCompare(right.a) || left.b.localeCompare(right.b)),
  validation: {
    all_source_rows_parsed: sourceRows.length === 853,
    paper_ids_unique: sourceIds.size === sourceRows.length,
    paper_id_range_complete: missingIds.length === 0,
    all_country_names_mapped: missingMappings.length === 0,
    all_mapped_countries_have_geometry: missingMapShapes.length === 0,
    all_titles_matched: unmatchedTitles.length === 0,
    unmatched_title_ids: unmatchedTitles,
    self_collaboration_edges: 0
  }
};

fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(output)}\n`);
console.log(JSON.stringify({
  output: path.relative(ROOT, OUTPUT_PATH),
  papers: papers.length,
  countries: countryRecords.size,
  years: years.length,
  national_papers: nationalPaperCount,
  international_papers: internationalPaperCount,
  collaboration_pairs: collaborationRecords.size,
  unmatched_titles: unmatchedTitles
}, null, 2));
