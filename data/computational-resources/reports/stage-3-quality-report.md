# Computational Resources Stage 3 — Quality Report

**Stage:** 3 — deep static technical/scientific extraction  
**Methodology:** Stage3-D01 accepted without modification  
**Current checkpoint:** `Stage3-S074`  
**Checkpoint status:** PASS  
**Current batch:** `SOB008` — 9/10  
**Latest aggregate QA:** `SOB007` PASS  

## S074 QA result

| QA control | Result |
|---|---|
| Accepted Stage3-D01 methodology and schemas preserved | PASS |
| Final Stage-2 authority and pinned SHA resolved first | PASS |
| Static-only evidence boundary | PASS |
| All five Stage-3 schema validations | PASS |
| Cumulative identifier uniqueness | PASS |
| Evidence-reference integrity | PASS |
| Resource → experiment → configuration cross-references | PASS |
| Inference labeling and missing-value semantics | PASS |
| R0–R4 classification / R5 exclusion | PASS |
| Stage-1 / Stage-2 / public Atlas / `05-curated/` write safety | PASS |
| Pre-commit branch-head stability | PASS |
| Single-checkpoint boundary | PASS |

## Checkpoint counts

| Measure | S074 | Cumulative |
|---|---:|---:|
| Resources | 1 | 89 |
| Experiments | 0 | 152 |
| Configurations | 0 | 314 |
| Technical evidence | 6 | 1150 |
| Reproducibility assessments | 1 | 89 |
| Unresolved findings | 6 | 578 |
| Explicit conflicts | 0 | 97 |

## Scientific QA notes

CR000084 preserves the final Stage-2 official relationship to Atlas 593 and its immutable repository SHA. The complete pinned tree contains only `README.md`; therefore no experiment, configuration, training, architecture, mathematics, dataset or evaluation facts are manufactured from the paper title or repository name.

R0 is appropriate because repository identity and paper association are inspectable, but an executable scientific implementation is absent from the pinned snapshot. Missing values remain explicitly `not_available` rather than `false` where absence of evidence is the relevant semantics.

No explicit conflict is present.

## Batch state

`SOB008` is **9 / 10**. Aggregate QA is not yet due; latest completed aggregate QA remains `SOB007` PASS.

## Continuation gate

**PASS.** Continue at `CR000085` in `Stage3-S075` under unchanged Stage3-D01 methodology and schemas.
