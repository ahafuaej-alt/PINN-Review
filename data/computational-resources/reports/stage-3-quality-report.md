# Computational Resources Stage 3 Quality Report

Date: 2026-09-06  
Branch: `data/computational-resources-stage3`

## Latest checkpoint

- Checkpoint: `Stage3-S095`
- Batch: `SOB010` — **10/10 complete**
- Resource: `CR000107`
- Checkpoint status: **PASS**
- Aggregate batch QA: `SOB010` — **PASS**

## S095 checkpoint counts

- Resources: **1**
- Experiments: **4**
- Configurations: **4**
- Technical-evidence records: **9**
- Reproducibility assessments: **1**
- New unresolved findings: **5**
- New explicit conflicts: **0**

## Cumulative counts through S095

- Resources: **110**
- Experiments: **201**
- Configurations: **392**
- Technical-evidence records: **1342**
- Reproducibility assessments: **110**
- Unresolved findings: **709**
- Explicit conflicts: **101**
- Independently extractable resources remaining: **253**

## QA gates

Schema validation, cumulative ID uniqueness, evidence-reference integrity, resource→experiment→configuration cross-references, inference labeling, reproducibility classification, R5 exclusion, repository-scope safety, Stage-1/Stage-2/public-Atlas/curated/schema write boundaries, execution boundary, provenance-text screening and branch-head stability all **PASS** for S095.

SOB010 aggregate reconciliation also **PASS**: ten independently extractable resources `CR000098–CR000107`, no pilot skips, batch additions `10/24/29/86/10/58/1`, and cumulative totals `110/201/392/1342/110/709/101`.

## Scientific/reproducibility note

`CR000107` preserves the Stage-2 pinned SHA `336e2df0cb7c946acb562ef0baf0109bc9963bf5` and verified official `PRL000213 → Atlas 662`. The source contains four Hamiltonian-system identification workflows and is classified in Stage 3 as `non_pinn_research_code`, without changing its Stage-2 identity. R2 is conservative because source mathematics, architecture, training controls and README environment versions are explicit, while a dependency manifest, installation recipe, random seeds, runtime hardware provenance and checkpoints/results are incomplete or unavailable.

## Continuation

Next batch: `SOB011`. Exact next resource: `CR000108`. Exact next checkpoint: `Stage3-S096`.
