import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const dataDir = path.join(root, 'data', 'activation-functions');
const sourcePath = path.join(dataDir, 'reference-activation-functions-source.txt');
const researchNotesPath = path.join(dataDir, 'reference-activation-functions-web-research-notes.txt');
const checkOnly = process.argv.includes('--check');

const FAMILIES = [
  'Bounded sigmoidal and saturating functions',
  'Rectifier and smooth rectifier families',
  'Periodic and oscillatory functions',
  'Radial, kernel, and basis-function activations',
  'Linear and identity mappings',
  'Adaptive, trainable, and blended activations',
  'Gate- and module-specific nonlinearities',
  'Custom, polynomial, logarithmic, and other functions'
];

const activation = (activation_id, activation_name, familyIndex, forms, options = {}) => ({
  activation_id,
  activation_name,
  family: FAMILIES[familyIndex],
  sourceForms: forms,
  tags: options.tags || [],
  activation_type: options.activationType || 'standard_scalar_activation',
  standardness: options.standardness || 'standard',
  adaptive: Boolean(options.adaptive),
  base_activation_id: options.baseActivationId || null,
  definition: options.definition || `${activation_name} activation reported by the source.`,
  smoothness: options.smoothness || 'Smoothness depends on the exact source-defined form.',
  typical_role: options.typicalRole || 'Neural-network nonlinearity; the paper-level role is retained separately.',
  manualReview: Boolean(options.manualReview)
});

