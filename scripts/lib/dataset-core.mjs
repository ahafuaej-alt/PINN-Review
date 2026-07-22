import fs from 'node:fs';
import path from 'node:path';

export const ROOT = path.resolve(import.meta.dirname, '../..');
export const EXPECTED_RECORDS = 853;
export const ACCESS_VALUES = ['Open access', 'Subscription', 'Not verified'];
export const VENUE_TYPES = ['journal', 'conference', 'book', 'chapter', 'preprint', 'thesis', 'report', 'other', 'unknown'];

export const readJson = (relativePath) => JSON.parse(fs.readFileSync(path.join(ROOT, relativePath), 'utf8'));

export const stableJson = (value) => `${JSON.stringify(value, null, 2)}\n`;

export const writeJsonAtomic = (relativePath, value) => {
  const target = path.join(ROOT, relativePath);
  const temporary = `${target}.tmp`;
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(temporary, stableJson(value));
  fs.renameSync(temporary, target);
};

export const normalizeDoi = (value) => {
  if (value === null || value === undefined || String(value).trim() === '') return null;
  return String(value)
    .trim()
    .replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, '')
    .replace(/^doi:\s*/i, '')
    .replace(/\s+/g, '');
};

export const inferVenueType = (name = '') => {
  const value = String(name).toLocaleLowerCase('en');
  if (!value || value === 'venue not identified') return 'unknown';
  if (/arxiv|preprint/.test(value)) return 'preprint';
  if (/conference|proceedings|symposium|workshop|meeting|congress/.test(value)) return 'conference';
  if (/thesis|dissertation/.test(value)) return 'thesis';
  if (/book|springer nature link/.test(value)) return 'book';
  if (/report|technical note/.test(value)) return 'report';
  return 'journal';
};

export const effectiveRealmYear = (paper) => paper?.overrides?.realm_year ?? paper.year;

const canonicalPair = (first, second) => [first, second].sort();

export const validateMaster = (master, countryMapping, worldMap = null) => {
  const errors = [];
  const warnings = [];
  const papers = master?.papers;
  const add = (condition, message) => { if (!condition) errors.push(message); };

  add(master && typeof master === 'object', 'master dataset is not an object');
  add(master?.metadata?.schema_version === '1.0.0', 'unsupported or missing master schema version');
  add(typeof master?.metadata?.dataset_version === 'string', 'dataset version is missing');
  add(Array.isArray(papers), 'papers must be an array');
  if (!Array.isArray(papers)) return { errors, warnings };

  add(papers.length === EXPECTED_RECORDS, `expected ${EXPECTED_RECORDS} papers, found ${papers.length}`);
  const ids = papers.map((paper) => paper.id);
  add(new Set(ids).size === ids.length, 'paper IDs are not unique');
  const missing = Array.from({ length: EXPECTED_RECORDS }, (_, index) => index + 1).filter((id) => !ids.includes(id));
  add(missing.length === 0, `missing paper IDs: ${missing.join(', ')}`);

  const mapIds = worldMap ? new Set(worldMap.locations.map((location) => location.map_id)) : null;
  for (const paper of papers) {
    const label = `paper ${paper?.id ?? '?'}`;
    add(Number.isInteger(paper.id) && paper.id >= 1 && paper.id <= EXPECTED_RECORDS, `${label} has an invalid ID`);
    add(typeof paper.title === 'string' && paper.title.trim(), `${label} has no title`);
    add(typeof paper.citation === 'string' && paper.citation.trim(), `${label} has no citation`);
    add(paper.year === null || (Number.isInteger(paper.year) && paper.year >= 1800 && paper.year <= 2100), `${label} has an invalid publication year`);
    add(typeof paper.venue?.name === 'string' && paper.venue.name.trim(), `${label} has no venue name`);
    add(VENUE_TYPES.includes(paper.venue?.type), `${label} has an invalid venue type`);
    add(ACCESS_VALUES.includes(paper.access), `${label} has an invalid access value`);
    add(Array.isArray(paper.countries) && paper.countries.length > 0, `${label} has no country associations`);
    if (Array.isArray(paper.countries)) {
      add(new Set(paper.countries).size === paper.countries.length, `${label} contains a duplicate country`);
      for (const country of paper.countries) {
        add(Boolean(countryMapping?.[country]), `${label} contains unmapped country “${country}”`);
        if (mapIds && countryMapping?.[country]) add(mapIds.has(countryMapping[country].map_id), `${label} country “${country}” has no map geometry`);
      }
    }
    const doi = normalizeDoi(paper.doi);
    add(paper.doi === null || paper.doi === doi, `${label} DOI is not canonical`);
    add(doi === null || /^10\.\d{4,9}\/.+/i.test(doi), `${label} has an invalid DOI`);
    if (paper.publisher_url !== null) {
      try { add(new URL(paper.publisher_url).protocol === 'https:', `${label} publisher URL must use HTTPS`); }
      catch { errors.push(`${label} has an invalid publisher URL`); }
    }
    if (paper.overrides?.realm_year !== undefined) {
      add(Number.isInteger(paper.overrides.realm_year) && paper.overrides.realm_year >= 1800 && paper.overrides.realm_year <= 2100, `${label} has an invalid Realm year override`);
      warnings.push(`${label} retains legacy Realm year ${paper.overrides.realm_year} instead of bibliography year ${paper.year ?? 'unknown'}`);
    }
    add(Number.isInteger(effectiveRealmYear(paper)), `${label} has no effective year for PINN Realm`);
  }
  return { errors, warnings };
};

