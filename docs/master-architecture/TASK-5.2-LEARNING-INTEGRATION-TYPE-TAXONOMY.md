# Task 5.2 — Learning / Integration-Type Taxonomy

Status: **PASS — COMPLETE**

Date: 2026-09-08

Roadmap parent: `docs/master-architecture/CONTROLLED-ROADMAP.md` → Task 5.2.

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

Controlling methodological inventory: `TASK-5.1-METHODOLOGY-DIMENSION-CATALOGUE.md`.

Task 5.2 defines a governed semantic taxonomy for **how learning is informed, constrained, initialized, transferred, fused, coupled, or otherwise integrated with physics/knowledge/data/model sources**. It does not modify locked v0.7, create a new scientific field, define CNN/GNN/RNN/LSTM/Transformer/GAN/Autoencoder/RL taxonomy (Task 5.3), decide future structural specialization (Task 5.4), or set ontology-promotion recurrence thresholds (Task 5.5).

## 1. Core design decision

The learning/integration system is a **faceted governed taxonomy graph**, not one mutually exclusive tree and not a replacement for existing v0.7 fields.

A paper may legitimately use several integration mechanisms simultaneously. For example, one study may combine residual/loss physics, exact boundary construction, multi-fidelity pretraining, transfer to a later time segment, and a classical numerical solver. Those facts must remain separately queryable and separately evidenced.

Therefore:

- existing locked fields remain the scientific owners;
- taxonomy nodes provide normalized semantic classification and cross-dimensional navigation;
- only evidence-supported `is_a` establishes hierarchy;
- other scientific relationships use typed relations or view-level associations;
- no taxonomy node creates a paper-level fact merely by existing in this specification.

The `LIT-*` IDs below are **Task-5 coordination IDs only**. They are not locked ontology IDs, database keys, or automatic canonical terms.

## 2. Taxonomy scope

### 2.1 In scope

The taxonomy classifies learning/integration mechanisms involving one or more of:

- physical equations, residuals, constraints or conservation structure;
- architecture-encoded or representation-encoded physical knowledge;
- physics-guided data or feature integration;
- physics-informed initialization or pretraining;
- transfer/reuse/adaptation across tasks, domains, parameters, loads or time segments;
- multi-fidelity source integration;
- operator-learning integration when the source explicitly combines operator learning with the governed physics-informed workflow;
- numerical-solver / ML coupling;
- other source-supported learning/integration mechanisms that cannot be represented without distortion by an existing concept.

### 2.2 Explicitly out of scope

This taxonomy does **not** classify:

- PINN type/family identity itself — Task 4 owns that taxonomy;
- neural-network backbone identity such as CNN/GNN/RNN/LSTM/Transformer/GAN/Autoencoder/RL — Task 5.3;
- optimizer identity — `optimizer[]`;
- activation identity — `activation_function[]`;
- generic training scheduling/control — `training_protocol[]`;
- sampling identity — `sampling_strategy[]`;
- loss-component identity — `loss_components[]`;
- loss weighting — `loss_weighting_method[]`;
- data amount/noise/labels — `data_regime[]`;
- fidelity source semantics themselves — `fidelity_source_role[]`;
- software/package identity — `software_framework[]` / bounded Computational Resources;
- hardware reporting — `REPRODUCIBILITY`;
- post-inference scientific derivation — `derived_output_method[]`;
- application/problem/task identity.

An excluded dimension may be related to a learning/integration concept but is not absorbed by it.

## 3. Faceted taxonomy architecture

The taxonomy has four semantic facets. A governed concept may participate in more than one facet when primary-source evidence supports the roles.

### LIT-F1 — Physics incorporation mode

This facet reuses the **existing locked v0.7 `physics_integration_mode[]` values** as its scientific anchors. Task 5.2 does not rename or replace them.

