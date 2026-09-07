# Computational Resources Stage 3 Progress

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S113`.
- Latest completed canonical batch: `SOB012` — **PASS**.
- Current canonical batch: `SOB013`.
- Current batch status: **1/10 independently extractable members complete**.
- Latest completed resource: `CR000128`.
- Checkpoint QA: **PASS**.
- Exact next independently extractable resource: `CR000129`.
- Next checkpoint: `Stage3-S114`.
- Pilot-complete resources remain excluded and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **131**
- Experiments: **216**
- Configurations: **413**
- Technical-evidence records: **1505**
- Static reproducibility assessments: **131**
- Unresolved findings: **835**
- Explicit conflicts: **109**
- Independently extractable resources remaining: **232**

## Latest checkpoint

`Stage3-S113` completed `CR000128`. Final Stage-2 authority preserves `https://github.com/power-grid-lib/pgl` as an unavailable repository with no authoritative pinned SHA. `PRL000250` to Atlas 721 remains a `secondary_review_mention` with `relationship_status=not_verified`; the review mentions Power Grid Lib as a benchmark concept but does not establish the unavailable generic `pgl` repository as the specific resource.

The GitHub repository remains unavailable. No source-internal method, experiment, configuration, environment, dataset, training, evaluation, or checkpoint facts were manufactured. CR000128 is assessed at R0. No scientific software, model, dataset, training, inference, evaluation, test, environment, dependency, container, accelerator, or benchmark workload was executed.

## Batch status

`SOB012` remains **PASS (10/10)**. `SOB013` now contains `CR000128` and is **1/10**.

## Continuation

Resume only from `CR000129` for `Stage3-S114`.
