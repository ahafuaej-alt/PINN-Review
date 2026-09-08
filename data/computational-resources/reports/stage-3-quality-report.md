# Computational Resources Stage 3 Quality Report

Date: 2026-09-08  
Branch: `data/computational-resources-stage3`

## Latest checkpoint and aggregate batch

- Checkpoint: `Stage3-S122`
- Resource: `CR000137`
- Checkpoint status: **PASS**
- Latest completed batch: `SOB013` — **PASS (10/10)**
- Current batch: `SOB014` — **0/10**

## S122 checkpoint counts

- Resources: **1**
- Experiments: **2**
- Configurations: **2**
- Technical-evidence records: **10**
- Reproducibility assessments: **1**
- New unresolved findings: **5**
- New explicit conflicts: **0**

## Cumulative counts through S122

- Resources: **140**
- Experiments: **227**
- Configurations: **424**
- Technical-evidence records: **1585**
- Reproducibility assessments: **140**
- Unresolved findings: **887**
- Explicit conflicts: **112**
- Independently extractable resources remaining: **223**

## QA gates

S122 schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, Stage-2 authority resolution, inference labeling, reproducibility classification, R5 exclusion, source-scope discipline, missing-value semantics, repository-scope safety, Stage-1/Stage-2/public-Atlas/curated/methodology/schema write boundaries, execution boundary, provenance-text screening, and branch-head stability all **PASS**.

`SOB013` aggregate QA is **PASS (10/10)**. Batch membership is exactly `CR000128–CR000137`; checkpoint and cumulative counts reconcile to the `SOB012` boundary.

## Scientific/reproducibility note

CR000137 preserves the repaired Stage-2 immutable NeuroDiffEq authority and verified Atlas relationship. It is represented as a PINN framework/library. Two explicit README workflows provide bounded experiment/configuration records while framework-wide capabilities remain resource-scoped. The static reproducibility assessment is **R3**.

## Continuation

Exact next resource: `CR000138`. Exact next checkpoint: `Stage3-S123`.

## Cumulative reconciliation — 2026-09-08

`Stage3-RC02` repairs the previously published schema/reference defects and reconciles 15 R2 assessments to R1 under the accepted environment-and-installation gate. All 2,516 technical/evidence/assessment records pass schema validation; cumulative identifiers, hierarchy links, evidence references and SOB001–SOB013 counts pass revalidation.

No resources, experiments, configurations, evidence IDs, unresolved findings or conflict findings are added or removed. The current frontier remains S122 / CR000137, SOB014 0/10; next extraction is S123 / CR000138. Unresolved ID S3U-0888 remains next.

See [stage-3-cumulative-reconciliation-2026-09-08.md](stage-3-cumulative-reconciliation-2026-09-08.md) for per-field corrections, assessment decisions and the QA scope. Historical PASS statements are supported only after this reconciliation for the affected schema/reference gates. No scientific workloads were executed.
