# Computational Resources Stage 3 Progress

Date: 2026-09-06  
Branch: `data/computational-resources-stage3`  
Status: active controlled scale-out  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S097`.
- Current canonical batch: `SOB011`.
- Current batch status: **2/10 independently extractable members complete**.
- Latest completed resource: `CR000109`.
- Checkpoint QA: **PASS**.
- Latest completed aggregate batch QA: `SOB010` — **PASS**.
- Exact next independently extractable resource: `CR000110`.
- Next checkpoint: `Stage3-S098`.
- Pilot-complete resources remain excluded and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **112**
- Experiments: **201**
- Configurations: **392**
- Technical-evidence records: **1357**
- Static reproducibility assessments: **112**
- Unresolved findings: **720**
- Explicit conflicts: **101**
- Independently extractable resources remaining: **251**

## Latest checkpoint

`Stage3-S097` completed `CR000109`, the CiderPress resource associated by verified official `PRL000216` with Atlas 665. Stage 2 recorded `https://github.com/mir-group/CiderPress` but could not establish a pinned commit SHA because the endpoint exposed a repository move.

The repository now resolves to `https://github.com/cider-dft/CiderPress`. S097 records current SHA `766fc8d510ed544be7c754c31758087c55ec8fa9` only as the Stage-3 static inspection snapshot; it is not retroactively promoted to Stage-2 historical authority. The current repository is an evolved scientific-ML library for machine-learned density-functional-theory exchange-correlation functionals, not a PINN implementation. To preserve temporal provenance, S097 records one resource, zero experiments, zero configurations, eight technical-evidence records, one R2 reproducibility assessment and six new unresolved findings, with no new explicit conflict.

No scientific software, model, dataset, training, inference, evaluation, test or environment was executed.

## Continuation

Resume only from `CR000110` for `Stage3-S098` as the third independently extractable member of `SOB011`.
