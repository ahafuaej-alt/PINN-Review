# Computational Resources Stage 2 — B012 Checkpoint 09 Progress

Verification date: 2026-08-29

This checkpoint closes B012 by processing its sole remaining unprocessed resource, CR000313. Consistent with the established B009-C06 batch-boundary precedent, it intentionally stops at the logical batch boundary rather than beginning B013 in the same checkpoint. Checkpoint-specific reports remain the authoritative continuation state.

## Current authoritative checkpoint

| Field | Value |
|---|---|
| Current logical batch | B012 (completed) |
| Last completed resource | CR000313 |
| Last persistence checkpoint | B012-C09 |
| Next logical batch | B013 |
| Next resource | CR000314 |
| Completed expansion batches | 12 |
| Expansion resources processed | 300 |
| Pending expansion resources | 44 |
| Expansion relationships verified | 254 |
| Completed Stage-1 resource count | 313 |
| Remaining Stage-1 resource count | 44 |
| Completed Stage-1 PRL assertions | 283 |
| Pending Stage-1 PRL assertions | 48 |
| Verified relationship records | 271 |
| Explicitly `not_verified` relationship records | 12 |
| Current scientific-review items | 2 |
| Current ordinary manual-review resources | 15 |
| B012 resources completed | 25 of 25 |
| B012 resources remaining | 0 |
| Current QA status | B012-C09 passed; B012 complete |

Completed Stage-1 CR IDs are `CR000001–CR000313` plus promoted `CR000358`. Pending Stage-1 CR IDs are `CR000314–CR000357`.

The pilot set, B001–B012, and all completed checkpoints through B012-C09 must not be reprocessed. Resume with **B013 at CR000314**.

## B012 checkpoint 09 summary

One resource was processed: **CR000313**, the sole remaining B012 resource.

- CR000313 / `https://earthexplorer.usgs.gov` is verified as the current USGS EROS EarthExplorer search/browse/metadata/download portal and remains `dataset_or_data_source`.
- Atlas paper 571, *Nearshore Bathymetry from ICESat-2 LiDAR and Sentinel-2 Imagery Datasets Using Physics-Informed CNN* (DOI `10.3390/rs16030511`), states that Sentinel-2 Level-1C imagery with less than 10% cloud cover was downloaded from the USGS website and gives the exact EarthExplorer URL in its Data Availability Statement. **PRL000176 is verified**.
- Current USGS Sentinel-2 documentation independently identifies Multi-Spectral Instrument Level-1C products as available for download and documents Level-1C processing and band metadata.
- EarthExplorer currently exposes public search, browse and metadata functionality; download/order actions require an EROS Registration System account. This current access requirement does not contradict the paper's January 2024 provenance.
- Product-level reuse is governed by the **Copernicus Sentinel Data Legal Notice**, which provides free, full and open access with source-notice requirements. These are custom non-SPDX terms; no generic USGS public-domain or Creative Commons licence is invented for the Sentinel-2 product.
- The paper also mentions downloading the original L1C image from the ESA website in Section 3.2.2. This is treated as compatible multi-route Sentinel-2 access rather than a relationship conflict; exact scene acquisition route and identifiers are deferred to Stage 3.
- No alias, ordinary manual-review item, scientific-review item, new relationship type, schema issue, or stop condition was produced.

No Sentinel-2 scene, SAFE archive, JPEG2000 band, metadata package or other third-party payload was downloaded, opened, unpacked, parsed, subsetted, installed or executed. No Stage-3 normalization was performed.

**B012 is complete.** Stage 2 resumes with **B013 at CR000314**.
