# Computational Resources Stage 3 Progress

Date: 2026-09-06  
Branch: `data/computational-resources-stage3`  
Status: active controlled scale-out  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S093`.
- Current canonical batch: `SOB010`.
- Current batch status: **8/10 independently extractable members complete**.
- Latest completed resource: `CR000105`.
- Checkpoint QA: **PASS**.
- Latest completed aggregate batch QA: `SOB009` — **PASS**.
- Exact next independently extractable resource: `CR000106`.
- Next checkpoint: `Stage3-S094`.
- Pilot-complete resources remain excluded and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **108**
- Experiments: **194**
- Configurations: **382**
- Technical-evidence records: **1323**
- Static reproducibility assessments: **108**
- Unresolved findings: **698**
- Explicit conflicts: **101**
- Independently extractable resources remaining: **255**

## Latest checkpoint

`Stage3-S093` completed `CR000105` (`ncfrey/defect-design`) at the final Stage-2 pinned SHA `1ef437b6b936184e0a56b310605d945c138e00fe`. `PRL000210 → Atlas 657` remains a verified official relationship.

The repository is supplementary material for machine-learning-enabled point-defect design and provides a compact MEGNet graph-network inference example, four bundled pretrained HDF5 models, sidecar model metadata and three example 2D-material structures. The inspected implementation does not contain PINN/PDE-residual semantics, so Stage 3 records it as `non_pinn_research_code` while preserving its official corpus relationship.

S093 records one resource, one experiment, two configurations, eight technical-evidence records, one R2 reproducibility assessment and five new unresolved findings, with no new explicit conflict. No notebook, pretrained model, environment, dataset, training or inference workload was executed. SOB010 is 8/10.

## Continuation

Resume only from `CR000106` for `Stage3-S094`. Preserve all accepted pilot exclusions and completed-resource boundaries.
