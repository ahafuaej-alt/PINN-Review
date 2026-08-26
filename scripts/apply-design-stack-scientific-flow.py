import json
import re
from pathlib import Path

ROOT = Path('.')
DATA = ROOT / 'data/frameworks/design-stack.json'
JS = ROOT / 'assets/frameworks.js'
CSS = ROOT / 'assets/frameworks.css'
VALIDATOR = ROOT / 'scripts/validate-frameworks.mjs'
QA = ROOT / 'scripts/visual-qa-frameworks.mjs'
INDEX = ROOT / 'frameworks/design-stack/index.html'


def replace_once(text, old, new, label):
    if old not in text:
        raise SystemExit(f'missing replacement anchor: {label}')
    return text.replace(old, new, 1)


def slug(value):
    return re.sub(r'(^-|-$)', '', re.sub(r'[^a-z0-9]+', '-', value.lower()))


page = json.loads(DATA.read_text())
page['interpretation'] = (
    'The vertical 1→10 path is the dominant typical design sequence, not a universal recipe. '
    'Strong interdependence is shown only between specific stage choices that mutually constrain one another; '
    'phase rails are organizational labels rather than relationship arrows. Evaluation feedback returns the workflow '
    'to the earliest plausible design cause, and a redesign is accepted only after numerical, physical, robustness, '
    'uncertainty, and computational-cost checks improve.'
)

stage_by_id = {stage['id']: stage for stage in page['stages']}

# Split scientifically distinct combined labels so each maintained concept can be inspected independently.
replacements = {
    'representation': {
        'Fourier features / FNO': ['Fourier features', 'Fourier neural operator (FNO)'],
        'SIREN / sinusoidal / RBF': ['SIREN', 'Sinusoidal activation', 'Radial basis functions (RBF)'],
    },
    'physics-enforcement': {
        'Weak / variational form': ['Weak form', 'Variational form'],
    },
    'sampling': {
        'Uniform / random / LHS / Sobol': ['Uniform sampling', 'Random sampling', 'Latin hypercube sampling (LHS)', 'Sobol sampling'],
    },
    'evaluation': {
        'MSE, RMSE, MAE': ['Mean squared error (MSE)', 'Root mean squared error (RMSE)', 'Mean absolute error (MAE)'],
        'L₂, L∞, R²': ['Relative L₂ error', 'Maximum / L∞ error', 'Coefficient of determination (R²)'],
    },
}
for stage_id, mapping in replacements.items():
    for column in stage_by_id[stage_id]['columns']:
        expanded = []
        for item in column['items']:
            expanded.extend(mapping.get(item, [item]))
        column['items'] = expanded

fallback = {
    'physical-problem': [('ecosystem:problem', 'PINN Ecosystem · Problem definition')],
    'computational-role': [('ecosystem:purpose', 'PINN Ecosystem · Computational role')],
    'inputs-outputs': [('ecosystem:representation', 'PINN Ecosystem · Inputs and outputs')],
    'representation': [('page:architectures', 'Architectures')],
    'physics-enforcement': [('page:mathematical-formulations', 'Mathematical Formulations')],
    'differentiation': [('page:mathematical-formulations', 'Mathematical Formulations')],
    'sampling': [('ecosystem:collocation-sampling', 'PINN Ecosystem · Sampling')],
    'loss': [('page:training', 'Training')],
    'optimization': [('page:training', 'Training')],
    'evaluation': [('page:performance-metrics', 'Performance Metrics')],
}
exact = {
    ('representation', 'Fourier features'): [('architecture:fourier-features', 'Fourier features')],
    ('representation', 'SIREN'): [('architecture:siren', 'SIREN')],
    ('representation', 'Sinusoidal activation'): [('page:activation-functions', 'Activation Functions')],
    ('physics-enforcement', 'Weak form'): [('formulation:weak-form', 'Weak form')],
    ('physics-enforcement', 'Variational form'): [('formulation:variational-form', 'Variational form')],
    ('differentiation', 'Automatic differentiation (AD)'): [('method:automatic-differentiation', 'Automatic differentiation')],
    ('sampling', 'Sobol sampling'): [('sampling:sobol', 'Sobol sampling')],
    ('optimization', 'Adam'): [('optimizer:adam', 'Adam'), ('page:optimizers', 'Optimizers')],
    ('optimization', 'L-BFGS'): [('optimizer:lbfgs', 'L-BFGS'), ('page:optimizers', 'Optimizers')],
    ('optimization', 'Hybrid Adam → L-BFGS'): [('optimizer:adam', 'Adam'), ('optimizer:lbfgs', 'L-BFGS'), ('page:optimizers', 'Optimizers')],
    ('evaluation', 'Mean squared error (MSE)'): [('metric:mse', 'Mean squared error (MSE)')],
    ('evaluation', 'Root mean squared error (RMSE)'): [('metric:rmse', 'Root mean squared error (RMSE)')],
    ('evaluation', 'Mean absolute error (MAE)'): [('metric:mae', 'Mean absolute error (MAE)')],
    ('evaluation', 'Relative L₂ error'): [('metric:relative-l2', 'Relative L2 error')],
    ('evaluation', 'Coefficient of determination (R²)'): [('metric:r2', 'Coefficient of determination (R²)')],
}
summary_overrides = {
    ('representation', 'Fourier features'): 'Input-feature mapping that enriches high-frequency or multiscale representation; it is kept distinct from Fourier neural operator architectures.',
    ('representation', 'Fourier neural operator (FNO)'): 'Operator-learning architecture based on spectral convolution; it is not the same canonical concept as Fourier feature input mapping.',
    ('representation', 'SIREN'): 'Sinusoidal representation-network architecture; it is kept distinct from a generic sine activation function.',
    ('representation', 'Sinusoidal activation'): 'Periodic activation choice used inside a representation; it is not merged with the SIREN architecture.',
    ('physics-enforcement', 'Weak form'): 'Integrated test-function enforcement of the governing equation; maintained as a distinct canonical concept from variational formulation.',
    ('physics-enforcement', 'Variational form'): 'Variational or stationarity-based integral formulation; maintained separately from the weak-form concept.',
    ('differentiation', 'Automatic differentiation (AD)'): 'Computational-graph differentiation used to evaluate derivatives and residual operators.',
    ('sampling', 'Sobol sampling'): 'Low-discrepancy Sobol point placement for collocation or constraint sampling.',
    ('optimization', 'Adam'): 'Adaptive first-order optimizer used widely in the initial or exploratory phase of PINN training.',
    ('optimization', 'L-BFGS'): 'Quasi-Newton optimizer commonly used for full-batch refinement of PINN objectives.',
    ('optimization', 'Hybrid Adam → L-BFGS'): 'Sequential training strategy that uses Adam and L-BFGS as distinct optimizer stages rather than treating the sequence as a new optimizer identity.',
    ('evaluation', 'Root mean squared error (RMSE)'): 'Root-mean-square prediction error used as a solution-accuracy metric; distinct from mean squared error.',
    ('evaluation', 'Mean squared error (MSE)'): 'Mean squared prediction error; distinct from RMSE even though RMSE is its square root.',
    ('evaluation', 'Mean absolute error (MAE)'): 'Mean absolute prediction error used as a robust average-magnitude accuracy measure.',
    ('evaluation', 'Relative L₂ error'): 'Relative field error measured in an L₂ norm, normalized by an appropriate reference norm.',
    ('evaluation', 'Coefficient of determination (R²)'): 'Goodness-of-fit statistic comparing predictive variance explanation against the reference data.',
}

