# Task 5.4 — Structural Specialization versus Dynamic Taxonomy / Linking Decision

Status: **PASS / COMPLETE**

Date: 2026-09-09

Branch: `docs/master-atlas-roadmap`

Starting branch head: `c30f5079fa61b0673dfba682533b85aacfd34515`

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

Machine-readable coordination contract: `atlas-structural-specialization-decision-spec.json` (`task-5.4-v1.0.0`).

This is a **structural adjudication and architecture-coordination record**. It does not modify locked v0.7, reopen Tasks 1–4, create paper-level assignments, promote taxonomy terms/aliases/relations, define Task 5.5 recurrence thresholds, implement the database, or modify production `main` or Computational Resources Stage branches.

## 1. Question resolved

Task 5.4 answers one question:

> When Tasks 5.1–5.3 identify a scientifically meaningful methodological concept, should that concept receive a dedicated specialized paper-level structure, remain in an existing specialized owner, or be represented dynamically through taxonomy assignments, typed relationships and derived projections?

The controlling answer is intentionally conservative:

**A scientific concept does not deserve a new field/entity merely because it is recurrent, useful to filter, visible in external taxonomies, or desirable on the Paper Profile. Specialized structure is justified only when the existing governed model cannot preserve the concept's identity, multiplicity, attributes, evidence scope or stable cross-record linkage without irreducible scientific loss or ambiguity.**

At this checkpoint, Tasks 5.1–5.3 do **not** demonstrate a new X6 deficiency that requires a future-version schema change.

## 2. Controlling inputs re-read

Task 5.4 was adjudicated against:

- Task 1.3 — R1–R48 non-negotiable scientific rules;
- Task 1.4 — X1–X9 controlled dynamic-extension lifecycle, especially X6 and the structural-home-first rule;
- Task 1.5 — H1–H11 operational gates, especially H9 major structural-gap handling;
- locked v0.7 Canonical Schema / Field Dictionary;
- locked v0.7 Controlled Vocabularies;
- locked v0.7 Taxonomy Term and Alias Registry;
- locked v0.7 Relationship Registry;
- locked v0.7 Ontology Governance and Change Rules;
- Task 5.1 methodology-dimension catalogue;
- Task 5.2 physics/knowledge learning-integration taxonomy;
- Task 5.2B general ML learning-paradigm taxonomy;
- Task 5.2C external methodology coverage/gap audit;
- Task 5.3 model/representation/coupled-ML architecture taxonomy.

No Task 1–4 decision is changed here.

## 3. Decision classes

| Code | Decision | Meaning |
|---|---|---|
| `E1` | Retain existing specialized owner | A locked v0.7 field/entity/repeatable record is already the correct structural home. Its vocabulary can still expand dynamically. |
| `D1` | Dynamic taxonomy assignment | The concept is primarily a classification/facet value. Store/derive it through governed taxonomy/source-local/provisional assignment with evidence and scope, not a dedicated concept-specific field. |
| `D2` | Dynamic taxonomy + typed relations | The concept needs scientifically meaningful links among existing entities/components/tasks/sources. Use taxonomy plus evidence-scoped typed/provisional relations. |
| `P1` | Derived projection | The concept is best exposed by a deterministic/query crosswalk over existing owners, not as a second authoritative fact. |
| `O1` | Other existing owner | The concept belongs outside PP-08 Methodology, such as problem/task, validation, reproducibility, implementation/deployment, synthesis or Computational Resources. |

A separate **structural-watch** state is not an X6 approval. It means dynamic representation is adequate now, but a precise evidence-based reopening condition is registered.

## 4. Structural specialization test

Before any later schema proposal, apply all of the following in order:

1. **Owner test.** Does a locked field/entity already own the scientific meaning? If yes, retain it (`E1`).
2. **Taxonomy test.** Is the new information principally “what kind/type/facet is this?” If yes, prefer governed taxonomy assignment (`D1`).
3. **Relation test.** Is the scientific meaning principally “how is X linked to Y, under what scope?” If yes, prefer typed/provisional relations plus taxonomy (`D2`).
4. **Projection test.** Can the concept be reconstructed deterministically from authoritative owners without information loss? If yes, expose a derived projection (`P1`) rather than duplicate authority.
5. **Ownership-boundary test.** Is the concept actually a problem/task, evaluation, reproducibility, deployment, synthesis or bounded-subsystem concern? If yes, route it to that owner (`O1`).
6. **X6 loss test.** Only if all prior options fail, ask whether the current structure causes irreducible information loss, scientifically material ambiguity, unstable identity/linking, or invalid multiplicity.
7. **Generalization-before-duplication.** If X6 is proved and an existing owner is scientifically correct but too narrow, generalize that owner losslessly rather than create a competing field.
8. **Version gate.** Any scientific structural change after v0.7 requires a later governed ontology version, migration plan, changelog and regression QA.

