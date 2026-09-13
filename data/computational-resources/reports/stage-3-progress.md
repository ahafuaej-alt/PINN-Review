# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S276`
- Latest completed resource: `CR000325`
- Latest completed aggregate batch: `SOB031` - **PASS (10/10)**
- Current batch: `SOB032` - **2/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000326`
- Exact next checkpoint: `Stage3-S277`

## Cumulative counts through S276 / RC09

- Resources: **322**
- Experiments: **358**
- Configurations: **637**
- Technical-evidence records: **3165**
- Reproducibility assessments: **322**
- Unresolved findings: **1543**
- Explicit conflicts: **155**
- Independently extractable resources remaining: **41**

## S276

`CR000325` preserves the Cambridge Apollo dataset DOI `10.17863/CAM.41410` and verified `PRL000221` relationship for Atlas paper 687. The provider record verifies three-component velocity and density fields across 16 stratified-flow experiments, MATLAB energetics code, movies, flux plots, README documentation and CC BY-NC-SA 4.0 licensing except where otherwise noted. The primary paper identifies H1 and H4 as the PINN-used subsets and documents their acquisition, nondimensionalization, scan timing, sampling and reconstruction context. The complete versioned/checksummed manifest, exact variable schema, paper preprocessing-to-file map and MATLAB environment remain unresolved. No payload was opened and no scientific workflow was executed. The resource is assessed at `R2`.

## Aggregate batch QA

`SOB031` remains **PASS (10/10)**. `SOB032` is now **2/10** with `CR000324–CR000325`.

## Continuation

Continue with `Stage3-S277` at `CR000326`.
