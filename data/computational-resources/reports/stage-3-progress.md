# Computational Resources Stage 3 Progress

Date: 2026-09-08  
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S120`
- Latest completed resource: `CR000135`
- Latest completed aggregate batch: `SOB012` — **PASS (10/10)**
- Current batch: `SOB013` — **8/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000136`
- Exact next checkpoint: `Stage3-S121`

## Cumulative counts through S120

- Resources: **138**
- Experiments: **224**
- Configurations: **421**
- Technical-evidence records: **1567**
- Reproducibility assessments: **138**
- Unresolved findings: **876**
- Explicit conflicts: **112**
- Independently extractable resources remaining: **225**

## S120

`Stage3-S120` records `CR000135` (`gitvicky/Loss_Landscape_PINNs`) at Stage-2 pinned SHA `32a18408be070c8b39057d0c9220a74bda6a4f82`, preserving MIT licensing and the verified `PRL000261 → Atlas 741` official relationship.

The repository studies PINN optimization through sparse/coarse data regulation of the loss landscape and contains Burgers, Navier-Stokes block-flow and wave-equation surfaces, paired Original/Reprod code, trained models and loss-surface arrays. Its archived Code Ocean environment and master run entrypoint identify the Burgers vanilla-versus-1%-sparse workflow as a bounded representative extraction. The source supplies pinned software versions, seed control and explicit hyperparameters; broader experiment invocation and exact acceptance thresholds remain incomplete, so CR000135 is **R2**.

No scientific workload was executed.

## Batch status

`SOB012` remains **PASS (10/10)**. `SOB013` is **8/10**; aggregate QA is not yet due.

## Continuation

Continue with `Stage3-S121` at `CR000136`.
