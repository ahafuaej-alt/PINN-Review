# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S266`
- Latest completed resource: `CR000315`
- Latest completed aggregate batch: `SOB030` - **PASS (10/10)**
- Current batch: `SOB031` - **2/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000316`
- Exact next checkpoint: `Stage3-S267`

## Cumulative counts through S266 / RC09

- Resources: **312**
- Experiments: **353**
- Configurations: **628**
- Technical-evidence records: **3035**
- Reproducibility assessments: **312**
- Unresolved findings: **1511**
- Explicit conflicts: **155**
- Independently extractable resources remaining: **51**

## S266

`CR000315` preserves the official PHM Society 2010 Conference Data Challenge identity and verified `PRL000178` relationship for Atlas paper 572. The provider documents six CNC cutter records, the c1/c4/c6 training and c2/c3/c5 test partition, per-training-record wear labels and approximately 300 per-cut CSV acquisitions, seven force/vibration/AE-RMS channels, and 50 kHz/channel acquisition under specified milling conditions. The primary paper directly identifies this challenge as its experimental data source and gives the exact Stage-1 URL. Exact paper-specific cut selections/task partitioning and preprocessing/feature handling are not independently established in the bounded source set, and the verified official challenge page does not expose an explicit dataset licence. No cutter archive, CSV or wear file was downloaded or opened; no preprocessing or model execution was performed. The resource is assessed at `R2`.

## Aggregate batch QA

`SOB030` remains **PASS (10/10)**. `SOB031` is now **2/10**.

## Continuation

Continue with `Stage3-S267` at `CR000316`.