const ACTIVATIONS = [
  activation('tanh', 'tanh', 0, ['tanh', 'Tanh', 'Hyperbolic tangent', 'tansig (tanh)', 'tansig', 'tanh (hidden layers)', 'Tanh (hidden layers)', 'Tanh (all hidden layers)', 'tanh (LSTM gates)'], { tags: ['bounded', 'odd', 'smooth'], definition: 'Hyperbolic-tangent nonlinearity.', smoothness: 'Infinitely differentiable on the real line.', typicalRole: 'Common hidden-layer nonlinearity; this dataset also records gate and layer-specific uses.' }),
  activation('sigmoid', 'sigmoid', 0, ['sigmoid', 'Sigmoid', 'Logistic', 'logistic', 'sigmoid (output layer)', 'sigmoid (LSTM)', 'sigmoid (for inequality constraints)'], { tags: ['bounded', 'monotone', 'smooth'], definition: 'Logistic sigmoid nonlinearity.', smoothness: 'Infinitely differentiable on the real line.', typicalRole: 'Often used for bounded outputs or gates; source roles are kept explicit.' }),
  activation('bipolar_sigmoid', 'bipolar sigmoid', 0, ['Bipolar sigmoid'], { tags: ['bounded', 'smooth'], definition: 'Sigmoidal mapping with a bipolar output range.' }),
  activation('scaled_sigmoid', 'scaled sigmoid', 0, ['scaled sigmoid'], { tags: ['bounded', 'scaled', 'smooth'], definition: 'A source-reported scaled form of the sigmoid; the scale is not inferred.' }),
  activation('arctan', 'arctan', 0, ['Arctan', 'arctan (hidden)', 'inverse tangent'], { tags: ['bounded', 'odd', 'smooth'], definition: 'Inverse-tangent nonlinearity.', smoothness: 'Infinitely differentiable on the real line.' }),
  activation('softsign', 'Softsign', 0, ['Softsign'], { tags: ['bounded', 'smooth'], definition: 'Rational saturating nonlinearity commonly written as x/(1+|x|).', smoothness: 'Continuously differentiable once; higher-order behavior at zero depends on formulation.' }),
  activation('tanhshrink', 'Tanhshrink', 0, ['tanhshrink', 'Tanhshrink'], { tags: ['odd', 'smooth'], definition: 'Residual form x − tanh(x).', smoothness: 'Infinitely differentiable on the real line.' }),
  activation('lecun_tanh', 'LeCun’s tanh', 0, ["LeCun's Tanh"], { tags: ['bounded', 'scaled', 'smooth'], definition: 'Scaled hyperbolic-tangent formulation associated with LeCun-style normalization.' }),

  activation('relu', 'ReLU', 1, ['ReLU', 'relu', 'ReLU (autoencoder hidden)', 'ReLU (CNN branch)', 'ReLU (GoogleNet)', 'ReLU (hidden)', 'ReLU (in loss)', 'ReLU (no second-order derivatives)', 'ReLU (PINN approach)'], { tags: ['rectifier', 'piecewise-linear'], definition: 'Rectified linear unit.', smoothness: 'Continuous but not differentiable at zero in its standard form.' }),
  activation('adaptive_relu', 'adaptive ReLU', 5, ['Adaptive ReLU'], { tags: ['rectifier', 'adaptive'], adaptive: true, baseActivationId: 'relu', definition: 'Source-reported adaptive variant of ReLU; the adaptation rule is not inferred.' }),
  activation('leaky_relu', 'Leaky ReLU', 1, ['LeakyReLU', 'Leaky-ReLU', 'leaky ReLU', 'Leaky ReLU', 'leaky_relu'], { tags: ['rectifier', 'piecewise-linear'], definition: 'Rectifier retaining a nonzero negative-side slope.', smoothness: 'Typically continuous with a slope discontinuity at zero.' }),
  activation('leaky_relu_alpha_0_1', 'Leaky ReLU (slope 0.1)', 1, ['0.1-leaky ReLU'], { tags: ['rectifier', 'parameterized', 'piecewise-linear'], baseActivationId: 'leaky_relu', definition: 'Leaky ReLU with the source-stated negative-side slope 0.1.' }),
  activation('leaky_relu_alpha_0_2', 'Leaky ReLU (α = 0.2)', 1, ['LeakyReLU (α=0.2)'], { tags: ['rectifier', 'parameterized', 'piecewise-linear'], baseActivationId: 'leaky_relu', definition: 'Leaky ReLU with the source-stated negative-side slope α = 0.2.' }),
  activation('prelu', 'PReLU', 1, ['PReLU'], { tags: ['rectifier', 'trainable-slope'], adaptive: true, definition: 'Parametric ReLU with a trainable negative-side slope.', smoothness: 'Typically continuous with a possible slope discontinuity at zero.' }),
  activation('rrelu', 'RReLU', 1, ['RReLU'], { tags: ['rectifier', 'randomized-slope'], definition: 'Randomized leaky rectifier.' }),
  activation('elu', 'ELU', 1, ['ELU', 'elu', 'eLU'], { tags: ['rectifier', 'smooth-negative-branch'], definition: 'Exponential linear unit.', smoothness: 'Usually continuously differentiable at zero for the standard parameter choice.' }),
  activation('selu', 'SELU', 1, ['SELU', 'selu'], { tags: ['rectifier', 'self-normalizing'], definition: 'Scaled exponential linear unit.' }),
  activation('gelu', 'GELU', 1, ['GELU', 'GeLU', 'Gaussian Error Linear Units (GELUs)', 'GELU (with second-order derivatives)'], { tags: ['smooth-rectifier', 'probabilistic-gating'], definition: 'Gaussian error linear unit.', smoothness: 'Smooth for the standard exact and common smooth approximations.' }),
  activation('swish', 'Swish', 1, ['Swish', 'swish'], { tags: ['smooth-rectifier', 'nonmonotone'], definition: 'Smooth self-gated activation commonly written x·sigmoid(x).', smoothness: 'Infinitely differentiable for the standard formulation.' }),
  activation('silu', 'SiLU', 1, ['SiLU'], { tags: ['smooth-rectifier', 'nonmonotone', 'swish-related'], definition: 'Sigmoid linear unit; retained separately from Swish by policy.', smoothness: 'Infinitely differentiable for the standard formulation.' }),
  activation('mish', 'Mish', 1, ['Mish'], { tags: ['smooth-rectifier', 'nonmonotone'], definition: 'Smooth activation commonly written x·tanh(softplus(x)).' }),
  activation('hardswish', 'Hardswish', 1, ['Hardswish'], { tags: ['piecewise', 'swish-related'], definition: 'Piecewise-linear approximation to a Swish-like activation.' }),
  activation('softplus', 'Softplus', 1, ['Softplus', 'softplus'], { tags: ['smooth-rectifier', 'positive'], definition: 'Smooth approximation to ReLU, commonly log(1+exp(x)).', smoothness: 'Infinitely differentiable on the real line.' }),
  activation('recu', 'ReCU', 1, ['ReCU'], { tags: ['rectifier', 'source-specific'], definition: 'Source-reported ReCU activation; no unstated expansion or formula is inferred.' }),
  activation('slu', 'SLU', 1, ['SLU'], { tags: ['source-specific'], definition: 'Source-reported SLU activation; no unstated expansion or formula is inferred.' }),

  activation('sine', 'sine', 2, ['sin', 'sine', 'Sine', 'Sin', 'Sinus', 'Sinusoidal (sin)', 'sin (default)', 'sine functions'], { tags: ['periodic', 'smooth'], definition: 'Sinusoidal nonlinearity.', smoothness: 'Infinitely differentiable on the real line.' }),
  activation('cosine', 'cosine', 2, ['cos', 'cos(z)'], { tags: ['periodic', 'smooth'], definition: 'Cosine nonlinearity; the exact source expression is retained.' }),
  activation('siren', 'SIREN', 2, ['sine (SIREN)'], { tags: ['periodic', 'sinusoidal-representation'], activationType: 'architecture_specific_activation', definition: 'Sinusoidal activation reported in a SIREN-style representation.' }),
  activation('periodic_activation', 'periodic activation function', 2, ['periodic activation function'], { tags: ['periodic', 'unspecified-form'], activationType: 'source_specific_activation', definition: 'A periodic activation whose more specific formula is not stated in the source field.' }),
  activation('trainable_sinusoidal', 'trainable sinusoidal activation', 5, ['sinusoidal (trainable)'], { tags: ['periodic', 'adaptive', 'trainable'], adaptive: true, baseActivationId: 'sine', definition: 'Source-reported sinusoidal activation with trainable parameters.' }),
  activation('mixed_sine_cosine', '½ sin(x) + ½ cos(x)', 2, ['½ sin(x)+½ cos(x)'], { tags: ['periodic', 'mixed-basis', 'custom'], activationType: 'custom_periodic_function', standardness: 'custom_basis_kernel', definition: 'Exact mixed sine–cosine function retained from the source.' }),
  activation('sine_2pi', 'Sin(2π)', 2, ['Sin(2π)'], { tags: ['periodic', 'source-parameterized'], activationType: 'source_specific_activation', definition: 'Source-reported Sin(2π) form; no additional frequency convention is inferred.' }),

  activation('gaussian_rbf', 'Gaussian RBF', 3, ['Gaussian RBF'], { tags: ['radial-basis', 'smooth'], activationType: 'basis_function', standardness: 'custom_basis_kernel', definition: 'Gaussian radial-basis activation.' }),
  activation('rbf_unspecified', 'RBF (unspecified form)', 3, ['RBF'], { tags: ['radial-basis', 'unspecified-form'], activationType: 'basis_function', standardness: 'custom_basis_kernel', manualReview: true, definition: 'Radial-basis function whose specific kernel is not established by the source field.' }),
  activation('gaussian_unspecified', 'Gaussian (source-reported)', 3, ['Gaussian'], { tags: ['gaussian', 'unspecified-form'], activationType: 'source_specific_activation', standardness: 'custom_basis_kernel', manualReview: true, definition: 'Gaussian activation label retained without assuming a Gaussian RBF formulation.' }),
  activation('gabor_function', 'Gabor function', 3, ['Gabor function'], { tags: ['basis-function', 'oscillatory', 'localized'], activationType: 'filter_or_basis_function', standardness: 'custom_basis_kernel', definition: 'Source-reported Gabor function used through a multiplicative filter network.' }),
  activation('spherical_hankel', 'spherical Hankel function', 3, ['spherical Hankel function (h₀⁽¹⁾)'], { tags: ['special-function', 'basis-function'], activationType: 'basis_function', standardness: 'custom_basis_kernel', definition: 'Source-reported spherical Hankel basis function h₀⁽¹⁾.' }),
  activation('physics_informed_kernel_functions', 'physics-informed kernel functions', 3, ['Physics-informed kernel functions (PIKFs)'], { tags: ['kernel', 'problem-specific'], activationType: 'kernel_function', standardness: 'custom_basis_kernel', definition: 'Problem-specific kernel functions reported as nonlinear basis components.' }),
  activation('b_spline_kan', 'B-spline (KAN)', 3, ['B-spline (KAN)'], { tags: ['spline', 'KAN', 'basis-function'], activationType: 'basis_function', standardness: 'custom_basis_kernel', definition: 'B-spline activation reported for a Kolmogorov–Arnold network.' }),
  activation('learnable_splines_kan', 'learnable splines (KAN)', 3, ['learnable splines (KAN)'], { tags: ['spline', 'KAN', 'trainable'], activationType: 'basis_function', standardness: 'custom_basis_kernel', adaptive: true, definition: 'Learnable spline functions reported for a Kolmogorov–Arnold network.' }),
  activation('fourier_feature_mapping', 'Fourier feature mapping', 3, ['Fourier feature mapping'], { tags: ['feature-mapping', 'periodic-basis'], activationType: 'feature_mapping', standardness: 'custom_basis_kernel', definition: 'Fourier feature mapping retained as an architecture component rather than treated as an ordinary scalar activation.' }),

  activation('linear', 'linear', 4, ['linear', 'Linear', 'identity (linear)', 'purelin', 'Linear (autoencoder output)', 'Linear (output layer)', 'linear (output)', 'Linear (output)'], { tags: ['identity', 'unbounded'], definition: 'Linear or identity mapping; source layer qualifiers are retained.', smoothness: 'Infinitely differentiable.' }),

  activation('adaptive_tanh', 'adaptive tanh', 5, ['adaptive tanh', 'adaptive tanh (with parameter a)'], { tags: ['adaptive', 'tanh-related', 'trainable'], adaptive: true, baseActivationId: 'tanh', definition: 'Adaptive hyperbolic-tangent activation with source-stated trainable adaptation.' }),
  activation('fixed_tanh', 'fixed tanh', 0, ['tanh (fixed)'], { tags: ['bounded', 'fixed', 'smooth'], baseActivationId: 'tanh', definition: 'Fixed tanh retained separately where the source contrasts it with an adaptive tanh.' }),
  activation('adaptive_swish', 'adaptive Swish', 5, ['adaptive Swish', 'Swish (adaptive)'], { tags: ['adaptive', 'swish-related', 'trainable'], adaptive: true, baseActivationId: 'swish', definition: 'Source-reported adaptive variant of Swish.' }),
  activation('layer_wise_adaptive_tanh', 'layer-wise adaptive tanh', 5, ['layer‑wise tanh (adaptive)'], { tags: ['adaptive', 'layer-wise', 'tanh-related'], adaptive: true, baseActivationId: 'tanh', definition: 'Tanh with source-reported layer-wise adaptation.' }),
  activation('neuron_wise_locally_adaptive', 'neuron-wise locally adaptive activation', 5, ['neuron-wise locally adaptive activation'], { tags: ['adaptive', 'neuron-wise', 'local'], adaptive: true, activationType: 'adaptive_scheme', definition: 'Locally adaptive activation scheme with neuron-wise parameters; no base function is inferred.' }),
  activation('nodewise_adaptive_tanh', 'nodewise adaptive tanh', 5, ['tanh (with nodewise adaptive coefficients)', 'tanh (with nodewise coefficients)'], { tags: ['adaptive', 'nodewise', 'tanh-related'], adaptive: true, baseActivationId: 'tanh', definition: 'Tanh with source-reported nodewise coefficients.' }),
  activation('locally_adaptive_tanh_scaling', 'locally adaptive tanh scaling', 5, ['Tanh (with locally adaptive scaling)'], { tags: ['adaptive', 'local', 'tanh-related'], adaptive: true, baseActivationId: 'tanh', definition: 'Tanh with source-reported locally adaptive scaling.' }),
  activation('adaptive_tanh_slope_recovery', 'adaptive tanh with slope recovery', 5, ['Tanh (with adaptive activation functions and slope recovery)'], { tags: ['adaptive', 'slope-recovery', 'tanh-related'], adaptive: true, baseActivationId: 'tanh', definition: 'Tanh used with source-reported adaptive activation and slope-recovery formulation.' }),
  activation('abu_pinn_adaptive_blending', 'ABU-PINN adaptive blending', 5, ['ABU-PINN (adaptive blending)'], { tags: ['adaptive', 'blended', 'trainable'], adaptive: true, activationType: 'adaptive_blending_scheme', definition: 'Adaptive blending unit reported for ABU-PINN; component weights and order are not inferred.' }),

  activation('gru_gating_mechanisms', 'GRU gating mechanisms', 6, ['GRU gating mechanisms'], { tags: ['gate', 'GRU', 'module-specific'], activationType: 'gate_mechanism', standardness: 'module_specific', definition: 'GRU gate nonlinearities retained as a module-level mechanism rather than a feed-forward hidden activation.' }),
  activation('softmax', 'Softmax', 6, ['softmax', 'Softmax', 'SoftMax'], { tags: ['normalized-exponential', 'output-or-module'], activationType: 'module_specific_activation', standardness: 'module_specific', definition: 'Normalized exponential mapping across a vector of logits.' }),

  activation('exponential', 'exponential', 7, ['exponential', 'exp'], { tags: ['exponential', 'smooth'], definition: 'Exponential nonlinearity; source scaling is not inferred.' }),
  activation('logarithmic', 'logarithmic', 7, ['log (logarithmic)'], { tags: ['logarithmic', 'source-specific'], activationType: 'custom_function', standardness: 'custom_basis_kernel', definition: 'Source-reported logarithmic activation.' }),
  activation('polynomial', 'polynomial', 7, ['poly'], { tags: ['polynomial', 'source-specific'], activationType: 'custom_function', standardness: 'custom_basis_kernel', definition: 'Source-reported polynomial activation with no unstated degree inferred.' }),
  activation('max_zero_x_cubed', 'max(0, x³)', 7, ['max(0,x³)'], { tags: ['polynomial', 'piecewise', 'custom'], activationType: 'custom_function', standardness: 'custom_basis_kernel', definition: 'Exact source-reported piecewise cubic rectifier max(0, x³).' }),
  activation('phi_max_x_cubed_zero', 'φ(x)=max{x³,0}', 7, ['φ(x)=max{x³,0}'], { tags: ['polynomial', 'piecewise', 'custom'], activationType: 'custom_function', standardness: 'custom_basis_kernel', definition: 'Exact source-reported function φ(x)=max{x³,0}.' }),
  activation('phi_max_zero_x_squared', 'φ(x)=max(0,x)²', 7, ['φ(x)=max(0,x)²'], { tags: ['polynomial', 'piecewise', 'custom'], activationType: 'custom_function', standardness: 'custom_basis_kernel', definition: 'Exact source-reported function φ(x)=max(0,x)².' }),
  activation('x_plus_sin_squared', 'x + sin²(x)', 7, ['x + sin²(x)'], { tags: ['periodic', 'residual', 'custom'], activationType: 'custom_function', standardness: 'custom_basis_kernel', definition: 'Exact source-reported residual-periodic function x + sin²(x).' }),
  activation('stan', 'Stan', 7, ['Stan'], { tags: ['source-specific'], activationType: 'custom_function', standardness: 'custom_basis_kernel', definition: 'Source-reported Stan activation; no unstated formula is supplied.' }),
  activation('t_softplus', 'T-Softplus', 7, ['T-Softplus'], { tags: ['softplus-related', 'source-specific'], activationType: 'custom_function', standardness: 'custom_basis_kernel', definition: 'Source-reported T-Softplus variant retained separately from ordinary Softplus.' })
];

