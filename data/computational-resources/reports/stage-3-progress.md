# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S259`
- Latest completed resource: `CR000308`
- Latest completed aggregate batch: `SOB029` — **PASS (10/10)**
- Current batch: `SOB030` — **5/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC08` — **PASS (count-neutral report-state continuity repair)**
- Exact next independently extractable resource: `CR000309`
- Exact next checkpoint: `Stage3-S260`

## Cumulative counts through S259 / RC08

- Resources: **305**
- Experiments: **349**
- Configurations: **628**
- Technical-evidence records: **2958**
- Reproducibility assessments: **305**
- Unresolved findings: **1483**
- Explicit conflicts: **150**
- Independently extractable resources remaining: **58**

## S259

`CR000308` preserves the exact Zenodo deposit `10.5281/zenodo.2634098` and verified `PRL000149` relationship for the PiNN liquid-water case study. The provider record exposes one 103.8 MB archive (`training-data_H2O.tar.gz`) with MD5 checksum and states that detailed documentation is in an internal `README.pdf`. The primary paper uses the Morawietz–Behler H2O dataset for a BPNN liquid-water case at the BLYP level. Its Supporting Information separately reports augmentation with 2,841 additional structures generated from molecular-dynamics snapshots using the original BPNN/RuNNer workflow; Stage 3 does not assume those added structures are part of the Zenodo archive. The archive and internal README were not opened, and a record-level reuse licence was not independently established. The resource is assessed at `R2`.

## Post-publication record repair

A count-neutral integrity repair after S259 publication restored this progress report text and corrected the CR000308 `final_url` to `https://zenodo.org/records/2634098`. Evidence, counts, reproducibility classification, unresolved IDs, SOB membership, and continuation pointers were unchanged.

## Aggregate batch QA

`SOB029` remains **PASS (10/10)**. `SOB030` is now **5/10**.

## Continuation

Continue with `Stage3-S260` at `CR000309`.
