# Computational Resources Stage 2 — B013 Checkpoint 03 Progress

Verification date: 2026-08-29

This checkpoint continues B013 and processes exactly CR000320–CR000322. Checkpoint-specific and canonical Stage-2 reports under `data/computational-resources/reports/` are the authoritative continuation state.

## Current authoritative checkpoint

| Field | Value |
|---|---|
| Current logical batch | B013 (in progress) |
| Last completed resource | CR000322 |
| Last persistence checkpoint | B013-C03 |
| Next resource | CR000323 |
| Completed expansion batches | 12 |
| Expansion resources processed | 309 |
| Pending expansion resources | 35 |
| Expansion relationships verified | 263 |
| Completed Stage-1 resource count | 322 |
| Remaining Stage-1 resource count | 35 |
| Completed Stage-1 PRL assertions | 292 |
| Pending Stage-1 PRL assertions | 39 |
| Verified relationship records | 280 |
| Explicitly `not_verified` relationship records | 12 |
| Current scientific-review items | 2 |
| Current ordinary manual-review resources | 15 |
| B013 resources completed | 9 of 25 |
| B013 resources remaining | 16 |
| Current QA status | B013-C03 passed |

Completed Stage-1 CR IDs are `CR000001–CR000322` plus promoted `CR000358`. Pending Stage-1 CR IDs are `CR000323–CR000357`.

The pilot set, B001–B012, and all completed checkpoints through B013-C03 must not be reprocessed. Resume with **CR000323**.

## B013 checkpoint 03 summary

Three resources were processed: **CR000320–CR000322**.

- **CR000320** / ESS-DIVE: Atlas paper 615 states that short records from headwater gauging stations in the East River Watershed are available on ESS-DIVE, verifying PRL000200. The Stage-1/source hostname `essdive.lbl.gov` is corrected to the official current `ess-dive.lbl.gov`. Because the source points only to the repository root rather than an exact package DOI, the package identity and licence remain bounded unknown.
- **CR000321** / Southern California Earthquake Data Center (SCEDC): Atlas paper 634 states that earthquake phase-arrival and station-location data can be downloaded from SCEDC, verifying PRL000204. The Stage-1/source hostname `scdec.caltech.edu` is corrected to `scedc.caltech.edu`. SCEDC provides a citation DOI (`10.7909/C3WD3xH1`) and explicit non-SPDX public-data use terms.
- **CR000322** / Zenodo DOI `10.5281/zenodo.6637469`: *PINNup: Robust Neural Network Wavefield Solutions Using Frequency Upscaling and Neuron Splitting*. Atlas paper 646 explicitly identifies this DOI as the location of its datasets, verifying PRL000205. Zenodo labels the record Dataset, creator Xinquan Huang, version v2, and exposes `figures-pinnup.zip` (178.5 MB). Deposit licence remains bounded unknown.

No alias, ordinary manual-review item, scientific-review item, classification correction, schema issue or stop condition was produced. Two canonical-host corrections were recorded with Stage-1 URLs retained in provenance.

No ESS-DIVE dataset payload, SCEDC phase/waveform/station data, Zenodo archive, notebook, model, client, third-party code or dependency environment was downloaded, opened, unpacked, installed or executed. No Stage-3 normalization was performed.

Stage 2 resumes with **CR000323**. CR000323 has not been started.
