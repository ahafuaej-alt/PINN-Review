# Computational Resources Stage 3 Quality Report

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S275`
Latest reconciliation: `Stage3-RC09`
Status: **PASS**

## Checkpoint S275

- Resources: **1** (`CR000324`)
- Experiments: **0**
- Configurations: **0**
- Technical-evidence records: **14**
- Reproducibility assessments: **1**
- New unresolved findings: **4**
- New explicit conflicts: **0**
- Reproducibility: **CR000324 R1**

All required checkpoint validation gates pass. The final Stage-2 corrected `.data` DOI and verified `PRL000215` relationship are preserved. Primary-paper evidence establishes the four potential classes, finite-difference generation grid, structured/random generation procedures, training/validation sizes, downstream model context and reported use results. The corrected DOI now resolves to a specific NRC Digital Repository object, but no experiment/configuration hierarchy is manufactured because the exact provider file/version/checksum manifest and paper-to-file partition mapping were not independently retrieved. Dataset-level licence and the random-generation seed remain unknown rather than inferred. The reproducibility record conforms to RC09. No dataset payload, solver, training, inference or other scientific workflow was executed.

## Aggregate batch QA

`SOB031` remains **10/10 — PASS**. `SOB032` is **1/10** with `CR000324`.

Stage3-RC02 through Stage3-RC09 remain authoritative and count-neutral for their accepted scopes.

Exact continuation: `CR000325 → Stage3-S276`.
