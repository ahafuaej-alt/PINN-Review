# Computational Resources Stage 3 Progress

Date: 2026-09-10
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S179`
- Latest completed resource: `CR000201`
- Latest completed aggregate batch: `SOB019` — **PASS (10/10)**
- Current batch: `SOB020` — **2/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000202`
- Exact next checkpoint: `Stage3-S180`

## Cumulative counts through S179 / RC05

- Resources: **202**
- Experiments: **301**
- Configurations: **523**
- Technical-evidence records: **2199**
- Reproducibility assessments: **202**
- Unresolved findings: **1223**
- Explicit conflicts: **138**
- Independently extractable resources remaining: **161**

## S179

`CR000201` preserves the Stage-2-authoritative `PredictiveIntelligenceLab/USNCCM15-Short-Course-Recent-Advances-in-Physics-Informed-Deep-Learning` identity at pinned SHA `55113100d7204f4cfbf6fdc5516ed8bb78556a99`. Stage 2 classifies it as a paper-code/tutorial collection, records no repository license or project citation metadata, and asserts no Atlas-paper relationship.

The bounded static extraction maps four primary tutorial surfaces: a continuous-time elliptic PINN, a discrete-time Allen-Cahn PINN, a graph PINN arterial-flow example, and a physics-informed deep generative model for stochastic PDEs. Duplicate notebook checkpoints, logs, PDFs, saved-model binaries and other historical artifacts remain supporting evidence rather than separate experiments. The static reproducibility level is `R1`; the environment-and-installation prerequisite for `R2` is not established.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02, Stage3-RC03, Stage3-RC04 and Stage3-RC05 remain authoritative and count-neutral for their accepted scopes. Accepted methodology and schemas remain unchanged.

## Continuation

Continue with `Stage3-S180` at `CR000202`. Re-read the live branch, current reports, accepted scale-out plan, reconciliation authorities and latest checkpoint QA before starting.
