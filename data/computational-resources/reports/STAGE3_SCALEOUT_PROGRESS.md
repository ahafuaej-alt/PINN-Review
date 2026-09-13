# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S287`
- Latest completed resource: `CR000338`
- Latest completed aggregate batch: `SOB032` - **PASS (10/10)**
- Current batch: `SOB033` - **5/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000339`
- Exact next checkpoint: `Stage3-S288`

## Cumulative counts through S287 / RC09

- Resources: **335**
- Experiments: **358**
- Configurations: **637**
- Technical-evidence records: **3295**
- Reproducibility assessments: **335**
- Unresolved findings: **1584**
- Explicit conflicts: **158**
- Independently extractable resources remaining: **28**

## S287

`CR000338` preserves the official raw ERA5 documentation/source context and corrected `PRL000248` paper-resource relationship for Atlas paper 717. Current provider documentation establishes ERA5 coverage, production system, resolution, access formats and provisional ERA5T replacement behavior. The paper instead uses WeatherBench-preprocessed ERA5 at 5.625°; its variables, years, normalization, tasks, metrics and training context are recorded as paper-scoped facts without assigning experiments/configurations to the wrong artifact. The exact processed artifact/version and complete lineage remain unresolved. CR000338 is assessed at `R1`; no payload or workflow was executed.

## Aggregate batch QA

`SOB032` remains **PASS (10/10)**. `SOB033` is now **5/10** with `CR000334–CR000338`.

## Continuation

Continue with `Stage3-S288` at `CR000339`.
