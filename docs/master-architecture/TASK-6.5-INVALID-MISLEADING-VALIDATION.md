# Task 6.5 — Invalid / Misleading Combination Validation

Status: **PASS — 0 validation errors**

Date: 2026-09-10

Branch: `docs/master-atlas-roadmap`

Task-6.5 starting head: `9ed3b838cced143c008ab0c86e44a7da62f3944b`

Primary artifact:

`docs/master-architecture/TASK-6.5-INVALID-MISLEADING-COMBINATION-CATALOGUE.md`

## 1. Validation purpose

This validation checks that Task 6.5 completely resolves the 36 Task-6.4 residual pairs and adds operation-level invalid/misleading safeguards without changing the frozen scientific owners, the 667 Task-6.4 ordinary comparison choices, or the Task-6.6/6.7 boundaries.

This is a semantic/coverage validation record. Task 6.5 intentionally does **not** create the final machine-readable comparison map; that remains Task 6.6.

## 2. Residual-pair coverage

Task 6.4 residual universe: **36 unordered pairs**.

Task 6.5 disposition counts:

- `I` intrinsically invalid generic pair: **0**;
- `M` misleading by default: **12**;
- `K` conditionally recoverable through a narrower governed comparison: **6**;
- `R` redirect / better governed path: **18**.

Arithmetic:

`0 + 12 + 6 + 18 = 36`.

Validation result:

- all 36 residual pairs classified: **PASS**;
- duplicate residual classifications: **0**;
- residual pairs omitted: **0**;
- non-residual Task-6.4 pairs accidentally reclassified: **0**.

## 3. Complete 703-pair accounting

Task 6.4 ordinary scientifically meaningful comparison classes remain unchanged:

- `D`: **347**;
- `C`: **265**;
- `L7`: **55**;
- subtotal: **667**.

Task 6.5 governed residual dispositions:

- `I`: 0;
- `M`: 12;
- `K`: 6;
- `R`: 18;
- subtotal: **36**.

Complete unordered pair universe:

`347 + 265 + 55 + 0 + 12 + 6 + 18 = 703`.

Validation result: **PASS — 703/703 accounted for**.

## 4. Residual-class structural checks

### `M` set

Expected structure:

`{XPD-04, XPD-05, XPD-06} × {XPD-19, XPD-20, XPD-22, XPD-26}`

Expected count:

`3 × 4 = 12`.

Observed: **12**. PASS.

### `K` set

Expected structure:

`{XPD-04, XPD-05, XPD-06} × {XPD-24, XPD-32}`

Expected count:

`3 × 2 = 6`.

Observed: **6**. PASS.

### `R` set

Expected structure:

`{XPD-01, XPD-02, XPD-03, XPD-04, XPD-05, XPD-06, XPD-07, XPD-27, XPD-28} × {XPD-37, XPD-38}`

Expected count:

`9 × 2 = 18`.

Observed: **18**. PASS.

### `I` set

Observed: **0**.

This is scientifically intentional. No residual pair is claimed to be impossible under every conceivable governed question. Pair-level risk is resolved through `M`, `K`, or `R`, while genuinely invalid transformations/inferences are captured by the operation-level hard-block catalogue.

## 5. Operation-level catalogue coverage

Task 6.5 defines:

- hard blocks `HB-01..HB-26`: **26**;
- misleading-unless-guarded rules `MG-01..MG-09`: **9**;
- total operation-level guard rules: **35**.

ID checks:

- missing IDs in `HB-01..HB-26`: **0**;
- duplicate HB IDs: **0**;
- missing IDs in `MG-01..MG-09`: **0**;
- duplicate MG IDs: **0**.

Coverage domains explicitly represented:

1. denominator and eligibility;
2. analytical unit and multiplicity;
3. scoped joins and N:M anti-inflation;
4. study-family/PEU independence;
5. missingness/reporting states;
6. metric identity versus result/test case;
7. metric/context/aggregation compatibility;
8. claim/demonstration and generality evidence;
9. contribution/outcome and problem/task/challenge no-merge boundaries;
10. methodology-parent ownership;
11. typed scientific relations and directionality;
12. evidence scope, verification/support/strength and independent support;
13. Level-6 versus curated Level-7 synthesis;
14. ontology/normalization versioning;
15. qualified export;
16. temporal semantics;
17. frequency/association interpretation;
18. geographic/institutional/collaboration ecological and quality inference;
19. publication/source quality inference;
20. contradiction/consensus interpretation;
21. sparse/imbalanced strata;
22. edge/event counts versus unique-paper/study counts.

Validation result: **PASS**.

## 6. High-risk invariant regression

The Task-6.5 catalogue preserves the following mandatory boundaries:

- global corpus size is not an automatic denominator: PASS;
- paper/record/assignment/result/relation/evidence/edge/PEU units remain distinct: PASS;
- N:M Cartesian inflation prohibited: PASS;
- paper co-membership is not scoped scientific linkage: PASS;
- independent recurrence follows Task-5.5 study-family/PEU rules: PASS;
- missing/not-reported/unavailable/not-applicable/unresolved states remain explicit: PASS;
- `XPD-17` remains child-owner preserving and cannot be pooled: PASS;
- `XPD-25` metric identity remains distinct from `XPD-26` result/test case: PASS;
- claim remains distinct from demonstration: PASS;
- generality claim remains distinct from generality evidence: PASS;
- contribution remains distinct from outcome: PASS;
- physical problem remains distinct from computational task and PINN challenge: PASS;
- verification/support/strength remain distinct: PASS;
- evidence count is not independent support: PASS;
- co-occurrence is not a typed relation: PASS;
- reverse relation direction is not inferred: PASS;
- frequency is not evidence strength: PASS;
- association is not causality/effect size/superiority: PASS;
- geographic/institutional/collaboration prominence is not scientific quality: PASS;
- Level-6 signals do not auto-create Level-7 gaps/opportunities: PASS;
- Task 5.5 remains the ontology-promotion gate: PASS.

## 7. Sequential-boundary checks

Task 6.5 must not perform Tasks 6.6 or 6.7.

Observed Task-6.5 changes:

- final machine-readable Task-6.6 comparison map created: **NO**;
- Task-6.6 serialized pair entries created: **0**;
- Task-6.7 interactive UI/routes created: **0**;
- production implementation changes: **0**.

Validation result: **PASS**.

## 8. Authority/change regression

Task 6.5 introduces:

- locked-v0.7 field/entity changes: **0**;
- controlled-vocabulary promotions: **0**;
- canonical taxonomy promotions: **0**;
- global alias promotions: **0**;
- canonical relation promotions: **0**;
- paper assignments: **0**;
- official Level-7 synthesis objects: **0**;
- production `main` changes: **0**;
- live Atlas implementation changes: **0**;
- Computational Resources Stage changes: **0**.

Validation result: **PASS**.

## 9. Final validation decision

**PASS — 0 validation errors.**

Task 6.5 completely classifies the 36 residual XPD pairs and explicitly governs operation-level invalid/misleading behavior while preserving all controlling scientific and governance boundaries.

**STOP BOUNDARY: Task 6.5 is PASS / COMPLETE. Task 6.6 has not started.**
