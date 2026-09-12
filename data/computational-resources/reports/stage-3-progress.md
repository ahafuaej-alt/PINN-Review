# Computational Resources Stage 3 Progress

Date: 2026-09-12
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S228`
- Latest completed resource: `CR000266`
- Latest completed aggregate batch: `SOB025` — **PASS (10/10)**
- Current batch: `SOB026` — **4/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC07` — **PASS**
- Exact next independently extractable resource: `CR000267`
- Exact next checkpoint: `Stage3-S229`

## Cumulative counts through S228 / RC07

- Resources: **264**
- Experiments: **343**
- Configurations: **622**
- Technical-evidence records: **2672**
- Reproducibility assessments: **264**
- Unresolved findings: **1417**
- Explicit conflicts: **146**
- Independently extractable resources remaining: **99**

## S228

`CR000265` preserves the Climate Data Store identity and `PRL000011` for the paper-reported ERA5 wind-vector product. Current provider documentation establishes CDS web/API access, Python `cdsapi` use, dataset terms, and ERA5 formats; the exact study-specific dataset request and payload remain unresolved. Reproducibility is `R2`.

`CR000266` preserves the Copernicus Data Space Ecosystem identity and `PRL000012` for the paper-reported Sentinel-1 wave-mode product. Current provider documentation establishes open Sentinel access, catalogue/processing interfaces, and Sentinel legal terms; the exact study-specific product/query and payload remain unresolved. Reproducibility is `R2`.

## Aggregate batch QA

`SOB025` remains **10/10 — PASS**. `SOB026` is now **4/10**; aggregate QA is not yet due.

## Continuation

Stage3-RC02 through Stage3-RC07 remain authoritative and count-neutral. Before S228, two count-neutral maintenance commits introduced and removed an empty root placeholder; the restored tree is byte-identical to S227 with zero file diff.

Continue with `Stage3-S229` at `CR000267`.
