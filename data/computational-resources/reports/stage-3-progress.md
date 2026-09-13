# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S273`
- Latest completed resource: `CR000322`
- Latest completed aggregate batch: `SOB030` - **PASS (10/10)**
- Current batch: `SOB031` - **9/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000323`
- Exact next checkpoint: `Stage3-S274`

## Cumulative counts through S273 / RC09

- Resources: **319**
- Experiments: **358**
- Configurations: **637**
- Technical-evidence records: **3123**
- Reproducibility assessments: **319**
- Unresolved findings: **1533**
- Explicit conflicts: **155**
- Independently extractable resources remaining: **44**

## S273

`CR000322` preserves the exact versioned Zenodo DOI `10.5281/zenodo.6637469` and verified `PRL000205` relationship for Atlas paper 646. Zenodo identifies the record as dataset version `v2` and exposes a single file, `figures-pinnup.zip` (178.5 MB), with provider-reported MD5 `55a668609ada1d952c034870d29becdf`. The primary paper explicitly states that its datasets are available at this DOI. The paper documents a 2.5 × 2.5 km Marmousi-derived layered-model study with 2 Hz and 4 Hz training, frequency upscaling and neuron splitting, plus a 12.5 × 4.0 km Overthrust study with 4/8/16 Hz stages and increasing training-sample/network sizes. These publication-level study details are retained as dataset context, but no experiment/configuration records are created because the ZIP-internal file/figure/reference-solution mapping was not opened or independently verified. No explicit deposit-level licence value was independently resolved from the retrieved Zenodo record. No archive or dataset file was opened and no scientific workflow was executed. The resource is assessed at `R2`.

## Aggregate batch QA

`SOB030` remains **PASS (10/10)**. `SOB031` is now **9/10**.

## Continuation

Continue with `Stage3-S274` at `CR000323`.
