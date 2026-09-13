# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S263`
Latest reconciliation: `Stage3-RC08` — PASS

## Current totals

- Unresolved findings: **1501**
- Explicit conflicts: **154**
- Next unresolved ID: `S3U-1502`

## New findings in S263

- `S3U-1497` — CR000312 / retired_version5_payload_unavailable / high: ATL03 Version 5 is retired and NSIDC states that data access is no longer available; the exact historical HDF5 payload used by the paper therefore cannot be obtained from the authoritative Version-5 portal for static end-to-end reconstruction.
- `S3U-1498` — CR000312 / exact_granule_subset_identity_unresolved / medium: the paper documents study regions and acquisition dates but does not provide a complete set of ATL03 granule filenames or RGT/cycle/region and beam identifiers sufficient to reconstruct the exact subset unambiguously.
- `S3U-1499` — CR000312 / retirement_access_date_timing_conflict / medium: NSIDC announced ATL03 Version-5 payload retirement for 19 December 2023 with data access unavailable thereafter, while the paper states that the Version-5 URL was accessed on 21 January 2024 and describes the data as available there; documentation-page access versus payload access is not distinguishable from the paper statement.
- `S3U-1500` — CR000312 / item_level_reuse_license_unresolved / medium: NSIDC requires dataset citation but no explicit item-level reuse licence for the exact historical Version-5 resource was established from the verified record.
- `S3U-1501` — CR000312 / derived_bathymetric_label_payload_unresolved / medium: the paper documents AE-DBSCAN, refraction and tide corrections used to derive ATL03 reference bathymetric points, but an exact deposited payload of the processed points/training labels was not identified.

The Stage-2 geolocation-advisory exposure question is resolved for the paper-reported study dates: the latest listed ICESat-2 acquisition is 15 September 2021, before the provider-documented issue onset of 24 October 2021.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
