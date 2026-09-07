# Computational Resources Stage 3 Quality Report

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`

## Latest checkpoint and aggregate batch

- Checkpoint: `Stage3-S110`
- Resources: `CR000124`
- Checkpoint status: **PASS**
- Latest completed batch: `SOB011` — **PASS (10/10)**
- Current batch: `SOB012` — **7/10**

## S110 checkpoint counts

- Resources: **1**
- Experiments: **2**
- Configurations: **2**
- Technical-evidence records: **8**
- Reproducibility assessments: **1**
- New unresolved findings: **7**
- New explicit conflicts: **1**

## Cumulative counts through S110

- Resources: **127**
- Experiments: **213**
- Configurations: **410**
- Technical-evidence records: **1479**
- Reproducibility assessments: **127**
- Unresolved findings: **813**
- Explicit conflicts: **109**
- Independently extractable resources remaining: **236**

## QA gates

S110 schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, inference labeling, reproducibility classification, R5 exclusion, source-scope discipline, missing-value semantics, repository-scope safety, Stage-1/Stage-2/public-Atlas/curated/methodology/schema write boundaries, execution boundary, provenance-text screening, and branch-head stability all **PASS**.

`SOB012` is 7/10, so aggregate batch QA is not yet due. `SOB011` remains the latest completed aggregate batch and is **PASS**.

## Scientific/reproducibility note

CR000124 is bounded as physics-guided architecture research code for lake-temperature modeling and uncertainty quantification, not as a classical PDE-residual PINN. Two source-explicit site workflows are retained. R1 is conservative because source, bundled data, architecture, training and evaluation are inspectable while the dependency environment, installation procedure, seed, hardware profile and released checkpoints remain insufficient.

The FCR-designated source loading a bundled filename containing `mendota` is retained as an explicit data-provenance/naming conflict.

## Continuation

Exact next resource: `CR000125`. Exact next checkpoint: `Stage3-S111`.
