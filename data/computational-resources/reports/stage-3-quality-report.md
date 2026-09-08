# Computational Resources Stage 3 Quality Report

Date: 2026-09-08
Branch: `data/computational-resources-stage3`

## Latest checkpoint

- Checkpoint: `Stage3-S135`
- Resources: CR000152
- Status: **PASS**
- Current batch: `SOB015` — **5/10**
- Latest aggregate: **SOB014 PASS (10/10)**

All accepted schemas, cumulative identifier uniqueness, reciprocal hierarchy links, evidence ownership/reference integrity, evidence-use completeness and inference pairing pass. Missing-value states and reproducibility gates are evidence-scoped; no R5 assessment is assigned. Stage-2 identity, relationship and pinned scope were resolved before extraction.

Checkpoint counts: {"configurations": 1, "experiments": 1, "new_conflicting_evidence_findings": 0, "new_unresolved_findings": 4, "reproducibility_assessments": 1, "resources": 1, "technical_evidence_records": 10}.

## Cumulative counts

- Resources: **155**
- Experiments: **243**
- Configurations: **442**
- Technical-evidence records: **1745**
- Reproducibility assessments: **155**
- Unresolved findings: **983**
- Explicit conflicts: **117**

## Scientific scope

CR000152 preserves Stage-2 SHA and PRL000311. The representative 1D Burgers case exposes exact principal library versions, bundled reference data, hyperparameters, Adam/RAD training and quasi-Newton refinement. Manual replacement of SciPy optimizer internals, missing Python/hardware specification, and no bundled checkpoint/acceptance threshold keep static reproducibility at R3.

Stage-1/Stage-2, public Atlas, curated data, methodology and schema write boundaries are preserved. No scientific workload was executed. Stage3-RC02 and [Stage3-RC03](stage-3-schema-reconciliation-2026-09-08-rc03.md) remain authoritative for prior reconciliations.

## Continuation

Next resource: `CR000153`. Next checkpoint: `Stage3-S136`. Remaining identities: **208**.
