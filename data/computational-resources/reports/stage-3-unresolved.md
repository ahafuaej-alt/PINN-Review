# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S243`
Latest reconciliation: `Stage3-RC08` — **PASS (count-neutral report-state continuity repair)**

## Current totals

- Unresolved findings: **1446**
- Explicit conflicts: **147**
- Next unresolved ID: `S3U-1447`

## New findings in S243

- `S3U-1445` — CR000288 / file_schema_and_preprocessing_bounded / low: DOI, V1 identity, CC BY 4.0 metadata and public 2.4 GB archive listing are verified, but file-level schema, preprocessing, temperature compensation, cycle segmentation and paper-specific splits remain bounded because the archive was not opened.
- `S3U-1446` — CR000289 / archive_schema_and_paper_split_bounded / low: DOI, v2 identity, CC BY 4.0 metadata and four public archive listings are verified, but cell-level inventory, CSV schema, chemistry/batch mapping, preprocessing and paper-specific splits remain bounded because the archives were not opened.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
