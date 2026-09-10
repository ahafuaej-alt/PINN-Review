# Task 6.7 — Interactive Cross-Paper Intelligence Explorer / Comparison UI Specification

Status: **PASS / COMPLETE**

Date: 2026-09-10

Branch: `docs/master-atlas-roadmap`

Starting head: `d3e977eb94fffc75fa083eeb35b01bb3014e4e67`

Locked scientific authority: Google Drive `v0.7-pilot-atlas-prefreeze`.

Frozen implementation contract: Master Plan v1.0.

Controlling dependencies:

- Task 6.1 principal-dimension catalogue `XPD-01..XPD-38`;
- Task 6.2 explorer contracts `EXP-01..EXP-38`;
- Task 6.3 synthesis families `IF-01..IF-20`;
- Task 6.4 comparison modes `CM-01..CM-09` and 667 ordinary meaningful pair choices;
- Task 6.5 residual pair dispositions plus `HB-01..HB-26` and `MG-01..MG-09`;
- Task 6.6 machine-readable comparison/guard map `task-6.6-v1.0.0`.

## 1. Purpose and hard boundary

Task 6.7 designs the **interactive Level-6 Cross-Paper Intelligence user interface** that consumes Tasks 6.1–6.6 without reinterpreting their science.

The controlling rule is:

> **The UI may reveal, constrain, explain, route and execute governed analytical choices; it may not create scientific admissibility, silently change analytical units, invent joins, weaken evidence/provenance requirements, or convert technically selectable combinations into scientifically valid ones.**

Task 6.7 is a design/specification task. It does **not**:

- create or change production Atlas routes;
- implement the live Atlas;
- choose the final production information architecture before Task 9;
- modify database schema or SQL;
- change locked-v0.7 fields/entities;
- promote taxonomies, aliases, controlled values or relations;
- create paper assignments;
- create official Level-7 gaps, opportunities or framework conclusions;
- override Task 6.6 pair/guard decisions.

A non-production HTML mockup may demonstrate the interaction model, but it is synthetic design evidence only.

## 2. Product model: one governed analytical workspace

The Level-6 interface is designed as one conceptual **Cross-Paper Intelligence Workspace** with three user-facing analytical modes:

1. **Explore one dimension** — activates exactly one Task-6.2 explorer `EXP-01..EXP-38`.
2. **Compare two dimensions** — selects one unordered XPD pair and executes only through the Task-6.6 disposition and guard contract.
3. **Browse an intelligence family** — opens one `IF-01..IF-20` family workspace using Task-6.3 member dimensions and qualified family synthesis without creating a pooled family denominator.

These are modes of one governed analytical system, not new scientific owners and not final production routes.

The interface must make the following distinction visible:

**dimension ≠ intelligence family ≠ comparison pair ≠ comparison mode ≠ analytical unit ≠ scientific owner ≠ Level-7 object.**

## 3. Workspace shell

The recommended desktop shell has five coordinated regions.

### 3.1 Global identity / status header

Displays:

- `Cross-Paper Intelligence` identity;
- current mode (`Explore`, `Compare`, `Family`);
- selected XPD(s) or IF family;
- current ontology/normalization contract/version;
- visible `governed analytical view` label;
- explicit `non-production design` label in prototype/mockup contexts.

### 3.2 Analytical navigator

Provides searchable access to:

- 38 principal XPD dimensions grouped by `DG-01..DG-09`;
- 20 synthesis families `IF-01..IF-20`;
- recently selected analytical states where implementation later supports persistence.

The navigator must display stable IDs as well as labels. Search is lexical navigation only and cannot create alias equivalence or scientific taxonomy relationships.

### 3.3 Query builder / preflight panel

This is the critical scientific-control surface. Before an executable comparison is enabled it exposes, as applicable:

