# Computational Resources Stage 3 Progress

Date: 2026-09-11
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S193`
- Latest completed resource: `CR000215`
- Latest completed aggregate batch: `SOB020` — **PASS (10/10)**
- Current batch: `SOB021` — **6/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000216`
- Exact next checkpoint: `Stage3-S194`

## Cumulative counts through S193 / RC05

- Resources: **216**
- Experiments: **336**
- Configurations: **606**
- Technical-evidence records: **2345**
- Reproducibility assessments: **216**
- Unresolved findings: **1302**
- Explicit conflicts: **143**
- Independently extractable resources remaining: **147**

## S193

`CR000215` preserves the Stage-2-authoritative aggregate `https://sciml.ai` SciML ecosystem identity with no inferred Atlas-paper relationship and no single resource-level implementation commit.

Bounded static extraction uses `SciML/sciml.ai` at pinned website-source commit `97f17f276975f4653796e8ec7ddf50da7c3c2bfc` only to verify provider website provenance and ecosystem documentation. The website-source MIT license and Franklin build dependency remain source-scoped and are not propagated to the aggregate ecosystem. Component packages remain independent and are not converted into synthetic Stage-3 experiments/configurations. Static reproducibility is `R1`.

## Aggregate batch QA

`SOB020` remains complete at 10/10 and **PASS**. `SOB021` is now 6/10.

## Reconciled baseline

Stage3-RC02, Stage3-RC03, Stage3-RC04 and Stage3-RC05 remain authoritative and count-neutral for their accepted scopes. Accepted methodology and schemas remain unchanged.

## Continuation

Continue with `Stage3-S194` at `CR000216`.