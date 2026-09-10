# Task 5.1 — Existing Methodology Dimension Catalogue

Status: **PASS — COMPLETE**

Date: 2026-09-08

Roadmap parent: `docs/master-architecture/CONTROLLED-ROADMAP.md` → Task 5.1.

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

Primary architectural projection: Paper Profile `PP-08 — Methodology`, backed by `L4-P6 Data & Observation Context` and `L4-P9 Methodological Features`.

## 1. Purpose and boundary

Task 5.1 inventories the methodology dimensions that **already exist** in the locked scientific model or its controlled-vocabulary dimension catalogue. It does not design new scientific fields, define the learning/integration taxonomy assigned to Task 5.2, define coupled-ML families assigned to Task 5.3, decide future structural promotion assigned to Task 5.4, or set future promotion thresholds assigned to Task 5.5.

The catalogue is deliberately broader than the 20 top-level `METHODOLOGICAL_FEATURES` content fields because the existing scientific model also contains:

- methodology-relevant data context in `PAPER_PROBLEMS.data_regime[]`;
- `physical_constraints[]` as the owner of **what** physical/mathematical condition is imposed;
- training-control subdimensions consolidated under `training_protocol[]`;
- method-dimension labels in the locked Controlled Vocabularies that do not yet have a dedicated top-level field;
- reproducibility reporting states that constrain interpretation of methodology but remain owned outside `PP-08`.

No item is promoted merely because it appears in this catalogue.

## 2. Verified authoritative starting state

The following were read back before this catalogue was written:

- branch `docs/master-atlas-roadmap`, starting head `8896821470aaee69a80908f2d4c5c6c3bbdacc94`;
- Task 4 status: `COMPLETE / PASS — Tasks 4.1–4.5 COMPLETE`;
- locked Canonical Schema / Field Dictionary v0.7;
- locked Controlled Vocabularies v0.7;
- Task 3.2 complete Paper Profile field specification;
- `atlas-paper-profile-spec.json`;
- `atlas-architecture-registry.json`;
- `ATLAS-PRODUCTION-SURFACE-REGISTER.md`.

Task 5.1 treats Google Drive v0.7 as scientific authority. GitHub documents produced here are coordination/audit artifacts only.

## 3. Owner and evidence notation

- `CS` — locked Canonical Schema / Field Dictionary: structure, field names, cardinality and structural boundaries.
- `CV` — locked Controlled Vocabularies: enumerated/controlled labels and documented extensible initial values.
- `TR` — locked Taxonomy Term and Alias Registry: canonical/provisional/source-local terminology.
- `RR` — locked Relationship Registry: typed scientific relations.
- `EP/L3` — locked extraction/evidence protocol and L3 Evidence object.
- `SER` — locked serialization specification; technical representation only.
- `REPRO` — locked `REPRODUCIBILITY` entity.

`E-LINK` means synthesis-relevant scientific content requires a linked L3 evidence record. `E-INLINE` means a structured item also carries its own evidence locator. Structured fields that use both require both forms as governed by EP.

## 4. Methodology catalogue

The `MDC-*` identifiers below are **documentation/coordination IDs only**. They are not ontology IDs, taxonomy IDs, database keys, or new scientific entities.

