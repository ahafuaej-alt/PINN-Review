# Task 3.3 — Conditional Paper Profile Sections and Display Logic

Status: **PASS — COMPLETE**

Date: 2026-09-07

Roadmap parent: `docs/master-architecture/CONTROLLED-ROADMAP.md` → Task 3.3.

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

Controlling Paper Profile inputs:

- `TASK-3.1-FIRST-CLASS-PAPER-PROFILE-SECTIONS.md` — stable `PP-01`–`PP-19` semantic section identities and no-merge rules;
- `TASK-3.2-PAPER-PROFILE-FIELD-SPECIFICATION.md` — field/substructure ownership, multiplicity, evidence/provenance, applicability and serialization contract.

This task defines **when each profile section/subsection is rendered, suppressed, represented as a state-only entry, or flagged for integrity/review**. It does not modify the locked v0.7 ontology/schema, does not create production UI code, does not define the detailed evidence drawer interaction reserved for Task 3.4, does not create the machine-readable profile specification reserved for Task 3.5, and does not create the visual mockup reserved for Task 3.6.

## 1. Verified starting state and authority boundary

The starting branch head was verified as `df37d0fafe669109cfea1e22f6af7af1b47831be`, with Task 3.1 and Task 3.2 PASS/COMPLETE and Task 3.3 explicitly NEXT.

Locked v0.7 readback reconfirmed the controlling applicability/display semantics:

1. scientifically inapplicable fields use explicit `not_applicable` semantics where the schema defines them; content is never invented to avoid an empty field;
2. review papers are not forced to populate direct primary-study application/task/outcome/validation/evaluation structures merely because those entities exist;
3. an empty array means only that no records are represented in that array; it does **not** mean the paper states none exist;
4. workflow verification and semantic support remain separate;
5. future scientific changes require a later governed ontology version.

Therefore Task 3.3 creates only **derived presentation logic** over existing governed data. No display state defined below is a new scientific field, ontology value or persistence requirement in locked v0.7.

## 2. Central principle: section existence ≠ section body visibility

All 19 Task-3.1 section identities remain permanent and independently addressable:

`PP-01` Bibliographic Identity; `PP-02` Study / Extraction Identity; `PP-03` Application; `PP-04` Problem; `PP-05` Computational Task; `PP-06` PINN Problem / Challenge; `PP-07` PINN Type / Family; `PP-08` Methodology; `PP-09` Contribution; `PP-10` Claim vs Demonstration; `PP-11` Outcome; `PP-12` Validation; `PP-13` Evaluation; `PP-14` Reproducibility; `PP-15` Limitations; `PP-16` Open Problems; `PP-17` Future Work; `PP-18` Diagnostic Pathways; `PP-19` Evidence / Provenance.

Conditional display changes only whether the **section body** is rendered in the main reading flow. It never deletes the semantic section identity.

### Permanent section-index rule

Every Paper Profile must expose a section-status index containing all `PP-01`–`PP-19` identities in the fixed semantic order. A section whose body is not rendered must remain discoverable in the index with a neutral derived presentation state such as:

- populated;
- explicit governed state;
- no verified records currently represented;
- not applicable to this scientific component;
- under review / not yet publishable;
- contains conflict/mismatch;
- contains provisional/unresolved semantic assignment.

The exact visual treatment, icons and component design are deferred to Task 3.6. The exact machine-readable binding of these derived states is deferred to Task 3.5.

**Forbidden:** omitting a section from both the profile body and the section index in a way that could make “not displayed” look like “scientifically absent.”

## 3. Three-axis render-state model

Task 3.3 intentionally does not collapse applicability, content presence and scientific integrity into one status.

### 3.1 Axis A — scientific applicability

Derived from locked study-design/applicability semantics and the applicable normalized record family:

- `A-APPLICABLE` — the scientific component can legitimately populate the section;
- `A-NOT-APPLICABLE` — the section is scientifically inapplicable to that component under current rules;
- `A-UNRESOLVED` — applicability cannot yet be determined without review.

These are **presentation decisions**, not new v0.7 enum values.

### 3.2 Axis C — represented content state

- `C-POPULATED` — one or more governed records/values are represented;
- `C-EXPLICIT-STATE` — the owner contains a scientifically meaningful explicit state such as `not_reported`, `reported_unavailable` or `not_applicable` where the schema defines it;
- `C-UNREPRESENTED` — no governed record is currently represented; this is a database/profile state, **not** a claim that the paper reports none;
- `C-PENDING` — candidate/extracted content exists but is not yet accepted for verified publication.

