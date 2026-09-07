# Computational Resources Stage 3 Progress

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S114`.
- Latest completed canonical batch: `SOB012` — **PASS**.
- Current canonical batch: `SOB013`.
- Current batch status: **2/10 independently extractable members complete**.
- Latest completed resource: `CR000129`.
- Checkpoint QA: **PASS**.
- Exact next independently extractable resource: `CR000130`.
- Next checkpoint: `Stage3-S115`.
- Pilot-complete resources remain excluded and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **132**
- Experiments: **217**
- Configurations: **414**
- Technical-evidence records: **1515**
- Static reproducibility assessments: **132**
- Unresolved findings: **840**
- Explicit conflicts: **110**
- Independently extractable resources remaining: **231**

## Latest checkpoint

`Stage3-S114` completed `CR000129`. Final Stage-2 authority preserves the pinned `mroberto166/PinnsSub` SHA `383c490d2e44ab707ce628743eb408c27ba7c86f` and verified official `PRL000254 → Atlas 723` relationship. The pinned source is a classical PDE-residual PINN platform implementing heat, L-shaped Poisson, radiative-transfer, Poisson data-assimilation inverse, and one-dimensional eigenvalue problem families.

The source-explicit default HeatEquation workflow is represented with one experiment and one configuration. It uses an MLP, automatic-differentiation PDE residual, boundary/initial-condition losses, LBFGS/Adam training surfaces, pinned Python dependencies, explicit seeds, and L2/relative-L2 evaluation. A conflict is preserved between the default configuration's `point=sobol` setting and HeatEquation's direct linspace/Cartesian point construction. CR000129 is assessed at R2. No scientific workload was executed.

## Batch status

`SOB012` remains **PASS (10/10)**. `SOB013` now contains `CR000128` and `CR000129` and is **2/10**.

## Continuation

Resume only from `CR000130` for `Stage3-S115`.
