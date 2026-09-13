# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S268`
- Latest completed resource: `CR000317`
- Latest completed aggregate batch: `SOB030` - **PASS (10/10)**
- Current batch: `SOB031` - **4/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000318`
- Exact next checkpoint: `Stage3-S269`

## Cumulative counts through S268 / RC09

- Resources: **314**
- Experiments: **353**
- Configurations: **628**
- Technical-evidence records: **3058**
- Reproducibility assessments: **314**
- Unresolved findings: **1517**
- Explicit conflicts: **155**
- Independently extractable resources remaining: **49**

## S268

`CR000317` preserves the exact Kaggle DSV `2645886` version-1 Brain Tumor MRI Dataset identity and verified `PRL000181` relationship for Atlas paper 582. Version-1 provider metadata reports 7023 human brain MRI images in four classes (glioma, meningioma, no tumor and pituitary), identifies figshare, SARTAJ and Br35H as component sources, documents a 1311-image testing directory, and carries a CC0 public-domain licence. The provider also notes variable image sizes and suggests resizing only after preprocessing/removing extra margins. Atlas paper 582 explicitly uses the Brain Tumour dataset to pre-train NeuroNet57 before extracting features from ABIDE-I+II. Exact image subsets, paper-specific train/validation/test handling, cropping/resizing, normalization, augmentation and pre-training optimization details are not independently established by the bounded source set. The provider narrative reports 7023 images while the current Data Explorer summary displays 7022 files; because no payload was opened, this presentation difference remains bounded rather than forced into a conflict. No Kaggle payload, image or archive was downloaded/opened and no scientific workflow was executed. The resource is assessed at `R2`.

## Aggregate batch QA

`SOB030` remains **PASS (10/10)**. `SOB031` is now **4/10**.

## Continuation

Continue with `Stage3-S269` at `CR000318`.
