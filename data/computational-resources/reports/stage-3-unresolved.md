# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-14
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S301`
Latest reconciliation: `Stage3-RC09` — PASS

## Current totals

- Unresolved findings: **1626**
- Explicit conflicts: **158**
- Next unresolved ID: `S3U-1627`

## New findings in S301

- `S3U-1623` — CR000352 / dataset_wide_reuse_license_unresolved / medium: no single dataset-wide SPDX or equivalent reuse licence covering all COCO image and annotation content was independently established.
- `S3U-1624` — CR000352 / paper_765_coco_release_task_split_unresolved / medium: the exact COCO release/year, task and train/validation/test split used by paper 765 remain unresolved.
- `S3U-1625` — CR000352 / paper_765_coco_pipeline_configuration_unresolved / medium: resizing, normalization, augmentation, detector configuration and evaluation preprocessing are not fully reconstructed from the verified dataset relationship.
- `S3U-1626` — CR000352 / image_annotation_archive_snapshot_unresolved / medium: no immutable image/annotation archive snapshot or paper-specific checksum set was established within the bounded static inspection.

## New explicit conflicts in S301

None. Existing conflicts remain preserved.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused. RC09 remains count-neutral.
