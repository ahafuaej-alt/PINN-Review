# Computational Resources Stage 3 — Progress

**Status:** active — controlled scale-out  
**Methodology:** Stage3-D01 accepted without modification  
**Current checkpoint:** `Stage3-S072`  
**Current scale-out batch:** `SOB008`  
**Last completed resource:** `CR000082`  
**Next resource:** `CR000083`  
**Next checkpoint:** `Stage3-S073`  
**Checkpoint QA:** PASS  
**Latest aggregate batch QA:** `SOB007` PASS  
**Aggregate QA due:** when `SOB008` reaches 10/10 independently extractable resources

## Stage-3 cumulative state

- Completed Stage-3 resources: **87**
- Completed experiments: **151**
- Completed configurations: **313**
- Technical evidence records: **1134**
- Reproducibility assessments: **87**
- Unresolved findings: **566**
- Explicit conflicts: **97**
- Independently extractable resources remaining: **276**

## Current batch

`SOB008`: **7 / 10** independently extractable resources completed.

Completed members: `CR000076`, `CR000077`, `CR000078`, `CR000079`, `CR000080`, `CR000081`, `CR000082`.

Aggregate batch QA is **not yet due**.

## Stage3-S072 checkpoint summary

Processed exactly one resource because bounded inspection established material complexity and the next resource is the full OpenFOAM 2.1.x solver distribution.

### CR000082 — 41monster/RePIT_NaturalCirculation2D

- Final Stage-2 canonical identity: `https://github.com/41monster/RePIT_NaturalCirculation2D`
- Final Stage-2 classification: `supporting_software_or_library`
- Authoritative pinned SHA: `252134a59e84a17c3116ea918c4540473a0162c0`
- Stage-2 license: `MIT`
- Stage-2 data classification: `bundled_research_or_example_data`
- Verified official relationship: `PRL000183 → Atlas 591`
- Stage-3 resource profile: `non_pinn_research_code`
- Experiments: **1**; configurations: **1**; evidence: **12**; reproducibility: **R3**
- New unresolved findings: **8**; new explicit conflicts: **0**

The bounded extraction preserves the implemented distinction between supervised FVMN training and physics-based rollout monitoring. Three subnetworks predict temperature and velocity increments; training minimizes summed MSE. During autoregressive prediction, ground-truth boundary values are reinserted and finite-difference mass, momentum and heat residuals are logged, with relative mass residual used as a rollout gate.

R3 is supported by the pinned Conda environment, documented installation/run path, bundled U/T arrays, preprocessing, architecture, hyperparameters, train/validation split and prediction procedure. R4 is not assigned because canonical checkpoints and expected numerical targets are absent and the heat-residual source explicitly retains `TODO: Check the formula`.

`CR000083` is the full OpenFOAM 2.1.x source distribution linked to Atlas 591 as a separate `paper_software_mention`; it requires dedicated solver-oriented extraction rather than compression into S072.

## Scope protection

S072 modifies only Stage-3 technical/evidence/report paths. Stage 1, Stage 2, public Atlas/site files, `05-curated/`, methodology and schemas remain unchanged. No scientific workload was executed.

## Exact continuation

Resume at `CR000083` for `Stage3-S073`. Preserve its `paper_software_mention` role separately from CR000082.
