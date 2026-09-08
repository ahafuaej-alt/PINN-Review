# Computational Resources Stage 3 Quality Report

Date: 2026-09-08
Branch: `data/computational-resources-stage3`

## Latest checkpoint

- Checkpoint: `Stage3-S138`
- Resources: CR000155
- Status: **PASS**
- Current batch: `SOB015` — **8/10**
- Latest aggregate: **SOB014 PASS (10/10)**

All accepted schemas, cumulative identifier uniqueness, hierarchy links, evidence ownership/reference integrity, evidence-use completeness and inference pairing pass. Missing-value states and reproducibility gates remain evidence-scoped; no R5 assessment is assigned. CR000155 preserves its Stage-2 pinned SHA and official Atlas-823 relationship.

Checkpoint counts: {"configurations": 1, "experiments": 1, "new_conflicting_evidence_findings": 0, "new_unresolved_findings": 5, "reproducibility_assessments": 1, "resources": 1, "technical_evidence_records": 10}.

## Cumulative counts

- Resources: **158**
- Experiments: **246**
- Configurations: **445**
- Technical-evidence records: **1775**
- Reproducibility assessments: **158**
- Unresolved findings: **998**
- Explicit conflicts: **117**

## Scientific scope

CR000155 statically maps the optimizer-study repository at the accepted Stage-2 commit, including the pinned Python environment, PINN model, supported PDE utilities, optimizer sequence, reproduction scripts and plotting workflow. A representative convection Adam→L-BFGS→NysNewton-CG configuration is retained with its source-level `switch_epochs` defect, hard-coded device indices and external W&B dependency; these prevent advancement beyond R2.

Stage-1/Stage-2, public Atlas, curated data, methodology and schema write boundaries are preserved. No scientific workload was executed. Stage3-RC02 and Stage3-RC03 remain authoritative.

## Continuation

Next resource: `CR000156`. Next checkpoint: `Stage3-S139`. Remaining identities: **205**.
