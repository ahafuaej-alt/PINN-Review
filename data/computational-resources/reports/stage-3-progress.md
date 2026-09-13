# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S264`
- Latest completed resource: `CR000313`
- Latest completed aggregate batch: `SOB030` - **PASS (10/10)**
- Current batch: `SOB031` - **0/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000314`
- Exact next checkpoint: `Stage3-S265`

## Cumulative counts through S264 / RC09

- Resources: **310**
- Experiments: **353**
- Configurations: **628**
- Technical-evidence records: **3016**
- Reproducibility assessments: **310**
- Unresolved findings: **1505**
- Explicit conflicts: **155**
- Independently extractable resources remaining: **53**

## S264

`CR000313` preserves the USGS EarthExplorer Sentinel-2 Level-1C data-source identity and verified `PRL000176` relationship for Atlas paper 571. USGS documents EarthExplorer Sentinel-2 Level-1C product type `S2MSI1C`, 13-band GMLJP2 imagery and metadata fields capable of carrying entity, tile, orbit and processing-baseline identifiers. The paper reports four study-scene acquisition dates and selects imagery with less than 10% cloud cover. It documents Sen2Cor L1C-to-L2A correction, 10 m resampling, ROI clipping, SRTM land masking and SNAP v9.0 processing. Exact scene/entity/tile identifiers and processing baselines are not reported. A new explicit source conflict is preserved: Section 2.2 and the Data Availability Statement attribute the imagery acquisition to USGS/EarthExplorer, while Section 3.2.2 says the original L1C image was downloaded from the ESA website. Both claims remain source-scoped; no acquisition route is silently preferred. No Sentinel-2 payload was downloaded or opened and no preprocessing was executed. The resource is assessed at `R2`.

## Aggregate batch QA

`SOB030` is **PASS (10/10)** with exact membership `CR000304–CR000313`. Batch deltas are +10 resources, +4 experiments, +0 configurations, +99 technical-evidence records, +10 reproducibility assessments, +37 unresolved findings and +5 explicit conflicts. Cumulative identifier/reference, inference-pairing, source-scope, Stage-2 authority, RC09 schema, boundary and static-execution checks pass.

## Continuation

Continue with `Stage3-S265` at `CR000314` in `SOB031`.
