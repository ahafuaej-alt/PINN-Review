# Task 6 Status — Complete Cross-Paper Intelligence System

Status: **IN PROGRESS — Tasks 6.1–6.6 PASS / COMPLETE; Task 6.7 NEXT / NOT STARTED**

Date: 2026-09-10

Branch: `docs/master-atlas-roadmap`

Locked scientific authority: Google Drive `v0.7-pilot-atlas-prefreeze`.

Frozen implementation contract: Master Plan v1.0.

## Task 6 objective

Define the complete Level-6 Cross-Paper Intelligence system while preserving upstream scientific ownership, evidence/provenance, multiplicity, contradiction visibility and the distinction between analytical coordination and official Level-7 synthesis.

The frozen Task 6 sequence is:

1. Task 6.1 — define the dimension catalogue. — **PASS / COMPLETE**
2. Task 6.2 — define a complete single-dimension explorer for each principal dimension. — **PASS / COMPLETE**
3. Task 6.3 — implement/specify the current 20 synthesis/intelligence families. — **PASS / COMPLETE**
4. Task 6.4 — map scientifically meaningful cross-dimensional comparison choices. — **PASS / COMPLETE**
5. Task 6.5 — define invalid/misleading combinations explicitly. — **PASS / COMPLETE**
6. Task 6.6 — store the comparison-choice map in machine-readable/version-controlled form. — **PASS / COMPLETE**
7. Task 6.7 — design the interactive comparison/explorer UI. — **NEXT / NOT STARTED**

## Task 6.1 — PASS / COMPLETE

Task 6.1 established **38 principal dimensions** `XPD-01`–`XPD-38`, **9 semantic groups** `DG-01`–`DG-09`, and the frozen **20/20 intelligence-family** map `IF-01`–`IF-20`. Every dimension retains its upstream owner, grain, denominator, eligibility, multiplicity, evidence and no-merge constraints.

Task 6.1 machine contract: `atlas-cross-paper-intelligence-dimension-catalogue.json` (`task-6.1-v1.0.0`).

## Task 6.2 — PASS / COMPLETE

Task 6.2 defines **38/38** single-dimension explorer contracts. Every explorer has an explicit archetype, principal analytical grain, denominator basis, evidence drill-down, qualified export and accessibility contract. `XPD-17 Methodology` remains an owner-preserving child selector and has no pooled methodology frequency.

Task 6.2 machine contract: `atlas-cross-paper-intelligence-single-dimension-explorer-spec.json` (`task-6.2-v1.0.0`).

## Task 6.3 — PASS / COMPLETE

Task 6.3 specifies the frozen **20/20 Cross-Paper Intelligence synthesis families** `IF-01`–`IF-20` using exactly the Task 6.1 member-dimension map and the Task 6.2 explorer contracts.

A family is a Level-6 synthesis workspace, not a scientific field/entity or paper-level fact. There is no default family-wide pooled denominator, no automatic official Level-7 synthesis and no cross-dimensional comparison choice introduced by Task 6.3.

Task 6.3 machine contract: `atlas-cross-paper-intelligence-synthesis-family-spec.json` (`task-6.3-v1.0.0`).

## Task 6.4 — PASS / COMPLETE

Task 6.4 maps the complete scientifically meaningful cross-dimensional comparison-choice surface over the 38 principal XPDs while preserving the sequential boundary to Tasks 6.5–6.7.

### Pair universe

With 38 dimensions there are **703 unordered XPD pairs**.

Task 6.4 accounts for the full pair universe as follows:

- `D` directly admissible descriptive comparison pairs: **347**;
- `C` conditional comparison pairs: **265**;
- `L7` curated Level-7 contextual pairs: **55**;
- total scientifically meaningful Task-6.4 choices: **667**;
- residual pairs reserved for Task 6.5 classification: **36**;
- total accounted: **703/703**;
- duplicate/self/out-of-range pairs: **0**.

`D` means directly admissible **descriptive** comparison and never direct effect or causality. `C` requires a declared shared scope/join/eligible subset. `L7` requires an already governed Level-7 object and is read-only from Level 6.

### Comparison execution contract

A material cross-dimensional analysis must declare:

