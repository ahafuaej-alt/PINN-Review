# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S268`
Latest reconciliation: `Stage3-RC09` — PASS

## Current totals

- Unresolved findings: **1517**
- Explicit conflicts: **155**
- Next unresolved ID: `S3U-1518`

## New findings in S268

- `S3U-1515` — CR000317 / paper_specific_pretraining_subset_and_split_unresolved / medium: the exact version-1 images/classes used for NeuroNet57 pre-training and the paper-specific train/validation/test handling are not independently established by the bounded source set.
- `S3U-1516` — CR000317 / paper_specific_pretraining_recipe_unresolved / medium: the exact cropping or margin removal, resize dimensions, normalization, augmentation and pre-training optimization schedule used by Atlas paper 582 are not independently established by the bounded source set.
- `S3U-1517` — CR000317 / payload_file_count_and_integrity_verification_deferred / medium: no Kaggle payload, archive or image was downloaded/opened, so file-level integrity and checksums were not independently verified; the provider narrative reports 7023 images while the current Data Explorer summary displays 7022 files, and that presentation difference remains unresolved rather than silently reconciled.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused. RC09 remains count-neutral and adds no unresolved finding or explicit conflict.
