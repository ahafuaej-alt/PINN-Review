# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S282`
- Latest completed resource: `CR000332`
- Latest completed aggregate batch: `SOB031` - **PASS (10/10)**
- Current batch: `SOB032` - **9/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000333`
- Exact next checkpoint: `Stage3-S283`

## Cumulative counts through S282 / RC09

- Resources: **329**
- Experiments: **358**
- Configurations: **637**
- Technical-evidence records: **3232**
- Reproducibility assessments: **329**
- Unresolved findings: **1564**
- Explicit conflicts: **157**
- Independently extractable resources remaining: **34**

## S282

`CR000332` preserves Atlas paper 716's verified citation of the legacy Copernicus Marine global-ocean analysis/forecast product and its current `GLOBAL_ANALYSISFORECAST_PHY_001_024` / DOI `10.48670/moi-00016` GLO12 lineage. Provider documentation establishes global 1/12-degree coverage, 50 vertical levels, hourly/daily/monthly products, physical variable families, NetCDF distribution, registered access and the Copernicus Marine licence framework. Exact historical files, revisions, timestamps, checksums, paper-specific subset and preprocessing remain unresolved. The resource is assessed at `R1`; no data payload was opened or scientific workflow executed.

## Aggregate batch QA

`SOB031` remains **PASS (10/10)**. `SOB032` is now **9/10** with `CR000324–CR000332`.

## Continuation

Continue with `Stage3-S283` at `CR000333`.