| Coordination node | Existing scientific anchor | Meaning | Primary owner |
|---|---|---|---|
| `LIT-F1-01` | residual/loss-based physics constraint | physics enters through an objective/residual/loss term | `physics_integration_mode[]`, with `loss_components[]` where applicable |
| `LIT-F1-02` | hard/analytic constraint | selected condition is satisfied by mathematical construction when exactness is genuinely demonstrated | `physics_integration_mode[]` / `physics_enforcement[]`; R-C20 exactness gate |
| `LIT-F1-03` | architecture-encoded physics | physical structure is encoded in architecture/representation rather than only added as loss | `physics_integration_mode[]` + architecture/representation evidence |
| `LIT-F1-04` | physics-guided data/feature integration | physical knowledge guides data, features or learning inputs | `physics_integration_mode[]` + `transformation_method[]` / data evidence as applicable |
| `LIT-F1-05` | physics-informed initialization/pretraining | physical knowledge is used to initialize or pretrain the model | `physics_integration_mode[]` + `training_protocol[]` when scheduling/control is reported |
| `LIT-F1-06` | hybrid numerical/ML coupling | learning model is explicitly coupled with a numerical/classical solver or model | `physics_integration_mode[]` + evidence/relationship records |

Purely data-driven operator learning without explicit physics remains outside LIT-F1.

### LIT-F2 — Transfer, reuse and adaptation mode

This facet classifies **what learned knowledge is reused or adapted and across what scientific scope**. It does not make `training_protocol[]` the owner of transfer-learning identity.

| Coordination node | Status relative to v0.7 | Meaning / treatment | Existing owner mapping |
|---|---|---|---|
| `LIT-F2-01` transfer learning | recognized existing methodology dimension; normalized term/status governed by TR | learned parameters/representations are reused and adapted for a scientifically distinct target | TR/RR plus evidence; protocol carries pretraining/fine-tuning control only |
| `LIT-F2-02` sequential/time-marching transfer | **existing canonical TR concept**: “Sequential/time-marching transfer learning” | previous step/segment/load/time solution initializes or transfers to the next | TR + canonical R-C14 where applicable + training protocol |
| `LIT-F2-03` pretraining/fine-tuning workflow | existing training-control subtype, **not automatically a transfer method identity** | sequential training stages whose scientific transfer relation must be separately evidenced | `training_protocol[].protocol_type=pretraining_finetuning` |
| `LIT-F2-04` meta-learning / learned adaptation | recognized methodology dimension; no dedicated locked top-level field | learning-to-adapt/task-family reuse only when source explicitly supports that meaning | TR/RR + evidence; structural decision deferred to 5.4 |
| `LIT-F2-05` warm-start / continuation reuse | source-supported reuse that is not necessarily transfer learning | initialization from previous solution/state/model; classify as transfer only if scientific meaning warrants it | `training_protocol[]`, TR/RR as applicable |

No lexical use of “transfer”, “migration”, “warm start” or “fine-tuning” is sufficient for global normalization.

### LIT-F3 — Multi-source / multi-fidelity integration mode

This facet classifies learning workflows that integrate sources of differing fidelity or scientific role while preserving the locked structural source semantics.

| Coordination node | Meaning | Required owner mapping |
|---|---|---|
| `LIT-F3-01` multi-fidelity learning/integration | a learning workflow intentionally combines sources with distinct fidelity roles | `fidelity_source_role[]` for every evidenced source role + TR/RR for method identity |
| `LIT-F3-02` low-fidelity pretraining / high-fidelity updating | source-scoped sequential multi-fidelity workflow | `fidelity_source_role[]` + training/transfer evidence; no universal relation assumed |
| `LIT-F3-03` fidelity-guided learning/data fusion | explicit source-guidance/fusion workflow not reducible to simple pretrain/fine-tune | `fidelity_source_role[]` + evidence-scoped relation |

Important rule: **multi-fidelity ≠ transfer learning ≠ generic hybrid data+physics**. A paper may instantiate more than one when separately supported.

`low_fidelity` never means `coarse_simulation` by default; `fidelity_level`, `source_type`, and `workflow_role` remain independent.

### LIT-F4 — Operator / solver integration mode

This facet captures integration with operator-learning or numerical-solver systems without collapsing them into PINN type or physics-integration identity.

