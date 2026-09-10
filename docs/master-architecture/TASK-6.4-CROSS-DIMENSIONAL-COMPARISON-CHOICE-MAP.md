# Task 6.4 — Cross-Dimensional Comparison-Choice Map

Status: **PASS / COMPLETE**

Date: 2026-09-10

Branch: `docs/master-atlas-roadmap`

Starting head: `7c63f35ba51c7331dba4b897be7d721f7688e789`

Locked scientific authority: Google Drive `v0.7-pilot-atlas-prefreeze`.

Frozen implementation contract: Master Plan v1.0.

Controlling dependencies:

- `atlas-cross-paper-intelligence-dimension-catalogue.json` (`task-6.1-v1.0.0`);
- `atlas-cross-paper-intelligence-single-dimension-explorer-spec.json` (`task-6.2-v1.0.0`);
- `atlas-cross-paper-intelligence-synthesis-family-spec.json` (`task-6.3-v1.0.0`).

## 1. Purpose and hard boundary

Task 6.4 answers one question:

> Which pairs of governed principal Cross-Paper Intelligence dimensions may participate in a scientifically meaningful cross-dimensional analysis, and under what comparison semantics?

The comparison unit is the **unordered pair of principal dimensions**. Display orientation (`A by B` versus `B by A`) is a UI/presentation choice and does not create a second scientific comparison.

Task 6.4 is an **allow/eligibility map**, not the Task 6.5 invalid-combination catalogue and not the Task 6.6 serialized comparison map. Therefore:

- it maps scientifically meaningful comparison choices;
- it defines the scientific guards required for those choices;
- it does **not** label the residual unapproved pairs as invalid, misleading or prohibited;
- it does **not** serialize the final map into the Task 6.6 machine-readable contract;
- it does **not** design the final interactive comparison UI or routes.

The controlling distinction remains:

**scientific owner ≠ principal dimension ≠ intelligence family ≠ comparison choice ≠ comparison operation ≠ UI view.**

## 2. Pair universe and Task 6.4 statuses

With 38 principal dimensions there are exactly:

`C(38,2) = 703` unordered cross-dimensional pairs.

Task 6.4 reviews the full 703-pair universe and assigns scientifically meaningful pairs to one of three permitted statuses:

- **`D` — directly admissible descriptive comparison**: a strong, pre-existing scientific or analytical rationale exists and the pair may be compared when the governing join/unit rules are satisfied. `D` never means direct effect, causal effect or evidence of superiority.
- **`C` — conditional comparison**: the pair can answer a legitimate scientific/audit question only when a declared shared scope, join path, eligible subset or context restriction is present. A raw paper-level Cartesian cross-tab is not automatically sufficient.
- **`L7` — curated Level-7 contextual comparison**: comparison is read-only and requires an already governed Level-7 gap/opportunity object with explicit scope/support linkage. Level 6 cannot manufacture the Level-7 object from recurrence or frequency.

Task 6.4 result:

- `D`: **347** unordered pairs;
- `C`: **265** unordered pairs;
- `L7`: **55** unordered pairs;
- scientifically meaningful choices mapped by Task 6.4: **667**;
- residual pairs deliberately left for Task 6.5 classification: **36**;
- total accounted pair universe: **703/703**.

The 36 residual pairs are **not called invalid by Task 6.4**. They are simply not authorized as comparison choices at this stage and are handed to Task 6.5 for explicit misleading/invalid-combination analysis.

## 3. What a comparison choice means

A scientifically valid comparison choice is not just two selected labels. Its execution contract is:

`left XPD + right XPD + comparison mode + common join path + principal analysis unit + numerator + denominator + eligibility + scope/context + missingness policy + evidence/provenance + ontology/normalization versions + integrity warnings`.

Every material comparison must preserve the Task 6.1 owner semantics of **both** dimensions and the Task 6.2 explorer semantics of their constituent records.

No comparison may silently replace two incompatible denominators with the global corpus count `N = 853`.

## 4. Governed comparison modes

Task 6.4 recognizes nine comparison modes. A mapped pair may support one or more modes only when their prerequisites are met.

### `CM-01` — paper-presence cross-tabulation

Use when both selected dimensions can be reduced transparently to eligible paper-presence indicators. Multi-valued assignments must first be converted to explicit paper-presence states; assignment count is still reported separately.

### `CM-02` — stratified distribution

