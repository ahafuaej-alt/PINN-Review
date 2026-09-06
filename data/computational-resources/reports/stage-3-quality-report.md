# Computational Resources Stage 3 Quality Report

Date: 2026-09-06  
Branch: `data/computational-resources-stage3`  
Latest checkpoint: `Stage3-S088`  
Status: **PASS**

## Stage3-S088 checkpoint QA

Resource: `CR000100`

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

Checkpoint counts: **1 resource / 1 experiment / 1 configuration / 8 evidence records / 1 reproducibility assessment / 6 unresolved / 0 conflicts**.

## Cumulative counts through S088

- Resources: **103**
- Experiments: **183**
- Configurations: **370**
- Technical evidence: **1282**
- Reproducibility assessments: **103**
- Unresolved findings: **669**
- Explicit conflicts: **100**
- Independently extractable resources remaining: **260**

## Aggregate batch QA

`SOB010` is **3/10** after S088, so aggregate SOB010 QA is **not yet due**. Latest completed aggregate remains `SOB009` — **PASS**.

## Scientific QA note

CR000100 preserves final Stage-2 identity and the verified `PRL000203 → Atlas 634` official relationship. The extraction retains the authoritative research-code role and represents one EikoNet-coupled hypocenter-location experiment with one default configuration. R2 is supported by available source, MIT licensing, installation instructions, declared dependencies and explicit SVGD/location defaults; exact dependency versions, external EikoNet model/data provenance, deterministic seed and hardware provenance prevent a higher static reproducibility level. No scientific workload was executed.

## Continuation

Exact next independently extractable resource: `CR000101`. Next checkpoint: `Stage3-S089`.
