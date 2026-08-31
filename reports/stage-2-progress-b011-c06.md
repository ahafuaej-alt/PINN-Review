# Computational Resources Stage 2 — B011 Checkpoint 06 Progress

Verification date: 2026-08-29

This checkpoint continues B011 from checkpoint 05 and records exactly CR000283 through CR000285. Checkpoint-specific progress reports remain the authoritative continuation deltas until the cumulative progress report is next consolidated.

## Current authoritative checkpoint

| Field | Value |
|---|---|
| Current logical batch | B011 (in progress) |
| Last completed resource | CR000285 |
| Last persistence checkpoint | B011-C06 |
| Next resource | CR000286 |
| Completed expansion batches | 10 |
| Expansion resources processed | 272 |
| Pending expansion resources | 72 |
| Expansion relationships verified | 225 |
| Completed Stage-1 resource count | 285 |
| Remaining Stage-1 resource count | 72 |
| Completed Stage-1 PRL assertions | 251 |
| Pending Stage-1 PRL assertions | 80 |
| Verified relationship records | 242 |
| Explicitly `not_verified` relationship records | 9 |
| Current scientific-review items | 2 |
| Current ordinary manual-review resources | 10 |
| B011 resources completed | 22 of 25 |
| B011 resources remaining | 3 |
| Current QA status | B011-C06 passed |

Completed Stage-1 CR IDs are `CR000001–CR000285` plus promoted `CR000358`. Pending Stage-1 CR IDs are `CR000286–CR000357`.

The pilot set, B001–B010, and B011 checkpoints C01–C06 must not be reprocessed. Resume at **CR000286**.

## B011 checkpoint 06 summary

Three resources were processed: CR000283 through CR000285.

- CR000283 remains `dataset_or_data_source`. Atlas paper 156 gives the exact Stage-1 swisstopo URL in its Data Availability Statement and explicitly uses SwissALTI3D 2019 for Swiss glacier slope/topography, verifying existing `PRL000035`. The current official swisstopo product page independently verifies swissALTI3D as the high-precision digital elevation model of Switzerland, while the official 2019 release documentation confirms the release context used by the paper. swisstopo free geodata are governed by custom OGD terms that permit use, redistribution, processing and commercial use with mandatory source attribution; official guidance explicitly does not use Creative Commons licensing for these geodata. The old French path's direct redirect behavior was not independently observed and remains a bounded snapshot field rather than a resource-identity ambiguity.
- CR000284 remains `dataset_or_data_source`. Atlas paper 156 states that COPDEM data are available through the exact Copernicus Browser URL and explicitly identifies the Copernicus GLO-30 product as the topography source for its High Mountain Asia evaluation, verifying `PRL000036`. Official Copernicus Data Space documentation identifies GLO-30 as the 30 m global Copernicus DEM instance derived from TanDEM-X acquisitions from 2011–2015, provides research citation DOI `10.5270/ESA-c5d3d65`, and preserves its free licence/ESA Copernicus Contributing Missions terms as custom non-SPDX conditions. Current August 2026 service documentation states that GLO-30 view access now requires CCM registration; this does not change the paper's January 2025 provenance.
- CR000285 remains `dataset_or_data_source`. Atlas paper 196 explicitly states that it adopts NREL time-series load and solar-PV data from reference [38], containing one year of data split into 300 training days, 30 validation days and 30 testing days. Reference [38] is the exact Stage-1 OEDI submission URL, verifying `PRL000039`. OEDI and U.S. federal dataset metadata identify *Sample IEEE123 Bus system for OEDI SI*, DOI `10.25984/2228282`, public access, and item-level CC BY 4.0. The broader AWS GADAL collection currently carries CC BY 3.0 United States metadata; that collection-level licence is kept distinct and does not overwrite the specific OEDI item licence.

Checkpoint 06 verifies three dataset/data-location identities and all three existing Stage-1 paper-dataset relationships. Completed/pending Stage-1 PRL assertion counts are therefore 251/80, and the total verified Stage-2 relationship-record count is 242.

No third-party code was executed, no external dataset was downloaded, and no DEM tile, raster, S3 object, archive, CSV, model, notebook, repository file, shapefile, or other data file was unpacked, opened, subsetted, or parsed. No Stage-3 normalization was performed. No new alias, ordinary manual-review item, scientific-review item, schema issue, or stop condition was produced.

B011 remains in progress. The next resource is **CR000286**.