Show one dimension's governed distribution within eligible strata of the other. The stratifier cannot alter the scientific meaning or denominator rules of the measured dimension.

### `CM-03` — temporal trend

Requires `XPD-01`. Publication year, extraction date, verification date and review windows remain separate temporal semantics. Time trends describe observed corpus patterns and do not prove methodological progress or causal change.

### `CM-04` — scoped record linkage

Use when dimensions have record-, assignment-, pathway-, review-scope- or component-level semantics that require an explicit paper/record/context link. It prohibits blind N:M Cartesian multiplication.

### `CM-05` — matched evaluation-context comparison

Required whenever `XPD-25` or especially `XPD-26` is compared in a way that uses quantitative evaluation observations. Metric definition, direction, scale, test case, baseline, conditions and aggregation level must be compatible before numerical pooling or ordering.

### `CM-06` — geographic / institutional / collaboration contextualization

Applies to `XPD-04`, `XPD-05` or `XPD-06`. Association counts, nodes, edges and unique papers remain separate. Geographic or network prominence cannot be interpreted as scientific quality, impact, validity or evidence strength.

### `CM-07` — evidence / integrity overlay

Applies to `XPD-33`, `XPD-34` or `XPD-35`. Evidence source role, verification, semantic support, statement strength, conflict and ambiguity remain orthogonal. Evidence count is not independent support.

### `CM-08` — typed-relation contextualization

Applies to `XPD-36`. Only explicit governed relation instances may support relation-specific comparison. Co-occurrence is not converted into a typed relation; reverse direction is not inferred.

### `CM-09` — curated Level-7 context

Applies to `XPD-37`/`XPD-38`. Only already governed Level-7 objects and their explicit scope/support links may be analyzed. L6 recurrence, limitation, open-problem or future-work counts cannot themselves create or validate an official gap/opportunity.

## 5. Common unit, join and denominator rules

### 5.1 Paper-level intersections

A paper-level comparison is permitted only if both dimensions have an explicit eligible paper-presence projection. The common denominator is then the declared intersection or governed eligible population appropriate to the question, not automatically all 853 papers.

### 5.2 Multi-valued dimensions

For N:M dimensions, report separately:

- unique eligible papers;
- papers containing each selected value;
- assignment/record count;
- co-presence count when applicable.

Never calculate an apparent sample size by multiplying assignments from the two dimensions.

### 5.3 Record-scoped joins

When scientific meaning is scoped to a problem, task, evaluation observation, diagnostic pathway, evidence object or review record, comparison requires that scoped link. Paper co-membership alone cannot be assumed to mean the two values refer to the same experiment, problem, test case or claim.

### 5.4 Evidence joins

Evidence/integrity dimensions must join through the governed evidence/support/provenance relation appropriate to the target record. A paper-wide evidence label cannot be sprayed across unrelated records in that paper.

### 5.5 Independent recurrence

If a comparison claims recurrence or independent support rather than mere corpus prevalence, the independent study-family / PEU rules from Task 5.5 apply. Multiple statements or publication versions from one study family do not inflate independent recurrence.

## 6. Complete Task 6.4 comparison-choice register

Only higher-ID partners are listed, so every unordered pair appears at most once. `D`, `C` and `L7` are mutually exclusive statuses.