### 3.3 Axis I — integrity/semantic modifier

A populated/state-only section can additionally carry one or more modifiers:

- `I-VERIFIED` — accepted verified material;
- `I-NEEDS-REVIEW` — workflow review incomplete;
- `I-CONFLICT` — a verified source/internal conflict is preserved;
- `I-MISMATCHED` — checked evidence is semantically mismatched to the linked claim;
- `I-PROVISIONAL` — verified content uses a provisional semantic term/relation;
- `I-SOURCE-LOCAL` — author/source-scoped terminology must not be globalized;
- `I-UNCLEAR` — provenance/source role or meaning remains unresolved.

Conflict, mismatch, provisional status and source-local status are not reasons to hide otherwise valid records.

## 4. Derived body-rendering rules

### R-D01 — fixed semantic order

The body order remains `PP-01` → `PP-19`. Conditional rendering may skip body panels but must not reorder sections to imply scientific causality, importance or workflow sequence.

### R-D02 — three core bodies always render

The main profile body always renders:

- `PP-01` Bibliographic Identity;
- `PP-02` Study / Extraction Identity;
- `PP-19` Evidence / Provenance.

If these are sparse, unresolved or incomplete, the body renders the relevant state/warning rather than disappearing.

### R-D03 — sixteen scientific bodies are conditional

`PP-03`–`PP-18` render a body when at least one of the following is true:

1. one or more accepted governed records/values are represented;
2. an explicit governed state is scientifically meaningful to show;
3. a verified conflict/mismatch/negative result/inconclusive result/provisional assignment would otherwise be hidden;
4. in maintenance/review mode, pending records require human review.

If none applies, the section remains in the profile index but its body may be suppressed.

### R-D04 — not-applicable is not missing

For `A-NOT-APPLICABLE`, do not create filler records. The main body may suppress the section, while the section index records “not applicable” or an equivalent neutral presentation label.

### R-D05 — unrepresented is not “none” and not “not reported”

For `C-UNREPRESENTED`, the only safe generic statement is equivalent to:

> No verified records are currently represented in this section.

Do not display “none,” “no limitations,” “no open problems,” “no future work,” “no challenge,” “no validation,” “not reported,” or any equivalent scientific conclusion unless the underlying governed source/state actually supports that statement.

### R-D06 — explicit states remain visible

Where v0.7 defines explicit semantic states (`not_reported`, `reported_unavailable`, `not_applicable`, etc.), render the exact state or a faithful human-readable mapping. Do not replace it with blank space, `null`, “N/A,” or a generic “No data” label that erases meaning.

### R-D07 — mandatory-field failure is QA, not conditional hiding

If an applicable governed record exists but a `[M]` field required by Task 3.2 is structurally missing, that is a schema/QA defect. The renderer must not simply hide the field and make the record appear complete.

### R-D08 — optional absence stays silent at field level

An absent `[O]` field is normally omitted inside a populated record without interpreting the absence. The record/section-level state remains governed by the surrounding object and evidence.

### R-D09 — conditional fields render only when their scientific condition is met

A `[C]` field is shown only when the governing condition applies and a value/explicit state is present. Conditional omission must not be interpreted as negative evidence.

### R-D10 — empty arrays never become negative assertions

A zero-length repeatable array may suppress the corresponding record list/body, but the profile index must use the neutral `C-UNREPRESENTED` semantics unless a separate governed state establishes more.

### R-D11 — negative/inconclusive evidence forces visibility

Verified negative, partial, failed or inconclusive outcomes/results are scientific content. They force the relevant section body to remain visible exactly as positive results would.

### R-D12 — conflict/mismatch forces visibility

A section containing verified `conflict_found` or `mismatched` support cannot be hidden merely because a simplified positive/verified view would be cleaner.

### R-D13 — provisional/source-local concepts remain visible but labelled

A scientifically verified record normalized with a provisional, source-local, author-defined or unresolved term remains displayable. Its semantic status must be visible; it must not be silently presented as corpus-global canonical terminology.

### R-D14 — same owner, many projections, one value

If the same governed object feeds multiple profile sections, each section reads the same authoritative record. No UI convenience copy is serialized or independently editable.

