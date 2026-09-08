# Task 5 — Methodological Extensibility Status

Status: **IN PROGRESS — Task 5.1 PASS / COMPLETE**

Date: 2026-09-08

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

## Current state

- **Task 5.1 — Catalogue existing methodology dimensions: PASS / COMPLETE**
- **Task 5.2 — Define learning/integration-type taxonomy: NEXT / NOT STARTED**
- Task 5.3 — Define coupled ML-method taxonomy: **NOT STARTED**
- Task 5.4 — Decide specialized structure versus dynamic taxonomy/linking: **NOT STARTED**
- Task 5.5 — Define evidence/recurrence criteria for future ontology promotion: **NOT STARTED**

## Task 5.1 authoritative roadmap artifacts

- `TASK-5.1-METHODOLOGY-DIMENSION-CATALOGUE.md`
- `atlas-methodology-dimension-catalogue.json` — non-authoritative machine-readable coordination catalogue

## Task 5.1 result

Task 5.1 inventoried the existing methodology model before any extensibility redesign. It accounts for:

- all 25 methodology-dimension labels already named in locked v0.7 Controlled Vocabularies;
- the complete PP-08 methodology/data ownership surface (`data_regime[]` plus `METHODOLOGICAL_FEATURES` M03–M22);
- structured subdimensions for model-variable representation, network configuration, training protocol, differentiation, parallel execution, loss weighting, transformation, fidelity source role and derived outputs;
- the existing training-control subtypes consolidated under `training_protocol[]`;
- physical constraints as a separately owned scientific-problem facet;
- reproducibility/code/data/model/hyperparameter/seed/hardware/training-cost reporting as method-adjacent but separately owned information;
- existing composite/deferred dimensions including strong/weak/variational formulation, operator-learning integration, transfer/meta-learning, time-decomposition semantics and deferred structured domain-decomposition enrichment.

Task 5.1 created **no new scientific fields, entities, canonical terms or relationships**.

## Mandatory boundaries for remaining Task 5 work

- architecture family ≠ network configuration;
- physical constraint ≠ enforcement/integration mode;
- loss component ≠ loss weighting ≠ generic training protocol;
- optimizer identity ≠ optimizer-transition scheduling;
- adaptive sampling ≠ adaptive loss weighting; no generic `adaptive_method[]` owner exists;
- data regime ≠ fidelity source role;
- model input/output identity ≠ transformation ≠ derived output;
- domain decomposition ≠ parallel execution;
- parallel execution ≠ hardware reporting;
- software framework ≠ code availability ≠ Computational Resources identity;
- transfer/meta-learning identity is not owned by generic `training_protocol[]`;
- `derived_output_method[]` remains the sole post-inference scientific derivation owner; do not reintroduce `solution_postprocessing[]`;
- legacy `adaptive_weighting[]` is migration input only and must not compete with `loss_weighting_method[]`.

## Governing revision rule

Later primary-source evidence may revise normalization, dimension placement, relationships, applicability or whether specialized structure is scientifically justified. Any correction must be explicit, evidence-backed, versioned and history-preserving. Raw wording, locators, prior decisions, contradictions and deferred/rejected alternatives must remain traceable.

## Stop boundary

**Task 5.2 was not started.**

Exact next action, only when separately authorized: **Task 5.2 — define the learning/integration-type taxonomy using Task 5.1 as a controlling input.**
