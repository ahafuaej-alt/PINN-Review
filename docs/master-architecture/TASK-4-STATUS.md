# Task 4 — PINN Type / Variant Classification Status

Status: **IN PROGRESS — Task 4.1 COMPLETE / PASS**

Date: 2026-09-08

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

## Current state

- Task 4.1 — Audit existing Abbreviations/PINN-type material: **PASS / COMPLETE**
  - Task 4.1A — Preserve and inventory `data/reference-pinn-abbreviations.txt`: **PASS / COMPLETE**
  - Task 4.1B — Verify and scientifically triage PINN-related candidates: **PASS / COMPLETE**
  - Task 4.1C — Build collision/non-equivalence register: **PASS / COMPLETE**
  - Task 4.1D — Produce Abbreviation Registry Candidate Inventory + PINN Type Candidate Inventory: **PASS / COMPLETE WITH EXPLICIT QA EXCEPTION**
  - Task 4.1E — Audit unfinished `/abbreviations/` and `/pinn-types/` scaffolds and reconcile parser/counting behavior: **PASS / COMPLETE**
- Task 4.2 — Define extensible PINN type/family taxonomy: **NEXT / NOT STARTED**
- Task 4.3 — Link PINN types to papers and evidence: **NOT STARTED**
- Task 4.4 — Link PINN types to applications/problems/methods/outcomes/failures: **NOT STARTED**
- Task 4.5 — Specify future PINN Type Explorer: **NOT STARTED**

## Task 4.1A preservation checkpoint

Authoritative audit record: `TASK-4.1A-RAW-TERMINOLOGY-SOURCE-AUDIT.md`.

Raw source: `data/reference-pinn-abbreviations.txt`.

Recorded raw-source blob SHA: `c712b9625d4a4dd838bba582d0bafe56a79c6350`.

The raw terminology source remains unchanged and is historical/raw collection provenance, not a PINN-type authority.

## Task 4.1B triage checkpoint

Authoritative audit record: `TASK-4.1B-PINN-CANDIDATE-TRIAGE.md`.

Machine-readable triage policy: `task-4.1b-pinn-candidate-triage-policy.json`.

Task 4.1B established the controlled scientific disposition and verification-state model for PINN-related candidates without defining final taxonomy.

## Task 4.1C collision checkpoint

Authoritative audit record: `TASK-4.1C-COLLISION-NON-EQUIVALENCE-REGISTER.md`.

Machine-readable register: `task-4.1c-terminology-collision-register.json`.

Task 4.1C registers 30 high-risk collision/non-equivalence classes and establishes mandatory no-merge/scoped-alias/source-scope controls. No corpus-global alias was promoted and no final PINN taxonomy node or `pinn_type_id` was created.

## Task 4.1D inventory checkpoint

Authoritative record: `TASK-4.1D-CANDIDATE-INVENTORIES.md`.

Machine-readable manifests:

- `task-4.1d-abbreviation-registry-candidate-inventory-manifest.json`
- `task-4.1d-pinn-type-candidate-inventory-manifest.json`

QA exception register: `task-4.1d-inventory-quality-exceptions.json`.

Task 4.1D materialized the broad Abbreviation Registry candidate baseline and **268 PINN-type/variant candidates / 746 occurrences** for later classification. Candidate membership does not mean canonical type membership.

The duplicate generated `nPINN` row remains explicitly tombstoned rather than silently removed.

## Task 4.1E scaffold/parser checkpoint

Authoritative record: `TASK-4.1E-ABBREVIATIONS-PINN-TYPES-SCAFFOLD-AUDIT.md`.

Task 4.1E verified that:

- `/abbreviations/` is a functional but scientifically incomplete client-side terminology browser over the unfinished legacy TXT and `data/references.json`;
- reusable behaviors include exact-form display, term/reference views, search, sorting, deep links, evidence/reference chips, frequency view and CSV export;
- its hard-coded `verifiedMeanings` helper is not scientific authority;
- exact-form recurrence is not normalized type frequency or evidence strength;
- `/pinn-types/` is an empty `Scaffold · v0.1` with no validated data layer and no implemented `classification/`, `frequency/`, `evidence/` or `{type}/` routes;
- the 500-vs-501 discrepancy is an implementation/tokenization/counting-contract issue, not a scientific contradiction: Task 4.1D had one duplicate generated `nPINN` row, while the current page parser also applies comma/semicolon tokenization and the HTML contains a static 501 snapshot descriptor;
- future authoritative counts must derive from one governed data/parser contract rather than hard-coded HTML or independent materializers.

## Controlling revision rule

Later primary-source evidence may revise normalized meaning, alias/collision interpretation, family/variant role, source scope, relationship or taxonomy placement. Any revision must be evidence-backed, explicit, versioned/history-preserving and traceable. Raw wording and prior decisions must never be silently deleted or rewritten.

## Task 4.1 final result

**COMPLETE / PASS.**

Task 4.1 established the verified existing-state baseline required before taxonomy design. It created no final PINN taxonomy, no `pinn_type_id`, no locked-v0.7 field/entity, and no production or Computational Resources modification.

## Stop boundary

**Task 4.2 has not started.**

Exact next action, only when separately authorized: **Task 4.2 — define an extensible PINN type/family taxonomy using Task 4.1A–4.1E as mandatory controlling inputs.**