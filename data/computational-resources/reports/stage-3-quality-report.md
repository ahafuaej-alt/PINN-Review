# Computational Resources Stage 3 Quality Report

Date: 2026-09-06  
Branch: `data/computational-resources-stage3`

## Latest checkpoint

- Checkpoint: `Stage3-S097`
- Batch: `SOB011` — **2/10 complete**
- Resource: `CR000109`
- Checkpoint status: **PASS**
- Latest aggregate batch QA: `SOB010` — **PASS**

## S097 checkpoint counts

- Resources: **1**
- Experiments: **0**
- Configurations: **0**
- Technical-evidence records: **8**
- Reproducibility assessments: **1**
- New unresolved findings: **6**
- New explicit conflicts: **0**

## Cumulative counts through S097

- Resources: **112**
- Experiments: **201**
- Configurations: **392**
- Technical-evidence records: **1357**
- Reproducibility assessments: **112**
- Unresolved findings: **720**
- Explicit conflicts: **101**
- Independently extractable resources remaining: **251**

## QA gates

Schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, inference labeling, reproducibility classification, R5 exclusion, repository-scope safety, Stage-1/Stage-2/public-Atlas/curated/schema write boundaries, execution boundary, provenance-text screening and branch-head stability all **PASS** for S097.

SOB011 is 2/10; aggregate SOB011 QA is not yet due. Latest completed aggregate remains SOB010 — **PASS**.

## Scientific/reproducibility note

`CR000109` preserves the verified Stage-2 official relationship `PRL000216 → Atlas 665` and the Stage-2 fact that no historical commit SHA was pinned. The old repository identity now resolves to `cider-dft/CiderPress`; the current SHA is used only as a Stage-3 static inspection snapshot. The present repository is a substantial scientific-ML library for machine-learned exchange-correlation functionals with documented installation and dependencies, but it has evolved beyond the 2021 CIDER paper state. R2 therefore remains conservative, and no current library example is promoted to a paper-specific experiment/configuration.

## Continuation

Exact next resource: `CR000110`. Exact next checkpoint: `Stage3-S098`.
