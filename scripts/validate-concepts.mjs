import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const root = path.resolve(import.meta.dirname, '..');
const read = (file) => JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
const slug = (value = '') => String(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const registry = read('data/concepts/registry.json');
const core = read('data/concepts/core.json');
const evidence = read('data/concepts/evidence-relationships.json');
const mappings = read('data/concepts/canonical-mappings.json');
const paperMaster = read('data/papers-master.json');
const papers = new Set(paperMaster.papers.map((paper) => Number(paper.id ?? paper.paper_id)));
const failures = [];
const ids = new Set();
const registryById = new Map();
for (const concept of registry.concepts) {
  if (!/^[a-z][a-z0-9-]*:[a-z0-9][a-z0-9:-]*$/.test(concept.id)) failures.push(`Invalid canonical concept ID: ${concept.id}`);
  if (ids.has(concept.id)) failures.push(`Duplicate canonical concept ID: ${concept.id}`);
  ids.add(concept.id);
  registryById.set(concept.id, concept);
  if (!concept.label || !concept.shortMeaning) failures.push(`Concept lacks label or short meaning: ${concept.id}`);
  if (!concept.destinations?.length) failures.push(`Concept lacks a destination: ${concept.id}`);
  for (const destination of concept.destinations || []) if (/^\/?(?:https?:)?\/\//.test(destination.href) || destination.href.includes('..')) failures.push(`Non-canonical internal destination for ${concept.id}: ${destination.href}`);
}
for (const rule of registry.autoLink) if (!ids.has(rule.id)) failures.push(`Auto-link target is absent: ${rule.id}`);

const relationshipIds = new Set();
const relationKeys = new Set();
for (const relation of evidence.relationships) {
  if (relationshipIds.has(relation.id)) failures.push(`Duplicate evidence relationship ID: ${relation.id}`);
  relationshipIds.add(relation.id);
  if (!papers.has(relation.paperId)) failures.push(`Evidence relationship has unknown Reference ID [${relation.paperId}]`);
  if (!ids.has(relation.objectId)) failures.push(`Evidence relationship has unknown object: ${relation.objectId}`);
  if (relation.canonicalObjectId && !ids.has(relation.canonicalObjectId)) failures.push(`Evidence relationship has unknown canonical object: ${relation.canonicalObjectId}`);
  if (!['Direct', 'Equivalent', 'Synthesized'].includes(relation.supportType)) failures.push(`Invalid support type: ${relation.supportType}`);
  if (!relation.rationale?.trim()) failures.push(`Evidence relationship lacks rationale: ${relation.id}`);
  const key = `${relation.paperId}|${relation.objectId}|${relation.supportType}|${relation.rationale}`;
  if (relationKeys.has(key)) failures.push(`Duplicate evidence relationship: ${key}`);
  relationKeys.add(key);
}
for (const paper of evidence.byPaper) for (const id of paper.relationshipIds) if (!relationshipIds.has(id)) failures.push(`Paper [${paper.paperId}] points to missing relationship ${id}`);
const multiRolePapers = evidence.byPaper.filter((paper) => new Set(paper.relationshipIds.map((id) => evidence.relationships.find((relation) => relation.id === id)?.objectId)).size > 1);
if (!multiRolePapers.length) failures.push('The evidence graph does not preserve any paper-to-multiple-concept relationship.');

const exactContractIds = ['optimizer:adam', 'optimizer:lbfgs', 'metric:rmse', 'metric:relative-l2', 'formulation:weak-form', 'formulation:variational-form', 'method:automatic-differentiation', 'architecture:fourier-features'];
for (const id of exactContractIds) if (!ids.has(id)) failures.push(`Required canonical contract ID is absent: ${id}`);
const coreIds = new Set(core.concepts.map((concept) => concept.id));
if (core.totalConcepts !== registry.concepts.length) failures.push('Core registry total does not match the exhaustive registry.');
for (const id of exactContractIds) if (!coreIds.has(id)) failures.push(`Required runtime concept is absent from the core registry: ${id}`);
for (const rule of core.autoLink) if (!coreIds.has(rule.id)) failures.push(`Core auto-link target is absent: ${rule.id}`);

// Mapping integrity: identities, contexts, and explicit scientific separations are different contracts.
const sameKeys = new Set();
const contextKeys = new Set();
const separationKeys = new Set();
for (const item of mappings.keepSeparate || []) {
  separationKeys.add(`${item.left}|${item.right}`);
  separationKeys.add(`${item.right}|${item.left}`);
  if (!ids.has(item.left) || !ids.has(item.right)) failures.push(`Keep-separate mapping references an unknown concept: ${item.left} <> ${item.right}`);
}
for (const item of mappings.sameConcept || []) {
  const key = `${item.source}|${item.target}`;
  if (sameKeys.has(key)) failures.push(`Duplicate same-concept mapping: ${key}`);
  sameKeys.add(key);
  const source = registryById.get(item.source);
  const target = registryById.get(item.target);
  if (!source || !target) { failures.push(`Same-concept mapping references an unknown concept: ${key}`); continue; }
  if (separationKeys.has(key)) failures.push(`Same-concept mapping contradicts an explicit separation: ${key}`);
  if (source.canonicalId !== item.target || source.sameConceptAs !== item.target) failures.push(`Same-concept source is not canonically assigned after mapping: ${key}`);
  if (!(target.sameConceptRecords || []).includes(item.source)) failures.push(`Same-concept target lacks source record backlink: ${key}`);
  for (const destination of source.destinations || []) {
    if (!(target.destinations || []).some((candidate) => candidate.href === destination.href)) failures.push(`Canonical target lacks source destination ${destination.href}: ${key}`);
  }
}
for (const item of mappings.contextOnly || []) {
  const key = `${item.source}|${item.target}`;
  if (contextKeys.has(key)) failures.push(`Duplicate contextual mapping: ${key}`);
  contextKeys.add(key);
  const source = registryById.get(item.source);
  const target = registryById.get(item.target);
  if (!source || !target) { failures.push(`Contextual mapping references an unknown concept: ${key}`); continue; }
  if (sameKeys.has(key)) failures.push(`Mapping cannot be both identity and context: ${key}`);
  if (source.canonicalId === item.target || source.sameConceptAs === item.target) failures.push(`Context-only record was incorrectly collapsed into the canonical identity: ${key}`);
  if (!(target.contextRecords || []).includes(item.source)) failures.push(`Context target lacks source record backlink: ${key}`);
  if (!(source.contextFor || []).includes(item.target)) failures.push(`Context source lacks canonical-context backlink: ${key}`);
  for (const destination of source.destinations || []) {
    if (!(target.appearsIn || []).some((candidate) => candidate.href === destination.href)) failures.push(`Context target lacks source occurrence ${destination.href}: ${key}`);
  }
}
const requireSeparation = (left, right) => {
  if (!separationKeys.has(`${left}|${right}`)) failures.push(`Required scientific separation is absent: ${left} <> ${right}`);
  if (registryById.get(left)?.canonicalId === right || registryById.get(right)?.canonicalId === left) failures.push(`Scientifically distinct concepts were collapsed: ${left} <> ${right}`);
};
requireSeparation('metric:rmse', 'metric:mse');
requireSeparation('formulation:weak-form', 'formulation:variational-form');

// `appearsIn` must describe maintained occurrences, not namespace-wide topical relevance.
// Guard against the former blanket framework-context injection, which falsely made
// every formulation appear under Physics Enforcement and every metric under Evaluation.
const forbidContext = (conceptId, href, reason) => {
  const concept = registryById.get(conceptId);
  if (concept?.appearsIn || []).some((entry) => entry.href === href)) failures.push(`${reason}: ${conceptId} -> ${href}`);
};
forbidContext('formulation:f107', 'frameworks/design-stack/#item=physics-enforcement', 'Evaluation formulation leaked into an unrelated Physics Enforcement context');
forbidContext('formulation:f107', 'frameworks/co-design/#item=physics', 'Evaluation formulation leaked into an unrelated Co-Design physics context');
forbidContext('formulation:f107', 'frameworks/design-performance/#item=physics-enforcement', 'Evaluation formulation leaked into an unrelated Design–Performance physics-enforcement context');
forbidContext('metric:rmse', 'frameworks/design-stack/#item=physics-enforcement', 'RMSE inherited an unrelated Physics Enforcement context');
forbidContext('metric:mse', 'frameworks/design-stack/#item=evaluation', 'MSE received a framework occurrence that is not explicitly maintained');
forbidContext('optimizer:gradient-descent', 'frameworks/failure-diagnostics/#item=stagnation', 'Gradient descent received a diagnostic occurrence that is not explicitly maintained');
forbidContext('activation:tanh', 'frameworks/design-performance/#item=activation-features', 'Tanh received a framework occurrence that is not explicitly maintained');

// Exhaustive source-family coverage: every maintained object-bearing Atlas dataset must resolve to a registry object.
const coverage = new Map();
const checkFamily = (name, values) => {
  const expected = [...new Set(values.filter(Boolean))];
  const missing = expected.filter((id) => !ids.has(id));
  coverage.set(name, { expected: expected.length, missing: missing.length });
  missing.forEach((id) => failures.push(`${name} source object is missing from the canonical registry: ${id}`));
};
checkFamily('Pages', ['page:architectures','page:activation-functions','page:mathematical-formulations','page:training','page:optimizers','page:performance-metrics','page:pinn-ecosystem','page:references']);
checkFamily('References', paperMaster.papers.map((paper) => `reference:${paper.id}`));

const optimizerCanonicalSlug = (id) => ({ l_bfgs:'lbfgs', l_bfgs_b:'lbfgsb' }[id] || slug(id));
const optimizerTaxonomy = read('data/optimizers/optimizer-taxonomy.json');
checkFamily('Optimizers', optimizerTaxonomy.optimizers.map((item) => `optimizer:${optimizerCanonicalSlug(item.optimizer_id)}`));

const activationTaxonomy = read('data/activation-functions/activation-taxonomy.json');
checkFamily('Activation Functions', activationTaxonomy.activations.map((item) => `activation:${slug(item.activation_id)}`));

const taxonomyBase64 = ['data/performance/metric-taxonomy.json.gz.b64.part1', 'data/performance/metric-taxonomy.json.gz.b64.part2']
  .map((file) => fs.readFileSync(path.join(root, file), 'utf8')).join('').replace(/\s+/g, '');
const metricTaxonomy = JSON.parse(zlib.gunzipSync(Buffer.from(taxonomyBase64, 'base64')));
const metricCanonicalSlug = (id) => ({ root_mean_squared_error:'rmse', mean_squared_error:'mse', mean_absolute_error:'mae', relative_l2_error:'relative-l2', coefficient_of_determination:'r2' }[id] || slug(id));
checkFamily('Performance Metrics', metricTaxonomy.metrics.map((item) => `metric:${metricCanonicalSlug(item.metric_id)}`));

const formulationParts = read('data/mathematical-formulations/manifest.json').parts;
const formulations = formulationParts.flatMap((part) => read(`data/mathematical-formulations/${part.file}`).formulations || []);
checkFamily('Mathematical Formulations', formulations.map((item) => `formulation:${item.id.toLowerCase()}`));

const ecosystem = read('data/pinn-ecosystem/pinn-ecosystem.json');
const ecosystemIds = [
  ...(ecosystem.layers || []).map((layer) => `ecosystem:${layer.id}`),
  ...(ecosystem.groups || []).flatMap((group) => [
    `ecosystem:${group.id}`,
    ...(group.subgroups || []).flatMap((subgroup) => (subgroup.items || []).map((item) => `ecosystem:${item.id}`))
  ]
];
checkFamily('PINN Ecosystem', ecosystemIds);

const frameworkManifest = read('data/frameworks/frameworks.json');
const frameworkIds = [];
const frameworkConceptRefs = [];
const walkObjects = (value, visitor) => {
  if (Array.isArray(value)) return value.forEach((item) => walkObjects(item, visitor));
  if (!value || typeof value !== 'object') return;
  if (typeof value.id === 'string' && (value.title || value.label)) visitor(value);
  Object.values(value).forEach((item) => walkObjects(item, visitor));
};
for (const entry of frameworkManifest.frameworks || []) {
  const page = read(`data/frameworks/${entry.data}`);
  const seen = new Set();
  walkObjects(page, (item) => {
    for (const concept of item.concepts || []) if (concept.id) frameworkConceptRefs.push(concept.id);
    if (seen.has(item.id) || item.id === 'all') return;
    seen.add(item.id);
    frameworkIds.push(`framework:${entry.id}:${item.id}`);
  });
}
checkFamily('Framework objects', frameworkIds);
checkFamily('Framework concept references', frameworkConceptRefs);
checkFamily('Curated semantic concepts', ['formulation:weak-form','formulation:variational-form','method:automatic-differentiation','architecture:fourier-features','architecture:siren','sampling:sobol']);

const app = fs.readFileSync(path.join(root, 'assets/app.js'), 'utf8');
const interaction = fs.readFileSync(path.join(root, 'assets/concepts.js'), 'utf8');
const styles = fs.readFileSync(path.join(root, 'assets/concepts.css'), 'utf8');
for (const token of ['assets/concepts.js?v=knowledge-20260826', 'dataset.atlasConcepts']) if (!app.includes(token)) failures.push(`Shared application does not load the concept system token: ${token}`);
for (const token of ['data/concepts/core.json', 'data/concepts/registry.json', 'loadFullRegistry', 'MutationObserver', "aria-haspopup", "event.key === 'Escape'", 'pointerover', 'focusin', 'data-concept-open', 'Where this concept appears', 'Supporting evidence']) if (!interaction.includes(token)) failures.push(`Concept interaction model lacks: ${token}`);
if (interaction.includes('contextOverlays')) failures.push('Concept runtime still contains a one-off context overlay instead of registry-driven mapping.');
for (const token of ['--atlas-action', '--atlas-evidence', '--atlas-selected', '--atlas-related', '--atlas-warning', ':focus-visible', '.atlas-concept-inspector', 'text-decoration: none']) if (!styles.includes(token)) failures.push(`Concept style system lacks: ${token}`);

const htmlFiles = [];
const walkHtml = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['.git', '.github', 'artifacts', 'node_modules'].includes(entry.name)) continue;
    const target = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtml(target);
    else if (entry.name === 'index.html' || target === path.join(root, '404.html')) htmlFiles.push(target);
  }
};
walkHtml(root);
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  if (!html.includes('assets/app.js?v=knowledge-20260826')) failures.push(`${path.relative(root, file)} does not load the current shared concept-capable application.`);
}

console.log('Atlas object-source coverage:');
for (const [name, result] of coverage) console.log(`- ${name}: ${result.expected} registered · ${result.missing} missing`);
console.log(`Semantic mapping contracts: ${mappings.sameConcept.length} same-concept · ${mappings.contextOnly.length} context-only · ${(mappings.keepSeparate || []).length} explicit separations.`);
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`Concept validation passed: ${ids.size} concepts, ${evidence.relationships.length} evidence relationships, ${multiRolePapers.length} papers supporting multiple objects.`);