| Left dimension | Directly admissible (`D`) higher-ID partners | Conditional (`C`) higher-ID partners | Curated Level-7 (`L7`) higher-ID partners |
|---|---|---|---|
| XPD-01 — Temporal context | XPD-02, XPD-03, XPD-04, XPD-05, XPD-06 | XPD-07, XPD-08, XPD-09, XPD-10, XPD-11, XPD-12, XPD-13, XPD-14, XPD-15, XPD-16, XPD-17, XPD-18, XPD-19, XPD-20, XPD-21, XPD-22, XPD-23, XPD-24, XPD-25, XPD-26, XPD-27, XPD-28, XPD-29, XPD-30, XPD-31, XPD-32, XPD-33, XPD-34, XPD-35, XPD-36 | — |
| XPD-02 — Publication / source context | XPD-03, XPD-04, XPD-05, XPD-06 | XPD-07, XPD-08, XPD-09, XPD-10, XPD-11, XPD-12, XPD-13, XPD-14, XPD-15, XPD-16, XPD-17, XPD-18, XPD-19, XPD-20, XPD-21, XPD-22, XPD-23, XPD-24, XPD-25, XPD-26, XPD-27, XPD-28, XPD-29, XPD-30, XPD-31, XPD-32, XPD-33, XPD-34, XPD-35, XPD-36 | — |
| XPD-03 — Study design / review scope | XPD-04, XPD-05, XPD-06 | XPD-07, XPD-08, XPD-09, XPD-10, XPD-11, XPD-12, XPD-13, XPD-14, XPD-15, XPD-16, XPD-17, XPD-18, XPD-19, XPD-20, XPD-21, XPD-22, XPD-23, XPD-24, XPD-25, XPD-26, XPD-27, XPD-28, XPD-29, XPD-30, XPD-31, XPD-32, XPD-33, XPD-34, XPD-35, XPD-36 | — |
| XPD-04 — Geographic provenance | XPD-05, XPD-06 | XPD-07, XPD-08, XPD-09, XPD-10, XPD-11, XPD-12, XPD-13, XPD-14, XPD-15, XPD-16, XPD-17, XPD-18, XPD-21, XPD-23, XPD-25, XPD-27, XPD-28, XPD-29, XPD-30, XPD-31, XPD-33, XPD-34, XPD-35, XPD-36 | — |
| XPD-05 — Institutional context | XPD-06 | XPD-07, XPD-08, XPD-09, XPD-10, XPD-11, XPD-12, XPD-13, XPD-14, XPD-15, XPD-16, XPD-17, XPD-18, XPD-21, XPD-23, XPD-25, XPD-27, XPD-28, XPD-29, XPD-30, XPD-31, XPD-33, XPD-34, XPD-35, XPD-36 | — |
| XPD-06 — Collaboration context | — | XPD-07, XPD-08, XPD-09, XPD-10, XPD-11, XPD-12, XPD-13, XPD-14, XPD-15, XPD-16, XPD-17, XPD-18, XPD-21, XPD-23, XPD-25, XPD-27, XPD-28, XPD-29, XPD-30, XPD-31, XPD-33, XPD-34, XPD-35, XPD-36 | — |
| XPD-07 — Application evidence role / scope | XPD-08, XPD-09, XPD-10, XPD-11, XPD-12, XPD-13, XPD-14, XPD-15, XPD-16, XPD-17, XPD-18, XPD-19, XPD-20, XPD-21, XPD-22, XPD-23, XPD-24, XPD-25, XPD-26, XPD-29, XPD-30, XPD-31, XPD-32, XPD-36 | XPD-27, XPD-28, XPD-33, XPD-34, XPD-35 | — |
| XPD-08 — Application taxonomy | XPD-09, XPD-10, XPD-11, XPD-12, XPD-13, XPD-14, XPD-15, XPD-16, XPD-17, XPD-18, XPD-19, XPD-20, XPD-21, XPD-22, XPD-23, XPD-24, XPD-25, XPD-26, XPD-29, XPD-30, XPD-31, XPD-32, XPD-36 | XPD-27, XPD-28, XPD-33, XPD-34, XPD-35 | XPD-37, XPD-38 |
| XPD-09 — Physical system | XPD-10, XPD-11, XPD-12, XPD-13, XPD-14, XPD-15, XPD-16, XPD-17, XPD-18, XPD-19, XPD-20, XPD-21, XPD-22, XPD-23, XPD-24, XPD-25, XPD-26, XPD-29, XPD-30, XPD-31, XPD-32, XPD-36 | XPD-27, XPD-28, XPD-33, XPD-34, XPD-35 | XPD-37, XPD-38 |
| XPD-10 — Physical problem | XPD-11, XPD-12, XPD-13, XPD-14, XPD-15, XPD-16, XPD-17, XPD-18, XPD-19, XPD-20, XPD-21, XPD-22, XPD-23, XPD-24, XPD-25, XPD-26, XPD-29, XPD-30, XPD-31, XPD-32, XPD-36 | XPD-27, XPD-28, XPD-33, XPD-34, XPD-35 | XPD-37, XPD-38 |
| XPD-11 — Governing equation / equation family | XPD-12, XPD-13, XPD-14, XPD-15, XPD-16, XPD-17, XPD-18, XPD-19, XPD-20, XPD-21, XPD-22, XPD-23, XPD-24, XPD-25, XPD-26, XPD-29, XPD-30, XPD-31, XPD-32, XPD-36 | XPD-27, XPD-28, XPD-33, XPD-34, XPD-35 | XPD-37, XPD-38 |
| XPD-12 — Problem class / characteristics | XPD-13, XPD-14, XPD-15, XPD-16, XPD-17, XPD-18, XPD-19, XPD-20, XPD-21, XPD-22, XPD-23, XPD-24, XPD-25, XPD-26, XPD-29, XPD-30, XPD-31, XPD-32, XPD-36 | XPD-27, XPD-28, XPD-33, XPD-34, XPD-35 | XPD-37, XPD-38 |
| XPD-13 — Data / observation regime | XPD-14, XPD-15, XPD-16, XPD-17, XPD-18, XPD-19, XPD-20, XPD-21, XPD-22, XPD-23, XPD-24, XPD-25, XPD-26, XPD-29, XPD-30, XPD-31, XPD-32, XPD-36 | XPD-27, XPD-28, XPD-33, XPD-34, XPD-35 | XPD-37, XPD-38 |
| XPD-14 — Computational task / scientific objective | XPD-15, XPD-16, XPD-17, XPD-18, XPD-19, XPD-20, XPD-21, XPD-22, XPD-23, XPD-24, XPD-25, XPD-26, XPD-29, XPD-30, XPD-31, XPD-32, XPD-36 | XPD-27, XPD-28, XPD-33, XPD-34, XPD-35 | XPD-37, XPD-38 |
| XPD-15 — PINN problem / challenge addressed | XPD-16, XPD-17, XPD-18, XPD-19, XPD-20, XPD-21, XPD-22, XPD-23, XPD-24, XPD-25, XPD-26, XPD-29, XPD-30, XPD-31, XPD-32, XPD-36 | XPD-27, XPD-28, XPD-33, XPD-34, XPD-35 | XPD-37, XPD-38 |
| XPD-16 — PINN type / family | XPD-17, XPD-18, XPD-19, XPD-20, XPD-21, XPD-22, XPD-23, XPD-24, XPD-25, XPD-26, XPD-27, XPD-28, XPD-29, XPD-30, XPD-31, XPD-32, XPD-36 | XPD-33, XPD-34, XPD-35 | XPD-37, XPD-38 |
| XPD-17 — Methodology | XPD-18, XPD-19, XPD-20, XPD-21, XPD-22, XPD-23, XPD-24, XPD-25, XPD-26, XPD-27, XPD-28, XPD-29, XPD-30, XPD-31, XPD-32, XPD-36 | XPD-33, XPD-34, XPD-35 | XPD-37, XPD-38 |
| XPD-18 — Contribution / innovation | XPD-19, XPD-20, XPD-21, XPD-22, XPD-23, XPD-24, XPD-25, XPD-26, XPD-29, XPD-30, XPD-31, XPD-32, XPD-36 | XPD-27, XPD-28, XPD-33, XPD-34, XPD-35 | XPD-37, XPD-38 |
| XPD-19 — Claim vs demonstration | XPD-20, XPD-21, XPD-22, XPD-23, XPD-24, XPD-25, XPD-26, XPD-29, XPD-30, XPD-31, XPD-32, XPD-33, XPD-34, XPD-35, XPD-36 | XPD-27, XPD-28 | XPD-37, XPD-38 |
| XPD-20 — Generality / transfer scope | XPD-21, XPD-22, XPD-23, XPD-24, XPD-25, XPD-26, XPD-29, XPD-30, XPD-31, XPD-32, XPD-33, XPD-34, XPD-35, XPD-36 | XPD-27, XPD-28 | XPD-37, XPD-38 |
| XPD-21 — Outcome / degree of resolution | XPD-22, XPD-23, XPD-24, XPD-25, XPD-26, XPD-29, XPD-30, XPD-31, XPD-32, XPD-36 | XPD-27, XPD-28, XPD-33, XPD-34, XPD-35 | XPD-37, XPD-38 |
| XPD-22 — Reported advantage / disadvantage / failure | XPD-23, XPD-24, XPD-25, XPD-26, XPD-29, XPD-30, XPD-31, XPD-32, XPD-36 | XPD-27, XPD-28, XPD-33, XPD-34, XPD-35 | XPD-37, XPD-38 |
| XPD-23 — Validation strategy | XPD-24, XPD-25, XPD-26, XPD-27, XPD-28, XPD-29, XPD-30, XPD-31, XPD-32, XPD-36 | XPD-33, XPD-34, XPD-35 | XPD-37, XPD-38 |
| XPD-24 — Validation reference / data / baseline | XPD-25, XPD-26, XPD-27, XPD-28, XPD-29, XPD-30, XPD-31, XPD-32, XPD-36 | XPD-33, XPD-34, XPD-35 | XPD-37, XPD-38 |
| XPD-25 — Evaluation metric | XPD-26, XPD-27, XPD-28, XPD-29, XPD-30, XPD-31, XPD-32, XPD-36 | XPD-33, XPD-34, XPD-35 | XPD-37, XPD-38 |
| XPD-26 — Evaluation result / test case | XPD-27, XPD-28, XPD-29, XPD-30, XPD-31, XPD-32, XPD-36 | XPD-33, XPD-34, XPD-35 | XPD-37, XPD-38 |
| XPD-27 — Reproducibility availability | XPD-28, XPD-29, XPD-30, XPD-31, XPD-32, XPD-36 | XPD-33, XPD-34, XPD-35 | — |
| XPD-28 — Reproducibility reporting / computational context | XPD-29, XPD-30, XPD-31, XPD-32, XPD-36 | XPD-33, XPD-34, XPD-35 | — |
| XPD-29 — Limitation | XPD-30, XPD-31, XPD-32, XPD-36 | XPD-33, XPD-34, XPD-35 | XPD-37, XPD-38 |
| XPD-30 — Open problem | XPD-31, XPD-32, XPD-36 | XPD-33, XPD-34, XPD-35 | XPD-37, XPD-38 |
| XPD-31 — Future work | XPD-32, XPD-36 | XPD-33, XPD-34, XPD-35 | XPD-37, XPD-38 |
| XPD-32 — Failure / diagnostic pathway | XPD-36 | XPD-33, XPD-34, XPD-35 | XPD-37, XPD-38 |
| XPD-33 — Evidence provenance / source role | XPD-34, XPD-35 | XPD-36 | XPD-37, XPD-38 |
| XPD-34 — Evidence verification / support / strength | XPD-35 | XPD-36 | XPD-37, XPD-38 |
| XPD-35 — Contradiction / mismatch / ambiguity | — | XPD-36 | XPD-37, XPD-38 |
| XPD-36 — Typed scientific relationship | — | — | XPD-37, XPD-38 |
| XPD-37 — Atlas research gap | — | — | XPD-38 |
| XPD-38 — Atlas research opportunity | — | — | — |

