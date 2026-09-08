# Computational Resources Stage 3 Quality Report

Date: 2026-09-08
Branch: `data/computational-resources-stage3`

## Latest checkpoint

- Checkpoint: `Stage3-S132`
- Resource: CR000149
- Status: **PASS**
- Latest aggregate: **SOB014 PASS (10/10)**
- Current batch: `SOB015` вЂ” **2/10**

All applicable accepted schemas, cumulative identifier uniqueness, evidence ownership/reference integrity, evidence-use completeness, source scoping, missing-value semantics, inference pairing, Stage-2 authority resolution, static-execution boundary, repository-scope safety and publication boundaries pass. No R5 assessment is assigned.

Checkpoint counts: {"configurations": 1, "experiments": 1, "new_conflicting_evidence_findings": 0, "new_unresolved_findings": 6, "reproducibility_assessments": 1, "resources": 1, "technical_evidence_records": 7}.

## Cumulative counts

- Resources: **152**
- Experiments: **239**
- Configurations: **438**
- Technical-evidence records: **1705**
- Reproducibility assessments: **152**
- Unresolved findings: **962**
- Explicit conflicts: **115**

## Scientific scope

CR000149 is a Stage-1-normalized PIRBFNN repository identity for oil-water two-phase multi-well Darcy flow. Its historical Stage-2 resource authority is absent; this is preserved as an explicit authority gap, not repaired by retroactive Stage-2 edits. The observed repository head contains a README and one PyTorch implementation script; environment/install metadata are insufficient for R2, so static reproducibility is **R1**.

`SOB014` remains accepted PASS. Stage-1/Stage-2, public Atlas, curated data, methodology and schema write boundaries are preserved. No scientific workload was executed. Stage3-RC02 remains authoritative for prior reconciliations.

## Continuation

Next resource: `CR000150`. Next checkpoint: `Stage3-S133`. Remaining identities: **211**.

## Schema reconciliation

[Stage3-RC03](stage-3-schema-reconciliation-2026-09-08-rc03.md) corrects seven unsupported enum values in six S129/S132 records. The published counts are unchanged; accepted schema validation and cumulative integrity pass after this correction.
