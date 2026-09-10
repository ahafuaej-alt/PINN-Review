# Computational Resources Stage 3 Quality Report

Date: 2026-09-10
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S180`
Status: **PASS**

## Checkpoint S180

- Resources: **1** (`CR000202`)
- Experiments: **7**
- Configurations: **22**
- Technical-evidence records: **13**
- Reproducibility assessments: **1**
- New unresolved findings: **6**
- New explicit conflicts: **0**
- Reproducibility: **R2**

Schema validation, cumulative identifier uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, evidence-use completeness, Stage-2 authority resolution, source-scope discipline, missing-value semantics, inference labeling, reproducibility classification, R5 exclusion, repository-scope safety, protected write boundaries, static-execution boundary, provenance-text screening and branch-head stability all pass.

Stage-2 authority, the exact pinned NABLA-SciML tree, root/module documentation and dependency metadata were inspected statically. External code repositories and historical stored results/post-processing artifacts were not promoted into CR000202 experiments. No scientific workload was executed.

`SOB020` is 3/10, so aggregate batch QA is not triggered. `SOB019` remains the latest completed aggregate batch and remains PASS.