1. selected unordered XPD pair and comparison mode;
2. scientific owners of both dimensions;
3. common join path and principal analysis unit;
4. numerator and denominator(s);
5. eligibility and missingness policy;
6. scope/context restrictions;
7. unique-paper versus record/assignment/observation/edge counts;
8. evidence/provenance and contradiction visibility;
9. ontology/normalization versions;
10. required scientific warnings;
11. qualified export preserving those qualifiers.

The global corpus count `N = 853` is not an automatic comparison denominator. N:M assignments cannot be multiplied into artificial sample size, and paper co-membership cannot replace scoped record linkage.

### Nine governed comparison modes

Task 6.4 defines:

- `CM-01` paper-presence cross-tabulation;
- `CM-02` stratified distribution;
- `CM-03` temporal trend;
- `CM-04` scoped record linkage;
- `CM-05` matched evaluation-context comparison;
- `CM-06` geographic/institutional/collaboration contextualization;
- `CM-07` evidence/integrity overlay;
- `CM-08` typed-relation contextualization;
- `CM-09` curated Level-7 context.

### High-risk safeguards

Task 6.4 explicitly requires:

- `XPD-17 Methodology` child-owner selection before scientific comparison; no parent-level pooled methodology variable;
- `XPD-25` metric identity ≠ `XPD-26` result and matched metric/test-case/context compatibility before quantitative pooling;
- claim ≠ demonstration and generality claim ≠ evidence;
- geography/institution/collaboration prominence ≠ scientific quality;
- verification ≠ support ≠ statement strength and evidence count ≠ independent support;
- co-occurrence ≠ typed scientific relation;
- all comparisons containing `XPD-37`/`XPD-38` are read-only curated Level-7 context;
- association ≠ causality/effect size, frequency ≠ evidence strength/importance and prevalence difference ≠ performance superiority.

### Task 6.4 artifacts

Human-readable comparison-choice map:

`docs/master-architecture/TASK-6.4-CROSS-DIMENSIONAL-COMPARISON-CHOICE-MAP.md`

Coverage validation:

`docs/master-architecture/TASK-6.4-COMPARISON-CHOICE-COVERAGE-VALIDATION.md`

Validation result: **PASS — 0 validation errors**.

At its own stop boundary, Task 6.4 intentionally created no Task 6.6 machine-readable comparison map.

## Task 6.5 — PASS / COMPLETE

Task 6.5 resolves all 36 Task-6.4 residual pairs and separately defines operation-level invalid/misleading behavior.

### Residual-pair dispositions

The 36 residual pairs are classified exactly once:

- `I` intrinsically invalid generic pairs: **0**;
- `M` misleading-by-default pairs: **12**;
- `K` narrowly recoverable pairs: **6**;
- `R` redirect / better-governed-path pairs: **18**;
- residual total: **36/36**.

The absence of pair-level `I` cases is intentional: no residual pair is scientifically meaningless under every conceivable governed question. Instead, 12 context-to-claim/generality/advantage/result pairs are misleading by default, six context-to-validation/diagnostic pairs require narrow record-scoped recovery, and 18 residual Level-7 pairs must redirect to the curated object's own scope/support path rather than behave as generic cross-tabs.

Task 6.5 therefore preserves the Task-6.4 ordinary comparison classes (`347 D + 265 C + 55 L7 = 667`) and adds governed exception dispositions for the remaining 36, giving **703/703** complete pair coverage.

### Operation-level guard catalogue

Task 6.5 defines **35** operation/inference safeguards:

- `HB-01..HB-26`: **26 hard-block rules** for scientifically invalid computations or transformations;
- `MG-01..MG-09`: **9 misleading-unless-guarded interpretation rules**.

Hard blocks cover denominator/unit substitution, N:M Cartesian inflation, unscoped joins, PEU/study-family inflation, missing-state collapse, incompatible metric/result/test-case pooling, claim/demonstration and generality-evidence collapse, owner/no-merge violations, methodology-parent pooling, relation inference, evidence-scope/support errors, L6-to-L7 auto-promotion, version mixing, qualifier-stripping export and temporal-semantic mixing.

Misleading guards cover frequency-as-strength, association-as-causality/effect-size/superiority, bibliographic/geographic/network prominence-as-quality, ecological inference, time-trend-as-progress, venue-as-quality, conflict-absence-as-consensus, sparse-strata ranking and edge/event-count inflation.