# Every visible Stage 1–10 list item becomes a stable inspectable Framework object. Exact concepts use canonical IDs;
# other items remain clickable and point to the scientifically appropriate maintained Atlas family.
for stage in page['stages']:
    records = []
    for column in stage['columns']:
        for item in column['items']:
            concepts = exact.get((stage['id'], item), fallback[stage['id']])
            records.append({
                'id': f"item-{stage['id']}-{slug(item)}",
                'label': item,
                'column': column['title'],
                'summary': summary_overrides.get((stage['id'], item), f"{item} is a Design Stack choice within {stage['title']}; its interpretation depends on the governing problem and the surrounding design choices."),
                'concepts': [{'id': concept_id, 'label': label} for concept_id, label in concepts],
                'evidence': []
            })
    stage['interactive_items'] = records

flow_labels = {
    'flow-1-2': ('Problem definition frames the computational role', 'Governing equations, domain, conditions, data, and regime define which computational task is scientifically meaningful.'),
    'flow-2-3': ('Computational role specifies required inputs and outputs', 'Forward, inverse, discovery, operator-learning, control, and uncertainty tasks require different model interfaces.'),
    'flow-3-4': ('Input–output interface constrains representation choice', 'State dimension, parameterization, geometry encoding, and requested outputs constrain the representation that can realize the task.'),
    'flow-4-5': ('Representation must support the selected physics enforcement', 'The approximation space must be compatible with the regularity, admissibility, and constraint mechanism used to impose the physics.'),
    'flow-5-6': ('Physics formulation sets operator-evaluation requirements', 'Strong, weak, integral, conservative, or hard enforcement determines which derivatives, quadrature rules, or discrete operators must be evaluated.'),
    'flow-6-7': ('Residual realization informs constraint sampling', 'The residual/operator implementation determines where evaluations are meaningful, affordable, and informative for collocation or quadrature.'),
    'flow-7-8': ('Sampled constraints instantiate the composite objective', 'Interior, boundary, initial, interface, data, or quadrature samples determine which objective terms are actually evaluated.'),
    'flow-8-9': ('Objective structure conditions the optimization problem', 'Loss scales, conflicts, curvature, and conditioning determine the numerical optimization problem presented to the training algorithm.'),
    'flow-9-10': ('Training produces the candidate model to evaluate', 'The trained state is not accepted until numerical, physical, robustness, uncertainty, and computational checks are performed.'),
}
flows = []
for relation in page['relationships']:
    if relation['type'] != 'flow':
        continue
    relation['label'], relation['summary'] = flow_labels[relation['id']]
    relation['evidence'] = relation.get('evidence', [])
    flows.append(relation)

couplings = [
    {
        'id': 'coupling-3-4', 'type': 'coupling', 'from': 'inputs-outputs', 'to': 'representation', 'lane': 0,
        'label': 'Inputs / outputs ↔ representation',
        'summary': 'The interface constrains architecture, while the representational strategy can require additional encoded inputs, latent variables, or auxiliary outputs.',
        'evidence': [
            {'atlas_id': 726, 'support': 'Direct', 'rationale': 'Parameterized PINNs explicitly encode PDE parameters as latent inputs, demonstrating that representation design and the input-output interface must be chosen together.'}
        ]
    },
    {
        'id': 'coupling-4-6', 'type': 'coupling', 'from': 'representation', 'to': 'differentiation', 'lane': 1,
        'label': 'Representation ↔ differentiation',
        'summary': 'Representation regularity and basis choice affect usable derivatives, while derivative order and numerical differentiation cost constrain viable representations.',
        'evidence': [
            {'atlas_id': 401, 'support': 'Synthesized', 'rationale': 'The reviewed methodology treats neural representation and differential-operator evaluation as coupled design choices because approximation regularity and derivative requirements jointly determine residual construction.'},
            {'atlas_id': 552, 'support': 'Equivalent', 'rationale': 'High-dimensional high-order differentiation cost motivates alternative residual evaluation, showing that derivative requirements feed back on practical representation design.'}
        ]
    },
    {
        'id': 'coupling-5-6', 'type': 'coupling', 'from': 'physics-enforcement', 'to': 'differentiation', 'lane': 0,
        'label': 'Physics enforcement ↔ differentiation',
        'summary': 'The enforcement form determines derivative, quadrature, or discrete-operator requirements, while available operator evaluation can make one enforcement strategy preferable to another.',
        'evidence': [
            {'atlas_id': 636, 'support': 'Direct', 'rationale': 'Variational residual evaluation makes test functions and quadrature explicit numerical choices, coupling weak enforcement directly to residual evaluation.'},
            {'atlas_id': 554, 'support': 'Direct', 'rationale': 'Coupled automatic and numerical differentiation changes residual realization and demonstrates that operator evaluation and enforcement cannot always be selected independently.'}
        ]
    },
    {
        'id': 'coupling-5-8', 'type': 'coupling', 'from': 'physics-enforcement', 'to': 'loss', 'lane': 3,
        'label': 'Physics enforcement ↔ loss construction',
        'summary': 'Soft, hard, conservative, interface, and constitutive enforcement determine which loss terms exist, while loss formulation determines how softly enforced constraints compete during training.',
        'evidence': [
            {'atlas_id': 637, 'support': 'Direct', 'rationale': 'Comparison of exact and penalty-based boundary enforcement shows that constraint mechanism changes whether boundary satisfaction appears as a competing loss term.'},
            {'atlas_id': 628, 'support': 'Direct', 'rationale': 'Conservative PINNs introduce conservation and interface-flux conditions that alter the objective structure relative to a pointwise PDE penalty alone.'}
        ]
    },
    {
        'id': 'coupling-7-8', 'type': 'coupling', 'from': 'sampling', 'to': 'loss', 'lane': 0,
        'label': 'Sampling ↔ loss construction',
        'summary': 'Sampling determines which residuals contribute to the objective, while residual or loss information can be used to adapt the sampling distribution.',
        'evidence': [
            {'atlas_id': 534, 'support': 'Direct', 'rationale': 'Loss-proportional importance sampling explicitly uses objective information to change collocation selection, demonstrating bidirectional sampling-loss dependence.'},
            {'atlas_id': 479, 'support': 'Direct', 'rationale': 'Residual-based adaptive refinement reallocates collocation points using current residual information, coupling objective diagnostics back to sampling.'}
        ]
    },
    {
        'id': 'coupling-8-9', 'type': 'coupling', 'from': 'loss', 'to': 'optimization', 'lane': 1,
        'label': 'Loss construction ↔ optimization',
        'summary': 'Loss scaling, gradient conflict, curvature, and conditioning affect optimizer behavior, while optimization diagnostics motivate reweighting or reformulating the objective.',
        'evidence': [
            {'atlas_id': 525, 'support': 'Direct', 'rationale': 'Gradient-flow analysis identifies stiffness and imbalance among composite PINN objectives and motivates gradient-informed balancing during optimization.'},
            {'atlas_id': 823, 'support': 'Direct', 'rationale': 'Loss-landscape analysis connects differential-operator conditioning to optimizer performance and motivates hybrid or curvature-aware optimization strategies.'}
        ]
    },
]

