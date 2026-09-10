# Task 4.1E — Abbreviations / PINN Types Scaffold Audit

Status: **PASS / COMPLETE**

Date: 2026-09-08

Parent task: Task 4.1 — audit the existing Abbreviations/PINN-type material.

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

Controlling inputs: Task 4.1A raw-source preservation; Task 4.1B candidate triage; Task 4.1C collision/non-equivalence register; Task 4.1D candidate inventories and QA exceptions; Task 1.3 R1–R48; Task 1.4 controlled extension rules; Paper Profile PP-07/L4-P8 boundary.

Task 4.1E is a read-only implementation/scaffold audit. It does **not** redesign either page, define the Task 4.2 taxonomy, create `pinn_type_id`, modify locked v0.7, rewrite the raw TXT, alter production `main`, or start Task 4.2.

## 1. Verified current production-equivalent state

The roadmap branch and production `main` currently contain the same audited page blobs:

- `/abbreviations/` → `abbreviations/index.html`, blob `ef0d62326bf88487bf4958d0cd75747aea28d80a`;
- `/pinn-types/` → `pinn-types/index.html`, blob `c2ae37ff5c6332f7e60cd1f9cf5cd27afe253fb9`;
- `assets/abbreviations.js` on production `main` → blob `34226b828217a9ebd98c57cc751496711e2b91b3`;
- preserved raw source `data/reference-pinn-abbreviations.txt` → blob `c712b9625d4a4dd838bba582d0bafe56a79c6350`.

Both route directories currently contain only `index.html`. Under `pinn-types/`, no `classification/`, `frequency/`, `evidence/`, or per-type route currently exists. These are scaffolded route ideas only.

## 2. `/abbreviations/` — what currently works and is reusable

The current page is a functional client-side terminology browser rather than a validated all-review Abbreviation Registry.

Reusable behavior:

- exact reported-form display rather than automatic case/hyphen normalization;
- term view and reference view;
- search by term, meaning text, or reference ID;
- sort by frequency or alphabetically;
- top-12 frequency display;
- direct `#term=` and `#ref=` deep links;
- paper links through `data/references.json` with fallback to `/references/#ref=`;
- per-term reference chips;
- CSV export of the current filtered view;
- explicit unverified-meaning message when no meaning is known;
- separate labels for `Verified meaning` and `Source-supplied note`;
- loading/error handling and accessibility-oriented controls already present in the HTML/JS structure.

These interaction patterns are potentially reusable later, but their current scientific data contract is not sufficient for the final Abbreviations system.

## 3. `/abbreviations/` — current dependencies and scientific limitations

Current dependency chain:

`/abbreviations/` → `assets/abbreviations.js` → `data/reference-pinn-abbreviations.txt` + `data/references.json`.

Shared site dependencies include `assets/theme-init.js`, `assets/styles.css`, and `assets/app.js`.

Current limitations:

1. The page reads the unfinished legacy PINN-focused terminology TXT directly. It therefore does **not** yet represent all abbreviations in the review.
2. The source TXT contains paper/reference identity but not a governed evidence ID and exact evidence locator for every term.
3. `verifiedMeanings` is a small hard-coded helper map in JavaScript, not a scientific authority and not a complete registry.
4. The helper map contains source-scoped meanings; therefore a meaning verified for one paper must not be propagated automatically to every lexical occurrence.
5. Current frequency is exact-form/reference recurrence. It is not normalized concept frequency and not evidence strength.
6. The page currently mixes true PINN candidates with architecture/backbone labels, training strategies, operator-learning methods, broader PIML terminology, applications, software, generic methods, and non-PINN terms because the source itself is mixed.
7. Search lower-cases text for matching, which is acceptable for retrieval, but scientific identity must remain case-sensitive where Task 4.1C requires it.
8. The page cannot currently express governed alias relationships, homographs, multiple paper-scoped meanings, taxonomy status, verification history, or evidence-driven revision history as first-class records.
9. The static HTML description says `501` reported forms and `618` reference records; the JavaScript statistics are actually computed dynamically from the raw TXT at runtime. Static descriptive counts therefore must not be treated as the authoritative counting mechanism.

## 4. QX-002 reconciliation — why `500` and `501` appeared

Task 4.1D exposed two independent implementation/counting issues.

### 4.1 Generated-inventory duplicate

Task 4.1D generated both `AR4D-0252` and `AR4D-0253` for the same exact form `nPINN`, paper 495. `AR4D-0253` is tombstoned in the QA exception register. Therefore the Task 4.1D materialized output contains 501 generated rows but only **500 effective distinct materialized strings** after that duplicate is excluded.

### 4.2 Current page parser uses a different tokenization contract

`assets/abbreviations.js` does not simply split a source cell on semicolons. Its `splitReportedForms()` routine splits on **semicolon or comma when outside parentheses**, while preserving commas inside parentheses.

The raw source contains at least one explicit outside-parentheses comma case:

`| 205 | CINN, PINN |`

Thus the current page parser treats this cell as two reported forms (`CINN` and `PINN`), whereas the Task 4.1D materializer preserved `CINN, PINN` as one raw exact string in its candidate inventory.

### 4.3 Resolution

