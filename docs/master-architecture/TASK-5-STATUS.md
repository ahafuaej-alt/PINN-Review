# Task 5 — Methodological Extensibility Status

Status: **IN PROGRESS — Tasks 5.1–5.4 PASS / COMPLETE; 5.5 NEXT**

Date: 2026-09-09

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

## Current state

- **Task 5.1 — Catalogue existing methodology dimensions: PASS / COMPLETE**
- **Task 5.2 — Define learning/integration-type taxonomy: PASS / COMPLETE**
- **Task 5.2B — General Machine-Learning Learning-Paradigm Taxonomy: PASS / COMPLETE**
- **Task 5.2C — External Methodology Coverage / Gap Audit: PASS / COMPLETE**
- **Task 5.3 — Model / Representation / Coupled-ML Architecture Taxonomy: PASS / COMPLETE**
- **Task 5.4 — Decide specialized structure versus dynamic taxonomy/linking: PASS / COMPLETE**
- **Task 5.5 — Define evidence/recurrence criteria for future ontology promotion: NEXT / NOT STARTED**

## Task 5.1 artifacts

- `TASK-5.1-METHODOLOGY-DIMENSION-CATALOGUE.md`
- `atlas-methodology-dimension-catalogue.json` — non-authoritative machine-readable coordination catalogue

## Task 5.2 artifacts

- `TASK-5.2-LEARNING-INTEGRATION-TYPE-TAXONOMY.md`
- `atlas-learning-integration-taxonomy-spec.json` — non-authoritative machine-readable coordination taxonomy

## Task 5.2B artifacts

- `TASK-5.2B-GENERAL-ML-LEARNING-PARADIGM-TAXONOMY.md`
- `atlas-learning-paradigm-taxonomy-spec.json` — non-authoritative machine-readable coordination taxonomy
- `TASK-5.2B-REFERENCE-AUDIT-AND-MDPI-BIBLIOGRAPHY.md`
- `atlas-learning-paradigm-reference-register.json`

## Task 5.2C artifacts

- `TASK-5.2C-EXTERNAL-METHODOLOGY-COVERAGE-GAP-AUDIT.md`
- `atlas-external-methodology-coverage-gap-audit.json` — non-authoritative machine-readable X→Y→Z audit register
- `TASK-5.2C-REFERENCE-QA-ADDENDUM.md`
- `TASK-5.2C-MACHINE-READABLE-VALIDATION.md` — runtime syntax/consistency validation record

## Task 5.3 artifacts

- `TASK-5.3-MODEL-REPRESENTATION-COUPLED-ML-ARCHITECTURE-TAXONOMY.md`
- `atlas-model-representation-coupled-ml-taxonomy-spec.json` — non-authoritative machine-readable architecture coordination taxonomy
- `TASK-5.3-MACHINE-READABLE-VALIDATION.md` — executed runtime syntax/consistency validation record

## Task 5.4 artifacts

- `TASK-5.4-STRUCTURAL-SPECIALIZATION-VS-DYNAMIC-TAXONOMY-DECISION.md`
- `atlas-structural-specialization-decision-spec.json` — non-authoritative machine-readable structural-decision contract
- `TASK-5.4-MACHINE-READABLE-VALIDATION.md` — executed runtime syntax/consistency and byte-readback validation record

## Task 5.1 result

Task 5.1 inventoried the existing methodology model before extensibility redesign. It accounts for all 25 methodology-dimension labels already named in locked v0.7 Controlled Vocabularies; the complete PP-08 methodology/data ownership surface; structured subdimensions; the consolidated training protocol; physical-constraint and reproducibility boundaries; and composite/deferred dimensions.

Task 5.1 created **no new scientific fields, entities, canonical terms or relationships**.

## Task 5.2 result

Task 5.2 defines the physics/knowledge learning-integration system as a **faceted governed taxonomy graph**, not a replacement field and not a second PINN-type hierarchy. It separates physics incorporation, transfer/reuse/adaptation, multi-source/multi-fidelity integration, and operator/solver integration while preserving existing locked owners and no-merge boundaries.

## Task 5.2B result

