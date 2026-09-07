# Computational Resources Stage 3 Progress

Date: 2026-09-08  
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S118`
- Latest completed resource: `CR000133`
- Latest completed aggregate batch: `SOB012` — **PASS (10/10)**
- Current batch: `SOB013` — **6/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000134`
- Exact next checkpoint: `Stage3-S119`

## Cumulative counts through S118

- Resources: **136**
- Experiments: **221**
- Configurations: **418**
- Technical-evidence records: **1548**
- Reproducibility assessments: **136**
- Unresolved findings: **865**
- Explicit conflicts: **111**
- Independently extractable resources remaining: **227**

## S118

`Stage3-S118` records `CR000133` (`YuxiangGao0321/Cell-based-MLP`) at Stage-2 pinned SHA `7a2c42ead08441293a918f259657ca01f3287e27`, preserving MIT licensing and verified `PRL000258 → Atlas 736`.

The pinned repository implements physics-informed cell representations using multilevel multiresolution grids coupled to an MLP, variational/energy losses, automatic differentiation, and PyTorch/tiny-cuda-nn infrastructure across a broad PDE suite. One representative high-frequency Poisson workflow is extracted; other PDE families remain resource-scoped. Environment setup is explicitly incomplete at the pinned README, so CR000133 is conservatively **R1**.

No scientific workload was executed.

## Batch status

`SOB012` remains **PASS (10/10)**. `SOB013` is **6/10**; aggregate QA is not yet due.

## Continuation

Continue with `Stage3-S119` at `CR000134`.