| ID | Existing methodology dimension | Locked/current owner | Representation / multiplicity | Semantic controller | Evidence | Current status | Known current/future consumers* |
|---|---|---|---|---|---|---|---|
| MDC-01 | Architecture family | `METHODOLOGICAL_FEATURES.PINN_architecture[]` | 0..N terms | TR | E-LINK | stable locked field | `/architectures/`, `/pinn-types/`, PP-07/PP-08 |
| MDC-02 | Model variable representation | `model_variable_representation[]` | 0..N objects: direction, quantity/variable, scientific role, representation type, component/scope, locator | CV/TR/SRC | E-INLINE + E-LINK | stable structured field | Paper Profile; future methodology explorers |
| MDC-03 | Network configuration | `network_configuration[]` | 0..N objects: depth, width, subnetworks, branches, latent dimension, parameter count, connectivity/sharing, notes, locator | SRC/numeric/TR where applicable | E-INLINE + E-LINK | stable structured field | `/architectures/`, Paper Profile |
| MDC-04 | Physical constraints | `PAPER_PROBLEMS.physical_constraints[]` | 0..N objects; constraint type, target, statement/description, scope, locator | CV/extensible + TR/SRC | E-INLINE + E-LINK | stable, separately owned | `/mathematical-formulations/`, PP-04/PP-08 cross-link |
| MDC-05 | Physics enforcement | `physics_enforcement[]` | 0..N terms | TR | E-LINK | stable locked field | `/training/`, `/pinn-ecosystem/`, Paper Profile |
| MDC-06 | Physics integration mode | `physics_integration_mode[]` | 0..N terms | CV/TR | E-LINK | stable locked field | `/training/`, `/pinn-ecosystem/`, Paper Profile |
| MDC-07 | Strong / weak / variational formulation | existing CV method-dimension label; no dedicated v0.7 top-level key | composite projection through formulation/enforcement/integration/taxonomy evidence | CV/TR/RR as applicable | E-LINK | existing dimension label; **no dedicated field** | `/mathematical-formulations/`; future explorer |
| MDC-08 | Loss construction / components | `loss_components[]` | 0..N terms/components | TR/SRC | E-LINK | stable locked field | `/training/`, Paper Profile |
| MDC-09 | Loss weighting / balancing | `loss_weighting_method[]` | 0..N objects: mode, targets, update rule, schedule/stage, parameters, locator | CV/TR | E-INLINE + E-LINK | stable canonical owner | `/training/`, Paper Profile |
| MDC-10 | Sampling / adaptive sampling | `sampling_strategy[]` | 0..N terms | TR | E-LINK | stable locked field | `/training/`, `/pinn-ecosystem/`, Paper Profile |
| MDC-11 | Data / collocation / observation regime | `PAPER_PROBLEMS.data_regime[]` | 0..N objects: data role, amount/density, quality/noise, label status, locator | CV/extensible | E-INLINE + E-LINK | stable, separately owned | Paper Profile; future cross-paper explorer |
| MDC-12 | Optimizer identity / optimization strategy | `optimizer[]` | 0..N terms | TR | E-LINK | stable locked field | `/optimizers/`, `/training/`, Paper Profile |
| MDC-13 | Training protocol umbrella | `training_protocol[]` | 0..N structured controls | CV/TR/SRC | E-INLINE + E-LINK | stable consolidated owner | `/training/`, Paper Profile |
| MDC-14 | Learning-rate control | `training_protocol[].protocol_type=learning_rate` | protocol subtype; schedule/parameters retained in protocol object | CV + TR/SRC | E-INLINE + E-LINK | stable subtype; not separate field | `/training/` |
| MDC-15 | Initialization | `training_protocol[].protocol_type=initialization` | protocol subtype | CV + TR/SRC | E-INLINE + E-LINK | stable subtype; not separate field | `/training/` |
| MDC-16 | Stabilization / regularization | `training_protocol[].protocol_type=stabilization_regularization` | protocol subtype | CV + TR/SRC | E-INLINE + E-LINK | stable subtype; not separate field | `/training/` |
| MDC-17 | Batching | `training_protocol[].protocol_type=batching` | protocol subtype | CV + TR/SRC | E-INLINE + E-LINK | stable subtype; not separate field | `/training/` |
| MDC-18 | Stopping / restart | `training_protocol[].protocol_type=stopping_restart` | protocol subtype | CV + TR/SRC | E-INLINE + E-LINK | stable subtype; not separate field | `/training/` |
| MDC-19 | Curriculum / continuation | `training_protocol[].protocol_type=curriculum_continuation` | protocol subtype | CV + TR/SRC | E-INLINE + E-LINK | stable subtype; not separate field | `/training/` |
| MDC-20 | Staged training | `training_protocol[].protocol_type=staged_training` | protocol subtype | CV + TR/SRC | E-INLINE + E-LINK | stable subtype; not separate field | `/training/` |
| MDC-21 | Pretraining / fine-tuning control | `training_protocol[].protocol_type=pretraining_finetuning` | protocol subtype | CV + TR/SRC | E-INLINE + E-LINK | stable subtype; identity of transfer/meta method remains separate | `/training/` |
| MDC-22 | Optimizer transition | `training_protocol[].protocol_type=optimizer_transition` + `optimizer[]` identity | protocol subtype references sequencing, optimizer remains owner of optimizer identity | CV/TR/SRC | E-INLINE + E-LINK | stable subtype | `/training/`, `/optimizers/` |
| MDC-23 | Activation strategy | `activation_function[]` | 0..N terms | TR | E-LINK | stable locked field | `/activation-functions/`, `/architectures/`, Paper Profile |
| MDC-24 | Differentiation / operator evaluation | `differentiation_method[]` | 0..N scalar or structured records; method, derivative target, spatial/temporal role, optional component schemes/stencil/order/scale/composition | TR/SRC | E-LINK + E-INLINE for structured detail | stable; optional scheme-detail enrichment adopted | `/mathematical-formulations/`, `/training/`, Paper Profile |
| MDC-25 | Geometry representation | `geometry_representation[]` | 0..N terms | TR | E-LINK | stable locked field | `/architectures/`, `/pinn-ecosystem/`, Paper Profile |
| MDC-26 | Domain decomposition | `domain_decomposition_method[]` | 0..N terms | TR | E-LINK | stable scalar/term owner; richer structured enrichment **deferred** | `/architectures/`, `/training/`, Paper Profile |
| MDC-27 | Time decomposition / time partitioning | no dedicated v0.7 field | may be represented by an evidenced domain-decomposition term, training protocol, and/or `parallel_execution` only according to actual source semantics | TR/CV/RR | E-LINK | source-dependent/composite; no new structure in 5.1 | future methodology explorer |
| MDC-28 | Parallel execution | `parallel_execution[]` | 0..N objects: phase, mode, decomposition/model scope, memory context, scale/workers, coordination notes, locator | CV/TR/SRC | E-INLINE + E-LINK | stable structured field | `/training/`, Paper Profile; reproducibility cross-link |
| MDC-29 | Transformation / encoding / normalization | `transformation_method[]` | 0..N objects: role, method, target, basis | CV/TR/SRC | E-LINK | stable structured field | `/training/`, `/mathematical-formulations/`, Paper Profile |
| MDC-30 | Uncertainty method / UQ method | `uncertainty_method[]` | 0..N terms | TR | E-LINK | stable locked field | Paper Profile; future UQ/methodology explorer |
| MDC-31 | Operator-learning integration | existing CV method-dimension label; no dedicated v0.7 top-level method field | may be represented through architecture/integration/task/taxonomy/relations when evidence supports each role | CV/TR/RR | E-LINK | existing dimension label; **formal taxonomy deferred to 5.2/5.3** | `/pinn-types/`, `/architectures/`, future explorer |
| MDC-32 | Multi-fidelity integration | existing CV method dimension; structurally grounded by `fidelity_source_role[]` plus the actual method/training relations | 0..N role objects plus other evidence-backed method links | CV/TR/RR | E-INLINE + E-LINK | existing dimension; no generic `multi_fidelity_method[]` invented | Paper Profile; future explorer |
| MDC-33 | Fidelity source role | `fidelity_source_role[]` | 0..N objects: fidelity level, source type, workflow role, locator | CV/extensible + TR | E-INLINE + E-LINK | stable structured field | Paper Profile; future multi-fidelity explorer |
| MDC-34 | Transfer / meta-learning | existing CV method-dimension label; no dedicated v0.7 top-level field | currently expressed only through the scientifically appropriate existing training/fidelity/architecture/taxonomy/relationship records; generic training protocol does not own method identity | CV/TR/RR | E-LINK | existing dimension label; **taxonomy/structure deferred to 5.2–5.4** | `/training/`, `/pinn-types/`, future explorer |
| MDC-35 | Software framework | `software_framework[]` | 0..N terms/source labels | TR/SRC | E-LINK | stable locked methodology field | `/software/`, Paper Profile; future CR boundary |
| MDC-36 | Derived scientific output method | `derived_output_method[]` | 0..N objects: derived quantity, source outputs, derivation method, operation type, post-inference stage, locator | CV/TR/SRC | E-INLINE + E-LINK | stable sole output-derivation owner | Paper Profile; future methodology explorer |
| MDC-37 | Reproducibility / method-reporting context | `REPRODUCIBILITY` | 0..1 per paper: code/data/model availability; hyperparameters, seed, hardware, training-cost reporting states | CV/STATE/SRC | separate reproducibility evidence/provenance | stable **method-adjacent owner outside PP-08** | future Reproducibility Explorer, Paper Profile PP-14 |

