# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S264`
Latest reconciliation: `Stage3-RC09` — PASS

## Current totals

- Unresolved findings: **1505**
- Explicit conflicts: **155**
- Next unresolved ID: `S3U-1506`

## New findings in S264

- `S3U-1502` — CR000313 / exact_sentinel2_scene_identity_unresolved / medium: the paper reports four study-site acquisition dates but does not provide the exact Sentinel-2 Entity IDs, tile IDs, orbit identifiers, processing baselines or SAFE/GMLJP2 filenames needed to identify the source scenes unambiguously.
- `S3U-1503` — CR000313 / acquisition_route_conflict / medium: paper Section 2.2 and the Data Availability Statement attribute Sentinel-2 acquisition to USGS/EarthExplorer, while Section 3.2.2 states that the original Level-1C image was downloaded from the ESA website. The exact original acquisition route is therefore unresolved and retained as explicit conflicting evidence.
- `S3U-1504` — CR000313 / preprocessing_version_and_selection_detail_unresolved / medium: Sen2Cor, SNAP v9.0, 10 m resampling, ROI clipping, SRTM land masking and the less-than-10-percent cloud criterion are documented, but the Sen2Cor version/processing baseline and exact cloud-filter/product-selection implementation are not reported.
- `S3U-1505` — CR000313 / exact_scene_payload_retrieval_unverified / medium: current EarthExplorer product-family access is documented, but no paper-specific Sentinel-2 scene was downloaded and no SAFE/GMLJP2 payload was opened, so exact current scene-level retrievability and file integrity were not independently established.

RC09 remains count-neutral and adds no unresolved finding or explicit conflict. Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
