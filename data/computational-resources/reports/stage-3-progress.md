# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S255`
- Latest completed resource: `CR000303`
- Latest completed aggregate batch: `SOB029` — **PASS (10/10)**
- Current batch: `SOB030` — **0/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC08` — **PASS (count-neutral report-state continuity repair)**
- Exact next independently extractable resource: `CR000304`
- Exact next checkpoint: `Stage3-S256`

## Cumulative counts through S255 / RC08

- Resources: **300**
- Experiments: **349**
- Configurations: **628**
- Technical-evidence records: **2917**
- Reproducibility assessments: **300**
- Unresolved findings: **1468**
- Explicit conflicts: **150**
- Independently extractable resources remaining: **63**

## S255

`CR000303` preserves the final Stage-2 correction from a dataset record to the HFM v1.0 software release/source-and-input package. The pinned release contains Nektar-3D CFD source, documented compilation and MPI execution instructions, GPL-3.0-only licensing, and five benchmark-input cases (`Aneurysm3D`, `Cylinder2D`, `Cylinder3D`, `DaVinci`, and `Stenosis2D`). Stage 3 represents the resource as supporting simulator/solver software used to generate synthetic flow data for Hidden Fluid Mechanics rather than as the HFM neural-network implementation itself. Five benchmark experiments are materialized from the stable repository structure without manufacturing configuration detail. Build instructions require architecture-specific flags, an MPI compiler and math libraries; the repository documents successful compilation with Intel Compilers 2018 but does not fully pin external versions. A generic Nektar run command is documented, while exact benchmark-specific commands, expected outputs, and evaluation mappings remain bounded. No solver was built or executed and no large benchmark payload/archive was opened. The resource is assessed at `R3`.

## Aggregate batch QA

`SOB029` is **PASS (10/10)** with exact membership `CR000294` through `CR000303`. `SOB030` is now **0/10**.

## Continuation

Continue with `Stage3-S256` at `CR000304`.
