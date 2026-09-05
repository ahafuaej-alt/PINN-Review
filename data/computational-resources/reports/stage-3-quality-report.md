# Computational Resources Stage 3 Quality Report

Date: 2026-09-05  
Branch: `data/computational-resources-stage3`  
Latest checkpoint: `Stage3-S080`  
Status: **PASS**

## Stage3-S080 checkpoint QA

Resource: `CR000092`

- Accepted Stage3-D01 methodology/schemas: **unchanged**
- Final Stage-2 authority resolution: **PASS**
- Pilot-exclusion / continuation-pointer reconciliation: **PASS**
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

Checkpoint counts: **1 resource / 0 experiments / 0 configurations / 6 evidence records / 1 reproducibility assessment / 6 unresolved / 0 conflicts**.

## Cumulative counts through S080

- Resources: **95**
- Experiments: **164**
- Configurations: **333**
- Technical evidence: **1207**
- Reproducibility assessments: **95**
- Unresolved findings: **621**
- Explicit conflicts: **98**
- Independently extractable resources remaining: **268**

## Aggregate batch QA

`SOB008`: **PASS** (latest completed aggregate QA).

`SOB009` is **5/10** after S080, so aggregate SOB009 QA is **not yet due**.

## Scientific QA note

CR000092 preserves final Stage-2 identity as an external dataset and the verified `PRL000194 → Atlas 605` dataset relationship. The provider metadata documents a Reynolds-100 two-dimensional fixed-cylinder flow dataset, its 1.2 GB primary flow file, reaction file, processing scripts and checksums. The archive is represented as a dataset resource rather than PINN software. R1 is conservative because archive accessibility and metadata are strong, while license, processing environment, payload-level schema validation and canonical expected processed outputs remain incomplete. No scientific workload or payload was executed or loaded.

## Continuation

Exact next independently extractable resource: `CR000093`. Next checkpoint: `Stage3-S081`.
