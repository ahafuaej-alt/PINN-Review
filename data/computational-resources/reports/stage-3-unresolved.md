# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S256`
Latest reconciliation: `Stage3-RC08` — PASS

## Current totals

- Unresolved findings: **1473**
- Explicit conflicts: **150**
- Next unresolved ID: `S3U-1474`

## New findings in S256

- `S3U-1469` — CR000304 / paper_specific_mri_example_and_file_mapping_unresolved / medium: Atlas paper 432 states that the personalized left-atrium mesh came from one MRI-derived MICCAI challenge example, but the exact Figshare subject/example and exact mesh/file path were not identified without manufacturing a selection.
- `S3U-1470` — CR000304 / dataset_payload_not_opened / low: The public Figshare record, file roles, DOI and licence are documented, but MRI/segmentation/mesh payloads were not downloaded or opened and file-level integrity was not independently checked.
- `S3U-1471` — CR000305 / exact_noaa_sst_product_and_version_unresolved / medium: The paper identifies NOAA daily SST data and the official legacy portal redirects to NOAA PSL, but the paper does not name the exact NOAA product/version and Stage 3 does not substitute a current product by inference.
- `S3U-1472` — CR000305 / paper_specific_spatial_temporal_preprocessing_unresolved / medium: The paper documents Gulf of Mexico, 2012–2018, 2190 snapshots and 64×64 resolution, but the exact bounding box, extraction method, temporal handling and preprocessing remain unresolved.
- `S3U-1473` — CR000305 / paper_subset_reuse_license_not_identified / low: No item/subset reuse licence was identified for the exact NOAA data selection used by the paper.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