Task 5.2B used authoritative external terminology and peer-reviewed taxonomy/review literature rather than flat internet lists. It defines **ten orthogonal general-learning facets**: supervision/feedback; label availability/acquisition; learning/update regime; adaptation/reuse; target-support/sample-scarcity; task organization; distributed/collaborative learning; model combination/ensemble; statistical learning character; and inference/generalization regime.

These are facets, not mutually exclusive global classes. Task 5.2B therefore forbids a single scalar `learning_type` as the architectural solution and creates no generic locked-v0.7 learning field.

## Task 5.2C result

Task 5.2C executed the broader external methodology-comprehensiveness audit using the mandatory **X → Y → Z** protocol:

- **X:** all 37 Task 5.1 internal methodology dimensions;
- **Y:** 16 externally researched methodological search axes covering general learning, architecture, prior/domain knowledge, formulation/enforcement, objective/loss, optimization/training, sampling/data acquisition, differentiation/operator evaluation, transformations/encodings, decomposition/distributed execution, transfer/multi-fidelity, UQ, operator/surrogate/solver coupling, lifecycle/deployment/reproducibility, task/data modality/system role, and emerging/cross-cutting methods;
- **Z:** a final coverage/disposition matrix.

Hard-gate result:

- **37/37** internal dimensions map to at least one external-search axis;
- **37/37** internal dimensions have an explicit final matrix disposition;
- **15/15** materially new or externally emphasized dimensions discovered during the audit have explicit dispositions.

The main externally emphasized gaps are **semantic/taxonomic coordination gaps rather than a foundational schema failure**. Important cross-cutting dimensions include general learning paradigms; prior/domain-knowledge source; knowledge representation; knowledge-integration locus; distributed-learning topology/aggregation/partition; lifecycle/deployment/inference organization; model compression/efficiency transformations; automated architecture/hyperparameter search; data modality/structural form; ML task/output type/system role; neuro-symbolic/differentiable-programming integration; robustness/privacy/security/fairness-aware methods; model combination/mixture/ensemble organization; representation-learning/latent objective; and surrogate/reduced-order/learned-model role.

### Task 5.2C machine-readable validation

A focused runtime validation of `atlas-external-methodology-coverage-gap-audit.json` was executed after Task 5.2C. Result: **PASS with 0 validation errors**.

Verified conditions include valid JSON syntax; required top-level keys; unique `Y01`–`Y16`, `MDC-01`–`MDC-37` and `EX-01`–`EX-15` identifiers; 37/37 internal Y mappings; 15/15 external dispositions; valid declared coverage states; unique source-registry IDs; safety/authority flags remaining false; recomputed acceptance counts matching the human audit; and `task_5_3_started=false`.

No defect required modification of the Task 5.2C JSON artifact. The complete validation record is `TASK-5.2C-MACHINE-READABLE-VALIDATION.md`.

### Structural conclusion from Task 5.2C

The audit did **not** identify evidence requiring Tasks 1–4 to be reopened or the locked v0.7 schema to be mutated immediately. Existing L1–L8 architecture, evidence/provenance, L5 dynamic taxonomy, typed relations and governed extension rules can accommodate the discovered space; Task 5.4 has now adjudicated the remaining specialized-structure question.

Thus:

- architecture comprehensiveness is supported;
- vocabulary exhaustiveness is **not** claimed;
- taxonomy/detail expansion remains evidence-driven;
- no field is added merely because an external taxonomy contains a term.

### Full-text refinements from the curated `Taxonomy resources` folder

The 21-item Drive resource folder was incorporated as a full-text evidence workspace. Four important refinements are preserved:

1. **Weak supervision / semi-supervised learning:** some authoritative taxonomies place semi-supervised learning inside a broader weak-supervision landscape. Atlas must therefore preserve source-specific hierarchy/context rather than assert universal equivalence or universal disjointness.
2. **Multi-task learning:** multiple loss components do not automatically prove MTL; explicit source formulation and task semantics can support a paper-scoped MTL assignment, as in AW-EL-PINNs.
3. **Domain adaptation:** source taxonomies may treat domain adaptation as a transfer-learning subtype and distinguish sample-, feature- and inference-based approaches; Atlas must preserve source framing rather than force one universal hierarchy.
4. **Federated/distributed learning:** learning organization, topology/aggregation/partition and compute parallelism are separate semantic axes.

These refine prior coordination rules without silently rewriting source evidence or historical decisions.

## Task 5.3 result

