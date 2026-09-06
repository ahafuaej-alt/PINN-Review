# Computational Resources Stage 3 Quality Report

Date: 2026-09-06  
Branch: `data/computational-resources-stage3`  
Latest checkpoint: `Stage3-S087`  
Status: **PASS**

## Stage3-S087 checkpoint QA

Resource: `CR000099`

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

Checkpoint counts: **1 resource / 1 experiment / 2 configurations / 9 evidence records / 1 reproducibility assessment / 6 unresolved / 0 conflicts**.

## Cumulative counts through S087

- Resources: **102**
- Experiments: **182**
- Configurations: **369**
- Technical evidence: **1274**
- Reproducibility assessments: **102**
- Unresolved findings: **663**
- Explicit conflicts: **100**
- Independently extractable resources remaining: **261**

## Aggregate batch QA

`SOB010` is **2/10** after S087, so aggregate SOB010 QA is **not yet due**. Latest completed aggregate remains `SOB009` — **PASS**.

## Scientific QA note

CR000099 preserves final Stage-2 identity and the verified `PRL000202 → Atlas 631` official relationship. The extraction preserves the weak-PINN ensemble and single-retraining surfaces, the ShockRarEntropy equation model, bundled archive metadata, and precomputed RarefactionWave artifacts without loading archives or serialized models. R2 is supported by explicit mathematics/training controls, deterministic sampling seed, and provider-bundled result evidence; the absent license, dependency/environment manifest, installation procedure, hardware provenance, and complete command-to-artifact manifest prevent a higher static reproducibility level. No scientific workload was executed.

## Continuation

Exact next independently extractable resource: `CR000100`. Next checkpoint: `Stage3-S088`.
