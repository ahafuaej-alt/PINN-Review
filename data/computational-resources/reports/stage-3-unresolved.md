# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S267`
Latest reconciliation: `Stage3-RC09` — PASS

## Current totals

- Unresolved findings: **1514**
- Explicit conflicts: **155**
- Next unresolved ID: `S3U-1515`

## New findings in S267

- `S3U-1512` — CR000316 / paper_specific_files_subset_and_split_unresolved / medium: the version-1 dataset identity and complete provider-level design are established, but the exact MAT files, class/speed-condition subset and train/validation/test partition used for every reported result in Atlas paper 577 are not independently established by the bounded source set.
- `S3U-1513` — CR000316 / paper_specific_preprocessing_and_order_handling_unresolved / medium: the exact segmentation/windowing, normalization, resampling, order-tracking or speed-alignment and feature representation applied to the vibration/encoder channels by Atlas paper 577 are not independently established by the bounded source set.
- `S3U-1514` — CR000316 / payload_and_checksum_verification_deferred / medium: no 458 MB archive or MAT file was downloaded or opened, so MAT variable structure and file-level contents were not independently verified and the provider-published SHA-256 checksum was not independently recomputed.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused. RC09 remains count-neutral and adds no unresolved finding or explicit conflict.
