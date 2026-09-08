# Computational Resources Stage 3 Progress

Date: 2026-09-08
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S130`
- Latest completed resource: `CR000147`
- Latest completed aggregate batch: `SOB014` — **PASS (10/10)**
- Current batch: `SOB015` — **0/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000148`
- Exact next checkpoint: `Stage3-S131`

## Cumulative counts through S130

- Resources: **150**
- Experiments: **237**
- Configurations: **436**
- Technical-evidence records: **1691**
- Reproducibility assessments: **150**
- Unresolved findings: **950**
- Explicit conflicts: **115**
- Independently extractable resources remaining: **213**

## S130

CR000146 preserves the pinned improved-PINN fluid-dynamics repository, its official Atlas-779 relationship, and the Stage-2 verified-negative Atlas-810 correction to distinct CR000151. The bounded representative Beltrami workflow implements Navier–Stokes/continuity residuals with adaptive loss terms and pre-generated adaptive sampling artifacts. The source is detailed and releases trained models/results, but lacks a dependency manifest and contains CUDA/user-path coupling; static reproducibility is **R1**.

CR000147 preserves the GAN-PI repository and verified Atlas-787 paper-resource relationship. The bounded representative Buckley–Leverett workflow uses a physics-informed generator/discriminator formulation, bundled reference data, and released TensorFlow checkpoints. Exact environment/version and installation requirements are not fixed; static reproducibility is **R1**.

No scientific workload was executed.

## Reconciled baseline

The count-neutral [Stage3-RC02 reconciliation](stage-3-cumulative-reconciliation-2026-09-08.md) remains authoritative for repaired pre-S123 metadata and reproducibility assessments. Accepted methodology and schemas are unchanged.

## Batch status

`SOB014` is **PASS (10/10)** and contains exactly `CR000138–CR000147`. `SOB015` begins at `CR000148`.

## Continuation

Continue with `Stage3-S131` at `CR000148` after published-head and checkpoint-QA readback.
