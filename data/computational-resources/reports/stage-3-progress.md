# Computational Resources Stage 3 Progress

Date: 2026-09-06  
Branch: `data/computational-resources-stage3`  
Status: active controlled scale-out  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S096`.
- Current canonical batch: `SOB011`.
- Current batch status: **1/10 independently extractable members complete**.
- Latest completed resource: `CR000108`.
- Checkpoint QA: **PASS**.
- Latest completed aggregate batch QA: `SOB010` — **PASS**.
- Exact next independently extractable resource: `CR000109`.
- Next checkpoint: `Stage3-S097`.
- Pilot-complete resources remain excluded and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **111**
- Experiments: **201**
- Configurations: **392**
- Technical-evidence records: **1349**
- Static reproducibility assessments: **111**
- Unresolved findings: **714**
- Explicit conflicts: **101**
- Independently extractable resources remaining: **252**

## Latest checkpoint

`Stage3-S096` completed `CR000108`, the APS supplemental artifact for Atlas 663. Final Stage-2 authority and verified `PRL000214` (`supplementary_examples`) are preserved.

The public source identifies two Julia Jupyter notebooks, `dqd.ipynb` and `transmon.ipynb`, as the code used for the Section III.A/Fig. 3 and Section III.B/Fig. 6 results. Stage-2 explicitly deferred archive-internal inspection, so S096 preserves the bounded static boundary: one resource, zero experiments, zero configurations, seven technical-evidence records, one R1 reproducibility assessment and five new unresolved findings, with no new explicit conflict.

No scientific software, notebook, model, training, inference, evaluation, test or environment was executed.

## Continuation

Resume only from `CR000109` for `Stage3-S097` as the second independently extractable member of `SOB011`.