feedback_spec = {
    'feedback-10-1': {
        'label': 'Systematic model-form mismatch → revisit the physical problem',
        'trigger': 'Systematic model-form, regime, or benchmark mismatch',
        'action': 'Revisit governing assumptions, domain, conditions, forcing, or the target regime',
        'message': 'Systematic model-form mismatch → revisit problem definition',
        'summary': 'Only persistent evidence of a misframed physical problem should send the workflow back to Stage 1; ordinary training error should first be diagnosed downstream.',
        'lane': 8,
    },
    'feedback-10-2': {
        'label': 'Task or repeated-query mismatch → reconsider the computational role',
        'trigger': 'The selected task is inefficient, ill-posed, or mismatched to repeated use',
        'action': 'Reconsider forward/inverse/discovery/surrogate/operator/control/uncertainty role',
        'message': 'Task or repeated-query mismatch → reconsider computational role',
        'summary': 'Evaluation can show that a single-solution PINN, inverse model, operator surrogate, or uncertainty formulation is the wrong computational role for the intended use.',
        'lane': 7,
    },
    'feedback-10-3': {
        'label': 'Poor identifiability or missing state information → revise inputs / outputs',
        'trigger': 'Poor identifiability, missing observables, or inadequate state coverage',
        'action': 'Revise encoded inputs, auxiliary outputs, latent variables, or measured quantities',
        'message': 'Poor identifiability → revise inputs / outputs',
        'summary': 'Evaluation of inverse recovery or state reconstruction can reveal that the model interface does not expose the information needed by the task.',
        'lane': 6,
    },
    'feedback-10-4': {
        'label': 'Spectral or localized approximation failure → change representation',
        'trigger': 'Spectral bias, multiscale error, localized approximation failure, or inadequate capacity',
        'action': 'Change architecture, basis, activation, decomposition, or network structure',
        'message': 'Spectral / local approximation failure → change representation',
        'summary': 'Persistent approximation structure in the validation error can identify representation rather than optimization as the dominant cause.',
        'lane': 5,
    },
    'feedback-10-5': {
        'label': 'Constraint or conservation failure → reformulate physics enforcement',
        'trigger': 'Persistent boundary, interface, conservation, admissibility, or constitutive violation',
        'action': 'Change strong/weak/integral formulation or soft/hard/conservative constraint mechanism',
        'message': 'Constraint / conservation failure → reformulate physics enforcement',
        'summary': 'Physical diagnostics can indicate that the governing constraints need a different enforcement mechanism rather than merely a larger penalty weight.',
        'lane': 4,
    },
    'feedback-10-6': {
        'label': 'Derivative noise, memory, or operator cost → change residual evaluation',
        'trigger': 'Noisy/high-order derivatives, excessive memory, unstable residuals, or high operator cost',
        'action': 'Reformulate derivative order, use auxiliary variables, numerical differentiation, or discrete residuals',
        'message': 'Derivative / operator bottleneck → change residual evaluation',
        'summary': 'Cost or instability traceable to derivative evaluation should redirect redesign to Stage 6 rather than to unrelated architecture or optimizer changes.',
        'lane': 3,
    },
    'feedback-10-7': {
        'label': 'Localized error or poor coverage → adapt sampling',
        'trigger': 'Localized error, under-resolved regions, weak boundary/interface coverage, or causal gaps',
        'action': 'Resample collocation, boundary, interface, observation, quadrature, or time points',
        'message': 'Localized error / poor coverage → adapt sampling',
        'summary': 'Spatial, temporal, boundary, or interface error localization is a direct signal to reconsider where constraints are sampled.',
        'lane': 2,
    },
    'feedback-10-8': {
        'label': 'Objective imbalance or competing constraints → rebalance the loss',
        'trigger': 'One objective dominates, gradients conflict, or constraints converge at incompatible rates',
        'action': 'Rescale, reweight, normalize, or reformulate the composite objective',
        'message': 'Objective imbalance → rebalance / reformulate loss',
        'summary': 'Loss-term and gradient diagnostics should redirect redesign to objective construction when the failure is multi-objective imbalance rather than inadequate sampling.',
        'lane': 1,
    },
    'feedback-10-9': {
        'label': 'Stagnation or unstable convergence → adjust training strategy',
        'trigger': 'Optimization stagnation, unstable updates, slow convergence, or sensitivity to initialization',
        'action': 'Change optimizer, learning rate, initialization, schedule, curriculum, staging, or stopping strategy',
        'message': 'Stagnation / instability → adjust optimizer and training strategy',
        'summary': 'When formulation and coverage are adequate but optimization fails to reach a useful solution, redesign should target Stage 9.',
        'lane': 0,
    },
}
feedbacks = []
for relation in page['relationships']:
    if relation['type'] != 'feedback':
        continue
    relation.update(feedback_spec[relation['id']])
    feedbacks.append(relation)

