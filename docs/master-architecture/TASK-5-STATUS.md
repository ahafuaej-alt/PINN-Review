# Task 5 — Methodological Extensibility Status

Status: **IN PROGRESS — Tasks 5.1–5.2 PASS / COMPLETE; 5.2B NEXT**

Date: 2026-09-09

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

## Current state

- **Task 5.1 — Catalogue existing methodology dimensions: PASS / COMPLETE**
- **Task 5.2 — Define learning/integration-type taxonomy: PASS / COMPLETE**
- **Task 5.2B — General Machine-Learning Learning-Paradigm Taxonomy: NEXT / NOT STARTED**
- **Task 5.2C — External Methodology Coverage / Gap Audit: NOT STARTED**
- **Task 5.3 — Model / Representation / Coupled-ML Architecture Taxonomy: NOT STARTED**
- Task 5.4 — Decide specialized structure versus dynamic taxonomy/linking: **NOT STARTED**
- Task 5.5 — Define evidence/recurrence criteria for future ontology promotion: **NOT STARTED**

## Task 5.1 artifacts

- `TASK-5.1-METHODOLOGY-DIMENSION-CATALOGUE.md`
- `atlas-methodology-dimension-catalogue.json` — non-authoritative machine-readable coordination catalogue

## Task 5.2 artifacts

- `TASK-5.2-LEARNING-INTEGRATION-TYPE-TAXONOMY.md`
- `atlas-learning-integration-taxonomy-spec.json` — non-authoritative machine-readable coordination taxonomy

## Task 5.1 result

Task 5.1 inventoried the existing methodology model before any extensibility redesign. It accounts for all 25 methodology-dimension labels already named in locked v0.7 Controlled Vocabularies; the complete PP-08 methodology/data ownership surface; structured subdimensions; the consolidated training protocol; physical-constraint and reproducibility boundaries; and composite/deferred dimensions.

Task 5.1 created **no new scientific fields, entities, canonical terms or relationships**.

## Task 5.2 result

Task 5.2 defines the learning/integration system as a **faceted governed taxonomy graph**, not a replacement field and not a second PINN-type hierarchy.

The taxonomy separates four principal semantic facets:

1. **Physics incorporation mode** — directly reuses locked `physics_integration_mode[]`: residual/loss-based physics constraint, hard/analytic constraint, architecture-encoded physics, physics-guided data/feature integration, physics-informed initialization/pretraining, and hybrid numerical/ML coupling.
2. **Transfer, reuse and adaptation mode** — separates transfer-learning identity, canonical sequential/time-marching transfer, pretraining/fine-tuning scheduling, meta-learning/adaptation and warm-start/continuation semantics.
3. **Multi-source / multi-fidelity integration mode** — preserves `fidelity_source_role[]` as the source/workflow owner and explicitly keeps multi-fidelity distinct from transfer learning and generic data+physics hybridization.
4. **Operator / solver integration mode** — represents operator-learning integration, learned differential/operator evaluation, pretrained-operator integration and numerical/classical-solver coupling without collapsing neural operators into PINN.

Task 5.2 also defines derived query facets for **integration locus** and **knowledge/source role**. These are coordination/query semantics only and are not new paper fields.

## Roadmap refinement after Task 5.2

The methodology-comprehensiveness discussion recorded in Master Memory Section 57 showed that Task 5.2 correctly covers **physics/knowledge learning-integration**, but it is not intended to be a comprehensive taxonomy of all general machine-learning learning paradigms. The roadmap therefore inserts two controlled tasks before the previously planned coupled-ML taxonomy:

### Task 5.2B — General Machine-Learning Learning-Paradigm Taxonomy

Purpose: define the major orthogonal learning-paradigm facets needed by the Atlas, using authoritative external research rather than a flat internet list. The research must consider, at minimum, supervision/feedback, learning/update regime, data acquisition/labeling, adaptation/reuse, task organization, distributed/collaborative learning, model-combination strategy, and statistical learning character. It must preserve overlaps and non-equivalences rather than force one scalar `learning_type`.

### Task 5.2C — External Methodology Coverage / Gap Audit

Purpose: test whether the Atlas methodology architecture is semantically comprehensive across the full methodological space, not merely whether current vocabulary is large. It will use an expanded external search program and an exhaustive coverage matrix.

