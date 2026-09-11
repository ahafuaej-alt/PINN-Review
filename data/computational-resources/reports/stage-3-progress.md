# Computational Resources Stage 3 Progress

Date: 2026-09-11
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S189`
- Latest completed resource: `CR000211`
- Latest completed aggregate batch: `SOB020` — **PASS (10/10)**
- Current batch: `SOB021` — **2/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000212`
- Exact next checkpoint: `Stage3-S190`

## Cumulative counts through S189 / RC05

- Resources: **212**
- Experiments: **335**
- Configurations: **605**
- Technical-evidence records: **2309**
- Reproducibility assessments: **212**
- Unresolved findings: **1280**
- Explicit conflicts: **141**
- Independently extractable resources remaining: **151**

## S189

`CR000211` preserves the Stage-2-authoritative `tum-pbs/PhiFlow` supporting-software identity at pinned commit `7569231f0604dce9239afe55f9a671324dbe8f9d`. It is represented as a reusable differentiable PDE/simulation framework rather than a paper-specific PINN implementation, and no Atlas-paper relationship is inferred.

Bounded static extraction records PhiFlow version 3.4.0, NumPy/PyTorch/JAX/TensorFlow backend scope, core package dependencies, optional backend/UI/GPU layers, and the pinned PhiML submodule identity. Repository examples remain capability evidence and are not manufactured into research experiments. Static reproducibility is `R2`.

## Aggregate batch QA

`SOB020` remains complete at 10/10 and **PASS**. `SOB021` is now 2/10.

## Reconciled baseline

Stage3-RC02, Stage3-RC03, Stage3-RC04 and Stage3-RC05 remain authoritative and count-neutral for their accepted scopes. Accepted methodology and schemas remain unchanged.

## Continuation

Continue with `Stage3-S190` at `CR000212`.
