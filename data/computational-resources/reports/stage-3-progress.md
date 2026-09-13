# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S260`
- Latest completed resource: `CR000309`
- Latest completed aggregate batch: `SOB029` - **PASS (10/10)**
- Current batch: `SOB030` - **6/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC08` - **PASS (count-neutral report-state continuity repair)**
- Exact next independently extractable resource: `CR000310`
- Exact next checkpoint: `Stage3-S261`

## Cumulative counts through S260 / RC08

- Resources: **306**
- Experiments: **353**
- Configurations: **628**
- Technical-evidence records: **2970**
- Reproducibility assessments: **306**
- Unresolved findings: **1488**
- Explicit conflicts: **151**
- Independently extractable resources remaining: **57**

## S260

`CR000309` preserves the verified `PRL000168` relationship for Atlas paper 549 and the pinned repository snapshot at `5e92879d6d8311bfecab50b605f9bbc142df0b94`. The paper and `CITATION.cff` label the artifact as a dataset, while the pinned root contains four Jupyter notebooks plus citation and licence files and no standalone dataset file visible at root. Stage 3 therefore preserves that historical label but profiles the actual pinned artifact as a PINN implementation, recording the role mismatch as explicit conflicting evidence. Three trapz-PiNN notebook experiments and one 3D FDM/reference-computation experiment are materialized statically. The repository is MIT licensed and pinned, but dependency versions are mostly unpinned, no dependency manifest exists, the declared `10.5281/zenodo.1234` DOI is retained only as defective placeholder metadata, and the standalone/generated dataset location remains unresolved. No notebook was executed and no generated data were produced. The resource is assessed at `R2`.

## Aggregate batch QA

`SOB029` remains **PASS (10/10)**. `SOB030` is now **6/10**.

## Continuation

Continue with `Stage3-S261` at `CR000310`.
