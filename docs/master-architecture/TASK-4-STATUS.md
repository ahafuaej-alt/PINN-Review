# Task 4 — PINN Type / Variant Classification Status

Status: **IN PROGRESS**

Date: 2026-09-08

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

## Current state

- Task 4.1 — Audit existing Abbreviations/PINN-type material: **IN PROGRESS**
  - Task 4.1A — Preserve and inventory `data/reference-pinn-abbreviations.txt`: **PASS / COMPLETE**
  - Task 4.1B — Verify and scientifically triage PINN-related candidates: **PASS / COMPLETE**
  - Task 4.1C — Build collision/non-equivalence register: **PASS / COMPLETE**
  - Task 4.1D — Produce Abbreviation Registry Candidate Inventory + PINN Type Candidate Inventory: **PASS / COMPLETE WITH EXPLICIT QA EXCEPTION**
  - Task 4.1E — Audit unfinished `/abbreviations/` and `/pinn-types/` page scaffolds for reusable behavior/dependencies: **NEXT / NOT STARTED**
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

Task 4.1B established the controlled scientific disposition and verification-state model for PINN-related candidates without defining final taxonomy.

## Task 4.1C collision checkpoint

Authoritative audit record: `TASK-4.1C-COLLISION-NON-EQUIVALENCE-REGISTER.md`.

Machine-readable register: `task-4.1c-terminology-collision-register.json`.

Task 4.1C registers 30 high-risk collision/non-equivalence classes and establishes mandatory no-merge/scoped-alias/source-scope controls. Key protected cases include `cPINN` vs `CPINN`, the confirmed three-way `DD-PINN` homograph (domain-discretized/domain-decoupled/data-driven), `IPINN`, `SPINN`/`sPINN`, `E-PINN`/`e-PINN`, `PiNN` scientific-vs-software identity, and broader architecture/operator/PIML near-collisions.

No corpus-global alias was promoted and no final PINN taxonomy node or `pinn_type_id` was created.

## Task 4.1D inventory checkpoint

Authoritative record: `TASK-4.1D-CANDIDATE-INVENTORIES.md`.

Machine-readable manifests:

- `task-4.1d-abbreviation-registry-candidate-inventory-manifest.json`
- `task-4.1d-pinn-type-candidate-inventory-manifest.json`

QA exception register:

`task-4.1d-inventory-quality-exceptions.json`.

Task 4.1D materializes two distinct derived inventories:

- broad Abbreviation Registry candidate material from the preserved legacy source;
- 268 PINN-type/variant candidates carried forward for Task 4.2 classification.

The PINN Type Candidate Inventory contains **268 candidate forms / 746 occurrences**; candidate membership does not mean canonical type membership.

Task 4.1D QA detected one duplicated generated abbreviation row (`AR4D-0252` / `AR4D-0253`, both `nPINN`, paper 495). `AR4D-0253` is explicitly tombstoned rather than silently deleted. This leaves **500 effective distinct strings** in the materialized legacy inventory while the current `/abbreviations/` page contract declares **501 forms**. That implementation/counting discrepancy is explicitly assigned to Task 4.1E for reconciliation.

Evidence-driven revision remains controlling: later primary-source evidence may revise normalized meaning/classification/alias or taxonomy placement, but raw wording and prior decisions must remain historically traceable.

## Stop boundary

Task 4.1E has not started. Task 4.2 remains unstarted.