## 7. Residual 36 pairs reserved for Task 6.5

The following pairs are not authorized by Task 6.4 and are intentionally left unclassified rather than being called invalid prematurely:

1. `XPD-01 × XPD-37`, `XPD-01 × XPD-38`;
2. `XPD-02 × XPD-37`, `XPD-02 × XPD-38`;
3. `XPD-03 × XPD-37`, `XPD-03 × XPD-38`;
4. `XPD-04 × XPD-19`, `XPD-04 × XPD-20`, `XPD-04 × XPD-22`, `XPD-04 × XPD-24`, `XPD-04 × XPD-26`, `XPD-04 × XPD-32`, `XPD-04 × XPD-37`, `XPD-04 × XPD-38`;
5. `XPD-05 × XPD-19`, `XPD-05 × XPD-20`, `XPD-05 × XPD-22`, `XPD-05 × XPD-24`, `XPD-05 × XPD-26`, `XPD-05 × XPD-32`, `XPD-05 × XPD-37`, `XPD-05 × XPD-38`;
6. `XPD-06 × XPD-19`, `XPD-06 × XPD-20`, `XPD-06 × XPD-22`, `XPD-06 × XPD-24`, `XPD-06 × XPD-26`, `XPD-06 × XPD-32`, `XPD-06 × XPD-37`, `XPD-06 × XPD-38`;
7. `XPD-07 × XPD-37`, `XPD-07 × XPD-38`;
8. `XPD-27 × XPD-37`, `XPD-27 × XPD-38`;
9. `XPD-28 × XPD-37`, `XPD-28 × XPD-38`.

