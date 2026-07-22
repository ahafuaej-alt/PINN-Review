import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { ROOT, buildAll, readJson, stableJson, validateMaster, writeJsonAtomic } from './lib/dataset-core.mjs';

const outputs = {
  references: 'data/references.json',
  referencesMetadata: 'data/references-metadata.json',
  realm: 'data/pinn-realm.json'
};

export const generateDatasets = ({ check = false } = {}) => {
  const master = readJson('data/papers-master.json');
  const countryMapping = readJson('data/country-mapping.json');
  const worldMap = readJson('data/world-map.json');
  const validation = validateMaster(master, countryMapping, worldMap);
  if (validation.errors.length) throw new Error(validation.errors.join('\n'));
  const generated = buildAll(master, countryMapping);
  const stale = [];
  for (const [key, relativePath] of Object.entries(outputs)) {
    const expected = stableJson(generated[key]);
    const target = path.join(ROOT, relativePath);
    const current = fs.existsSync(target) ? fs.readFileSync(target, 'utf8') : '';
    if (current !== expected) stale.push(relativePath);
    if (!check) writeJsonAtomic(relativePath, generated[key]);
  }
  if (check && stale.length) throw new Error(`generated datasets are stale: ${stale.join(', ')}`);
  return {
    status: check ? 'current' : 'generated',
    version: master.metadata.dataset_version,
    records: master.papers.length,
    countries: generated.realm.metadata.country_count,
    years: generated.realm.metadata.year_count,
    collaboration_pairs: generated.realm.metadata.collaboration_pair_count,
    legacy_realm_year_overrides: validation.warnings.length,
    outputs: Object.values(outputs)
  };
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try { console.log(JSON.stringify(generateDatasets({ check: process.argv.includes('--check') }), null, 2)); }
  catch (error) { console.error(`Dataset build failed:\n${error.message}`); process.exit(1); }
}
