# Computational Resources Stage 3 Progress

Date: 2026-09-05  
Branch: `data/computational-resources-stage3`  
Status: active controlled scale-out  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S078`.
- Current canonical batch: `SOB009`.
- Current batch status: **3/10 independently extractable members complete**.
- Latest completed resource: `CR000089`.
- Checkpoint QA: **PASS**.
- Latest completed aggregate batch QA: `SOB008` — **PASS**.
- Exact next independently extractable resource: `CR000090`.
- Next checkpoint: `Stage3-S079`.
- `CR000087` is Stage-3 pilot-complete and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **93**
- Experiments: **161**
- Configurations: **329**
- Technical-evidence records: **1189**
- Static reproducibility assessments: **93**
- Unresolved findings: **608**
- Explicit conflicts: **97**
- Independently extractable resources remaining: **270**

## Latest checkpoint

`Stage3-S078` completed `CR000089` (`PredictiveIntelligenceLab/Physics-informed-DeepONets`) at the final Stage-2 pinned SHA `77e7c747d653b34e79e43df7d88bad87de5c27d8`. `PRL000190 → Atlas 603` remains a verified official relationship.

Material complexity required a single-resource checkpoint. The bounded static extraction represents five repository workflow families — antiderivative, advection, diffusion-reaction, Burgers and Eikonal — with nine notebook-level configurations. Bundled Burgers generators, the Eikonal airfoil array, and Advection/Burgers trained artifacts remain source-scoped repository research artifacts rather than being promoted to independent datasets or runtime evidence.

S078 records one resource, five experiments, nine configurations, thirteen technical-evidence records, one R2 reproducibility assessment, eight new unresolved findings, and no new explicit conflicts. No scientific workload was executed.

## Continuation

Resume only from `CR000090` for `Stage3-S079`. Preserve all accepted pilot exclusions and completed-resource boundaries.