**Convenience, easier filtering, UI layout, one named paper method, or external taxonomy coverage are not X6 evidence. Recurrence alone is also not X6 evidence.**

## 5. Dynamic assignment/linking contract

Task 5.4 does **not** design PostgreSQL tables; Task 12 owns physical relational design. It does, however, require the future implementation to support a generic evidence-backed dynamic assignment/link capability.

A taxonomy assignment must be able to preserve:

- stable paper identity;
- taxonomy dimension/facet;
- canonical, provisional, paper-specific or source-local concept reference, with exact source wording retained;
- evidence pointer(s);
- scope/component context;
- origin class;
- workflow verification state;
- semantic support state;
- ontology/normalization version;
- review/history trace.

A typed relation instance must be able to preserve:

- governed source identity or scoped record;
- relation type and relation lifecycle status;
- governed target identity or scoped record;
- evidence pointer(s);
- material context/scope;
- verification/support state;
- ontology/normalization version;
- review/history trace.

This is an **implementation capability requirement**, not a new v0.7 scientific field or new page-local authority.

## 6. Task 5.1 — 37-dimension structural disposition

| ID | Dimension | Decision | Task 5.4 disposition | Watch |
|---|---|---|---|---|
| MDC-01 | Architecture family | `E1` | PINN_architecture[] remains the architecture-family owner; family vocabulary is dynamic and evidence-governed. | — |
| MDC-02 | Model variable representation | `E1` | model_variable_representation[] remains the structured owner for explicit model inputs/outputs. | — |
| MDC-03 | Network configuration | `E1` | network_configuration[] remains the structured owner for numeric/topological configuration. | — |
| MDC-04 | Physical constraints | `E1` | PAPER_PROBLEMS.physical_constraints[] remains the repeatable owner for what condition is imposed. | — |
| MDC-05 | Physics enforcement | `E1` | physics_enforcement[] remains the owner for enforcement mechanism; term set can extend under governance. | — |
| MDC-06 | Physics integration mode | `E1` | physics_integration_mode[] remains the owner for physics incorporation mode; Task 5.2 adds semantic coordination without a competing field. | — |
| MDC-07 | Strong/weak/variational formulation | `D2` | Represent formulation identity as a governed methodology taxonomy concept linked to relevant constraint/enforcement/integration evidence; no dedicated field is justified now. | SW-05 |
| MDC-08 | Loss construction/components | `E1` | loss_components[] remains the owner for objective composition. | — |
| MDC-09 | Loss weighting/balancing | `E1` | loss_weighting_method[] remains the generalized structured owner. | — |
| MDC-10 | Sampling/adaptive sampling | `E1` | sampling_strategy[] remains the owner; technique vocabulary remains extensible. | — |
| MDC-11 | Data/collocation/observation regime | `E1` | PAPER_PROBLEMS.data_regime[] remains the structured data-condition owner; it must not be used as a proxy for learning paradigm. | — |
| MDC-12 | Optimizer identity/strategy | `E1` | optimizer[] remains the owner; optimizer taxonomy may extend dynamically. | — |
| MDC-13 | Training protocol umbrella | `E1` | training_protocol[] remains the umbrella structured owner for scheduling/application controls. | — |
| MDC-14 | Learning-rate control | `E1` | Keep as training_protocol[].protocol_type=learning_rate rather than a new top-level field. | — |
| MDC-15 | Initialization | `E1` | Keep as training_protocol[].protocol_type=initialization. | — |
| MDC-16 | Stabilization/regularization | `E1` | Keep as training_protocol[].protocol_type=stabilization_regularization. | — |
| MDC-17 | Batching | `E1` | Keep as training_protocol[].protocol_type=batching. | — |
| MDC-18 | Stopping/restart | `E1` | Keep as training_protocol[].protocol_type=stopping_restart. | — |
| MDC-19 | Curriculum/continuation | `E1` | Keep as training_protocol[].protocol_type=curriculum_continuation; learning-paradigm identity, if any, is separate. | — |
| MDC-20 | Staged training | `E1` | Keep as training_protocol[].protocol_type=staged_training. | — |
| MDC-21 | Pretraining/fine-tuning control | `E1` | Keep schedule/control in training_protocol[]; transfer/adaptation identity is a separate D2 taxonomy/relation assignment. | — |
| MDC-22 | Optimizer transition | `E1` | Keep optimizer identity in optimizer[] and transition event/control in training_protocol[]. | — |
| MDC-23 | Activation strategy | `E1` | activation_function[] remains the owner; activation is not architecture or transformation. | — |
| MDC-24 | Differentiation/operator evaluation | `E1` | differentiation_method[] remains the owner, including governed optional scheme-detail enrichment. | — |
| MDC-25 | Geometry representation | `E1` | geometry_representation[] remains the owner; geometry representation is not architecture identity. | — |
| MDC-26 | Domain decomposition | `E1` | domain_decomposition_method[] remains the owner; structured enrichment remains monitor-only, not reopened here. | SW-06 |
| MDC-27 | Time decomposition/time partitioning | `D2` | Represent temporal decomposition through source-faithful decomposition taxonomy plus temporal segment/initialization/training/parallel relations as applicable; do not force it into spatial domain decomposition. | SW-03 |
| MDC-28 | Parallel execution | `E1` | parallel_execution[] remains the structured compute-execution owner; it is not federated learning. | — |
| MDC-29 | Transformation/encoding/normalization | `E1` | transformation_method[] remains the role-aware owner for transformations/encoding/normalization. | — |
| MDC-30 | Uncertainty/UQ method | `E1` | uncertainty_method[] remains the method owner; ensemble-learning identity remains separately classifiable. | — |
| MDC-31 | Operator-learning integration | `D2` | Represent operator-learning integration through operator/model taxonomy, computational-task context and typed integration relations; no operator_integration field/entity is justified. | — |
| MDC-32 | Multi-fidelity integration | `D2` | Use fidelity_source_role[] for source roles plus evidence-backed transfer/training/information-flow relations; do not add a generic multi_fidelity_method entity. | — |
| MDC-33 | Fidelity source role | `E1` | fidelity_source_role[] remains the structured source/workflow role owner. | — |
| MDC-34 | Transfer/meta-learning | `D2` | Represent transfer, domain adaptation/generalization and meta-learning as dynamic learning-paradigm concepts linked to source/target/task/model/training context; no generic learning_type field. | SW-07 |
| MDC-35 | Software framework | `E1` | software_framework[] remains the paper-level software-framework owner, distinct from Computational Resources identity. | — |
| MDC-36 | Derived scientific output method | `E1` | derived_output_method[] remains the sole post-inference scientific derivation owner. | — |
| MDC-37 | Reproducibility/method-reporting context | `O1` | REPRODUCIBILITY remains the owner for reporting/availability/hardware/training-cost context; do not turn reporting context into a method taxonomy field. | — |

