# Task 4.4 — PINN Type ↔ Application / Problem / Method / Outcome / Failure Linkage

Status: **PASS / COMPLETE**

Date: 2026-09-08

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

Controlling inputs: Task 4.1A–4.1E; Task 4.2 taxonomy; Task 4.3 paper/evidence linkage; Task 1.3 R1–R48; Task 1.4 X1–X9; locked-v0.7 controlled vocabularies and taxonomy boundaries; Paper Profile sections PP-03/PP-04/PP-05/PP-06/PP-07/PP-08/PP-10/PP-11/PP-15/PP-16 and diagnostic pathways.

Task 4.4 defines **cross-dimensional scientific links** from governed/scoped PINN-type assignments to application, physical-problem, methodological, outcome, and failure/diagnostic dimensions. It does not collapse those dimensions into the PINN taxonomy, does not create production data, does not redefine locked v0.7, and does not start Task 4.5.

## 1. Core design decision

A PINN type is not intrinsically equal to an application, a physical problem, a method feature, an outcome, or a failure mode.

Task 4.4 therefore uses evidence-backed **typed cross-links** rather than adding those dimensions as taxonomy parents/children.

The safe reasoning unit is:

`paper/type assignment` → `scoped evidence` → `typed relation` → `target dimension record`

not:

`type name` → `assumed universal property`.

This distinction is mandatory because the same PINN type can be used in different applications, for different equations, with different training choices, with mixed outcomes, and under different failure regimes.

## 2. Link owner and granularity

The logical link is anchored to a Task-4.3 paper/type assignment, not directly to a global type alone.

Minimum logical fields:

- `crosslink_id`
- `assignment_reference`
- `paper_id`
- `type_term_reference` or scoped candidate reference
- `target_dimension`
- `target_reference` or exact scoped target label
- `relation_type`
- `scope`
- `evidence_links[]`
- `verification_status`
- `support_status`
- `source_role`
- `statement_origin`
- `evidence_strength`
- `directionality`
- `scope_note`
- `conflict_or_counterevidence_links[]`
- `version_history_reference`

Task 4.4 is a coordination specification; these are logical requirements, not new locked-v0.7 fields.

## 3. Target dimensions

### A. Application

Target hierarchy remains separate:

`domain → subdomain → specific application → physical system`

Permitted relation semantics include:

- `demonstrated_in_application`
- `evaluated_in_application`
- `proposed_for_application`
- `reviewed_in_application_context`

A type name containing an application token does not by itself establish a globally distinct family or demonstrate performance in that application.

### B. Physical problem / problem characteristics

Permitted relation semantics include:

- `applied_to_physical_problem`
- `tested_under_problem_characteristic`
- `designed_for_problem_characteristic`
- `reported_limitation_under_problem_characteristic`

Problem characteristic ≠ PINN challenge/failure mode by default.

Examples such as shock/discontinuity, stiff dynamics, multiscale behavior, high dimensionality and complex geometry remain problem-side concepts unless evidence explicitly links them to a method response.

### C. Methodology

Methodological relations must preserve the locked-v0.7 owner dimensions rather than turning implementation choices into type hierarchy.

Permitted relation semantics include:

- `uses_architecture`
- `uses_network_configuration`
- `uses_formulation`
- `uses_physics_enforcement`
- `uses_physical_constraint`
- `uses_sampling_strategy`
- `uses_optimizer`
- `uses_loss_weighting_method`
- `uses_activation_strategy`
- `uses_differentiation_method`
- `uses_decomposition_strategy`
- `uses_parallel_execution`
- `uses_training_protocol`
- `uses_transformation_method`
- `uses_uncertainty_method`
- `uses_operator_learning_integration`
- `uses_multifidelity_integration`
- `uses_transfer_or_meta_learning`
- `uses_geometry_representation`
- `uses_fidelity_source_role`
- `uses_derived_output_method`

Network configuration ≠ architecture family. Loss weighting ≠ generic training protocol. Hardware reporting ≠ parallel execution. Operator integration ≠ automatic PINN subtype.

### D. Outcome / validation / evaluation

Permitted relation semantics include:

- `demonstrated_outcome`
- `reported_improvement`
- `reported_negative_result`
- `validated_by`
- `evaluated_with_metric`
- `exhibits_tradeoff`

