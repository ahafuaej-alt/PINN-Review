# Computational Resources Stage 3 — Progress

**Status:** active — controlled scale-out  
**Methodology:** Stage3-D01 accepted without modification  
**Current checkpoint:** `Stage3-S075`  
**Current scale-out batch:** `SOB008` — complete  
**Last completed resource:** `CR000085`  
**Next resource:** `CR000086`  
**Next checkpoint:** `Stage3-S076`  
**Checkpoint QA:** PASS  
**Latest aggregate batch QA:** `SOB008` PASS  
**Next batch:** `SOB009`

## Stage-3 cumulative state

- Completed Stage-3 resources: **90**
- Completed experiments: **155**
- Completed configurations: **318**
- Technical evidence records: **1160**
- Reproducibility assessments: **90**
- Unresolved findings: **586**
- Explicit conflicts: **97**
- Independently extractable resources remaining: **273**

## Completed batch

`SOB008`: **10 / 10** independently extractable resources completed and aggregate-QA passed.

Completed members: `CR000076`, `CR000077`, `CR000078`, `CR000079`, `CR000080`, `CR000081`, `CR000082`, `CR000083`, `CR000084`, `CR000085`.

## Stage3-S075 checkpoint summary

Processed exactly one resource under the material-complexity rule.

### CR000085 — weili101/Phase-Field_DeepONet

- Final Stage-2 classification: `physics_informed_operator_or_operator_learning`
- Authoritative pinned SHA: `3b38418b3c06af0da5be2970b68ae83b6cf2c90d`
- License: not available
- Verified relationship: `PRL000186 → Atlas 597`, `official`
- Stage-3 profile: `physics_informed_operator_learning`
- Experiments: **3**; configurations: **4**; evidence: **10**; reproducibility: **R2**
- New unresolved findings: **8**; new explicit conflicts: **0**

The bounded extraction represents the principal 1D relaxation comparison, 2D Allen-Cahn operator workflow, and 1D Cahn-Hilliard operator workflow. Tutorial notebooks remain capability evidence rather than separate research experiments. Bundled pickle data are preserved as repository-scoped research/example artifacts, not promoted to a general reusable dataset.

## Scope protection

S075 modifies only Stage-3 technical/evidence/report paths plus the required SOB008 aggregate-QA record. Stage 1, Stage 2, public Atlas/site files, `05-curated/`, methodology and schemas remain unchanged. No scientific workload was executed.

## Exact continuation

SOB008 is closed with aggregate QA PASS. Resume at `CR000086` for `Stage3-S076` as the first canonical member of `SOB009`.
