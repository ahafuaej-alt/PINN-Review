# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S275`
Latest reconciliation: `Stage3-RC09` — PASS

## Current totals

- Unresolved findings: **1540**
- Explicit conflicts: **155**
- Next unresolved ID: `S3U-1541`

## New findings in S275

- `S3U-1537` — CR000324 / nrc_dataset_file_manifest_and_versioning_unresolved / medium: the corrected data DOI resolves to a specific NRC Digital Repository object, but the provider interface did not yield a retrievable file manifest, so exact filenames, formats, sizes, checksums and dataset version remain independently unresolved.
- `S3U-1538` — CR000324 / paper_to_repository_partition_mapping_unresolved / medium: the primary paper documents 200,000-example training sets, 50,000-example validation sets and an additional 200,000 random-potential examples, but the exact NRC file mapping for potential classes, label arrays and train/validation partitions is not independently established.
- `S3U-1539` — CR000324 / dataset_license_unresolved / medium: no explicit dataset-level licence was independently verified; publication copyright/licence terms and repository-host assumptions are not transferred to the dataset by inference.
- `S3U-1540` — CR000324 / random_generation_seed_unreported / low: the paper documents randomized potential-generation procedures and parameter ranges but does not report a seed sufficient to regenerate the exact random realization from the publication alone.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused. RC09 remains count-neutral and adds no unresolved finding or explicit conflict.
