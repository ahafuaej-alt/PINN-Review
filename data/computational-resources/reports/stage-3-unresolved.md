# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S279`
Latest reconciliation: `Stage3-RC09` — PASS

## Current totals

- Unresolved findings: **1550**
- Explicit conflicts: **156**
- Next unresolved ID: `S3U-1551`

## New findings in S279

- `S3U-1547` — CR000328 / competition_access_version_and_checksums_unresolved / medium: access requires Kaggle competition-rule acceptance and no immutable versioned, checksummed dataset manifest is independently pinned.
- `S3U-1548` — CR000328 / exact_image_subset_and_patient_pairing_unresolved / medium: exact paper-used image IDs, subset size, patient/eye-pair handling and duplicate policy are not independently reconciled.
- `S3U-1549` — CR000328 / preprocessing_and_imbalance_handling_unresolved / medium: cropping, resizing/scaling, normalization, augmentation and class-imbalance handling are not independently mapped to exact provider files.
- `S3U-1550` — CR000328 / split_lineage_and_seed_unresolved / medium: the reported 70:30 split is not bound to exact image IDs or a verified random seed.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused. RC09 remains count-neutral and adds no unresolved finding or explicit conflict.