Outcome links are always paper/experiment scoped. They do not become permanent type properties.

A statement such as “Type X improved accuracy in paper Y under setting Z” must never be generalized to “Type X is more accurate” without governed cross-paper synthesis.

### E. Failure / limitation / diagnostic pathway

Permitted relation semantics include:

- `encounters_failure_or_problem`
- `shows_symptom`
- `associated_with_cause_or_mechanism`
- `evaluated_by_check_or_analysis`
- `uses_intervention_or_response`
- `targets_improvement`
- `has_verification_evidence`
- `has_tradeoff`

The locked diagnostic separation remains mandatory:

`symptom ≠ diagnosis/cause`

`intervention ≠ verified improvement`

`paper diagnostic pathway ≠ Atlas framework failure category`

A method proposed to address a failure is not evidence that it successfully resolves that failure.

## 4. Directionality and claim type

Every relation must preserve direction.

Examples:

- `type_assignment → demonstrated_in_application → application`
- `type_assignment → uses_architecture → architecture concept`
- `type_assignment → encounters_failure_or_problem → problem/failure evidence`
- `intervention evidence → targets_improvement → failure/problem`

Reverse statements cannot be inferred automatically. For example:

- “XPINN was demonstrated on problem A” does not mean “problem A requires XPINN”.
- “SA-PINN was proposed for loss imbalance” does not mean “SA-PINN solves loss imbalance”.
- “Bayesian PINN was used for uncertainty quantification” does not mean every probabilistic-UQ method is Bayesian PINN.

## 5. Evidence gates

A publishable positive cross-link requires:

1. an eligible Task-4.3 paper/type assignment or clearly scoped source-local assignment;
2. an explicit target concept/record or preserved exact source label;
3. evidence supporting the relation itself, not merely separate evidence that the type and target both occur in the paper;
4. valid source role and provenance;
5. verification status and semantic support status recorded separately;
6. relation direction and scope recorded;
7. contradictions/counterevidence retained;
8. no Task 1.3 or Task 4.1C no-merge invariant violated;
9. no universalization beyond the evidence scope;
10. version/history traceability.

Co-occurrence alone is not sufficient.

## 6. Link states

Task 4.4 defines implementation-level states:

- `verified_link` — scoped relation directly supported;
- `provisional_link` — plausible relation awaiting stronger verification;
- `source_local_link` — meaningful only within source/paper taxonomy or wording;
- `blocked_ambiguity` — cannot normalize due collision or insufficient scope;
- `negative_or_counterevidence_link` — evidence explicitly contradicts or qualifies a positive relation;
- `rejected_link` — reviewed proposal rejected; history retained.

These do not add a new locked-v0.7 closed vocabulary; they are coordination states for later relational implementation.

## 7. Application safeguards

The existing application distinctions remain mandatory:

- demonstrated application ≠ related application;
- related application ≠ potential/future application;
- review-discussed application ≠ current-paper demonstrated application;
- physical system ≠ application domain;
- computational task ≠ physical problem.

A source-local type named after an application/equation may be linked to that application/equation, but the name itself is not sufficient evidence of demonstrated use unless the paper evidence supports it.

## 8. Methodology safeguards

Task 4.2 classification lanes and Task 4.4 methodological links are complementary:

- a lane summarizes why a type/variant is classified a certain way;
- a methodology cross-link records what that scoped paper implementation actually used.

Therefore a type can have one architecture-related lane while different papers using that type have different optimizers, activations, sampling schemes, or network configurations.

Global type pages must not present a paper-specific methodology choice as an intrinsic property unless governed synthesis establishes recurrence and scope.

## 9. Outcome safeguards

Task 4.4 preserves the locked outcome vocabulary and claim/demonstration distinction.

The following are prohibited without evidence/synthesis:

- success in one benchmark → universal superiority;
- lower training loss → better scientific accuracy;
- faster convergence → lower wall-clock cost;
- improved metric in one setting → general robustness;
- proposed method → demonstrated solution;
- no reported failure → evidence of absence of failure.

Negative, mixed and inconclusive results remain first-class evidence.

## 10. Failure and diagnostic safeguards

A type may be linked to:

- a failure it encounters;
- a failure it was designed to address;
- an intervention it uses;
- a verified improvement;
- a trade-off introduced by the intervention.

