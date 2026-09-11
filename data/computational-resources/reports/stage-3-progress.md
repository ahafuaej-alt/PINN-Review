# Computational Resources Stage 3 Progress

Date: 2026-09-11
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S202`
- Latest completed resource: `CR000231`
- Latest completed aggregate batch: `SOB021` — **PASS (10/10)**
- Current batch: `SOB022` — **9/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000232`
- Exact next checkpoint: `Stage3-S203`

## Cumulative counts through S202 / RC05

- Resources: **229**
- Experiments: **339**
- Configurations: **609**
- Technical-evidence records: **2438**
- Reproducibility assessments: **229**
- Unresolved findings: **1356**
- Explicit conflicts: **146**
- Independently extractable resources remaining: **134**

## S202

`CR000230` preserves TensorDiffEq at pinned commit `7633927b8471a4150ea25972fbf41902af01070d`. Static evidence establishes TensorFlow 2.X collocation PINN support for forward/inverse problems, multi-worker/multi-GPU use, self-adaptive collocation, package version 0.2.0, Python >=3.6, and multiple environment manifests. Stage 2 verified no repository license file/metadata while setup.py carries an MIT classifier; this is preserved as an explicit source-scoped conflict and no SPDX is inferred. Reproducibility is bounded at `R2`.

`CR000231` preserves IDRLnet at pinned commit `69ae694330e0bc748c522e98045a78a61831c901`, Apache-2.0 licensing, PyTorch PINN capabilities, package version 2.0.0, Python >=3.6, pinned major dependencies and documented PyPI/Docker/Conda/source installation paths. Bundled Navier-Stokes CSV assets remain example/reference inputs rather than a standalone dataset. Reproducibility is bounded at `R2`.

## Continuation

Continue with `Stage3-S203` at `CR000232`.
