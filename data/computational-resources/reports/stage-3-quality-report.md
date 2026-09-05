# Computational Resources Stage 3 Quality Report

Date: 2026-09-06  
Branch: `data/computational-resources-stage3`  
Latest checkpoint: `Stage3-S085`  
Status: **PASS**

## Stage3-S085 checkpoint QA

Resource: `CR000097`

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

Checkpoint counts: **1 resource / 1 experiment / 3 configurations / 8 evidence records / 1 reproducibility assessment / 6 unresolved / 0 conflicts**.

## Cumulative counts through S085

- Resources: **100**
- Experiments: **177**
- Configurations: **363**
- Technical evidence: **1256**
- Reproducibility assessments: **100**
- Unresolved findings: **651**
- Explicit conflicts: **100**
- Independently extractable resources remaining: **263**

## Aggregate batch QA

`SOB009`: **PASS** at 10/10 independently extractable resources. `CR000087` and `CR000091` were correctly skipped as pilot-complete. Batch counts reconcile to the SOB008 boundary with no schema or methodology drift.

## Scientific QA note

CR000097 preserves final Stage-2 identity, the verified `PRL000199 → Atlas 615` official relationship, and Stage-2 classification as research code related to the PINN corpus. The source provides explicit LSTM architecture/training/evaluation logic, but no repository license, reconstructable environment, installation surface, hardware provenance, required `Data_98_18.dat` input, canonical checkpoints or expected-result artifacts. R1 is therefore conservative. The S_LSTM training block is recorded as unreachable in the pinned source because `exit()` occurs immediately after model summary. No scientific workload was executed.

## Continuation

Exact next independently extractable resource: `CR000098`. Next checkpoint: `Stage3-S086`.
