# Computational Resources Stage 3 Progress

Date: 2026-09-11
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S186`
- Latest completed resource: `CR000208`
- Latest completed aggregate batch: `SOB019` — **PASS (10/10)**
- Current batch: `SOB020` — **9/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000209`
- Exact next checkpoint: `Stage3-S187`

## Cumulative counts through S186 / RC05

- Resources: **209**
- Experiments: **329**
- Configurations: **587**
- Technical-evidence records: **2281**
- Reproducibility assessments: **209**
- Unresolved findings: **1264**
- Explicit conflicts: **141**
- Independently extractable resources remaining: **154**

## S186

`CR000208` preserves the Stage-2-authoritative `maryamTolou/Learning-Python-Physics-Informed-Machine-Learning-PINNs-DeepONets` identity at pinned SHA `08fd3ac1714fa4ccd5b7b4b430a08bd7ee1adcd0`. GitHub records it as a distinct fork of `CR000202`; the fork predates the current upstream snapshot and neither later upstream content nor upstream relationships are inherited. No repository license, project self-citation metadata, or asserted Atlas-paper relationship is present.

The exact pinned 12-file tree contains nine tutorial notebooks: six under `PINNs/` and three under `DeepONets/`, plus bundled `Data/Burgers.mat` and `Data/Euler.mat`. README describes step-by-step coverage of function approximation, ODE/PDE PINNs, inverse PINNs, DeepONets, and physics-informed DeepONets.

No formal dependency/environment manifest, package-version pins, or installation procedure is present. Repository-level seed and hardware provenance remain unknown. The static reproducibility level is `R1`; scientific execution, notebook execution, and MAT-data loading were not performed.

## Reconciled baseline

Stage3-RC02, Stage3-RC03, Stage3-RC04 and Stage3-RC05 remain authoritative and count-neutral for their accepted scopes. Accepted methodology and schemas remain unchanged.

## Continuation

Continue with `Stage3-S187` at `CR000209`. Re-read the live branch, current reports, accepted scale-out plan, reconciliation authorities and latest checkpoint QA before starting.