Result: **37/37 Task 5.1 dimensions receive an explicit structural disposition.**

Important closures:

- `MDC-07` strong/weak/variational formulation remains a dynamic formulation taxonomy/relationship dimension; no dedicated field is justified now.
- `MDC-27` temporal decomposition remains source-faithful dynamic decomposition/linking; it is not force-merged with spatial domain decomposition.
- `MDC-31` operator-learning integration remains composition of model/operator identity, task context and typed integration relations.
- `MDC-32` multi-fidelity integration remains `fidelity_source_role[]` plus workflow/information-flow relations.
- `MDC-34` transfer/meta-learning remains a dynamic learning-paradigm/relationship dimension, not a generic `learning_type`.

## 7. Task 5.2 — physics/knowledge integration structural disposition

| ID | Dimension | Decision | Disposition |
|---|---|---|---|
| T52-F1 | physics incorporation / integration mode | `E1` | Existing physical_constraints[], physics_enforcement[] and physics_integration_mode[] owners preserve the structural distinction; taxonomy/relations coordinate finer semantics. |
| T52-F2 | transfer / reuse / adaptation | `D2` | Dynamic paradigm taxonomy plus source/target/task/model/training relations preserves meaning without a new scalar or dedicated transfer field. |
| T52-F3 | multi-source / multi-fidelity integration | `D2` | fidelity_source_role[] supplies structured source roles; typed workflow/information-flow relations supply integration semantics. No method-specific entity is required. |
| T52-F4 | operator / solver integration | `D2` | Operator/model identity, computational task, numerical/solver identity and integrated_via-style relations must remain separate but linkable. |
| T52-D1 | knowledge / integration locus | `P1` | Expose locus as a derived crosswalk from physics-integration, enforcement, architecture, data/feature and training evidence; do not create a competing locus field. |
| T52-D2 | knowledge / source role | `D2` | Represent source identity/role by governed taxonomy and evidence-scoped links to constraints, data, models or solvers; do not duplicate physical-constraint ownership. |

