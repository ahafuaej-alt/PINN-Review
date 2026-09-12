# Computational Resources Stage 3 Progress

Date: 2026-09-12
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S210`
- Latest completed resource: `CR000242`
- Latest completed aggregate batch: `SOB023` — **PASS (10/10)**
- Current batch: `SOB024` — **0/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC06` — **PASS (count-neutral accepted-schema artifact-form normalization)**
- Exact next independently extractable resource: `CR000243`
- Exact next checkpoint: `Stage3-S211`

## Cumulative counts through S210 / RC06

- Resources: **240**
- Experiments: **339**
- Configurations: **609**
- Technical-evidence records: **2499**
- Reproducibility assessments: **240**
- Unresolved findings: **1376**
- Explicit conflicts: **146**
- Independently extractable resources remaining: **123**

## RC06

RC06 corrects seven published `artifact_form` enum values in S206–S210 without changing scientific meaning or counts. `CR000235` is normalized from `provider_profile` to accepted `profile_page`; `CR000236`, `CR000237`, `CR000238`, `CR000240`, `CR000241`, and `CR000242` are normalized from `documentation_web_resource` to accepted `documentation_site`. Historical checkpoint QA remains historical; RC06 supersedes only the affected schema-pass claims. Accepted schemas and methodology are unchanged.

## Aggregate batch QA

`SOB023` remains **PASS (10/10)** with authoritative membership `CR000233`–`CR000242` after RC06 revalidation. `SOB024` starts at **0/10**.

## Continuation

Continue with `Stage3-S211` at `CR000243`.