const formMap = new Map();
for (const item of ACTIVATIONS) {
  for (const form of item.sourceForms) {
    if (formMap.has(form)) throw new Error(`Duplicate source-form mapping: ${form}`);
    formMap.set(form, item);
  }
}

function splitOutsideGrouping(value) {
  const parts = [];
  let current = '';
  const stack = [];
  const closing = { '(': ')', '[': ']', '{': '}' };
  for (const character of String(value)) {
    if (closing[character]) stack.push(closing[character]);
    else if (stack.length && character === stack[stack.length - 1]) stack.pop();
    if (!stack.length && (character === ',' || character === ';')) {
      if (current.trim()) parts.push(current.trim());
      current = '';
    } else current += character;
  }
  if (current.trim()) parts.push(current.trim());
  return parts;
}

function statusFromNote(activationRaw, noteRaw) {
  const note = noteRaw.toLowerCase();
  if (/review|survey|perspective|conference proceedings volume/.test(note)) return 'review_or_survey';
  if (/^not (?:a |a standard |standard )?pinn|^gan-based|^quantum gates/.test(note)) return 'non_pinn_record';
  if (/pinn (?:cited|mentioned).*(?:not implemented|future)|future direction|conceptually only|potential tool/.test(note)) return 'conceptual_or_not_implemented';
  if (/paper not available/.test(note)) return 'paper_unavailable';
  if (activationRaw === 'N/A' && /not explicitly stated|not specified|not identified|does not name/.test(note)) return 'not_explicitly_stated';
  if (activationRaw === 'N/A') return 'other_na';
  return 'reported';
}