Pair status never overrides operation guards: a `D`, `C` or `L7` pair can still be invalid if executed using a prohibited operation; `M`, `K` and `R` have their own disabled/recovery/redirect semantics.

### Task 6.5 artifacts

Human-readable invalid/misleading catalogue:

`docs/master-architecture/TASK-6.5-INVALID-MISLEADING-COMBINATION-CATALOGUE.md`

Validation record:

`docs/master-architecture/TASK-6.5-INVALID-MISLEADING-VALIDATION.md`

Validation result: **PASS — 0 validation errors**.

At its own stop boundary, Task 6.5 intentionally created no Task 6.6 machine-readable comparison map and no Task 6.7 UI/routes.

## Task 6.6 — PASS / COMPLETE

Task 6.6 stores the complete sealed Task-6.4/6.5 comparison-choice and operation-guard system in version-controlled machine-readable form without changing scientific meaning.

Machine-readable contract:

`docs/master-architecture/atlas-cross-paper-intelligence-comparison-guard-map.json`

Version: `task-6.6-v1.0.0`.

The contract uses a compact **higher-ID adjacency-row encoding**: each unordered XPD pair occurs exactly once under its lower-numbered dimension and one class list. Expansion reproduces the complete **703/703** pair universe exactly:

- `D`: **347**;
- `C`: **265**;
- `L7`: **55**;
- `I`: **0**;
- `M`: **12**;
- `K`: **6**;
- `R`: **18**.

The serialization also records the nine `CM` comparison modes, seven governed join policies, all `HB-01..HB-26` hard blocks, all `MG-01..MG-09` misleading guards, residual recovery/redirect profiles, execution qualifiers and Task 6.7 handoff constraints.

Scientific ownership is not duplicated: Task 6.1 remains the owner/evidence/no-merge reference and Task 6.2 remains the grain/denominator reference for each XPD. The machine contract pins their exact source blobs together with the Task 6.4 and 6.5 human-readable governance blobs.

Final machine payload:

- UTF-8 bytes: **15,713**;
- Git blob SHA: `27d28653e9d7e5d845f75255839cbc13db3cbce4`;
- SHA-256: `668c823a757526fb1bf615c1080f8a93ef535af8015c03e6b77113a9add6bb6e`.

The pre-write Git-blob SHA and GitHub repository readback SHA match exactly.

Machine-readable validation:

`docs/master-architecture/TASK-6.6-MACHINE-READABLE-COMPARISON-GUARD-VALIDATION.md`

Validation result: **PASS — 0 validation errors**.

Validation executed **4,253 deterministic assertions**: 35 global contract assertions plus six checks for each of 703 pairs (`703 × 6 = 4,218`). Checks covered valid XPD IDs, canonical pair order, governed class, exact Task-6.4/6.5 source-class match, exactly-once representation, source pins, class totals, comparison/join/guard identifier completeness, zero authority changes and the Task 6.7 stop boundary.

Task 6.6 does not implement UI/routes and does not make machine selectability equivalent to scientific validity. Pair classes remain subordinate to owner, unit, denominator, evidence, no-merge and operation-guard rules.

## Task 6.7 — NEXT / NOT STARTED

Task 6.7 must design the interactive comparison/explorer UI using the sealed Task 6.1–6.6 contracts. No final interactive cross-dimensional explorer/UI/routes have yet been defined.

## Change boundary

Tasks 6.1–6.6 remain architecture/planning coordination only:

- locked-v0.7 field/entity changes: **0**;
- canonical taxonomy promotions: **0**;
- global alias promotions: **0**;
- canonical relation promotions: **0**;
- paper assignments: **0**;
- official Level-7 synthesis objects: **0**;
- production `main` changes: **0**;
- Computational Resources Stage 1/2/3 changes: **0**;
- Task 6.5 residual-pair classifications: **36** governance dispositions only;
- Task 6.5 operation guards: **35** governance rules only;
- Task 6.6 machine-readable comparison/guard contract: **1** coordination artifact;
- Task 6.6 machine validation record: **1** coordination artifact;
- Task 6.7 final UI/routes: **0**.

## Current stop boundary

**Task 6 is IN PROGRESS. Tasks 6.1–6.6 are PASS / COMPLETE. Task 6.7 is NEXT / NOT STARTED.**
