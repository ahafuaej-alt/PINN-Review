# Computational Resources Stage 2 — B011 Checkpoint 03 Progress

Verification date: 2026-08-29

This checkpoint continues B011 from checkpoint 02 and records exactly CR000274 through CR000276. Checkpoint-specific progress reports remain the authoritative continuation deltas until the cumulative progress report is next consolidated.

## Current authoritative checkpoint

| Field | Value |
|---|---|
| Current logical batch | B011 (in progress) |
| Last completed resource | CR000276 |
| Last persistence checkpoint | B011-C03 |
| Next resource | CR000277 |
| Completed expansion batches | 10 |
| Expansion resources processed | 263 |
| Pending expansion resources | 81 |
| Expansion relationships verified | 216 |
| Completed Stage-1 resource count | 276 |
| Remaining Stage-1 resource count | 81 |
| Completed Stage-1 PRL assertions | 241 |
| Pending Stage-1 PRL assertions | 90 |
| Verified relationship records | 233 |
| Explicitly `not_verified` relationship records | 9 |
| Current scientific-review items | 2 |
| Current ordinary manual-review resources | 10 |
| B011 resources completed | 13 of 25 |
| B011 resources remaining | 12 |
| Current QA status | B011-C03 passed |

Completed Stage-1 CR IDs are `CR000001–CR000276` plus promoted `CR000358`. Pending Stage-1 CR IDs are `CR000277–CR000357`.

The pilot set, B001–B010, and B011 checkpoints C01–C03 must not be reprocessed. Resume at **CR000277**.

## B011 checkpoint 03 summary

Three resources were processed: CR000274 through CR000276.

- CR000274 remains `dataset_or_data_source`. The exact RADAR4KIT record identifies *Spatio-Temporal Interface Reconstruction by Means of Glare Points and Deep Learning (research data)* as a published KIT dataset with DOI `10.35097/mmnxkbqqeye8p5tx`, CC BY-SA 4.0, a reported 13.1 GB archive, MD5 `1a8662452fc0655820c387ee59e2ab32`, experimental image data, and trained neural-network weights. No Atlas-paper relationship is stated in Stage 1 and none is invented.
- CR000275 remains `dataset_or_data_source`. TUM's authoritative mediaTUM record identifies m1524895 as the WeatherBench modified-ERA5 research dataset, reports approximately 5.8 TB across 315 files, documents the `dataserv.ub.tum.de` distribution service, and explicitly states CC BY 4.0. The direct Stage-1 endpoint did not provide a reliable transport response during verification, so redirect/final-URL semantics remain bounded unknowns rather than guessed. No Atlas-paper relationship is stated in Stage 1.
- CR000276 remains `dataset_or_data_source`. The live HYPERVIEW page documents 2886 hyperspectral soil patches, 150 contiguous bands, research-only non-commercial use terms, and required citation DOI `10.1109/ICIP46576.2022.9897443`. Atlas paper 128 explicitly states that its analyzed Hyperview dataset is publicly available at this exact AI4EO URL. Stage 1 already preserves Atlas ID 128 on CR000276 and source line 458 explicitly names the association, but its PRL manifest omitted a relationship record; PRL000333 therefore reconciles the omission as verified `paper_dataset_mention` without changing CR identity. The official page's linked starter repository was statically pinned at `207b46abbfce5d3bf0885cf8b75ae85a8b72644d`; it contains a README and starter notebook and is supporting material rather than the primary dataset identity.

Checkpoint 03 verifies three dataset identities and one recovered paper-dataset relationship. Because the recovered PRL was absent from the Stage-1 PRL manifest, the completed/pending Stage-1 PRL assertion counts remain 241/90; the total verified Stage-2 relationship-record count increases to 233.

No third-party code was executed, no external dataset was downloaded, no archive, notebook, model, or data file was unpacked or parsed, and no Stage-3 normalization was performed. No new alias, ordinary manual-review item, scientific-review item, schema issue, or stop condition was produced.

B011 remains in progress. The next resource is **CR000277**.
