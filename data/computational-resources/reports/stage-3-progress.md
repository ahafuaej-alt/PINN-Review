# Computational Resources Stage 3 Progress

Date: 2026-09-10
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S176`
- Latest completed resource: `CR000198`
- Latest completed aggregate batch: `SOB018` — **PASS (10/10)**
- Current batch: `SOB019` — **9/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000199`
- Exact next checkpoint: `Stage3-S177`

## Cumulative counts through S176 / RC04

- Resources: **199**
- Experiments: **292**
- Configurations: **513**
- Technical-evidence records: **2164**
- Reproducibility assessments: **199**
- Unresolved findings: **1204**
- Explicit conflicts: **137**
- Independently extractable resources remaining: **164**

## S176

CR000198 preserves the Stage-2-authoritative `fperiago/pinn_deeponet_for_beginners` fork pinned at `5c3ea1b41d563ca969925cd20fcbdbde430e9026`, licensed CC-BY-SA-4.0, with course citation metadata and no inferred Atlas-paper relationship. The pinned course repository covers PINN and DeepONet methods for PDE control and optimization using DeepXDE.

Four course surfaces are mapped as experiments with four source-level configurations: a 2D Laplace-Poisson PINN, a 1D wave exact-boundary-control PINN, reproducible wave-control operator data generation, and a DeepONet learning the minimum-L2 control operator. The resource receives **R1** conservatively: an environment manifest, bundled arrays, notebook configurations, training procedures and stored outputs are present, but sufficiently complete installation information is not established within the bounded static evidence for the R2 gate. No scientific workload was executed.

## Reconciled baseline

Stage3-RC02, Stage3-RC03, Stage3-RC04 and Stage3-RC05 remain authoritative for their accepted scopes. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S177` at `CR000199` after published-head and checkpoint-QA readback.
