# Computational Resources Stage 3 Progress

Date: 2026-09-11
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S200`
- Latest completed resource: `CR000228`
- Latest completed aggregate batch: `SOB021` — **PASS (10/10)**
- Current batch: `SOB022` — **6/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000229`
- Exact next checkpoint: `Stage3-S201`

## Cumulative counts through S200 / RC05

- Resources: **226**
- Experiments: **339**
- Configurations: **609**
- Technical-evidence records: **2414**
- Reproducibility assessments: **226**
- Unresolved findings: **1342**
- Explicit conflicts: **145**
- Independently extractable resources remaining: **137**

## S200

`CR000226` preserves the unavailable Stage-1 `analysis-bear/PyDEns` alias and accepted `VA000039` resolution to canonical `CR000057` (`analysiscenter/pydens`). Canonical technical authority remains on CR000057; `PRL000082` retains canonical-resource provenance. Static reproducibility for the unavailable alias artifact is `R0`.

`CR000228` preserves ADCME as a supporting scientific-computing library at pinned commit `074c84443cfe89b66a1b8900a83d60f81d4fbc03`. Static evidence establishes its graph-mode TensorFlow backend, physics-constrained/inverse-modeling capabilities, Julia package manifest (`0.7.3`, Julia `^1.3`), documented package/Docker installation paths, and MIT license. It remains broader than a PINN-specific framework and receives static reproducibility `R2`.

`CR000227` is pilot-complete and remains excluded from scale-out re-extraction under accepted Stage3-SO-D01.

## Continuation

Continue with `Stage3-S201` at `CR000229`.
