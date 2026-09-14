# Computational Resources Stage 3 Progress

Date: 2026-09-14
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S298`
- Latest completed resource: `CR000349`
- Latest completed aggregate batch: `SOB033` - **PASS (10/10)**
- Current batch: `SOB034` - **6/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000350`
- Exact next checkpoint: `Stage3-S299`

## Cumulative counts through S298 / RC09

- Resources: **346**
- Experiments: **361**
- Configurations: **651**
- Technical-evidence records: **3402**
- Reproducibility assessments: **346**
- Unresolved findings: **1614**
- Explicit conflicts: **158**
- Independently extractable resources remaining: **17**

## S298

`CR000349` preserves final Stage-2 identity as the canonical Labeled Faces in the Wild (LFW) face benchmark and verified `PRL000269` for Atlas paper 760. Stage-2 authority documents 13,233 images representing 5,749 people and verifies paper 760's face-verification use. Public availability is not converted into a licence claim. The exact pair/split protocol, selected image variant/alignment and paper-specific preprocessing remain unresolved. CR000349 is assessed at `R2`; no image archive, protocol/pair file or aligned-image variant was downloaded or opened and no scientific workload was executed.

## Aggregate batch QA

`SOB033` remains **PASS (10/10)**. `SOB034` is now **6/10** with `CR000344`, `CR000345`, `CR000346`, `CR000347`, `CR000348` and `CR000349`.

## Report-state synchronization

The lowercase Stage3-SO-D01 control reports and uppercase compatibility counterparts remain synchronized at S298.

## Continuation

Continue with `Stage3-S299` at `CR000350`.