Task 6.5 must decide whether each residual pair is scientifically invalid, misleading by default, conditionally recoverable under a narrower relation, or simply redundant with a better governed path. Task 6.4 makes no such determination.

## 8. High-risk pair rules

### 8.1 `XPD-17 Methodology`

Any comparison containing `XPD-17` must select an actual governed child owner (`MDC`, `LIT`, `LP`, `MRF`, or Task-5.4-dispositioned `EX` projection) before scientific counts are produced. The parent `XPD-17` cannot be treated as one categorical variable, and no pooled methodology frequency is allowed.

### 8.2 `XPD-25` / `XPD-26`

Metric identity and metric result remain distinct. Comparisons involving result magnitudes require matched metric/test-case semantics. A comparison can remain descriptive at paper/occurrence level even when quantitative result pooling is disallowed.

### 8.3 `XPD-19` / `XPD-20`

Claim, demonstration and generality evidence remain scoped. A paper-level co-occurrence cannot establish that a particular method produced a claimed result unless the records are explicitly linked to the same experiment/problem context.

### 8.4 `XPD-04` / `XPD-05` / `XPD-06`

Geographic, institutional and collaboration analyses are bibliographic/contextual. They may describe corpus distribution but cannot rank countries, institutions or collaboration structures by scientific quality, validity or methodological superiority.