Task 5.2's two derived facets are therefore resolved as follows:

- **integration locus** → `P1`: derived crosswalk, not a competing stored owner;
- **knowledge/source role** → `D2`: taxonomy plus evidence-scoped links.

The prior locked decision **not to add `physical_knowledge_representation[]`** remains in force. Task 5.4 does not reopen it.

## 8. Task 5.2B — ten general learning-paradigm facets

| ID | Facet | Decision | Disposition | Watch |
|---|---|---|---|---|
| LP-F1 | Supervision / feedback | `D1` | Evidence-backed faceted taxonomy assignment; data_regime label status alone is insufficient. | — |
| LP-F2 | Label availability / acquisition | `D2` | Paradigm term plus links to data/sampling/acquisition evidence; adaptive collocation does not automatically equal active learning. | — |
| LP-F3 | Learning / update regime | `D2` | Paradigm term linked to training/time/task context; training_protocol scheduling alone does not establish online/continual learning. | — |
| LP-F4 | Adaptation / reuse | `D2` | Paradigm term plus source/target/task/model/training context; transfer/domain adaptation/domain generalization/meta-learning remain distinct. | — |
| LP-F5 | Target-support / sample-scarcity | `D1` | Taxonomy assignment with task/data evidence; sparse or zero observational data is not sufficient by itself. | — |
| LP-F6 | Task organization | `D2` | Taxonomy term linked to computational-task/model-output context; multiple outputs/losses do not establish multi-task learning. | — |
| LP-F7 | Distributed / collaborative learning | `D2` | Taxonomy plus participant/topology/aggregation/data-owner relations as evidence supports; compute parallelism remains separate. | SW-04 |
| LP-F8 | Model combination / ensemble | `D2` | Taxonomy plus model-composition/component relations; ensemble, UQ and mixture-of-experts remain non-equivalent. | — |
| LP-F9 | Statistical learning character | `D2` | Taxonomy linked to model/objective/system evidence; generative character is not a GAN/VAE/diffusion backbone synonym. | — |
| LP-F10 | Inference / generalization regime | `D1` | Evidence-backed taxonomy assignment; interpolation/extrapolation evaluation labels do not prove inductive/transductive setup. | — |

Result: **10/10 learning-paradigm facets are representable without a scalar `learning_type` field.**

The design consequence is a **faceted dynamic assignment layer**, not ten new SQL/scientific columns and not one flattened umbrella label. Cross-links provide task, data, source/target, model-composition, training and collaborative context where needed.

## 9. Task 5.2C — 15 external methodology gaps

