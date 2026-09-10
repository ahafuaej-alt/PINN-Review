# Task 4.5 — Future PINN Type Explorer Specification

Status: **PASS / COMPLETE**

Date: 2026-09-08

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

Controlling inputs: Tasks 4.1A–4.1E, Task 4.2 taxonomy, Task 4.3 paper/evidence linkage, Task 4.4 cross-dimensional linkage, current `/pinn-types/` scaffold, current `/abbreviations/` reusable behaviors, Task 1.3 R1–R48, Task 1.4 X1–X9, and the Task 9 boundary for final production-surface/IA audit.

Task 4.5 specifies the future explorer only. It does not implement production UI, create production routes, modify locked v0.7, change the raw terminology source, or start Task 5.

## 1. Explorer purpose

The future PINN Type Explorer shall let a user answer, with evidence:

- What PINN families/variants are currently governed?
- Which names are canonical, provisional, aliases, source-local, adjacent, or excluded?
- Which papers actually support each assignment?
- How often is a type **verified/scoped at paper level**, distinct from raw string occurrence?
- What applications, problems, methodologies, outcomes, limitations/failures and diagnostic pathways are linked to the type in evidence?
- Where are collisions, aliases, contradictions, scope limits or unresolved meanings?
- How has a classification or assignment changed over time?

The explorer is therefore an evidence-backed scientific interface, not an acronym gallery.

## 2. Page/view model

The explorer should support five complementary view families:

1. **Overview / browse** — searchable list of governed concepts/candidates with status, role, lane, evidence-qualified paper count and warnings.
2. **Classification view** — faceted graph/tree projection. Only `is_a` draws subtype hierarchy; other relations are visually distinguished.
3. **Frequency view** — normalized assignment counts and shares from eligible Task-4.3 assignments, never raw abbreviation recurrence.
4. **Evidence view** — paper/type assignments, exact reported forms, evidence locators, source role, verification/support state, collisions and review history.
5. **Type profile view** — one focused concept page with definition/status, aliases, hierarchy/relations, paper assignments, cross-dimensional links, contradictory evidence and change history.

The current scaffold route ideas remain **candidate/compatible routes, not final production IA authority**:

- `pinn-types/classification/`
- `pinn-types/frequency/`
- `pinn-types/evidence/`
- `pinn-types/{type}/`

Task 9 retains ownership of the final route/page dependency and migration audit. Task 4.5 does not impose a route ceiling.

## 3. Search and filtering

Search should match:

- canonical/preferred name;
- exact reported forms;
- scoped aliases;
- source-local labels;
- paper/reference IDs;
- supported expansion text where available.

Filters should include, where data is governed and evidence-eligible:

- concept role;
- lifecycle/status;
- primary/secondary classification lane;
- verification state;
- assignment state;
- alias/source-local/collision state;
- publication year;
- application/domain;
- physical problem/problem characteristic;
- methodology relation;
- outcome/validation/evaluation;
- failure/limitation/diagnostic relation;
- evidence/source role.

Filters must not convert provisional or blocked records into positive verified counts.

## 4. Frequency semantics

The explorer must expose separate measures rather than one ambiguous “frequency” number:

- **verified/scoped paper assignments** — principal normalized frequency;
- source-local assignments — separately countable and clearly labeled;
- provisional assignments — maintenance/review count, not positive scientific prevalence;
- raw reported-form occurrences — terminology occurrence only;
- unique papers vs assignment rows — both distinguishable where multiple assignments exist per paper.

Frequency ≠ evidence strength, scientific validity, family rank, superiority or causal effect.

No chart may mix raw abbreviation recurrence with normalized assignment frequency without explicit labels and separate series.

## 5. Classification visualization

Classification UI must:

- use `is_a` only for hierarchy;
- render architecture, formulation, training, decomposition, UQ, transfer/multi-fidelity, application specialization and adjacency as typed non-hierarchical relations when appropriate;
- visually distinguish canonical/provisional/paper-specific/alias/deprecated states;
- display source-local concepts without pretending corpus-global status;
- expose `not_equivalent_to`/collision warnings where relevant;
- never infer a parent from string prefixes, hyphenation, capitalization or lexical similarity.

## 6. Evidence drill-down

Every positive public scientific statement should permit drill-down to the supporting paper/type assignment and evidence.

A type profile/evidence table should expose at minimum:

- paper ID/reference;
- exact source-reported term;
- normalized/scoped concept when supported;
- paper role (used/proposed/comparator/reviewed/background/source-local taxonomy label);
- assignment scope;
- evidence locator/link;
- verification and semantic support states separately;
- collision IDs / alias scope;
- contradictions/counterevidence;
- review/version history.

Missing locators must be shown as missing/pending; they are never invented.

## 7. Collision, alias and ambiguity UX

High-risk terms from Task 4.1C must display explicit warnings.

For example, `DD-PINN` must not open a single silently normalized concept without showing paper-scoped meanings. `cPINN` and `CPINN` must remain distinct. Scoped alias candidates such as `B-PINN`/`BPINN` must show the current alias status rather than presenting a corpus-global merge prematurely.

