# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S253`
- Latest completed resource: `CR000301`
- Latest completed aggregate batch: `SOB028` — **PASS (10/10)**
- Current batch: `SOB029` — **8/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC08` — **PASS (count-neutral report-state continuity repair)**
- Exact next independently extractable resource: `CR000302`
- Exact next checkpoint: `Stage3-S254`

## Cumulative counts through S253 / RC08

- Resources: **298**
- Experiments: **343**
- Configurations: **622**
- Technical-evidence records: **2888**
- Reproducibility assessments: **298**
- Unresolved findings: **1459**
- Explicit conflicts: **148**
- Independently extractable resources remaining: **65**

## S253

`CR000301` preserves the broad CReSIS/Open Polar Radar data-portal identity and verified `PRL000092` relationship for Atlas paper 390. The paper uses CReSIS Radar Depth Sounder measurements as sparse ice-thickness / bed-topography observations in its East Antarctica inversion application. Provider documentation establishes the RDS L1B/L2/L3 product roles, core variables, formats, season organization, and public access structure. The provider-hosted legacy RDS readme is explicitly deprecated in favor of the current Open Polar Radar guide, so its product-schema statements are retained only as provider documentation and are corroborated by current public radar-product listings. No radar product payload was downloaded or opened. The exact East Antarctica campaign, season, flightline, product level, and paper-specific bed-observation subset remain unresolved, as does a collection-level reuse licence. The resource is assessed at `R1`.

## Aggregate batch QA

`SOB028` remains **PASS (10/10)**. `SOB029` is now **8/10**.

## Continuation

Continue with `Stage3-S254` at `CR000302`.
