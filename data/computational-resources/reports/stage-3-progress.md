# Computational Resources Stage 3 Progress

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S116`
- Latest completed resource: `CR000131`
- Latest completed aggregate batch: `SOB012` — **PASS (10/10)**
- Current batch: `SOB013` — **4/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000132`
- Exact next checkpoint: `Stage3-S117`

## Cumulative counts through S116

- Resources: **134**
- Experiments: **219**
- Configurations: **416**
- Technical-evidence records: **1532**
- Reproducibility assessments: **134**
- Unresolved findings: **853**
- Explicit conflicts: **111**
- Independently extractable resources remaining: **229**

## S116

`Stage3-S116` records `CR000131` (`TamaraGrossmann/FEM-vs-PINNs`) at Stage-2 pinned SHA `f295ec6bb4b746e0029bff5b5f512fb949603256`, preserving verified `PRL000256 → Atlas 728`.

The repository systematically pairs FEM and PINN implementations across six PDE problem families. Representative 1D Poisson is extracted as one bounded experiment/configuration; the wider problem suite remains at resource scope. A consequential source contradiction is preserved: the PINN script states JAX 0.2.24 is installed while calling `jax.block_until_ready`, which the same source comment says requires JAX 0.2.27 or later. CR000131 is **R1**.

No scientific workload was executed.

## Batch status

`SOB012` remains **PASS (10/10)**. `SOB013` is **4/10**; aggregate QA is not yet due.

## Continuation

Continue with `Stage3-S117` at `CR000132`.
