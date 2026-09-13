# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S273`
Latest reconciliation: `Stage3-RC09` — PASS

## Current totals

- Unresolved findings: **1533**
- Explicit conflicts: **155**
- Next unresolved ID: `S3U-1534`

## New findings in S273

- `S3U-1531` — CR000322 / archive_internal_manifest_and_schema_unresolved / medium: Zenodo pins the v2 ZIP name, size and MD5, but the archive was not opened, so its internal file inventory, schemas and internal checksums remain unverified.
- `S3U-1532` — CR000322 / paper_experiment_to_archive_mapping_unresolved / medium: the primary paper documents Marmousi and Overthrust studies and states that paper datasets are at the exact DOI, but the ZIP-internal mapping to individual figures, reference solutions and numerical-study datasets is not independently established.
- `S3U-1533` — CR000322 / dataset_license_unresolved / medium: the retrieved Zenodo record exposes a Rights/License section but no explicit licence value was independently available in the bounded evidence; publication licence terms are not transferred to the dataset by inference.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused. RC09 remains count-neutral and adds no unresolved finding or explicit conflict.