Examples:

- `PP-04`, `PP-05`, `PP-06` and part of `PP-08` project different facets of `problems[]`;
- `PP-09` and `PP-10` project different facets of `contributions[]`.

### R-D15 — source-role separation survives display

Current-paper original analysis, current-paper reanalysis, review synthesis, cited-primary-study material, adapted material and unclear provenance must never be visually merged into an unlabeled scientific statement.

### R-D16 — public publication and maintenance review are different modes

Unreviewed AI extraction proposals or `needs_review` candidate content must not appear as verified public scientific content. A maintenance/review mode may show them in a clearly separated pending layer.

### R-D17 — no synthetic completeness score from field filling

Task 3.3 forbids a generic “profile completeness percentage” computed from populated fields. Such a score would penalize scientifically inapplicable structures and confuse `not_reported`, unavailable, optional and genuinely missing content. Operational extraction/verification states may be displayed directly instead.

### R-D18 — compact/mobile display cannot weaken semantics

Responsive or compact layouts may collapse detail but cannot remove distinctions required by Task 3.1/3.2. Status must not rely on color alone. Conflict, mismatch, provisional/source-local status, source role, negative outcomes and explicit applicability/reporting states must remain recoverable.

## 5. Public verified mode versus review/maintenance mode

### 5.1 Public verified mode

The public scientific layer contains only records accepted under the governed workflow.

Rules:

- verified conflict/mismatch remains public and visible;
- verified provisional/source-local terminology remains visible with status;
- pending AI/extraction proposals are excluded from scientific claims;
- a section with only pending records is not rendered as if populated by accepted science;
- the profile may indicate, from `EXTRACTION_CONTROL`, that work is incomplete/under review without exposing unaccepted science as fact.

### 5.2 Review/maintenance mode

The maintenance layer may expose pending records, review notes and unresolved applicability for human adjudication.

Rules:

- accepted and pending records must be visually/semantically separated;
- pending content never contributes to public section counts or published synthesis;
- evidence/source-role and current ontology version remain visible to the reviewer;
- the UI may permit navigation to unresolved sections, but mutation behavior is outside Task 3.3.

## 6. Study-design/component applicability logic

The controlling variable is **scientific study design/component**, not publisher/document label.

### 6.1 Direct primary/original scientific component

`PP-03`–`PP-14` and `PP-18` may be applicable according to actual paper content. They are not required to be populated merely because the paper is an original research article.

`PP-15`–`PP-17` render only when evidence-linked records exist or an explicit governed state requires visibility.

### 6.2 Review-only / synthesis-only component

`PP-02` renders `REVIEW_SYNTHESIS_SCOPE` and the review/extraction context.

Direct primary-study bodies `PP-03`–`PP-14` and `PP-18` must not be populated from cited studies merely to make the profile look complete. Reviewed application/problem/task/method families remain under the governed review-scope structure.

The review paper's **own** limitations/open problems/future work (`PP-15`–`PP-17`) may still render when directly supported by the current paper.

### 6.3 Mixed paper

A mixed paper may contain review/synthesis plus original/reanalysis components.

Display requirements:

- `PP-02` exposes all applicable study-design components and review scope;
- `PP-03`–`PP-14`/`PP-18` render only the current-paper original/reanalysis records applicable to those components;
- source/component scope must remain recoverable through record IDs, origin classes, evidence source roles and `scope_locator`;
- cited/adapted material may support provenance/context but cannot be displayed as the current paper's direct result.

No mandatory `study_component_id` is introduced.

### 6.4 Theoretical/methodological paper with limited empirical testing

Methodology/contribution/claim sections may render while validation/evaluation may be `A-NOT-APPLICABLE` or `C-UNREPRESENTED`, depending on the actual study design and locked record state. The renderer must not invent benchmark results to balance the profile.

## 7. Section-by-section conditional display matrix

