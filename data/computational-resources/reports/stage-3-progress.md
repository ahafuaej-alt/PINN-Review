# Computational Resources Stage 3 — Progress

**Status:** active — controlled scale-out  
**Methodology:** Stage3-D01 accepted without modification  
**Current checkpoint:** `Stage3-S071`  
**Current scale-out batch:** `SOB008`  
**Last completed resource:** `CR000081`  
**Next resource:** `CR000082`  
**Next checkpoint:** `Stage3-S072`  
**Checkpoint QA:** PASS  
**Latest aggregate batch QA:** `SOB007` PASS  
**Aggregate QA due:** when `SOB008` reaches 10/10 independently extractable resources

## Stage-3 cumulative state

- Completed Stage-3 resources: **86**
- Completed experiments: **150**
- Completed configurations: **312**
- Technical evidence records: **1122**
- Reproducibility assessments: **86**
- Unresolved findings: **558**
- Explicit conflicts: **97**
- Independently extractable resources remaining: **277**

## Current batch

`SOB008`: **6 / 10** independently extractable resources completed.

Completed members:

- `CR000076`
- `CR000077`
- `CR000078`
- `CR000079`
- `CR000080`
- `CR000081`

Aggregate batch QA is **not yet due**.

## Stage3-S071 checkpoint summary

Processed exactly one resource because bounded inspection established material complexity.

### CR000081 — skoohy/GPT-PINN

- Final Stage-2 canonical identity: `https://github.com/skoohy/GPT-PINN`
- Final Stage-2 classification: `pinn_or_physics_informed_implementation`
- Authoritative pinned SHA: `2b7dae22e7fdd781c47252a33fdaaf021afc4e72`
- Stage-2 license state: `unknown`
- Stage-2 data classification: `bundled_research_or_example_data`
- Verified official relationship: `PRL000180 → Atlas 578`
- Stage-3 resource profile: `pinn_implementation`
- Artifact form: `source_repository`
- Experiments: **3**
- Configurations: **6**
- Technical evidence records: **14**
- Reproducibility: **R1**
- New unresolved findings: **9**
- New explicit conflicts: **1**

The bounded static extraction preserves three principal workflow families: parametric Klein–Gordon, Burgers and Allen–Cahn. Each is represented as a distinct experiment with a full-PINN or SA-PINN basis configuration and a GPT-PINN configuration. README environment versions, implementation-level training settings, seeds, parameter grids and device assumptions are retained without executing any workload.

The explicit conflict concerns device portability. README states GPU is intended primarily and CPU computation can also be used, while the inspected current entrypoints hard-code CUDA/GPU device assumptions. The documentation and implementation observations are preserved separately rather than silently reconciled.

R1 is retained conservatively because no dependency lock/environment manifest, portable installation procedure, machine-level hardware provenance or immutable pretrained checkpoint set is available. Allen–Cahn also crosses TensorFlow and PyTorch representations, increasing environment reconstruction sensitivity.

## Scope protection

S071 modified only Stage-3 technical/evidence/report paths. It did not modify Stage 1, Stage 2, public Atlas/site files, `05-curated/`, methodology, or schemas.

No scientific software, notebook, model, training, inference, evaluation, test, dependency, environment, container, accelerator, dataset or benchmark workload was executed.

## Exact continuation

Resume at `CR000082` for `Stage3-S072`. Resolve final Stage-2 authority before extraction. Normally pair with the next independently extractable resource only if bounded inspection confirms that both can be completed safely and accurately within one checkpoint.
