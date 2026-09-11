# Computational Resources Stage 3 Progress

Date: 2026-09-11
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S201`
- Latest completed resource: `CR000229`
- Latest completed aggregate batch: `SOB021` — **PASS (10/10)**
- Current batch: `SOB022` — **7/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000230`
- Exact next checkpoint: `Stage3-S202`

## Cumulative counts through S201 / RC05

- Resources: **227**
- Experiments: **339**
- Configurations: **609**
- Technical-evidence records: **2422**
- Reproducibility assessments: **227**
- Unresolved findings: **1346**
- Explicit conflicts: **145**
- Independently extractable resources remaining: **136**

## S201

`CR000229` preserves the Stage-2-repaired Nangs identity at canonical `juansensio/nangs` and pinned commit `8c9be2fb0d2f1901b515aea87c16ea0f5dca2164`; the unavailable Stage-1 `juanpedro/nangs` path remains provenance under accepted `VA000040`. Static evidence establishes a PyTorch-based neural PDE/PINN library, package version `2021.12.06`, Python `>=3.6`, `pip install nangs`, Apache-2.0 licensing, and `PRL000085` for Atlas 367. PyTorch remains an unversioned separately installed backend dependency, so static reproducibility is bounded at `R2`.

Tutorials/examples are retained as framework documentation and are not manufactured into Stage-3 experiments.

## Continuation

Continue with `Stage3-S202` at `CR000230`.