\* Consumer entries are **current thematic/known surfaces or planned projections, not a Task 9 dependency audit**. Exact file-level reads/writes and future route disposition remain Task 9.

## 5. Existing controlled subdimensions

### 5.1 `data_regime[]`

Existing initial evidence-supported/extensible dimensions are:

- `data_role`: observational/measurement, labeled solution/state, residual/collocation, BC data, IC data, other explicit role;
- `amount_or_density`: zero, sparse/limited, dense/abundant, other explicitly reported;
- `quality_or_noise`: noisy, explicitly noise-free, mixed/uncertain, other explicitly reported;
- `label_status`: unlabeled, partially labeled, labeled, not applicable.

Do not infer any of these from silence. `data_regime[]` is independent of fidelity.

### 5.2 `physics_integration_mode[]`

Existing controlled values include:

- residual/loss-based physics constraint;
- hard/analytic constraint;
- architecture-encoded physics;
- physics-guided data/feature integration;
- physics-informed initialization/pretraining;
- hybrid numerical/ML coupling.

Purely data-driven neural-operator learning without explicit physics is not a value of this dimension.

### 5.3 `training_protocol[]`

The existing protocol-type catalogue is:

`learning_rate`, `initialization`, `stabilization_regularization`, `batching`, `stopping_restart`, `curriculum_continuation`, `staged_training`, `pretraining_finetuning`, `optimizer_transition`, `other_explicit_protocol`.