| ID | External dimension | Decision | Disposition | Watch |
|---|---|---|---|---|
| EX-01 | General learning paradigms | `D1` | Use a generic evidence-backed faceted taxonomy assignment/link capability; no scalar learning_type field. | — |
| EX-02 | Prior/domain-knowledge source | `D2` | Taxonomy + typed links to constraints/data/models/solvers; do not replace physical_constraints[]. | — |
| EX-03 | Knowledge representation | `D2` | Use governed representation taxonomy and typed links to the represented knowledge/source/context; the previously rejected physical_knowledge_representation[] field is not reopened. | — |
| EX-04 | Knowledge-integration locus | `P1` | Derived crosswalk over existing integration/enforcement/architecture/data/training relations; no second locus authority. | — |
| EX-05 | Distributed-learning topology / aggregation / partition | `D2` | Dynamic collaborative-learning taxonomy and context-rich relations; keep parallel_execution[] separate. | SW-04 |
| EX-06 | Model lifecycle / deployment / inference organization | `O1` | Route to implementation/reproducibility/deployment/Computational Resources architecture as applicable, not PP-08 method fields. | — |
| EX-07 | Model compression / efficiency transformation | `D2` | Represent pruning/quantization/distillation/compression as process taxonomy linked by transforms to model realizations; no dedicated compression field. | — |
| EX-08 | Automated architecture / hyperparameter search | `D2` | Represent NAS/HPO as search-process taxonomy linked to selected/configured architecture/configuration; resulting architecture remains separately owned. | — |
| EX-09 | Data modality / structural form | `O1` | Route to problem/data/representation context; use derived query facets rather than an architecture or generic method field. | — |
| EX-10 | ML task/output type / system role | `O1` | computational_task and problem/application owners remain authoritative; do not duplicate task labels inside methodology. | — |
| EX-11 | Neuro-symbolic / differentiable-programming integration | `D2` | Preserve as provisional/dynamic method concepts with typed integration links until corpus evidence justifies normalization. | — |
| EX-12 | Robustness / privacy / security / fairness-aware techniques | `D2` | Specific training/method techniques may be dynamic methodology terms, while properties/constraints/evaluation/governance remain with their own owners. | — |
| EX-13 | Model combination / mixture / ensemble organization | `D2` | Composition taxonomy + component relations; ensemble, mixture-of-experts and generic multi-network systems remain distinct. | SW-02 |
| EX-14 | Representation-learning / latent-representation objective | `D2` | Link objective/training/model-system evidence to governed latent/representation concepts; do not force internal latent semantics into explicit input/output representation. | SW-01 |
| EX-15 | Surrogate / reduced-order / learned-model role | `D2` | Keep task/system role separate from architecture; link model component to surrogate/ROM/operator role as evidence supports. | SW-02 |

Result: **15/15 external-emphasis dimensions receive a structural disposition.**

Key decisions:

- EX-03 knowledge representation remains dynamic taxonomy + relations; the locked rejection/defer of `physical_knowledge_representation[]` is preserved.
- EX-04 integration locus is a derived projection.
- EX-05 federated/distributed-learning organization does not reuse `parallel_execution[]`.
- EX-07 compression and EX-08 NAS/HPO are processes linked to model realizations/configuration, not architecture identities or dedicated top-level fields.
- EX-09/EX-10 remain problem/data/task/context owners rather than duplicated methodology.
- EX-13–EX-15 remain composition/objective/system-role semantics expressed through taxonomy and typed links.

## 10. Task 5.3 structural handoff

| Handoff | Concept | Decision | Task 5.4 resolution | Watch |
|---|---|---|---|---|
| T53-H1 | internal learned latent semantics | `D2` | Keep latent/code semantics as dynamic representation/objective concepts linked to the relevant model/component and evidence. model_variable_representation[] remains explicit interface only; latent_dimension remains numeric configuration only. | SW-01 |
| T53-H2 | reusable model/component roles and multi-network composition | `D2` | Use composition taxonomy and typed component-role links; do not infer architecture class from component count. Stable component identity becomes structural only if linking demonstrably fails. | SW-02 |
| T53-H3 | architecture search / compression processes | `D2` | Search/transformation process taxonomy plus selects_or_configures/transforms relations is sufficient; final architecture/configuration remains separately owned. | — |
| T53-H4 | surrogate / ROM / learned-component system roles | `D2` | Represent system role through computational-task context plus typed role/coupling relations; role is not a universal architecture family. | SW-02 |

### 10.1 Internal latent semantics

**Decision: dynamic now (`D2`), structural watch only.**

`model_variable_representation[]` continues to own explicit model inputs/outputs. `network_configuration.latent_dimension` continues to own a numeric latent dimension when reported. Semantic latent/code identity, representation-learning objective and role remain dynamic concepts linked to the relevant model/component and evidence.

Task 5.4 does **not** silently broaden `model_variable_representation[]` to internal latent objects.

### 10.2 Reusable learned components / multi-network organization

**Decision: dynamic composition taxonomy + typed roles (`D2`), structural watch only.**

Encoder, decoder, generator, discriminator, expert, router, policy, value network, branch, surrogate/operator component and similar roles do not each receive dedicated fields/entities. Component count alone does not establish any composition class.

If later verified evidence demonstrates stable component identity/linking failure across architecture, configuration, variables, training and evidence, the correct future direction would be one generalized model-component structure—not a proliferation of component-specific tables.

