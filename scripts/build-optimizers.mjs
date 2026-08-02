import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const dataDir = path.join(root, 'data', 'optimizers');
const sourcePath = path.join(dataDir, 'reference-optimizer-source.md');
const researchNotesPath = path.join(dataDir, 'reference-optimizer-web-research-notes.md');
const checkOnly = process.argv.includes('--check');

const FAMILIES = [
  'Adaptive first-order optimizers',
  'Gradient-descent and stochastic-gradient methods',
  'Quasi-Newton and second-order methods',
  'Conjugate-gradient, least-squares, and related solvers',
  'Metaheuristic and evolutionary methods',
  'Reinforcement-learning algorithms',
  'Bayesian optimization and probabilistic inference',
  'Meta-learned and specialized methods'
];

const algorithms = [
  ['adam', 'Adam', 0, 'first-order', 'Adaptive first-order gradient optimization algorithm.', ['Adam', 'ADAM']],
  ['adamw', 'AdamW', 0, 'first-order', 'Adam variant with decoupled weight decay.', ['AdamW']],
  ['adamax', 'AdaMax', 0, 'first-order', 'Infinity-norm variant of Adam.', ['Adamax', 'AdaMax']],
  ['amsgrad', 'AMSGrad', 0, 'first-order', 'Adam-family method with a nondecreasing second-moment estimate.', ['AMSGrad', 'AMSGrad (Adam variant)']],
  ['radam', 'RAdam', 0, 'first-order', 'Rectified Adam-family optimization method.', ['Rectified Adam (RAdam)']],
  ['nadam', 'Nadam', 0, 'first-order', 'Adam-family method incorporating Nesterov momentum.', ['Nadam', 'NAdam']],
  ['adagrad', 'AdaGrad', 0, 'first-order', 'Adaptive gradient method with coordinate-wise accumulated scaling.', ['Adagrad', 'AdaGrad', 'Ada Grad']],
  ['adadelta', 'AdaDelta', 0, 'first-order', 'Adaptive method based on running windows of gradient updates.', ['AdaDelta']],
  ['rmsprop', 'RMSprop', 0, 'first-order', 'Adaptive method using a moving average of squared gradients.', ['RMSprop', 'RMSProp']],
  ['adahessian', 'AdaHessian', 0, 'second-order', 'Adaptive method that incorporates diagonal Hessian information.', ['AdaHessian']],
  ['lamb_fusedlamb', 'LAMB/FusedLAMB', 0, 'first-order', 'Layer-wise adaptive moments method, reported with its fused implementation annotation.', ['Lamb (FusedLAMB)']],
  ['adam_adaptive_learning_rate_scheme', 'Adam with adaptive learning-rate scheme', 0, 'first-order', 'Adam reported with a source-specific adaptive learning-rate scheme.', ['Adam (adaptive learning rate scheme)']],
  ['adam_adaptive_learning_rate_decay', 'Adam with adaptive learning-rate decay', 0, 'first-order', 'Adam reported with an adaptive learning-rate decay configuration.', ['Adam (with adaptive learning rate decay)']],
  ['adam_learning_rate_decay', 'Adam with learning-rate decay', 0, 'first-order', 'Adam reported with learning-rate decay.', ['Adam (with learning rate decay)']],
  ['adamdelta', 'AdamDelta', 7, 'other', 'Source-specific algorithm label retained without assuming equivalence to Adam or AdaDelta.', ['AdamDelta'], true],

  ['gradient_descent', 'Gradient descent', 1, 'first-order', 'Generic gradient-based optimization method.', ['gradient descent', 'Gradient descent', 'GD (Gradient Descent)']],
  ['vanilla_gradient_descent', 'Vanilla gradient descent', 1, 'first-order', 'Gradient descent explicitly described by the source as vanilla gradient descent.', ['vanilla gradient descent (VGD)']],
  ['sgd', 'SGD', 1, 'first-order', 'Stochastic gradient descent; source annotations about variants are retained.', ['SGD', 'SGD (or variants)']],
  ['momentum', 'Momentum', 1, 'first-order', 'Gradient optimization using a momentum term.', ['Momentum']],
  ['gradient_descent_with_momentum', 'Gradient descent with momentum', 1, 'first-order', 'Gradient descent explicitly reported with momentum.', ['Gradient descent with momentum']],
  ['sgd_with_momentum', 'SGD with momentum', 1, 'first-order', 'Stochastic gradient descent explicitly reported with momentum.', ['Stochastic Gradient Descent with momentum']],
  ['nesterov', 'Nesterov', 1, 'first-order', 'Gradient optimization reported with Nesterov acceleration or momentum.', ['Nesterov']],
  ['fractional_order_gradient_descent', 'Fractional-order gradient descent', 1, 'first-order', 'Gradient-descent method reported with a fractional-order update.', ['FOGD (fractional-order gradient descent)']],
  ['natural_gradient', 'Natural gradient', 1, 'first-order', 'Gradient method using a geometry-aware parameter-space metric.', ['Natural gradient']],
  ['gradient_descent_adagrad_variable_momentum', 'Gradient descent with AdaGrad and variable momentum', 1, 'first-order', 'Source-specific hybrid gradient-descent configuration retaining AdaGrad and variable-momentum annotations.', ['Gradient descent (with AdaGrad; variable momentum)']],

  ['bfgs', 'BFGS', 2, 'quasi-Newton', 'Quasi-Newton optimization using a BFGS Hessian approximation.', ['BFGS', 'quasi-Newton BFGS']],
  ['l_bfgs', 'L-BFGS', 2, 'quasi-Newton', 'Limited-memory quasi-Newton optimization method.', ['L-BFGS', 'L‑BFGS', 'LBFGS']],
  ['l_bfgs_b', 'L-BFGS-B', 2, 'quasi-Newton', 'Bound-constrained limited-memory quasi-Newton method.', ['L-BFGS-B']],
  ['quasi_newton', 'Quasi-Newton', 2, 'quasi-Newton', 'Generic quasi-Newton method where the source does not name a more specific update.', ['Quasi-Newton']],
  ['gauss_newton', 'Gauss–Newton', 2, 'second-order', 'Least-squares optimization method based on a Gauss–Newton curvature approximation.', ['Gauss-Newton']],
  ['levenberg_marquardt', 'Levenberg–Marquardt', 2, 'second-order', 'Damped least-squares method combining Gauss–Newton and gradient updates.', ['Levenberg-Marquardt']],
  ['ssbfgs', 'SSBFGS', 2, 'quasi-Newton', 'Source-reported structured or self-scaled BFGS variant.', ['SSBFGS']],
  ['ssbroyden', 'SSBroyden', 2, 'quasi-Newton', 'Source-reported structured or self-scaled Broyden variant.', ['SSBroyden']],
  ['nncg', 'NNCG', 2, 'second-order', 'Source-reported neural-network conjugate-gradient method.', ['NNCG'], false, [FAMILIES[3]]],
  ['davidson_fletcher_powell', 'Davidson–Fletcher–Powell', 2, 'quasi-Newton', 'Source-reported Davidson–Fletcher–Powell quasi-Newton method.', ['Davidson-Fletcher-Powell'], true],

  ['scaled_conjugate_gradient', 'Scaled conjugate gradient', 3, 'other', 'Conjugate-gradient training method; implementation annotations are retained.', ['Scaled Conjugate Gradient (trainscg)', 'scaled conjugate gradient backpropagation']],
  ['iterative_least_squares', 'Iterative least-squares', 3, 'other', 'Iterative least-squares procedure reported by the source.', ['Iterative least-squares'], true],
  ['rprop', 'RProp', 3, 'first-order', 'Resilient backpropagation; source implementation annotations are retained.', ['RProp', 'RProp (trainrp)']],

  ['grey_wolf_optimizer', 'Grey Wolf Optimizer', 4, 'evolutionary', 'Population-based metaheuristic inspired by grey-wolf social behavior.', ['Grey Wolf Optimizer (GWO)']],
  ['particle_swarm_optimization', 'Particle Swarm Optimization', 4, 'evolutionary', 'Population-based particle-swarm metaheuristic.', ['PSO']],
  ['genetic_algorithm', 'Genetic Algorithm', 4, 'evolutionary', 'Evolutionary search based on selection and variation operators.', ['GA (Genetic Algorithm)']],
  ['nsga_ii', 'NSGA-II', 4, 'evolutionary', 'Nondominated sorting genetic algorithm for multi-objective optimization.', ['NSGA-II']],

  ['ppo', 'PPO', 5, 'reinforcement learning', 'Proximal Policy Optimization reinforcement-learning algorithm.', ['PPO'], true],
  ['soft_actor_critic', 'Soft Actor-Critic', 5, 'reinforcement learning', 'Entropy-regularized actor–critic reinforcement-learning algorithm.', ['Soft Actor-Critic (SAC)'], true],

  ['bayesian_optimization', 'Bayesian optimization', 6, 'probabilistic', 'Surrogate-based probabilistic search over an objective.', ['Bayesian optimization']],
  ['hamiltonian_monte_carlo', 'Hamiltonian Monte Carlo', 6, 'probabilistic', 'Gradient-informed Markov chain Monte Carlo inference algorithm.', ['Hamiltonian Monte Carlo', 'HMC'], true],
  ['aw_hmc', 'AW-HMC', 6, 'probabilistic', 'Source-reported adaptive-weight Hamiltonian Monte Carlo method.', ['AW-HMC'], true],
  ['nuts', 'NUTS', 6, 'probabilistic', 'No-U-Turn Sampler for Hamiltonian Monte Carlo inference.', ['NUTS'], true],
  ['evidence_procedure', 'Evidence Procedure', 6, 'probabilistic', 'Source-reported evidence-based probabilistic training or model-selection procedure.', ['Evidence Procedure'], true],

  ['meta_learned_optimizer', 'Meta-learned optimizer', 7, 'meta-learned', 'Optimizer whose update rule is reported as learned through meta-learning.', ['Meta-learned optimizer']],
  ['adaptive_gradient_update', 'Adaptive Gradient Update', 7, 'other', 'Source-specific adaptive gradient-update label retained without forced equivalence.', ['Adaptive Gradient Update'], true],
  ['ridge_regression', 'Ridge regression', 7, 'regression', 'Regularized linear regression procedure reported in the training field.', ['Ridge regression'], true],
  ['mma', 'MMA', 7, 'other', 'Source-reported MMA method retained without expanding an unstated acronym.', ['MMA'], true]
].map(([id, name, familyIndex, methodType, description, sourceForms, manualReview = false, secondaryTags = []]) => ({
  optimizer_id: id,
  optimizer_name: name,
  family: FAMILIES[familyIndex],
  secondary_tags: secondaryTags,
  method_type: methodType,
  description,
  sourceForms,
  manualReview
}));