Hard traceability gate for Task 5.2C:

- every methodology dimension already identified by the internal candidate completeness map must map to at least one external-search axis;
- every such dimension must appear in the final coverage matrix;
- every newly discovered external dimension must also appear in that matrix with an explicit disposition;
- uncovered, partially covered, compositely covered, irrelevant and possible-future-structure cases must remain distinguishable;
- the audit must not assume the current internal list is a ceiling.

The controlling principle is:

> **Comprehensive architecture = complete semantic dimensions + extensible vocabularies + extensible typed relations + controlled structural extension.**

This does not mean enumerating every machine-learning method currently known.

Only after Tasks 5.2B and 5.2C pass should Task 5.3 begin.

## Expanded Task 5.3 scope

Task 5.3 is now **Model / Representation / Coupled-ML Architecture Taxonomy**. It will classify representation/model families and coupled ML methods such as MLP, CNN, RNN/LSTM/GRU, Transformer/attention, GNN, KAN, Autoencoder/VAE, GAN, diffusion/generative families, operator-learning models and other evidence-supported model families while preserving boundaries among architecture, learning paradigm, PINN type, training method and computational task.

The exact taxonomy scope may be refined by findings from Task 5.2C; Task 5.3 must not preempt that audit.

## Mandatory boundaries for remaining Task 5 work

- architecture family ≠ network configuration;
- physical constraint ≠ enforcement/integration mode;
- loss component ≠ loss weighting ≠ generic training protocol;
- optimizer identity ≠ optimizer-transition scheduling;
- adaptive sampling ≠ adaptive loss weighting ≠ meta-learning/adaptation;
- data regime ≠ fidelity source role ≠ integration type;
- model input/output identity ≠ transformation ≠ derived output;
- domain decomposition ≠ parallel execution;
- parallel execution ≠ hardware reporting;
- software framework ≠ code availability ≠ Computational Resources identity;
- physics integration mode ≠ PINN type/family;
- learning/integration type ≠ coupled ML backbone;
- general learning paradigm ≠ representation/model architecture;
- reinforcement learning is a learning paradigm, not an architecture family;
- deep learning is not one architecture family;
- generative/discriminative character is not automatically equivalent to a particular model architecture;
- residual/loss physics ≠ hard/exact-by-construction enforcement;
- transfer learning ≠ pretraining/fine-tuning scheduling by default;
- transfer learning ≠ multi-fidelity learning;
- multi-fidelity ≠ generic data+physics hybridization;
- low fidelity ≠ coarse simulation;
- neural operator ≠ PINN and ≠ physics-informed operator by default;
- operator-learning integration ≠ operator-learning computational task;
- solver used for validation ≠ hybrid numerical/ML coupling;
- `derived_output_method[]` remains the sole post-inference scientific derivation owner;
- legacy `adaptive_weighting[]` is migration input only and must not compete with `loss_weighting_method[]`.

## Impact on earlier tasks

Tasks 1–4 remain valid and are not reopened by this roadmap refinement. Their extensibility, taxonomy, evidence and governed-version rules were designed to accommodate later discovered dimensions.

The future Paper Profile should be able to expose evidence-backed learning-paradigm facets under PP-08 Methodology if Task 5.4 determines an appropriate owner. No silent `learning_type` field is added to locked v0.7, and any structural addition would require a governed future ontology/profile version.

Task 4 PINN-type semantics remain separate from learning paradigm and representation/model architecture; later cross-dimensional linking may reference the new governed dimensions without redefining PINN type.

## Governing revision rule

Later authoritative external research or primary-source evidence may revise the candidate dimension universe, normalization, dimension placement, relationships, applicability or structural-promotion judgment. Any correction must be explicit, evidence-backed, versioned and history-preserving. Raw wording, locators, prior decisions, contradictions and deferred/rejected alternatives must remain traceable.

## Stop boundary

**Tasks 5.2B, 5.2C and 5.3 were not started by this roadmap/status update.**

Exact next action, only when separately authorized: **Task 5.2B — perform the General Machine-Learning Learning-Paradigm Taxonomy using authoritative external research and Tasks 5.1–5.2 plus Master Memory Section 57 as controlling inputs.**