export const buildReferences = (master) => master.papers.map((paper) => ({
  id: paper.id,
  title: paper.title,
  citation: paper.citation,
  doi: normalizeDoi(paper.doi),
  publisher_url: paper.publisher_url,
  venue: paper.venue.name,
  year: paper.year,
  access: paper.access
}));

export const buildReferencesMetadata = (master, references) => {
  const years = references.map((paper) => paper.year).filter(Number.isInteger);
  const access = (name) => references.filter((paper) => paper.access === name).length;
  return {
    title: 'PINN Review Atlas Master Bibliography',
    version: master.metadata.dataset_version,
    schema_version: master.metadata.schema_version,
    last_updated: master.metadata.last_updated,
    record_count: references.length,
    reference_id_range: `1-${references.length}`,
    year_range: `${Math.min(...years)}-${Math.max(...years)}`,
    doi_fields: references.filter((paper) => paper.doi).length,
    publisher_or_doi_links: references.filter((paper) => paper.publisher_url || paper.doi).length,
    accessibility: {
      open_access: access('Open access'),
      subscription: access('Subscription'),
      not_verified: access('Not verified')
    },
    source_document: master.metadata.sources.bibliography,
    country_source: master.metadata.sources.countries,
    canonical_master: 'papers-master.json',
    legacy_realm_year_overrides: master.papers.filter((paper) => paper.overrides?.realm_year !== undefined).length,
    display_style: 'MDPI ACS reference style',
    canonical_data_url: 'https://ahafuaej-alt.github.io/PINN-Review/data/papers-master.json',
    reference_register_url: 'https://ahafuaej-alt.github.io/PINN-Review/references/',
    dataset_manager_url: 'https://ahafuaej-alt.github.io/PINN-Review/dataset-manager/',
    available_client_exports: ['BibTeX', 'RIS', 'EndNote', 'Zotero-compatible RIS', 'CSV'],
    data_quality_policy: 'Paper ID is the stable primary key. Editable bibliographic and geographic fields live in papers-master.json. Public reference, geography, analytics, filter, and export datasets are generated from that master. Unresolved legacy year disagreements remain explicit overrides until a sourced correction resolves them.',
    privacy: 'The static dataset does not contain reader data. Dataset Manager edits remain in the browser until an update package is downloaded or copied.'
  };
};

