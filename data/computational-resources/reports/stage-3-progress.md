# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S256`
- Latest completed resource: `CR000305`
- Latest completed aggregate batch: `SOB029` — **PASS (10/10)**
- Current batch: `SOB030` — **2/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC08` — **PASS (count-neutral report-state continuity repair)**
- Exact next independently extractable resource: `CR000306`
- Exact next checkpoint: `Stage3-S257`

## Cumulative counts through S256 / RC08

- Resources: **302**
- Experiments: **349**
- Configurations: **628**
- Technical-evidence records: **2932**
- Reproducibility assessments: **302**
- Unresolved findings: **1473**
- Explicit conflicts: **150**
- Independently extractable resources remaining: **61**

## S256

`CR000304` preserves the exact Figshare/MICCAI Left Atrial Segmentation Challenge 2013 MRI testing deposit and verified `PRL000117` relationship for Atlas paper 432. The public deposit provides a persistent DOI, CC-BY-4.0 licensing, 20 MRI testing datasets, ground-truth segmentation/mesh artifacts and helper-file documentation. The paper states that its three-dimensional personalized left-atrium mesh came from one MRI-derived challenge example, but the exact example/subject and exact file path are not identified. No MRI, segmentation or mesh payload was downloaded or opened. The resource is assessed at `R3`.

`CR000305` preserves the historical ESRL/PSD root and official NOAA PSL redirect plus verified portal-level `PRL000123` relationship for Atlas paper 451. The paper specifies daily Gulf of Mexico sea-surface-temperature data from 2012–2018, 2190 snapshots at 64×64, split into 1825 training and 365 test snapshots. The exact NOAA SST product/version, Gulf bounding box, extraction/preprocessing, temporal handling and paper-subset reuse licence remain unresolved; no current NOAA product is substituted by inference. No data file was downloaded or opened. The resource is assessed at `R1`.

## Aggregate batch QA

`SOB029` remains **PASS (10/10)**. `SOB030` is now **2/10**.

## Continuation

Continue with `Stage3-S257` at `CR000306`.
