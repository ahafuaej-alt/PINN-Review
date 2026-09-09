# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S169`
- Latest completed resource: `CR000189`
- Latest completed aggregate batch: `SOB018` — **PASS (10/10)**
- Current batch: `SOB019` — **1/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000190`
- Exact next checkpoint: `Stage3-S170`

## Cumulative counts through S169

- Resources: **191**
- Experiments: **276**
- Configurations: **491**
- Technical-evidence records: **2095**
- Reproducibility assessments: **191**
- Unresolved findings: **1168**
- Explicit conflicts: **131**
- Independently extractable resources remaining: **172**

## S169

CR000189 preserves the Stage-2-authoritative `wanghui589/FENet` repository at pinned SHA `df6b10a27f717ae59e130557f9fcc9cd40391290`, its MIT license, non-PINN classification, paper title and no-Atlas-relationship boundary.

The complete pinned tree contains only `README.md`, `LICENSE`, and `environment.yml`. No source, model, data, entrypoint, experiment or configuration is invented. The static level is **R1**. Four discrepancies remain explicit: present/future artifact claims versus the empty artifact surface, FENet versus BioMime environment identity, Python 3.7.11 versus 3.7.16, and mixed CUDA/ROCm PyTorch package builds. SOB019 opens at 1/10.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S170` at `CR000190` after published-head and checkpoint-QA readback.
