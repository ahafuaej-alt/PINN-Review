# Task 6.7 — Interactive Cross-Paper Intelligence UI Specification Validation

Status: **PASS — 0 validation errors**

Date: 2026-09-10

Branch: `docs/master-atlas-roadmap`

Starting head: `d3e977eb94fffc75fa083eeb35b01bb3014e4e67`

Validated artifacts:

- `TASK-6.7-INTERACTIVE-CROSS-PAPER-INTELLIGENCE-UI-SPECIFICATION.md`;
- `atlas-cross-paper-intelligence-ui-spec.json` (`task-6.7-v1.0.0`);
- `mockups/cross-paper-intelligence-ui-mockup.html`.

## 1. Dependency validation

PASS.

The Task 6.7 UI contract pins and consumes all six controlling Task-6 dependency layers:

1. Task 6.1 dimension catalogue — Git blob `355bd6bca5d25c41e23c263176cf9bcf09fdc6d4`;
2. Task 6.2 explorer specification — Git blob `267bcf0b25b03776442a0b3bdd6f450966a228df`;
3. Task 6.3 synthesis-family specification — Git blob `a577010efbd613fb6cc4ce37e342327471a4bf91`;
4. Task 6.4 comparison-choice map — Git blob `f001abe5de878667e0c9009f0725b824fe33ee5c`;
5. Task 6.5 invalid/misleading catalogue — Git blob `0a196a5c6f37949d4d822d7d7f9fadcbc2d76499`;
6. Task 6.6 comparison/guard map — Git blob `27d28653e9d7e5d845f75255839cbc13db3cbce4`.

No Task 6.7 scientific meaning is defined independently of those dependencies.

## 2. Coverage validation

PASS.

Machine contract declares exactly:

- principal dimensions: **38**;
- single-dimension explorers: **38**;
- intelligence families: **20**;
- unordered comparison pairs: **703**;
- comparison modes: **9**;
- hard blocks: **26**;
- misleading guards: **9**.

Pair-class counts exactly reproduce Task 6.6:

- `D`: 347;
- `C`: 265;
- `L7`: 55;
- `I`: 0;
- `M`: 12;
- `K`: 6;
- `R`: 18;
- total: **703**.

Task 6.7 does not create a competing pair register; it references the sealed Task 6.6 contract.

## 3. Workspace-mode validation

PASS.

Exactly three conceptual workspace modes are specified:

- `WM-01 Explore` — one XPD / Task 6.2 explorer;
- `WM-02 Compare` — one unordered XPD pair / Tasks 6.4–6.6;
- `WM-03 Family` — one IF family / Task 6.3.

No mode creates a new scientific owner or pooled family denominator.

## 4. UI-shell validation

PASS.

Five required regions are defined:

1. identity/status header;
2. analytical navigator;
3. query builder / scientific preflight;
4. results workspace;
5. evidence/provenance drawer.

The design separates navigation, scientific preflight, analytical output and evidence inspection.

## 5. State-machine validation

PASS.

Twelve governed states are explicitly specified:

- `UI-00` idle;
- `UI-10` single dimension;
- `UI-20` pair selected / unresolved preflight;
- `UI-30` governed preflight;
- `UI-40` executable analysis;
- `UI-50` result inspection;
- `UI-60` evidence drill-down;
- `UI-BLOCK` hard blocked;
- `UI-GUARD` guarded interpretation;
- `UI-RECOVER` narrow recovery;
- `UI-REDIRECT` governed redirect;
- `UI-L7` read-only curated context.

Restored/shareable state is required to rerun current guard validation and cannot bypass the state machine.

## 6. Pair-class behavior validation

PASS.

All seven pair classes have distinct interaction semantics:

- `D`: ordinary selector; descriptive execution after applicable preflight;
- `C`: ordinary selector; execution blocked until required conditions are satisfied;
- `L7`: ordinary selector; read-only governed Level-7 context;
- `I`: disabled generic comparison; current count remains zero;
- `M`: excluded from ordinary scientific chooser; expert descriptive meta-research path only;
- `K`: generic comparison disabled; explicit narrow recovery contract required;
- `R`: no generic comparison; redirect to governed Level-7 scope/support owner.

No front-end action can globally reclassify a pair.

## 7. Preflight validation

PASS.

The machine contract requires **18** preflight elements, including pair class, comparison mode, join/path, both scientific owners, analytical unit, numerator, denominator, eligibility, missingness, multiplicity, scope/context, metric/test-case compatibility where relevant, evidence/provenance requirements, active `HB` and `MG` rules, versions and qualified-export requirements.