### 10.3 Architecture search and compression

**Decision: dynamic process taxonomy + relations (`D2`).**

NAS/HPO `selects_or_configures` candidate/final architecture/configuration. Compression/distillation/pruning/quantization `transforms` a model realization. The resulting architecture and configuration remain separately owned.

No X6 watch is currently necessary for the core scientific identity; detailed search spaces/trials/deployment artifacts can later be handled by reproducibility/implementation structures if needed.

### 10.4 Surrogate / ROM / learned-component roles

**Decision: dynamic role/coupling relations (`D2`).**

Surrogate/ROM/operator role is not a universal architecture family. `computational_task` remains authoritative for the scientific task; architecture remains authoritative for model family; typed relations express the model's role in a larger workflow.

## 11. Structural-watch register

These items are **not approved schema changes** and do **not** mean that v0.7 is deficient. They are controlled reopening sentinels.

| ID | Candidate | Current treatment | Reopen only if |
|---|---|---|---|
| SW-01 | internal latent semantic structure | D2 dynamic representation/objective taxonomy + model/component relation | verified paper evidence demonstrates one or more internal latent objects whose scientifically distinct role/objective/provenance cannot be represented or cross-linked without ambiguity through current configuration, evidence scope and dynamic relations |
| SW-02 | stable learned-model/component identity and role structure | D2 composition taxonomy + typed component-role relations + component_scope/evidence | multiple scientifically distinct learned components in a paper require stable cross-record links to their own architecture, configuration, inputs/outputs, training, role or evidence and text/scope locators cannot preserve identity without ambiguity |
| SW-03 | time-decomposition / temporal-partition structure | D2 source-faithful temporal-decomposition terms + R-C14/training/parallel/decomposition links as applicable | temporal segments/windows require stable boundaries, ordering, interface/transfer links or segment-specific attributes that cannot be reconstructed from existing decomposition/protocol/parallel/evidence records |
| SW-04 | collaborative/federated workflow structure | D2 learning-paradigm taxonomy + participant/topology/aggregation/partition relations; parallel_execution[] remains compute-only | verified collaborative-learning studies require repeatable participant/data-owner/topology/aggregation records with stable identity that cannot be represented safely through contextual relations and evidence |
| SW-05 | strong/weak/variational formulation detail structure | D2 formulation taxonomy linked to constraints/enforcement/integration/evidence | verified papers require repeatable formulation-specific attributes or component-level links whose loss changes scientific interpretation and cannot be retained by taxonomy terms, relations and evidence scope |
| SW-06 | structured domain-decomposition enrichment | E1 domain_decomposition_method[] with dynamic taxonomy; v0.6 defer decision remains in force | later evidence demonstrates recurring decomposition attributes/linkages that cannot be reconstructed from current method terms, parallel_execution[], network configuration, relations and evidence |
| SW-07 | transfer/adaptation event structure | D2 transfer/adaptation/meta-learning taxonomy + source/target/task/model/training relations | a paper contains multiple transfer/adaptation events whose source, target, stage, model, domain/task and evidence must remain separately linked and relation/context representation becomes ambiguous or lossy |

Important governance rule: a watch item can move toward X6 only after actual paper-level evidence establishes structural loss/ambiguity/linking failure under Task 1.4. Task 5.5 will later define evidence/recurrence criteria for ontology promotion; Task 5.4 does not preempt that work.

## 12. Future-version decision

**No v0.8 structural proposal is required or authorized by Task 5.4.**

Current counts:

- new locked-v0.7 fields/entities: **0**;
- locked-v0.7 mutations: **0**;
- demonstrated current X6 candidates requiring schema change: **0**;
- future-v0.8 schema proposals authorized here: **0**;
- structural-watch items: **7**.

This is not a claim that the architecture can never change. It means the present evidence package does not cross the governed structural-change threshold.

A later version proposal is permitted only if future verified evidence demonstrates an X6 need and the correct owner, migration, backward compatibility and regression plan are specified.

## 13. Hard no-merge / non-duplication rules carried into implementation

Task 5.4 requires the future database/UI/extraction system to preserve at least these boundaries:

