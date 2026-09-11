# Computational Resources Stage 3 Progress

Date: 2026-09-11
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S192`
- Latest completed resource: `CR000214`
- Latest completed aggregate batch: `SOB020` — **PASS (10/10)**
- Current batch: `SOB021` — **5/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000215`
- Exact next checkpoint: `Stage3-S193`

## Cumulative counts through S192 / RC05

- Resources: **215**
- Experiments: **336**
- Configurations: **606**
- Technical-evidence records: **2337**
- Reproducibility assessments: **215**
- Unresolved findings: **1297**
- Explicit conflicts: **143**
- Independently extractable resources remaining: **148**

## S192

`CR000214` preserves the Stage-2-authoritative `argonne-lcf/TensorFlowFoam` supporting-software identity at pinned commit `57465ae03bf3462a73233c3dc5e788664acd4e8b`, MIT licensing and no inferred Atlas-paper relationship.

Bounded static extraction records the legacy TensorFlow 1.15 / OpenFOAM 5 interoperability environment and promotes only the explicitly documented ML_RANS train→freeze→OpenFOAM deploy/test workflow to one experiment/configuration. ML_LES and IN_SITU remain work-in-progress resource-level evidence. A same-snapshot README/source-code ReLU-versus-tanh activation disagreement is preserved as explicit conflicting evidence. Static reproducibility is `R2`.

## Aggregate batch QA

`SOB020` remains complete at 10/10 and **PASS**. `SOB021` is now 5/10.

## Reconciled baseline

Stage3-RC02, Stage3-RC03, Stage3-RC04 and Stage3-RC05 remain authoritative and count-neutral for their accepted scopes. Accepted methodology and schemas remain unchanged.

## Continuation

Continue with `Stage3-S193` at `CR000215`.