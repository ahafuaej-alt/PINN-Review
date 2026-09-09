# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S166`
- Latest completed resource: `CR000186`
- Latest completed aggregate batch: `SOB017` — **PASS (10/10)**
- Current batch: `SOB018` — **8/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000187`
- Exact next checkpoint: `Stage3-S167`

## Cumulative counts through S166

- Resources: **188**
- Experiments: **274**
- Configurations: **483**
- Technical-evidence records: **2067**
- Reproducibility assessments: **188**
- Unresolved findings: **1153**
- Explicit conflicts: **125**
- Independently extractable resources remaining: **175**

## S166

CR000186 preserves the Stage-2-authoritative `google/jax-cfd` repository at pinned SHA `f5c779228d5cbd877cfd0c1cadbb8d337290b224`, its Apache-2.0 license, research-paper citations and no-Atlas-relationship boundary. It remains differentiable CFD/ML supporting software rather than a PINN implementation.

Bounded static extraction maps one seeded 256-by-256 finite-volume turbulence demonstration, JAX-CFD's numerical methods, package extras, six notebooks, 31-test surface and external PNAS data/model boundary. This supports **R3**; unversioned dependencies, external artifacts and the unexecuted boundary block R4. README's “no longer maintained” statement and GitHub's `archived=false` flag are retained as one explicit provider-status conflict. SOB018 advances to 8/10.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S167` at `CR000187` after published-head and checkpoint-QA readback.
