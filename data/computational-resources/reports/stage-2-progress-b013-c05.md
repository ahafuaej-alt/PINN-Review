# Computational Resources Stage 2 — B013 Checkpoint 05 Progress

Verification date: 2026-08-30

This checkpoint continues B013 and processes exactly CR000326–CR000328. Checkpoint-specific and canonical Stage-2 reports under `data/computational-resources/reports/` are the authoritative continuation state.

## Current authoritative checkpoint

| Field | Value |
|---|---|
| Current logical batch | B013 (in progress) |
| Last completed resource | CR000328 |
| Last persistence checkpoint | B013-C05 |
| Next resource | CR000329 |
| Completed expansion batches | 12 |
| Expansion resources processed | 315 |
| Pending expansion resources | 29 |
| Expansion relationships verified | 268 |
| Completed Stage-1 resource count | 328 |
| Remaining Stage-1 resource count | 29 |
| Completed Stage-1 PRL assertions | 298 |
| Pending Stage-1 PRL assertions | 33 |
| Verified relationship records | 285 |
| Explicitly `not_verified` relationship records | 13 |
| Current scientific-review items | 2 |
| Current ordinary manual-review resources | 15 |
| B013 resources completed | 15 of 25 |
| B013 resources remaining | 10 |
| Current QA status | B013-C05 passed |

Completed Stage-1 CR IDs are `CR000001–CR000328` plus promoted `CR000358`. Pending Stage-1 CR IDs are `CR000329–CR000357`.

The pilot set, B001–B012, and all completed checkpoints through B013-C05 must not be reprocessed. Resume with **CR000329**.

## B013 checkpoint 05 summary

Three resources were processed: **CR000326–CR000328**.

- **CR000326** / Kaggle DOI `10.34740/kaggle/dsv/2637500`: *Turbulence modelling using machine learning*. Atlas paper 691 states in Data Availability that its supporting data are openly available at this exact DOI, verifying PRL000222. The DOI resolves to the version-3 Kaggle record by McConkey, Yee and Lien; the dataset is a curated RANS/DNS/LES turbulence-modelling resource and explicitly reports CC BY 4.0.
- **CR000327** / DOI `10.1016/j.ijnonlinmec.2024.104988`: *Simulation of 3D turbulent flows using a discretized generative model physics-informed neural networks*. This DOI is Atlas paper 692's own publication identifier, not a dataset. The primary article states that training/testing data come from JHTDB (already represented by CR000307/PRL000224) and separately identifies a DG-PINN GitHub repository for data/code. CR000327 is therefore corrected to `publication_record_not_dataset`, and PRL000225 is explicitly `not_verified` without manual-review escalation.
- **CR000328** / Kaggle *Diabetic Retinopathy Detection*. Atlas paper 706 states that its EyePACS dataset was taken from the DR competition dataset on Kaggle, and reference [19] gives this exact competition URL, verifying PRL000229. Kaggle documents clinician-graded retinal images on the 0–4 DR scale, training/test archives and sample/label files; access is subject to Competition Rules rather than an open SPDX licence.

No alias, ordinary manual-review item, scientific-review item, schema issue or stop condition was produced. One evidence-based resource classification correction and one explicit negative relationship finding were recorded.

No Kaggle turbulence payload, retinal image/archive, JHTDB data, DG-PINN code, notebook, model, dependency environment or third-party software was downloaded, opened, installed or executed. No Stage-3 normalization was performed.

Stage 2 resumes with **CR000329**. CR000329 has not been started.
