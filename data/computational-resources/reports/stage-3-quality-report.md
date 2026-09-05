# Computational Resources Stage 3 Quality Report

Date: 2026-09-06  
Branch: `data/computational-resources-stage3`  
Latest checkpoint: `Stage3-S086`  
Status: **PASS**

## Stage3-S086 checkpoint QA

Resource: `CR000098`

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

Checkpoint counts: **1 resource / 4 experiments / 4 configurations / 9 evidence records / 1 reproducibility assessment / 6 unresolved / 0 conflicts**.

## Cumulative counts through S086

- Resources: **101**
- Experiments: **181**
- Configurations: **367**
- Technical evidence: **1265**
- Reproducibility assessments: **101**
- Unresolved findings: **657**
- Explicit conflicts: **100**
- Independently extractable resources remaining: **262**

## Aggregate batch QA

`SOB010` is **1/10** after S086, so aggregate SOB010 QA is **not yet due**. Latest completed aggregate remains `SOB009` — **PASS**.

## Scientific QA note

CR000098 preserves final Stage-2 identity and the verified `PRL000201 → Atlas 616` official relationship. Four source-scoped workflow families cover deterministic PINN identification, Bayesian PINN/HMC, analytical Bayesian inference, and SA-PINN. The analytical Bayesian workflow is explicitly retained as a non-PINN comparator. R2 is supported by bundled COVID data, explicit oscillator mathematics, architecture/training/evaluation logic, result artifacts, and pinned deterministic-PINN package versions; the absence of a repository license, installation procedure, unified environment for the Bayesian and SA-PINN stacks, complete seed coverage, and hardware/checkpoint provenance prevents a higher static reproducibility level. No scientific workload was executed.

## Continuation

Exact next independently extractable resource: `CR000099`. Next checkpoint: `Stage3-S087`.