- selected left/right XPD IDs;
- pair class (`D`, `C`, `L7`, `M`, `K`, `R`, or future `I`);
- selected Task-6.4 comparison mode(s) `CM-01..CM-09`;
- required join policy/path;
- scientific owner of each selected dimension;
- principal analytical unit;
- numerator and denominator basis;
- eligibility population;
- missing/not-reported/not-applicable/unresolved treatment;
- multiplicity handling;
- scope/context restrictions;
- metric/test-case compatibility where applicable;
- evidence/provenance requirements;
- active `HB` and `MG` rules;
- ontology/normalization versions;
- qualified-export requirements.

A comparison cannot enter the result state until all mandatory preflight requirements are satisfied.

### 3.4 Results workspace

Once a query passes preflight, the results workspace provides:

- scientific-scope summary;
- numerator / denominator / principal-unit cards;
- dimension-appropriate primary visualization;
- semantic table alternative;
- coverage and missingness view;
- integrity/contradiction panel;
- evidence-capable result table;
- qualified narrative description limited to descriptive/authorized semantics;
- export control.

### 3.5 Evidence / provenance drawer

Any material count, row, category, relationship, result or curated object must support drill-down as far as its controlling owner permits.

Minimum chain:

`displayed result → selected XPD value/record → record/assignment/relation/result identity → paper/object identity → source wording where available → evidence locator → source role → verification/support/strength state → contradiction/counterevidence → scope/context → ontology/normalization version → history/review state`.

The drawer must never fabricate a locator or infer evidence scope from paper co-membership.

## 4. Interaction state machine

The UI must implement an explicit analytical state machine rather than allowing arbitrary controls to accumulate.

- **UI-00 Idle** — no analytical owner selected.
- **UI-10 Single-dimension selected** — one XPD explorer active.
- **UI-20 Pair selected / unresolved preflight** — two XPDs selected; pair disposition read from Task 6.6.
- **UI-30 Governed preflight** — required mode/join/unit/denominator/scope/evidence choices visible and validated.
- **UI-40 Executable analysis** — all hard requirements satisfied; descriptive analysis enabled.
- **UI-50 Result inspection** — visualization/table/coverage/integrity views available.
- **UI-60 Evidence drill-down** — selected result traced to evidence/provenance.
- **UI-BLOCK Hard blocked** — one or more `HB` rules violated or required metadata absent; execution disabled with reasons.
- **UI-GUARD Guarded interpretation** — `MG` warnings are active; result may display only with required qualification.
- **UI-RECOVER Narrow recovery** — `K` pair requires an explicit recovery contract before execution.
- **UI-REDIRECT Governed redirect** — `R` pair redirects to the owning Level-7 scope/support path.
- **UI-L7 Read-only curated context** — `L7` pair operates only over already governed Level-7 objects and their explicit scope/support links.

A browser refresh or shared state must never bypass this state machine.

## 5. Pair-class interaction contract

### 5.1 `D` — directly admissible descriptive

- pair appears in ordinary comparison selector;
- `D` label means directly admissible **descriptive**, never direct effect;
- execution still requires applicable mode/join/unit/denominator and operation-guard validation;
- an `HB` violation blocks execution even for `D`.

### 5.2 `C` — conditional

- pair appears with a `conditions required` indicator;
- query cannot execute until the declared shared scope, join path, eligible subset or context restriction is provided;
- paper co-membership is not accepted as a substitute for scoped linkage.

### 5.3 `L7` — curated Level-7 context

- pair appears with a read-only Level-7 indicator;
- user must select an already governed Level-7 object or authorized scope/support link;
- Level 6 cannot create, promote or validate an official gap/opportunity from the comparison result.

### 5.4 `M` — misleading by default

- hidden or disabled in the ordinary scientific comparison chooser;
- may be exposed only through an explicit **descriptive meta-research audit** mode;
- the interface must display the reason the pair is misleading by default;
- ecological, quality, rigor, superiority, impact or causal ranking interpretations are explicitly prohibited;
- adding a warning does not override an `HB` violation.

### 5.5 `K` — narrowly recoverable

- generic comparison remains disabled;
- a `Narrow recovery` action opens the exact Task-6.5 recovery profile;
- the user must confirm the narrow analytical question, attribution rule, record/pathway join, principal unit, denominator and non-inference warning;
- successful recovery does not reclassify the pair globally as `D` or `C`.

