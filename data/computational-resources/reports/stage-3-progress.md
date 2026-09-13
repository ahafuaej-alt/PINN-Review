# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S262`
- Latest completed resource: `CR000311`
- Latest completed aggregate batch: `SOB029` - **PASS (10/10)**
- Current batch: `SOB030` - **8/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC08` - **PASS (count-neutral report-state continuity repair)**
- Exact next independently extractable resource: `CR000312`
- Exact next checkpoint: `Stage3-S263`

## Cumulative counts through S262 / RC08

- Resources: **308**
- Experiments: **353**
- Configurations: **628**
- Technical-evidence records: **2991**
- Reproducibility assessments: **308**
- Unresolved findings: **1496**
- Explicit conflicts: **153**
- Independently extractable resources remaining: **55**

## S262

`CR000311` preserves the LIAS MCSA-DC dataset identity and verified `PRL000172` relationship for Atlas paper 563. Current LIAS documentation exposes the induction-motor rotor-bar-failure data as a CC-BY-4.0 CSV package labelled Version 1 (2023), with explicit measurement order and filename ranges for healthy, one-broken-bar and two-broken-bar cases. The 2022 paper accessed the portal on 20 October 2022 and reports 132 recordings across the same three speed/health-class count pattern. File-level continuity between the paper-accessed dataset and the later Version-1 package is not inferred. A new explicit source conflict is preserved: the paper reports 380 V and 1435 rpm nominal motor ratings, while current provider documentation reports 400 V and 1425 rpm. Paper preprocessing/use and current data organization are substantially documented, but exact historical package continuity and paper train/test filename assignment remain unresolved. No archive, CSV or descriptive file was opened. The resource is assessed at `R3`.

## Aggregate batch QA

`SOB029` remains **PASS (10/10)**. `SOB030` is now **8/10**.

## Continuation

Continue with `Stage3-S263` at `CR000312`.
