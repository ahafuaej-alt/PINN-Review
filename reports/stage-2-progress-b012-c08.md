# Computational Resources Stage 2 — B012 Checkpoint 08 Progress

Verification date: 2026-08-29

This checkpoint records exactly CR000310 through CR000312 and continues from B012-C07.

## Current authoritative checkpoint

| Field | Value |
|---|---|
| Current logical batch | B012 (in progress) |
| Last completed resource | CR000312 |
| Last persistence checkpoint | B012-C08 |
| Next resource | CR000313 |
| Completed expansion batches | 11 |
| Expansion resources processed | 299 |
| Pending expansion resources | 45 |
| Expansion relationships verified | 253 |
| Completed Stage-1 resource count | 312 |
| Remaining Stage-1 resource count | 45 |
| Completed Stage-1 PRL assertions | 282 |
| Pending Stage-1 PRL assertions | 49 |
| Verified relationship records | 270 |
| Explicitly `not_verified` relationship records | 12 |
| Current scientific-review items | 2 |
| Current ordinary manual-review resources | 15 |
| B012 resources completed | 24 of 25 |
| B012 resources remaining | 1 |
| Current QA status | B012-C08 passed |

Completed Stage-1 CR IDs are `CR000001–CR000312` plus promoted `CR000358`. Pending Stage-1 CR IDs are `CR000313–CR000357`. Resume at **CR000313**.

## Checkpoint summary

- **CR000310** remains `dataset_or_data_source`. Stage 1 contains a malformed DOI, `10.17632/p2yrryg9k6z.1`, with one extra `r`. Atlas paper 555, *Physics-Informed LSTM hyperparameters selection for gearbox fault detection* (`10.1016/j.ymssp.2022.108907`), uses the UNSW gear tooth wear run-to-failure dataset and cites Ke Feng's Version 1 dataset as `10.17632/p2yryg9k6z.1`. The Mendeley Data record independently verifies *Gear wear run-to-failure dataset*, Version 1, publication date 12 August 2021, UNSW context, and CC BY 4.0. `VA000055` repairs the source URL without changing CR000310 or `PRL000169`, which is verified. Version 1 describes 10-second acquisitions while the paper reports 11 seconds and Version 2 later reports 11 seconds; this bounded version nuance is preserved for Stage 3 rather than used to replace the paper-cited Version 1 identity.
- **CR000311** remains `dataset_or_data_source`. Atlas paper 563, *Comparative Study between Physics-Informed CNN and PCA in Induction Motor Broken Bars MCSA Detection* (`10.3390/s22239494`), states that the dataset was generated in the LIAS laboratory of Poitiers, describes the induction-motor test bench and measured currents/voltages/time signals, and gives the exact MCSA URL in its Data Availability Statement. The current MCSA-DC portal documents the rotor-bar-failure benchmark, additional speed and rotor-position channels, a Version 1 (2023) download package, and explicit CC BY 4.0 terms. `PRL000172` is verified. The current package label postdates the paper's 2022 access date, so file-level continuity remains Stage 3 work.
- **CR000312** remains `dataset_or_data_source`. Atlas paper 571, *Nearshore Bathymetry from ICESat-2 LiDAR and Sentinel-2 Imagery Datasets Using Physics-Informed CNN* (`10.3390/rs16030511`), explicitly extracts reference bathymetric points from ICESat-2 ATL03 data and gives the exact Version 5 NSIDC URL. NSIDC identifies *ATLAS/ICESat-2 L2A Global Geolocated Photon Data, Version 5*, DOI `10.5067/ATLAS/ATL03.005`, and provides citation guidance, user guide, ATBDs and a V5 data dictionary. NSIDC now marks this historical release retired in favor of a newer version and documents a V5 geolocation issue affecting data beginning 24 October 2021. These present-day lifecycle/quality notes do not invalidate the paper's January 2024 provenance; `PRL000175` is verified. No item-level reuse licence was inferred from citation requirements alone.

Checkpoint 08 processes three Stage-1 PRL assertions and verifies all three. Completed/pending Stage-1 PRL assertion counts are therefore 282/49; total verified Stage-2 relationship records are 270 and explicit `not_verified` records remain 12.

No Mendeley file, LIAS archive, CSV, ICESat-2 HDF5 granule, model, notebook, source code, or other third-party data payload was downloaded, opened, parsed, unpacked, installed, subsetted, or executed. No Stage-3 normalization was performed. No new ordinary manual-review item, scientific-review item, schema issue, or stop condition was produced.

B012 remains in progress with one resource remaining. The next resource is **CR000313**.
