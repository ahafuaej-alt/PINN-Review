# Computational Resources Stage 3 Quality Report

Date: 2026-09-06  
Branch: `data/computational-resources-stage3`  
Latest checkpoint: `Stage3-S094`  
Status: **PASS**

## Stage3-S094 checkpoint QA

Resource: `CR000106`

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

Checkpoint counts: **1 resource / 3 experiments / 6 configurations / 10 evidence records / 1 reproducibility assessment / 6 unresolved / 0 conflicts**.

## Cumulative counts through S094

- Resources: **109**
- Experiments: **197**
- Configurations: **388**
- Technical evidence: **1333**
- Reproducibility assessments: **109**
- Unresolved findings: **704**
- Explicit conflicts: **101**
- Independently extractable resources remaining: **254**

## Aggregate batch QA

`SOB010` is **9/10** after S094, so aggregate SOB010 QA is **not yet due**. Latest completed aggregate remains `SOB009` — **PASS**.

## Scientific QA note

CR000106 preserves final Stage-2 identity, pinned SHA `b5978c4b9b7d46296b3ca339e1f0501c48cc1c61`, and verified `PRL000212 → Atlas 661` official relationship. Static inspection establishes three notebook workflow families across spin-boson and FMO-complex quantum dissipative dynamics, with bundled result/data/model surfaces and an external training-data record. The notebooks also depend on an unpinned external MLQD clone and inline package installation; saved output records a failed `sklearn` installation step. R2 is therefore conservative. No scientific workload was executed.

## Continuation

Exact next independently extractable resource: `CR000107`. Next checkpoint: `Stage3-S095`. Completion of CR000107 will trigger required SOB010 aggregate QA.
