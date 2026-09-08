# Computational Resources Stage 3 Progress

Date: 2026-09-08
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S127`
- Latest completed resource: `CR000143`
- Latest completed aggregate batch: `SOB013` — **PASS (10/10)**
- Current batch: `SOB014` — **6/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000144`
- Exact next checkpoint: `Stage3-S128`

## Cumulative counts through S127

- Resources: **146**
- Experiments: **235**
- Configurations: **434**
- Technical-evidence records: **1663**
- Reproducibility assessments: **146**
- Unresolved findings: **930**
- Explicit conflicts: **114**
- Independently extractable resources remaining: **217**

## S127

CR000142 preserves the corrected AdaAFforPINNs identity, pinned Stage-2 SHA and verified Atlas-766 relationship. Static source inspection records one representative convection activation-search experiment with paired configurations that differ by adaptive-slope use. Installation, bundled benchmark inputs, run commands, seeds, hyperparameters and evaluation metrics support **R3**; portability and expected-output gaps block R4.

CR000143 preserves the official Atlas-774 relationship from the publisher Code Availability statement. Its pinned repository contains only README.md, so AW-PINN/GradNorm, VIV physics and evaluation claims remain explicitly primary-paper scoped rather than manufactured repository implementation. Repository reproducibility is **R1**.

No scientific workload was executed.

## Reconciled baseline

The count-neutral [Stage3-RC02 reconciliation](stage-3-cumulative-reconciliation-2026-09-08.md) remains authoritative for repaired pre-S123 metadata and reproducibility assessments. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S128` at `CR000144` after published-head and checkpoint-QA readback.