page['relationships'] = flows + couplings + feedbacks
DATA.write_text(json.dumps(page, ensure_ascii=False, indent=2) + '\n')

# Shared renderer: add Design Stack-specific relationship terminology, stage-item controls,
# phase fingerprints, specific feedback messages, and dedicated routing lanes.
js = JS.read_text()
js = replace_once(js,
"  const relationshipMeta = {\n    flow: { label: 'Forward dependency', description: 'Primary directional dependency in the maintained framework.' },\n    coupling: { label: 'Coupling / interdependence', description: 'Mutually constraining design choices; neither side is treated as independent.' },\n    feedback: { label: 'Feedback / redesign', description: 'Evidence-driven return from an observed outcome to an upstream design cause.' },\n    selected: { label: 'Selected relationship', description: 'The relationship currently pinned in the inspector.' }\n  };",
"  const relationshipMeta = {\n    flow: { label: 'Forward dependency', description: 'Primary directional dependency in the maintained framework.' },\n    coupling: { label: 'Coupling / interdependence', description: 'Mutually constraining design choices; neither side is treated as independent.' },\n    feedback: { label: 'Feedback / redesign', description: 'Evidence-driven return from an observed outcome to an upstream design cause.' },\n    selected: { label: 'Selected relationship', description: 'The relationship currently pinned in the inspector.' }\n  };\n  const designStackRelationshipMeta = {\n    flow: { label: 'Main design flow', description: 'Dominant typical reading path from Stage 1 to Stage 10.' },\n    coupling: { label: 'Strong interdependence', description: 'Specific stage choices that mutually constrain one another.' },\n    feedback: { label: 'Feedback / redesign', description: 'Evaluation-guided return to the earliest plausible upstream cause.' },\n    selected: relationshipMeta.selected\n  };\n  const relationshipInfo = (type) => root === 'design-stack' ? (designStackRelationshipMeta[type] || relationshipMeta[type]) : relationshipMeta[type];",
'relationship metadata')
js = replace_once(js,
"      const meta = relationshipMeta[type];",
"      const meta = relationshipInfo(type);",
'relationship legend meta')
js = replace_once(js,
"      'design-stack': 'Select a phase, design stage, forward dependency, or evaluation feedback loop.',",
"      'design-stack': 'Select a phase, stage, individual design element, main-flow dependency, strong interdependence, or evaluation feedback loop.',",
'default inspector text')
old_render_stack = '''  function renderDesignStack(page) {
    const phases = page.phases.map((phase) => {
      const stages = phase.stage_ids.map((id) => page.stages.find((stage) => stage.id === id));
      return `<section class="stack-phase" data-filter-key="${phase.id}" data-search="${esc(flatten({ phase, stages }))}">
        <button class="stack-phase-rail" type="button" data-inspect-id="phase:${phase.id}"><b>${phase.roman}</b><span>${esc(phase.title)}</span><small>${esc(phase.summary)}</small><i aria-hidden="true">↕</i></button>
        <div class="stack-stage-list">${stages.map((stage) => renderStackStage(stage)).join('')}</div>
      </section>`;
    }).join('');
    return `<div class="stack-board relation-board" data-relation-board>
      <svg class="relation-layer" data-relation-layer aria-label="Design flow and feedback relationships"></svg>
      <div class="stack-content">${phases}</div>
      <aside class="stack-feedback-notes" aria-label="Evaluation feedback families">
        <strong>Evaluation-guided redesign</strong>
        <span data-targets="physical-problem,computational-role">Redefine the problem or role</span>
        <span data-targets="inputs-outputs,representation">Change outputs or architecture</span>
        <span data-targets="physics-enforcement,differentiation">Reformulate physics or differentiation</span>
        <span data-targets="sampling,loss">Resample or rebalance the loss</span>
        <span data-targets="optimization">Adjust optimizer, LR, initialization, or strategy</span>
      </aside>
      <div class="stack-bottom-legend"><span><i class="flow-line"></i>Main design flow</span><span><i class="coupling-line"></i>Strong interdependence</span><span><i class="feedback-line"></i>Feedback / redesign loops</span></div>
    </div>`;
  }

  function renderStackStage(stage) {
    return `<article class="stack-stage framework-object" tabindex="0" data-node-id="${stage.id}" data-inspect-id="${stage.id}" data-search="${esc(flatten(stage))}">
      <header><span>${stage.number}</span><div><h3>${esc(stage.title)}</h3><p>${esc(stage.subtitle)}</p></div></header>
      <div class="stack-stage-columns">${stage.columns.map((column) => `<section><b>${esc(column.title)}</b><ul>${column.items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul></section>`).join('')}</div>
    </article>`;
  }'''
