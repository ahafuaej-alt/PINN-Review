# Computational Resources Stage 3 Progress

Date: 2026-09-10
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S175`
- Latest completed resource: `CR000197`
- Latest completed aggregate batch: `SOB018` — **PASS (10/10)**
- Current batch: `SOB019` — **8/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC04` — **PASS (count-neutral CR000191 duplicate skip)**
- Exact next independently extractable resource: `CR000198`
- Exact next checkpoint: `Stage3-S176`

## Cumulative counts through S175 / RC04

- Resources: **198**
- Experiments: **288**
- Configurations: **509**
- Technical-evidence records: **2152**
- Reproducibility assessments: **198**
- Unresolved findings: **1199**
- Explicit conflicts: **137**
- Independently extractable resources remaining: **165**

## S175

CR000197 preserves the Stage-2-authoritative `maziarraissi/DeepHPMs` repository pinned at `7b579dbdcf5be4969ebefd32e65f709a8b20ec44`, MIT licensed, with project citation metadata for *Deep Hidden Physics Models: Deep Learning of Nonlinear Partial Differential Equations* and no inferred Atlas-paper relationship. The pinned repository implements data-driven hidden-physics discovery and learned-equation solution across Burgers, KdV, Kuramoto-Sivashinsky, nonlinear Schrodinger and Navier-Stokes families.

Five equation families are mapped as experiments and nine source-level workflows as configurations, preserving same/different-data transfer variants and the standard/chaotic KS distinction. The resource receives **R1**: source, bundled data, mathematics, architecture, training and result documentation are substantial, but there is no formal dependency manifest, pinned environment, installation procedure or reusable checkpoint. No scientific workload was executed.

## Reconciled baseline

Stage3-RC02, Stage3-RC03 and Stage3-RC04 remain authoritative for their accepted scopes. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S176` at `CR000198` after published-head and checkpoint-QA readback.
