# Computational Resources Stage 3 Progress

Date: 2026-09-05  
Branch: `data/computational-resources-stage3`  
Status: active controlled scale-out  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S083`.
- Current canonical batch: `SOB009`.
- Current batch status: **8/10 independently extractable members complete**.
- Latest completed resource: `CR000095`.
- Checkpoint QA: **PASS**.
- Latest completed aggregate batch QA: `SOB008` — **PASS**.
- Exact next independently extractable resource: `CR000096`.
- Next checkpoint: `Stage3-S084`.
- `CR000091` is Stage-3 pilot-complete and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **98**
- Experiments: **174**
- Configurations: **354**
- Technical-evidence records: **1239**
- Static reproducibility assessments: **98**
- Unresolved findings: **639**
- Explicit conflicts: **99**
- Independently extractable resources remaining: **265**

## Latest checkpoint

`Stage3-S083` completed `CR000095` (`DeepWave-KAUST/PINNgabor`) at the final Stage-2 pinned SHA `8ce07464438b32159813800ac70593df6e81123f`. `PRL000197 → Atlas 611` remains a verified official relationship.

Material complexity required a single-resource checkpoint. The bounded static extraction represents two frequency-domain seismic PINN workflow families at 4 Hz and 16 Hz, with six exact Gabor/MLP run-script configurations. The repository provides an MIT license, installation procedure, extensive Conda environment manifest, explicit training commands and TensorBoard evaluation instructions. One explicit source conflict is preserved because the README describes experiments on a single NVIDIA GeForce A6000 GPU while `scripts/run.sh` dispatches configurations across `cuda:0` through `cuda:3`.

S083 records one resource, two experiments, six configurations, ten technical-evidence records, one R3 reproducibility assessment, four new unresolved findings, and one new explicit conflict. No scientific workload was executed.

## Continuation

Resume only from `CR000096` for `Stage3-S084`. Preserve all accepted pilot exclusions and completed-resource boundaries.
