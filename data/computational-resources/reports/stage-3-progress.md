# Computational Resources Stage 3 Progress

Date: 2026-09-05  
Branch: `data/computational-resources-stage3`  
Status: active controlled scale-out  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S079`.
- Current canonical batch: `SOB009`.
- Current batch status: **4/10 independently extractable members complete**.
- Latest completed resource: `CR000090`.
- Checkpoint QA: **PASS**.
- Latest completed aggregate batch QA: `SOB008` — **PASS**.
- Exact next independently extractable resource: `CR000091`.
- Next checkpoint: `Stage3-S080`.
- `CR000087` is Stage-3 pilot-complete and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **94**
- Experiments: **164**
- Configurations: **333**
- Technical-evidence records: **1201**
- Static reproducibility assessments: **94**
- Unresolved findings: **615**
- Explicit conflicts: **98**
- Independently extractable resources remaining: **269**

## Latest checkpoint

`Stage3-S079` completed `CR000090` (`cmoyacal/DAE-PINNs`) at the final Stage-2 pinned SHA `2d36275d883baebd566cf96bea82be0602de16ec`. `PRL000192 → Atlas 604` remains a verified official relationship.

Material complexity required a single-resource checkpoint. The bounded static extraction represents three power-network DAE-PINN workflow families: Backward Euler, RK/Gauss-Legendre, and the configurable high-stage IRK entrypoint, yielding four configurations. The explicit Linux-64 Conda environment, fixed sampling seeds, training/evaluation logic, and archived checkpoint/result surface support R3. One explicit device-control conflict is preserved because no-cuda CLI controls coexist with forced CUDA/device-selection logic in inspected entrypoints.

S079 records one resource, three experiments, four configurations, twelve technical-evidence records, one R3 reproducibility assessment, seven new unresolved findings, and one new explicit conflict. No scientific workload was executed.

## Continuation

Resume only from `CR000091` for `Stage3-S080`. Preserve all accepted pilot exclusions and completed-resource boundaries.