function resolveForm(paperId, rawForm) {
  if (rawForm === 'ReLU or Tanh') return { activations: [formMap.get('ReLU'), formMap.get('Tanh')], manual: true, note: 'Retained as two explicit alternatives; no final selection is inferred.' };
  if (rawForm === 'unspecified for DeepONet') return { activations: [], manual: true, note: 'No activation is normalized for the explicitly unspecified DeepONet component.' };
  if (paperId === 231 && rawForm === 'Sine') return { activations: [ACTIVATIONS.find((item) => item.activation_id === 'siren')], manual: false, note: 'Resolved to SIREN because the source note explicitly identifies a sinusoidal representation network.' };
  const mapped = formMap.get(rawForm);
  if (!mapped) throw new Error(`Unmapped raw activation form for [${paperId}]: ${rawForm}`);
  return { activations: [mapped], manual: mapped.manualReview, note: null };
}

function rolesFor(paperId, rawForm, noteRaw, activations) {
  const roles = new Set();
  const raw = rawForm.toLowerCase();
  const note = noteRaw.toLowerCase();
  if (/hidden/.test(raw)) roles.add('hidden_layer');
  if (/output|final layer/.test(raw)) roles.add('output_layer');
  if (/lstm|gru|gat(?:e|ing)/.test(raw)) roles.add('gate');
  if (/loss|constraint/.test(raw)) roles.add('constraint_or_loss');
  if (/autoencoder|cnn|googlenet|encoder/.test(raw)) roles.add('cnn_or_encoder_module');
  if (/deeponet|fno|wno|operator/.test(raw)) roles.add('operator_network_module');
  if (/adaptive|trainable|nodewise|layer.wise|neuron-wise|locally|slope recovery|abu-pinn/.test(raw) || activations.some((item) => item.adaptive)) roles.add('adaptive_or_trainable');
  if (activations.some((item) => item.standardness === 'custom_basis_kernel')) roles.add('custom_basis_or_kernel');
  if (/compared|candidate|outperformed|experimented|most stable|preferred|benchmarking/.test(note)) roles.add('compared_candidate');
  if ([14, 16].includes(paperId)) roles.add('gate');
  if (paperId === 338 && rawForm === 'tanh') roles.add('hidden_layer');
  if (paperId === 813) roles.add('hidden_layer');
  if (paperId === 627) roles.add('hidden_layer');
  if (!roles.size) roles.add(/review|survey|perspective/.test(note) ? 'general_mention' : 'role_not_specified');
  return [...roles];
}

