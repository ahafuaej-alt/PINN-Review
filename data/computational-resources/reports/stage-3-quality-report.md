# Computational Resources Stage 3 Quality Report

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current status

- Latest completed checkpoint: `Stage3-S237`
- Latest checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC08` — **PASS (count-neutral report-state continuity repair)**
- Latest completed aggregate batch: `SOB026` — **PASS (10/10)**
- Current aggregate batch: `SOB027` — **7/10**
- Schema drift: **none detected**
- Methodology drift: **none detected**
- Stage-boundary violations: **none detected**
- Scientific execution: **none performed**
- R5 records: **0**

## Cumulative counts

| Item | Count |
|---|---:|
| Resources | 277 |
| Experiments | 343 |
| Configurations | 622 |
| Technical evidence | 2763 |
| Reproducibility assessments | 277 |
| Unresolved findings | 1437 |
| Explicit conflicts | 147 |

## RC08 validation

RC08 reconciles report state from the accepted S232 cumulative baseline and the published S233–S237 checkpoint deltas. S233 is the last checkpoint in this sequence carrying complete cumulative counts and records 271 resources, 343 experiments, 622 configurations, 2728 technical-evidence records, 271 reproducibility assessments, 1431 unresolved findings and 147 conflicts. S234–S237 add six resources, no experiments/configurations, 35 technical-evidence rows, six reproducibility assessments and six unresolved findings, with no new conflicts.

The resulting cumulative state is therefore 277 / 343 / 622 / 2763 / 277 / 1437 / 147. The prior report values 368 experiments, 649 configurations, 1577 unresolved findings and 146 conflicts were not supported by the published checkpoint deltas and are superseded. Scientific record files and historical checkpoint QA remain unchanged.

## Latest checkpoint QA — Stage3-S237

All required gates remain PASS: schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, evidence-use completeness, Stage-2 authority resolution, source-scope discipline, missing-value semantics, inference labeling, reproducibility classification, R5 exclusion, repository-scope safety, protected write boundaries, static-execution boundary, provenance-text screening, and branch-head stability.

## Aggregate status

`SOB026` remains **PASS (10/10)**. `SOB027` remains **7/10** and does not yet require aggregate closure QA.
