# Computational Resources Stage 3 Progress

Date: 2026-09-06  
Branch: `data/computational-resources-stage3`  
Status: active controlled scale-out  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S086`.
- Current canonical batch: `SOB010`.
- Current batch status: **1/10 independently extractable members complete**.
- Latest completed resource: `CR000098`.
- Checkpoint QA: **PASS**.
- Latest completed aggregate batch QA: `SOB009` — **PASS**.
- Exact next independently extractable resource: `CR000099`.
- Next checkpoint: `Stage3-S087`.
- Pilot-complete resources remain excluded and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **101**
- Experiments: **181**
- Configurations: **367**
- Technical-evidence records: **1265**
- Static reproducibility assessments: **101**
- Unresolved findings: **657**
- Explicit conflicts: **100**
- Independently extractable resources remaining: **262**

## Latest checkpoint

`Stage3-S086` completed `CR000098` (`LivingMatterLab/xPINNs`) at the final Stage-2 pinned SHA `3b05f729bd471f680b1fb7dfa6458cc632a0ee67`. `PRL000201 → Atlas 616` remains a verified official relationship.

Material complexity required a single-resource checkpoint. Four bounded experiment families and four configurations preserve the deterministic PINN, Bayesian PINN/HMC, analytical Bayesian-inference comparator, and SA-PINN COVID-oscillator workflows. The shared `covid_world.dat` dataset is bundled across workflow directories, and source/result artifacts are retained without execution. The analytical Bayesian workflow is explicitly retained as a non-PINN comparator rather than being relabeled.

S086 records one resource, four experiments, four configurations, nine technical-evidence records, one R2 reproducibility assessment, six new unresolved findings, and no new explicit conflict. No scientific workload was executed. SOB010 is 1/10.

## Continuation

Resume only from `CR000099` for `Stage3-S087`. Preserve all accepted pilot exclusions and completed-resource boundaries.