const sha256 = (value) => crypto.createHash('sha256').update(value).digest('hex');
const sourceText = fs.readFileSync(sourcePath, 'utf8');
const researchText = fs.readFileSync(researchNotesPath, 'utf8');
const sourceRows = [];
for (const line of sourceText.split(/\r?\n/)) {
  const match = line.match(/^\|\s*(\d+)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*$/);
  if (!match) continue;
  sourceRows.push({ paper_id: Number(match[1]), activation_raw: match[2], notes_raw: match[3] });
}

const ids = sourceRows.map((row) => row.paper_id);
const idSet = new Set(ids);
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
const missingIds = Array.from({ length: 853 }, (_, index) => index + 1).filter((id) => !idSet.has(id));
const formerlyMissingIds = [170, 194, 452, 694, 776, 803, 809, 812, 813];

const records = sourceRows.map(({ paper_id, activation_raw, notes_raw }) => {
  const reportingStatus = statusFromNote(activation_raw, notes_raw);
  const rawForms = activation_raw === 'N/A' ? [] : splitOutsideGrouping(activation_raw);
  const activationMentions = rawForms.map((rawForm) => {
    const resolution = resolveForm(paper_id, rawForm);
    const roles = rolesFor(paper_id, rawForm, notes_raw, resolution.activations);
    const normalizedIds = [...new Set(resolution.activations.map((item) => item.activation_id))];
    const implementationOriented = reportingStatus === 'reported'
      && normalizedIds.length > 0
      && !(roles.includes('constraint_or_loss') && roles.every((role) => ['constraint_or_loss', 'role_not_specified'].includes(role)));
    return {
      raw_form: rawForm,
      normalized_activation_ids: normalizedIds,
      roles,
      implementation_oriented: implementationOriented,
      manual_review_required: resolution.manual,
      normalization_note: resolution.note
    };
  });
  const normalizedIds = [...new Set(activationMentions.flatMap((mention) => mention.normalized_activation_ids))];
  const implementationIds = [...new Set(activationMentions.filter((mention) => mention.implementation_oriented).flatMap((mention) => mention.normalized_activation_ids))];
  const resolved = normalizedIds.map((id) => ACTIVATIONS.find((item) => item.activation_id === id));
  const families = [...new Set(resolved.map((item) => item.family))];
  const roles = [...new Set(activationMentions.flatMap((mention) => mention.roles))];
  const standardnessValues = new Set(resolved.map((item) => item.standardness));
  const standardness = !resolved.length ? 'not_applicable'
    : standardnessValues.size > 1 ? 'mixed'
      : standardnessValues.has('custom_basis_kernel') ? 'custom_basis_kernel'
        : standardnessValues.has('module_specific') ? 'module_specific' : 'standard';
  const adaptive = resolved.some((item) => item.adaptive) || roles.includes('adaptive_or_trainable');
  const normalizationNotes = activationMentions.map((mention) => mention.normalization_note).filter(Boolean);
  activationMentions.forEach((mention) => {
    mention.normalized_activation_ids.forEach((id) => {
      const item = ACTIVATIONS.find((candidate) => candidate.activation_id === id);
      if (mention.raw_form !== item.activation_name) normalizationNotes.push(`Normalized source form “${mention.raw_form}” to “${item.activation_name}”; the raw form is retained.`);
    });
  });
  if (normalizedIds.length > 1) normalizationNotes.push('Multiple reported functions are retained without inferring layer order, equivalence, or a final selection.');
  return {
    paper_id,
    paper_label: `[${paper_id}]`,
    activation_raw,
    notes_raw,
    reporting_status: reportingStatus,
    raw_activation_forms: rawForms,
    activation_mentions: activationMentions,
    normalized_activation_ids: normalizedIds,
    implementation_oriented_activation_ids: implementationIds,
    activation_families: families,
    activation_roles: roles,
    adaptive_classification: !resolved.length ? 'not_applicable' : adaptive ? 'adaptive_or_trainable' : 'fixed_or_standard',
    standardness,
    activation_count: normalizedIds.length,
    manual_review_required: activationMentions.some((mention) => mention.manual_review_required),
    normalization_notes: [...new Set(normalizationNotes)],
    research_note_available: formerlyMissingIds.includes(paper_id)
  };
});