| Coordination node | Meaning | Existing owner mapping |
|---|---|---|
| `LIT-F4-01` operator-learning integration | PINN/physics-informed workflow explicitly integrates an operator-learning method or learned operator | TR/RR + relevant architecture/task/integration evidence |
| `LIT-F4-02` learned differential/operator evaluation | learned component replaces or approximates differential/operator evaluation | `differentiation_method[]`; provisional R-A1-09 where applicable |
| `LIT-F4-03` pretrained operator integration | pretrained operator is reused as part of learning/initialization/coupling | TR/RR + training evidence; R-A1-13 remains provisional |
| `LIT-F4-04` numerical/classical solver coupling | ML model interacts with external solver/discretization/CAE workflow | locked hybrid numerical/ML physics-integration mode + provisional R-A1-05 or source-scoped relation |

A neural operator is **not** automatically a PINN and is **not** automatically physics-informed. The existing permanent no-merge invariant remains controlling.

## 4. Integration-locus query facet

For search, explorer and cross-paper analysis, Task 5.2 defines a **derived coordination facet** describing where integration occurs. It is not a new paper field.

Allowed coordination values are:

- `objective_or_residual`;
- `mathematical_constraint_construction`;
- `architecture_or_representation`;
- `input_data_or_feature`;
- `initialization_or_pretraining`;
- `training_update_or_adaptation`;
- `source_fidelity_workflow`;
- `operator_or_model_coupling`;
- `numerical_solver_coupling`.

The locus must be derived from existing evidenced owners. It must never be inferred from a method name alone.

## 5. Knowledge/source-role query facet

A second derived coordination facet describes **what kind of source is providing the integrated knowledge**:

- governing equation / residual physics;
- boundary/initial/interface/other physical constraint;
- constitutive/conservation/invariance/admissibility knowledge;
- observational/measurement data;
- labeled solution/state data;
- low-/high-fidelity source with explicit source type;
- pretrained model/previous task/previous segment;
- learned operator;
- classical/numerical solver;
- other explicit scientific knowledge source.

These are query semantics only. Existing owners such as `physical_constraints[]`, `data_regime[]`, `fidelity_source_role[]`, model/evidence records and relationships remain authoritative.

## 6. Taxonomy object classes and lifecycle

Task 5.2 reuses the locked v0.7 lifecycle:

- `canonical`;
- `provisional`;
- `alias`;
- `deprecated`;
- `paper_specific`.

Alias scope remains:

- `corpus_global`;
- `source_local`;
- `author_defined`;
- `unresolved`.

The companion machine-readable file may mark coordination nodes as `existing_cv_value`, `existing_canonical_term`, `existing_dimension_anchor`, or `coordination_slot`. Those labels describe this specification only and **do not alter locked taxonomy status**.

A new source term must first be mapped to an existing scientific concept where equivalence is evidence-supported. Otherwise it remains provisional/paper-specific under the locked Taxonomy Registry. Task 5.2 does not auto-promote any new term.

## 7. Hierarchy and permitted relations

Only evidence-supported `is_a` creates hierarchy between true scientific concepts.

Task 5.2 may reuse already-governed relationship semantics or propose a **provisional relation instance/type for later governance** when an existing relation would distort meaning. Useful semantic relations include:

- `integrated_via` — already represented canonically by R-C01 for physical knowledge → physics integration mode;
- `distinguishes` — R-C02 / context-specific classification;
- `initializes` — R-C14 for previous step/segment network → next step/segment network;
- `integrates_with` — existing provisional R-A1-05 for hybrid method ↔ classical solver where applicable;
- `replaces` — R-A1-09 learned differential operator → differential operator evaluation, still provisional;
- source/workflow relations such as `pretrains`, `guides`, `updates`, `fine_tunes`, `adapts_to`, or `transfers_to` only as evidence-scoped/provisional unless already governed.

A relation must preserve source, target, context, evidence, status and version. Context-free performance edges are prohibited.

## 8. Mapping rule to existing v0.7 owners

