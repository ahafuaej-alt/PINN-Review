# Computational Resources Stage 2 — B011 Checkpoint 07 and Completion Progress

Verification date: 2026-08-29

This checkpoint completes B011 and records exactly CR000286 through CR000288. Checkpoint-specific progress reports remain the authoritative continuation deltas until the cumulative progress report is next consolidated.

## Current authoritative checkpoint

| Field | Value |
|---|---|
| Current logical batch | B012 (next) |
| Last completed resource | CR000288 |
| Last completed batch | B011 |
| Last persistence checkpoint | B011-C07 |
| Next resource | CR000289 |
| Completed expansion batches | 11 |
| Expansion resources processed | 275 |
| Pending expansion resources | 69 |
| Expansion relationships verified | 228 |
| Completed Stage-1 resource count | 288 |
| Remaining Stage-1 resource count | 69 |
| Completed Stage-1 PRL assertions | 254 |
| Pending Stage-1 PRL assertions | 77 |
| Verified relationship records | 245 |
| Explicitly `not_verified` relationship records | 9 |
| Current scientific-review items | 2 |
| Current ordinary manual-review resources | 11 |
| B011 resources completed | 25 of 25 |
| B011 relationships verified | 23 of 23 |
| Current QA status | B011 passed |

Completed Stage-1 CR IDs are `CR000001–CR000288` plus promoted `CR000358`. Pending Stage-1 CR IDs are `CR000289–CR000357`.

The pilot set, B001–B010, and B011 checkpoints C01–C07 must not be reprocessed. Resume at **CR000289** in B012.

## B011 checkpoint 07 summary

Three resources were processed: CR000286 through CR000288.

- CR000286 remains `dataset_or_data_source`. Atlas paper 201 names the ASSISTment2012 and ASSIST chall datasets, describes their experimental use, and gives the exact USTC BASE location, verifying `PRL000040`. The current public directory lists the corresponding 2012–2013 and anonymized competition archives. No item-level dataset DOI or reuse license was identified on the checked directory or in the paper, so those fields remain bounded rather than inferred.
- CR000287 remains `dataset_or_data_source`. Atlas paper 293 states that corresponding datasets are accessible via its reference [30], whose title, authors, year, and exact DOI identify CR000287 and verify `PRL000052`. The DOI currently returns DOI Not Found, and an exact search in the official RWTH Publications catalogue produced no matching record. Current files, documentation, license, and repository location therefore form one new ordinary manual-review item; the primary-paper relationship itself is verified.
- CR000288 remains `dataset_or_data_source`. Atlas paper 299 identifies DOI `10.5281/zenodo.10963339` as the public XJTU battery dataset generated in the study, verifying `PRL000055`. The DOI resolves to the official Zenodo record, which verifies version V1, creator Wang, Fujin, CC BY 4.0, 55 18650 NCM batteries, six cycling strategies, 1 Hz sampling, linked publication context, and a public 2.4 GB archive listing.

Checkpoint 07 verifies three resource identities and all three existing Stage-1 paper-dataset relationships. Completed/pending Stage-1 PRL assertion counts are therefore 254/77, and the total verified Stage-2 relationship-record count is 245.

No third-party code was executed, no external dataset was downloaded, and no ZIP, MATLAB file, PDF, student-interaction record, CFD dataset, battery file, archive, model, notebook, or other data file was unpacked, opened, subsetted, or parsed. No Stage-3 normalization was performed. No new alias, scientific-review item, schema issue, or stop condition was produced.

## B011 completion

B011 passes full QA with 25 resource records, 23 verified Stage-1 relationships, 25 unique evidence records, two unique alias resolutions, no bounded-unverified relationship, and one ordinary manual-review resource. Stage 2 resumes with B012 at **CR000289**.
