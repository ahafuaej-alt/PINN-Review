# Task 5 — Methodological Extensibility Status

Status: **IN PROGRESS — Tasks 5.1–5.2 PASS / COMPLETE**

Date: 2026-09-08

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

## Current state

- **Task 5.1 — Catalogue existing methodology dimensions: PASS / COMPLETE**
- **Task 5.2 — Define learning/integration-type taxonomy: PASS / COMPLETE**
- **Task 5.3 — Define coupled ML-method taxonomy: NEXT / NOT STARTED**
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

## Governing revision rule

Later primary-source evidence may revise normalization, dimension placement, relationships, applicability or whether specialized structure is scientifically justified. Any correction must be explicit, evidence-backed, versioned and history-preserving. Raw wording, locators, prior decisions, contradictions and deferred/rejected alternatives must remain traceable.

## Stop boundary

**Task 5.3 was not started.**

Exact next action, only when separately authorized: **Task 5.3 — define the coupled ML-method taxonomy (CNN, GNN, RNN/LSTM, Transformer, GAN, Autoencoder, RL and other evidence-supported coupled ML methods) using Tasks 5.1–5.2 as controlling inputs.**
