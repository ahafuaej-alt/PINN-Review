# Computational Resources Stage 3 Quality Report

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`

## Latest checkpoint

- Checkpoint: `Stage3-S102`
- Batch: `SOB011` — **8/10 complete**
- Resource: `CR000115`
- Checkpoint status: **PASS**
- Latest aggregate batch QA: `SOB010` — **PASS**

## S102 checkpoint counts

- Resources: **1**
- Experiments: **3**
- Configurations: **5**
- Technical-evidence records: **12**
- Reproducibility assessments: **1**
- New unresolved findings: **10**
- New explicit conflicts: **2**

## Cumulative counts through S102

- Resources: **118**
- Experiments: **206**
- Configurations: **402**
- Technical-evidence records: **1406**
- Reproducibility assessments: **118**
- Unresolved findings: **755**
- Explicit conflicts: **103**
- Independently extractable resources remaining: **245**

## QA gates

Schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, inference labeling, reproducibility classification, R5 exclusion, repository-scope safety, Stage-1/Stage-2/public-Atlas/curated/schema write boundaries, execution boundary, provenance-text screening and branch-head stability all **PASS** for S102.

`SOB011` is 8/10; aggregate SOB011 QA is not yet due. Latest completed aggregate remains SOB010 — **PASS**.

## Scientific/reproducibility note

`CR000115` is a pinned physics-informed neural-operator implementation for large-eddy simulation of three-dimensional turbulence. The bounded record preserves two primary flow families, DHIT and TML, their data-driven FNO/IFNO comparators, and a distinct SGS-coefficient-learning workflow. The large parameter/data/loss sweep matrix is represented as capability evidence rather than exhaustively proliferated.

Two source conflicts remain explicit: the TML physics-informed YAML filename uses `PI_FNO` while its internal model is `IFNO`, and `train_pino.py` advertises CPU fallback but subsequently performs an unconditional CUDA device-properties query. R1 is conservative because installation and reconstructable dependency/environment specifications are incomplete.

## Continuation

Exact next resource: `CR000116`. Exact next checkpoint: `Stage3-S103`.
