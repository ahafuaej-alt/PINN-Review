# Computational Resources Stage 3 Progress

Date: 2026-09-11
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S194`
- Latest completed resource: `CR000216`
- Latest completed aggregate batch: `SOB020` — **PASS (10/10)**
- Current batch: `SOB021` — **7/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000217`
- Exact next checkpoint: `Stage3-S195`

## Cumulative counts through S194 / RC05

- Resources: **217**
- Experiments: **339**
- Configurations: **609**
- Technical-evidence records: **2357**
- Reproducibility assessments: **217**
- Unresolved findings: **1308**
- Explicit conflicts: **144**
- Independently extractable resources remaining: **146**

## S194

`CR000216` preserves the Stage-2-authoritative `https://gradsim.github.io` web-resource identity, with official website-source commit `ebf56cc95eb7c51d2de0bbc2947e396c3006e43c` and separately linked code commit `abe8008e9559957f84a67b06208600cb66de3be2`. No Atlas-paper relationship is inferred.

Bounded static extraction maps only the explicitly paper-support `exp01`, `exp02`, and `exp03` linked-code workflows to three experiments/configurations. General demos remain resource-level support evidence. Website CC-BY-4.0 licensing remains website-scoped; the linked-code repository has no root license and conflicting setup metadata (`(TBD)` versus an MIT classifier), preserved as explicit conflict. Static reproducibility is `R2`.

## Aggregate batch QA

`SOB020` remains complete at 10/10 and **PASS**. `SOB021` is now 7/10.

## Reconciled baseline

Stage3-RC02, Stage3-RC03, Stage3-RC04 and Stage3-RC05 remain authoritative and count-neutral for their accepted scopes. Accepted methodology and schemas remain unchanged.

## Continuation

Continue with `Stage3-S195` at `CR000217`.