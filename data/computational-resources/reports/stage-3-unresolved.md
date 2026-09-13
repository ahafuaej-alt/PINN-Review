# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S269`
Latest reconciliation: `Stage3-RC09` — PASS

## Current totals

- Unresolved findings: **1520**
- Explicit conflicts: **155**
- Next unresolved ID: `S3U-1521`

## New findings in S269

- `S3U-1518` — CR000318 / paper_specific_deposit_file_case_mapping_unresolved / medium: the paper documents the 30,000-point HAWC2 simulation source database and its model variables, but the exact DTU deposit input files/cases and subset mapping used for Atlas paper 590 are not independently established at file level.
- `S3U-1519` — CR000318 / deposited_postprocessing_schema_unresolved / medium: 10-minute statistical post-processing is documented in the primary paper, but the exact deposited post-processed file schema, column names, units and file-level variable mapping are not independently verified.
- `S3U-1520` — CR000318 / dataset_license_and_payload_verification_deferred / medium: no explicit dataset licence was independently verified for the DTU deposit and no dataset payload, HAWC2 input/output file or archive was downloaded/opened, so file manifests and checksums remain unverified.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused. RC09 remains count-neutral and adds no unresolved finding or explicit conflict.