A learning/integration classification is **never stored as a competing generic field in Task 5.2**.

Instead:

1. record the underlying scientific facts in their existing owners;
2. normalize exact terms through TR/CV as governed;
3. create typed relations only when scientifically meaningful and evidence-supported;
4. derive a learning/integration taxonomy projection from those facts;
5. preserve exact source terminology and evidence scope.

Examples:

- residual PINN training → `physics_integration_mode[]` + `loss_components[]`; taxonomy projection LIT-F1-01;
- exact boundary ansatz → `physical_constraints[]` + exact enforcement/integration evidence; LIT-F1-02 only if R-C20 exactness condition is met;
- low-fidelity physics pretraining then high-fidelity experimental fine-tuning → `fidelity_source_role[]` + relevant training/transfer evidence; LIT-F3-02 and possibly LIT-F2-01 when transfer meaning is explicit;
- previous time-segment network initializes next → training/transfer evidence + R-C14; LIT-F2-02;
- PINO/neural operator mentioned as comparator only → no operator-integration assignment;
- learned differential operator replacing AD evaluation → `differentiation_method[]` + evidence; LIT-F4-02;
- FEM/CFD solver used only for validation → **not** numerical/ML coupling; validation remains PP-12.

## 9. Mandatory no-merge / non-equivalence guards

The following controls are mandatory for Tasks 5.3–5.5 and later extraction:

1. physics integration mode ≠ PINN type/family.
2. learning/integration type ≠ coupled neural-network backbone.
3. architecture-encoded physics ≠ any architecture merely used by a PINN.
4. residual/loss physics ≠ hard/analytic exact enforcement.
5. author wording “hard constraint” ≠ exact-by-construction unless R-C20 is satisfied.
6. physical constraint identity ≠ enforcement mechanism.
7. transfer learning ≠ pretraining/fine-tuning scheduling by default.
8. transfer learning ≠ multi-fidelity learning.
9. multi-fidelity ≠ generic data+physics hybrid learning.
10. low fidelity ≠ coarse simulation.
11. meta-learning ≠ ordinary fine-tuning or warm start.
12. previous-step initialization ≠ global transfer-learning family unless source semantics support transfer.
13. operator learning ≠ PINN.
14. operator learning ≠ physics-informed operator learning.
15. operator-learning integration ≠ operator-learning computational task.
16. learned differential operator ≠ neural operator family by default.
17. numerical solver used for validation ≠ hybrid numerical/ML coupling.
18. hybrid numerical/ML coupling ≠ software framework identity.
19. data regime ≠ integration type.
20. adaptive sampling ≠ adaptive loss weighting ≠ meta-learning/adaptation.
21. training protocol ≠ learning-method identity.
22. derived output/post-inference calculation ≠ learning/integration mechanism.
23. application/equation specialization ≠ integration type.
24. lexical similarity or shared acronym ≠ scientific equivalence.

## 10. Task 4 PINN-type interaction

Task 4 already permits PINN-type concepts to carry relations/facets such as formulation, architecture/backbone, training/adaptivity, transfer/multi-fidelity and operator adjacency.

Task 5.2 therefore **does not create a second PINN type hierarchy**.

The correct direction is:

`paper/type assignment → evidence-backed uses/integrates-with relation → governed learning/integration concept`

A method may be a PINN variant because of an integration mechanism only when Task 4 evidence independently supports a genuine type identity. Otherwise the integration mechanism remains a methodological facet.

Examples:

- `SA-PINN` is not automatically a family merely because it uses adaptive learning;
- `LSTM-PINN` remains architecture/backbone-related by default, not a learning/integration class;
- `PINO` remains adjacent operator learning unless evidence establishes the precise governed relationship;
- multi-fidelity PINN labels remain type/variant candidates only when source-supported; the fidelity workflow itself remains separately represented.

## 11. Source-local and review taxonomy handling

Existing review/source taxonomies such as observational/inductive/learning-bias framings, four physics-integration paradigms, PgNN/PiNN/PeNN/neural-operator groupings, “Extended PINNs / Hybrid PINNs / Minimized-Loss techniques”, and similar literature classifications remain **source-local crosswalks** unless independently promoted under governance.

