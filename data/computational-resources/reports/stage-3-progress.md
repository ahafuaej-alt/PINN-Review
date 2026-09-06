# Computational Resources Stage 3 Progress

Date: 2026-09-06  
Branch: `data/computational-resources-stage3`  
Status: active controlled scale-out  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S094`.
- Current canonical batch: `SOB010`.
- Current batch status: **9/10 independently extractable members complete**.
- Latest completed resource: `CR000106`.
- Checkpoint QA: **PASS**.
- Latest completed aggregate batch QA: `SOB009` — **PASS**.
- Exact next independently extractable resource: `CR000107`.
- Next checkpoint: `Stage3-S095`.
- Pilot-complete resources remain excluded and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **109**
- Experiments: **197**
- Configurations: **388**
- Technical-evidence records: **1333**
- Static reproducibility assessments: **109**
- Unresolved findings: **704**
- Explicit conflicts: **101**
- Independently extractable resources remaining: **254**

## Latest checkpoint

`Stage3-S094` completed `CR000106` (`Arif-PhyChem/trace_conservation`) at the final Stage-2 pinned SHA `b5978c4b9b7d46296b3ca339e1f0501c48cc1c61`. `PRL000212 → Atlas 661` remains a verified official relationship.

The repository provides three substantial notebook workflow families for quantum dissipative dynamics: uncertainty-aware trace-conserving PINN, PINN, and a physics-agnostic neural-network comparator. Each explicitly covers spin-boson and FMO-complex cases. Bundled paper/test arrays, trained models and result surfaces are preserved as static evidence; external training data are documented through Zenodo.

S094 records one resource, three experiments, six configurations, ten technical-evidence records, one R2 reproducibility assessment and six new unresolved findings, with no new explicit conflict. The large notebook/evidence surface makes S094 a single-resource checkpoint. No notebook, dependency, model, binary array, data, training, inference or evaluation workload was executed. SOB010 is 9/10.

## Continuation

Resume only from `CR000107` for `Stage3-S095`. The next independently extractable resource will complete SOB010 and therefore requires aggregate SOB010 QA before advancement.
