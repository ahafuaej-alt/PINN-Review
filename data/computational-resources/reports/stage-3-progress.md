# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S289`
- Latest completed resource: `CR000340`
- Latest completed aggregate batch: `SOB032` - **PASS (10/10)**
- Current batch: `SOB033` - **7/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000341`
- Exact next checkpoint: `Stage3-S290`

## Cumulative counts through S289 / RC09

- Resources: **337**
- Experiments: **358**
- Configurations: **637**
- Technical-evidence records: **3315**
- Reproducibility assessments: **337**
- Unresolved findings: **1587**
- Explicit conflicts: **158**
- Independently extractable resources remaining: **26**

## S289

`CR000340` preserves the archived `openai/gym` software-library identity at the exact Stage-2 commit `bc212954b6713d5db303b3ead124de6cba66063e` and the corrected `PRL000252` secondary-review relationship for Atlas paper 721. The paper cites Gym only as a benchmark-library analogy in deep reinforcement learning, not as experimental data. Static source evidence establishes Gym `0.26.2`, documented installation/API use, supported Python/platform scope, mixed dependency constraints, environment-versioning guidance and the repository MIT licence. Gymnasium is preserved only as the maintained successor named by the archived README and is not substituted for CR000340. CR000340 is assessed at `R2`; no installation, dependency resolution or environment execution occurred.

## Aggregate batch QA

`SOB032` remains **PASS (10/10)**. `SOB033` is now **7/10** with `CR000334–CR000340`.

## Report-state synchronization

S289 restores synchronization between the lowercase Stage3-SO-D01 control reports and their uppercase compatibility counterparts. Scientific checkpoint evidence from S284–S288 was already present and is unchanged; this checkpoint only brings both report families to the same current S289 state.

## Continuation

Continue with `Stage3-S290` at `CR000341`.
