# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S231`
- Latest completed resource: `CR000271`
- Latest completed aggregate batch: `SOB025` — **PASS (10/10)**
- Current batch: `SOB026` — **8/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC07` — **PASS**
- Exact next independently extractable resource: `CR000272`
- Exact next checkpoint: `Stage3-S232`

## Cumulative counts through S231 / RC07

- Resources: **268**
- Experiments: **343**
- Configurations: **622**
- Technical-evidence records: **2704**
- Reproducibility assessments: **268**
- Unresolved findings: **1425**
- Explicit conflicts: **147**
- Independently extractable resources remaining: **95**

## S231

`CR000271` preserves the final Stage-2 PlantVillage identity and `PRL000021` relationship to Atlas reference 110. The primary paper explicitly attributes 1,550 rice images (522 Blast, 518 Bacterial Blight, 510 Tungro) to the exact Kaggle PlantVillage record and documents 224 × 224 resizing plus horizontal/vertical flip augmentation.

The current Kaggle record documents the standard PlantVillage dataset and a current CC BY-NC-SA 4.0 licence. Bounded canonical PlantVillage evidence does not expose a matching rice class path. The exact paper-used rice subset therefore cannot be reconciled to the authoritative CR000271 identity from the inspected static sources. This is recorded as explicit conflicting evidence rather than resolved by rewriting Stage 2 or inventing an alternate dataset. Reproducibility is conservatively `R1`.

## Aggregate batch QA

`SOB025` remains **10/10 — PASS**. `SOB026` is now **8/10**; aggregate QA is not yet due.

## Continuation

Stage3-RC02 through Stage3-RC07 remain authoritative and count-neutral for their accepted scopes. The accepted `Stage3-SO-D01` single-resource complexity trigger is satisfied for S231 because CR000271 contains a consequential dataset-identity conflict.

Continue with `Stage3-S232` at `CR000272`.
