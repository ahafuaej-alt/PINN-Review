# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S291`
- Latest completed resource: `CR000342`
- Latest completed aggregate batch: `SOB032` - **PASS (10/10)**
- Current batch: `SOB033` - **9/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000343`
- Exact next checkpoint: `Stage3-S292`

## Cumulative counts through S291 / RC09

- Resources: **339**
- Experiments: **361**
- Configurations: **651**
- Technical-evidence records: **3351**
- Reproducibility assessments: **339**
- Unresolved findings: **1593**
- Explicit conflicts: **158**
- Independently extractable resources remaining: **24**

## S291

`CR000342` preserves Zenodo v1 DOI `10.5281/zenodo.10557024`, CC-BY-4.0 metadata and verified `PRL000322` for Atlas paper 836. The deposit contains `synthetic_data.zip` (53.8 MB; MD5 `e0aaf58f42ca715c6088dd565ff64bb0`) and `PINN_results.zip` (1.4 GB; MD5 `283593634a67a6edccdbace6fe6cb31a`); the provider states that the latter covers all paper results. The paper supports two experiment identities: the NC-PINN inversion study, represented with eight focal/spiral and data-quality configurations, and the distinct two-step NC+EIK extension, represented with ideal, 50% noise and tri-planar configurations. Noise levels, resolution levels and ten-run repetitions remain sweep dimensions rather than synthetic experiment identities. The separate GitLab code resource is not conflated with this DOI archive. CR000342 is assessed at `R2`; neither archive was downloaded or opened and no workflow was executed.

## Aggregate batch QA

`SOB032` remains **PASS (10/10)**. `SOB033` is now **9/10** with `CR000334–CR000342`.

## Report-state synchronization

The lowercase Stage3-SO-D01 control reports and uppercase compatibility counterparts remain synchronized at S291.

## Continuation

Continue with `Stage3-S292` at `CR000343`.
