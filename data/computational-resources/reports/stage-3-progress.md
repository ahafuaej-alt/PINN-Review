# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S275`
- Latest completed resource: `CR000324`
- Latest completed aggregate batch: `SOB031` - **PASS (10/10)**
- Current batch: `SOB032` - **1/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000325`
- Exact next checkpoint: `Stage3-S276`

## Cumulative counts through S275 / RC09

- Resources: **321**
- Experiments: **358**
- Configurations: **637**
- Technical-evidence records: **3149**
- Reproducibility assessments: **321**
- Unresolved findings: **1540**
- Explicit conflicts: **155**
- Independently extractable resources remaining: **42**

## S275

`CR000324` preserves the corrected canonical data DOI `10.4224/PhysRevA.96.042113.data` and verified `PRL000215` relationship for Atlas paper 664. The DOI resolves to a specific NRC Digital Repository object, while the primary paper documents the four two-dimensional potential classes, the finite-difference generation grid and solver validation, structured and random potential-generation procedures, training/validation sizes, downstream convolutional-network context and reported errors. The provider object interface did not yield a retrievable file/version/checksum manifest, so exact repository-file mapping to potential classes, labels and train/validation partitions remains unresolved. Dataset-level licence and the random-generation seed also remain unknown rather than inferred. No dataset payload was opened and no scientific workflow was executed. The resource is assessed at `R1`.

## Aggregate batch QA

`SOB031` remains **PASS (10/10)**. `SOB032` is now **1/10** with `CR000324`.

## Continuation

Continue with `Stage3-S276` at `CR000325`.
