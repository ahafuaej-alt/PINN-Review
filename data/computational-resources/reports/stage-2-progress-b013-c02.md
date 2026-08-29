# Computational Resources Stage 2 — B013 Checkpoint 02 Progress

Verification date: 2026-08-29

This checkpoint continues B013 and processes exactly CR000317–CR000319. Checkpoint-specific and canonical Stage-2 reports under `data/computational-resources/reports/` are the authoritative continuation state.

## Current authoritative checkpoint

| Field | Value |
|---|---|
| Current logical batch | B013 (in progress) |
| Last completed resource | CR000319 |
| Last persistence checkpoint | B013-C02 |
| Next resource | CR000320 |
| Completed expansion batches | 12 |
| Expansion resources processed | 306 |
| Pending expansion resources | 38 |
| Expansion relationships verified | 260 |
| Completed Stage-1 resource count | 319 |
| Remaining Stage-1 resource count | 38 |
| Completed Stage-1 PRL assertions | 289 |
| Pending Stage-1 PRL assertions | 42 |
| Verified relationship records | 277 |
| Explicitly `not_verified` relationship records | 12 |
| Current scientific-review items | 2 |
| Current ordinary manual-review resources | 15 |
| B013 resources completed | 6 of 25 |
| B013 resources remaining | 19 |
| Current QA status | B013-C02 passed |

Completed Stage-1 CR IDs are `CR000001–CR000319` plus promoted `CR000358`. Pending Stage-1 CR IDs are `CR000320–CR000357`.

The pilot set, B001–B012, and all completed checkpoints through B013-C02 must not be reprocessed. Resume with **CR000320**.

## B013 checkpoint 02 summary

Three resources were processed: **CR000317–CR000319**.

- **CR000317** / Kaggle DSV 2645886: *Brain Tumor MRI Dataset*, Masoud Nickparvar. Atlas paper 582 reports pre-training on the Brain Tumor dataset and cites the exact Kaggle DSV record, verifying PRL000181. The exact Stage-1 DSV/version-1 record contains 7023 MRI images across four classes and explicitly reports **CC0: Public Domain**. The mutable current Kaggle dataset has advanced to a later version with changed content/licence; it is not substituted for the Stage-1 record.
- **CR000318** / DTU DOI `10.11583/DTU.12245978`: *HAWC2 simulations for creating a wind farm surrogate model of a 5MW offshore wind turbine*. Atlas paper 590 states in its Data Availability Statement that this is the HAWC2 simulation data set used in the study, verifying PRL000182. Public metadata describes the turbine model, HAWC2 input files and post-processed simulation results. No deposit-level licence was independently verified, so licence remains bounded unknown.
- **CR000319** / Zenodo DOI `10.5281/zenodo.5206676`: *Learning the solution operator of parametric partial differential equations with physics-informed DeepONets*. Atlas paper 603 explicitly states that all accompanying code and data are publicly available at this Zenodo DOI, verifying PRL000191. Zenodo labels the record **Software**, identifies Sifan Wang, Hanwen Wang and Paris Perdikaris, and exposes one 13.7 MB `Physics-informed-DeepONets.zip` reproducibility archive. No deposit-level licence was independently verified, so licence remains bounded unknown.

No alias, ordinary manual-review item, scientific-review item, classification correction, schema issue, or stop condition was produced.

No Kaggle MRI payload, DTU HAWC2 payload, Zenodo archive, notebook, model, simulation output, third-party code, or dependency environment was downloaded, opened, unpacked, installed, or executed. No Stage-3 normalization was performed.

Stage 2 resumes with **CR000320**. CR000320 has not been started.