A review taxonomy may map to one or more LIT facets, but it does not overwrite the source-local wording and does not create primary-study assignments without primary evidence.

## 12. Evidence and assignment requirements

Every published learning/integration assignment must retain:

- `paper_id`;
- exact source label/statement when applicable;
- governed normalized concept or provisional/source-local concept;
- scientific owner record(s) from v0.7;
- evidence ID(s) and source locator(s);
- scope/component/test-case context where necessary;
- evidence source role;
- verification status;
- support status;
- taxonomy status and alias scope where relevant;
- relationship status when a typed relation is used;
- ontology/version context.

A review mention, acronym occurrence, architecture name, or method name alone cannot create an assignment.

Verified-but-mismatched evidence remains visible but cannot count as positive support.

## 13. Unknown/new-method handling

When extraction encounters an unfamiliar integration mechanism:

1. preserve the exact source wording;
2. identify the scientific facts and existing field owners first;
3. test whether it is equivalent to an existing CV/TR concept;
4. test whether it is actually a PINN type, coupled ML architecture, training control, data/fidelity condition, software identity or another dimension instead;
5. if no existing concept fits without information loss, create a provisional/paper-specific taxonomy proposal under governance;
6. add a new relationship only if an existing relationship would distort meaning;
7. do not create a new schema field during ordinary taxonomy extension;
8. escalate structural insufficiency to Task 5.4 / future governed ontology versioning.

This preserves extensibility without allowing uncontrolled ontology growth.

## 14. What Task 5.2 deliberately does not decide

Task 5.2 does **not** decide:

- whether transfer/meta-learning needs a dedicated future structured field;
- whether operator-learning integration needs specialized serialization;
- whether multi-fidelity integration needs a method-specific entity beyond existing fidelity-source roles;
- whether learning/integration concepts should ever be promoted into v0.8 structure;
- which CNN/GNN/RNN/LSTM/Transformer/GAN/Autoencoder/RL concepts are canonical;
- recurrence thresholds for promotion.

Those questions remain assigned to Tasks 5.3–5.5.

## 15. Machine-readable coordination source

Companion file:

`atlas-learning-integration-taxonomy-spec.json`

It is **non-authoritative coordination metadata**. It records facets, coordination nodes, owner mappings, lifecycle inheritance, relation rules and no-merge guards. It cannot independently create a scientific term, paper assignment, schema field or ontology relation.

## 16. Acceptance audit

- Task 5.1 used as controlling input: **PASS**
- locked v0.7 `physics_integration_mode[]` preserved exactly: **PASS**
- transfer/meta-learning kept distinct from training-protocol scheduling: **PASS**
- multi-fidelity kept distinct from transfer and generic data+physics integration: **PASS**
- operator learning kept distinct from PINN and from automatic physics-informed status: **PASS**
- numerical solver validation kept distinct from hybrid coupling: **PASS**
- Task 4 PINN-type hierarchy not duplicated: **PASS**
- source-local review taxonomies preserved rather than globalized: **PASS**
- existing field owners retained: **PASS**
- new locked-v0.7 fields/entities: **0**
- new automatic canonical taxonomy promotions: **0**
- new automatic canonical relations: **0**
- Task 5.3 coupled-ML classifications performed: **0**
- production `main` changes: **0**
- Computational Resources changes: **0**

### Result

**PASS / COMPLETE.**

Task 5.2 defines an extensible learning/integration taxonomy that can represent combinations of physics incorporation, transfer/adaptation, multi-fidelity integration, operator integration and solver coupling while preserving the locked scientific owners and all critical non-equivalences.

## 17. Stop boundary

**Task 5.3 was not started.**

Exact next action, only when separately authorized: **Task 5.3 — define the coupled ML-method taxonomy (CNN, GNN, RNN/LSTM, Transformer, GAN, Autoencoder, RL, and other evidence-supported coupled ML methods) using Tasks 5.1–5.2 as controlling inputs.**
