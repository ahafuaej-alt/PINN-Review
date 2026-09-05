# Computational Resources Stage 3 Quality Report

Date: 2026-09-05  
Branch: `data/computational-resources-stage3`  
Latest checkpoint: `Stage3-S083`  
Status: **PASS**

## Stage3-S083 checkpoint QA

Resource: `CR000095`

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

Checkpoint counts: **1 resource / 2 experiments / 6 configurations / 10 evidence records / 1 reproducibility assessment / 4 unresolved / 1 conflict**.

## Cumulative counts through S083

- Resources: **98**
- Experiments: **174**
- Configurations: **354**
- Technical evidence: **1239**
- Reproducibility assessments: **98**
- Unresolved findings: **639**
- Explicit conflicts: **99**
- Independently extractable resources remaining: **265**

## Aggregate batch QA

`SOB008`: **PASS** (latest completed aggregate QA).

`SOB009` is **8/10** after S083, so aggregate SOB009 QA is **not yet due**.

## Scientific QA note

CR000095 preserves final Stage-2 identity and the verified `PRL000197 → Atlas 611` official relationship. Two bounded frequency families and six exact run-script configurations represent the pinned PINNgabor repository. R3 is supported by the MIT license, installation procedure, extensive Conda environment, explicit training commands, seed reporting for five of six runs, hardware documentation and TensorBoard evaluation instructions. Mixed unpinned dependencies, the seed omission in the 16-Hz Gabor command, editable absolute path placeholders, and the preserved single-A6000 versus `cuda:0–3` hardware/device-control conflict prevent R4. No scientific workload was executed.

## Continuation

Exact next independently extractable resource: `CR000096`. Next checkpoint: `Stage3-S084`.
