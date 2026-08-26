import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const root = path.resolve(import.meta.dirname, '..');
const read = (file) => JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
const slug = (value = '') => String(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const unique = (values) => [...new Set(values.filter(Boolean))];
const normalize = (value = '') => String(value)
  .normalize('NFKD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/\\\(|\\\)|\\\[|\\\]/g, ' ')
  .replace(/\\mathrm\{([^}]*)\}/g, '$1')
  .replace(/\\text\{([^}]*)\}/g, '$1')
  .replace(/\\infty/g, ' infinity ')
  .replace(/∞/g, ' infinity ')
  .replace(/[₂2]/g, '2')
  .replace(/[₁1]/g, '1')
  .replace(/\broot[ -]?mean[ -]?square(?:d)?\b/gi, 'root mean square')
  .replace(/\bmean[ -]?square(?:d)?\b/gi, 'mean square')
  .replace(/\bl[ -]?infinity\b/gi, 'l infinity')
  .replace(/[–—‑−]/g, '-')
  .toLowerCase()
  .replace(/\([^)]{1,18}\)$/g, ' ')
  .replace(/[^a-z0-9]+/g, ' ')
  .trim()
  .replace(/\s+/g, ' ');

const genericTerms = new Set(['accuracy','adaptive','architecture','basis','bayesian','collocation','constraint','data','derivative','discrete','domain decomposition','error','evaluation','inverse','loss','metric','network','optimization','physics','residual','sampling','training','uncertainty']);
const safeTerms = (values) => unique(values.map(normalize)).filter((term) => term.length >= 3 && !genericTerms.has(term));
const tokenSet = (value) => new Set(normalize(value).split(' ').filter((token) => token.length > 1 && !['error','relative','field','global','accuracy','matched','computational','form','formulation','objective','representation','model','network','pinn','pinns','physics','informed'].includes(token)));
const similarity = (left, right) => {
  const a = tokenSet(left), b = tokenSet(right);
  if (!a.size || !b.size) return 0;
  const intersection = [...a].filter((token) => b.has(token)).length;
  return intersection / new Set([...a, ...b]).size;
};

const registry = read('data/concepts/registry.json');
const mappings = read('data/concepts/canonical-mappings.json');
const registryById = new Map(registry.concepts.map((concept) => [concept.id, concept]));
const decidedSources = new Set([...mappings.sameConcept, ...mappings.contextOnly].map((item) => `${item.source}|${item.target}`));
const separatePairs = new Set(mappings.keepSeparate.flatMap((item) => [`${item.left}|${item.right}`, `${item.right}|${item.left}`]));

const targetNamespaces = new Set(['metric','optimizer','activation','method','architecture','sampling']);
const curatedFormulationIds = new Set(['formulation:weak-form','formulation:variational-form']);
const targets = registry.concepts.filter((concept) => targetNamespaces.has(concept.id.split(':')[0]) || curatedFormulationIds.has(concept.id)).map((concept) => ({
  id: concept.id,
  label: concept.label,
  terms: safeTerms([concept.label, ...(concept.aliases || [])])
}));

const sources = [];
const formulationSources = [];
const formulationParts = read('data/mathematical-formulations/manifest.json').parts;
for (const part of formulationParts) for (const item of read(`data/mathematical-formulations/${part.file}`).formulations || []) {
  const record = { id: `formulation:${item.id.toLowerCase()}`, type: 'Mathematical Formulations', label: item.name, terms: safeTerms([item.name, ...(item.tags || [])]) };
  sources.push(record);
  formulationSources.push(record);
}

const ecosystemSources = [];
const ecosystem = read('data/pinn-ecosystem/pinn-ecosystem.json');
for (const group of ecosystem.groups || []) for (const subgroup of group.subgroups || []) for (const item of subgroup.items || []) {
  const record = { id: `ecosystem:${item.id}`, type: 'PINN Ecosystem', label: item.name, terms: safeTerms([item.name]) };
  sources.push(record);
  ecosystemSources.push(record);
}

const taxonomyBase64 = ['data/performance/metric-taxonomy.json.gz.b64.part1', 'data/performance/metric-taxonomy.json.gz.b64.part2']
  .map((file) => fs.readFileSync(path.join(root, file), 'utf8')).join('').replace(/\s+/g, '');
const metricTaxonomy = JSON.parse(zlib.gunzipSync(Buffer.from(taxonomyBase64, 'base64')));
const metricCanonicalSlug = (id) => ({ root_mean_squared_error:'rmse', mean_squared_error:'mse', mean_absolute_error:'mae', relative_l2_error:'relative-l2', coefficient_of_determination:'r2' }[id] || slug(id));
for (const item of metricTaxonomy.metrics || []) sources.push({
  id: `metric:${metricCanonicalSlug(item.metric_id)}`,
  type: 'Performance Metrics',
  label: item.metric_name,
  terms: safeTerms([item.metric_name, ...(item.aliases || [])])
});

const optimizerTaxonomy = read('data/optimizers/optimizer-taxonomy.json');
const optimizerCanonicalSlug = (id) => ({ l_bfgs:'lbfgs', l_bfgs_b:'lbfgsb' }[id] || slug(id));
for (const item of optimizerTaxonomy.optimizers || []) sources.push({
  id: `optimizer:${optimizerCanonicalSlug(item.optimizer_id)}`,
  type: 'Optimizers',
  label: item.optimizer_name,
  terms: safeTerms([item.optimizer_name, ...(item.aliases || [])])
});

