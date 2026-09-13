# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S276`
Latest reconciliation: `Stage3-RC09` — PASS

## Current totals

- Unresolved findings: **1543**
- Explicit conflicts: **155**
- Next unresolved ID: `S3U-1544`

## New findings in S276

- `S3U-1541` — CR000325 / complete_manifest_version_and_checksums_unresolved / medium: the Apollo landing verifies the dataset and exposes representative files, but the complete 16-experiment file inventory, item version, checksums and any per-file licence exceptions were not independently normalized.
- `S3U-1542` — CR000325 / paper_subset_schema_and_preprocessing_mapping_unresolved / medium: the paper identifies H1 and H4 and documents acquisition and PINN ingestion, but the exact repository-variable schema and complete preprocessing/file mapping remain independently unresolved.
- `S3U-1543` — CR000325 / matlab_environment_and_entrypoints_unresolved / medium: the provider describes deposited MATLAB energetics code, but the MATLAB release, toolboxes, dependency versions and exact entrypoint files are not specified in the bounded metadata.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused. RC09 remains count-neutral and adds no unresolved finding or explicit conflict.
