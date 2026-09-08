# Task 4 — PINN Type / Variant Classification Status

Status: **IN PROGRESS — Tasks 4.1–4.2 COMPLETE / PASS**

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
- Task 4.3 — Link PINN types to papers and evidence: **NEXT / NOT STARTED**
- Task 4.4 — Link PINN types to applications/problems/methods/outcomes/failures: **NOT STARTED**
- Task 4.5 — Specify future PINN Type Explorer: **NOT STARTED**

## Task 4.1 final baseline

Authoritative records:

- `TASK-4.1A-RAW-TERMINOLOGY-SOURCE-AUDIT.md`
- `TASK-4.1B-PINN-CANDIDATE-TRIAGE.md`
- `TASK-4.1C-COLLISION-NON-EQUIVALENCE-REGISTER.md`
- `TASK-4.1D-CANDIDATE-INVENTORIES.md`
- `TASK-4.1E-ABBREVIATIONS-PINN-TYPES-SCAFFOLD-AUDIT.md`

Raw source remains unchanged at blob SHA `c712b9625d4a4dd838bba582d0bafe56a79c6350`.

Task 4.1 established 268 PINN-type/variant candidates for later governed classification, while preserving adjacent/non-type terminology separately. Candidate membership does not mean canonical type membership.

## Task 4.2 taxonomy checkpoint

Authoritative human-readable specification:

`TASK-4.2-EXTENSIBLE-PINN-TYPE-FAMILY-TAXONOMY.md`

Machine-readable coordination source:

`atlas-pinn-type-taxonomy-spec.json`

Task 4.2 defines a **faceted governed taxonomy graph** rather than a flat acronym list or forced single-parent tree.

Principal controls:

- only `is_a` creates subtype hierarchy;
- formulation, decomposition, architecture/backbone, training/adaptivity, uncertainty, multi-fidelity/transfer and application specialization may instead be expressed through typed relations/facets;
- taxonomy concept roles are separated into root scope, family, subfamily, variant, source-local variant, alias, adjacent method and excluded non-type;
- Task 4.1C `C001–C030` collision/no-merge controls remain mandatory;
- locked-v0.7 lifecycle states (`canonical`, `provisional`, `alias`, `deprecated`, `paper_specific`) and alias scopes are inherited unchanged;
- no term becomes canonical merely from frequency, review-level naming, lexical similarity, or containing `PINN`;
- `PIML`, neural operators, PgNN/PeNN, software, generic training controls and application labels remain outside the PINN subtype hierarchy unless source evidence specifically justifies a PINN method identity;
- 268 Task-4.1D candidates were **not automatically promoted**;
- corpus-global aliases automatically promoted: **0**;
- new locked-v0.7 fields/entities: **0**;
- paper/type assignments created: **0**.

## Controlling revision rule

Later primary-source evidence may revise normalized meaning, lane, family/variant placement, alias/collision interpretation, relationship or taxonomy status. Any revision must be evidence-backed, explicit, versioned/history-preserving and traceable. Raw wording and prior decisions must never be silently deleted or rewritten.

## Stop boundary

**Task 4.3 has not started.**

Exact next action, only when separately authorized: **Task 4.3 — link PINN types to papers and evidence using the Task 4.2 taxonomy semantics without inventing unsupported assignments.**