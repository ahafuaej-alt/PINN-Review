# Computational Resources Stage 3 Quality Report

Date: 2026-09-06  
Branch: `data/computational-resources-stage3`  
Latest checkpoint: `Stage3-S092`  
Status: **PASS**

## Stage3-S092 checkpoint QA

Resource: `CR000104`

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

Checkpoint counts: **1 resource / 3 experiments / 3 configurations / 9 evidence records / 1 reproducibility assessment / 6 unresolved / 1 conflict**.

## Cumulative counts through S092

- Resources: **107**
- Experiments: **193**
- Configurations: **380**
- Technical evidence: **1315**
- Reproducibility assessments: **107**
- Unresolved findings: **693**
- Explicit conflicts: **101**
- Independently extractable resources remaining: **256**

## Aggregate batch QA

`SOB010` is **7/10** after S092, so aggregate SOB010 QA is **not yet due**. Latest completed aggregate remains `SOB009` — **PASS**.

## Scientific QA note

CR000104 preserves final Stage-2 identity, pinned SHA `e02fd50eb4cf87074e31550ebdd47c1eba9dae08`, and verified `PRL000209 → Atlas 656` official relationship. Static source inspection establishes a convolutional QuantumShellNet architecture and three documented prediction task modes, with explicit seeds, optimizer/training controls, requirements and testing logic. No PINN/PDE-residual implementation is present in the inspected source, so `non_pinn_research_code` preserves resource-role distinction. A consequential reproducibility conflict is retained: train.py parses `save_folder` and test.py parses `load_folder`, while both later reference undefined `args.root`; README command wording is also inconsistent with those source interfaces. R1 is therefore conservative despite otherwise substantial documentation. No scientific workload was executed.

## Continuation

Exact next independently extractable resource: `CR000105`. Next checkpoint: `Stage3-S093`.
