# Computational Resources Stage 3 Quality Report

Date: 2026-09-06  
Branch: `data/computational-resources-stage3`

## Latest checkpoint

- Checkpoint: `Stage3-S100`
- Batch: `SOB011` — **5/10 complete**
- Resource: `CR000112`
- Checkpoint status: **PASS**
- Latest aggregate batch QA: `SOB010` — **PASS**

## S100 checkpoint counts

- Resources: **1**
- Experiments: **1**
- Configurations: **1**
- Technical-evidence records: **10**
- Reproducibility assessments: **1**
- New unresolved findings: **5**
- New explicit conflicts: **0**

## Cumulative counts through S100

- Resources: **115**
- Experiments: **202**
- Configurations: **393**
- Technical-evidence records: **1379**
- Reproducibility assessments: **115**
- Unresolved findings: **735**
- Explicit conflicts: **101**
- Independently extractable resources remaining: **248**

## QA gates

Schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, inference labeling, reproducibility classification, R5 exclusion, repository-scope safety, Stage-1/Stage-2/public-Atlas/curated/schema write boundaries, execution boundary, provenance-text screening and branch-head stability all **PASS** for S100.

SOB011 is 5/10; aggregate SOB011 QA is not yet due. Latest completed aggregate remains SOB010 — **PASS**.

## Scientific/reproducibility note

`CR000112` is a pinned DMF-TONN implementation whose source explicitly couples a physics-informed 3D linear-elasticity displacement network to a density-field topology network. The default repository workflow is a 40×20×8 cantilever case with explicit seeds, Adam learning rates and training schedules. R1 is required because the pinned source has no dependency/environment manifest or installation instructions; under the gated reproducibility model this blocks R2 even though mathematics, architecture, seeds and training controls are explicit. Repository license, runtime-hardware provenance and a provider-bundled numerical acceptance target are also absent.

## Continuation

Exact next resource: `CR000113`. Exact next checkpoint: `Stage3-S101`.
