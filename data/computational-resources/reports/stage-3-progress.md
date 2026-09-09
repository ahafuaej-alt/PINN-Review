# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S168`
- Latest completed resource: `CR000188`
- Latest completed aggregate batch: `SOB018` — **PASS (10/10)**
- Current batch: `SOB019` — **0/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000189`
- Exact next checkpoint: `Stage3-S169`

## Cumulative counts through S168

- Resources: **190**
- Experiments: **276**
- Configurations: **491**
- Technical-evidence records: **2088**
- Reproducibility assessments: **190**
- Unresolved findings: **1163**
- Explicit conflicts: **127**
- Independently extractable resources remaining: **173**

## S168

CR000188 preserves the Stage-2-authoritative `scikit-fmm/scikit-fmm` repository at pinned SHA `3618765f26fe469163840dd0d9775848ec379c3e`, its supporting-library identity, exact BSD-3-Clause license text and no-Atlas-relationship boundary. It is a compiled Python/C++ fast-marching implementation for Eikonal boundary-value problems, not a PINN.

Bounded static extraction maps one exact-output three-by-three distance/travel-time quick start, the distance/travel-time/extension-velocity API, first- and second-order stencils, masked/narrow-band/periodic capabilities, Meson build metadata and extensive doctest surface. This supports **R3**; unpinned build dependencies/toolchain and the unexecuted boundary block R4. GitHub's NOASSERTION license metadata and exact BSD text are retained as one explicit conflict. S168 completes SOB018 at **PASS (10/10)**.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S169` at `CR000189` after published-head and checkpoint-QA readback.
