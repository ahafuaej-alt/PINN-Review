# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S158`
- Latest completed resource: `CR000176`
- Latest completed aggregate batch: `SOB016` — **PASS (10/10)**
- Current batch: `SOB017` — **8/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000177`
- Exact next checkpoint: `Stage3-S159`

## Cumulative counts through S158

- Resources: **178**
- Experiments: **264**
- Configurations: **473**
- Technical-evidence records: **1975**
- Reproducibility assessments: **178**
- Unresolved findings: **1102**
- Explicit conflicts: **123**
- Independently extractable resources remaining: **185**

## S158

CR000176 remains supporting Parareal theory software rather than PINN code. Static extraction maps its core iteration/matrix library, 169-line Linux/Dedalus environment, 16-test surface, and one paper-figure experiment grouped into four workflow configurations covering all 16 documented figures. The detailed environment, tests and figure mapping support **R3**; manual parameter edits and absent reference outputs block R4. SOB017 advances to 8/10.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S159` at `CR000177` after published-head and checkpoint-QA readback.
