import { buildAll, inferVenueType, readJson, writeJsonAtomic } from './lib/dataset-core.mjs';

const references = readJson('data/references.json');
const realm = readJson('data/pinn-realm.json');
const realmPaperById = new Map(realm.papers.map((paper) => [paper.id, paper]));
const date = '2026-07-22';

const papers = references.map((reference) => {
  const realmPaper = realmPaperById.get(reference.id);
  if (!realmPaper) throw new Error(`Reference ${reference.id} has no PINN Realm record`);
  const realmYearDiffers = realmPaper.year !== reference.year;
  return {
    id: reference.id,
    title: reference.title,
    citation: reference.citation,
    doi: reference.doi,
    publisher_url: reference.publisher_url,
    venue: {
      name: reference.venue || 'Venue not identified',
      type: inferVenueType(reference.venue)
    },
    year: reference.year,
    access: reference.access || 'Not verified',
    countries: [...realmPaper.countries],
    ...(realmYearDiffers ? { overrides: { realm_year: realmPaper.year } } : {}),
    provenance: {
      bibliography_source: '38_1_10_references.docx',
      geography_source: 'papers-countries-and-year.md',
      evidence_url: reference.publisher_url,
      note: realmYearDiffers ? 'Legacy bibliography and country/year sources disagree; preserved without choosing between them.' : null
    },
    last_updated: date
  };
});

const master = {
  $schema: './papers-master.schema.json',
  metadata: {
    title: 'PINN Review Atlas canonical paper dataset',
    schema_version: '1.0.0',
    dataset_version: '2.0.0',
    last_updated: date,
    record_count: papers.length,
    id_range: `1-${papers.length}`,
    sources: {
      bibliography: '38_1_10_references.docx',
      countries: 'papers-countries-and-year.md',
      abbreviations: 'Reference_PINN_Abbreviations.txt'
    },
    maintenance: {
      stable_key: 'id',
      generator: 'scripts/build-datasets.mjs',
      validator: 'scripts/validate-dataset.mjs',
      update_command: 'node scripts/apply-paper-update.mjs update.json',
      legacy_realm_year_override_count: papers.filter((paper) => paper.overrides?.realm_year !== undefined).length
    }
  },
  papers
};

const countryMapping = realm.country_name_mapping;
const generated = buildAll(master, countryMapping);
if (JSON.stringify(generated.references) !== JSON.stringify(references)) throw new Error('Migration would alter the published References dataset');
if (JSON.stringify(generated.realm.papers) !== JSON.stringify(realm.papers)) throw new Error('Migration would alter published PINN Realm paper records');

writeJsonAtomic('data/country-mapping.json', countryMapping);
writeJsonAtomic('data/papers-master.json', master);
writeJsonAtomic('data/changes.json', {
  schema_version: '1.0.0',
  changes: [{
    change_id: 'migration-2026-07-22',
    version: '2.0.0',
    date,
    paper_id: null,
    changed_fields: ['data architecture'],
    reason: 'Created one canonical paper register and deterministic derived-data pipeline.',
    evidence: { url: null, note: 'Migration preserves every published reference and PINN Realm paper record.' },
    impact: {
      references_changed: 0,
      realm_papers_changed: 0,
      legacy_year_overrides_preserved: papers.filter((paper) => paper.overrides?.realm_year !== undefined).length
    }
  }]
});

console.log(JSON.stringify({
  status: 'created',
  records: papers.length,
  country_names: Object.keys(countryMapping).length,
  legacy_realm_year_overrides: papers.filter((paper) => paper.overrides?.realm_year !== undefined).length,
  references_preserved: true,
  realm_papers_preserved: true
}, null, 2));
