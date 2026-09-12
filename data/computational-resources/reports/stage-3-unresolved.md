# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-12
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S218`

## Current totals

- Unresolved findings: **1389**
- Explicit conflicts: **146**
- Next unresolved ID: `S3U-1390`

## New findings in S218

- `S3U-1386` — CR000252 / external_office_dataset_uninspected / medium: The external Office benchmark payload was not downloaded or inspected, so asset integrity and end-to-end data availability remain unverified.
- `S3U-1387` — CR000252 / historical_environment_portability / medium: The archive documents MATLAB R2009b on Linux but has no dependency manifest or native-extension build instructions; current portability of the bundled MEX artifacts is unknown.
- `S3U-1388` — CR000252 / random_seed_unreported / medium: The five-run workflow performs sample selection without an explicit random seed in the inspected entrypoint or configuration files.
- `S3U-1389` — CR000252 / configuration_expected_results_incomplete / low: The README supplies one illustrative accuracy table, but configuration-specific expected results are not documented for all eight extracted configurations.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