new_render_stack = '''  function compactDesignStackLegend() {
    return ['flow', 'coupling', 'feedback', 'selected'].map((type) => `<span><i class="relation-swatch" data-type="${type}"><i></i></i>${esc(relationshipInfo(type).label)}</span>`).join('');
  }

  function renderDesignStack(page) {
    const phases = page.phases.map((phase) => {
      const stages = phase.stage_ids.map((id) => page.stages.find((stage) => stage.id === id));
      return `<section class="stack-phase" data-filter-key="${phase.id}" data-search="${esc(flatten({ phase, stages }))}">
        <button class="stack-phase-rail" type="button" data-inspect-id="phase:${phase.id}"><b>${phase.roman}</b><span>${esc(phase.title)}</span><small>${esc(phase.summary)}</small></button>
        <div class="stack-stage-list">${stages.map((stage) => renderStackStage(stage)).join('')}</div>
      </section>`;
    }).join('');
    const feedback = page.relationships.filter((relation) => relation.type === 'feedback');
    return `<div class="stack-board relation-board" data-relation-board>
      <svg class="relation-layer" data-relation-layer aria-label="Main design flow, strong interdependence, and evaluation-guided redesign relationships"></svg>
      <div class="stack-content">${phases}</div>
      <aside class="stack-feedback-notes" aria-label="Evaluation-specific redesign signals">
        <strong>Evaluation-guided redesign</strong><small>Return to the earliest plausible cause.</small>
        ${feedback.map((relation) => `<button type="button" data-inspect-id="${relation.id}" title="${esc(relation.trigger)}"><span>${esc(relation.message)}</span><i>Open →</i></button>`).join('')}
      </aside>
      <div class="stack-bottom-legend" aria-label="Design Stack relationship legend">${compactDesignStackLegend()}</div>
    </div>`;
  }

  function renderStackStage(stage) {
    const interactive = new Map((stage.interactive_items || []).map((item) => [item.label, item]));
    return `<article class="stack-stage framework-object" tabindex="0" data-node-id="${stage.id}" data-inspect-id="${stage.id}" data-search="${esc(flatten(stage))}">
      <header><span>${stage.number}</span><div><h3>${esc(stage.title)}</h3><p>${esc(stage.subtitle)}</p></div></header>
      <div class="stack-stage-columns">${stage.columns.map((column) => `<section><b>${esc(column.title)}</b><ul>${column.items.map((label) => { const item = interactive.get(label); return `<li>${item ? `<button class="stack-stage-item" type="button" data-inspect-id="${item.id}" title="Inspect ${esc(label)}">${esc(label)}<i aria-hidden="true">↗</i></button>` : esc(label)}</li>`; }).join('')}</ul></section>`).join('')}</div>
    </article>`;
  }'''
js = replace_once(js, old_render_stack, new_render_stack, 'design stack renderer')
js = replace_once(js,
"      page.stages.forEach((item) => state.objects.set(item.id, { ...item, kind: 'stage' }));\n      page.relationships.forEach((item) => state.objects.set(item.id, { ...item, kind: 'relationship' }));",
"      page.stages.forEach((item) => {\n        state.objects.set(item.id, { ...item, kind: 'stage' });\n        (item.interactive_items || []).forEach((child) => state.objects.set(child.id, { ...child, kind: 'stage-item', parentStage: item.id, phase: item.phase }));\n      });\n      page.relationships.forEach((item) => state.objects.set(item.id, { ...item, kind: 'relationship' }));",
'design stack object index')
js = replace_once(js,
"    return `<div class=\"framework-inspector-head\">${frameworkIcon(iconForItem(item))}<div><p class=\"eyebrow\">${esc(kindLabel(item.kind))}</p><h2>${esc(title)}</h2></div></div>",
"    return `<div class=\"framework-inspector-head\">${frameworkIcon(iconForItem(item))}<div><p class=\"eyebrow\">${esc(kindLabel(item.kind))}</p><h2>${esc(title)}</h2>${renderDesignStackPhaseFingerprint(item)}</div></div>",
'inspector fingerprint call')
insert_anchor = "  function renderScientificMeaning(item) {"
phase_helpers = '''  function designStackPhaseIds(item) {
    if (root !== 'design-stack') return [];
    if (item.kind === 'phase') return [item.id];
    if (item.kind === 'stage' || item.kind === 'stage-item') return [item.phase];
    if (item.kind === 'relationship') {
      const from = state.objects.get(item.from), to = state.objects.get(item.to);
      return [...new Set([from?.phase, to?.phase].filter(Boolean))];
    }
    return [];
  }

  function renderDesignStackPhaseFingerprint(item) {
    const phaseIds = designStackPhaseIds(item);
    if (!phaseIds.length) return '';
    return `<div class="design-stack-phase-fingerprints">${phaseIds.map((id) => { const phase = state.page.phases.find((entry) => entry.id === id); return phase ? `<span data-phase="${phase.id}">${phase.roman} · ${esc(phase.title)}</span>` : ''; }).join('')}</div>`;
  }

'''
js = replace_once(js, insert_anchor, phase_helpers + insert_anchor, 'phase fingerprint helpers')
js = replace_once(js,
"    if (item.kind === 'relationship') return `<div class=\"relationship-route\"><span>${esc(objectTitle(item.from))}</span><i>→</i><span>${esc(objectTitle(item.to))}</span></div><p>${esc(item.summary || item.detail || '')}</p>`;",
"    if (item.kind === 'relationship') { const arrow = item.type === 'coupling' ? '↔' : '→'; return `<div class=\"relationship-route\"><span>${esc(objectTitle(item.from))}</span><i>${arrow}</i><span>${esc(objectTitle(item.to))}</span></div><p>${esc(item.summary || item.detail || '')}</p>${item.type === 'feedback' ? `<div class=\"design-stack-feedback-detail\"><b>Observed signal</b><p>${esc(item.trigger || '')}</p><b>Targeted redesign</b><p>${esc(item.action || '')}</p></div>` : ''}`; }",
'relationship inspector')
js = replace_once(js,
"    if (item.kind === 'matrix-row') return `<div class=\"framework-relationship-list\">",
"    if (item.kind === 'stage-item') return `<div class=\"framework-relationship-list\"><button type=\"button\" data-inspect-id=\"${item.parentStage}\"><span>Parent stage</span><b>${esc(objectTitle(item.parentStage))}</b><small>${esc(item.column || '')}</small></button></div>`;\n    if (item.kind === 'matrix-row') return `<div class=\"framework-relationship-list\">",
'stage item relationship section')
js = replace_once(js,
"${esc(relationshipMeta[relation.type]?.label || relation.type)}",
"${esc(relationshipInfo(relation.type)?.label || relation.type)}",
'relationship list label')
js = replace_once(js,
"function kindLabel(kind) { return ({ phase: 'Design phase', stage: 'Design stage', relationship: 'Scientific relationship'",
"function kindLabel(kind) { return ({ phase: 'Design phase', stage: 'Design stage', 'stage-item': 'Design Stack element', relationship: 'Scientific relationship'",
'stage item kind label')
js = replace_once(js,
"      if (item.kind === 'stage') { const phase = state.page.phases.find((entry) => entry.id === item.phase); return `${phase?.roman || ''} · ${item.number} · ${item.title}`.replace(/^ · /, ''); }\n      if (item.kind === 'relationship') return `Relationship · ${objectTitle(item.from)} → ${objectTitle(item.to)}`;",
"      if (item.kind === 'stage') { const phase = state.page.phases.find((entry) => entry.id === item.phase); return `${phase?.roman || ''} · ${item.number} · ${item.title}`.replace(/^ · /, ''); }\n      if (item.kind === 'stage-item') { const stage = state.objects.get(item.parentStage); const phase = state.page.phases.find((entry) => entry.id === item.phase); return `${phase?.roman || ''} · ${stage?.number || ''} · ${stage?.title || item.parentStage} · ${item.column} · ${item.title}`.replace(/^ · /, ''); }\n      if (item.kind === 'relationship') return `Relationship · ${objectTitle(item.from)} ${item.type === 'coupling' ? '↔' : '→'} ${objectTitle(item.to)}`;",
'stage item framework location')
old_path = '''    if (root === 'design-stack') {
      if (relation.type === 'flow') {
        const sx = source.left + source.width / 2, sy = source.bottom, tx = target.left + target.width / 2, ty = target.top;
        const middle = (sy + ty) / 2; return `M ${sx} ${sy} C ${sx} ${middle}, ${tx} ${middle}, ${tx} ${ty}`;
      }
      const sx = source.right, sy = source.top + source.height / 2, tx = target.right, ty = target.top + target.height / 2;
      const rail = width - 18 - (index % 3) * 8; return `M ${sx} ${sy} C ${rail} ${sy}, ${rail} ${ty}, ${tx} ${ty}`;
    }'''
