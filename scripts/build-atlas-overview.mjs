import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = path.resolve(process.env.GITHUB_WORKSPACE || process.cwd());
const checkOnly = process.argv.includes('--check');

const readJson = async (relativePath) => JSON.parse(await fs.readFile(path.join(root, relativePath), 'utf8'));

const [references, realm, performance, optimizers, activations, ecosystem] = await Promise.all([
  readJson('data/references-metadata.json'),
  readJson('data/pinn-realm.json'),
  readJson('data/performance/performance-summary.json'),
  readJson('data/optimizers/optimizer-summary.json'),
  readJson('data/activation-functions/activation-summary.json'),
  readJson('data/pinn-ecosystem/pinn-ecosystem.json')
]);

const fail = (message) => { throw new Error(message); };
const requirePositiveInteger = (value, label) => {
  if (!Number.isInteger(value) || value <= 0) fail(`${label} must be a positive integer; got ${value}.`);
  return value;
};

const ecosystemVersionDate = (() => {
  const match = String(ecosystem.datasetVersion || '').match(/^(\d{4})\.(\d{2})\.(\d{2})/);
  return match ? `${match[1]}-${match[2]}-${match[3]}` : null;
})();
const dates = [
  references.last_updated,
  realm.metadata?.last_updated,
  performance.generated_at,
  ecosystemVersionDate
].filter((value) => /^\d{4}-\d{2}-\d{2}$/.test(String(value))).sort();

const overview = {
  schema_version: '1.0.0',
  last_source_update: dates.at(-1) || null,
  stats: {
    papers: requirePositiveInteger(references.record_count, 'Reference record count'),
    countries: requirePositiveInteger(realm.metadata?.country_count, 'PINN Realm country count'),
    performance_metrics: requirePositiveInteger(performance.taxonomy_metrics, 'Performance metric count'),
    optimizer_forms: requirePositiveInteger(optimizers.canonical_optimizer_forms, 'Canonical optimizer form count'),
    activation_functions: requirePositiveInteger(activations.canonical_activation_functions, 'Canonical activation-function count'),
    ecosystem_layers: requirePositiveInteger(ecosystem.stats?.layers, 'PINN Ecosystem layer count'),
    ecosystem_groups: requirePositiveInteger(ecosystem.stats?.groups, 'PINN Ecosystem group count')
  },
  versions: {
    references: references.version || null,
    pinn_realm: realm.metadata?.version || null,
    pinn_ecosystem: ecosystem.datasetVersion || null
  },
  generated_from: [
    'data/references-metadata.json',
    'data/pinn-realm.json',
    'data/performance/performance-summary.json',
    'data/optimizers/optimizer-summary.json',
    'data/activation-functions/activation-summary.json',
    'data/pinn-ecosystem/pinn-ecosystem.json'
  ]
};

if (overview.stats.papers !== realm.metadata?.paper_count) {
  fail(`Reference count ${overview.stats.papers} differs from PINN Realm paper count ${realm.metadata?.paper_count}.`);
}
if (overview.stats.papers !== performance.source_rows) {
  fail(`Reference count ${overview.stats.papers} differs from Performance Metrics source rows ${performance.source_rows}.`);
}
if (overview.stats.papers !== optimizers.source_rows) {
  fail(`Reference count ${overview.stats.papers} differs from Optimizer source rows ${optimizers.source_rows}.`);
}
if (overview.stats.papers !== activations.source_records) {
  fail(`Reference count ${overview.stats.papers} differs from Activation Function source records ${activations.source_records}.`);
}

const outputPath = path.join(root, 'data', 'atlas-overview.json');
const serialized = `${JSON.stringify(overview, null, 2)}\n`;

if (checkOnly) {
  let existing;
  try {
    existing = await fs.readFile(outputPath, 'utf8');
  } catch {
    fail('data/atlas-overview.json is missing. Run node scripts/build-atlas-overview.mjs.');
  }
  if (existing !== serialized) {
    fail('data/atlas-overview.json is stale. Run node scripts/build-atlas-overview.mjs and commit the result.');
  }
  console.log(`Atlas overview is current: ${overview.stats.papers} papers · ${overview.stats.countries} countries · ${overview.stats.performance_metrics} metrics.`);
} else {
  await fs.writeFile(outputPath, serialized);
  console.log(`Wrote ${path.relative(root, outputPath)}.`);
}
