# Computational Resources Stage 3 Progress

Date: 2026-09-11
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S190`
- Latest completed resource: `CR000212`
- Latest completed aggregate batch: `SOB020` — **PASS (10/10)**
- Current batch: `SOB021` — **3/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000213`
- Exact next checkpoint: `Stage3-S191`

## Cumulative counts through S190 / RC05

- Resources: **213**
- Experiments: **335**
- Configurations: **605**
- Technical-evidence records: **2317**
- Reproducibility assessments: **213**
- Unresolved findings: **1286**
- Explicit conflicts: **142**
- Independently extractable resources remaining: **150**

## S190

`CR000212` preserves the Stage-2-authoritative transferred `taichi-dev/difftaichi` supporting-software identity at pinned commit `9f4ee522a0a01e6b1aae1d3551c7fd1f6ed56081`; Stage 2 establishes continuity with the former `yuanming-hu/difftaichi` path. No Atlas-paper relationship is inferred.

Bounded static extraction records the repository's examples-only role after DiffTaichi functionality moved into Taichi, ICLR 2020 project citation, installation guidance, dependency manifest and documented differentiable-simulator breadth. README Taichi v0.8.3 compatibility guidance conflicts with the same-snapshot `taichi>=1.1.0` requirement and is preserved explicitly. Static reproducibility is `R1`.

## Aggregate batch QA

`SOB020` remains complete at 10/10 and **PASS**. `SOB021` is now 3/10.

## Reconciled baseline

Stage3-RC02, Stage3-RC03, Stage3-RC04 and Stage3-RC05 remain authoritative and count-neutral for their accepted scopes. Accepted methodology and schemas remain unchanged.

## Continuation

Continue with `Stage3-S191` at `CR000213`.
