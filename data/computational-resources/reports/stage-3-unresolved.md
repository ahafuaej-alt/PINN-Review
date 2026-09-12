# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-12
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S225`

## Current totals

- Unresolved findings: **1410**
- Explicit conflicts: **146**
- Next unresolved ID: `S3U-1411`

## New findings in S225

- `S3U-1407` — CR000261 / stage2_linked_archives_not_deep_inspected / medium: The three Stage-2-authorized code archives are identified by the official project page, but exact archive-member inspection was not completed; the separate official-author MMDT repository remains corroborating evidence only and is not asserted equivalent to `Hoffman_ICLR13_MMDT_v3.zip`.
- `S3U-1408` — CR000261 / project_and_archive_software_license_unknown / medium: No project-level or inspected archive-level software license is established for the Transformation Learning, latent-domain, or MMDT code bundles; the supporting MMDT GitHub repository also has no established repository license in the inspected metadata/files.
- `S3U-1409` — CR000261 / environment_and_dependency_versions_incomplete / medium: The project and MMDT repository identify MATLAB plus Transformation Learning, LIBSVM/liblinear-weights dependencies, but exact dependency versions and a complete installation/environment specification are not provided.
- `S3U-1410` — CR000261 / external_dataset_payloads_and_licenses_unverified / low: Office, Office-Caltech and Bing-Caltech roles and protocols are documented, but dataset file-level integrity, dataset-specific reuse licenses, exact payloads and current download accessibility were not independently inspected in this checkpoint.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