### 5.6 `R` — redirect / better governed path

- generic comparison does not execute;
- UI explains that pairwise cross-tabulation is the wrong scientific mechanism;
- action redirects conceptually to the already governed Level-7 object's scope/support/provenance view;
- no frequency-based Level-7 object is generated.

### 5.7 `I` — intrinsically invalid generic pair

Task 6.5 currently defines zero `I` pairs, but the UI contract reserves this future state:

- pair disabled;
- reason visible;
- no recovery via generic comparison;
- any future change requires governed version update, not front-end override.

## 6. Comparison-mode UI contract

The comparison-mode selector is not a free menu. It is filtered by scientific applicability.

- `CM-01` paper-presence cross-tabulation — requires transparent eligible paper-presence projections for both dimensions.
- `CM-02` stratified distribution — measured dimension retains its own denominator semantics within declared strata.
- `CM-03` temporal trend — requires `XPD-01`; date semantics must be selected explicitly.
- `CM-04` scoped record linkage — requires an explicit record/problem/task/pathway/evidence/review-context link.
- `CM-05` matched evaluation-context comparison — requires compatible metric definition, direction, scale, test case, baseline, conditions and aggregation level.
- `CM-06` geographic/institutional/collaboration contextualization — preserves paper/association/node/edge units and blocks quality-ranking semantics.
- `CM-07` evidence/integrity overlay — verification, support, strength, conflict and provenance remain orthogonal.
- `CM-08` typed-relation contextualization — requires explicit governed relation instances; co-occurrence is insufficient.
- `CM-09` curated Level-7 context — read-only over governed curated objects.

If no comparison mode is scientifically executable for the selected state, the UI must explain why instead of falling back to a generic cross-tab.

## 7. Preflight validation and guard presentation

### 7.1 Hard-block behavior

`HB-01..HB-26` are execution-level blockers.

The interface must:

- identify each triggered `HB` by stable ID;
- state the invalid operation in plain scientific language;
- identify the missing/corrective requirement;
- disable `Run analysis` while the block remains;
- preserve the attempted state for correction where safe;
- never provide a `continue anyway` bypass.

Examples include global-denominator substitution, N:M Cartesian inflation, incompatible metric pooling, methodology-parent pooling, co-occurrence-as-relation, evidence-scope leakage, L6→L7 auto-promotion and qualifier-stripping export.

### 7.2 Misleading-guard behavior

`MG-01..MG-09` permit qualified descriptive output but constrain interpretation.

The UI must:

- show the active guard next to the affected result, not only in a distant help page;
- include required wording in qualified export metadata;
- ensure color is not the sole warning signal;
- never restyle guarded descriptive output as a ranking, score or recommendation.

## 8. Special high-risk dimension interactions

### `XPD-17 Methodology`

Selecting `XPD-17` immediately opens the governed child-owner selector. No comparison or count can run at the `XPD-17` parent level.

The UI must identify the selected child (`MDC`, `LIT`, `LP`, `MRF`, or Task-5.4-dispositioned `EX` projection), owner, applicability and denominator before continuing. No pooled methodology frequency and no scalar generic `learning_type` are permitted.

### `XPD-25 Evaluation metric` / `XPD-26 Evaluation result`

Quantitative result views require a compatibility preflight. Incompatible metric definitions, scales, directions, test cases or baselines remain separable rather than normalized silently. `Lower is better` or `higher is better` is used only when defined by the metric contract.

### `XPD-33..XPD-35 Evidence / integrity`

The UI must show verification, semantic support, statement strength and contradiction states as distinct facets. Evidence-object count cannot be labelled independent support.

### `XPD-36 Typed scientific relationship`

Comparison mode must use explicit relation instances. Reverse direction is not inferred unless the governed relation semantics authorize it.

### `XPD-37` / `XPD-38`

Only already governed Level-7 gaps/opportunities may be selected. The interface is read-only with respect to official synthesis ownership.

## 9. Single-dimension mode

Single-dimension mode reuses Task 6.2 without modification.

