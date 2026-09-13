# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S293`
- Latest completed resource: `CR000344`
- Latest completed aggregate batch: `SOB033` - **PASS (10/10)**
- Current batch: `SOB034` - **1/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000345`
- Exact next checkpoint: `Stage3-S294`

## Cumulative counts through S293 / RC09

- Resources: **341**
- Experiments: **361**
- Configurations: **651**
- Technical-evidence records: **3370**
- Reproducibility assessments: **341**
- Unresolved findings: **1600**
- Explicit conflicts: **158**
- Independently extractable resources remaining: **22**

## S293

`CR000344` preserves the final Stage-2 narrowing from the PhysioNet root to the exact versioned PhysioNet/Computing in Cardiology Challenge 2007 v1.0.0 resource and retains verified `PRL000323` for Atlas paper 837. Official PhysioNet documentation establishes two training and two test cases, BSPM data at 352 torso-surface sites sampled at 2 kHz, 120 anatomical recording-electrode locations, cardiac MRI material and heart/torso geometry, with customized geometry for case 3. Paper 837 specifically uses body and heart geometry, so the broader challenge corpus is not imported into the paper-specific scope. The provider exposes a 97.5 MB archive and public file listing under ODC-By-1.0; the archive was not downloaded or opened. CR000344 is assessed at `R2`; no scientific workflow was executed.

## Aggregate batch QA

`SOB033` remains **PASS (10/10)**. `SOB034` is now **1/10** with `CR000344`.

## Report-state synchronization

The lowercase Stage3-SO-D01 control reports and uppercase compatibility counterparts remain synchronized at S293.

## Continuation

Continue with `Stage3-S294` at `CR000345`.
