# Computational Resources Stage 2 — B013 Checkpoint 01 Progress

Verification date: 2026-08-29

This checkpoint begins B013 and processes exactly CR000314–CR000316. Checkpoint-specific reports remain the authoritative continuation state.

## Current authoritative checkpoint

| Field | Value |
|---|---|
| Current logical batch | B013 (in progress) |
| Last completed resource | CR000316 |
| Last persistence checkpoint | B013-C01 |
| Next resource | CR000317 |
| Completed expansion batches | 12 |
| Expansion resources processed | 303 |
| Pending expansion resources | 41 |
| Expansion relationships verified | 257 |
| Completed Stage-1 resource count | 316 |
| Remaining Stage-1 resource count | 41 |
| Completed Stage-1 PRL assertions | 286 |
| Pending Stage-1 PRL assertions | 45 |
| Verified relationship records | 274 |
| Explicitly `not_verified` relationship records | 12 |
| Current scientific-review items | 2 |
| Current ordinary manual-review resources | 15 |
| B013 resources completed | 3 of 25 |
| B013 resources remaining | 22 |
| Current QA status | B013-C01 passed |

Completed Stage-1 CR IDs are `CR000001–CR000316` plus promoted `CR000358`. Pending Stage-1 CR IDs are `CR000317–CR000357`.

The pilot set, B001–B012, and all completed checkpoints through B013-C01 must not be reprocessed. Resume with **CR000317**.

## B013 checkpoint 01 summary

Three resources were processed: **CR000314–CR000316**.

- **CR000314** / NOAA CUDEM: Atlas paper 571 explicitly uses CUDEM as validation data for St. Thomas and St. Croix and gives the exact NOAA distribution URL. PRL000177 is verified. Current NOAA/NCEI metadata confirms public CUDEM products; the 1/9 arc-second product has DOI `10.25921/ds9v-ky35`. NOAA/NCEI public-domain/use constraints are retained as custom non-SPDX terms rather than generalized to every source dataset.
- **CR000315** / 2010 PHM Society Conference Data Challenge: Atlas paper 572 explicitly states that its experimental data are from this challenge and gives the exact URL. PRL000178 is verified. The official page documents six CNC cutter records for RUL estimation. No explicit dataset licence was found on the verified official page, so licence remains bounded unknown rather than inferred from third-party mirrors.
- **CR000316** / Mendeley Data version 1: *Bearing Vibration Data under Time-varying Rotational Speed Conditions*, DOI `10.17632/v43hmbwxpm.1`, Huan Huang and Natalie Baddour. Atlas paper 577 cites the associated variable-speed bearing dataset, verifying PRL000179. Version 1 contains 36 datasets and is licensed CC BY 4.0.

No alias, ordinary manual-review item, scientific-review item, classification correction, schema issue, or stop condition was produced.

No DEM raster, NetCDF/GeoTIFF, PHM challenge archive, cutter CSV/wear file, Mendeley vibration file, or other third-party payload was downloaded, opened, unpacked, parsed, subsetted, installed, or executed. No Stage-3 normalization was performed.

Stage 2 resumes with **CR000317**. CR000317 has not been started.