Every explorer retains its eight required surfaces:

1. identity/scope;
2. coverage/eligibility;
3. primary distribution/structure view;
4. result table;
5. state/integrity panel;
6. evidence drill-down;
7. provenance/version footer;
8. qualified export.

The unified UI shell may make the explorers look consistent, but it must not force identical analytical units or visualizations across all XPDs.

## 10. Intelligence-family mode

Family mode consumes Task 6.3 `IF-01..IF-20` contracts.

The family workspace may show:

- family purpose and member XPDs;
- per-member coverage cards;
- member explorer launch controls;
- approved family-level qualified synthesis;
- contradiction/counterevidence summary;
- links into governed pair comparisons among member or related dimensions when Task 6.6 allows them.

It must not display a synthetic `family denominator` or `family prevalence` produced by pooling heterogeneous member XPDs.

## 11. Result presentation hierarchy

The recommended result hierarchy is:

1. **Scope banner** — what is being asked and under which owners/versions.
2. **Count cards** — principal unit, numerator, denominator, unique-paper count where distinct.
3. **Primary visual** — dimension/mode-appropriate.
4. **Accessible table** — complete semantic alternative.
5. **Coverage/missingness panel** — eligible, missing, not reported, N/A, unresolved.
6. **Integrity panel** — contradictions, ambiguity, verification/support state.
7. **Evidence-linked rows** — each material output can drill down.
8. **Interpretation guard** — active `MG` and non-inference statements adjacent to result.
9. **Provenance footer** — ontology/normalization version, query state, pair class, mode, join policy and contract versions.

A polished visualization must never hide the scientifically necessary count and denominator metadata.

## 12. Shareable state and reproducibility

Task 6.7 defines a **shareable analytical-state object**, not a final URL scheme.

A shareable state should contain, where applicable:

- UI-spec version;
- Task-6.6 comparison-contract version;
- mode;
- XPD/IF selection;
- `XPD-17` child owner when applicable;
- pair class;
- comparison mode;
- join policy;
- selected scope/context;
- principal unit;
- denominator policy;
- missingness treatment;
- evidence/integrity filters;
- ontology/normalization version;
- active scientific warnings.

Restoring a shared state must rerun guard validation against the current compatible contract; a stale share link cannot bypass newer governance.

Final route/path/query-string design remains subject to Task 9 production-surface and information-architecture audit.

## 13. Export contract

Every scientific export from the comparison UI must include enough metadata to reproduce and interpret the analytical state.

Minimum comparison export metadata:

- selected XPD IDs/labels;
- selected child owner where applicable;
- pair class;
- comparison mode;
- join policy/path;
- principal analytical unit;
- numerator/denominator semantics;
- eligibility and missingness policy;
- scope/context;
- evidence/provenance identifiers where record-level output exists;
- ontology/normalization version;
- Task-6.6 and Task-6.7 contract versions;
- active `HB`/`MG` disposition metadata relevant to the output;
- generation timestamp when implemented.

`HB-25` prohibits an export that strips required scientific qualifiers.

## 14. Accessibility contract

The interactive UI must support:

- complete keyboard operation;
- visible keyboard focus;
- screen-reader names/descriptions for selectors, pair status, guards and drill-down actions;
- semantic HTML tables for analytical data;
- table/text alternatives for charts, maps, networks and trees;
- non-color-only encoding for pair classes, warnings, conflicts and verification states;
- reduced-motion support;
- sufficiently large interactive targets;
- logical focus management when drawers/dialogs open and close;
- no hover-only scientific information.

Scientific warnings must remain perceivable at high zoom and on mobile.

## 15. Responsive design

### Desktop

Recommended three-region analytical workspace:

- left: navigator / selected dimensions;
- center: query builder + results;
- right: preflight/guard summary, collapsible when results expand;
- evidence drawer overlays from the right.

### Tablet

- navigator becomes collapsible;
- query preflight becomes an expandable top panel;
- results remain full width;
- evidence opens as a wide drawer.

### Mobile

Use a stepwise flow:

