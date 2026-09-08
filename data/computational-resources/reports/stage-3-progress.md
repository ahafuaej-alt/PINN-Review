# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S149`
- Latest completed resource: `CR000167`
- Latest completed aggregate batch: `SOB015` — **PASS (10/10)**
- Current batch: `SOB016` — **9/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000168`
- Exact next checkpoint: `Stage3-S150`

## Cumulative counts through S149

- Resources: **169**
- Experiments: **255**
- Configurations: **454**
- Technical-evidence records: **1870**
- Reproducibility assessments: **169**
- Unresolved findings: **1051**
- Explicit conflicts: **120**
- Independently extractable resources remaining: **194**

## S149

CR000167 preserves the pinned generic non-PINN ChebyKAN software identity and its paper-software-mention relationship. Static inspection identifies optimized and recurrent Chebyshev layers plus MNIST and interpolation examples. Unpinned dependencies/data and the author's explicit not-fully-tested correctness warning keep static reproducibility at **R1**.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S150` at `CR000168` after published-head and checkpoint-QA readback.
