# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S265`
Latest reconciliation: `Stage3-RC09` — PASS

## Current totals

- Unresolved findings: **1508**
- Explicit conflicts: **155**
- Next unresolved ID: `S3U-1509`

## New findings in S265

- `S3U-1506` — CR000314 / exact_cudem_historical_tiles_unresolved / medium: CUDEM is continuously updated and the paper identifies St. Thomas and St. Croix but not the exact tile IDs, filenames, revision dates or frozen product snapshot used for validation.
- `S3U-1507` — CR000314 / vdatum_transformation_detail_unresolved / medium: the paper documents conversion from VIVD09 to WGS84 using NOAA VDatum, but the exact VDatum software/model version and transformation parameters are not reported.
- `S3U-1508` — CR000314 / payload_file_level_verification_deferred / medium: no CUDEM NetCDF or GeoTIFF tile was downloaded or opened, so file-level schema, checksums and the exact paper-specific spatial subset were not independently verified.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused. RC09 remains count-neutral and adds no unresolved finding or explicit conflict.