const optimizerByRaw = new Map();
for (const algorithm of algorithms) {
  for (const form of algorithm.sourceForms) {
    if (optimizerByRaw.has(form)) throw new Error(`Duplicate raw-form mapping: ${form}`);
    optimizerByRaw.set(form, algorithm);
  }
}

function splitOutsideParentheses(value) {
  const parts = [];
  let current = '';
  let depth = 0;
  for (const character of String(value)) {
    if (character === '(') depth += 1;
    if (character === ')') depth = Math.max(0, depth - 1);
    if (depth === 0 && (character === ',' || character === ';')) {
      if (current.trim()) parts.push(current.trim());
      current = '';
    } else {
      current += character;
    }
  }
  if (current.trim()) parts.push(current.trim());
  return parts;
}

function sourceAnnotations(rawForms) {
  return rawForms.flatMap((form) => [...form.matchAll(/\(([^()]*)\)/g)].map((match) => match[1].trim()));
}

function sha256(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

const sourceText = fs.readFileSync(sourcePath, 'utf8');
const researchText = fs.readFileSync(researchNotesPath, 'utf8');
const sourceRows = [];
for (const line of sourceText.split(/\r?\n/)) {
  const match = line.match(/^\|\s*(\d+)\s*\|\s*(.*?)\s*\|\s*$/);
  if (!match) continue;
  sourceRows.push({ paper_id: Number(match[1]), optimizer_raw: match[2] });
}

const ids = sourceRows.map((row) => row.paper_id);
const idSet = new Set(ids);
const missingIds = Array.from({ length: 853 }, (_, index) => index + 1).filter((id) => !idSet.has(id));
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
const formerlyMissingIds = [194, 452, 694, 776, 803, 809, 812, 813];

const records = sourceRows.map(({ paper_id, optimizer_raw }) => {
  const reportingStatus = optimizer_raw === 'N/A' ? 'not_reported' : 'reported';
  const rawForms = reportingStatus === 'reported' ? splitOutsideParentheses(optimizer_raw) : [];
  const resolved = rawForms.map((form) => {
    const algorithm = optimizerByRaw.get(form);
    if (!algorithm) throw new Error(`Unmapped raw optimizer form for [${paper_id}]: ${form}`);
    return algorithm;
  });
  const normalizedIds = [...new Set(resolved.map((algorithm) => algorithm.optimizer_id))];
  const families = [...new Set(resolved.flatMap((algorithm) => [algorithm.family, ...algorithm.secondary_tags]))];
  const annotations = sourceAnnotations(rawForms);
  const manualForms = rawForms.filter((form) => optimizerByRaw.get(form)?.manualReview);
  const hybrid = rawForms.some((form) => form === 'Gradient descent (with AdaGrad; variable momentum)');
  const trainingStrategy = reportingStatus === 'not_reported'
    ? 'not_applicable'
    : hybrid
      ? 'sequential_or_hybrid_optimizer_set'
      : normalizedIds.length > 1
        ? 'multiple_optimizers'
        : 'single_optimizer';
  const normalizationNotes = [];
  rawForms.forEach((form) => {
    const canonical = optimizerByRaw.get(form);
    if (form !== canonical.optimizer_name) normalizationNotes.push(`Normalized source form “${form}” to “${canonical.optimizer_name}”; the raw form is retained.`);
  });
  if (rawForms.length > 1) normalizationNotes.push('Multiple algorithms are listed without an inferred execution order.');
  if (manualForms.length) normalizationNotes.push(`Manual review retained for source form${manualForms.length === 1 ? '' : 's'}: ${manualForms.join('; ')}.`);
  return {
    paper_id,
    paper_label: `[${paper_id}]`,
    optimizer_raw,
    reporting_status: reportingStatus,
    raw_optimizer_forms: rawForms,
    normalized_optimizer_ids: normalizedIds,
    optimizer_families: families,
    training_strategy: trainingStrategy,
    source_annotations: annotations,
    normalization_notes: normalizationNotes,
    manual_review_required: manualForms.length > 0,
    research_note_available: formerlyMissingIds.includes(paper_id)
  };
});

const taxonomy = algorithms.map((algorithm) => {
  const supportingRecords = records.filter((record) => record.normalized_optimizer_ids.includes(algorithm.optimizer_id));
  const aliases = [...new Set(supportingRecords.flatMap((record) => record.raw_optimizer_forms.filter((form) => optimizerByRaw.get(form)?.optimizer_id === algorithm.optimizer_id)))];
  const annotations = [...new Set(supportingRecords.flatMap((record) => record.raw_optimizer_forms
    .filter((form) => optimizerByRaw.get(form)?.optimizer_id === algorithm.optimizer_id)
    .flatMap((form) => sourceAnnotations([form]))))];
  const paperIds = supportingRecords.map((record) => record.paper_id);
  return {
    optimizer_id: algorithm.optimizer_id,
    optimizer_name: algorithm.optimizer_name,
    aliases,
    family: algorithm.family,
    secondary_tags: algorithm.secondary_tags,
    method_type: algorithm.method_type,
    description: algorithm.description,
    paper_count: paperIds.length,
    paper_ids: paperIds,
    source_annotations: annotations,
    manual_review_required: algorithm.manualReview
  };
}).sort((left, right) => right.paper_count - left.paper_count || left.optimizer_name.localeCompare(right.optimizer_name));

const strategyCounts = records.reduce((counts, record) => {
  counts[record.training_strategy] = (counts[record.training_strategy] || 0) + 1;
  return counts;
}, {});
const statusCounts = records.reduce((counts, record) => {
  counts[record.reporting_status] = (counts[record.reporting_status] || 0) + 1;
  return counts;
}, {});
const distinctRawForms = [...new Set(records.flatMap((record) => record.raw_optimizer_forms))];

const summary = {
  source_rows: records.length,
  valid_paper_ids: idSet.size,
  id_range: [Math.min(...ids), Math.max(...ids)],
  references_reporting_an_optimizer: statusCounts.reported || 0,
  explicit_na_records: statusCounts.not_reported || 0,
  missing_source_records: missingIds.length,
  missing_ids: missingIds,
  formerly_missing_ids: formerlyMissingIds,
  distinct_raw_optimizer_forms: distinctRawForms.length,
  canonical_optimizer_forms: taxonomy.length,
  single_optimizer_records: strategyCounts.single_optimizer || 0,
  multi_optimizer_records: strategyCounts.multiple_optimizers || 0,
  sequential_or_hybrid_records: strategyCounts.sequential_or_hybrid_optimizer_set || 0,
  optimizer_families: FAMILIES.length,
  manual_review_required: records.filter((record) => record.manual_review_required).length,
  top_optimizers: taxonomy.slice(0, 15).map((optimizer) => ({
    optimizer_id: optimizer.optimizer_id,
    optimizer_name: optimizer.optimizer_name,
    count: optimizer.paper_count
  })),
  generated_from: 'data/optimizers/reference-optimizer-source.md',
  research_notes: 'data/optimizers/reference-optimizer-web-research-notes.md'
};

const validation = {
  generated_on: '2026-08-02',
  source_sha256: sha256(sourceText),
  research_notes_sha256: sha256(researchText),
  checks: {
    source_rows_853: records.length === 853,
    unique_source_ids_853: idSet.size === 853,
    no_duplicate_ids: duplicateIds.length === 0,
    id_range_1_to_853: Math.min(...ids) === 1 && Math.max(...ids) === 853,
    all_reference_ids_represented: missingIds.length === 0,
    reported_records_566: statusCounts.reported === 566,
    explicit_na_records_287: statusCounts.not_reported === 287,
    all_labels_bracketed: records.every((record) => /^\[\d+\]$/.test(record.paper_label)),
    raw_optimizer_text_retained: records.every((record) => typeof record.optimizer_raw === 'string' && record.optimizer_raw.length > 0),
    all_raw_forms_mapped: records.every((record) => record.raw_optimizer_forms.length === record.normalized_optimizer_ids.length || record.raw_optimizer_forms.every((form) => optimizerByRaw.has(form))),
    all_normalized_ids_in_taxonomy: records.every((record) => record.normalized_optimizer_ids.every((id) => algorithms.some((algorithm) => algorithm.optimizer_id === id))),
    raw_aliases_retained: distinctRawForms.every((form) => taxonomy.some((optimizer) => optimizer.aliases.includes(form))),
    taxonomy_counts_unique_papers: taxonomy.every((optimizer) => optimizer.paper_count === new Set(optimizer.paper_ids).size),
    explicit_na_has_no_optimizer: records.filter((record) => record.reporting_status === 'not_reported').every((record) => record.raw_optimizer_forms.length === 0 && record.normalized_optimizer_ids.length === 0),
    completed_records_researched: formerlyMissingIds.every((id) => records.find((record) => record.paper_id === id)?.research_note_available)
  },
  duplicate_ids: duplicateIds,
  missing_ids: missingIds,
  formerly_missing_ids: formerlyMissingIds,
  unmapped_raw_forms: distinctRawForms.filter((form) => !optimizerByRaw.has(form))
};

const outputs = new Map([
  [path.join(dataDir, 'optimizer-records.json'), `${JSON.stringify({ records }, null, 2)}\n`],
  [path.join(dataDir, 'optimizer-taxonomy.json'), `${JSON.stringify({ families: FAMILIES, optimizers: taxonomy }, null, 2)}\n`],
  [path.join(dataDir, 'optimizer-summary.json'), `${JSON.stringify(summary, null, 2)}\n`],
  [path.join(dataDir, 'optimizer-validation.json'), `${JSON.stringify(validation, null, 2)}\n`]
]);

let changed = false;
for (const [filePath, content] of outputs) {
  const existing = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : null;
  if (existing === content) continue;
  changed = true;
  if (!checkOnly) fs.writeFileSync(filePath, content);
  else console.error(`Generated optimizer artifact is stale: ${path.relative(root, filePath)}`);
}

if (checkOnly && changed) process.exitCode = 1;
else console.log(JSON.stringify({
  ok: true,
  check_only: checkOnly,
  records: records.length,
  reported: statusCounts.reported,
  not_reported: statusCounts.not_reported,
  raw_forms: distinctRawForms.length,
  canonical_forms: taxonomy.length,
  families: FAMILIES.length,
  manual_review_records: summary.manual_review_required,
  missing_ids: missingIds
}, null, 2));
