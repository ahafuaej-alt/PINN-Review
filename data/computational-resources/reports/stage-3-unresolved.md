# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S277`
Latest reconciliation: `Stage3-RC09` — PASS

## Current totals

- Unresolved findings: **1546**
- Explicit conflicts: **155**
- Next unresolved ID: `S3U-1547`

## New findings in S277

- `S3U-1544` — CR000326 / exact_periodic_hill_case_and_file_mapping_unresolved / medium: the paper uses periodic-hill data and the provider documents five PHLL geometry cases, but the exact case and repository files used by paper 691 are not independently established.
- `S3U-1545` — CR000326 / field_selection_and_preprocessing_unresolved / medium: the exact selected fields, training points, preprocessing transformations and train/validation mapping remain independently unresolved.
- `S3U-1546` — CR000326 / complete_version3_manifest_and_schema_unresolved / medium: version 3 is pinned, but the complete file manifest, sizes, checksums and internal array schema were not independently normalized.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused. RC09 remains count-neutral and adds no unresolved finding or explicit conflict.
