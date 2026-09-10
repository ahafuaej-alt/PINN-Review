# Task 4.1D — Candidate Inventories

Status: **PASS — COMPLETE WITH EXPLICIT QA EXCEPTION**

Date: 2026-09-08

Parent task: Task 4.1 — audit the existing Abbreviations/PINN-type material.

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

Controlling inputs:

- preserved raw terminology source `data/reference-pinn-abbreviations.txt`;
- Task 4.1A raw-source preservation/inventory record;
- Task 4.1B triage policy and candidate-screen rules;
- Task 4.1C collision/non-equivalence register `C001–C030`;
- Task 1.3 R1–R48 and Task 1.4 controlled extension rules;
- evidence-driven revision principle: later primary-source evidence may revise normalized meanings/classifications, but raw evidence and decision history must remain preserved.

Task 4.1D does **not** define the final Task 4.2 taxonomy, create `pinn_type_id`, promote global aliases, modify locked v0.7, modify the raw TXT, implement `/abbreviations/` or `/pinn-types/`, or start Task 4.1E.

## 1. Purpose

Task 4.1D materializes the prior audit work into two separate derived inventories so the future Abbreviations system and PINN Type system are no longer forced to share one mixed legacy list.

The two outputs are intentionally different:

1. **Abbreviation Registry Candidate Inventory** — broad terminology inventory. It retains every currently materialized exact reported string from the legacy source, including non-PINN terms, adjacent methods, software and unresolved terms.
2. **PINN Type Candidate Inventory** — filtered Task-4 input. It retains only terms eligible or conditionally eligible for later PINN type/variant classification. Candidate membership is not canonical taxonomy membership.

## 2. Abbreviation Registry Candidate Inventory

Manifest:

`task-4.1d-abbreviation-registry-candidate-inventory-manifest.json`

Parts:

- `task-4.1d-abbreviation-registry-candidate-inventory-part-001.tsv`
- `task-4.1d-abbreviation-registry-candidate-inventory-part-002.tsv`
- `task-4.1d-abbreviation-registry-candidate-inventory-part-003.tsv`
- `task-4.1d-abbreviation-registry-candidate-inventory-part-004.tsv`
- `task-4.1d-abbreviation-registry-candidate-inventory-part-005.tsv`
- `task-4.1d-abbreviation-registry-candidate-inventory-part-006.tsv`

Materialized baseline:

- paper/reference rows represented by the legacy source: **618**;
- raw terminology occurrences parsed from that source: **1,019**;
- materialized inventory rows: **501**;
- Task-4.1B-selected PINN-related occurrences: **838**.

Each row preserves the exact reported form and paper IDs and carries Task-4.1B disposition/verification state plus applicable Task-4.1C collision IDs.

### Important scope limit

This inventory is **not yet the final all-review Abbreviation Registry**. The historical file itself was an unfinished collection. During later full paper extraction the Atlas must collect all abbreviations/terms found in every paper, including terms missing from this legacy source, and attach exact source evidence/locators wherever available.

## 3. Task 4.1D QA exception discovered during readback

Readback exposed one duplicate materialized row:

- `AR4D-0252` = `nPINN`, paper 495;
- `AR4D-0253` = `nPINN`, paper 495.

This duplication is a Task-4.1D materialization defect, not a scientific finding and not a reason to rewrite the raw source.

The controlling QA register is:

`task-4.1d-inventory-quality-exceptions.json`

Its decision is:

- `AR4D-0252` remains active;
- `AR4D-0253` is tombstoned and must be ignored by downstream consumers.

After that QA correction, the materialized inventory has **500 currently distinct exact strings**, whereas the current `/abbreviations/` page contract declares **501 exact forms**. Task 4.1D does not force either number to match. The discrepancy is explicitly carried to **Task 4.1E**, which must inspect the current page/parser and explain the difference.

This is why Task 4.1D is recorded as `PASS — COMPLETE WITH EXPLICIT QA EXCEPTION`, rather than hiding the count mismatch.

## 4. PINN Type Candidate Inventory

Manifest:

`task-4.1d-pinn-type-candidate-inventory-manifest.json`

Parts:

- `task-4.1d-pinn-type-candidate-inventory-part-001.tsv`
- `task-4.1d-pinn-type-candidate-inventory-part-002.tsv`
- `task-4.1d-pinn-type-candidate-inventory-part-003.tsv`
- `task-4.1d-pinn-type-candidate-inventory-part-004.tsv`

This filtered inventory contains **268 candidate exact forms representing 746 occurrences**.

Current eligibility distribution:

- `eligible_verified_candidate`: **9**;
- `eligible_unverified_candidate`: **164**;
- `conditional_method_dimension_candidate`: **64**;
- `conditional_source_specialization_candidate`: **13**;
- `conditional_source_local_candidate`: **8**;
- `conditional_collision_candidate`: **6**;
- `conditional_alias_candidate`: **4**.

