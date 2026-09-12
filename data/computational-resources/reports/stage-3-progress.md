# Computational Resources Stage 3 Progress

Date: 2026-09-12
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S224`
- Latest completed resource: `CR000260`
- Latest completed aggregate batch: `SOB024` — **PASS (10/10)**
- Current batch: `SOB025` — **8/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC07` — **PASS**
- Exact next independently extractable resource: `CR000261`
- Exact next checkpoint: `Stage3-S225`

## Cumulative counts through S224 / RC07

- Resources: **258**
- Experiments: **343**
- Configurations: **622**
- Technical-evidence records: **2632**
- Reproducibility assessments: **258**
- Unresolved findings: **1406**
- Explicit conflicts: **146**
- Independently extractable resources remaining: **105**

## S224

`CR000260` preserves the NTU LIBSVM project identity, `PRL000296`, and the Stage-2-pinned `cjlin1/libsvm` snapshot at `6b907139084abf2da4d6d3cb10dc3b7eaffa2fbb`. Static inspection records LIBSVM 3.37 capabilities, BSD-3-Clause licensing, C/C++ CLI/library builds, Python 3.37.0 bindings, Java release-11 build metadata, MATLAB/Octave interfaces, the bounded `heart_scale` example-data role, documented use paths, and evaluation outputs. Library examples are not promoted to synthetic experiments or configurations. Reproducibility is `R2`.

## Aggregate batch QA

`SOB024` remains **10/10 — PASS**. `SOB025` is now **8/10**; aggregate QA is not yet due.

## Continuation

Stage3-RC02 through Stage3-RC07 remain authoritative and count-neutral for their accepted scopes. RC07 normalizes 58 enum-invalid values in 35 records from S183–S202 without changing counts or scientific facts.

Continue with `Stage3-S225` at `CR000261`.
