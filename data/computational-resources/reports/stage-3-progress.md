# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S258`
- Latest completed resource: `CR000307`
- Latest completed aggregate batch: `SOB029` — **PASS (10/10)**
- Current batch: `SOB030` — **4/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC08` — **PASS (count-neutral report-state continuity repair)**
- Exact next independently extractable resource: `CR000308`
- Exact next checkpoint: `Stage3-S259`

## Cumulative counts through S258 / RC08

- Resources: **304**
- Experiments: **349**
- Configurations: **628**
- Technical-evidence records: **2950**
- Reproducibility assessments: **304**
- Unresolved findings: **1480**
- Explicit conflicts: **150**
- Independently extractable resources remaining: **59**

## S258

`CR000307` preserves the Johns Hopkins Turbulence Databases turbulent-channel-flow dataset and its two verified Atlas-paper relationships (`PRL000137` for Atlas paper 476 and `PRL000224` for Atlas paper 692). The three Stage-1 links `PRL000001`–`PRL000003` remain explicitly excluded from verified scope because Stage 2 established them as parser leakage from paper-internal bibliography markers. Official JHTDB documentation resolves the channel-flow dataset DOI, open-data licence, domain, grid, stored velocity/pressure fields, 4,000 frames, DNS/database time steps, viscosity, pressure gradient and friction Reynolds number. The two primary papers confirm use of this dataset, but exact paper-specific cutout requests, subdomain/time-window selections and preprocessing are not fully reconstructed. No JHTDB field or data-service payload was downloaded or opened. The resource is assessed at `R3`.

## Aggregate batch QA

`SOB029` remains **PASS (10/10)**. `SOB030` is now **4/10**.

## Continuation

Continue with `Stage3-S259` at `CR000308`.
