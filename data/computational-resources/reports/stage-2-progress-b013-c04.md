# Computational Resources Stage 2 — B013 Checkpoint 04 Progress

Verification date: 2026-08-29

This checkpoint continues B013 and processes exactly CR000323–CR000325. Checkpoint-specific and canonical Stage-2 reports under `data/computational-resources/reports/` are the authoritative continuation state.

## Current authoritative checkpoint

| Field | Value |
|---|---|
| Current logical batch | B013 (in progress) |
| Last completed resource | CR000325 |
| Last persistence checkpoint | B013-C04 |
| Next resource | CR000326 |
| Completed expansion batches | 12 |
| Expansion resources processed | 312 |
| Pending expansion resources | 32 |
| Expansion relationships verified | 266 |
| Completed Stage-1 resource count | 325 |
| Remaining Stage-1 resource count | 32 |
| Completed Stage-1 PRL assertions | 295 |
| Pending Stage-1 PRL assertions | 36 |
| Verified relationship records | 283 |
| Explicitly `not_verified` relationship records | 12 |
| Current scientific-review items | 2 |
| Current ordinary manual-review resources | 15 |
| B013 resources completed | 12 of 25 |
| B013 resources remaining | 13 |
| Current QA status | B013-C04 passed |

Completed Stage-1 CR IDs are `CR000001–CR000325` plus promoted `CR000358`. Pending Stage-1 CR IDs are `CR000326–CR000357`.

The pilot set, B001–B012, and all completed checkpoints through B013-C04 must not be reprocessed. Resume with **CR000326**.

## B013 checkpoint 04 summary

Three resources were processed: **CR000323–CR000325**.

- **CR000323** / Figshare collection `Defect_design/4946874`: *Defect design*. Atlas paper 657 explicitly states that the study's structure graphs and defect structures are available at this exact Figshare collection, verifying PRL000211. The resource is retained as a dataset/data-source collection and is kept separate from the paper's distinct GitHub code repository. Direct collection landing metadata was access-limited to the verifier, so collection-level licence and file inventory remain bounded unknown.
- **CR000324** / NRC data DOI: *Quantum simulations of an electron in a two dimensional potential well*. Atlas paper 664 cites `10.4224/PhysRevA.96.042113.data` as its dataset reference, verifying PRL000215. The Stage-1 DOI omitted the terminal `.data` suffix; canonical identity is corrected while the original URL remains in provenance. The current NRC Research Data catalogue confirms the public dataset. Dataset-level licence remains bounded unknown.
- **CR000325** / Cambridge DOI `10.17863/CAM.41410`: *Research data supporting "Regime transitions and energetics of sustained stratified shear flows"*. Atlas paper 687 states that its experimental data can be downloaded from the cited Lefauve–Partridge–Linden dataset, and its reference list maps that citation to this DOI, verifying PRL000221. The official record contains three-component velocity/density fields for 16 experiments, MATLAB analysis code, movies, flux plots and README documentation, and explicitly reports CC BY-NC-SA 4.0.

No alias, ordinary manual-review item, scientific-review item, classification correction, schema issue or stop condition was produced. One canonical DOI correction was recorded with the Stage-1 URL retained in provenance.

No Figshare collection payload, NRC quantum dataset, Cambridge `.mat` data, movie archive, MATLAB code, notebook, HDF5 file, model or third-party software was downloaded, opened, installed or executed. No Stage-3 normalization was performed.

Stage 2 resumes with **CR000326**. CR000326 has not been started.
