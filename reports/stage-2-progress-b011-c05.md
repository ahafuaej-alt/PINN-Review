# Computational Resources Stage 2 — B011 Checkpoint 05 Progress

Verification date: 2026-08-29

This checkpoint continues B011 from checkpoint 04 and records exactly CR000280 through CR000282. Checkpoint-specific progress reports remain the authoritative continuation deltas until the cumulative progress report is next consolidated.

## Current authoritative checkpoint

| Field | Value |
|---|---|
| Current logical batch | B011 (in progress) |
| Last completed resource | CR000282 |
| Last persistence checkpoint | B011-C05 |
| Next resource | CR000283 |
| Completed expansion batches | 10 |
| Expansion resources processed | 269 |
| Pending expansion resources | 75 |
| Expansion relationships verified | 222 |
| Completed Stage-1 resource count | 282 |
| Remaining Stage-1 resource count | 75 |
| Completed Stage-1 PRL assertions | 248 |
| Pending Stage-1 PRL assertions | 83 |
| Verified relationship records | 239 |
| Explicitly `not_verified` relationship records | 9 |
| Current scientific-review items | 2 |
| Current ordinary manual-review resources | 10 |
| B011 resources completed | 19 of 25 |
| B011 resources remaining | 6 |
| Current QA status | B011-C05 passed |

Completed Stage-1 CR IDs are `CR000001–CR000282` plus promoted `CR000358`. Pending Stage-1 CR IDs are `CR000283–CR000357`.

The pilot set, B001–B010, and B011 checkpoints C01–C05 must not be reprocessed. Resume at **CR000283**.

## B011 checkpoint 05 summary

Three resources were processed: CR000280 through CR000282.

- CR000280 remains `dataset_or_data_source`. Atlas paper 153 explicitly compares its estimated Black Sea sea-level trend with the CMEMS `OMI_CLIMATE_SL_BLKSEA_area_averaged_anomalies` product and gives DOI `10.48670/moi-00215`, verifying existing Stage-1 relationship `PRL000032`. The official Copernicus Marine record identifies *Black Sea Mean Sea Level time series and trend from Observations Reprocessing*, exposes product documentation and data-access services, and confirms the DOI. Copernicus Marine terms are retained as custom non-SPDX service terms. Direct DOI-resolver redirect semantics were not independently observed and remain a bounded snapshot unknown.
- CR000281 remains `dataset_or_data_source`. The original source note and Stage-1 record contain a malformed host, `www.gtn-g-ch`; Atlas paper 156 and the live official GTN-G catalogue use `www.gtn-g.ch`. This transcription defect is repaired through `VA000054` without changing CR000281 or existing Stage-1 relationship `PRL000033`. The official catalogue identifies *Glacier Thickness Database (GlaThiDa) 3.1.0*, DOI `10.5904/wgms-glathida-2020-10`, global glacier-thickness observations, CSV/zipped distribution, and an explicit CC BY 4.0 rights mapping. Paper 156 states that GlaThiDa data are available at the official URL and uses GlaThiDa measurements for its glacier-thickness evaluation, verifying `PRL000033`.
- CR000282 remains `dataset_or_data_source`. Atlas paper 156 states that RGI is available through the exact GLIMS portal and explicitly identifies Randolph Glacier Inventory version 7.0 in the study, verifying existing `PRL000034`. The official RGI documentation identifies RGI 7.0 as a globally complete glacier-outline inventory, provides DOI `10.5067/f6jmovy5navz`, and states CC BY 4.0 distribution terms.

Checkpoint 05 verifies three dataset/data-product identities and all three existing Stage-1 paper-dataset relationships. Completed/pending Stage-1 PRL assertion counts are therefore 248/83, and the total verified Stage-2 relationship-record count is 239. One source URL typo is resolved through the established alias mechanism; it does not create a new resource identity or manual-review item.

No third-party code was executed, no external dataset was downloaded, and no archive, CSV, shapefile, model, notebook, or data file was unpacked, opened, subsetted, or parsed. No Stage-3 normalization was performed. No new ordinary manual-review item, scientific-review item, schema issue, or stop condition was produced.

B011 remains in progress. The next resource is **CR000283**.
