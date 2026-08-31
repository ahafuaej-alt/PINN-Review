# Computational Resources Stage 2 — B012 Checkpoint 07 Progress

Verification date: 2026-08-29

This checkpoint records exactly CR000307 through CR000309. The branch had advanced beyond the prior B011 checkpoint before this run began; B012-C06 was therefore read as the authoritative predecessor and no already-completed resource was reprocessed.

## Current authoritative checkpoint

| Field | Value |
|---|---|
| Current logical batch | B012 (in progress) |
| Last completed resource | CR000309 |
| Last persistence checkpoint | B012-C07 |
| Next resource | CR000310 |
| Completed expansion batches | 11 |
| Expansion resources processed | 296 |
| Pending expansion resources | 48 |
| Expansion relationships verified | 250 |
| Completed Stage-1 resource count | 309 |
| Remaining Stage-1 resource count | 48 |
| Completed Stage-1 PRL assertions | 279 |
| Pending Stage-1 PRL assertions | 52 |
| Verified relationship records | 267 |
| Explicitly `not_verified` relationship records | 12 |
| Current scientific-review items | 2 |
| Current ordinary manual-review resources | 15 |
| B012 resources completed | 21 of 25 |
| B012 resources remaining | 4 |
| Current QA status | B012-C07 passed |

Completed Stage-1 CR IDs are `CR000001–CR000309` plus promoted `CR000358`. Pending Stage-1 CR IDs are `CR000310–CR000357`. Resume at **CR000310**.

## Checkpoint summary

- **CR000307** remains `dataset_or_data_source`. Atlas paper 476 (*NSFnets*) explicitly says that it uses the turbulent-channel-flow database at `turbulence.pha.jhu.edu` as its reference DNS solution and source of reference/initial/boundary data, verifying `PRL000137`. Atlas paper 692 independently states that its training and testing data originate from the same JHTDB turbulent-channel-flow database, verifying `PRL000224`. The official JHTDB citation page gives the turbulent-channel-flow DOI `10.7281/T10K26QW` and states Open Data Commons Attribution (ODC-By) terms. Crucially, paper 476 itself writes the database citations as `[20], [21], [22]`; those are paper-internal bibliography references. Stage-1 therefore incorrectly promoted them into `PRL000001`, `PRL000002`, and `PRL000003` targeting Atlas IDs 20–22. Those three stable PRL IDs are retained for auditability but explicitly marked `not_verified` as parser leakage.
- **CR000308** remains `dataset_or_data_source`. The public Zenodo record identifies *HDNNP training data set for H2O*, authors Tobias Morawietz and Jörg Behler, DOI `10.5281/zenodo.2634098`, and a 103.8 MB `training-data_H2O.tar.gz` archive. Atlas paper 511 cites that exact record, verifying `PRL000149`. The archive and its internal README were not opened. No explicit record-level license value was independently visible in the verified record output, so the license remains bounded unknown rather than inferred from Zenodo defaults or paper licensing.
- **CR000309** remains `dataset_or_data_source` and is also a GitHub reproducibility/dataset repository. The public repository `sjiang23/senbaojiang.github.io` is pinned to `main` commit `5e92879d6d8311bfecab50b605f9bbc142df0b94`; it is public, non-fork, non-archived, and MIT licensed. The pinned root contains `CITATION.cff`, `LICENSE`, and four Jupyter notebooks, with no README or dependency manifest. Atlas paper 549 cites the repository as *Dataset for non-local Fokker-Planck equations*, verifying `PRL000168`. `CITATION.cff` supplies title, version 1.0.0, author, date, and repository URL but also contains DOI `10.5281/zenodo.1234`; that DOI is treated as placeholder/defective metadata and is not accepted as a verified resource DOI.

Checkpoint 07 processes seven Stage-1 PRL assertions: four are verified and three are explicitly `not_verified`. Completed/pending Stage-1 PRL assertion counts are therefore 279/52; total verified Stage-2 relationship records are 267 and explicit `not_verified` records are 12.

No JHTDB field, cutout, HDF5 payload, Zenodo archive, archive README, notebook, generated dataset, model artifact, or third-party code was downloaded, opened, parsed, unpacked, installed, subsetted, or executed. No Stage-3 normalization was performed. No new alias, ordinary manual-review item, scientific-review item, schema issue, or stop condition was produced.

B012 remains in progress. The next resource is **CR000310**.