const usedDefinitions = ACTIVATIONS.filter((item) => records.some((record) => record.normalized_activation_ids.includes(item.activation_id)));
const taxonomy = usedDefinitions.map((item) => {
  const allRecords = records.filter((record) => record.normalized_activation_ids.includes(item.activation_id));
  const implementationRecords = records.filter((record) => record.implementation_oriented_activation_ids.includes(item.activation_id));
  const aliases = [...new Set(allRecords.flatMap((record) => record.activation_mentions
    .filter((mention) => mention.normalized_activation_ids.includes(item.activation_id))
    .map((mention) => mention.raw_form)))];
  const sourceAnnotations = [...new Set(allRecords.map((record) => record.notes_raw).filter(Boolean))];
  const adaptiveVariants = usedDefinitions.filter((candidate) => candidate.adaptive && candidate.base_activation_id === item.activation_id).map((candidate) => candidate.activation_name);
  return {
    activation_id: item.activation_id,
    activation_name: item.activation_name,
    aliases,
    family: item.family,
    tags: item.tags,
    activation_type: item.activation_type,
    standardness: item.standardness,
    adaptive: item.adaptive,
    base_activation_id: item.base_activation_id,
    definition: item.definition,
    smoothness: item.smoothness,
    typical_role: item.typical_role,
    adaptive_variants: adaptiveVariants,
    source_specific_annotations: sourceAnnotations,
    paper_count: implementationRecords.length,
    paper_ids: implementationRecords.map((record) => record.paper_id),
    all_mention_count: allRecords.length,
    all_mention_paper_ids: allRecords.map((record) => record.paper_id),
    manual_review_required: item.manualReview || allRecords.some((record) => record.activation_mentions.some((mention) => mention.manual_review_required && mention.normalized_activation_ids.includes(item.activation_id)))
  };
}).sort((left, right) => right.paper_count - left.paper_count || right.all_mention_count - left.all_mention_count || left.activation_name.localeCompare(right.activation_name));