Task 5.3 formalizes model/representation/coupled-ML architecture semantics as a **six-facet coordination system**, not as one flat architecture list:

1. backbone model architecture;
2. model composition pattern;
3. scientific representation choice;
4. generative/latent model system;
5. coupled external ML/operator method;
6. architecture lifecycle/search/transformation process.

The controlling scientific boundary is:

**PINN type/family ≠ architecture family ≠ network configuration ≠ scientific representation ≠ learning paradigm ≠ training protocol ≠ numerical/solver coupling ≠ application/equation specialization.**

Task 5.3 preserves `MDC-01 / PINN_architecture[]` as the current architecture-family owner, `MDC-02 / model_variable_representation[]` for explicit scientific model-interface representation, `MDC-03 / network_configuration[]` for configuration, and `MDC-13 / training_protocol[]` for training protocol. Internal learned latent semantics are not forced into `model_variable_representation[]` unless they are an explicit model interface; Task 5.4 has now resolved their current structural treatment as dynamic representation/objective taxonomy plus evidence-scoped model/component relations, under structural watch rather than immediate schema promotion.

The taxonomy coordinates evidence-supported architecture concepts including MLP/feed-forward networks, CNN, recurrent/RNN, LSTM, GRU, Transformer, GNN, KAN/PIKAN, stacked-residual architecture, RBF neural networks, SIREN and source-specific architecture concepts without creating automatic Atlas paper assignments. Generative/latent systems such as autoencoders, VAEs, GANs and diffusion models remain multi-axis systems rather than interchangeable backbone labels. Neural operators retain operator-learning identity; reinforcement learning remains a learning paradigm; numerical solvers remain coupling/integration methods. NAS/HPO and pruning/quantization/distillation remain search/transformation processes rather than final architecture identities.

Task 5.3 also preserves the high-risk no-merge rules: attention mechanism ≠ Transformer; sequence representation ≠ RNN/LSTM/GRU/Transformer; graph representation ≠ GNN; grid/tensor representation ≠ CNN; GAN ≠ generator backbone and ≠ PINN; autoencoder ≠ VAE ≠ GAN; neural operator ≠ PINN; ensemble ≠ mixture of experts ≠ generic multi-network system; Fourier-feature encoding ≠ architecture family; geometry/constraint representation ≠ neural architecture; terminology occurrence ≠ verified classification.

The Task 5.2C crosswalk is corrected and explicit: **EX-07** owns the compression/efficiency-transformation gap and **EX-08** owns automated architecture/hyperparameter search. These feed Task 5.3's process facet and were adjudicated in Task 5.4 as dynamic process taxonomy plus typed relations rather than specialized architecture fields.

### Task 5.3 machine-readable validation

The corrected `atlas-model-representation-coupled-ml-taxonomy-spec.json` was parsed and consistency-validated after repository write/readback. Result: **PASS with 0 validation errors**.

Validated machine contract:

- taxonomy facets: **6**;
- architecture nodes: **13**;
- representation nodes: **8**;
- organization/composition nodes: **8**;
- coupled-method nodes: **6**;
- search/compression process nodes: **5**;
- carried collision dependencies: **6**;
- governed-review flags: **4**;
- typed cross-dimensional links: **10**;
- no-merge rules: **35**.

Validation also confirmed the corrected `MDC-13` training-protocol ownership, `EX-07`/`EX-08` crosswalk, zero locked-v0.7 mutation/promotion/assignment flags, and that **Task 5.4 had not started at the time that Task 5.3 validation was executed**. No GitHub Actions/CI execution is claimed by this runtime validation.

### Paper Profile consequence after Task 5.3

PP-08 Methodology may later expose evidence-backed derived facets for learning paradigm, prior/domain-knowledge source and representation, knowledge-integration locus, architecture/model family, distributed-learning organization and related composition/coupling semantics. Task 5.3 does not authorize a scalar `learning_type`, a competing architecture field, or any locked-v0.7 Paper Profile/schema mutation.

## Task 5.4 result

Task 5.4 formally separates **existing specialized structure** from **dynamic taxonomy/linking/projection** using five disposition classes:

