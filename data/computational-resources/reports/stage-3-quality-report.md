# Computational Resources Stage 3 Quality Report

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`

## Latest checkpoint and aggregate batch

- Checkpoint: `Stage3-S112`
- Resources: `CR000126`, `CR000127`
- Checkpoint status: **PASS**
- Latest completed batch: `SOB012` — **PASS (10/10)**
- Current batch: `SOB013` — **0/10**

## S112 checkpoint counts

- Resources: **2**
- Experiments: **3**
- Configurations: **3**
- Technical-evidence records: **15**
- Reproducibility assessments: **2**
- New unresolved findings: **10**
- New explicit conflicts: **0**

## Cumulative counts through S112

- Resources: **130**
- Experiments: **216**
- Configurations: **413**
- Technical-evidence records: **1500**
- Reproducibility assessments: **130**
- Unresolved findings: **829**
- Explicit conflicts: **109**
- Independently extractable resources remaining: **233**

## QA gates

S112 schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, inference labeling, reproducibility classification, R5 exclusion, source-scope discipline, missing-value semantics, repository-scope safety, Stage-1/Stage-2/public-Atlas/curated/methodology/schema write boundaries, execution boundary, provenance-text screening, and branch-head stability all **PASS**.

`SOB012` aggregate QA also **PASS**: canonical membership, cumulative count reconciliation, identifier uniqueness, orphan-reference checks, source-scope sampling, missing-value semantics, methodology/schema drift, stage boundary, execution boundary, and provenance-text screening all pass.

## Scientific/reproducibility note

CR000126 is bounded as a physics-informed neural ODE climate/weather forecasting repository with three documented forecast workflows. Its pinned source, MIT license, explicit dependencies, seed, hyperparameters, evaluation entrypoints and released global checkpoint support R2; incomplete environment reconstruction, external data, absent hardware profile and lack of fixed acceptance thresholds prevent a higher level.

CR000127 is bounded as the DOI-hosted PI-RFR research artifact for Antarctic climate reconstruction. The primary paper establishes the method and evaluation scope, but archive internals were not directly inspectable, so source-internal execution details are not manufactured and R1 is retained.

## Continuation

Exact next resource: `CR000128`. Exact next checkpoint: `Stage3-S113`.
