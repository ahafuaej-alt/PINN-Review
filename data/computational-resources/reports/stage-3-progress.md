# Computational Resources Stage 3 Progress

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S117`
- Latest completed resource: `CR000132`
- Latest completed aggregate batch: `SOB012` — **PASS (10/10)**
- Current batch: `SOB013` — **5/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000133`
- Exact next checkpoint: `Stage3-S118`

## Cumulative counts through S117

- Resources: **135**
- Experiments: **220**
- Configurations: **417**
- Technical-evidence records: **1540**
- Reproducibility assessments: **135**
- Unresolved findings: **859**
- Explicit conflicts: **111**
- Independently extractable resources remaining: **228**

## S117

`Stage3-S117` records `CR000132` (`mlmamud/mass_balance_of_pinn`) at Stage-2 pinned SHA `1000e91d54668831e8624fa8850d0693067a1068`, preserving BSD-2-Clause licensing and verified `PRL000257 → Atlas 734`.

The associated Scientific Reports study evaluates PINN local/global mass conservation for steady 1D saturated groundwater flow in homogeneous and heterogeneous media against analytical and two-point finite-volume solutions. One bounded experiment/configuration preserves the 10,800-scenario-per-case tuning design and the paper-reported best PINN settings. Because final Stage 2 did not expose the recursive repository tree, repository-internal environment, entrypoint, seed, and checkpoint claims remain unresolved rather than inferred. CR000132 is **R1**.

No scientific workload was executed.

## Batch status

`SOB012` remains **PASS (10/10)**. `SOB013` is **5/10**; aggregate QA is not yet due.

## Continuation

Continue with `Stage3-S118` at `CR000133`.
