# Computational Resources Stage 3 Quality Report

Date: 2026-09-06  
Branch: `data/computational-resources-stage3`

## Latest checkpoint

- Checkpoint: `Stage3-S096`
- Batch: `SOB011` — **1/10 complete**
- Resource: `CR000108`
- Checkpoint status: **PASS**
- Latest aggregate batch QA: `SOB010` — **PASS**

## S096 checkpoint counts

- Resources: **1**
- Experiments: **0**
- Configurations: **0**
- Technical-evidence records: **7**
- Reproducibility assessments: **1**
- New unresolved findings: **5**
- New explicit conflicts: **0**

## Cumulative counts through S096

- Resources: **111**
- Experiments: **201**
- Configurations: **392**
- Technical-evidence records: **1349**
- Reproducibility assessments: **111**
- Unresolved findings: **714**
- Explicit conflicts: **101**
- Independently extractable resources remaining: **252**

## QA gates

Schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, inference labeling, reproducibility classification, R5 exclusion, repository-scope safety, Stage-1/Stage-2/public-Atlas/curated/schema write boundaries, execution boundary, provenance-text screening and branch-head stability all **PASS** for S096.

SOB011 is 1/10; aggregate SOB011 QA is not yet due. Latest completed aggregate remains SOB010 — **PASS**.

## Scientific/reproducibility note

`CR000108` preserves the verified Stage-2 supplemental relationship `PRL000214 → Atlas 663`. APS identifies `dqd.ipynb` and `transmon.ipynb` as Julia Jupyter notebooks used for the reported robust-quantum-gate PINN results. Because the supplemental archive internals were not directly opened under the bounded static boundary, S096 does not manufacture experiment/configuration records. R1 is conservative because exact source/citation context is available while archive-internal environment, dependency, data-input, seed, hardware and execution provenance remain incomplete.

## Continuation

Exact next resource: `CR000109`. Exact next checkpoint: `Stage3-S097`.