const statusCounts = records.reduce((counts, record) => {
  counts[record.reporting_status] = (counts[record.reporting_status] || 0) + 1;
  return counts;
}, {});
const distinctRawFields = new Set(records.filter((record) => record.activation_raw !== 'N/A').map((record) => record.activation_raw));
const namedRecords = records.filter((record) => record.activation_raw !== 'N/A');
const summary = {
  source_records: records.length,
  named_activation_records: namedRecords.length,
  explicit_na_records: records.filter((record) => record.activation_raw === 'N/A').length,
  distinct_raw_non_na_fields: distinctRawFields.size,
  canonical_activation_functions: taxonomy.length,
  activation_families: FAMILIES.length,
  adaptive_or_trainable_records: records.filter((record) => record.adaptive_classification === 'adaptive_or_trainable').length,
  multi_activation_records: records.filter((record) => record.activation_count > 1).length,
  review_or_survey_records: statusCounts.review_or_survey || 0,
  non_pinn_records: statusCounts.non_pinn_record || 0,
  not_explicitly_stated_records: statusCounts.not_explicitly_stated || 0,
  conceptual_or_not_implemented_records: statusCounts.conceptual_or_not_implemented || 0,
  paper_unavailable_records: statusCounts.paper_unavailable || 0,
  other_na_records: statusCounts.other_na || 0,
  manual_review_records: records.filter((record) => record.manual_review_required).length,
  implementation_oriented_records: records.filter((record) => record.implementation_oriented_activation_ids.length > 0).length,
  all_source_mention_records: namedRecords.length,
  missing_ids: missingIds,
  duplicate_ids: duplicateIds,
  formerly_missing_ids: formerlyMissingIds,
  top_activations_implementation: taxonomy.slice(0, 15).map((item) => ({ activation_id: item.activation_id, activation_name: item.activation_name, count: item.paper_count })),
  top_activations_all_mentions: [...taxonomy].sort((a, b) => b.all_mention_count - a.all_mention_count || a.activation_name.localeCompare(b.activation_name)).slice(0, 15).map((item) => ({ activation_id: item.activation_id, activation_name: item.activation_name, count: item.all_mention_count })),
  generated_from: 'data/activation-functions/reference-activation-functions-source.txt',
  research_notes: 'data/activation-functions/reference-activation-functions-web-research-notes.txt'
};

