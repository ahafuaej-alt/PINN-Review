# Computational Resources Stage 3 Quality Report

Date: 2026-09-11
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S184`
Status: **PASS**

## Checkpoint S184

- Resources: **1** (`CR000206`)
- Experiments: **1**
- Configurations: **1**
- Technical-evidence records: **10**
- Reproducibility assessments: **1**
- New unresolved findings: **6**
- New explicit conflicts: **1**
- Reproducibility: **R1**

Schema validation, cumulative identifier uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, evidence-use completeness, Stage-2 authority resolution, source-scope discipline, missing-value semantics, inference labeling, reproducibility classification, R5 exclusion, repository-scope safety, protected write boundaries, static-execution boundary, provenance-text screening and branch-head stability all pass.

Stage-2 authority, the exact pinned 12-file tree, README and Python workflow sources were inspected statically. The missing expected dataset and active branch-path/source-initialization inconsistency are retained explicitly without asserting observed runtime failure. No scientific workload was executed.

`SOB020` is 7/10, so aggregate batch QA is not triggered. `SOB019` remains the latest completed aggregate batch and remains PASS.
