# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S147`
- Latest completed resource: `CR000165`
- Latest completed aggregate batch: `SOB015` — **PASS (10/10)**
- Current batch: `SOB016` — **7/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000166`
- Exact next checkpoint: `Stage3-S148`

## Cumulative counts through S147

- Resources: **167**
- Experiments: **255**
- Configurations: **454**
- Technical-evidence records: **1853**
- Reproducibility assessments: **167**
- Unresolved findings: **1040**
- Explicit conflicts: **120**
- Independently extractable resources remaining: **196**

## S147

CR000165 preserves the pinned official non-PINN research-code identity for time-varying autoregressive models. Static inspection identifies generalized-additive, one-sided-kernel and traditional VAR methods, four stochastic simulation scenarios, and a rolling finance workflow. Absent environment, installation, invocation and seed controls keep static reproducibility at **R1**.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S148` at `CR000166` after published-head and checkpoint-QA readback.
