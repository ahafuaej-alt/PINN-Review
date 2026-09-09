# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S171`
- Latest completed resource: `CR000192`
- Latest completed aggregate batch: `SOB018` — **PASS (10/10)**
- Current batch: `SOB019` — **3/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC04` — **PASS (count-neutral CR000191 duplicate skip)**
- Exact next independently extractable resource: `CR000193`
- Exact next checkpoint: `Stage3-S172`

## Cumulative counts through S171 / RC04

- Resources: **193**
- Experiments: **280**
- Configurations: **497**
- Technical-evidence records: **2116**
- Reproducibility assessments: **193**
- Unresolved findings: **1181**
- Explicit conflicts: **135**
- Independently extractable resources remaining: **170**

## S171

CR000192 preserves the Stage-2-authoritative distinct fork `Steph-Yhf/NSFnets` pinned at `e64132cbb7fb48cd3ad6d40e0986fb72f15bf5cb`, with no inferred Atlas-paper relationship. The bounded representative extraction maps the 3D time-dependent Beltrami VP-NSFnet: 4 inputs, 10 hidden tanh layers of width 100, 4 outputs, Re=1 momentum/continuity residuals, weighted initial/boundary losses, four Adam stages and L-BFGS-B refinement.

Static reproducibility is **R1**. No pinned environment, installation procedure, license, project citation, hardware description, checkpoint, or immutable expected metric is available. Two consequential source-level inconsistencies are explicit: boundary y/z/t/u/v/w arrays are reshaped from `train1x`, and evaluation combines 1000-row spatial arrays with only 100 time rows. No intended correction or runtime consequence is inferred beyond the static source evidence.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02, Stage3-RC03 and Stage3-RC04 remain authoritative for their accepted scopes. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S172` at `CR000193` after published-head and checkpoint-QA readback.
