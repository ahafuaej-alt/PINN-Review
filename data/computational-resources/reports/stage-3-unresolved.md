# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S282`
Latest reconciliation: `Stage3-RC09` — PASS

## Current totals

- Unresolved findings: **1564**
- Explicit conflicts: **157**
- Next unresolved ID: `S3U-1565`

## New findings in S282

- `S3U-1561` — CR000332 / exact_historical_files_timestamps_and_revision_unresolved / medium: the exact legacy product files, timestamps, revision and checksums consumed by paper 716 are not reconstructed.
- `S3U-1562` — CR000332 / paper_specific_variable_and_subset_mapping_unresolved / medium: exact variables and spatial/temporal subset used by the paper are not independently pinned.
- `S3U-1563` — CR000332 / paper_specific_extraction_and_preprocessing_unresolved / medium: extraction queries, transformations and preprocessing are not independently documented.
- `S3U-1564` — CR000332 / legacy_to_current_dataset_equivalence_unresolved / medium: the legacy identifier and current GLO12/DOI lineage are linked, but exact dataset-level revision equivalence is not established.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused. RC09 remains count-neutral and adds no unresolved finding or explicit conflict.
