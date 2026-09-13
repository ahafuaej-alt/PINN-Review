# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S279`
- Latest completed resource: `CR000328`
- Latest completed aggregate batch: `SOB031` - **PASS (10/10)**
- Current batch: `SOB032` - **5/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000329`
- Exact next checkpoint: `Stage3-S280`

## Cumulative counts through S279 / RC09

- Resources: **325**
- Experiments: **358**
- Configurations: **637**
- Technical-evidence records: **3192**
- Reproducibility assessments: **325**
- Unresolved findings: **1550**
- Explicit conflicts: **156**
- Independently extractable resources remaining: **38**

## S279

`CR000328` preserves the EyePACS/Kaggle diabetic-retinopathy competition identity and verified `PRL000229` relationship for Atlas paper 706. Provider evidence establishes clinician-graded high-resolution fundus images on the five-class 0-4 severity scale and competition-rule-controlled access. The paper reports EyePACS use and a 70:30 split, but the exact subset, preprocessing, class-imbalance handling and split lineage remain unresolved. No competition rules were accepted, no payload was opened and no clinical or scientific workflow was executed. The resource is assessed at `R1`.

## Aggregate batch QA

`SOB031` remains **PASS (10/10)**. `SOB032` is now **5/10** with `CR000324–CR000328`.

## Continuation

Continue with `Stage3-S280` at `CR000329`.