`Run analysis` is unavailable while mandatory conditions or hard-block corrections remain unresolved.

## 8. Comparison-mode validation

PASS.

All `CM-01..CM-09` modes are represented with mode-specific prerequisites. The UI specification explicitly rejects a generic fallback cross-tab when no mode is scientifically executable.

## 9. Operation-guard validation

PASS.

All `HB-01..HB-26` are specified as non-bypassable execution blocks:

- stable guard ID shown;
- reason shown;
- corrective requirement shown;
- execution disabled;
- no `continue anyway` path.

All `MG-01..MG-09` are specified as visible interpretation guards:

- adjacent to affected output;
- retained in export metadata;
- not encoded by color alone;
- cannot be restyled as scientific ranking/recommendation.

## 10. High-risk scientific boundary validation

PASS.

The UI explicitly preserves:

- `XPD-17` child-owner selection before count/comparison; no parent pooled methodology frequency or scalar generic `learning_type`;
- `XPD-25` metric identity versus `XPD-26` result/test-case separation and compatibility preflight;
- `XPD-33..XPD-35` orthogonal evidence/integrity facets;
- `XPD-36` explicit typed relation instances and governed directionality;
- `XPD-37/XPD-38` already-governed Level-7 objects in read-only mode.

## 11. Result / evidence / export validation

PASS.

Nine ordered result surfaces are defined, beginning with scientific scope/count metadata and ending with provenance/version disclosure.

Evidence drill-down defines **14** minimum traceability elements from displayed result through record/paper/source/evidence/integrity/version/history.

Comparison export defines **15** minimum qualifier categories. `HB-25` remains controlling: scientifically necessary qualifiers cannot be stripped from export.

## 12. Accessibility and responsive validation

PASS.

Nine accessibility requirements are machine-recorded, including full keyboard operation, visible focus, screen-reader semantics, semantic tables, non-graph alternatives, non-color-only states, reduced motion, target sizing/focus management and no hover-only scientific information.

Desktop, tablet and mobile interaction models are explicitly differentiated. On mobile, guard and denominator metadata precede the primary result.

## 13. Empty-state validation

PASS.

Ten distinct state types are preserved rather than collapsed into a universal `No data` state:

- no eligible records;
- eligible but value absent;
- not reported;
- reported unavailable;
- not applicable;
- unresolved;
- blocked for missing linkage/context;
- hard blocked;
- misleading/guarded;
- Level-7 redirect.

## 14. Prototype/mockup validation

PASS as a **non-production interaction design artifact**.

Repository readback confirms the mockup exists with Git blob:

`e463adf2d54c0d1fb6273916c6a950c6f9058030`.

The mockup explicitly declares synthetic content and no production route, database write or scientific authority.

Representative pair scenarios were cross-checked against the sealed Task 6.4/6.5/6.6 decisions:

- `XPD-09 × XPD-16` → `D`;
- `XPD-01 × XPD-10` → `C`;
- `XPD-09 × XPD-37` → `L7`;
- `XPD-04 × XPD-26` → `M`;
- `XPD-04 × XPD-24` → `K`;
- `XPD-01 × XPD-37` → `R`.

The mockup intentionally does **not** contain a second hard-coded 703-pair scientific map. A future implementation must read Task 6.6.

## 15. Machine-contract repository readback

PASS.

Repository readback confirms:

- spec ID: `atlas-cross-paper-intelligence-ui-spec`;
- version: `task-6.7-v1.0.0`;
- status: `PASS_COMPLETE`;
- starting head: `d3e977eb94fffc75fa083eeb35b01bb3014e4e67`;
- Git blob SHA: `3153b9d93d03016eccbb551ee040f7079473e08a`.

The readback contains the intended authority flags, dependency pins, complete pair-class counts, UI states, preflight, guard behaviors, special-dimension rules, share/export/accessibility contracts and stop boundary.

## 16. Authority / change-boundary validation

PASS.

Task 6.7 records zero:

- locked-v0.7 changes;
- ontology/taxonomy/alias/relation promotions;
- paper assignments;
- official Level-7 synthesis objects;
- database changes;
- production-main changes;
- production-route changes;
- Computational Resources Stage changes.

Final production route/query-string information architecture remains explicitly undefined pending Task 9.

## 17. Final result

**PASS — 0 validation errors.**

Task 6.7 provides a complete governance-aware interactive design contract and non-production interaction mockup while leaving scientific authority, pair admissibility and production implementation with their existing owners.

**STOP BOUNDARY: Task 6.7 is PASS / COMPLETE. Task 6 is COMPLETE / PASS. Task 7 has not started.**
