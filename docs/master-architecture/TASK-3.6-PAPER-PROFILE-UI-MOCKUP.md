# Task 3.6 — Paper Profile UI Mockup Before Implementation

Status: **PASS — COMPLETE**

Date: 2026-09-07

Roadmap parent: `docs/master-architecture/CONTROLLED-ROADMAP.md` → Task 3.6.

Scientific authority: locked Google Drive `v0.7-pilot-atlas-prefreeze`.

Implementation contract: frozen Master Plan v1.0.

Controlling inputs:

- `TASK-3.1-FIRST-CLASS-PAPER-PROFILE-SECTIONS.md`;
- `TASK-3.2-PAPER-PROFILE-FIELD-SPECIFICATION.md`;
- `TASK-3.3-CONDITIONAL-PROFILE-SECTIONS-AND-DISPLAY-LOGIC.md`;
- `TASK-3.4-EVIDENCE-PROVENANCE-DRILLDOWN-BEHAVIOR.md`;
- `TASK-3.5-MACHINE-READABLE-PAPER-PROFILE-SPECIFICATION.md`;
- `atlas-paper-profile-spec.json`.

Mockup source:

`docs/master-architecture/mockups/paper-profile-ui-mockup.html`

This task creates a **non-production, read-only interaction/design mockup** only. It does not create or register a production Atlas route, does not add navigation, does not connect to the production database or current JSON corpus, does not call an API, does not persist user actions, does not create a scientific owner, and does not deploy anything.

## 1. Verified starting state

Before Task 3.6 writes, branch `docs/master-atlas-roadmap` was verified at:

`b99f91fc431e432f9356f6c4ef3ec1e3a601a31e`

with Tasks 3.1–3.5 PASS/COMPLETE and Task 3.6 explicitly NEXT.

The current Google Drive Master Memory revision before Task 3.6 was:

`ANLCKQlaBqtUUw6Lfr4O5Suqdjg9BMHNcOxXe6A5-_ipgDj6noluCQbPyLUHOtLaq25azuvg1SYis_VhOufWLODjxwMVRexySs6DD0xbxDA`

Readback of `atlas-paper-profile-spec.json` reconfirmed:

- `scientific_authority=false`;
- `may_define_scientific_meaning=false`;
- `may_modify_locked_v0_7=false`;
- 19 stable section IDs;
- 3 core body sections and 16 conditional body sections;
- A/C/I presentation axes;
- public-verified and review-maintenance modes;
- evidence drill-down classes/status/source-role rules;
- source-locator invention forbidden.

## 2. Mockup data boundary

The mockup uses only **synthetic demonstration content** under fictional identity `P-DEMO-0001`.

No real Atlas paper record, evidence quote, bibliographic identifier, CR record or scientific conclusion is copied into the mockup. The synthetic source excerpts exist only to demonstrate UI behavior. The page displays an explicit banner that it is a Task-3.6 design mockup with no production authority.

This avoids creating accidental scientific assertions while still permitting visual/interaction validation of the Paper Profile contract.

## 3. Page-level layout

The mockup establishes the following candidate UI architecture for later Task 16 implementation review:

1. **non-production mockup banner** — authority/status warning;
2. **Paper Profile header** — paper identity and profile/version context;
3. **mode switch** — public verified vs review/maintenance demonstration;
4. **permanent 19-section status index** — fixed PP-01→PP-19 semantic order;
5. **display-state inspector** — explains rendered vs suppressed-body behavior;
6. **Paper Profile reading column** — section cards and structured scientific records;
7. **evidence/provenance drawer** — five-stage Task-3.4 drill-down;
8. **suppressed-section explanation** — PP identities remain visible even with no body;
9. **responsive/print behavior** — compact/mobile and print-oriented equivalence.

The mockup does not freeze final production information architecture, route syntax, visual design system or component framework.

## 4. 19-section index and conditional-body behavior

The sidebar/mobile index explicitly contains **all 19/19** stable IDs from `PP-01` through `PP-19` in Task-3.1 order.

The three Task-3.3 core bodies are present:

- PP-01 Bibliographic Identity;
- PP-02 Study / Extraction Identity;
- PP-19 Evidence / Provenance.

The synthetic profile intentionally demonstrates conditional rendering by suppressing two scientific bodies while retaining them in the index:

- **PP-16 Open Problems** — state: “No verified records currently represented”;
- **PP-17 Future Work** — state: “Not applicable to demonstrated component”.

Selecting either index item updates the display-state inspector and explicitly says the body is suppressed without asserting scientific absence.

This directly demonstrates:

- section identity ≠ section-body visibility;
- `C-UNREPRESENTED` ≠ “none” ≠ `not_reported`;
- `A-NOT-APPLICABLE` ≠ missing data.

## 5. A/C/I state presentation

Section headers demonstrate the Task-3.3 three-axis model using labelled text badges rather than color-only meaning:

- applicability (`A`);
- represented content (`C`);
- integrity/semantic modifier (`I`).

The mockup includes examples of:

- verified/populated;
- mixed study design;
- provisional semantic term;
- source-local family expression;
- verified mismatch;
- partial outcome;
- explicit reporting state;
- conflict.

These labels are presentation projections only and are not persisted as new scientific state.

## 6. Public verified vs review/maintenance mode

The header contains a two-state mock mode switch.

In **public verified mode**, the maintenance-only pending candidate is hidden.

In **review/maintenance mode**, PP-06 displays a clearly separated pending AI/extraction candidate with `C: pending` and `I: needs review` semantics.

The pending item is never merged with accepted science and no UI action promotes it. The mockup contains no write/review mutation controls.

## 7. Scientific no-merge behavior demonstrated visually

The mockup explicitly demonstrates these Task-3.1/3.2 safeguards:

- demonstrated application ≠ related application ≠ potential application;
- physical problem ≠ computational task;
- physical constraint ≠ enforcement mechanism;
- general problem characteristic ≠ PINN challenge;
- PINN family display does not manufacture `pinn_type_id` before Task 4;
- data regime, optimizer, training protocol, loss weighting and derived-output structures remain distinct;
- contribution ≠ outcome;
- claim ≠ demonstration;
- validation ≠ evaluation;
- paper-reported reproducibility ≠ Atlas reproduction ≠ CR reproducibility;
- limitation ≠ open problem ≠ Atlas research gap;
- diagnostic symptom ≠ cause; intervention ≠ verified improvement;
- paper diagnostic pathway ≠ L7 Failure-Diagnostics synthesis;
- evidence text ≠ normalized Atlas statement.

## 8. Methodology progressive disclosure

PP-08 uses expandable native `<details>` groups for high-density structured methodology.

The mockup demonstrates separate cards/groups for:

- architecture expression;
- optimizer;
- data regime;
- physics enforcement;
- network configuration;
- training protocol;
- loss weighting;
- derived-output method.

This is a UI density solution only. It does not flatten or relocate scientific ownership.

## 9. Claim-vs-demonstration and negative/partial science

PP-10 shows claimed and demonstrated scope side-by-side and preserves a **verified + mismatched** evidence state.

PP-11 retains a **partial** outcome as normal scientific content.

PP-13 presents two distinct synthetic test cases rather than generating a single “best performance” summary.

These choices demonstrate that completeness optics cannot suppress negative, partial, conflicting or context-dependent science.

## 10. Evidence/provenance drawer

The mockup implements a read-only drawer following the Task-3.4 five-stage contract:

1. record context;
2. linked evidence set;
3. exact evidence record;
4. source context;
5. semantic/provenance trace.

Five synthetic evidence records are available to demonstrate supported, mismatched, conflict, provisional and limitation scenarios.

The drawer keeps separate:

- verification status;
- support status;
- evidence source role;
- evidence type and statement strength;
- normalized Atlas statement;
- verbatim/source evidence;
- source locator;
- semantic/provenance trace.

No source URL is fabricated. The source-context stage explicitly states that only a verified source access target may be exposed later.

Evidence records are selected by mock governed identity (`E-DEMO-*`), not by text-similarity matching.