| Section | Body default | Render body when | State when body suppressed / sparse | Forced-visibility conditions |
|---|---|---|---|---|
| `PP-01` Bibliographic Identity | **Always** | always | show verified identity state/conflict rather than hide | bibliographic conflict/history |
| `PP-02` Study / Extraction Identity | **Always** | always | show extraction/applicability/review state | unresolved applicability, review/mixed design, verification state |
| `PP-03` Application | Conditional | one or more `applications[]` records or explicit applicable state | not applicable or “no verified records currently represented” | demonstrated/related/potential role conflict or ambiguity |
| `PP-04` Problem | Conditional | one or more applicable `problems[]` problem-definition facets | not applicable / unrepresented | conflicting equations/conditions/problem classification |
| `PP-05` Computational Task | Conditional | `computational_task`/scientific objective exists in applicable problem record | not applicable / unrepresented | task ambiguity/conflict |
| `PP-06` PINN Problem / Challenge | Conditional | `PINN_problem_addressed[]` or `PINN_challenge_addressed[]` represented | no verified challenge/problem records represented | provisional/source-local challenge or conflict |
| `PP-07` PINN Type / Family | Conditional | governed type/family projection exists from current locked concepts/`PINN_architecture[]` | “no governed paper-level type/family assignment represented”; never infer from title/abbreviation | provisional/source-local type/family assignment |
| `PP-08` Methodology | Conditional | `methodological_features[]` and/or applicable `data_regime[]` represented | not applicable / no verified method records represented | methodological conflicts, explicit unusual/provisional structures |
| `PP-09` Contribution | Conditional | one or more `contributions[]` records | no verified contribution record represented | conflicting contribution attribution/origin |
| `PP-10` Claim vs Demonstration | Conditional | claim/demonstration/generality fields are represented, or mismatch/conflict requires comparison | no verified claim-vs-demonstration comparison represented | claimed ≠ demonstrated, mismatched support, generality conflict |
| `PP-11` Outcome | Conditional | one or more `outcomes[]` records | no verified outcome record represented | negative/partial/failed/inconclusive outcome always visible |
| `PP-12` Validation | Conditional | one or more `validation[]` records or explicit governed test-state is represented | not applicable / no verified validation record represented | validation-type/source conflict |
| `PP-13` Evaluation | Conditional | one or more `evaluation_results[]` records | not applicable / no verified result record represented | negative result, materially different cases, comparator/context conflict |
| `PP-14` Reproducibility | Conditional | `reproducibility` object exists, including explicit reporting/availability states | no reproducibility record currently represented; do not infer `not_reported` | `reported_unavailable`, conflicts, source-link uncertainty |
| `PP-15` Limitations | Conditional | one or more `limitations[]` records | no verified limitation records currently represented; never “no limitations” | inferred-vs-explicit ambiguity/conflict |
| `PP-16` Open Problems | Conditional | one or more `open_problems[]` records | no verified open-problem records currently represented | author-vs-Atlas origin/scope conflict |
| `PP-17` Future Work | Conditional | one or more `future_work[]` records | no verified future-work records currently represented | scope/origin ambiguity |
| `PP-18` Diagnostic Pathways | Conditional | one or more `diagnostic_pathways[]` records | no verified diagnostic pathway represented | symptom/cause/intervention/verification conflicts or trade-offs |
| `PP-19` Evidence / Provenance | **Always** | always | if no evidence exists, show evidence-state warning; published scientific claims without required evidence fail QA | conflict, mismatch, unclear source role, evidence-link integrity failure |

Coverage: **19/19 section bodies have explicit display conditions.**

## 8. Substructure and field display rules from Task 3.2

### 8.1 Singular scalar/object fields

- show the authoritative value once in its owning section;
- if another section needs it for context, render a read-only projection/cross-reference rather than a second independently sourced value;
- optional absent values are normally omitted without comment;
- applicable mandatory missing values trigger QA.

### 8.2 Repeatable arrays/entities

- preserve record multiplicity and stable record identity;
- show separate cards/rows/items for materially distinct records;
- do not collapse multiple applications, problems, contributions, results, limitations, open problems, future-work items or diagnostic pathways into a single headline statement when doing so loses scope;
- zero records means `C-UNREPRESENTED`, not scientific absence.

### 8.3 Structured nested records

For `data_regime[]`, `physical_constraints[]`, `model_variable_representation[]`, `network_configuration[]`, `training_protocol[]`, structured `differentiation_method[]`, `parallel_execution[]`, `loss_weighting_method[]`, `fidelity_source_role[]`, `derived_output_method[]` and diagnostic component evidence links:

- render only represented subfields plus required semantic state;
- do not emit placeholder rows for every absent optional subfield;
- preserve evidence locator/provenance linkage;
- a missing required nested attribute in an applicable accepted object is a QA defect, not a reason to silently simplify the object.

