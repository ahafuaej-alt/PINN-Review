# Computational Resources Stage 3 Quality Report

Date: 2026-09-04  
Branch: `data/computational-resources-stage3`  
Latest checkpoint: `Stage3-S076`  
Status: **PASS**

## Stage3-S076 checkpoint QA

Resource: `CR000086`

- Accepted Stage3-D01 methodology/schemas: **unchanged**
- Final Stage-2 authority and pinned SHA resolution: **PASS**
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

Checkpoint counts: **1 resource / 1 experiment / 2 configurations / 10 evidence records / 1 reproducibility assessment / 8 unresolved / 0 conflicts**.

## Cumulative counts through S076

- Resources: **91**
- Experiments: **156**
- Configurations: **320**
- Technical evidence: **1170**
- Reproducibility assessments: **91**
- Unresolved findings: **594**
- Explicit conflicts: **97**
- Independently extractable resources remaining: **272**

## Aggregate batch QA

`SOB008`: **PASS** (latest completed aggregate QA).

`SOB009` is **1/10** after S076, so aggregate SOB009 QA is **not yet due**.

## Scientific QA note

CR000086 is bounded as `simulator_solver`: a MATLAB adaptive phase-field fracture/IGA codebase used by Atlas paper 598 for high-fidelity data generation. The Stage-2 `paper_dataset_mention` role is preserved. Source-implemented second-/fourth-order tensile-example branches are recorded as capability configurations only; they are not promoted to the exact Atlas-598 generation setup without direct evidence.

## Continuation

Exact next independently extractable resource: `CR000088`. Next checkpoint: `Stage3-S077`.
