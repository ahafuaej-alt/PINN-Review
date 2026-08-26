import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const root = path.resolve(import.meta.dirname, '..');
const read = (file) => JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
const write = (file, value) => {
  const target = path.join(root, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, `${JSON.stringify(value, null, 2)}\n`);
};
const slug = (value = '') => String(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const unique = (values) => [...new Set(values.filter(Boolean))];

const concepts = new Map();
const mergeConcept = (record) => {
  const existing = concepts.get(record.id);
  if (!existing) {
    concepts.set(record.id, {
      id: record.id,
      label: record.label,
      category: record.category,
      shortMeaning: record.shortMeaning || '',
      aliases: unique(record.aliases || []),
      destinations: uniqueDestinations(record.destinations || []),
      appearsIn: uniqueDestinations(record.appearsIn || []),
      evidenceCount: record.evidenceCount || 0
    });
    return;
  }
  existing.label ||= record.label;
  existing.category ||= record.category;
  existing.shortMeaning ||= record.shortMeaning;
  existing.aliases = unique([...(existing.aliases || []), ...(record.aliases || [])]);
  existing.destinations = uniqueDestinations([...(existing.destinations || []), ...(record.destinations || [])]);
  existing.appearsIn = uniqueDestinations([...(existing.appearsIn || []), ...(record.appearsIn || [])]);
};
function uniqueDestinations(values) {
  const seen = new Set();
  return values.filter((entry) => {
    const key = entry.href;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const pageConcepts = [
  ['page:architectures', 'Architectures', 'Architecture', 'Neural architectures and representation models used in physics-informed learning.', 'architectures/'],
  ['page:activation-functions', 'Activation Functions', 'Activation function', 'Nonlinearities and basis functions used in PINN representations.', 'activation-functions/'],
  ['page:mathematical-formulations', 'Mathematical Formulations', 'Formulation', 'Canonical mathematical statements and constraint formulations used across the Atlas.', 'mathematical-formulations/'],
  ['page:training', 'Training', 'Training', 'Sampling, objective construction, optimization, and training controls.', 'training/'],
  ['page:optimizers', 'Optimizers', 'Optimizer', 'Reported optimization algorithms and training sequences.', 'optimizers/'],
  ['page:performance-metrics', 'Performance Metrics', 'Metric', 'Numerical, physical, robustness, uncertainty, and cost evaluation measures.', 'performance-metrics/'],
  ['page:pinn-ecosystem', 'PINN Ecosystem', 'Ecosystem', 'The layered design taxonomy connecting problem definition through deployment.', 'pinn-ecosystem/'],
  ['page:references', 'References', 'Evidence', 'The canonical 853-record evidence corpus.', 'references/']
];
for (const [id, label, category, shortMeaning, href] of pageConcepts) mergeConcept({ id, label, category, shortMeaning, destinations: [{ label, href, primary: true }] });

const paperMaster = read('data/papers-master.json');
for (const paper of paperMaster.papers) mergeConcept({
  id: `reference:${paper.id}`,
  label: `[${paper.id}] ${paper.title}`,
  category: 'Reference',
  shortMeaning: `${paper.year || 'Year unavailable'} · ${paper.venue?.name || 'Venue unavailable'}`,
  aliases: [`[${paper.id}]`],
  destinations: [{ label: `Reference [${paper.id}]`, href: `references/#ref=${paper.id}`, primary: true }],
  appearsIn: [{ label: 'References', href: 'references/' }]
});

const frameworkContext = {
  optimizer: [
    ['Design Stack · Optimization', 'frameworks/design-stack/#item=optimization'],
    ['Co-Design · Training & Optimization', 'frameworks/co-design/#item=training'],
    ['Design–Performance · Optimizer & LR strategy', 'frameworks/design-performance/#item=optimizer'],
    ['Failure Diagnostics · Optimization stagnation', 'frameworks/failure-diagnostics/#item=stagnation']
  ],
  metric: [
    ['Design Stack · Evaluation', 'frameworks/design-stack/#item=evaluation'],
    ['Co-Design · Verification & Reliability', 'frameworks/co-design/#item=reliability'],
    ['Failure Diagnostics · Verify improvement', 'frameworks/failure-diagnostics/#item=verify']
  ],
  activation: [
    ['Design Stack · Representation', 'frameworks/design-stack/#item=representation'],
    ['Design–Performance · Activation / features', 'frameworks/design-performance/#item=activation-features']
  ],
  formulation: [
    ['Design Stack · Physics Enforcement', 'frameworks/design-stack/#item=physics-enforcement'],
    ['Co-Design · Physics & Constraints', 'frameworks/co-design/#item=physics'],
    ['Design–Performance · Physics enforcement', 'frameworks/design-performance/#item=physics-enforcement']
  ]
};
const contexts = (kind) => (frameworkContext[kind] || []).map(([label, href]) => ({ label, href, context: 'Framework' }));
const optimizerCanonicalSlug = (id) => ({ l_bfgs: 'lbfgs', l_bfgs_b: 'lbfgsb' }[id] || slug(id));
const metricCanonicalSlug = (id) => ({
  root_mean_squared_error: 'rmse',
  mean_squared_error: 'mse',
  mean_absolute_error: 'mae',
  relative_l2_error: 'relative-l2',
  coefficient_of_determination: 'r2'
}[id] || slug(id));

const optimizerTaxonomy = read('data/optimizers/optimizer-taxonomy.json');
for (const item of optimizerTaxonomy.optimizers) {
  const id = `optimizer:${optimizerCanonicalSlug(item.optimizer_id)}`;
  mergeConcept({
    id,
    label: item.optimizer_name,
    category: 'Optimizer',
    shortMeaning: item.description,
    aliases: unique([item.optimizer_name, ...(item.aliases || [])]),
    destinations: [{ label: `Optimizer Explorer · ${item.optimizer_name}`, href: `optimizers/?optimizer=${encodeURIComponent(item.optimizer_id)}#optimizer-${encodeURIComponent(item.optimizer_id)}`, primary: true }],
    appearsIn: [{ label: 'Paper-level optimizer records', href: `optimizers/?optimizer=${encodeURIComponent(item.optimizer_id)}` }, ...contexts('optimizer')]
  });
}

const activationTaxonomy = read('data/activation-functions/activation-taxonomy.json');
for (const item of activationTaxonomy.activations) {
  const id = `activation:${slug(item.activation_id)}`;
  mergeConcept({
    id,
    label: item.activation_name,
    category: 'Activation function',
    shortMeaning: item.definition || item.typical_role,
    aliases: unique([item.activation_name, ...(item.aliases || [])]).filter((alias) => !alias.includes('\\b') && alias.length < 90),
    destinations: [{ label: `Activation Explorer · ${item.activation_name}`, href: `activation-functions/?activation=${encodeURIComponent(item.activation_id)}#activation-${encodeURIComponent(item.activation_id)}`, primary: true }],
    appearsIn: [{ label: 'Paper-level activation records', href: `activation-functions/?activation=${encodeURIComponent(item.activation_id)}` }, ...contexts('activation')]
  });
}

const taxonomyBase64 = ['data/performance/metric-taxonomy.json.gz.b64.part1', 'data/performance/metric-taxonomy.json.gz.b64.part2']
  .map((file) => fs.readFileSync(path.join(root, file), 'utf8')).join('').replace(/\s+/g, '');
const metricTaxonomy = JSON.parse(zlib.gunzipSync(Buffer.from(taxonomyBase64, 'base64')));
for (const item of metricTaxonomy.metrics) {
  const id = `metric:${metricCanonicalSlug(item.metric_id)}`;
  mergeConcept({
    id,
    label: item.metric_name,
    category: 'Metric',
    shortMeaning: item.what_it_measures,
    aliases: unique([item.metric_name, ...(item.aliases || [])]).filter((alias) => !alias.includes('\\b') && alias.length < 90),
    destinations: [{ label: `Metric Explorer · ${item.metric_name}`, href: `performance-metrics/?metric=${encodeURIComponent(item.metric_id)}#metric-${encodeURIComponent(item.metric_id)}`, primary: true }],
    appearsIn: [{ label: 'Paper-level metric records', href: `performance-metrics/?metric=${encodeURIComponent(item.metric_id)}` }, ...contexts('metric')]
  });
}

const formulationParts = read('data/mathematical-formulations/manifest.json').parts;
const formulations = formulationParts.flatMap((part) => read(`data/mathematical-formulations/${part.file}`).formulations || []);
for (const item of formulations) {
  mergeConcept({
    id: `formulation:${item.id.toLowerCase()}`,
    label: item.name,
    category: 'Formulation',
    shortMeaning: item.meaning,
    aliases: unique([item.name, ...(item.tags || [])]),
    destinations: [{ label: `Mathematical Formulations · ${item.id}`, href: `mathematical-formulations/#${item.id}`, primary: true }],
    appearsIn: contexts('formulation')
  });
}

const ecosystem = read('data/pinn-ecosystem/pinn-ecosystem.json');
for (const layer of ecosystem.layers) {
  mergeConcept({
    id: `ecosystem:${layer.id}`,
    label: layer.title,
    category: 'Ecosystem layer',
    shortMeaning: layer.description,
    destinations: [{ label: `PINN Ecosystem · Layer ${layer.number}`, href: `pinn-ecosystem/?layer=${encodeURIComponent(layer.id)}#layer-${layer.number}`, primary: true }]
  });
}
for (const group of ecosystem.groups) {
  const groupId = `ecosystem:${group.id}`;
  mergeConcept({
    id: groupId,
    label: group.title,
    category: 'Ecosystem group',
    shortMeaning: group.description,
    destinations: [{ label: `PINN Ecosystem · ${group.title}`, href: `pinn-ecosystem/?group=${encodeURIComponent(group.id)}`, primary: true }]
  });
  for (const subgroup of group.subgroups || []) for (const item of subgroup.items || []) {
    mergeConcept({
      id: `ecosystem:${item.id}`,
      label: item.name,
      category: 'Ecosystem element',
      shortMeaning: `${subgroup.title} within ${group.title}.`,
      destinations: [{ label: `PINN Ecosystem · ${group.title}`, href: `pinn-ecosystem/?group=${encodeURIComponent(group.id)}&item=${encodeURIComponent(item.id)}`, primary: true }],
      appearsIn: [{ label: `Ecosystem group · ${group.title}`, href: `pinn-ecosystem/?group=${encodeURIComponent(group.id)}` }]
    });
  }
}

const frameworkManifest = read('data/frameworks/frameworks.json');
const frameworkPages = new Map();
const walkObjects = (value, visitor) => {
  if (Array.isArray(value)) return value.forEach((item) => walkObjects(item, visitor));
  if (!value || typeof value !== 'object') return;
  if (typeof value.id === 'string' && (value.title || value.label)) visitor(value);
  Object.values(value).forEach((item) => walkObjects(item, visitor));
};
for (const entry of frameworkManifest.frameworks) {
  const page = read(`data/frameworks/${entry.data}`);
  frameworkPages.set(entry.id, page);
  const seen = new Set();
  walkObjects(page, (item) => {
    for (const concept of item.concepts || []) {
      if (!concept.id) continue;
      mergeConcept({
        id: concept.id,
        appearsIn: [{
          label: `${entry.title} · ${item.title || item.label}`,
          href: `frameworks/${entry.route}#item=${encodeURIComponent(item.id)}`,
          context: 'Framework'
        }]
      });
    }
    if (seen.has(item.id) || ['all'].includes(item.id)) return;
    seen.add(item.id);
    mergeConcept({
      id: `framework:${entry.id}:${item.id}`,
      label: item.title || item.label,
      category: 'Framework object',
      shortMeaning: item.summary || item.detail || item.description || item.instruction || entry.description,
      destinations: [{ label: `${entry.title} · ${item.title || item.label}`, href: `frameworks/${entry.route}#item=${encodeURIComponent(item.id)}`, primary: true }],
      appearsIn: (item.related_frameworks || []).map((related) => {
        const [frameworkId, objectId] = related.split(':');
        const linked = frameworkManifest.frameworks.find((candidate) => candidate.id === frameworkId);
        return linked ? { label: linked.title, href: `frameworks/${linked.route}#item=${encodeURIComponent(objectId)}` } : null;
      }).filter(Boolean)
    });
  });
}

// Stable semantic aliases remain independent of source-specific record IDs.
const curated = [
  { id: 'formulation:weak-form', label: 'Weak form', category: 'Formulation', shortMeaning: 'Tests the governing equation against admissible test functions and enforces an integrated residual.', aliases: ['Weak form', 'weak-form', 'weak formulation'], destinations: [{ label: 'Mathematical Formulations · weak and variational physics', href: 'mathematical-formulations/#c-weak-variational-conservative-integral-and-discrete-physics', primary: true }], appearsIn: contexts('formulation') },
  { id: 'formulation:variational-form', label: 'Variational form', category: 'Formulation', shortMeaning: 'An integral statement obtained through admissible variations or test functions.', aliases: ['Variational form', 'variational formulation'], destinations: [{ label: 'Mathematical Formulations · variational physics', href: 'mathematical-formulations/#c-weak-variational-conservative-integral-and-discrete-physics', primary: true }], appearsIn: contexts('formulation') },
  { id: 'method:automatic-differentiation', label: 'Automatic differentiation', category: 'Numerical method', shortMeaning: 'Computes exact program derivatives through the computational graph, subject to floating-point arithmetic.', aliases: ['Automatic differentiation', 'automatic differentiation (AD)'], destinations: [{ label: 'PINN Ecosystem · Differential-Operator Evaluation', href: 'pinn-ecosystem/?group=differentiation-differential-operator-evaluation', primary: true }, { label: 'Mathematical Formulations · differentiation', href: 'mathematical-formulations/#d-reformulated-states-differentiation-and-approximation-bases' }], appearsIn: [{ label: 'Design Stack · Differentiation', href: 'frameworks/design-stack/#item=differentiation' }, { label: 'Design–Performance · Differentiation', href: 'frameworks/design-performance/#item=differentiation' }] },
  { id: 'architecture:fourier-features', label: 'Fourier features', category: 'Architecture', shortMeaning: 'Maps inputs through sinusoidal features to improve representation of high-frequency or multiscale structure.', aliases: ['Fourier features', 'Fourier feature mapping'], destinations: [{ label: 'PINN Ecosystem · Architecture', href: 'pinn-ecosystem/?group=neural-architecture-approximation-model', primary: true }, { label: 'Architectures', href: 'architectures/' }], appearsIn: [{ label: 'Design Stack · Representation', href: 'frameworks/design-stack/#item=representation' }, { label: 'Failure Diagnostics · Spectral bias', href: 'frameworks/failure-diagnostics/#item=spectral-bias' }] },
  { id: 'architecture:siren', label: 'SIREN', category: 'Architecture', shortMeaning: 'A sinusoidal representation network designed to model signals and their derivatives.', aliases: ['SIREN', 'sinusoidal representation network'], destinations: [{ label: 'PINN Ecosystem · Architecture', href: 'pinn-ecosystem/?group=neural-architecture-approximation-model', primary: true }, { label: 'Activation Functions · sine', href: 'activation-functions/?activation=sine' }], appearsIn: [{ label: 'Design Stack · Representation', href: 'frameworks/design-stack/#item=representation' }] },
  { id: 'sampling:sobol', label: 'Sobol sampling', category: 'Sampling method', shortMeaning: 'Uses a low-discrepancy Sobol sequence to distribute collocation points through the domain.', aliases: ['Sobol sampling', 'Sobol sequence'], destinations: [{ label: 'PINN Ecosystem · Collocation / Sampling', href: 'pinn-ecosystem/?group=collocation-sampling', primary: true }], appearsIn: [{ label: 'Design Stack · Sampling', href: 'frameworks/design-stack/#item=sampling' }, { label: 'Design–Performance · Sampling', href: 'frameworks/design-performance/#item=sampling' }] }
];
curated.forEach(mergeConcept);

const supportType = (value) => ({ Direct: 'Direct', Contextual: 'Equivalent', Equivalent: 'Equivalent', Synthesis: 'Synthesized', Synthesized: 'Synthesized' }[value] || 'Synthesized');
const evidenceRelationships = [];
const evidenceKey = new Set();
const addEvidence = (relationship) => {
  const key = `${relationship.paperId}|${relationship.objectId}|${relationship.supportType}|${relationship.rationale}`;
  if (evidenceKey.has(key)) return;
  evidenceKey.add(key);
  evidenceRelationships.push({ id: `evidence:${evidenceRelationships.length + 1}`, ...relationship });
};
for (const [frameworkId, page] of frameworkPages) {
  const visit = (value, ownerId = null) => {
    if (Array.isArray(value)) return value.forEach((item) => visit(item, ownerId));
    if (!value || typeof value !== 'object') return;
    const currentId = typeof value.id === 'string' && (value.title || value.label) ? value.id : ownerId;
    if (Array.isArray(value.evidence) && currentId) for (const item of value.evidence) if (Number.isInteger(item.atlas_id)) addEvidence({
      paperId: item.atlas_id,
      objectId: `framework:${frameworkId}:${currentId}`,
      claim: value.title || value.label || currentId,
      supportType: supportType(item.support),
      rationale: item.rationale || 'Supports the displayed framework relationship.'
    });
    for (const [key, item] of Object.entries(value)) if (key !== 'evidence') visit(item, currentId);
  };
  visit(page);
}
for (const item of formulations) for (const paperId of item.refs || []) addEvidence({
  paperId,
  objectId: `formulation:${item.id.toLowerCase()}`,
  claim: item.name,
  supportType: supportType(item.evidence),
  rationale: item.evidence === 'Direct' ? 'Provides direct methodological support for this formulation.' : item.evidence === 'Equivalent' ? 'Provides an equivalent source formulation normalized to the maintained notation.' : 'Contributes to the cross-source normalized synthesis.'
});

const evidenceCounts = new Map();
const byPaper = new Map();
for (const relation of evidenceRelationships) {
  evidenceCounts.set(relation.objectId, (evidenceCounts.get(relation.objectId) || 0) + 1);
  if (!byPaper.has(relation.paperId)) byPaper.set(relation.paperId, []);
  byPaper.get(relation.paperId).push(relation.id);
}
for (const [id, count] of evidenceCounts) if (concepts.has(id)) concepts.get(id).evidenceCount = count;
for (const [paperId, relationshipIds] of byPaper) if (concepts.has(`reference:${paperId}`)) concepts.get(`reference:${paperId}`).evidenceCount = relationshipIds.length;

const autoLink = [
  ['optimizer:adam', ['Adam']],
  ['optimizer:lbfgs', ['L-BFGS', 'L‑BFGS', 'LBFGS']],
  ['metric:rmse', ['RMSE', 'root mean squared error']],
  ['metric:relative-l2', ['Relative L2 error', 'relative L₂ error', 'relative L2 error']],
  ['metric:mae', ['MAE', 'mean absolute error']],
  ['formulation:weak-form', ['weak form']],
  ['formulation:variational-form', ['variational form']],
  ['method:automatic-differentiation', ['automatic differentiation']],
  ['architecture:fourier-features', ['Fourier features']],
  ['architecture:siren', ['SIREN']],
  ['sampling:sobol', ['Sobol sampling']]
].filter(([id]) => concepts.has(id)).map(([id, terms]) => ({ id, terms }));

const registry = {
  schemaVersion: '1.0.0',
  updated: '2026-08-26',
  canonicalIdFormat: '<namespace>:<stable-slug>',
  deepLinkContract: {
    concept: '?concept=<canonical-id>',
    metric: 'performance-metrics/?metric=<metric-id>#metric-<metric-id>',
    optimizer: 'optimizers/?optimizer=<optimizer-id>#optimizer-<optimizer-id>',
    activation: 'activation-functions/?activation=<activation-id>#activation-<activation-id>',
    formulation: 'mathematical-formulations/#<formulation-id>',
    framework: 'frameworks/<framework>/#item=<object-id>',
    ecosystem: 'pinn-ecosystem/?group=<group-id>&item=<item-id>',
    reference: 'references/#ref=<Reference-ID>'
  },
  terminology: {
    evidenceHeading: 'Supporting evidence',
    papersHeading: 'Supporting papers',
    referenceId: 'Reference ID',
    verifiedPapers: 'Verified papers',
    claimSupport: 'Claim-level support',
    inAtlasReferenceLabel: '[<Reference-ID>]'
  },
  interactionModel: {
    hoverOrFocus: 'Show a short meaning and the number of available destinations.',
    clickOrEnter: 'Pin the concept inspector.',
    space: 'Pin the concept inspector when the concept is rendered as a button.',
    open: 'Navigate to the primary canonical destination.',
    escape: 'Close the pinned inspector and return focus.'
  },
  colorSemantics: {
    action: 'Canonical concept or navigation action',
    evidence: 'Verified evidence or positive validation state',
    selected: 'Current selection or pinned object',
    related: 'Related object or backlink context',
    warning: 'Trade-off, caveat, or diagnostic warning',
    muted: 'Unavailable, disabled, or contextually inactive'
  },
  concepts: [...concepts.values()].sort((a, b) => a.id.localeCompare(b.id)),
  autoLink
};

write('data/concepts/registry.json', registry);
const coreIds = new Set([...pageConcepts.map(([id]) => id), ...autoLink.map((rule) => rule.id)]);
for (const page of frameworkPages.values()) {
  const collect = (value) => {
    if (Array.isArray(value)) return value.forEach(collect);
    if (!value || typeof value !== 'object') return;
    for (const concept of value.concepts || []) if (concept.id) coreIds.add(concept.id);
    Object.values(value).forEach(collect);
  };
  collect(page);
}
write('data/concepts/core.json', {
  ...registry,
  totalConcepts: registry.concepts.length,
  concepts: registry.concepts.filter((concept) => coreIds.has(concept.id))
});
write('data/concepts/evidence-relationships.json', {
  schemaVersion: '1.0.0',
  updated: '2026-08-26',
  supportTypes: {
    Direct: 'The paper directly introduces, evaluates, or substantiates the displayed object or claim.',
    Equivalent: 'The paper provides an equivalent or contextual formulation normalized to the maintained Atlas object.',
    Synthesized: 'The relationship is part of a conservative cross-source synthesis rather than a verbatim source claim.'
  },
  relationshipModel: 'paper → supported claim/object → support type → rationale',
  relationships: evidenceRelationships,
  byPaper: [...byPaper].sort((a, b) => a[0] - b[0]).map(([paperId, relationshipIds]) => ({ paperId, relationshipIds }))
});

console.log(`Built ${registry.concepts.length} canonical concepts, ${registry.autoLink.length} conservative auto-link rules, and ${evidenceRelationships.length} claim-level evidence relationships.`);
