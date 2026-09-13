# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S290`
- Latest completed resource: `CR000341`
- Latest completed aggregate batch: `SOB032` - **PASS (10/10)**
- Current batch: `SOB033` - **8/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000342`
- Exact next checkpoint: `Stage3-S291`

## Cumulative counts through S290 / RC09

- Resources: **338**
- Experiments: **359**
- Configurations: **640**
- Technical-evidence records: **3333**
- Reproducibility assessments: **338**
- Unresolved findings: **1590**
- Explicit conflicts: **158**
- Independently extractable resources remaining: **25**

## S290

`CR000341` preserves the exact Zenodo DOI `10.5281/zenodo.3764917` and verified `PRL000319` paper-dataset relationship for Atlas paper 835. Provider metadata documents seven biatrial anatomies with endocardial/epicardial surfaces, fibre fields, universal atrial coordinates, VTK meshes and CARP-style `.pts/.elem/.lon` files. The public archive is `Fibre_Files.zip` (379.6 MB; MD5 `99f030666882ce3469835309577949a2`). FiberNet Section 5 uses seven left-atrial DT-MR fibre geometries as ground truth, generates activation maps with the Fast Iterative Method, samples 1020 surface points split across 1/3/5-map conditions, tests Gaussian noise, and validates fibre error plus an unseen activation map. One experiment and three map-count configurations are recorded. CR000341 is assessed at `R2`; the archive was not downloaded or opened.

## Aggregate batch QA

`SOB032` remains **PASS (10/10)**. `SOB033` is now **8/10** with `CR000334–CR000341`.

## Report-state synchronization

The lowercase Stage3-SO-D01 control reports and uppercase compatibility counterparts remain synchronized at S290.

## Continuation

Continue with `Stage3-S291` at `CR000342`.