new_path = '''    if (root === 'design-stack') {
      const lane = Number.isFinite(Number(relation.lane)) ? Number(relation.lane) : index % 4;
      if (relation.type === 'flow') {
        const sx = source.left + source.width / 2, sy = source.bottom + 1, tx = target.left + target.width / 2, ty = target.top - 1;
        const middle = (sy + ty) / 2; return `M ${sx} ${sy} C ${sx} ${middle}, ${tx} ${middle}, ${tx} ${ty}`;
      }
      if (relation.type === 'coupling') {
        const sx = source.left, sy = source.top + source.height / 2, tx = target.left, ty = target.top + target.height / 2;
        const rail = Math.max(146, Math.min(source.left, target.left) - 12 - lane * 5);
        return `M ${sx} ${sy} C ${rail} ${sy}, ${rail} ${ty}, ${tx} ${ty}`;
      }
      const sx = source.right, sy = source.top + source.height / 2, tx = target.right, ty = target.top + target.height / 2;
      const rail = Math.min(width - 184, Math.max(source.right, target.right) + 18 + lane * 6);
      return `M ${sx} ${sy} C ${rail} ${sy}, ${rail} ${ty}, ${tx} ${ty}`;
    }'''
js = replace_once(js, old_path, new_path, 'design stack relation routing')
js = replace_once(js,
"    const types = root === 'design-stack' ? ['flow', 'coupling', 'feedback'] : ['coupling', 'feedback'];\n    return `<div class=\"framework-export-legend\">${types.map((type) => `<span><span class=\"relation-swatch\" data-type=\"${type}\"><i></i></span>${relationshipMeta[type].label}</span>`).join('')}</div>`;",
"    const types = root === 'design-stack' ? ['flow', 'coupling', 'feedback'] : ['coupling', 'feedback'];\n    return `<div class=\"framework-export-legend\">${types.map((type) => `<span><span class=\"relation-swatch\" data-type=\"${type}\"><i></i></span>${relationshipInfo(type).label}</span>`).join('')}</div>`;",
'export legend terminology')
JS.write_text(js)

# Design Stack-only visual layer: vertical spacing, phase separation, readable item controls,
# phase fingerprints, and dedicated left/right routing corridors.
css = CSS.read_text()
css += r'''

/* Design Stack scientific flow v5 */
.stack-board {
  padding-right: 250px;
}
.stack-content { gap: 1.35rem; }
.stack-phase { gap: 2.1rem; }
.stack-stage-list { gap: .78rem; }
.stack-stage { min-height: 98px; padding: .56rem .64rem; }
.stack-stage-columns ul { list-style: none; display: grid; gap: .14rem; padding-left: 0; font-size: .57rem; line-height: 1.32; }
.stack-stage-columns li { min-width: 0; }
.stack-stage-item {
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  gap: .25rem;
  padding: .12rem .18rem;
  border: 0;
  border-radius: .3rem;
  background: transparent;
  color: var(--ink);
  font: inherit;
  line-height: inherit;
  text-align: left;
  cursor: pointer;
}
.stack-stage-item i { flex: 0 0 auto; color: var(--phase-color); font-style: normal; opacity: .48; }
.stack-stage-item:hover,.stack-stage-item:focus-visible { background: color-mix(in srgb,var(--phase-color) 10%,transparent); color: var(--phase-color); outline: none; }
.stack-stage-item:focus-visible { box-shadow: 0 0 0 2px color-mix(in srgb,var(--phase-color) 34%,transparent); }
.stack-feedback-notes { width: 175px; padding: .65rem .5rem; justify-content: flex-start; gap: .34rem; }
.stack-feedback-notes > small { margin: -.18rem 0 .18rem; color: var(--muted); font-size: .55rem; line-height: 1.25; text-align: center; }
.stack-feedback-notes button {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: .35rem;
  width: 100%;
  padding: .42rem .46rem;
  border: 1px solid var(--line);
  border-radius: .5rem;
  background: var(--paper);
  color: var(--muted);
  font-size: .55rem;
  line-height: 1.28;
  text-align: left;
  cursor: pointer;
}
.stack-feedback-notes button i { color: var(--violet); font-size: .5rem; font-style: normal; white-space: nowrap; }
.stack-feedback-notes button:hover,.stack-feedback-notes button:focus-visible,.stack-feedback-notes button.is-active { border-color: var(--violet); background: color-mix(in srgb,var(--violet) 8%,var(--paper)); color: var(--ink); }
.stack-bottom-legend { left: 176px; right: 250px; gap: .8rem; }
.stack-bottom-legend span { gap: .28rem; white-space: nowrap; }
.stack-bottom-legend .relation-swatch { width: 22px; height: 18px; }
.stack-bottom-legend .relation-swatch::before { top: 8px; }
.stack-bottom-legend .relation-swatch::after { top: 5px; }
.stack-board .relation-path.relation-flow { stroke: color-mix(in srgb,var(--ink) 88%,transparent); stroke-width: 2.45; }
.stack-board .relation-path.relation-coupling { stroke: color-mix(in srgb,var(--mint) 78%,var(--ink)); stroke-width: 1.65; }
.stack-board .relation-path.relation-feedback { stroke: var(--violet); stroke-width: 1.5; stroke-dasharray: 7 6; }
.stack-board .relation-path.is-active { stroke: var(--framework-orange); stroke-width: 3.1; stroke-dasharray: none; }
.design-stack-phase-fingerprints { display:flex; flex-wrap:wrap; gap:.32rem; margin-top:.45rem; }
.design-stack-phase-fingerprints span { display:inline-flex; align-items:center; min-height:22px; padding:.2rem .48rem; border:1px solid color-mix(in srgb,var(--fingerprint) 55%,var(--line)); border-radius:999px; background:color-mix(in srgb,var(--fingerprint) 10%,var(--paper)); color:var(--fingerprint); font:700 .62rem/1 ui-monospace,monospace; }
.design-stack-phase-fingerprints span[data-phase="problem-framing"] { --fingerprint: var(--framework-blue); }
.design-stack-phase-fingerprints span[data-phase="formulation"] { --fingerprint: var(--framework-green); }
.design-stack-phase-fingerprints span[data-phase="training"] { --fingerprint: var(--framework-orange); }
.design-stack-phase-fingerprints span[data-phase="reliability"] { --fingerprint: var(--framework-purple); }
.design-stack-feedback-detail { display:grid; gap:.22rem; margin-top:.65rem; padding:.62rem; border-left:3px solid var(--violet); border-radius:.35rem; background:color-mix(in srgb,var(--violet) 6%,var(--paper)); }
.design-stack-feedback-detail b { color:var(--violet); font-size:.66rem; text-transform:uppercase; letter-spacing:.04em; }
.design-stack-feedback-detail p { margin:0 0 .35rem; }
@media (max-width: 1180px) {
  .stack-board { min-width: 1080px; }
}
'''
CSS.write_text(css)

