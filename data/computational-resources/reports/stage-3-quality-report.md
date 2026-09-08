# Computational Resources Stage 3 Quality Report

Date: 2026-09-08
Branch: `data/computational-resources-stage3`

## Latest checkpoint

- Checkpoint: `Stage3-S139`
- Resources: CR000156
- Status: **PASS**
- Current batch: `SOB015` — **9/10**
- Latest aggregate: **SOB014 PASS (10/10)**

All accepted schemas, cumulative identifier uniqueness, hierarchy links, evidence ownership/reference integrity, evidence-use completeness and inference pairing pass. Missing-value states and reproducibility gates remain evidence-scoped; no R5 assessment is assigned. CR000156 preserves its Stage-2 redirected identity, pinned SHA, GPL-3.0 license and official Atlas-832 relationship.

Checkpoint counts: {"configurations": 1, "experiments": 1, "new_conflicting_evidence_findings": 0, "new_unresolved_findings": 5, "reproducibility_assessments": 1, "resources": 1, "technical_evidence_records": 9}.

## Cumulative counts

- Resources: **159**
- Experiments: **247**
- Configurations: **446**
- Technical-evidence records: **1784**
- Reproducibility assessments: **159**
- Unresolved findings: **1003**
- Explicit conflicts: **117**

## Scientific scope

CR000156 is classified as a simulator/solver toolbox rather than a PINN implementation. Static evidence confirms the multi-method additive-manufacturing scope and bounds experiment/configuration extraction to the retained 3D linear-elasticity FEM demo. Dependency versions are not pinned, petsc4py is platform-sensitive, FEM maintenance has moved to JAX-FEM and no bounded numerical reference threshold was identified; these factors cap static reproducibility at R2.

Stage-1/Stage-2, public Atlas, curated data, methodology and schema write boundaries are preserved. No scientific workload was executed. Stage3-RC02 and Stage3-RC03 remain authoritative.

## Continuation

Next resource: `CR000157`. Next checkpoint: `Stage3-S140`. Remaining identities: **204**.
