# Computational Resources Stage 3 Progress

Date: 2026-09-08
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S126`
- Latest completed resource: `CR000141`
- Latest completed aggregate batch: `SOB013` — **PASS (10/10)**
- Current batch: `SOB014` — **4/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000142`
- Exact next checkpoint: `Stage3-S127`

## Cumulative counts through S126

- Resources: **144**
- Experiments: **233**
- Configurations: **432**
- Technical-evidence records: **1648**
- Reproducibility assessments: **144**
- Unresolved findings: **920**
- Explicit conflicts: **114**
- Independently extractable resources remaining: **219**

## S126

CR000141 records Mish as supporting activation software, preserving its Stage-2 SHA and relationship. A representative CIFAR ResNet20 sweep remains distinct from the library wrappers and linked notebook. Missing dependency coverage, source-specific implementation gaps and benchmark limitations are explicit; reproducibility is R1.

No scientific workload was executed.

## Reconciled baseline

The count-neutral [Stage3-RC02 reconciliation](stage-3-cumulative-reconciliation-2026-09-08.md) remains authoritative for repaired pre-S123 metadata and reproducibility assessments. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S127` at `CR000142` after published-head and checkpoint-QA readback.
