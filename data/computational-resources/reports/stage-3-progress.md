# Computational Resources Stage 3 Progress

Date: 2026-09-08
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S124`
- Latest completed resource: `CR000139`
- Latest completed aggregate batch: `SOB013` — **PASS (10/10)**
- Current batch: `SOB014` — **2/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000140`
- Exact next checkpoint: `Stage3-S125`

## Cumulative counts through S124

- Resources: **142**
- Experiments: **230**
- Configurations: **428**
- Technical-evidence records: **1617**
- Reproducibility assessments: **142**
- Unresolved findings: **904**
- Explicit conflicts: **114**
- Independently extractable resources remaining: **221**

## S124

CR000139 records the periodic Burgers PhyCRNet implementation at the retained Stage-2 SHA. The active checkpoint continuation and README curriculum are separate configurations. Missing installation instructions and resume checkpoint limit reproducibility to R1; generator/input data paths are preserved as an explicit conflict.

No scientific workload was executed.

## Reconciled baseline

The count-neutral [Stage3-RC02 reconciliation](stage-3-cumulative-reconciliation-2026-09-08.md) remains authoritative for repaired pre-S123 metadata and reproducibility assessments. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S125` at `CR000140` after published-head and checkpoint-QA readback.
