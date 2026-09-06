# Computational Resources Stage 3 Progress

Date: 2026-09-06  
Branch: `data/computational-resources-stage3`  
Status: active controlled scale-out  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S090`.
- Current canonical batch: `SOB010`.
- Current batch status: **5/10 independently extractable members complete**.
- Latest completed resource: `CR000102`.
- Checkpoint QA: **PASS**.
- Latest completed aggregate batch QA: `SOB009` — **PASS**.
- Exact next independently extractable resource: `CR000103`.
- Next checkpoint: `Stage3-S091`.
- Pilot-complete resources remain excluded and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **105**
- Experiments: **190**
- Configurations: **377**
- Technical-evidence records: **1299**
- Static reproducibility assessments: **105**
- Unresolved findings: **681**
- Explicit conflicts: **100**
- Independently extractable resources remaining: **258**

## Latest checkpoint

`Stage3-S090` completed `CR000102` (`amir-cardiolab/BL-PINN`) at the final Stage-2 pinned SHA `acf606b8081990be8da3778035006be404f685ff`. `PRL000207 → Atlas 650` remains a verified official relationship.

The pinned repository contains seven clearly separated boundary-layer example directories spanning 1D linear and nonlinear advection-diffusion, 2D Couette flow, 2D double gyre, a 2D inverse problem, an axisymmetric Burgers vortex, and a 3D separation case. One bounded experiment/configuration pair was recorded per case. README evidence documents PyTorch and VTK/ParaView use, while exact dependency versions and a full environment manifest remain unavailable.

S090 records one resource, seven experiments, seven configurations, ten technical-evidence records, one R2 reproducibility assessment, six new unresolved findings, and no new explicit conflict. No scientific workload or large result payload was opened or executed. SOB010 is 5/10.

## Continuation

Resume only from `CR000103` for `Stage3-S091`. Preserve all accepted pilot exclusions and completed-resource boundaries.
