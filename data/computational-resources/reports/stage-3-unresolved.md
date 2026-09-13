# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S266`
Latest reconciliation: `Stage3-RC09` — PASS

## Current totals

- Unresolved findings: **1511**
- Explicit conflicts: **155**
- Next unresolved ID: `S3U-1512`

## New findings in S266

- `S3U-1509` — CR000315 / paper_specific_sample_and_task_partition_unresolved / medium: the official challenge-level training/test partition is known, but the exact cut-level sample selection and paper-specific task partition used for every reported result are not independently established by the bounded source set.
- `S3U-1510` — CR000315 / paper_specific_preprocessing_unresolved / medium: the exact filtering, feature extraction, normalization, windowing or aggregation, and wear-label handling used by Atlas paper 572 are not independently established by the bounded source set.
- `S3U-1511` — CR000315 / payload_and_license_verification_deferred / medium: no challenge archive, CSV or wear file was downloaded or opened, so exact file-level integrity and schema were not independently verified; the verified official challenge page also does not expose an explicit dataset licence.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused. RC09 remains count-neutral and adds no unresolved finding or explicit conflict.