The `500` versus `501` issue is therefore **not a scientific contradiction**. It arose because three different things were being conflated:

- a static HTML snapshot descriptor (`501`);
- a generated Task 4.1D row count that initially contained one duplicate;
- a runtime JavaScript tokenization rule that has its own comma/semicolon parsing semantics.

Task 4.1E resolves QX-002 by declaring that **future authoritative Abbreviation Registry counts must come from one governed parser/data model with explicit tokenization rules**, not from hard-coded HTML text or independent materializers.

The current static `501` description is retained as historical implementation text only. Task 4.1E does not edit production HTML.

## 5. Required future Abbreviation Registry contract

The final Abbreviations system must be broader than the present page and must support all abbreviations/terms found during paper extraction.

At minimum each governed occurrence/term must be able to carry:

- exact reported form;
- verified expansion when supported;
- paper ID;
- evidence ID/text and exact locator where available;
- terminology category;
- verification state;
- ambiguity/homograph state;
- alias relation and scope;
- source-local meaning where applicable;
- change/version history.

The current page's search, sorting, term/reference views, deep links, evidence chips, CSV export, and exact-form presentation are reusable interaction ideas. The current TXT and hard-coded meaning map are **not** the future scientific owner.

## 6. `/pinn-types/` — verified current state

`/pinn-types/` is correctly an empty/pre-data scaffold.

The page explicitly states:

- `Data layer: awaiting validated PINN-type records`;
- `Scaffold · v0.1`;
- hierarchy will be generated after terminology normalization;
- counts/shares will be calculated only from validated records.

No PINN-type dataset or client-side PINN-type data loader is currently attached to this page.

The route directory contains only `pinn-types/index.html`. Therefore these displayed route names are **reserved concepts, not implemented routes**:

- `pinn-types/classification/`;
- `pinn-types/frequency/`;
- `pinn-types/evidence/`;
- `pinn-types/{type}/`.

They are also not final target information architecture; Task 4.5 and later Task 9 remain responsible for future page/explorer design and complete route disposition.

## 7. `/pinn-types/` — reusable intent versus premature assumptions

Reusable intent:

- separate classification view;
- separate frequency/comparison view;
- separate evidence/alias register;
- per-type profile concept;
- explicit statement that frequency must use validated records;
- explicit separation of hierarchy, prevalence, definitions, aliases, overlap, and supporting references instead of forcing one visualization to represent everything.

Protected non-decisions:

- the scaffold does not prove what constitutes a family, variant, level, or parent/child relation;
- route labels do not define ontology structure;
- `frequency` cannot be computed from raw abbreviation recurrence;
- `evidence` must later use governed evidence links rather than raw paper IDs alone;
- an individual profile must represent a validated governed concept, not an abbreviation string;
- architecture/backbone, training strategy, decomposition, operator-learning, application-specific and broader PIML terms must not be flattened into one type hierarchy merely because the page has a hierarchy slot.

These decisions belong to Task 4.2–4.4.

## 8. Cross-page boundary

The two future systems are complementary but must remain scientifically distinct.

### Abbreviations

Broad terminology/evidence registry. A term can appear here even when it is not a PINN type.

### PINN Types

Governed classification of scientifically eligible PINN family/type/variant concepts and their paper/evidence assignments.

Required relationship:

`exact terminology occurrence` → optional governed alias/meaning resolution → optional PINN-type candidate/assignment → validated PINN concept.

The Abbreviations page must never become the taxonomy owner, and the PINN Types page must never rewrite or erase the source terminology that led to a classification.

## 9. Evidence-driven revision remains mandatory

Later primary-source evidence may justify correcting a meaning, alias, collision decision, family/variant classification, relationship, source scope, or taxonomy placement.

Such a correction must be evidence-backed, explicit, versioned/history-preserving, and traceable. Original source wording and prior decisions remain preserved. A future paper that contradicts today's normalized interpretation must trigger review rather than forced mapping or rejection.

## 10. Acceptance audit

- current `/abbreviations/` implementation inspected: **PASS**;
- current `assets/abbreviations.js` parser/dependencies inspected: **PASS**;
- current `/pinn-types/` scaffold inspected: **PASS**;
- production `main` page blobs checked against roadmap branch: **PASS**;
- route-directory contents checked: **PASS**;
- QX-002 parser/count discrepancy explained without rewriting science: **PASS**;
- reusable interaction behavior identified: **PASS**;
- scientifically unsafe current assumptions identified: **PASS**;
- final taxonomy defined: **0**;
- `pinn_type_id` created: **0**;
- production page/data changes: **0**;
- raw TXT changes: **0**;
- locked-v0.7 changes: **0**;
- Computational Resources changes: **0**.

### Result

**PASS / COMPLETE.**

Task 4.1A–4.1E now form a complete existing-state baseline: preserved raw terminology, controlled triage, collision/non-equivalence protection, separate candidate inventories, and verified page/parser/scaffold dependencies.

## 11. Stop boundary

**Task 4.2 has not been started.**

Exact next action, only when separately authorized: **Task 4.2 — define an extensible PINN type/family taxonomy using Task 4.1A–4.1E as mandatory controlling inputs.**