The UI should support:

- “multiple meanings” badges;
- “source-local” badges;
- unresolved/collision panels;
- explicit non-equivalence notes;
- alias scope and evidence;
- links to each scoped meaning/paper.

## 8. Cross-dimensional navigation

A governed type profile may show evidence-backed distributions/links for:

- applications;
- physical problems/problem characteristics;
- methodology;
- outcomes/validation/evaluation;
- failures/limitations/diagnostic pathways.

These are linked dimensions, not taxonomy children.

The UI must preserve direction and scope. Example: “demonstrated in application X in N eligible papers” is permitted; “best for application X” requires later governed synthesis and cannot be inferred from counts.

Contradictory/negative evidence must remain visible next to positive evidence.

## 9. Relationship to Abbreviation Registry

The future `/abbreviations/` registry and PINN Type Explorer are complementary:

- Abbreviation Registry = broad terminology/evidence index for all review abbreviations;
- PINN Type Explorer = scientifically filtered type/family/variant system.

Reusable interaction patterns from the current Abbreviations page may be retained: search, sorting, term/reference views, exact-form presentation, deep links, CSV export and evidence navigation.

The explorer must not read the legacy TXT as its scientific authority. Future data should come from the governed terminology/taxonomy/assignment/evidence model.

## 10. Deep links and exports

Stable deep links should be designed for:

- concept/type profile;
- exact reported form;
- paper assignment;
- evidence record;
- filtered explorer state where practical.

Exports should preserve visible filters and scientific qualifiers. CSV/JSON exports must include status/scope fields so provisional/source-local/blocked rows cannot be mistaken for verified canonical assignments.

## 11. Public vs review-layer visibility

Default public views should emphasize verified/scoped records.

Provisional, blocked, unresolved and rejected records may be exposed through clearly labeled review/advanced modes where appropriate, but must never look equivalent to verified canonical records.

A type with no eligible verified/scoped assignments must not receive a normal positive prevalence count.

## 12. Accessibility and responsive requirements

The explorer must support:

- keyboard navigation;
- semantic headings/tables/controls;
- visible focus states;
- screen-reader labels for relation/state icons;
- non-color-only status encoding;
- responsive layouts for mobile/tablet/desktop;
- accessible alternatives to graph-only navigation;
- stable URL state where possible so evidence views can be shared/reviewed.

Large classification graphs must have list/table alternatives and avoid forcing horizontal overflow as the only navigation method.

## 13. Data dependencies

Future explorer projections depend on:

- Task 4.2 governed taxonomy semantics;
- Task 4.3 paper/type/evidence assignments;
- Task 4.4 evidence-backed cross-dimensional links;
- terminology/alias/collision/history records;
- paper/reference metadata;
- later Task 12 relational implementation and Task 17 explorer infrastructure.

The UI is a consumer. It is not the scientific owner of taxonomy, aliases, assignments or cross-links.

## 14. Update/correction behavior

Later primary-source evidence may revise meaning, taxonomy placement, alias/collision interpretation, paper assignment or cross-link. The explorer must display the current governed state while retaining access to change/history provenance.

No UI cache, count, label or generated page may silently preserve superseded science after an authoritative correction; downstream refresh behavior belongs to later implementation/history tasks.

## 15. Prohibited behaviors

The future explorer must not:

- treat all 268 Task-4.1D candidates as validated types;
- rank scientific importance from acronym frequency alone;
- count review-only mentions as direct primary-study assignments;
- merge case/hyphen/plural variants automatically;
- hide collisions or contradictory evidence;
- present a paper-specific methodology/outcome/failure as an intrinsic universal type property;
- collapse PIML/neural operators/PgNN/PeNN into PINN without evidence;
- turn a source-local name into a global family from one paper;
- invent evidence locators;
- mutate locked v0.7 for UI convenience.

## 16. Acceptance audit

- Tasks 4.1–4.4 used as controlling inputs: **PASS**
- current `/pinn-types/` scaffold inspected: **PASS**
- current `/abbreviations/` reusable interaction patterns inspected: **PASS**
- overview/classification/frequency/evidence/profile views specified: **PASS**
- normalized frequency semantics separated from raw occurrence: **PASS**
- evidence drill-down specified: **PASS**
- collision/alias/source-local UX specified: **PASS**
- cross-dimensional navigation specified without taxonomy collapse: **PASS**
- public vs provisional/review visibility separated: **PASS**
- deep links/exports specified: **PASS**
- responsive/accessibility requirements specified: **PASS**
- Task 9 final IA ownership preserved: **PASS**
- production UI implemented: **0**
- new production routes created: **0**
- locked-v0.7 fields/entities added: **0**
- raw terminology changes: **0**
- production `main` changes: **0**
- Computational Resources changes: **0**

### Result

**PASS / COMPLETE.**

Task 4.5 provides the future PINN Type Explorer contract while preserving scientific governance, evidence traceability and the final Task 9 IA audit boundary.

## 17. Stop boundary

**Task 5 was not started.**