# Validator: exact audited relation contract, item-level mapping contract, and scientific separations.
validator = VALIDATOR.read_text()
validator = replace_once(validator,
"assert(stack.relationships.length >= 18, `Design Stack requires complete flow and feedback relationships, found ${stack.relationships.length}.`);",
"assert(stack.relationships.length === 24, `Design Stack requires 9 main-flow + 6 strong-interdependence + 9 feedback relationships, found ${stack.relationships.length}.`);",
'relationship total validation')
validator = replace_once(validator,
"assert(stack.relationships.filter((item) => item.type === 'feedback').length === 9, 'Design Stack requires nine evaluation-driven feedback loops.');",
"assert(stack.relationships.filter((item) => item.type === 'coupling').length === 6, 'Design Stack requires six audited strong-interdependence relationships.');\nassert(stack.relationships.filter((item) => item.type === 'feedback').length === 9, 'Design Stack requires nine evaluation-driven feedback loops.');",
'coupling count validation')
validator = replace_once(validator,
"  assert(Array.isArray(stage.evidence) && stage.evidence.length > 0, `${stage.id} lacks verified claim-level evidence.`);\n});\nassert(stack.relationships.filter((item) => item.type === 'feedback').every((item) => item.evidence.length > 0), 'Every Design Stack feedback loop must carry verified evidence.');",
"  assert(Array.isArray(stage.evidence) && stage.evidence.length > 0, `${stage.id} lacks verified claim-level evidence.`);\n  const visibleItems = stage.columns.flatMap((column) => column.items);\n  assert(stage.interactive_items?.length === visibleItems.length, `${stage.id} does not expose every visible content item as an interactive object.`);\n  assert(stage.interactive_items.every((item) => item.id && item.label && item.column && item.summary && item.concepts?.length), `${stage.id} contains an incomplete interactive item mapping.`);\n  assert(new Set(stage.interactive_items.map((item) => item.label)).size === visibleItems.length, `${stage.id} interactive item labels are not unique.`);\n});\nassert(stack.relationships.filter((item) => item.type === 'coupling').every((item) => item.evidence.length > 0), 'Every audited Design Stack strong-interdependence relationship must carry verified evidence.');\nassert(stack.relationships.filter((item) => item.type === 'feedback').every((item) => item.evidence.length > 0 && item.trigger && item.action && item.message), 'Every Design Stack feedback loop must carry evidence plus an evaluation-specific trigger, action, and message.');\nconst stackItemRecords = stack.stages.flatMap((stage) => stage.interactive_items);\nunique(stackItemRecords.map((item) => item.id), 'Design Stack internal item');\nconst itemByLabel = new Map(stackItemRecords.map((item) => [item.label, item]));\nconst conceptIds = (label) => new Set((itemByLabel.get(label)?.concepts || []).map((concept) => concept.id));\nassert(conceptIds('Weak form').has('formulation:weak-form') && !conceptIds('Weak form').has('formulation:variational-form'), 'Weak form must remain a distinct canonical concept.');\nassert(conceptIds('Variational form').has('formulation:variational-form') && !conceptIds('Variational form').has('formulation:weak-form'), 'Variational form must remain a distinct canonical concept.');\nassert(conceptIds('Mean squared error (MSE)').has('metric:mse') && !conceptIds('Mean squared error (MSE)').has('metric:rmse'), 'MSE must remain distinct from RMSE.');\nassert(conceptIds('Root mean squared error (RMSE)').has('metric:rmse') && !conceptIds('Root mean squared error (RMSE)').has('metric:mse'), 'RMSE must remain distinct from MSE.');\nassert(conceptIds('SIREN').has('architecture:siren') && !conceptIds('Sinusoidal activation').has('architecture:siren'), 'SIREN architecture must remain distinct from sinusoidal activation.');\nassert(conceptIds('Adam').has('optimizer:adam') && conceptIds('L-BFGS').has('optimizer:lbfgs'), 'Stage 9 optimizer mappings are incomplete.');",
'item and feedback validation')
VALIDATOR.write_text(validator)

