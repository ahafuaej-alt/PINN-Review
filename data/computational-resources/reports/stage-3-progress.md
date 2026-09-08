# Computational Resources Stage 3 Progress

Date: 2026-09-08  
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S122`
- Latest completed resource: `CR000137`
- Latest completed aggregate batch: `SOB013` — **PASS (10/10)**
- Current batch: `SOB014` — **0/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000138`
- Exact next checkpoint: `Stage3-S123`

## Cumulative counts through S122

- Resources: **140**
- Experiments: **227**
- Configurations: **424**
- Technical-evidence records: **1585**
- Reproducibility assessments: **140**
- Unresolved findings: **887**
- Explicit conflicts: **112**
- Independently extractable resources remaining: **223**

## S122

`Stage3-S122` records `CR000137` (`NeuroDiffGym/neurodiffeq`) at the reconstructed Stage-2 immutable SHA `df47923878f39377bd45922a0654f79849488452`, preserving MIT licensing and the verified `PRL000264 → Atlas 745` official relationship restored by the post-closure Stage-2 authority overlay.

NeuroDiffEq is represented as a `pinn_framework_library`. The bounded extraction records the framework-wide ODE/PDE, solver, network, sampling, installation and environment capabilities at resource scope, plus two explicit README use cases: the Lotka-Volterra ODE system and a two-dimensional Laplace PDE. These are repository-documented examples, not claims about the 2025 paper's experimental program.

The repository provides Python 3.8 in `Pipfile`, exact dependency versions and hashes in `Pipfile.lock`, explicit installation paths, package version 0.7.0, formal documentation and Docker infrastructure. The static reproducibility assessment is **R3**; R4 is withheld because the representative examples do not specify deterministic seed control or quantitative acceptance thresholds.

No scientific workload was executed.

## Batch status

`SOB013` is **PASS (10/10)** and contains exactly `CR000128–CR000137`. `SOB014` is **0/10** and begins at `CR000138`.

## Continuation

Continue with `Stage3-S123` at `CR000138`.
