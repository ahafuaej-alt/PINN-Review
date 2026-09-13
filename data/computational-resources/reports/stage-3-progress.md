# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S247`
- Latest completed resource: `CR000294`
- Latest completed aggregate batch: `SOB028` — **PASS (10/10)**
- Current batch: `SOB029` — **1/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC08` — **PASS (count-neutral report-state continuity repair)**
- Exact next independently extractable resource: `CR000295`
- Exact next checkpoint: `Stage3-S248`

## Cumulative counts through S247 / RC08

- Resources: **291**
- Experiments: **343**
- Configurations: **622**
- Technical-evidence records: **2847**
- Reproducibility assessments: **291**
- Unresolved findings: **1451**
- Explicit conflicts: **147**
- Independently extractable resources remaining: **72**

## S247

`CR000294` preserves the exact public Google Drive dataset folder, `PRL000060`, paper reference `[17]`, and the provider-listed `CMAME_40x40x20_case` HDF5 data product. Primary-paper/Stage-2 metadata establish 2923 realizations, a 40×40×20 grid and 21 timesteps. The 29.36 GB HDF5 payload was not downloaded or opened; item-level licence, standalone DOI, file schema, simulator settings and paper-specific processing remain bounded. The resource is assessed at `R1`.

## Aggregate batch QA

`SOB028` remains **PASS (10/10)**. `SOB029` is now **1/10**.

## Continuation

Continue with `Stage3-S248` at `CR000295`.
