# Computational Resources Stage 3 Quality Report

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current status

- Latest completed checkpoint: `Stage3-S236`
- Latest checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC07` — **PASS (count-neutral)**
- Latest completed aggregate batch: `SOB026` — **PASS (10/10)**
- Current aggregate batch: `SOB027` — **6/10**
- Schema drift: **none detected**
- Methodology drift: **none detected**
- Stage-boundary violations: **none detected**
- Scientific execution: **none performed**
- R5 records: **0**

## Cumulative counts

| Item | Count |
|---|---:|
| Resources | 276 |
| Experiments | 368 |
| Configurations | 649 |
| Technical evidence | 2757 |
| Reproducibility assessments | 276 |
| Unresolved findings | 1576 |
| Explicit conflicts | 146 |

## Latest checkpoint QA — Stage3-S236

| Gate | Result |
|---|---|
| Schema validation | PASS |
| Cumulative ID uniqueness | PASS |
| Evidence-reference integrity | PASS |
| Resource → experiment → configuration cross-references | PASS |
| Evidence-use completeness | PASS |
| Stage-2 authority resolution | PASS |
| Source-scope discipline | PASS |
| Missing-value semantics | PASS |
| Inference labeling | PASS |
| Reproducibility classification | PASS |
| R5 exclusion | PASS |
| Repository-scope safety | PASS |
| Stage-1 / Stage-2 / public-Atlas / curated / methodology / schema boundaries | PASS |
| Static-execution boundary | PASS |
| Provenance-text screening | PASS |
| Branch-head stability before publication | PASS |

S236 adds CR000278 and CR000279 as bounded dataset/web-resource records. CR000278 retains unresolved current item-level access and licence/citation semantics at R1. CR000279 preserves the official GLORYS12V1 product identity, DOI and custom Copernicus Marine service terms at R2. No new explicit conflict is introduced.

## Aggregate status

`SOB026` remains **PASS (10/10)**. `SOB027` now contains six independently extractable resources and therefore does not yet require aggregate closure QA.