PP-19 labels its counts as **evidence-record counts for navigation only**, not evidence strength and not independent-study counts.

## 11. Accessibility and responsive behavior

The mockup includes source-level design support for:

- skip link;
- semantic header/main/aside/section structure;
- keyboard-operable section index and evidence buttons;
- visible focus behavior;
- evidence drawer as an ARIA dialog;
- Escape-to-close;
- basic focus trapping while the drawer is open;
- return focus to the originating evidence button;
- text labels for conflict/mismatch/provisional states rather than color alone;
- reduced-motion handling;
- mobile layout below 900 px;
- full-width mobile evidence drawer;
- horizontally scrollable mobile section index;
- print mode that removes interactive chrome while retaining profile content.

Exact WCAG conformance must be tested in the later implementation/prototype stages; Task 3.6 establishes the mockup behavior, not a conformance certification.

## 12. Non-production technical boundary

The HTML is intentionally self-contained:

- inline CSS;
- inline JavaScript;
- no external library/framework;
- no remote stylesheet/font/script;
- no production API call;
- no database call;
- no `fetch`/XHR/network request;
- no local/session storage;
- no cookie;
- no production route registration;
- no navigation/site-index modification;
- no deployment workflow modification.

The JavaScript changes only local mockup presentation state and the synthetic evidence drawer.

## 13. Mockup structural self-checks

The mockup source includes lightweight client-side diagnostic assertions that:

- the index IDs equal PP-01 through PP-19 in exact order;
- PP-01, PP-02 and PP-19 core bodies exist.

These diagnostics log errors only and do not mutate science.

Task 3.6 source readback confirmed the mockup banner, 19-item index, core/conditional example bodies, evidence drawer, five synthetic evidence records, responsive CSS and stop boundary documentation.

A real browser-rendered visual regression/accessibility test was **not executed in this connector session**. Task 3.6 therefore does not claim pixel-level rendering verification, browser compatibility certification or WCAG certification.

## 14. Acceptance audit

Task 3.6 result:

- stable Paper Profile section identities represented in index = **19/19**;
- core always-render bodies demonstrated = **3/3**;
- conditional-body suppression demonstrated = **PASS**;
- A/C/I status axes demonstrated = **3/3**;
- public-vs-maintenance separation demonstrated = **PASS**;
- pending AI/extraction content segregated = **PASS**;
- verified mismatch visibility demonstrated = **PASS**;
- conflict visibility demonstrated = **PASS**;
- partial/negative-science-safe presentation = **PASS**;
- evidence drill-down stages demonstrated = **5/5**;
- source text vs normalized statement separation = **PASS**;
- verification vs support separation = **PASS**;
- source-locator no-invention behavior = **PASS**;
- methodology progressive disclosure = **PASS**;
- mobile/compact design behavior specified in source = **PASS**;
- keyboard/focus behavior specified in source = **PASS**;
- real Atlas scientific data copied into mockup = **0**;
- production routes/pages registered = **0**;
- production data/API/database writes = **0**;
- new locked-v0.7 scientific fields/entities = **0**;
- Computational Resources boundary violations = **0**.

### Acceptance result

**PASS.** The Paper Profile interaction design is now represented as a version-controlled, self-contained, synthetic-data UI mockup that exercises the scientific/display/provenance contracts from Tasks 3.1–3.5 without implementing production behavior or changing scientific ownership.

## 15. Task 3 closure boundary

Task 3.1–3.6 together now define:

- complete Paper Profile section architecture;
- field/substructure ownership and serialization mapping;
- conditional display logic;
- evidence/provenance drill-down behavior;
- machine-readable coordination contract;
- pre-implementation UI mockup.

Therefore **Task 3 — Define the complete Paper Profile = COMPLETE / PASS** at the specification/mockup level.

No production Paper Profile route/page has been implemented.

## 16. Stop boundary

**Task 4 has not been started.**

Exact next roadmap action, only when separately authorized: **Task 4.1 — audit the existing Abbreviations/PINN-type material** before formalizing the extensible PINN Type / Variant classification system.
