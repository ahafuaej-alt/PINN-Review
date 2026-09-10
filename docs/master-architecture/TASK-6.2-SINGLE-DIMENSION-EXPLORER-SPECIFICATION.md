# Task 6.2 — Complete Single-Dimension Explorer Specification

Status: **PASS / COMPLETE**

Date: 2026-09-10

Branch: `docs/master-atlas-roadmap`

Starting head: `a2fc593432120b7423b378b4f77e0018d763b4c5`

Locked scientific authority: Google Drive `v0.7-pilot-atlas-prefreeze`.

Frozen implementation contract: Master Plan v1.0.

Machine-readable dependency: `atlas-cross-paper-intelligence-dimension-catalogue.json` (`task-6.1-v1.0.0`).

## 1. Purpose and hard boundary

Task 6.2 defines one complete **single-dimension explorer contract** for each Task 6.1 principal Cross-Paper Intelligence dimension `XPD-01`–`XPD-38`.

The controlling rule is:

> Every explorer is a projection of exactly one governed principal dimension. It may expose status, provenance, verification and missingness controls required to interpret that dimension correctly, but it must not introduce scientific comparison against another principal dimension.

Therefore Task 6.2 does **not** define cross-dimensional filters, pairwise/multivariate comparisons, the 20 family-level synthesis specifications, official research-gap/opportunity generation, final Atlas routes, production UI, database tables or SQL schema. Those remain later Task 6 work.

## 2. Common explorer contract

Every principal-dimension explorer must provide the following eight surfaces:

1. **Identity and scope header** — XPD ID, governed label, concise definition, scientific owner/reference and current ontology/normalization version.
2. **Coverage and eligibility summary** — eligible population, denominator, principal counting unit and explicit missing/not-reported/not-applicable/unresolved states where relevant.
3. **Primary distribution or structure view** — a visualization appropriate to the dimension's actual value shape and grain rather than a universal bar chart.
4. **Ranked or structured results table** — accessible, sortable representation of the same eligible records/assignments/objects.
5. **State and integrity panel** — verification/support/lifecycle/conflict information relevant to the selected dimension.
6. **Evidence drill-down** — paper/object identity, record or assignment identity, raw wording where available, normalized/scoped value, exact locator, source role, verification/support state, context, contradictions/counterevidence and history/version.
7. **Provenance/version footer** — ontology or normalization version, query scope, denominator semantics and relevant governance state.
8. **Export contract** — filtered export that retains scientific scope, verification, support, evidence locator and version qualifiers rather than exporting only display labels/counts.

Allowed controls within Task 6.2 are interpretive/non-scientific controls: text search within the selected dimension, sorting, pagination, display density, status visibility, verification/support visibility, missingness-state visibility and export format. Scientific filters drawn from a second XPD are deliberately deferred to Task 6.4.

## 3. Counting and denominator contract

Every explorer must distinguish its **principal analytical unit** from unique papers and from any secondary record/assignment/event counts. The global corpus size `N = 853` is never assumed automatically.

At minimum, the explorer must disclose:

- numerator;
- denominator;
- principal unit of analysis;
- eligibility filter;
- selected scope/context;
- ontology/normalization version;
- missing/not-reported/not-applicable/unresolved states when scientifically relevant;
- unique-paper count when different from the principal unit;
- raw occurrence count separately from normalized assignment count where both exist;
- independent study-family/PEU count separately whenever recurrence or independent support is claimed.

Record count, assignment count, evaluation observation count, evidence-object count, relation-edge count, collaboration-edge count, curated Level-7 object count and independent support count must never be relabelled as paper count.

## 4. Explorer archetypes

Task 6.2 uses dimension-appropriate explorer archetypes rather than forcing identical charts across all 38 dimensions:

