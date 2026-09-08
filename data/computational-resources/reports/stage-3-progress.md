# Computational Resources Stage 3 Progress

Date: 2026-09-08  
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S121`
- Latest completed resource: `CR000136`
- Latest completed aggregate batch: `SOB012` — **PASS (10/10)**
- Current batch: `SOB013` — **9/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000137`
- Exact next checkpoint: `Stage3-S122`

## Cumulative counts through S121

- Resources: **139**
- Experiments: **225**
- Configurations: **422**
- Technical-evidence records: **1575**
- Reproducibility assessments: **139**
- Unresolved findings: **882**
- Explicit conflicts: **112**
- Independently extractable resources remaining: **224**

## S121

`Stage3-S121` records `CR000136` (`lululxvi/deeponet`) at Stage-2 pinned SHA `8d62345afd39e1df9c2c8c8d0e7c41882b06a9bf`, preserving CC-BY-NC-SA-4.0 licensing and the verified `PRL000262 → Atlas 743` official relationship.

The repository is the source package for the DeepONet nonlinear-operator-learning paper and spans antiderivative/nonlinear ODE, pendulum, diffusion-reaction, advection, advection-diffusion, stochastic ODE/PDE, fractional and Seq2Seq surfaces. The default antiderivative workflow is used as the bounded representative experiment. The source specifies DeepXDE v0.11.2 compatibility and detailed default model/training parameters, while the broader dependency environment, seeds, hardware and released checkpoints remain incomplete; CR000136 is **R2**.

No scientific workload was executed.

## Batch status

`SOB012` remains **PASS (10/10)**. `SOB013` is **9/10**; aggregate QA is not yet due.

## Continuation

Continue with `Stage3-S122` at `CR000137`.