### 8.5 `XPD-33` / `XPD-34` / `XPD-35`

Evidence overlays are interpretive integrity analyses. Verification status is not semantic support; support is not statement strength; conflict absence is not consensus; evidence-object frequency is not independent scientific support.

### 8.6 `XPD-36`

A relation-context comparison requires explicit relation instances. It cannot infer a scientific relation from the same paper containing two values.

### 8.7 `XPD-37` / `XPD-38`

All approved Task-6.4 comparisons containing a Level-7 dimension have `L7` status. They are read-only contextual projections over governed curated objects. No comparison result can itself create, promote or validate an official gap/opportunity.

## 9. Interpretation contract

Task 6.4 authorizes **descriptive and evidence-qualified comparative analysis**, not automatic inferential statistics.

Unless a later governed analysis explicitly establishes the required statistical design:

- association ≠ causality;
- frequency ≠ importance or evidence strength;
- prevalence difference ≠ performance difference;
- network centrality ≠ scientific influence or quality;
- temporal increase ≠ methodological progress;
- co-occurrence ≠ typed relation;
- observed evaluation difference ≠ general superiority;
- missing evidence ≠ negative evidence.

Effect-size estimation, causal inference, meta-analysis and inferential significance testing are not authorized merely because a pair appears in the Task 6.4 map.

## 10. Comparison output minimum

Every executed cross-dimensional analysis must expose:

1. selected pair and comparison mode;
2. scientific owners for both XPDs;
3. join path and analytical unit;
4. numerator and denominator(s);
5. eligibility/missingness rules;
6. selected scope and context restrictions;
7. unique-paper count when different from the principal unit;
8. evidence/provenance drill-down;
9. contradiction/integrity state where applicable;
10. ontology/normalization versions;
11. warnings required by the participating dimensions/mode;
12. qualified export preserving all of the above metadata.

## 11. Acceptance result

Task 6.4 passes because:

- the complete 703 unordered-pair universe has been accounted for;
- **667** scientifically meaningful comparison choices are mapped;
- those 667 choices are partitioned without overlap into **347 `D` + 265 `C` + 55 `L7`**;
- the remaining **36** pairs are explicitly reserved for Task 6.5 rather than silently treated as allowed or invalid;
- nine comparison modes and their scientific prerequisites are defined;
- unit, join, denominator, N:M multiplicity, evidence, recurrence and Level-7 boundaries are explicit;
- high-risk methodology, evaluation, geographic/network, evidence, relation and Level-7 comparisons have dedicated safeguards;
- no Task 6.5 invalid-combination decision has been made;
- no Task 6.6 machine-readable comparison map has been created;
- no Task 6.7 final comparison UI/route has been designed;
- locked v0.7, canonical ontology, paper assignments, official Level-7 objects, production `main` and Computational Resources Stage data remain unchanged.

## 12. Stop boundary

**Task 6.4 — PASS / COMPLETE. Task 6 remains IN PROGRESS. Task 6.5 has not started.**

Exact next substantive action, only when separately authorized:

**Task 6.5 — define invalid or misleading cross-dimensional combinations and operations explicitly, using the full Task 6.4 pair universe and comparison-mode guards without weakening any Task 1–6.4 scientific invariant.**