This field records **how a training control is applied**. It does not take ownership of optimizer identity, transfer/meta-learning identity, architecture identity, transformation identity or loss weighting.

### 5.4 `loss_weighting_method[]`

Initial modes are:

`fixed_manual`, `adaptive`, `scheduled_or_annealed`, `learned_or_probabilistic`, `other_explicit`.

Legacy `adaptive_weighting[]` is migration input only. It normalizes losslessly into `loss_weighting_method[]` and must not survive as a competing canonical field.

### 5.5 `transformation_method[].role`

Existing roles are:

`input_feature_encoding`, `coordinate_transform`, `normalization_scaling`, `nondimensionalization`, `dependent_variable_transform`, `physics_based_asymptotic_transform`.

Activation changes do not belong here.

### 5.6 `fidelity_source_role[]`

The field independently stores:

- `fidelity_level` — initially low/high fidelity;
- `source_type` — e.g. approximate physics, experiment, coarse simulation, dense simulation/experiment, other explicit source;
- `workflow_role` — e.g. pretraining, transfer update, guide data, other explicit role.

Low fidelity must not be inferred to mean coarse numerical resolution.

### 5.7 `parallel_execution[]`

Execution phase: `training`, `inference`, `both`.

Initial parallelism modes include data, domain, space, time, model/network parallelism, distributed inference and other explicit parallelism.

GPU/HPC use alone does not establish parallel execution.

### 5.8 `derived_output_method[]`

Initial operation types include integration, algebraic relation, physics-based calibration, differentiation and other explicit scientific derivation. The canonical pipeline stage is `post_inference`.

Ordinary plotting, visualization, smoothing or cleanup is not automatically a scientific derived-output method.

## 6. Controlled non-equivalences and overlap map

These are mandatory for Task 5.2 onward:

1. `PINN_architecture[]` ≠ `network_configuration[]`.
2. `physical_constraints[]` = **what condition exists/is imposed**; `physics_enforcement[]` / `physics_integration_mode[]` = **how physics is imposed/integrated**.
3. `loss_components[]` ≠ `loss_weighting_method[]` ≠ `training_protocol[]`.
4. `optimizer[]` identity ≠ `training_protocol[].optimizer_transition` sequencing.
5. adaptive sampling belongs under sampling strategy; adaptive loss weighting belongs under loss weighting; there is no generic `adaptive_method[]` owner.
6. initialization is a training-protocol subtype, not a new first-class field.
7. `data_regime[]` ≠ `fidelity_source_role[]`.
8. model input/output identity ≠ transformation ≠ post-inference derived output.
9. `domain_decomposition_method[]` ≠ `parallel_execution[]`; a decomposition method need not execute in parallel, and parallelism need not be domain decomposition.
10. `parallel_execution[]` ≠ `REPRODUCIBILITY.hardware_reported`.
11. `software_framework[]` methodology identity ≠ code availability ≠ Computational Resources resource identity.
12. transfer/meta-learning identity is not owned by generic `training_protocol[]`; Task 5.2–5.4 must formalize it without manufacturing a competing field.
13. operator-learning integration is not automatically a PINN family and is not automatically `physics_integration_mode[]`; its actual scientific roles must remain evidence-scoped.
14. strong/weak/variational formulation is an existing dimension label but not justification for a new field in Task 5.1.
15. `solution_postprocessing[]` is prohibited as a competing field; scientific post-inference derivation belongs to `derived_output_method[]`.

