# Computational Resources Stage 3 Quality Report

Date: 2026-09-10
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S183`
Status: **PASS**

## Checkpoint S183

- Resources: **1** (`CR000205`)
- Experiments: **1**
- Configurations: **3**
- Technical-evidence records: **11**
- Reproducibility assessments: **1**
- New unresolved findings: **6**
- New explicit conflicts: **2**
- Reproducibility: **R1**

Schema validation, cumulative identifier uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, evidence-use completeness, Stage-2 authority resolution, source-scope discipline, missing-value semantics, inference labeling, reproducibility classification, R5 exclusion, repository-scope safety, protected write boundaries, static-execution boundary, provenance-text screening and branch-head stability all pass.

Stage-2 authority, the exact pinned tree, README and all three model entrypoints were inspected statically. README-level benchmark claims and source declarations were kept source-scoped. The SPINN iteration/optimizer-schedule disagreement and the Simple/SA-PINN collocation-grid disagreement are retained as two explicit conflicts. No scientific workload was executed.

`SOB020` is 6/10, so aggregate batch QA is not triggered. `SOB019` remains the latest completed aggregate batch and remains PASS.
