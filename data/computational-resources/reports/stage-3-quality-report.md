# Computational Resources Stage 3 Quality Report

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`

## Latest checkpoint

- Checkpoint: `Stage3-S101`
- Batch: `SOB011` — **7/10 complete**
- Resources: `CR000113`, `CR000114`
- Checkpoint status: **PASS**
- Latest aggregate batch QA: `SOB010` — **PASS**

## S101 checkpoint counts

- Resources: **2**
- Experiments: **1**
- Configurations: **4**
- Technical-evidence records: **15**
- Reproducibility assessments: **2**
- New unresolved findings: **10**
- New explicit conflicts: **0**

## Cumulative counts through S101

- Resources: **117**
- Experiments: **203**
- Configurations: **397**
- Technical-evidence records: **1394**
- Reproducibility assessments: **117**
- Unresolved findings: **745**
- Explicit conflicts: **101**
- Independently extractable resources remaining: **246**

## QA gates

Schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, inference labeling, reproducibility classification, R5 exclusion, repository-scope safety, Stage-1/Stage-2/public-Atlas/curated/schema write boundaries, execution boundary, provenance-text screening and branch-head stability all **PASS** for S101.

SOB011 is 7/10; aggregate SOB011 QA is not yet due. Latest completed aggregate remains SOB010 — **PASS**.

## Scientific/reproducibility note

`CR000113` is a pinned TSA-PINN implementation for cylinder-wake Navier-Stokes approximation. Source code verifies a streamfunction-pressure formulation, automatic-differentiation Navier-Stokes residuals, a standard-PINN baseline and trainable sinusoidal TSA frequencies. Four repository YAML configurations share the same 4001-epoch Adam training surface and vary the model family/initial frequency. R1 is required because explicit installation documentation is absent and package specifications are minimum-version constraints rather than exact environment pins.

`CR000114` remains an unavailable source with a not-verified paper-resource relationship. R0 is required and no scientific workflow semantics are inferred beyond the Stage-2 provenance record.

## Continuation

Exact next resource: `CR000115`. Exact next checkpoint: `Stage3-S102`.