These total **268** candidates.

The remaining **59 Task-4.1B-selected adjacent/non-type forms** stay in the Abbreviation Registry Candidate Inventory but are intentionally excluded from direct PINN-taxonomy candidacy at this stage. Examples include operator-learning, broader PIML, software/package and explicit non-PINN/adjacent concepts.

**268 does not mean 268 validated PINN types.** It means 268 terms that Task 4.2 must either classify, relate, scope, alias, keep provisional, or reject from canonical type/family status based on evidence.

## 5. Collision provenance

Applicable Task 4.1C IDs `C001–C030` are carried into relevant inventory rows. Therefore materialization does not erase dangerous distinctions such as:

- `cPINN` vs `CPINN`;
- three paper-scoped meanings of `DD-PINN`;
- `B-PINN` / `BPINN` / `B-PINNs` scoped alias candidacy;
- `IPINN`/`iPINN` ambiguity;
- `SPINN`/`sPINN`;
- `E-PINN`/`e-PINN`;
- `PiNN` scientific vs software/package identity;
- neural-operator, broader-PIML, architecture/backbone and application-conditioned non-equivalences.

No collision is normalized away merely to make the inventory cleaner.

## 6. Evidence and locator boundary

The legacy raw TXT primarily gives paper/reference identity and terminology strings. It does not provide formal evidence IDs or exact source locators for every entry.

Task 4.1D therefore does **not invent missing evidence locations**.

Where Task 4.1B/4.1C already had verified scoped meanings, those states are carried forward. Otherwise the inventory keeps `needs_primary_source_verification`, unresolved, source-local or conditional status as appropriate.

Task 4.3 will later formalize evidence-backed paper/type assignments after Task 4.2 defines the classification system.

## 7. Future extraction contract

Future paper extraction must produce two separate outputs:

### A. Abbreviation/terminology extraction

For every paper, collect all abbreviations/terms with at least:

- exact reported form;
- expanded form only when evidenced;
- paper ID;
- evidence text/ID where available;
- exact locator where available;
- terminology category;
- verification state;
- ambiguity/collision state;
- alias state;
- notes/source scope.

### B. PINN type/variant candidate assignment

Only scientifically eligible PINN-related terms should enter the PINN-type assignment stream, carrying at least:

- exact raw/source label;
- paper ID;
- evidence/locator;
- Task-4 scientific disposition;
- verification state;
- collision IDs;
- alias/collision state;
- source-local/component/test-case scope;
- PINN-type eligibility/classification state.

A term may therefore be present in the Abbreviation Registry while **not** being a PINN type.

## 8. Evidence-driven revision rule

The inventories are deliberately revisable normalized views.

If later primary-source evidence shows that a current meaning, alias decision, collision interpretation, family/variant role, taxonomy placement, or eligibility is wrong or incomplete, the Atlas may correct it.

Such correction must be:

1. supported by evidence;
2. explicit rather than silent;
3. versioned/history-preserving;
4. traceable to the changed decision;
5. non-destructive to original raw wording and prior decision history.

This means Task 4 decisions constrain unsafe normalization but do **not** prevent future science from correcting the classification.

## 9. Acceptance audit

- Task 4.1A raw-source preservation retained: **PASS**;
- Task 4.1B triage state carried forward: **PASS**;
- Task 4.1C collision IDs carried forward: **PASS**;
- Abbreviation Registry Candidate Inventory materialized: **PASS**;
- PINN Type Candidate Inventory materialized: **PASS**;
- PINN candidate rows: **268**;
- PINN candidate eligibility distribution totals 268: **PASS**;
- raw terminology source changed: **0**;
- global aliases promoted: **0**;
- final Task 4.2 taxonomy nodes created: **0**;
- `pinn_type_id` created: **0**;
- missing source locators invented: **0**;
- materialization duplicate detected and hidden: **NO — preserved explicitly as QX-001**;
- page-count discrepancy hidden/force-resolved: **NO — carried to Task 4.1E as QX-002**;
- locked-v0.7 changes: **0**;
- production `main` changes: **0**;
- Computational Resources changes: **0**.

### Result

**PASS — COMPLETE WITH EXPLICIT QA EXCEPTION.**

Task 4.1D has produced the two controlled candidate inventories required for the remaining Task 4.1 work, while preserving uncertainty and surfacing rather than concealing the one materialization/count discrepancy discovered in QA.

## 10. Stop boundary

**Task 4.1E has not been started.**

Exact next action, only when separately authorized: **Task 4.1E — audit the unfinished `/abbreviations/` and `/pinn-types/` page scaffolds for reusable behavior/dependencies, and reconcile QX-002 by inspecting the current abbreviations counting/parser behavior.**
