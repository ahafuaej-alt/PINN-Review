# Computational Resources Stage 3 Progress

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`  
Status: active controlled scale-out  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S102`.
- Current canonical batch: `SOB011`.
- Current batch status: **8/10 independently extractable members complete**.
- Latest completed resource: `CR000115`.
- Checkpoint QA: **PASS**.
- Latest completed aggregate batch QA: `SOB010` — **PASS**.
- Exact next independently extractable resource: `CR000116`.
- Next checkpoint: `Stage3-S103`.
- Pilot-complete resources remain excluded and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **118**
- Experiments: **206**
- Configurations: **402**
- Technical-evidence records: **1406**
- Static reproducibility assessments: **118**
- Unresolved findings: **755**
- Explicit conflicts: **103**
- Independently extractable resources remaining: **245**

## Latest checkpoint

`Stage3-S102` completed `CR000115` as a single-resource complex checkpoint.

`CR000115` preserves final Stage-2 commit `300a5a87b61ff1ee6978d758840c76dbc01d0fc5` and verified official `PRL000226 → Atlas 693`. The pinned LESnets repository implements physics-informed neural operators for three-dimensional turbulence by encoding large-eddy-simulation equations into FNO/IFNO models. Bounded extraction records DHIT, turbulent-mixing-layer and SGS-coefficient-learning workflows using five representative repository-explicit configurations while retaining the larger sweep matrix as capability evidence.

R1 is required because the pinned repository has explicit README Python/PyTorch versions and detailed configurations but no installation procedure or reconstructable dependency manifest. Provider-local absolute data paths, non-deterministic default seed selection, missing hardware provenance and two explicit source conflicts are preserved in the unresolved register.

No scientific software, model, dataset, notebook, test, environment, dependency or benchmark workload was executed.

## Continuation

Resume only from `CR000116` for `Stage3-S103` as the ninth independently extractable member of `SOB011`.
