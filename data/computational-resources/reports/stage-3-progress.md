# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S265`
- Latest completed resource: `CR000314`
- Latest completed aggregate batch: `SOB030` - **PASS (10/10)**
- Current batch: `SOB031` - **1/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000315`
- Exact next checkpoint: `Stage3-S266`

## Cumulative counts through S265 / RC09

- Resources: **311**
- Experiments: **353**
- Configurations: **628**
- Technical-evidence records: **3025**
- Reproducibility assessments: **311**
- Unresolved findings: **1508**
- Explicit conflicts: **155**
- Independently extractable resources remaining: **52**

## S265

`CR000314` preserves the NOAA/NCEI CUDEM distribution identity and verified `PRL000177` relationship for Atlas paper 571. NOAA documents the U.S. Virgin Islands 1/9-arc-second CUDEM as a tiled bathymetric-topographic product with DOI `10.25921/ds9v-ky35`, public NetCDF/GeoTIFF distribution and an ongoing continuously-updated lifecycle. The paper uses CUDEM as independent validation data for St. Thomas and St. Croix and documents VIVD09-to-WGS84 conversion using NOAA VDatum. Exact historical tile identifiers, filenames, revision dates and a frozen paper-specific CUDEM snapshot are not reported; the exact VDatum software/model version and transformation parameters are also unresolved. Current CUDEM metadata is therefore not treated as an immutable copy of the historical paper files. No DEM tile was downloaded or opened and no datum transformation was executed. The resource is assessed at `R2`.

## Aggregate batch QA

`SOB030` remains **PASS (10/10)**. `SOB031` is now **1/10**.

## Continuation

Continue with `Stage3-S266` at `CR000315`.
