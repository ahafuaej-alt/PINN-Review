# Task 4 — PINN Type / Variant Classification Status

Status: **COMPLETE / PASS — Tasks 4.1–4.5 COMPLETE**

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
- Task 4.5 — Specify future PINN Type Explorer: **PASS / COMPLETE**

## Task 4 final architecture

Task 4 establishes five controlled layers:

1. **Terminology baseline** — exact historical forms preserved; candidates triaged; collisions/aliases/non-equivalences registered; Abbreviation Registry and PINN Type candidate inventories separated.
2. **Taxonomy semantics** — faceted governed graph; only evidence-supported `is_a` creates hierarchy; architecture/training/application/operator distinctions remain typed relations/facets when appropriate.
3. **Paper/evidence assignments** — reported occurrence remains separate from normalized assignment; lexical occurrence alone cannot create a scientific type assignment.
4. **Cross-dimensional links** — scoped evidence links type assignments to applications, physical problems, methodology, outcomes and diagnostic/failure dimensions without collapsing those dimensions into the taxonomy.
5. **Future Explorer contract** — overview, classification, normalized frequency, evidence and type-profile views with collision/alias warnings, source-local/provisional visibility, evidence drill-down, cross-dimensional navigation, deep links/exports and responsive/accessibility requirements.

## Authoritative Task 4 records

- `TASK-4.1A-RAW-TERMINOLOGY-SOURCE-AUDIT.md`
- `TASK-4.1B-PINN-CANDIDATE-TRIAGE.md`
- `TASK-4.1C-COLLISION-NON-EQUIVALENCE-REGISTER.md`
- `TASK-4.1D-CANDIDATE-INVENTORIES.md`
- `TASK-4.1E-ABBREVIATIONS-PINN-TYPES-SCAFFOLD-AUDIT.md`
- `TASK-4.2-EXTENSIBLE-PINN-TYPE-FAMILY-TAXONOMY.md`
- `TASK-4.3-PINN-TYPE-PAPER-EVIDENCE-LINKAGE.md`
- `TASK-4.4-PINN-TYPE-CROSS-DIMENSIONAL-LINKAGE.md`
- `TASK-4.5-FUTURE-PINN-TYPE-EXPLORER-SPEC.md`

Machine-readable coordination sources:

- `atlas-pinn-type-taxonomy-spec.json`
- `atlas-pinn-type-paper-evidence-linkage-spec.json`
- `atlas-pinn-type-cross-dimensional-linkage-spec.json`
- `atlas-pinn-type-explorer-spec.json`

## Final scientific safeguards

- raw source remains unchanged at blob SHA `c712b9625d4a4dd838bba582d0bafe56a79c6350`;
- 268 candidates are not automatically 268 validated types;
- raw terminology occurrence ≠ normalized paper assignment;
- normalized frequency counts eligible verified/scoped assignments, not acronym recurrence;
- frequency ≠ evidence strength, validity, superiority or causal effect;
- review-only mentions cannot manufacture primary-study assignments;
- collision/no-merge controls remain mandatory;
- PIML/neural operators/PgNN/PeNN are not collapsed into PINN without evidence;
- application/problem/method/outcome/failure dimensions remain independently owned;
- contradictions and negative evidence remain visible;
- no production UI/routes were implemented by Task 4;
- no locked-v0.7 fields/entities were added;
- production `main` and Computational Resources were not modified.

## Explorer route boundary

The current proposed routes `pinn-types/classification/`, `pinn-types/frequency/`, `pinn-types/evidence/`, and `pinn-types/{type}/` remain candidate/compatible route concepts. **Task 9 retains ownership of final Atlas IA, route dependency and migration audit.** Task 4 does not create a route ceiling.

## Controlling revision rule

Later primary-source evidence may revise normalized meaning, taxonomy placement, alias/collision interpretation, paper assignment, cross-dimensional relation or taxonomy status. Every revision must be evidence-backed, explicit, versioned/history-preserving and traceable. Raw wording, prior decisions, evidence and contradictions must never be silently erased.

## Stop boundary

**Task 5 has not started.**

Exact next roadmap task, only when separately authorized: **Task 5 — Formalize methodological extensibility.**