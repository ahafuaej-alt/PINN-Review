# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S246`
Latest reconciliation: `Stage3-RC08` — PASS

## Current totals

- Unresolved findings: **1450**
- Explicit conflicts: **147**
- Next unresolved ID: `S3U-1451`

## New findings in S246

- `S3U-1449` — CR000292 / collection_model_metadata_and_license_partial / low: The collection exposes four pretrained-model entries and one individual card was statically inspected, but collection-level reuse licensing, licence uniformity across all four models, file checksums and unopened model/configuration payloads remain bounded.
- `S3U-1450` — CR000293 / paper_specific_preprocessing_bounded / low: IXI provider metadata establish modalities, acquisition sites, NIFTI access and CC BY-SA 3.0, but paper-specific structural-sequence selection, downsampling, subject splits and preprocessing remain bounded because no payload was opened.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