- `E1` — retain an existing locked-v0.7 specialized owner;
- `D1` — dynamic taxonomy assignment;
- `D2` — dynamic taxonomy plus evidence-scoped typed/provisional relations;
- `P1` — deterministic/derived projection without duplicate authority;
- `O1` — route to another established owner outside PP-08 Methodology.

The governing test is **structural need, not recurrence or convenience**. A future specialized field/entity is justified only if current fields, repeatable records, evidence scope, taxonomy and typed relations cannot preserve scientifically necessary identity, multiplicity, attributes or stable cross-record linkage without irreducible loss or ambiguity. Generalization of an existing correct owner must be preferred over duplication.

Task 5.4 dispositions are complete:

- **37/37** Task 5.1 methodology dimensions;
- **6/6** Task 5.2 integration/derived dimensions;
- **10/10** Task 5.2B learning-paradigm facets;
- **15/15** Task 5.2C externally emphasized dimensions;
- **4/4** Task 5.3 structural handoffs.

No current Task 5.1–5.3 evidence crosses the X6 structural-change threshold. Therefore:

- new locked-v0.7 fields/entities: **0**;
- demonstrated X6 schema defects requiring change: **0**;
- v0.8 schema proposals authorized by Task 5.4: **0**.

Task 5.4 also defines seven **structural-watch** sentinels, none of which is an approved schema change:

1. internal latent semantic structure;
2. stable learned-model/component identity and role structure;
3. temporal decomposition/partition structure;
4. collaborative/federated workflow structure;
5. strong/weak/variational formulation detail structure;
6. structured domain-decomposition enrichment;
7. transfer/adaptation event structure.

Each watch has an explicit reopening condition based on demonstrated structural loss, ambiguity or linking failure. Task 5.4 does not define recurrence/promotion thresholds; that remains Task 5.5.

### Dynamic assignment/linking consequence

Future implementation must support evidence-backed N:M taxonomy assignments and evidence-scoped relation instances with source wording, scope/component context, verification/support state and ontology/history trace. This is an implementation capability requirement, **not** a new locked-v0.7 scientific field or a page-local authority. Physical PostgreSQL table design remains Task 12 work.

### Task 5.4 machine-readable validation

`atlas-structural-specialization-decision-spec.json` was runtime-parsed and consistency-validated. Result: **PASS with 0 validation errors**.

Validated payload:

- specification version: `task-5.4-v1.0.0`;
- payload size: **30,938 bytes**;
- payload SHA-256: `a59330bb73b725f818fd5e2ced3dac2118643a046cb6255830249664d89f2feb`;
- Git blob SHA: `4a808fbc35edbd2814c6747d30deecd3e37004cf`.

The computed Git blob SHA matched GitHub readback exactly, confirming byte-level identity between the runtime-validated payload and the repository payload.

Validation also confirmed zero locked-v0.7 mutations, zero canonical/global-alias promotions, zero paper assignments, zero production/Stage changes and `task_5_5_started=false`.

## Evidence basis

Tasks 5.2B–5.4 use authoritative/publisher-verified external evidence plus curated Drive full texts for generic scientific/ML semantics and locked Atlas evidence for Atlas-specific meaning, collisions, ownership and structural governance. Generic external definitions do not create paper-level Atlas assignments.

General web pages and AI/checklist files are discovery aids only and are not scientific authority.

## Governing revision rule

Later authoritative external research, Task 5.5 findings or primary-source evidence may revise candidate dimensions, normalization, relationships, applicability, model-family placement or structural-promotion judgments. Any correction must be explicit, evidence-backed, versioned and history-preserving. Raw wording, locators, prior decisions, contradictions and deferred/rejected alternatives must remain traceable.

## Change boundary through Task 5.4

- New locked-v0.7 scientific fields/entities: **0**.
- Automatic canonical ontology promotions: **0**.
- Automatic global alias promotions: **0**.
- Automatic paper-level methodology/learning/architecture assignments: **0**.
- Tasks 1–4 reopened: **0**.
- Production `main` changes: **0**.
- Computational Resources Stage 1/2/3 changes: **0**.
- Task 5.5 work performed: **0**.

## Stop boundary

**Task 5.4 is PASS / COMPLETE. Task 5.5 has not started.**

Exact next substantive action, only when separately authorized: **Task 5.5 — define evidence/recurrence criteria for future ontology promotion, using Task 5.4's structural decisions and watch register as controlling inputs.**
