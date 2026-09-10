# Computational Resources Stage 3 Progress

Date: 2026-09-11
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S184`
- Latest completed resource: `CR000206`
- Latest completed aggregate batch: `SOB019` — **PASS (10/10)**
- Current batch: `SOB020` — **7/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000207`
- Exact next checkpoint: `Stage3-S185`

## Cumulative counts through S184 / RC05

- Resources: **207**
- Experiments: **316**
- Configurations: **561**
- Technical-evidence records: **2257**
- Reproducibility assessments: **207**
- Unresolved findings: **1253**
- Explicit conflicts: **141**
- Independently extractable resources remaining: **156**

## S184

`CR000206` preserves the Stage-2-authoritative `maximbeekenkamp/PI-DeepONet` identity at pinned SHA `6b40022b5bc1a671f37689839b1abe9eaf86cfae`, no repository-level license, no project citation metadata, and no asserted Atlas-paper relationship.

The bounded extraction contains one separable self-adaptive PI-DeepONet workflow and one pinned main configuration. The source configures TensorFlow float64, NumPy seed 1234, latent dimension 80, batch sizes 400/100, 1000 configured epochs, and Adam learning rate 0.0001.

Two material completeness conditions are preserved. `dataset.py` requires `./Data/Dataset_square`, but the complete pinned 12-file tree contains no Data directory. Separately, the active `model_train.py` forward path references `F_x/F_y/F_z`, `W_brx/W_bry/W_brz`, and `u_B`, while `model_run.py` initializes the older CNN/FNN branch keys and the CNN path producing `u_B` is commented out. This is recorded as a static source-integrity conflict; observed runtime failure is not asserted.

The static reproducibility level is `R1`. No formal dependency/environment manifest or installation procedure satisfies the accepted R2 prerequisite. No scientific workload was executed.

## Reconciled baseline

Stage3-RC02, Stage3-RC03, Stage3-RC04 and Stage3-RC05 remain authoritative and count-neutral for their accepted scopes. Accepted methodology and schemas remain unchanged.

## Continuation

Continue with `Stage3-S185` at `CR000207`. Re-read the live branch, current reports, accepted scale-out plan, reconciliation authorities and latest checkpoint QA before starting.
