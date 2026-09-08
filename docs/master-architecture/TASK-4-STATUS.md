# Task 4 — PINN Type / Variant Classification Status

Status: **IN PROGRESS — Tasks 4.1–4.3 COMPLETE / PASS**

Date: 2026-09-08

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

## Current state

- Task 4.1 — Audit existing Abbreviations/PINN-type material: **PASS / COMPLETE**
  - 4.1A raw-source preservation/inventory: **PASS / COMPLETE**
  - 4.1B candidate scientific triage: **PASS / COMPLETE**
  - 4.1C collision/non-equivalence register: **PASS / COMPLETE**
  - 4.1D dual candidate inventories: **PASS / COMPLETE WITH EXPLICIT QA EXCEPTION**
  - 4.1E page-scaffold/parser audit: **PASS / COMPLETE**
- Task 4.2 — Define extensible PINN type/family taxonomy: **PASS / COMPLETE**
- Task 4.3 — Link PINN types to papers and evidence: **PASS / COMPLETE**
- Task 4.4 — Link PINN types to applications/problems/methods/outcomes/failures: **NEXT / NOT STARTED**
- Task 4.5 — Specify future PINN Type Explorer: **NOT STARTED**

## Task 4.1 baseline

Authoritative records:

- `TASK-4.1A-RAW-TERMINOLOGY-SOURCE-AUDIT.md`
- `TASK-4.1B-PINN-CANDIDATE-TRIAGE.md`
- `TASK-4.1C-COLLISION-NON-EQUIVALENCE-REGISTER.md`
- `TASK-4.1D-CANDIDATE-INVENTORIES.md`
- `TASK-4.1E-ABBREVIATIONS-PINN-TYPES-SCAFFOLD-AUDIT.md`

Raw source remains unchanged at blob SHA `c712b9625d4a4dd838bba582d0bafe56a79c6350`.

Task 4.1 established 268 PINN-type/variant candidates / 746 occurrences for governed classification; candidate membership is not canonical type membership.

## Task 4.2 taxonomy checkpoint

Authoritative specification: `TASK-4.2-EXTENSIBLE-PINN-TYPE-FAMILY-TAXONOMY.md`.

Machine-readable coordination source: `atlas-pinn-type-taxonomy-spec.json`.

Task 4.2 defines a faceted governed taxonomy graph. Only `is_a` creates subtype hierarchy; other scientific differences use typed relations/facets. Task 4.1C collision/no-merge controls and locked-v0.7 lifecycle/alias scopes remain mandatory. Automatic candidate promotions and automatic corpus-global alias promotions remain zero.

## Task 4.3 paper/evidence linkage checkpoint

Authoritative specification: `TASK-4.3-PINN-TYPE-PAPER-EVIDENCE-LINKAGE.md`.

Machine-readable coordination source: `atlas-pinn-type-paper-evidence-linkage-spec.json`.

Task 4.3 establishes the controlled paper ↔ exact reported term ↔ governed PINN concept/candidate ↔ evidence chain.

Key controls:

- reported term occurrence and normalized type assignment are separate;
- lexical occurrence alone cannot create a normalized assignment;
- assignment states are `reported_occurrence`, `verified_assignment`, `provisional_assignment`, `source_local_assignment`, `blocked_collision`, `adjacent_not_type`, and `rejected_assignment`;
- verified assignments require scoped evidence, valid source role, verification/support separation, collision/alias compliance, and history/version traceability;
- review-synthesis occurrences cannot automatically create direct assignments for cited primary studies;
- papers may have multiple type/variant assignments and component/test-case scope without mandatory `study_component_id`;
- normalized type frequency must count eligible paper assignments, not raw term recurrence;
- conservative scoped seed assignments were recorded only where Task 4.1 already established support (including cPINN/628, CPINN/707–708, Bayesian B-PINN/BPINN scoped papers, three paper-scoped DD-PINN meanings, SPINN/609, and E-PINN/659);
- all 746 occurrences automatically promoted to verified assignments: **0**;
- new locked-v0.7 fields/entities: **0**;
- Task 4.4 cross-dimensional links: **0**.

## Controlling revision rule

Later primary-source evidence may revise normalized meaning, lane, family/variant placement, alias/collision interpretation, paper assignment, relationship, or taxonomy status. Any revision must be evidence-backed, explicit, versioned/history-preserving and traceable. Raw wording and prior decisions must never be silently deleted or rewritten.

## Stop boundary

**Task 4.4 has not started.**

Exact next action, only when separately authorized: **Task 4.4 — link governed PINN types/variants to applications, problems, methods, outcomes, and failures without collapsing those dimensions into the type taxonomy.**