const activationTaxonomy = read('data/activation-functions/activation-taxonomy.json');
for (const item of activationTaxonomy.activations || []) sources.push({
  id: `activation:${slug(item.activation_id)}`,
  type: 'Activation Functions',
  label: item.activation_name,
  terms: safeTerms([item.activation_name, ...(item.aliases || [])].filter((term) => String(term).length < 100))
});

const candidates = [];
for (const source of sources) {
  for (const target of targets) {
    if (source.id === target.id || separatePairs.has(`${source.id}|${target.id}`)) continue;
    const common = source.terms.filter((term) => target.terms.includes(term));
    if (!common.length) continue;
    const strongest = common.sort((a, b) => b.length - a.length)[0];
    const sourceLabel = normalize(source.label);
    const targetLabel = normalize(target.label);
    const labelMatch = sourceLabel === targetLabel;
    const strongAlias = strongest.length >= 5 && (sourceLabel === strongest || targetLabel === strongest);
    if (!labelMatch && !strongAlias) continue;
    candidates.push({ source: source.id, sourceType: source.type, sourceLabel: source.label, target: target.id, targetLabel: target.label, matchedTerm: strongest, confidence: labelMatch ? 'exact-label' : 'exact-alias' });
  }
}

const unresolved = candidates.filter((item) => !decidedSources.has(`${item.source}|${item.target}`));
const invalidDecisions = [];
const sameKeys = new Set();
const contextKeys = new Set();
for (const item of mappings.sameConcept) {
  const key = `${item.source}|${item.target}`;
  if (sameKeys.has(key)) invalidDecisions.push(`Duplicate same-concept mapping: ${item.source} -> ${item.target}`);
  sameKeys.add(key);
  if (!registryById.has(item.source)) invalidDecisions.push(`Unknown same-concept source: ${item.source}`);
  if (!registryById.has(item.target)) invalidDecisions.push(`Unknown same-concept target: ${item.target}`);
  if (separatePairs.has(key)) invalidDecisions.push(`Same-concept mapping contradicts keepSeparate policy: ${item.source} -> ${item.target}`);
}
for (const item of mappings.contextOnly) {
  const key = `${item.source}|${item.target}`;
  if (contextKeys.has(key)) invalidDecisions.push(`Duplicate contextual mapping: ${item.source} -> ${item.target}`);
  contextKeys.add(key);
  if (!registryById.has(item.source)) invalidDecisions.push(`Unknown contextual source: ${item.source}`);
  if (!registryById.has(item.target)) invalidDecisions.push(`Unknown contextual target: ${item.target}`);
  if (sameKeys.has(key)) invalidDecisions.push(`Mapping cannot be both same-concept and contextual: ${item.source} -> ${item.target}`);
}
for (const item of mappings.keepSeparate) {
  if (!registryById.has(item.left)) invalidDecisions.push(`Unknown keepSeparate concept: ${item.left}`);
  if (!registryById.has(item.right)) invalidDecisions.push(`Unknown keepSeparate concept: ${item.right}`);
}

console.log(`Canonical mapping audit: ${sources.length} source records, ${targets.length} canonical targets, ${candidates.length} high-confidence cross-record candidates.`);
console.log(`Reviewed mappings: ${mappings.sameConcept.length} same-concept, ${mappings.contextOnly.length} context-only, ${mappings.keepSeparate.length} explicit separations.`);
if (invalidDecisions.length) {
  console.error('\nInvalid mapping decisions:');
  invalidDecisions.forEach((message) => console.error(`- ${message}`));
}
if (unresolved.length) {
  console.log(`\nUNRESOLVED_HIGH_CONFIDENCE=${unresolved.length}`);
  unresolved.sort((a,b) => a.source.localeCompare(b.source) || a.target.localeCompare(b.target)).forEach((item) => console.log(JSON.stringify(item)));
} else {
  console.log('\nUNRESOLVED_HIGH_CONFIDENCE=0');
}

const evaluationFormulations = formulationSources.filter((source) => /^formulation:f(?:10[6-9]|11[0-4])$/.test(source.id));
const metricTargets = targets.filter((target) => target.id.startsWith('metric:'));
console.log('\nEVALUATION_METRIC_REVIEW');
for (const source of evaluationFormulations) {
  const ranked = metricTargets.map((target) => ({ id: target.id, label: target.label, score: similarity(source.label, target.label) }))
    .filter((item) => item.score > 0)
    .sort((a,b) => b.score - a.score)
    .slice(0,5);
  console.log(JSON.stringify({ source: source.id, label: source.label, candidates: ranked }));
}

console.log('\nFORMULATION_ECOSYSTEM_REVIEW');
for (const source of formulationSources) {
  const ranked = ecosystemSources.map((target) => ({ id: target.id, label: target.label, score: similarity(source.label, target.label) }))
    .filter((item) => item.score >= 0.45)
    .sort((a,b) => b.score - a.score)
    .slice(0,4);
  if (ranked.length) console.log(JSON.stringify({ source: source.id, label: source.label, candidates: ranked }));
}

if (process.argv.includes('--strict') && (invalidDecisions.length || unresolved.length)) process.exitCode = 1;
