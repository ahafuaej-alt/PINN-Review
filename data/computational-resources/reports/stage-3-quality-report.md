# Computational Resources Stage 3 Quality Report

Date: 2026-09-06  
Branch: `data/computational-resources-stage3`  
Latest checkpoint: `Stage3-S089`  
Status: **PASS**

## Stage3-S089 checkpoint QA

Resource: `CR000101`

- Accepted Stage3-D01 methodology/schemas: **unchanged**
- Final Stage-2 authority resolution: **PASS**
- Static-inspection-only execution boundary: **PASS**
- Five Stage-3 schema validations: **PASS**
- Resource → experiment → configuration cross-references: **PASS** (zero experiment/configuration records are explicitly permitted by the accepted methodology and resource schema)
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

Checkpoint counts: **1 resource / 0 experiments / 0 configurations / 7 evidence records / 1 reproducibility assessment / 6 unresolved / 0 conflicts**.

## Cumulative counts through S089

- Resources: **104**
- Experiments: **183**
- Configurations: **370**
- Technical evidence: **1289**
- Reproducibility assessments: **104**
- Unresolved findings: **675**
- Explicit conflicts: **100**
- Independently extractable resources remaining: **259**

## Aggregate batch QA

`SOB010` is **4/10** after S089, so aggregate SOB010 QA is **not yet due**. Latest completed aggregate remains `SOB009` — **PASS**.

## Scientific QA note

CR000101 preserves final Stage-2 identity, pinned SHA `6202299d2c956f667166ce48944496bfd1097644`, and the verified `PRL000206 → Atlas 647` official relationship. README evidence establishes the generalized XPINN space-time domain-decomposition method and recommended TensorFlow 1.14 / Python 3.6 versions. Because executable source is delivered only inside `XPINN_Code.zip`, the accepted archive boundary was applied: the archive and bundled paper PDF were not opened, and no internal experiment, configuration, entrypoint, dataset requirement, or result workflow was inferred. R1 is therefore conservative and appropriate. No scientific workload was executed.

## Continuation

Exact next independently extractable resource: `CR000102`. Next checkpoint: `Stage3-S090`.
