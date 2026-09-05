# Computational Resources Stage 3 Progress

Date: 2026-09-05  
Branch: `data/computational-resources-stage3`  
Status: active controlled scale-out  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S084`.
- Current canonical batch: `SOB009`.
- Current batch status: **9/10 independently extractable members complete**.
- Latest completed resource: `CR000096`.
- Checkpoint QA: **PASS**.
- Latest completed aggregate batch QA: `SOB008` — **PASS**.
- Exact next independently extractable resource: `CR000097`.
- Next checkpoint: `Stage3-S085`.
- `CR000091` is Stage-3 pilot-complete and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **99**
- Experiments: **176**
- Configurations: **360**
- Technical-evidence records: **1248**
- Static reproducibility assessments: **99**
- Unresolved findings: **645**
- Explicit conflicts: **100**
- Independently extractable resources remaining: **264**

## Latest checkpoint

`Stage3-S084` completed `CR000096` (`zheyuanhu01/AugmentedPINN`) at the final Stage-2 pinned SHA `7091d2a809377c9b5bd89dab2bbb8d79f50451e2`. `PRL000198 → Atlas 612` remains a verified official relationship.

Material complexity required a single-resource checkpoint. The bounded static extraction represents two workflow families with six configurations: four scalar-PDE selectors in `main.py` (Burgers, Helmholtz, Wave, and Klein-Gordon) and the two- and four-subdomain Burgers-Boussinesq workflows in `BB.py` and `BB4.py`. The repository exposes PINN, XPINN, and SXPINN/APINN model controls, deterministic seeds, architecture and training hyperparameters, and source-level evaluation logic. One explicit device-control conflict is preserved because the BB gate-pretraining paths hard-code CUDA tensor placement while the scripts expose a configurable `--device` argument.

S084 records one resource, two experiments, six configurations, nine technical-evidence records, one R2 reproducibility assessment, six new unresolved findings, and one new explicit conflict. No scientific workload was executed.

## Continuation

Resume only from `CR000097` for `Stage3-S085`. Preserve all accepted pilot exclusions and completed-resource boundaries.