These must be separate links when the evidence supports them.

For example:

`type X → designed_for_problem_characteristic → shock/discontinuity`

is not equivalent to:

`type X → demonstrated_outcome → solved shock/discontinuity`.

Likewise, a method that applies adaptive weighting in response to gradient imbalance does not justify `adaptive weighting = failure solution` unless improvement is actually demonstrated.

## 11. Cross-paper aggregation rule

Task 4.4 defines paper-scoped links only. Cross-paper statements belong to later synthesis tasks.

A future Atlas type profile may aggregate verified links to show distributions such as applications, problems, methodologies, outcomes, and failures, but aggregation must retain:

- paper counts;
- evidence eligibility;
- contradictory evidence;
- source scope;
- time/version context;
- distinction between observed recurrence and causal/effect claims.

Frequency ≠ evidence strength and correlation ≠ causation.

## 12. Safe seed relation examples

These are relation-pattern tests based on already established Task-4 evidence; they are not new universal scientific claims.

- paper 628 `cPINN` → formulation/conservation-oriented scoped method relation; do not infer all `cPINN` occurrences globally.
- papers 707–708 `CPINN` → coupled-method identity at those papers; do not case-fold to `cPINN`.
- papers 548/651/740 `DD-PINN` → three different paper-scoped meanings; downstream application/method/outcome links must attach to the paper-scoped assignment, never to one unqualified DD-PINN node.
- paper 609 `SPINN` and paper 659 `E-PINN` → downstream links remain source-scoped until independent evidence supports broader normalization.

Task 4.4 intentionally does not fabricate application/outcome/failure values for these seed assignments merely because their type identities are scoped.

## 13. Paper Profile projection

The Paper Profile may display cross-links in their existing sections:

- Application
- Physical Problem / Characteristics
- Computational Task / Challenge
- PINN Type / Family
- Methodology
- Outcome / Validation / Evaluation
- Limitations / Open Problems / Future Work
- Diagnostic Pathways

PP-07 remains the type projection. Other sections retain their own ownership. Cross-links connect them; PP-07 does not absorb their data.

## 14. Future database implications

Task 12 should implement cross-dimensional links in a way that can represent:

- many-to-many assignment-to-dimension relationships;
- evidence-backed typed edges;
- directionality;
- scope;
- positive, negative and contradictory evidence;
- version/history;
- provisional and rejected links;
- efficient aggregation by type, paper, application, problem, method, outcome and failure.

Task 4.4 does not choose the physical SQL table layout.

## 15. Evidence-driven revision rule

Later primary-source evidence may add, revise, split, re-scope, reject or deprecate a cross-dimensional relation.

Any revision must preserve:

- the original paper/type assignment;
- prior relation decision;
- evidence and locator history;
- reason for change;
- reviewer/version context;
- contradictory evidence where applicable.

New evidence can correct interpretation; it cannot silently erase provenance.

## 16. Machine-readable coordination source

Companion file:

`atlas-pinn-type-cross-dimensional-linkage-spec.json`

It is non-authoritative and records target dimensions, relation families, evidence gates, link states and semantic boundaries. It does not replace locked-v0.7 scientific owners or create production records.

## 17. Acceptance audit

- paper/type assignment retained as link anchor: **PASS**
- application remains separate from type taxonomy: **PASS**
- physical problem/characteristics remain separate: **PASS**
- methodology owner dimensions preserved: **PASS**
- outcome/validation/evaluation remain paper scoped: **PASS**
- failure/symptom/cause/intervention/verification/trade-off distinctions preserved: **PASS**
- co-occurrence alone cannot create relation: **PASS**
- directionality defined: **PASS**
- negative/counterevidence retained: **PASS**
- universalization from one paper prohibited: **PASS**
- evidence-driven correction/history rule preserved: **PASS**
- new locked-v0.7 fields/entities: **0**
- production `main` changes: **0**
- Computational Resources changes: **0**
- fabricated application/method/outcome/failure seed values: **0**
- Task 4.5 UI specification started: **0**

### Result

**PASS / COMPLETE.**

Task 4.4 establishes an evidence-governed cross-dimensional relation layer that lets PINN types be connected to applications, problems, methodology, outcomes and failures without turning those dimensions into type definitions or universal claims.

## 18. Stop boundary

**Task 4.5 was not started.**