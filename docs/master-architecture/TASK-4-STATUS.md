# Task 4 — PINN Type / Variant Classification Status

Status: **IN PROGRESS — Tasks 4.1–4.4 COMPLETE / PASS**

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
- Task 4.4 — Link PINN types to applications/problems/methods/outcomes/failures: **PASS / COMPLETE**
- Task 4.5 — Specify future PINN Type Explorer: **NEXT / NOT STARTED**

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

Task 4.3 establishes the controlled paper ↔ exact reported term ↔ governed PINN concept/candidate ↔ evidence chain. Reported occurrence and normalized assignment remain separate; lexical occurrence alone cannot create a scientific type assignment; review-only mentions cannot manufacture direct primary-study assignments; normalized type frequency must count eligible assignments rather than raw string recurrence.

## Task 4.4 cross-dimensional linkage checkpoint

Authoritative specification: `TASK-4.4-PINN-TYPE-CROSS-DIMENSIONAL-LINKAGE.md`.

Machine-readable coordination source: `atlas-pinn-type-cross-dimensional-linkage-spec.json`.

Task 4.4 establishes evidence-backed typed links from scoped paper/type assignments to:

- applications;
- physical problems/problem characteristics;
- methodological dimensions;
- outcomes/validation/evaluation;
- failures/limitations/diagnostic pathways.

Key controls:

- type taxonomy remains separate from application/problem/method/outcome/failure dimensions;
- every relation is anchored to a scoped Task-4.3 paper/type assignment and evidence;
- co-occurrence alone cannot create a cross-link;
- directionality and source scope are mandatory;
- methodology owners remain distinct (e.g. network configuration ≠ architecture family; loss weighting ≠ generic training protocol; hardware reporting ≠ parallel execution);
- demonstrated/related/potential applications remain distinct;
- outcome claims remain paper/setting scoped and cannot be universalized from one study;
- failure, symptom, cause/mechanism, intervention, verification and trade-off remain distinct;
- negative/counterevidence remains first-class and must not be hidden;
- Task 4.4 fabricates **0** application/method/outcome/failure values from type identity alone;
- new locked-v0.7 fields/entities: **0**;
- production records created: **0**.

## Controlling revision rule

Later primary-source evidence may revise normalized meaning, lane, family/variant placement, alias/collision interpretation, paper assignment, cross-dimensional relationship, or taxonomy status. Any revision must be evidence-backed, explicit, versioned/history-preserving and traceable. Raw wording and prior decisions must never be silently deleted or rewritten.

## Stop boundary

**Task 4.5 has not started.**

Exact next action, only when separately authorized: **Task 4.5 — specify the future PINN Type Explorer using Tasks 4.1–4.4 as controlling inputs without implementing production UI.**