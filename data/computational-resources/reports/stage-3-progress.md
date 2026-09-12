# Computational Resources Stage 3 Progress

Date: 2026-09-12
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S218`
- Latest completed resource: `CR000252`
- Latest completed aggregate batch: `SOB024` — **PASS (10/10)**
- Current batch: `SOB025` — **0/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC07` — **PASS**
- Exact next independently extractable resource: `CR000253`
- Exact next checkpoint: `Stage3-S219`

## Cumulative counts through S218 / RC07

- Resources: **250**
- Experiments: **340**
- Configurations: **617**
- Technical-evidence records: **2569**
- Reproducibility assessments: **250**
- Unresolved findings: **1389**
- Explicit conflicts: **146**
- Independently extractable resources remaining: **113**

## S218

`CR000252` preserves the live UMass Lowell project-page identity and `PRL000288`. Static inspection of its linked official archive yields one Office domain-adaptation benchmark workflow and eight explicit MATLAB configurations. The archive documents an MIT license, MATLAB R2009b/Linux use and an entrypoint, while external dataset, portability, seed and complete expected-result gaps bound the assessment at `R2`.

## Aggregate batch QA

`SOB024` completed mandatory aggregate QA at **10/10 — PASS**. `SOB025` is now **0/10**.

## Continuation

Stage3-RC02 through Stage3-RC07 remain authoritative and count-neutral for their accepted scopes. RC07 normalizes 58 enum-invalid values in 35 records from S183–S202 without changing counts or scientific facts.

Continue with `Stage3-S219` at `CR000253`.
