# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S283`
Latest reconciliation: `Stage3-RC09` — PASS

## Current totals

- Unresolved findings: **1568**
- Explicit conflicts: **157**
- Next unresolved ID: `S3U-1569`

## New findings in S283

- `S3U-1565` — CR000333 / exact_pga_lstm_site_variable_and_time_subset_unresolved / medium: the exact reservoir/site, fields, dates and record subset used in the paper's case study are not independently pinned.
- `S3U-1566` — CR000333 / edi_portal_package_file_inventory_and_snapshot_unresolved / medium: the exact portal-visible package file inventory, immutable metadata snapshot and checksums were not independently retrieved.
- `S3U-1567` — CR000334 / paper_specific_preprocessing_and_sequence_construction_unresolved / medium: preprocessing, normalization, split and sequence construction are not mapped to the persistent DOI package.
- `S3U-1568` — CR000334 / package_intellectual_rights_metadata_unresolved / low: exact package-level intellectual-rights or reuse terms remain independently unverified.

VA000036 keeps CR000333 and CR000334 as two access identities for one underlying dataset; these findings are not interpreted as evidence of two independent scientific datasets. Existing findings and conflicts remain preserved; no historical unresolved ID is reused. RC09 remains count-neutral.