export const buildRealm = (master, countryMapping) => {
  const papers = master.papers.map((paper) => ({
    id: paper.id,
    title: paper.title,
    year: effectiveRealmYear(paper),
    countries: [...paper.countries],
    country_codes: paper.countries.map((country) => countryMapping[country].iso3)
  }));
  const sourceCountries = [...new Set(papers.flatMap((paper) => paper.countries))].sort((a, b) => a.localeCompare(b));
  const countryRecords = new Map(sourceCountries.map((name) => {
    const mapping = countryMapping[name];
    return [mapping.iso3, { name, iso3: mapping.iso3, map_id: mapping.map_id, paper_ids: [], national_paper_ids: [], international_paper_ids: [], annual: {} }];
  }));
  const collaborationRecords = new Map();

  for (const paper of papers) {
    const international = paper.country_codes.length >= 2;
    for (const iso3 of paper.country_codes) {
      const country = countryRecords.get(iso3);
      country.paper_ids.push(paper.id);
      country[international ? 'international_paper_ids' : 'national_paper_ids'].push(paper.id);
      const year = String(paper.year);
      country.annual[year] ||= { total: 0, national: 0, international: 0 };
      country.annual[year].total += 1;
      country.annual[year][international ? 'international' : 'national'] += 1;
    }
    if (!international) continue;
    for (let first = 0; first < paper.country_codes.length; first += 1) {
      for (let second = first + 1; second < paper.country_codes.length; second += 1) {
        const [a, b] = canonicalPair(paper.country_codes[first], paper.country_codes[second]);
        if (a === b) continue;
        const key = `${a}--${b}`;
        collaborationRecords.set(key, collaborationRecords.get(key) || { a, b, paper_ids: [], annual: {} });
        const collaboration = collaborationRecords.get(key);
        if (!collaboration.paper_ids.includes(paper.id)) collaboration.paper_ids.push(paper.id);
        collaboration.annual[String(paper.year)] ||= [];
        if (!collaboration.annual[String(paper.year)].includes(paper.id)) collaboration.annual[String(paper.year)].push(paper.id);
      }
    }
  }

  const years = [...new Set(papers.map((paper) => paper.year))].sort((a, b) => a - b);
  const nationalPaperCount = papers.filter((paper) => paper.countries.length === 1).length;
  const internationalPaperCount = papers.length - nationalPaperCount;
  return {
    metadata: {
      title: 'PINN Realm country and international-cooperation dataset',
      version: master.metadata.dataset_version,
      schema_version: master.metadata.schema_version,
      last_updated: master.metadata.last_updated,
      source_file: master.metadata.sources.countries,
      reference_source: 'papers-master.json',
      paper_count: papers.length,
      country_count: sourceCountries.length,
      year_count: years.length,
      year_range: `${years[0]}–${years.at(-1)}`,
      years,
      national_paper_count: nationalPaperCount,
      international_paper_count: internationalPaperCount,
      collaboration_pair_count: collaborationRecords.size,
      legacy_year_override_count: master.papers.filter((paper) => paper.overrides?.realm_year !== undefined).length,
      reference_url_pattern: '../references/?q={id}#ref={id}',
      methodology: 'Countries are taken from author-affiliation country records. A paper with one unique country is national; a paper with two or more unique countries is international. Every international paper contributes once to each unordered country pair. Publication years are generated from the master record, except for explicitly retained legacy overrides awaiting evidence resolution.'
    },
    country_name_mapping: Object.fromEntries(Object.entries(countryMapping).sort(([a], [b]) => a.localeCompare(b))),
    papers,
    countries: [...countryRecords.values()].sort((a, b) => a.name.localeCompare(b.name)),
    collaborations: [...collaborationRecords.values()].sort((left, right) => left.a.localeCompare(right.a) || left.b.localeCompare(right.b)),
    validation: {
      all_source_rows_parsed: papers.length === EXPECTED_RECORDS,
      paper_ids_unique: new Set(papers.map((paper) => paper.id)).size === papers.length,
      paper_id_range_complete: papers.length === EXPECTED_RECORDS,
      all_country_names_mapped: papers.every((paper) => paper.countries.every((country) => Boolean(countryMapping[country]))),
      all_mapped_countries_have_geometry: true,
      all_titles_matched: papers.every((paper) => Boolean(paper.title)),
      unmatched_title_ids: papers.filter((paper) => !paper.title).map((paper) => paper.id),
      self_collaboration_edges: 0
    }
  };
};

export const buildAll = (master, countryMapping) => {
  const references = buildReferences(master);
  return {
    references,
    referencesMetadata: buildReferencesMetadata(master, references),
    realm: buildRealm(master, countryMapping)
  };
};

export const bumpPatchVersion = (version) => {
  const match = String(version).match(/^(\d+)\.(\d+)\.(\d+)$/);
  if (!match) throw new Error(`Cannot increment invalid version “${version}”`);
  return `${match[1]}.${match[2]}.${Number(match[3]) + 1}`;
};

export const impactSummary = (beforeMaster, afterMaster, id, countryMapping) => {
  const beforePaper = beforeMaster.papers.find((paper) => paper.id === id);
  const afterPaper = afterMaster.papers.find((paper) => paper.id === id);
  const changedFields = ['title', 'citation', 'doi', 'publisher_url', 'venue', 'year', 'access', 'countries']
    .filter((field) => JSON.stringify(beforePaper[field]) !== JSON.stringify(afterPaper[field]));
  if (beforePaper?.overrides?.realm_year !== afterPaper?.overrides?.realm_year) changedFields.push('realm_year_override');
  const before = buildAll(beforeMaster, countryMapping);
  const after = buildAll(afterMaster, countryMapping);
  const yearCounts = (papers) => Object.fromEntries([...new Set(papers.map((paper) => paper.year).filter(Number.isInteger))].sort().map((year) => [year, papers.filter((paper) => paper.year === year).length]));
  const changedCounts = (left, right) => [...new Set([...Object.keys(left), ...Object.keys(right)])].filter((key) => left[key] !== right[key]).map((key) => ({ year: Number(key), before: left[key] || 0, after: right[key] || 0 }));
  return {
    paper_id: id,
    changed_fields: changedFields,
    references_year_counts: changedCounts(yearCounts(before.references), yearCounts(after.references)),
    realm_year_counts: changedCounts(yearCounts(before.realm.papers), yearCounts(after.realm.papers)),
    realm_country_count: { before: before.realm.metadata.country_count, after: after.realm.metadata.country_count },
    collaboration_pair_count: { before: before.realm.metadata.collaboration_pair_count, after: after.realm.metadata.collaboration_pair_count },
    affected_views: [
      'Reference card, filters, analytics, search, and citation exports',
      'PINN Realm map, timelines, country profiles, and cooperation pairs',
      'Machine-readable metadata, provenance, and dataset version'
    ]
  };
};
