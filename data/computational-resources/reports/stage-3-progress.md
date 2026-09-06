# Computational Resources Stage 3 Progress

Date: 2026-09-06  
Branch: `data/computational-resources-stage3`  
Status: active controlled scale-out  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S087`.
- Current canonical batch: `SOB010`.
- Current batch status: **2/10 independently extractable members complete**.
- Latest completed resource: `CR000099`.
- Checkpoint QA: **PASS**.
- Latest completed aggregate batch QA: `SOB009` — **PASS**.
- Exact next independently extractable resource: `CR000100`.
- Next checkpoint: `Stage3-S088`.
- Pilot-complete resources remain excluded and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **102**
- Experiments: **182**
- Configurations: **369**
- Technical-evidence records: **1274**
- Static reproducibility assessments: **102**
- Unresolved findings: **663**
- Explicit conflicts: **100**
- Independently extractable resources remaining: **261**

## Latest checkpoint

`Stage3-S087` completed `CR000099` (`mroberto166/wpinns`) at the final Stage-2 pinned SHA `eef571bdd86fac5436c5c71a643611f283930442`. `PRL000202 → Atlas 631` remains a verified official relationship.

Material complexity required a single-resource checkpoint. One bounded experiment and two configurations preserve the parameterized weak-PINN ensemble/retraining workflow without expanding its generated setup/retraining combinations into synthetic configuration records. The pinned source includes the ShockRarEntropy equation model, Data.zip archive, and extensive RarefactionWave precomputed result artifacts; archives and serialized models were not opened or loaded.

S087 records one resource, one experiment, two configurations, nine technical-evidence records, one R2 reproducibility assessment, six new unresolved findings, and no new explicit conflict. No scientific workload was executed. SOB010 is 2/10.

## Continuation

Resume only from `CR000100` for `Stage3-S088`. Preserve all accepted pilot exclusions and completed-resource boundaries.
