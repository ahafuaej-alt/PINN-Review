# Computational Resources Stage 3 Progress

Date: 2026-09-14
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S301`
- Latest completed resource: `CR000352`
- Latest completed aggregate batch: `SOB033` - **PASS (10/10)**
- Current batch: `SOB034` - **9/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000353`
- Exact next checkpoint: `Stage3-S302`

## Cumulative counts through S301 / RC09

- Resources: **349**
- Experiments: **361**
- Configurations: **651**
- Technical-evidence records: **3425**
- Reproducibility assessments: **349**
- Unresolved findings: **1626**
- Explicit conflicts: **158**
- Independently extractable resources remaining: **14**

## S301

`CR000352` preserves final Stage-2 identity as the canonical Microsoft COCO dataset portal and verified `PRL000280` for Atlas paper 765. The portal's dataset, task and evaluation surfaces document object detection, segmentation, keypoints, captions, stuff, panoptic and DensePose scopes together with data/result formats, test guidance and evaluation tracks. No paper-specific release is inferred from the current multi-year portal. No universal dataset licence is inferred from public availability or a Terms of Use surface; image and annotation rights remain uncollapsed. Exact release/year, split, augmentation, detector settings and evaluation preprocessing remain unresolved. CR000352 is assessed at `R2`; no image archive, annotation JSON or evaluation payload was downloaded or opened and no scientific workload was executed.

## Count-neutral authority readback correction

Post-S298 readback corrected S297/CR000348 to the final Stage-2 authority: `PRL000330` links the SDC3a Foregrounds resource to Atlas paper **853** with relationship `paper_dataset_mention`. Stage 2 also preserves SKAO's explicit statement that data-challenge usage is unrestricted while leaving the SPDX licence identifier unresolved. S297 counts, IDs, batch membership and R2 classification are unchanged.

## Aggregate batch QA

`SOB033` remains **PASS (10/10)**. `SOB034` is now **9/10** with `CR000344`, `CR000345`, `CR000346`, `CR000347`, `CR000348`, `CR000349`, `CR000350`, `CR000351` and `CR000352`.

## Report-state synchronization

The lowercase Stage3-SO-D01 control reports and uppercase compatibility counterparts remain synchronized at S301, including the count-neutral S297 authority readback correction.

## Continuation

Continue with `Stage3-S302` at `CR000353`.