### 8.4 Controlled vocabulary/taxonomy display

When a record uses a governed taxonomy concept:

- display the canonical human-readable label where valid;
- retain term identity for linking;
- visibly label provisional/source-local/author-defined/unresolved status;
- aliases may be shown as source terminology but cannot replace canonical identity or alias scope;
- a taxonomy label alone must not replace the evidence-linked paper-level record.

### 8.5 Relationship display

Paper-level relations render only when a registered canonical/provisional relation and its scientific conditions are satisfied. Do not generate relation edges merely because two fields appear in the same profile.

Framework/L7 relationships are outside the 19 paper-level sections unless a separate clearly labelled contextual panel is later added.

## 9. Claim, demonstration, outcome, validation and evaluation display chain

These sections are intentionally adjacent in the profile architecture but must remain distinct.

### 9.1 Claim vs demonstration

If both are present, show them as two explicitly labelled values/records rather than rewriting them into one synthesized sentence.

If claim evidence is verified but `mismatched`, display the mismatch. Do not demote it to “unverified.”

### 9.2 Outcome

Show positive, partial, negative, failed and inconclusive outcomes with equal structural legitimacy.

### 9.3 Validation

Show validation strategy/type/source and applicable tested dimensions. Do not substitute an evaluation metric for validation type.

### 9.4 Evaluation

Each materially distinct test case/configuration/condition remains a separate result record. Contextual comparison labels must retain comparator, reference solution and available hardware/software/training-vs-inference context.

No single “best performance” headline may be generated unless a separately governed analytical rule later justifies it.

## 10. Reproducibility display boundary

`PP-14` represents paper/source-reported reproducibility information.

Rules:

- explicit availability/reporting states are content and keep the body visible;
- absence of the `reproducibility` object is not automatically `not_reported`;
- code/data URLs render only when governed values exist;
- an acknowledgement of GPU/HPC access is not converted into hardware-reporting or parallel-execution evidence;
- future Atlas reproduction/replication outcomes must be shown as a separately labelled operational layer, never by overwriting the paper-reported reproducibility object;
- future Computational Resources links remain bounded external cross-links using stable `paper_id` plus independent `CR` identity. CR data are not copied into the scientific Paper Profile owner.

## 11. Evidence/provenance minimum display obligations

Task 3.4 will define the detailed evidence drawer. Task 3.3 nevertheless fixes the minimum display obligations needed for scientific integrity:

1. every displayed material scientific record must expose that evidence is available/linked;
2. source role/origin must remain recoverable, especially for mixed/review papers;
3. `verification_status` and `support_status` must remain separately representable;
4. verified conflict/mismatch must be visibly signalled and not hidden in a secondary screen only;
5. evidence locator must never be invented to make the display look complete;
6. raw/verbatim evidence itself remains owned by L3 and is not copied into arbitrary section fields;
7. if a public scientific record lacks a required evidence link, profile generation must surface an integrity failure rather than quietly publishing the claim.

Task 3.3 does not prescribe drawer opening behavior, quote presentation, citation-copy controls, or evidence-navigation animation; those belong to Task 3.4/3.6.

## 12. External contextual panels are not new Paper Profile sections

L6 cross-paper intelligence, L7 Atlas synthesis/frameworks and independently governed Computational Resources may later be shown around a Paper Profile as **explicitly labelled contextual/cross-link panels**.

They are not `PP-20+` sections and cannot be rendered as direct facts reported by the paper.

Examples include:

- related papers / cross-paper trends;
- Atlas research gaps/opportunities;
- Design Stack, Co-Design, Design–Performance or Failure-Diagnostics synthesis;
- Computational Resources records.

Their display logic is governed by later tasks and the bounded integration contract.

## 13. Accessibility, compact-view and export equivalence

The scientific display contract must survive every presentation form:

- desktop;
- mobile/compact;
- print/export;
- future API-generated profile views.

Minimum equivalence requirements:

- section identity/order remains recoverable;
- not-applicable/unrepresented/explicit-state distinctions are not flattened;
- source role and semantic status are not conveyed by color alone;
- negative/inconclusive results are not hidden on mobile;
- conflict/mismatch/provisional markers remain available;
- repeated records remain separable;
- the evidence-link presence/state remains discoverable.

