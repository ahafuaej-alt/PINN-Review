# Computational Resources Stage 3 — Quality Report

**Stage:** 3 — deep static technical/scientific extraction  
**Methodology:** Stage3-D01 accepted without modification  
**Current checkpoint:** `Stage3-S072`  
**Checkpoint status:** PASS  
**Current batch:** `SOB008` — 7/10  
**Latest aggregate QA:** `SOB007` PASS  

## S072 QA result

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

| Measure | S072 | Cumulative |
|---|---:|---:|
| Resources | 1 | 87 |
| Experiments | 1 | 151 |
| Configurations | 1 | 313 |
| Technical evidence | 12 | 1134 |
| Reproducibility assessments | 1 | 87 |
| Unresolved findings | 8 | 566 |
| Explicit conflicts | 0 | 97 |

## Scientific QA notes

CR000082 is represented as `non_pinn_research_code`, preserving supervised FVMN training semantics while separately representing finite-difference physics-residual monitoring during rollout. The single experiment maps architecture, preprocessing, training, bundled arrays, prediction boundary reinsertion, residual calculations and stopping logic to pinned static evidence.

R3 satisfies Stage3-D01 because environment/install/use-path information, required data/configuration and training/use instructions are substantially available. R4 remains blocked by absent canonical checkpoints/expected-result targets and the explicit heat-residual formula review marker.

No explicit conflict is manufactured from README “dummy input” wording; it is retained as a provenance limitation.

## Batch state

`SOB008` is **7 / 10**. Aggregate QA is not due; latest completed aggregate QA remains `SOB007` PASS.

## Continuation gate

**PASS.** Continue at `CR000083` in `Stage3-S073` under unchanged Stage3-D01 methodology and schemas.
