# Computational Resources Stage 3 Progress

Date: 2026-09-11
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S199`
- Latest completed resource: `CR000225`
- Latest completed aggregate batch: `SOB021` — **PASS (10/10)**
- Current batch: `SOB022` — **4/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000226`
- Exact next checkpoint: `Stage3-S200`

## Cumulative counts through S199 / RC05

- Resources: **224**
- Experiments: **339**
- Configurations: **609**
- Technical-evidence records: **2402**
- Reproducibility assessments: **224**
- Unresolved findings: **1336**
- Explicit conflicts: **145**
- Independently extractable resources remaining: **139**

## S199

`CR000224` preserves the Stage-2-resolved `sciann/sciann` one-README project-move pointer at pinned commit `ed06ee3c05bd79ec3db344e54334355941d5c618`. Canonical SciANN technical authority remains `CR000062`; `PRL000080` retains canonical-resource provenance. Static reproducibility for the pointer identity is `R1`.

`CR000225` preserves the unavailable historical NeuroDiffEq alias and accepted `VA000002` resolution to canonical `CR000137` (`NeuroDiffGym/neurodiffeq`). Canonical technical authority remains on CR000137; `PRL000081` retains canonical-resource provenance. Static reproducibility for the unavailable alias artifact is `R0`.

Neither alias is expanded into duplicate experiments, configurations, environments, licenses, datasets, or canonical reproducibility claims.

## Continuation

Continue with `Stage3-S200` at `CR000226`.
