# Computational Resources Stage 3 Quality Report

Date: 2026-09-05  
Branch: `data/computational-resources-stage3`  
Latest checkpoint: `Stage3-S084`  
Status: **PASS**

## Stage3-S084 checkpoint QA

Resource: `CR000096`

- Accepted Stage3-D01 methodology/schemas: **unchanged**
- Final Stage-2 authority resolution: **PASS**
- Static-inspection-only execution boundary: **PASS**
- Five Stage-3 schema validations: **PASS**
- Resource → experiment → configuration cross-references: **PASS**
- Evidence-reference integrity: **PASS**
- Cumulative identifier uniqueness: **PASS**
- Source-scoped claim preservation: **PASS**
- Missing-value semantics: **PASS**
- Inference labeling: **PASS**
- Reproducibility classification (R0–R4 only): **PASS**
- R5 exclusion: **PASS**
- Stage 1 / Stage 2 write boundary: **PASS**
- Public Atlas/site write boundary: **PASS**
- `05-curated/` write boundary: **PASS**
- Methodology/schema write boundary: **PASS**
- Branch-head stability before publication: **PASS**
- Checkpoint commit policy: **PASS**

Checkpoint counts: **1 resource / 2 experiments / 6 configurations / 9 evidence records / 1 reproducibility assessment / 6 unresolved / 1 conflict**.

## Cumulative counts through S084

- Resources: **99**
- Experiments: **176**
- Configurations: **360**
- Technical evidence: **1248**
- Reproducibility assessments: **99**
- Unresolved findings: **645**
- Explicit conflicts: **100**
- Independently extractable resources remaining: **264**

## Aggregate batch QA

`SOB008`: **PASS** (latest completed aggregate QA).

`SOB009` is **9/10** after S084, so aggregate SOB009 QA is **not yet due**.

## Scientific QA note

CR000096 preserves final Stage-2 identity and the verified `PRL000198 → Atlas 612` official relationship. Two bounded workflow families and six configurations represent the pinned AugmentedPINN repository without multiplying PINN/XPINN/APINN mode flags into artificial experiments. R2 is supported by explicit source-level PDE selectors, deterministic seeds, architecture/training hyperparameters, collocation/boundary sampling logic and evaluation routines. The absence of a license, dependency/environment manifest, installation procedure, package versions, hardware provenance, canonical checkpoints, and complete bundled data prevents a higher static reproducibility level. The BB gate-pretraining code also hard-codes CUDA placement despite exposing a configurable device control; this is preserved as an explicit source-code conflict. No scientific workload was executed.

## Continuation

Exact next independently extractable resource: `CR000097`. Next checkpoint: `Stage3-S085`.