- temporal;
- categorical;
- scoped categorical;
- geographic;
- resolved-entity;
- network;
- role categorical;
- hierarchical/taxonomic;
- multivalued;
- structured/faceted;
- taxonomy lifecycle;
- composite owner-preserving;
- paired state;
- scoped state;
- repeatable statement;
- role/entity;
- metric identity;
- result observation;
- availability state;
- reporting state;
- typed pathway;
- evidence provenance;
- orthogonal evidence states;
- integrity/conflict state;
- typed relation;
- governed Level-7 curated object.

Every non-table visualization must have a semantic table alternative. Network, geographic and hierarchy views are therefore enhancements, not the sole access path.

## 5. Complete explorer register — 38/38

| ID | Dimension | Explorer archetype | Principal grain / denominator basis | Default primary view |
|---|---|---|---|---|
| XPD-01 | Temporal context | temporal | paper or explicit event; eligible papers/events | timeline / histogram |
| XPD-02 | Publication / source context | categorical | paper; eligible bibliographically resolved papers | ranked distribution + table |
| XPD-03 | Study design / review scope | scoped categorical | paper plus review-scope record | faceted distribution + table |
| XPD-04 | Geographic provenance | geographic | paper-to-geography association; associations and unique papers separate | map + ranked table |
| XPD-05 | Institutional context | resolved entity | paper-to-institution association | ranked distribution + identity-safe table |
| XPD-06 | Collaboration context | network | bibliographic collaboration edge; node/edge unit declared | network + node/edge tables |
| XPD-07 | Application evidence role / scope | role categorical | application record or review-scope item | role-lane distribution |
| XPD-08 | Application taxonomy | hierarchical | application assignment; assignments and unique papers separate | taxonomy tree + ranked table |
| XPD-09 | Physical system | categorical | scoped system assignment | ranked distribution + table |
| XPD-10 | Physical problem | categorical | problem record | ranked distribution + table |
| XPD-11 | Governing equation / equation family | hierarchical | equation item / problem record / paper kept distinct | hierarchy + equation table |
| XPD-12 | Problem class / characteristics | multivalued | characteristic assignment / problem record | ranked multivalue table |
| XPD-13 | Data / observation regime | structured | structured data/fidelity record | structured facet table |
| XPD-14 | Computational task / scientific objective | multivalued | task/objective assignment | ranked distribution + table |
| XPD-15 | PINN problem / challenge addressed | multivalued | challenge assignment | ranked distribution + table |
| XPD-16 | PINN type / family | taxonomy lifecycle | verified/scoped type assignment | hierarchy + lifecycle/status table |
| XPD-17 | Methodology | composite owner-preserving | selected child-owner records only | child-dimension selector |
| XPD-18 | Contribution / innovation | structured | contribution record | structured facet table |
| XPD-19 | Claim vs demonstration | paired state | scoped claim/demonstration record | paired-state table |
| XPD-20 | Generality / transfer scope | scoped state | scoped generality claim/test | scope/state table |
| XPD-21 | Outcome / degree of resolution | structured | outcome record | outcome/state table |
| XPD-22 | Reported advantage / disadvantage / failure | repeatable statement | scoped statement record | statement-category table |
| XPD-23 | Validation strategy | structured | applicable validation record | structured validation facets |
| XPD-24 | Validation reference / data / baseline | role/entity | validation/evaluation context record | role/entity table |
| XPD-25 | Evaluation metric | metric identity | metric occurrence; papers/test cases separate | metric registry + occurrence table |
| XPD-26 | Evaluation result / test case | result observation | compatible evaluation observation only | context-rich result table |
| XPD-27 | Reproducibility availability | availability state | paper reproducibility record | availability-state table |
| XPD-28 | Reproducibility reporting / computational context | reporting state | per-attribute applicable paper set | reporting-state table |
| XPD-29 | Limitation | repeatable statement | limitation record; paper/independent support separate | limitation-category table |
| XPD-30 | Open problem | repeatable statement | open-problem record; paper/independent support separate | open-problem table |
| XPD-31 | Future work | repeatable statement | future-work record; paper/independent support separate | future-work table |
| XPD-32 | Failure / diagnostic pathway | typed pathway | selected pathway/pathway-component/typed-edge unit | pathway table; graph optional |
| XPD-33 | Evidence provenance / source role | evidence provenance | evidence object | provenance distribution + table |
| XPD-34 | Evidence verification / support / strength | orthogonal evidence states | evidence object per selected state facet | state distribution + table |
| XPD-35 | Contradiction / mismatch / ambiguity | integrity state | scoped conflict/evidence unit | conflict/integrity table |
| XPD-36 | Typed scientific relationship | typed relation | relation instance | relation-type table |
| XPD-37 | Atlas research gap | curated Level-7 | approved curated gap object; supporting papers/PEUs separate | curated-object table |
| XPD-38 | Atlas research opportunity | curated Level-7 | approved curated opportunity object; supporting papers/PEUs separate | curated-object table |

