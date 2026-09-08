# Task 4 — PINN Type / Variant Classification Status

Status: **IN PROGRESS**

Date: 2026-09-08

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

## Current state

- Task 4.1 — Audit existing Abbreviations/PINN-type material: **IN PROGRESS**
  - Task 4.1A — Preserve and inventory `data/reference-pinn-abbreviations.txt`: **PASS / COMPLETE**
  - Task 4.1B — Verify and scientifically triage PINN-related candidates: **PASS / COMPLETE**
  - Task 4.1C — Build collision/non-equivalence register: **NEXT / NOT STARTED**
  - Task 4.1D — Produce Abbreviation Registry Candidate Inventory + PINN Type Candidate Inventory: **NOT STARTED**
  - Task 4.1E — Audit unfinished `/abbreviations/` and `/pinn-types/` page scaffolds for reusable behavior/dependencies: **NOT STARTED**
- Task 4.2 — Define extensible PINN type/family taxonomy: **NOT STARTED**
- Task 4.3 — Link PINN types to papers and evidence: **NOT STARTED**
- Task 4.4 — Link PINN types to applications/problems/methods/outcomes/failures: **NOT STARTED**
- Task 4.5 — Specify future PINN Type Explorer: **NOT STARTED**

## Task 4.1A preservation checkpoint

Authoritative audit record: `TASK-4.1A-RAW-TERMINOLOGY-SOURCE-AUDIT.md`.

Raw source: `data/reference-pinn-abbreviations.txt`.

Recorded raw-source blob SHA at Task 4.1A audit: `c712b9625d4a4dd838bba582d0bafe56a79c6350`.

The raw terminology source remains unchanged and is historical/raw collection provenance, not a PINN-type authority.

## Task 4.1B triage checkpoint

Authoritative audit record: `TASK-4.1B-PINN-CANDIDATE-TRIAGE.md`.

Machine-readable triage policy: `task-4.1b-pinn-candidate-triage-policy.json`.

Task 4.1B establishes a controlled disposition and verification-state model for every PINN-related candidate selected from the preserved raw terminology source. It explicitly protects ambiguous/homographic, source-local, architecture/backbone, training/adaptivity, decomposition/time-marching, operator-learning, broader physics-informed ML, equation/application-specific, software and negative-label distinctions.

Task 4.1B does not define the final taxonomy, create `pinn_type_id`, globally promote aliases, or resolve the collision register. The materialized two-inventory output remains Task 4.1D.

## Stop boundary

Task 4.1C has not started. Task 4.2 remains unstarted.