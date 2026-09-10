# Computational Resources Stage 3 Progress

Date: 2026-09-10
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S177`
- Latest completed resource: `CR000199`
- Latest completed aggregate batch: `SOB019` — **PASS (10/10)**
- Current batch: `SOB020` — **0/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000200`
- Exact next checkpoint: `Stage3-S178`

## Cumulative counts through S177 / RC05

- Resources: **200**
- Experiments: **293**
- Configurations: **514**
- Technical-evidence records: **2175**
- Reproducibility assessments: **200**
- Unresolved findings: **1209**
- Explicit conflicts: **137**
- Independently extractable resources remaining: **163**

## S177

CR000199 preserves the Stage-2-authoritative `RishikeshRanade/modulus` fork pinned at `fb4f15956dbb32ed83082a99f9b99471874ab7b5`, licensed Apache-2.0, with PhysicsNeMo citation metadata and no inferred Atlas-paper relationship. The broad framework supports multiple Physics-AI model families.

One directly extractable, dataset-free lid-driven-cavity PINN workflow is mapped as one experiment and one active configuration. The 2,348-file Stage-2 framework tree remains bounded; unrelated examples are not manufactured into experiments. The resource receives **R3** because locked root packaging, installation surfaces, an entrypoint, model configuration, physics losses, sampling, training and output instructions are substantially available. Missing deterministic controls, example-local PhysicsNeMo-Sym compatibility and quantitative expected results block R4. No scientific workload was executed.

## Reconciled baseline

Stage3-RC02, Stage3-RC03, Stage3-RC04 and Stage3-RC05 remain authoritative for their accepted scopes. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S178` at `CR000200` after published-head and checkpoint-QA readback.
