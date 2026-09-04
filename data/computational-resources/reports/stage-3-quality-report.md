# Computational Resources Stage 3 Quality Report

Date: 2026-09-05  
Branch: `data/computational-resources-stage3`  
Latest checkpoint: `Stage3-S078`  
Status: **PASS**

## Stage3-S078 checkpoint QA

Resource: `CR000089`

- Accepted Stage3-D01 methodology/schemas: **unchanged**
- Final Stage-2 authority resolution: **PASS**
- Authoritative pinned SHA preservation: **PASS**
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

Checkpoint counts: **1 resource / 5 experiments / 9 configurations / 13 evidence records / 1 reproducibility assessment / 8 unresolved / 0 conflicts**.

## Cumulative counts through S078

- Resources: **93**
- Experiments: **161**
- Configurations: **329**
- Technical evidence: **1189**
- Reproducibility assessments: **93**
- Unresolved findings: **608**
- Explicit conflicts: **97**
- Independently extractable resources remaining: **270**

## Aggregate batch QA

`SOB008`: **PASS** (latest completed aggregate QA).

`SOB009` is **3/10** after S078, so aggregate SOB009 QA is **not yet due**.

## Scientific QA note

CR000089 preserves its final Stage-2 operator-learning identity, pinned SHA and verified official relationship to Atlas 603. The repository is materially heterogeneous, so S078 is a single-resource checkpoint. Five workflow families and nine notebook-level configurations are represented using static repository evidence only; bundled data, generator files and trained artifacts remain source-scoped and are not promoted to independent reusable datasets or execution evidence.

## Continuation

Exact next independently extractable resource: `CR000090`. Next checkpoint: `Stage3-S079`.
