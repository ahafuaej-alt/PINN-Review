# Computational Resources Stage 2 — B011 Checkpoint 02 Progress

Verification date: 2026-08-29

This checkpoint continues B011 from checkpoint 01 and records CR000269 through CR000273. Checkpoint-specific progress reports remain the authoritative continuation deltas until the cumulative progress report is next consolidated.

## Current authoritative checkpoint

| Field | Value |
|---|---|
| Current logical batch | B011 (in progress) |
| Last completed resource | CR000273 |
| Last persistence checkpoint | B011-C02 |
| Next resource | CR000274 |
| Completed expansion batches | 10 |
| Expansion resources processed | 260 |
| Pending expansion resources | 84 |
| Expansion relationships verified | 215 |
| Completed Stage-1 resource count | 273 |
| Remaining Stage-1 resource count | 84 |
| Completed Stage-1 PRL assertions | 241 |
| Pending Stage-1 PRL assertions | 90 |
| Verified relationship records | 232 |
| Explicitly `not_verified` relationship records | 9 |
| Current scientific-review items | 2 |
| Current ordinary manual-review resources | 10 |
| B011 resources completed | 10 of 25 |
| B011 resources remaining | 15 |
| Current QA status | B011-C02 passed |

Completed Stage-1 CR IDs are `CR000001–CR000273` plus promoted `CR000358`. Pending Stage-1 CR IDs are `CR000274–CR000357`.

The pilot set, B001–B010, and B011 checkpoints C01–C02 must not be reprocessed. Resume at **CR000274**.

## B011 checkpoint 02 summary

Five resources were processed: CR000269 through CR000273.

- CR000269 / EN4 remains `dataset_or_data_source`. The official Met Office EN4 service provides quality-controlled ocean temperature/salinity profiles and monthly objective analyses. Atlas paper 50 explicitly uses EN4 data in its SMAP sea-surface-salinity bias-correction workflow, so PRL000009 is verified. EN4's custom data-use conditions are retained as non-SPDX terms; downloadable archive/NetCDF products were not retrieved.
- CR000270 / XJTU-SY remains `dataset_or_data_source`. Atlas paper 73 gives the exact dataset URL in its Data Availability Statement. The official page documents 15 run-to-failure bearings, three operating conditions, vibration measurements, download mirrors, and the requested dataset citation; PRL000015 is verified. No explicit reusable dataset license was independently identified.
- CR000271 / PlantVillage Kaggle remains `dataset_or_data_source`. Atlas paper 110 gives the exact Kaggle dataset URL in its data-acquisition description, verifying PRL000021. The public record identifies the PlantVillage plant-leaf image collection; its archive was not downloaded and no exact record-level reusable license was inferred.
- CR000272 / MagNet Challenge 2023 remains `dataset_or_data_source`. Stage-1 `minjiechen/magnetchallenge` permanently moved to `minjiechen/magnetchallenge-1` while retaining immutable GitHub repository ID 635501712. VA000053 records the repair without changing CR identity. The repository is pinned at `740fe6bbdb1cf7dffc5a4398f760d08fc26cd10e`, is MIT licensed, and documents the MagNet Challenge 2023 dataset/tooling plus successor resources. Atlas paper 118 evaluates on the complete MagNet Challenge 2023 dataset, so PRL000022 is verified.
- CR000273 / AM-dataset remains `dataset_or_data_source`. The public repository is pinned at `cb060543ddea2f9b49e306399d008da6d983be99`; its README identifies the same BeltClip study as Atlas paper 119 and the repository bundles `ANSYS-Data.txt` and `img_data_final.csv`. PRL000023 is verified. No repository license or formal dependency manifest was identified.

Checkpoint 02 verifies **five** Stage-1 dataset relationships and records one repository-move alias while preserving stable identifiers.

No third-party code was executed, no external dataset was downloaded, no archive or model artifact was unpacked, no bundled data file was parsed, and no Stage-3 normalization was performed. No new ordinary manual-review item, scientific-review item, relationship type, schema issue, or stop condition was produced.

B011 remains in progress. The next resource is **CR000274**.
