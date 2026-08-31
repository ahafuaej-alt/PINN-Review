import { buildAll, inferVenueType, readJson, writeJsonAtomic } from './lib/dataset-core.mjs';

const references = readJson('data/references.json');
const realm = readJson('data/pinn-realm.json');
const realmPaperById = new Map(realm.papers.map((paper) => [paper.id, paper]));
const date = '2026-07-22';

const papers = references.map((reference) => {
  const realmPaper = realmPaperById.get(reference.id);
  if (!realmPaper) throw new Error(`Reference ${reference.id} has no PINN Realm record`);
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
    provenance: {
      bibliography_source: '38_1_10_references.docx',
      geography_source: 'papers-countries-and-year.md',
      evidence_url: reference.publisher_url,
      note: 'Publication year is canonical from References; country associations are migrated from PINN Realm.'
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
      publication_year_source: 'paper.year'
    }
  },
  papers
};

const countryMapping = realm.country_name_mapping;
const generated = buildAll(master, countryMapping);
if (JSON.stringify(generated.references) !== JSON.stringify(references)) throw new Error('Migration would alter the published References dataset');
if (!generated.realm.papers.every((paper) => paper.year === papers.find((record) => record.id === paper.id).year)) throw new Error('Migration did not preserve canonical publication years in PINN Realm');

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
      canonical_publication_years: papers.length
    }
  }]
});

console.log(JSON.stringify({
  status: 'created',
  records: papers.length,
  country_names: Object.keys(countryMapping).length,
  canonical_publication_years: papers.length,
  references_preserved: true,
  realm_countries_preserved: true
}, null, 2));
