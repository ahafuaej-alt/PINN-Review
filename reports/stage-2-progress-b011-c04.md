# Computational Resources Stage 2 — B011 Checkpoint 04 Progress

Verification date: 2026-08-29

This checkpoint continues B011 from checkpoint 03 and records exactly CR000277 through CR000279. Checkpoint-specific progress reports remain the authoritative continuation deltas until the cumulative progress report is next consolidated.

## Current authoritative checkpoint

| Field | Value |
|---|---|
| Current logical batch | B011 (in progress) |
| Last completed resource | CR000279 |
| Last persistence checkpoint | B011-C04 |
| Next resource | CR000280 |
| Completed expansion batches | 10 |
| Expansion resources processed | 266 |
| Pending expansion resources | 78 |
| Expansion relationships verified | 219 |
| Completed Stage-1 resource count | 279 |
| Remaining Stage-1 resource count | 78 |
| Completed Stage-1 PRL assertions | 245 |
| Pending Stage-1 PRL assertions | 86 |
| Verified relationship records | 236 |
| Explicitly `not_verified` relationship records | 9 |
| Current scientific-review items | 2 |
| Current ordinary manual-review resources | 10 |
| B011 resources completed | 16 of 25 |
| B011 resources remaining | 9 |
| Current QA status | B011-C04 passed |

Completed Stage-1 CR IDs are `CR000001–CR000279` plus promoted `CR000358`. Pending Stage-1 CR IDs are `CR000280–CR000357`.

The pilot set, B001–B010, and B011 checkpoints C01–C04 must not be reprocessed. Resume at **CR000280**.

## B011 checkpoint 04 summary

Three resources were processed: CR000277 through CR000279.

- CR000277 remains `dataset_or_data_source`. Atlas paper 144 explicitly states that the data supporting Section 6 are openly available at the exact Kaggle URL represented by CR000277, verifying existing Stage-1 relationship `PRL000028`. The authoritative upstream UCI record identifies the underlying *Individual Household Electric Power Consumption* dataset with DOI `10.24432/C58K54`, 2,075,259 minute-level measurements over 47 months, and CC BY 4.0. The CR identity remains the Stage-1 Kaggle landing page; the license finding is explicitly scoped to the authoritative upstream UCI dataset because the Kaggle item's own license metadata was not independently extracted.
- CR000278 remains `dataset_or_data_source`. Atlas paper 146 explicitly states that the research data used in the study are available in the European Interconnection for Research Innovation & Entrepreneurship (EIRIE) Platform under the exact Stage-1 URL, verifying existing `PRL000029`. Official European Commission/JRC material independently verifies EIRIE as the European smart-energy research and innovation platform. The direct CITnet item endpoint did not resolve to a stable retrievable page during this check, so redirect/final-URL, current item-level access semantics, standalone dataset citation metadata, and item-level license remain bounded unknowns rather than inferred.
- CR000279 remains `dataset_or_data_source`. Atlas paper 153 identifies the exact Copernicus Marine `GLOBAL_MULTIYEAR_PHY_001_030` data product used in the study, verifying existing `PRL000031`. The official product page identifies *Global Ocean Physics Reanalysis* (GLORYS12V1), DOI `10.48670/moi-00021`, 1/12° horizontal resolution, 50 vertical levels, daily/monthly products, NetCDF-4 access, and ocean-physics variables including temperature, salinity, currents and sea level. Use is governed by Copernicus Marine Service terms and its Licence Agreement, preserved as a custom non-SPDX finding. The separate Black Sea indicator DOI `10.48670/moi-00215` is CR000280 and was not processed here.

Checkpoint 04 verifies three dataset/data-location identities and all three existing Stage-1 paper-dataset relationships. Completed/pending Stage-1 PRL assertion counts are therefore 245/86, and the total verified Stage-2 relationship-record count is 236.

No third-party code was executed, no external dataset was downloaded, and no archive, notebook, model, or data file was unpacked, opened, subsetted, or parsed. No Stage-3 normalization was performed. No new alias, ordinary manual-review item, scientific-review item, schema issue, or stop condition was produced.

B011 remains in progress. The next resource is **CR000280**.