# Browser QA: Design Stack relation counts, no phase arrows, vertical ordering/spacing,
# exact item mappings, phase fingerprints, explanatory feedback, and compact/expanded legend consistency.
qa = QA.read_text()
qa = replace_once(qa,
"  { id: 'design-stack', path: 'frameworks/design-stack/', selector: '.stack-board', objects: ['.stack-stage', 10], relations: 18 },",
"  { id: 'design-stack', path: 'frameworks/design-stack/', selector: '.stack-board', objects: ['.stack-stage', 10], relations: 24 },",
'QA design stack relation count')
qa = replace_once(qa,
"          feedbackCount: document.querySelectorAll('.relation-feedback').length,",
"          feedbackCount: document.querySelectorAll('.relation-feedback').length,\n          couplingCount: document.querySelectorAll('.relation-coupling').length,\n          stackItemCount: document.querySelectorAll('.stack-stage-item').length,\n          phaseRailSymbols: document.querySelectorAll('.stack-phase-rail i').length,",
'QA design stack snapshot')
qa = replace_once(qa,
"      if (route.id === 'design-stack') assert(snapshot.feedbackCount === 9, `${route.id}/${viewport.name}: nine redesign loops are not rendered.`);",
"      if (route.id === 'design-stack') {\n        assert(snapshot.feedbackCount === 9 && snapshot.couplingCount === 6, `${route.id}/${viewport.name}: audited relation set is incomplete (${snapshot.feedbackCount} feedback, ${snapshot.couplingCount} coupling).`);\n        assert(snapshot.stackItemCount >= 70, `${route.id}/${viewport.name}: internal Stage 1–10 contents are not individually interactive (${snapshot.stackItemCount}).`);\n        assert(snapshot.phaseRailSymbols === 0, `${route.id}/${viewport.name}: unexplained phase-rail symbol remains.`);\n      }",
'QA design stack assertions')
insert_before = "  const matrix = await context.newPage();"
design_qa = r'''  const stackPage = await context.newPage();
  await stackPage.goto(`${baseUrl}/frameworks/design-stack/`, { waitUntil: 'networkidle' });
  await stackPage.waitForSelector('.stack-stage-item');
  const stackGeometry = await stackPage.evaluate(() => {
    const stages = [...document.querySelectorAll('.stack-stage')].map((node) => { const box = node.getBoundingClientRect(); return { top: box.top, bottom: box.bottom }; });
    const phases = [...document.querySelectorAll('.stack-phase')].map((node) => { const box = node.getBoundingClientRect(); return { top: box.top, bottom: box.bottom }; });
    return {
      stageGaps: stages.slice(1).map((box, index) => box.top - stages[index].bottom),
      phaseGaps: phases.slice(1).map((box, index) => box.top - phases[index].bottom),
      order: stages.every((box, index) => index === 0 || box.top > stages[index - 1].top),
      flow: document.querySelectorAll('.relation-flow').length,
      coupling: document.querySelectorAll('.relation-coupling').length,
      feedback: document.querySelectorAll('.relation-feedback').length,
      feedbackNotes: document.querySelectorAll('.stack-feedback-notes button').length,
      compactLegend: [...document.querySelectorAll('.stack-bottom-legend > span')].map((node) => node.textContent.trim())
    };
  });
  assert(stackGeometry.order && stackGeometry.flow === 9 && stackGeometry.coupling === 6 && stackGeometry.feedback === 9, 'Design Stack does not preserve the dominant 1→10 path plus audited coupling/feedback relations.');
  assert(Math.min(...stackGeometry.stageGaps) >= 10, `Design Stack stage spacing is too compressed (${Math.min(...stackGeometry.stageGaps)}px minimum).`);
  assert(Math.min(...stackGeometry.phaseGaps) >= 18, `Design Stack phase separation is too compressed (${Math.min(...stackGeometry.phaseGaps)}px minimum).`);
  assert(stackGeometry.feedbackNotes === 9, 'Evaluation feedback ledger does not expose all nine targeted redesign messages.');
  const firstCouplingMarkers = await stackPage.locator('.relation-coupling').first().evaluate((node) => ({ start: node.getAttribute('marker-start'), end: node.getAttribute('marker-end') }));
  assert(firstCouplingMarkers.start?.includes('framework-arrow-coupling') && firstCouplingMarkers.end?.includes('framework-arrow-coupling'), 'Strong interdependence must render bidirectionally.');
  await stackPage.click('[data-legend]');
  const expandedLegend = await stackPage.locator('[data-legend-panel] .legend-items article b').evaluateAll((nodes) => nodes.map((node) => node.textContent.trim()));
  assert(stackGeometry.compactLegend.length === 4 && stackGeometry.compactLegend.every((label) => expandedLegend.includes(label)), 'Compact and expanded Design Stack relationship legends are inconsistent.');
  const clickItem = async (label, conceptId, phaseId) => {
    const button = stackPage.locator('.stack-stage-item', { hasText: label }).first();
    await button.click();
    assert(await stackPage.locator(`[data-detail] [data-concept-id="${conceptId}"]`).count() > 0, `${label} does not resolve to ${conceptId}.`);
    assert(await stackPage.locator(`[data-detail] .design-stack-phase-fingerprints span[data-phase="${phaseId}"]`).count() > 0, `${label} inspector lacks the ${phaseId} phase fingerprint.`);
  };
  await clickItem('Adam', 'optimizer:adam', 'training');
  await clickItem('L-BFGS', 'optimizer:lbfgs', 'training');
  await clickItem('Weak form', 'formulation:weak-form', 'formulation');
  await clickItem('Variational form', 'formulation:variational-form', 'formulation');
  await clickItem('Root mean squared error (RMSE)', 'metric:rmse', 'reliability');
  assert(await stackPage.locator('[data-detail] [data-concept-id="metric:mse"]').count() === 0, 'RMSE inspector incorrectly merges RMSE with MSE.');
  await stackPage.click('[data-inspect-id="feedback-10-7"]');
  const feedbackText = await stackPage.locator('[data-detail]').textContent();
  assert(feedbackText.includes('Localized error') && feedbackText.includes('Resample collocation'), 'Sampling feedback does not expose its evaluation-specific signal and redesign action.');
  await stackPage.close();

'''
qa = replace_once(qa, insert_before, design_qa + insert_before, 'Design Stack browser QA insertion')
QA.write_text(qa)

# Cache-safe Design Stack entry only; the other Framework pages keep the same shared behavior/version contract.
index = INDEX.read_text()
index = index.replace('frameworks.css?v=20260826-frameworks-v4', 'frameworks.css?v=20260826-design-stack-v5')
index = index.replace('frameworks.js?v=20260826-frameworks-v4', 'frameworks.js?v=20260826-design-stack-v5')
INDEX.write_text(index)

print('Applied Design Stack scientific flow, coupling, feedback, interaction, spacing, routing, legend, and inspector refinements.')
