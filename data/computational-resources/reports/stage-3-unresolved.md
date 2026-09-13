# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S262`
Latest reconciliation: `Stage3-RC08` — PASS

## Current totals

- Unresolved findings: **1496**
- Explicit conflicts: **153**
- Next unresolved ID: `S3U-1497`

## New findings in S262

- `S3U-1493` — CR000311 / motor_rating_cross_source_conflict / high: the 2022 paper reports a 1.1 kW induction motor rated 380 V and 1435 rpm, while current LIAS MCSA-DC provider documentation reports 1.1 kW, 400 V, 50 Hz and 1425 rpm for the rotor-bar-failure bench; the discrepancy is preserved as explicit conflicting evidence.
- `S3U-1494` — CR000311 / historical_to_current_package_continuity_unresolved / medium: the paper accessed the dataset on 20 October 2022, whereas the current download is labelled Version 1 (2023); matching class/speed record counts do not establish file-level identity.
- `S3U-1495` — CR000311 / archive_internal_files_not_inspected / medium: the current tar.gz package, CSV payloads and included descriptive file were not downloaded or opened, so byte-level/file-level continuity and internal metadata remain unverified.
- `S3U-1496` — CR000311 / paper_split_to_current_csv_mapping_unresolved / medium: the paper states a half-training/half-testing split and three speed-based test groups, but it does not identify which current `ccs*.csv` files belong to each train/test subset.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
