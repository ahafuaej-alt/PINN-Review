# Computational Resources Stage 3 Quality Report

Date: 2026-09-08
Branch: `data/computational-resources-stage3`

## Latest checkpoint

- Checkpoint: `Stage3-S127`
- Resources: CR000142, CR000143
- Status: **PASS**
- Current batch: `SOB014` — **6/10**
- Latest aggregate: **SOB013 PASS (10/10)**

All accepted schemas, cumulative identifier uniqueness, reciprocal hierarchy links, evidence ownership/reference integrity, evidence-use completeness and inference pairing pass. New missing-value states and reproducibility gates are evidence-scoped; no R5 assessment is assigned. Stage-2 identity, relationships and pinned scope were resolved before extraction.

Checkpoint counts: {"configurations": 2, "experiments": 2, "new_conflicting_evidence_findings": 0, "new_unresolved_findings": 10, "reproducibility_assessments": 2, "resources": 2, "technical_evidence_records": 15}.

## Cumulative counts

- Resources: **146**
- Experiments: **235**
- Configurations: **434**
- Technical-evidence records: **1663**
- Reproducibility assessments: **146**
- Unresolved findings: **930**
- Explicit conflicts: **114**

## Scientific scope

CR000142 is a code-backed adaptive-activation PINN implementation. One explicit convection pair is represented with separate adaptive-slope and non-adaptive-slope configurations; other PDE cases remain resource-scoped. Static reproducibility is **R3**.

CR000143 is materially different: the pinned repository exposes only README.md. The primary paper documents AW-PINN based on GradNorm for VIV, but those claims remain paper-scoped and implementation equivalence is unresolved. Static repository reproducibility is **R1**.

Stage-1/Stage-2, public Atlas, curated data, methodology and schema write boundaries are preserved. The checkpoint QA record states the expected parent and atomic-publication policy. No scientific workload was executed. Stage3-RC02 remains authoritative for prior reconciliations.

## Continuation

Next resource: `CR000144`. Next checkpoint: `Stage3-S128`. Remaining identities: **217**.
