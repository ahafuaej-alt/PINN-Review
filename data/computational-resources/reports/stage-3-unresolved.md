# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S272`
Latest reconciliation: `Stage3-RC09` — PASS

## Current totals

- Unresolved findings: **1530**
- Explicit conflicts: **155**
- Next unresolved ID: `S3U-1531`

## New findings in S272

- `S3U-1528` — CR000321 / exact_event_selection_snapshot_unresolved / high: the paper defines the observational sample as the first 10,000 SCEDC events beginning 2019-01-01, but the exact event list, terminal timestamp, retrieval query and contemporaneous catalogue/version snapshot are not independently preserved.
- `S3U-1529` — CR000321 / phase_station_file_mapping_unresolved / medium: the paper and provider establish phase-arrival observations and station locations, but the exact phase-pick file manifest/fields, station subset and file-level mapping used for the manuscript case study are not independently reconstructed.
- `S3U-1530` — CR000321 / data_use_terms_and_payload_verification_deferred / medium: SCEDC provides public access and an archive citation DOI, while Stage 2 records SCEDC public-data use terms, but no SPDX-standard licence was independently resolved for this portal-level resource and no phase/station payload was opened.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused. RC09 remains count-neutral and adds no unresolved finding or explicit conflict.
