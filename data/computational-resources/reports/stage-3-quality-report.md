# Computational Resources Stage 3 Quality Report

Date: 2026-09-11
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S185`
Status: **PASS**

## Checkpoint S185

- Resources: **1** (`CR000207`)
- Experiments: **4**
- Configurations: **17**
- Technical-evidence records: **12**
- Reproducibility assessments: **1**
- New unresolved findings: **5**
- New explicit conflicts: **0**
- Reproducibility: **R2**

Schema validation, cumulative identifier uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, evidence-use completeness, Stage-2 authority resolution, source-scope discipline, missing-value semantics, inference labeling, reproducibility classification, R5 exclusion, repository-scope safety, protected write boundaries, static-execution boundary, provenance-text screening and branch-head stability all pass.

Stage-2 authority, the exact pinned 38-file tree, README, fully pinned requirements manifest and representative PDE training sources were inspected statically. Four PDE families and all 17 explicit training-script variants are preserved without executing scientific workloads.

`SOB020` is 8/10, so aggregate batch QA is not triggered. `SOB019` remains the latest completed aggregate batch and remains PASS.