## 6. High-risk explorer rules

### XPD-01 — Temporal context

Publication year, extraction date, verification date and review search window are distinct date semantics. They must never share one unlabeled timeline or be merged into one temporal count.

### XPD-04 and XPD-06 — Geography and collaboration

Geographic-association count is not paper count. Affiliation country is not application location or author nationality. Collaboration edge count is not paper count, and network centrality cannot be presented as scientific quality or evidence strength.

### XPD-07 — Application evidence role

Demonstrated-primary, demonstrated-secondary, related, potential/future and review-scoped application roles remain separate lanes. The explorer must not visually aggregate these into a generic “application occurrence” without role disclosure.

### XPD-16 — PINN type / family

The explorer inherits Task 4.5 protections: verified/scoped type assignments are the principal prevalence measure; raw term/acronym occurrence remains separate; source-local/provisional states remain visibly labelled; collisions and explicit non-equivalence remain visible; lexical similarity never creates hierarchy or alias equivalence.

### XPD-17 — Methodology

This is the most important Task 6.2 special case.

`XPD-17` is **not** one homogeneous countable methodology variable. Its explorer opens with a child-dimension selector and then activates one governed owner-preserving child explorer at a time.

The child catalogue must expose, as applicable:

- Task 5.1: `MDC-01`–`MDC-37` — 37 owner dimensions;
- Task 5.2: `LIT-F1`–`LIT-F4` plus `LIT-DQ1`–`LIT-DQ2` — 6 integration/derived facets;
- Task 5.2B: `LP-F1`–`LP-F10` — 10 general-learning-paradigm facets;
- Task 5.3: `MRF-01`–`MRF-06` — 6 model/representation/coupled-ML facets;
- Task 5.2C: `EX-01`–`EX-15` — 15 externally emphasized dimensions, exposed only according to Task 5.4 disposition and existing-owner rules.

Every child keeps its own scientific owner, applicability, evidence requirements and denominator. There is **no pooled methodology frequency**, no generic stored methodology field and no scalar generic `learning_type`. Cross-child scientific comparison is deferred to Task 6.4.

### XPD-19 — Claim vs demonstration

Claim and demonstration are displayed together because their mismatch is analytically important, but they remain semantically distinct states. Missing demonstration cannot automatically be treated as a negative result.

### XPD-25 and XPD-26 — Metrics and evaluation results

Metric identity is distinct from metric result. Same-looking metric labels with incompatible definitions/scales cannot be silently merged. Evaluation-result pooling/averaging is disabled unless compatibility of metric definition, direction, scale, test case and relevant conditions is explicitly established in later comparison logic. “Lower is better” is never assumed without the metric definition.

### XPD-29–XPD-31 — Limitations, open problems and future work

Record counts and paper counts remain separate. When recurrence or independent support is discussed, repeated statements within one study family count once under the PEU independence logic. Limitation ≠ open problem ≠ future work ≠ Atlas gap/opportunity.

### XPD-32 — Failure / diagnostic pathway

