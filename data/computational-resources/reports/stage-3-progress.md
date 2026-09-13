# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S277`
- Latest completed resource: `CR000326`
- Latest completed aggregate batch: `SOB031` - **PASS (10/10)**
- Current batch: `SOB032` - **3/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000327`
- Exact next checkpoint: `Stage3-S278`

## Cumulative counts through S277 / RC09

- Resources: **323**
- Experiments: **358**
- Configurations: **637**
- Technical-evidence records: **3175**
- Reproducibility assessments: **323**
- Unresolved findings: **1546**
- Explicit conflicts: **155**
- Independently extractable resources remaining: **40**

## S277

`CR000326` preserves the versioned Kaggle DOI `10.34740/kaggle/dsv/2637500`, version-3 identity and verified `PRL000222` relationship for Atlas paper 691. The record establishes a CC BY 4.0 curated RANS/DNS/LES turbulence dataset including five PHLL periodic-hill geometry cases. The paper uses periodic-hill data for physics-informed identification of standard k-omega coefficients, but the exact case, files, fields, point selection and preprocessing map remain unresolved. No payload was opened and no scientific workflow was executed. The resource is assessed at `R2`.

## Aggregate batch QA

`SOB031` remains **PASS (10/10)**. `SOB032` is now **3/10** with `CR000324–CR000326`.

## Continuation

Continue with `Stage3-S278` at `CR000327`.
