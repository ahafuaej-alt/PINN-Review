# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S259`
Latest reconciliation: `Stage3-RC08` — PASS

## Current totals

- Unresolved findings: **1483**
- Explicit conflicts: **150**
- Next unresolved ID: `S3U-1484`

## New findings in S259

- `S3U-1481` — CR000308 / archive_internal_schema_not_inspected / medium: the public record exposes `training-data_H2O.tar.gz` and states that documentation is in an internal `README.pdf`, but the archive and README were not opened; structure count, file formats and field schema remain unresolved.
- `S3U-1482` — CR000308 / record_level_reuse_license_unresolved / medium: no explicit record-level reuse license was independently established, and no licence is inferred from Zenodo defaults, the associated paper, or platform policy.
- `S3U-1483` — CR000308 / paper_augmentation_to_deposit_mapping_unresolved / medium: the PiNN Supporting Information reports 2,841 additional liquid-water structures generated from molecular-dynamics snapshots using the original BPNN/RuNNer workflow, but their exact relationship to the original Zenodo archive is not established.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