1. choose mode;
2. choose dimension(s)/family;
3. review pair disposition;
4. satisfy preflight;
5. view result;
6. open evidence.

On mobile, guards and denominator metadata must appear **before** the primary result rather than being moved below long visualizations.

## 16. Empty, sparse, unresolved and error states

The UI must distinguish:

- no eligible records;
- eligible records but selected value absent;
- not reported;
- reported unavailable;
- not applicable;
- unresolved / pending scientific classification;
- blocked due to missing required linkage/context;
- blocked due to `HB` violation;
- guarded due to `MG` interpretation risk;
- Level-7 redirect.

`No data` is not an acceptable universal replacement for these states.

Sparse strata must expose counts and coverage. The UI must avoid visually ranking unstable tiny strata without qualification (`MG-08`).

## 17. Visual-language rules

Pair/analysis states should use both textual labels and visual styling:

- `D` — descriptive allowed;
- `C` — conditions required;
- `L7` — curated read-only;
- `M` — misleading by default / ordinary mode disabled;
- `K` — narrow recovery required;
- `R` — redirect to governed owner;
- `I` — invalid / disabled if introduced in a future governed version.

The interface must never encode `D` as “good” and `M` as “bad science”; the labels describe **interaction admissibility under current governance**, not scientific merit of papers or methods.

## 18. Prototype / mockup behavior

Task 6.7 includes a non-production synthetic HTML mockup to demonstrate:

- Explore / Compare / Family mode switching;
- dimension selectors;
- `D`, `C`, `M`, `K`, `R`, `L7` example states;
- preflight checklist;
- hard-block and misleading-guard surfaces;
- result cards/table;
- evidence drawer;
- responsive behavior.

The mockup contains no live Atlas data and must not be treated as a production route or production implementation.

## 19. Acceptance criteria

Task 6.7 passes only if the design:

1. consumes Tasks 6.1–6.6 as authoritative coordination inputs rather than redefining them;
2. preserves all 38 XPD explorer identities and 20 IF family identities;
3. represents all seven Task-6.6 pair classes including current zero-`I` support;
4. enforces conditional, recovery, redirect and Level-7 semantics visibly;
5. makes `HB-01..HB-26` non-bypassable hard blocks;
6. makes `MG-01..MG-09` visible interpretation guards;
7. requires explicit unit/denominator/join/scope preflight;
8. preserves `XPD-17`, metrics/results, evidence/integrity, relation and Level-7 high-risk boundaries;
9. defines evidence drill-down and qualified export;
10. defines accessible desktop/tablet/mobile behavior;
11. defines shareable analytical state without freezing final production routes;
12. creates no locked-v0.7, ontology, assignment, official Level-7, database, production-main or Stage changes.

## 20. Change boundary

Task 6.7 creates architecture/UI-design coordination artifacts only.

It makes:

- locked-v0.7 field/entity changes: **0**;
- controlled-vocabulary promotions: **0**;
- canonical taxonomy promotions: **0**;
- global alias promotions: **0**;
- canonical relation promotions: **0**;
- paper-level scientific assignments: **0**;
- official Level-7 synthesis objects: **0**;
- production `main` changes: **0**;
- live Atlas route/page changes: **0**;
- database/SQL changes: **0**;
- Computational Resources Stage 1/2/3 changes: **0**.

## 21. Task 6.7 completion decision

**PASS / COMPLETE.**

The Level-6 Cross-Paper Intelligence UI is now specified as a governance-aware analytical workspace that exposes and enforces the sealed scientific contracts rather than treating pair selection as a generic visualization problem.

With Task 6.7 complete, the full **Task 6 — Complete Cross-Paper Intelligence System** is specification-complete.

**STOP BOUNDARY: Task 6.7 is PASS / COMPLETE. Task 6 is COMPLETE / PASS. Task 7 has not started.**

Exact next substantive roadmap task, only when separately authorized:

> **Task 7.1 — map the Design Stack & Feedback Loops framework while preserving the paper-evidence versus Atlas-synthesis boundary and reusing the completed Cross-Paper Intelligence contracts where applicable.**
