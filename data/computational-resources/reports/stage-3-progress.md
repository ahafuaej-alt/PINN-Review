# Computational Resources Stage 3 Progress

Date: 2026-09-11
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S191`
- Latest completed resource: `CR000213`
- Latest completed aggregate batch: `SOB020` — **PASS (10/10)**
- Current batch: `SOB021` — **4/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000214`
- Exact next checkpoint: `Stage3-S192`

## Cumulative counts through S191 / RC05

- Resources: **214**
- Experiments: **335**
- Configurations: **605**
- Technical-evidence records: **2325**
- Reproducibility assessments: **214**
- Unresolved findings: **1291**
- Explicit conflicts: **142**
- Independently extractable resources remaining: **149**

## S191

`CR000213` preserves the Stage-2-authoritative transferred `jax-md/jax-md` supporting-software identity at pinned commit `a41c7d19f6468f4e5263c32c12c9ed6cba26ebff`; Stage 2 establishes continuity with the former `google/jax-md` path. No Atlas-paper relationship is inferred.

Bounded static extraction records JAX-MD 0.2.29, Apache-2.0 licensing, documented installation and Zenodo citation, JAX/XLA CPU/GPU/TPU scope, ranged dependency groups, and heterogeneous notebooks/examples/model assets. These remain supporting-software capability evidence rather than Atlas-paper experiments. Static reproducibility is `R2`.

## Aggregate batch QA

`SOB020` remains complete at 10/10 and **PASS**. `SOB021` is now 4/10.

## Reconciled baseline

Stage3-RC02, Stage3-RC03, Stage3-RC04 and Stage3-RC05 remain authoritative and count-neutral for their accepted scopes. Accepted methodology and schemas remain unchanged.

## Continuation

Continue with `Stage3-S192` at `CR000214`.
