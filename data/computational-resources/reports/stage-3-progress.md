# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S159`
- Latest completed resource: `CR000178`
- Latest completed aggregate batch: `SOB017` — **PASS (10/10)**
- Current batch: `SOB018` — **0/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000179`
- Exact next checkpoint: `Stage3-S160`

## Cumulative counts through S159

- Resources: **180**
- Experiments: **265**
- Configurations: **474**
- Technical-evidence records: **1988**
- Reproducibility assessments: **180**
- Unresolved findings: **1112**
- Explicit conflicts: **123**
- Independently extractable resources remaining: **183**

## S159

CR000177 preserves the Stage-2-authoritative A-PINN repository at its pinned snapshot. Static extraction maps one representative 1D forward Volterra integro-differential workflow: a 1-60-60-60-60-2 multi-output network, auxiliary integral state, L-BFGS default training controls, bundled model checkpoint and relative-L2 evaluation against the exact solution. Missing dependency versions, installation instructions, license, seed and immutable expected metric limit the static assessment to **R2**.

CR000178 remains the Stage-2-authoritative GitHub profile identity. Observed owned repositories are not promoted and no paper relationship is inferred; no executable artifact belongs to the profile record, so **R0** applies.

S159 completes `SOB017` at 10/10. Mandatory aggregate QA is **PASS**.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S160` at `CR000179` after published-head and checkpoint-QA readback.