The active count unit must be declared as pathway, component or typed edge. Symptom is not diagnosis; intervention is not verified improvement; a paper-level diagnostic pathway is not automatically a Level-7 Failure-Mode Diagnostics Framework conclusion.

### XPD-33–XPD-35 — Evidence and integrity

Evidence-object count is not independent support. Verification status, semantic support status and statement strength remain orthogonal. Absence of detected contradiction is not consensus; counterevidence and minority evidence remain visible.

### XPD-36 — Typed scientific relationship

Co-occurrence is not a relation. Paper scientific relation, taxonomy hierarchy, bibliographic collaboration edge and Level-7 framework edge remain different graph semantics. Direction is explicit; reverse relations are never inferred automatically.

### XPD-37 and XPD-38 — Atlas gaps/opportunities

These explorers are read-only Level-6 views over **already governed Level-7 curated objects**. Task 6.2 cannot generate an official gap or opportunity from frequency, limitations, open problems, future work or algorithmic patterns. Supporting papers and independent PEUs are shown as evidence support, not as a substitute for the curated object.

## 7. Evidence drill-down contract

A material result must be traceable downward as far as its governing source permits. The shared minimum is:

`explorer result → selected XPD value/record → record or assignment identity → paper/object identity → raw wording where available → normalized/scoped value → evidence locator → source role → verification/support state → contradictions/counterevidence → ontology/normalization version → review/history state`.

No explorer may synthesize an evidence locator that is absent from the governed evidence object.

## 8. Export contract

Exports must preserve, when applicable:

- XPD ID and label;
- principal analytical unit;
- paper/object ID;
- record/assignment ID;
- displayed and normalized/scoped values;
- lifecycle/status;
- verification and support status;
- evidence locator;
- scope/context;
- ontology/normalization version.

A CSV that contains only labels and counts is not a scientifically sufficient export when record-level drill-down exists.

## 9. Accessibility and responsive behavior

All explorers require keyboard operation, semantic controls/tables, visible focus, screen-reader labels, non-color-only status encoding and responsive mobile/tablet/desktop behavior. Maps, networks, trees and charts require non-graph alternatives. Stable/shareable explorer state should be supported where practical, without treating a route or URL structure as final information architecture before Task 6.7/Task 9.

## 10. Prohibited behaviors

Task 6.2 explicitly prohibits:

- frequency presented as evidence strength, validity, rank or superiority;
- unreviewed/unverified records silently entering positive prevalence;
- hiding contradictions, mismatches or counterevidence;
- automatic ontology/alias/relation promotion from explorer activity;
- automatic official Level-7 gap/opportunity generation;
- invented evidence locators;
- cross-dimensional scientific comparison before Task 6.4;
- final route/page information-architecture decisions before Task 6.7/Task 9;
- locked-v0.7 mutation for UI convenience.

## 11. Acceptance result

Task 6.2 passes because:

- **38/38** Task 6.1 principal dimensions have an explorer contract;
- every explorer has an explicit archetype, principal grain, denominator basis and primary view;
- shared required surfaces, count semantics, evidence drill-down, export and accessibility rules are defined;
- high-risk dimensions have explicit additional safeguards;
- `XPD-17` has a dedicated owner-preserving child-dimension contract;
- cross-dimensional scientific controls remain zero;
- Task 6.3 work remains zero;
- locked-v0.7, canonical ontology, paper assignments, official Level-7 synthesis, production `main` and Computational Resources Stage data remain unchanged.

## 12. Stop boundary

**Task 6.2 — PASS / COMPLETE. Task 6 remains IN PROGRESS. Task 6.3 has not started.**

Exact next substantive action, only when separately authorized:

**Task 6.3 — implement/specify the current 20 Cross-Paper Intelligence synthesis families using the Task 6.1 dimension-to-family map and the Task 6.2 single-dimension explorer contracts, while preserving family ≠ dimension and paper evidence ≠ Atlas synthesis.**