## 7. Current implementation/surface observations

The production-surface baseline contains methodology-facing routes including `/pinn-ecosystem/`, `/architectures/`, `/activation-functions/`, `/training/`, `/optimizers/`, `/mathematical-formulations/`, `/pinn-types/`, `/abbreviations/` and related application/performance surfaces.

Task 5.1 confirms only high-confidence present-state facts needed for extensibility planning:

- `/architectures/` is currently a section scaffold rather than a scientific owner.
- `/training/` is currently a section scaffold rather than a scientific owner; there is no `data/training/` directory at that exact path on the audited roadmap branch.
- `data/activation-functions/` currently contains records, taxonomy, summary and validation artifacts consumed by the activation-function surface family.
- `data/optimizers/` currently contains records, taxonomy, summary and validation artifacts consumed by the optimizer surface family.
- additional current methodology datasets exist under areas such as mathematical formulations and the PINN Ecosystem, but exact dependency, duplication and write/read classification remains explicitly reserved for Task 9.

No current page or generated JSON becomes the scientific authority merely because it is already deployed.

## 8. Gaps and deferred structure found by the catalogue

The following are **not missing-data errors** and do not authorize schema changes. They are controlled inputs to Tasks 5.2–5.4:

- learning/integration type still needs formal taxonomy treatment (Task 5.2);
- coupled ML architecture/method identities such as CNN/GNN/RNN/LSTM/Transformer/GAN/Autoencoder/RL need explicit taxonomy treatment (Task 5.3);
- transfer/meta-learning and operator-learning integration are recognized dimensions but have no dedicated locked top-level v0.7 field;
- strong/weak/variational formulation is recognized as a dimension but is represented compositionally rather than by a dedicated top-level field;
- richer structured enrichment for `domain_decomposition_method[]` remains deferred because recurrence was insufficient at v0.6 adjudication;
- time-decomposition semantics may currently span decomposition, protocol and parallelism records depending on the paper and therefore must not be force-normalized into one owner;
- detailed hardware/resource identity must remain outside Paper Profile methodology unless explicitly integrated through the bounded Computational Resources interface later.

These gaps are precisely why Task 5 is needed; Task 5.1 itself does not resolve them.

## 9. Extensibility interpretation

The existing methodology model is already mostly **dimension-oriented rather than field-per-method**:

- repeatable taxonomy-linked arrays support new terms without changing schema;
- structured records are used only where internal attributes are scientifically material;
- training controls are consolidated under one structured protocol owner;
- evidence and source-local/provisional taxonomy states allow unfamiliar methods to be represented without premature canonicalization.

Therefore Task 5.2–5.4 should prefer taxonomy/relationship extension when information can be represented without loss, and propose structural specialization only when repeated evidence demonstrates irreducible structure that current owners cannot preserve/query safely.

## 10. Evidence-driven revision rule

Later primary-source evidence may revise a term's normalization, dimension placement, relationship, applicability or whether specialized structure is justified. Such revision must be evidence-backed, explicit, versioned and history-preserving. Raw wording, source locators, earlier decisions, conflicts and rejected/deferred alternatives must not be silently erased.

## 11. Acceptance result

**PASS.** Task 5.1 acceptance conditions are satisfied:

- all 25 methodology-dimension labels listed in locked CV section 7 are accounted for;
- every substantive PP-08 methodology/data owner (`D02` and `M03–M22`) is accounted for;
- all nine named `training_protocol[]` control subtypes plus `other_explicit_protocol` are explicitly situated under their existing owner;
- physical constraints and reproducibility/hardware boundaries are mapped without copying them into Methodological Features;
- known deferred/composite dimensions are explicitly marked rather than silently promoted;
- evidence/provenance and no-merge rules are preserved;
- no new locked-v0.7 field/entity, canonical taxonomy term or relationship was created;
- production `main`, raw scientific authorities and Computational Resources branches were not modified.

## 12. Stop boundary

**Task 5.2 was not started.**

Exact next action, only when separately authorized: **Task 5.2 — define the learning/integration-type taxonomy using this catalogue as a controlling input.**