- taxonomy term != database field or entity.
- learning paradigm != physics/knowledge integration mode.
- learning paradigm != architecture family.
- learning paradigm != data regime.
- transfer/adaptation identity != pretraining/fine-tuning schedule.
- federated/collaborative learning != parallel execution.
- architecture-search process != resulting architecture.
- compression/transformation process != architecture family.
- internal latent semantics != explicit model input/output representation.
- numeric latent_dimension != semantic latent representation/objective.
- model role != architecture family.
- surrogate/ROM role != computational task identity and != architecture family.
- ensemble != mixture of experts != generic multi-network composition.
- strong/weak/variational formulation != physics enforcement != physics integration mode.
- time decomposition != generic spatial domain decomposition.
- knowledge representation != physical constraint identity.
- knowledge-integration locus != physics_integration_mode field by automatic equivalence.
- operator learning != PINN type/family.
- data modality != model architecture.
- deployment/lifecycle organization != PP-08 methodology by default.
- dynamic assignment/link implementation != new scientific authority.
- terminology occurrence != verified classification.

In particular, future Paper Profile presentation may show “Learning paradigms”, “Knowledge integration”, “Architecture/composition” or similar derived sections, but a visible section does not create a new scientific field. UI grouping is a projection over governed owners.

## 14. Consequence for later database design

Task 5.4 constrains Task 12 but does not perform it.

Task 12 must:

1. preserve every locked specialized owner already justified in v0.7;
2. support N:M evidence-backed taxonomy assignments without adding one column per emerging method;
3. support evidence-scoped relation instances and provisional relation types;
4. support source-local/paper-specific concepts without globalizing them;
5. support derived projections without duplicating authority;
6. preserve component/scope context sufficiently to detect the SW-01/SW-02/SW-03/SW-04/SW-05/SW-06/SW-07 reopening conditions;
7. avoid page-specific schema authorities;
8. preserve evidence/history and ontology versioning.

Physical table names, foreign keys and cardinalities beyond the locked scientific contract remain Task 12 work.

## 15. Consequence for Task 5.5

Task 5.5 remains **NOT STARTED** by this artifact.

Task 5.5 must define the evidence/recurrence criteria for future ontology promotion, including how dynamic concepts or structural-watch items can be reviewed for canonical term/relation promotion or later-version structural change.

Task 5.5 must **not** treat recurrence alone as automatic structure promotion and must remain subordinate to Task 1.4 X6 and Task 1.5 hard gates.

## 16. Acceptance result

Task 5.4 passes because:

- **37/37** Task 5.1 methodology dimensions have explicit structural dispositions;
- **6/6** Task 5.2 integration/derived dimensions have dispositions;
- **10/10** Task 5.2B learning-paradigm facets have dispositions;
- **15/15** Task 5.2C externally emphasized dimensions have dispositions;
- **4/4** Task 5.3 structural handoffs are resolved;
- specialized existing v0.7 owners are retained rather than duplicated;
- dynamic taxonomy/relationship/projection is used where scientifically adequate;
- **7** watch items have explicit reopening conditions without being misrepresented as approved X6 changes;
- no generic `learning_type` or comparable convenience field is introduced;
- no locked-v0.7 field/entity/term/relation/evidence is changed;
- Tasks 1–4 are not reopened;
- Task 5.5 is not started.

## 17. Change boundary

- New locked-v0.7 scientific fields/entities: **0**.
- Locked-v0.7 mutations: **0**.
- Canonical ontology promotions: **0**.
- Global alias promotions: **0**.
- Paper-level assignments: **0**.
- Locked scientific evidence modifications: **0**.
- Production `main` changes: **0**.
- Computational Resources Stage 1/2/3 changes: **0**.
- Task 5.5 work performed: **0**.

## 18. Verdict and stop boundary

**TASK 5.4 — PASS / COMPLETE.**

The controlling architectural decision is:

> **Retain specialized structure where v0.7 already proved a structural need; otherwise prefer governed dynamic taxonomy assignments, evidence-scoped typed relationships and deterministic projections. Introduce future specialized structure only after a demonstrable X6 failure, never for convenience or vocabulary completeness.**

At this checkpoint, **no new future-version schema proposal is scientifically required**.

**STOP BOUNDARY: Task 5.4 is complete. Task 5.5 has not started.**

Exact next substantive roadmap action, only when separately authorized:

**Task 5.5 — define evidence/recurrence criteria for future ontology promotion, using Task 5.4's structural decisions and watch register as controlling inputs.**
