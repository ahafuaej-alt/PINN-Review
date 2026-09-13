# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S267`
- Latest completed resource: `CR000316`
- Latest completed aggregate batch: `SOB030` - **PASS (10/10)**
- Current batch: `SOB031` - **3/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000317`
- Exact next checkpoint: `Stage3-S268`

## Cumulative counts through S267 / RC09

- Resources: **313**
- Experiments: **353**
- Configurations: **628**
- Technical-evidence records: **3046**
- Reproducibility assessments: **313**
- Unresolved findings: **1514**
- Explicit conflicts: **155**
- Independently extractable resources remaining: **50**

## S267

`CR000316` preserves the exact Mendeley Data version-1 record `10.17632/v43hmbwxpm.1` and verified `PRL000179` relationship for Atlas paper 577. Provider metadata documents 36 datasets spanning three bearing health conditions and four time-varying speed profiles with three trials per setting, two channels (accelerometer vibration and encoder rotational speed), 200 kHz sampling, 10 s duration, CC BY 4.0 licensing, and a 458 MB ZIP with a published SHA-256 checksum. A later version 2 expands the dataset to 60 records and is not substituted for the Stage-1/Stage-2 version-1 identity. The exact files/subsets, paper-specific train/validation/test handling, preprocessing, resampling/order handling and feature representation used by Atlas paper 577 are not independently established by the bounded source set. No archive or MAT file was downloaded or opened and the provider checksum was not independently recomputed. The resource is assessed at `R2`.

## Aggregate batch QA

`SOB030` remains **PASS (10/10)**. `SOB031` is now **3/10**.

## Continuation

Continue with `Stage3-S268` at `CR000317`.