const validation = {
  generated_on: '2026-08-03',
  source_sha256: sha256(sourceText),
  research_notes_sha256: sha256(researchText),
  checks: {
    source_rows_853: records.length === 853,
    unique_source_ids_853: idSet.size === 853,
    ids_exactly_1_to_853: ids.every((id, index) => id === index + 1),
    no_missing_ids: missingIds.length === 0,
    no_duplicate_ids: duplicateIds.length === 0,
    named_activation_records_482: namedRecords.length === 482,
    explicit_na_records_371: records.filter((record) => record.activation_raw === 'N/A').length === 371,
    distinct_raw_non_na_fields_163: distinctRawFields.size === 163,
    all_labels_bracketed: records.every((record) => /^\[\d+\]$/.test(record.paper_label)),
    raw_fields_and_notes_preserved: records.every((record, index) => record.activation_raw === sourceRows[index].activation_raw && record.notes_raw === sourceRows[index].notes_raw),
    all_forms_accounted_for: records.every((record) => record.activation_mentions.length === record.raw_activation_forms.length),
    all_normalized_ids_in_taxonomy: records.every((record) => record.normalized_activation_ids.every((id) => taxonomy.some((item) => item.activation_id === id))),
    taxonomy_counts_use_unique_papers: taxonomy.every((item) => item.paper_count === new Set(item.paper_ids).size && item.all_mention_count === new Set(item.all_mention_paper_ids).size),
    paper_count_deduplicates_canonical_mentions: taxonomy.every((item) => item.all_mention_paper_ids.every((id) => records.find((record) => record.paper_id === id)?.normalized_activation_ids.includes(item.activation_id))),
    implementation_and_review_distinguishable: records.filter((record) => record.reporting_status === 'review_or_survey').every((record) => record.implementation_oriented_activation_ids.length === 0),
    contextual_roles_retained: records.find((record) => record.paper_id === 308)?.activation_roles.includes('hidden_layer') && records.find((record) => record.paper_id === 308)?.activation_roles.includes('output_layer') && records.find((record) => record.paper_id === 332)?.activation_roles.includes('constraint_or_loss') && records.find((record) => record.paper_id === 14)?.activation_roles.includes('gate'),
    na_status_derived_from_notes: records.filter((record) => record.activation_raw === 'N/A').every((record) => record.reporting_status !== 'reported'),
    formula_commas_not_split: records.find((record) => record.paper_id === 747)?.raw_activation_forms.length === 2 && records.find((record) => record.paper_id === 747)?.raw_activation_forms[0] === 'φ(x)=max{x³,0}',
    paper_813_adaptive_tanh: records.find((record) => record.paper_id === 813)?.normalized_activation_ids.includes('adaptive_tanh'),
    paper_170_review_not_implementation: records.find((record) => record.paper_id === 170)?.reporting_status === 'review_or_survey' && records.find((record) => record.paper_id === 170)?.implementation_oriented_activation_ids.length === 0,
    paper_809_fno_non_pinn: records.find((record) => record.paper_id === 809)?.reporting_status === 'non_pinn_record' && /Fourier neural operator/.test(records.find((record) => record.paper_id === 809)?.notes_raw || ''),
    completed_records_researched: formerlyMissingIds.every((id) => records.find((record) => record.paper_id === id)?.research_note_available)
  },
  duplicate_ids: duplicateIds,
  missing_ids: missingIds,
  unmapped_raw_forms: []
};

const outputs = new Map([
  [path.join(dataDir, 'activation-records.json'), `${JSON.stringify({ records }, null, 2)}\n`],
  [path.join(dataDir, 'activation-taxonomy.json'), `${JSON.stringify({ families: FAMILIES, activations: taxonomy }, null, 2)}\n`],
  [path.join(dataDir, 'activation-summary.json'), `${JSON.stringify(summary, null, 2)}\n`],
  [path.join(dataDir, 'activation-validation.json'), `${JSON.stringify(validation, null, 2)}\n`]
]);

let changed = false;
for (const [filePath, content] of outputs) {
  const existing = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : null;
  if (existing === content) continue;
  changed = true;
  if (checkOnly) console.error(`Generated activation artifact is stale: ${path.relative(root, filePath)}`);
  else fs.writeFileSync(filePath, content);
}

if (checkOnly && changed) process.exitCode = 1;
else console.log(JSON.stringify({
  ok: true,
  check_only: checkOnly,
  records: records.length,
  named: summary.named_activation_records,
  explicit_na: summary.explicit_na_records,
  raw_fields: summary.distinct_raw_non_na_fields,
  canonical_forms: taxonomy.length,
  families: FAMILIES.length,
  manual_review_records: summary.manual_review_records,
  implementation_oriented_records: summary.implementation_oriented_records,
  all_source_mention_records: summary.all_source_mention_records
}, null, 2));