Detailed responsive layout is Task 3.6/16, not Task 3.3.

## 14. Deterministic renderer decision procedure

For every `PP-xx` section, the future renderer/specification must evaluate in this order:

1. **Resolve profile mode** — public verified or review/maintenance.
2. **Resolve scientific applicability** from study-design/component context and the owning record family.
3. **Read only authoritative owner data** identified by Task 3.2.
4. **Determine represented content state** (`C-POPULATED`, `C-EXPLICIT-STATE`, `C-UNREPRESENTED`, `C-PENDING`).
5. **Evaluate integrity modifiers** (verified, needs review, conflict, mismatch, provisional, source-local, unclear).
6. **Apply forced-visibility rules** for negative/inconclusive content, conflicts/mismatches and explicit semantic states.
7. **Render or suppress the section body** according to this contract.
8. **Always emit the section-index state** for all 19 stable section identities.
9. **Attach minimal evidence/status affordance** for displayed scientific records; Task 3.4 defines the detailed drill-down.
10. **Never materialize a new scientific value** solely to satisfy presentation logic.

The same canonical data + same profile mode must yield the same section visibility/state. Renderer behavior must therefore be testable and reproducible.

## 15. Scientific acceptance / adversarial display tests

Task 3.3 is accepted only if the display rules handle these cases without semantic corruption:

1. **ordinary primary study** — applicable populated sections render; optional absent content does not produce false negatives;
2. **review-only paper** — review scope appears in PP-02; cited-study applications/results are not misrendered as direct PP-03/PP-13 content;
3. **mixed review + original/reanalysis paper** — direct records and review scope remain component/source-role distinguishable without a mandatory `study_component_id`;
4. **multi-problem/multi-experiment paper** — repeated records remain separate; no headline flattening;
5. **negative/inconclusive paper** — PP-11/PP-13 remain visible;
6. **conflict/mismatch paper** — affected sections remain visible with integrity state rather than silently “fixed”;
7. **sparse reporting** — absent optional fields stay absent; empty arrays do not become “none” or `not_reported`;
8. **reproducibility explicit-state paper** — `not_reported` / `reported_unavailable` / `not_applicable` remain distinct where governed;
9. **provisional/source-local concept paper** — section remains visible while semantic status remains noncanonical;
10. **diagnostic paper** — symptom/cause/intervention/verification components remain distinct;
11. **public-vs-review mode** — pending AI/extraction proposals never appear as verified public science;
12. **mobile/compact rendering** — all mandatory semantic distinctions remain recoverable.

All twelve conceptual adversarial cases are covered by explicit rules above.

## 16. Coverage audit

Task 3.3 completion coverage:

- Task-3.1 stable profile sections with display logic: **19/19**;
- core always-rendered section bodies: **3/3** (`PP-01`, `PP-02`, `PP-19`);
- conditional scientific section bodies: **16/16** (`PP-03`–`PP-18`);
- section identities retained in permanent section index: **19/19**;
- Task-3.2 multiplicity classes handled: singular, optional, conditional, repeatable and nested structured records = **all covered**;
- explicit `not_applicable` / `not_reported` / unavailable semantics preserved where governed = **PASS**;
- empty-array ≠ negative-evidence rule = **PASS**;
- review-only/mixed-study applicability rule = **PASS**;
- negative/inconclusive visibility = **PASS**;
- conflict/mismatch visibility = **PASS**;
- provisional/source-local semantic visibility = **PASS**;
- public verified vs review/maintenance separation = **PASS**;
- mobile/compact semantic equivalence = **PASS**;
- new locked-v0.7 fields/entities created = **0**;
- silently revived deferred/prohibited structures = **0**;
- Computational Resources boundary violations = **0**.

### Acceptance result

**PASS.** Task 3.3 defines deterministic conditional section/body rendering while preserving all 19 stable Paper Profile identities, locked v0.7 applicability/evidence semantics and Task 3.2 ownership/multiplicity rules. Conditional display is explicitly a derived L8 presentation function and cannot become a competing scientific owner.

## 17. Stop boundary

Task 3.3 ends with the conditional section and display contract above.

**Task 3.4 has not been started.**

Exact next action, only when separately authorized: **Task 3.4 — define evidence/provenance drill-down behavior**, using PP-19, Task 3.2 evidence ownership and Task 3.3 minimum visibility/status obligations as mandatory inputs.
