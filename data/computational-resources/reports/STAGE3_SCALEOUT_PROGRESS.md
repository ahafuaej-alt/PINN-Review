# Computational Resources Stage 3 Progress

Date: 2026-09-14
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S299`
- Latest completed resource: `CR000350`
- Latest completed aggregate batch: `SOB033` - **PASS (10/10)**
- Current batch: `SOB034` - **7/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000351`
- Exact next checkpoint: `Stage3-S300`

## Cumulative counts through S299 / RC09

- Resources: **347**
- Experiments: **361**
- Configurations: **651**
- Technical-evidence records: **3410**
- Reproducibility assessments: **347**
- Unresolved findings: **1618**
- Explicit conflicts: **158**
- Independently extractable resources remaining: **16**

## S299

`CR000350` preserves final Stage-2 identity as the canonical University of Toronto CIFAR-10/CIFAR-100 benchmark resource and all five verified relationships (`PRL000270`, `PRL000272`, `PRL000273`, `PRL000278`, `PRL000282`) for Atlas papers 761, 762, 763, 765 and 767. Provider documentation establishes the CIFAR-10 and CIFAR-100 population, train/test structure, formats, record layouts, distribution checksums and citation guidance. Public downloads are not converted into a dataset-level licence claim. Paper-specific archive variants, preprocessing, augmentation, validation splits, architectures and training/evaluation configurations remain unresolved. CR000350 is assessed at `R2`; no dataset archive or batch file was downloaded or opened and no scientific workload was executed.

## Count-neutral authority readback correction

Post-S298 readback corrected S297/CR000348 to the final Stage-2 authority: `PRL000330` links the SDC3a Foregrounds resource to Atlas paper **853** with relationship `paper_dataset_mention`. Stage 2 also preserves SKAO's explicit statement that data-challenge usage is unrestricted while leaving the SPDX licence identifier unresolved. S297 counts, IDs, batch membership and R2 classification are unchanged.

## Aggregate batch QA

`SOB033` remains **PASS (10/10)**. `SOB034` is now **7/10** with `CR000344`, `CR000345`, `CR000346`, `CR000347`, `CR000348`, `CR000349` and `CR000350`.

## Report-state synchronization

The lowercase Stage3-SO-D01 control reports and uppercase compatibility counterparts remain synchronized at S299, including the count-neutral S297 authority readback correction.

## Continuation

Continue with `Stage3-S300` at `CR000351`.
