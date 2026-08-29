# Computational Resources Stage 2 — B012 Checkpoint 05 Progress

Verification date: 2026-08-29

This checkpoint records exactly CR000301 through CR000303.

## Current authoritative checkpoint

| Field | Value |
|---|---|
| Current logical batch | B012 (in progress) |
| Last completed resource | CR000303 |
| Last persistence checkpoint | B012-C05 |
| Next resource | CR000304 |
| Completed expansion batches | 11 |
| Expansion resources processed | 290 |
| Pending expansion resources | 54 |
| Expansion relationships verified | 243 |
| Completed Stage-1 resource count | 303 |
| Remaining Stage-1 resource count | 54 |
| Completed Stage-1 PRL assertions | 269 |
| Pending Stage-1 PRL assertions | 62 |
| Verified relationship records | 260 |
| Explicitly not_verified relationship records | 9 |
| Current scientific-review items | 2 |
| Current ordinary manual-review resources | 14 |
| B012 resources completed | 15 of 25 |
| B012 resources remaining | 10 |
| Current QA status | B012-C05 passed |

Completed Stage-1 CR IDs are CR000001–CR000303 plus promoted CR000358. Pending Stage-1 CR IDs are CR000304–CR000357. Resume at **CR000304**.

## Checkpoint summary

- CR000301 is the live Open Polar Radar/CReSIS portal for radar-depth-sounder data used by Atlas paper 390, verifying PRL000092.
- CR000302 contains a Stage-1 hostname transcription error: the paper gives `yan.cee.illinois.edu`, while Stage 1 recorded `yan.cce.illinois.edu`. The corrected site and pinned PINN-AM repository verify intended PRL000106; the canonical correction is routed to ordinary manual review.
- CR000303 is the open HFM v1.0 synthetic-data-generator release cited by Atlas paper 431, verifying PRL000115. It is corrected from dataset to software release and pinned at commit `f55407bbdb54af20b191d715d2dcb6593e8d6833`.

No radar file, FEM data, Zenodo archive, source file, or executable was downloaded or opened. No Stage-3 normalization was performed. The next resource is **CR000304**.
