# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-12
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S220`

## Current totals

- Unresolved findings: **1395**
- Explicit conflicts: **146**
- Next unresolved ID: `S3U-1396`

## New findings in S220

- `S3U-1392` — CR000255 / software_and_bundled_data_license_unknown / medium: GFK.zip contains no license file or license statement for the MATLAB source or bundled feature data.
- `S3U-1393` — CR000255 / matlab_environment_and_installation_unspecified / medium: The source identifies MATLAB and calls functions including `princomp`, `gsvd`, and `zscore`, but no MATLAB version, toolbox/runtime dependency specification, environment manifest, or installation procedure is provided.
- `S3U-1394` — CR000255 / random_seed_unreported / medium: The active 20-trial demo uses random per-class sampling without an explicit seed.
- `S3U-1395` — CR000255 / expected_result_unreported / low: The active demo prints per-trial and mean accuracy, but the archive supplies no reference expected value for the active webcam-to-DSLR configuration.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
