# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S143`
- Latest completed resource: `CR000160`
- Latest completed aggregate batch: `SOB015` — **PASS (10/10)**
- Current batch: `SOB016` — **3/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000161`
- Exact next checkpoint: `Stage3-S144`

## Cumulative counts through S143

- Resources: **163**
- Experiments: **254**
- Configurations: **453**
- Technical-evidence records: **1823**
- Reproducibility assessments: **163**
- Unresolved findings: **1021**
- Explicit conflicts: **118**
- Independently extractable resources remaining: **200**

## S143

CR000160 preserves the Stage-2 pinned GitLab source, official Atlas-836 relationship, no-license finding and external Zenodo boundary. Bounded static extraction separates the NC-PINN active-tension workflow from the sequential NC+EIK-PINN excitation workflow. The pinned environment and explicit configurations support **R3**; the unopened archive, missing platform specification, output-directory conflict and absent acceptance thresholds block R4.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S144` at `CR000161` after published-head and checkpoint-QA readback.
