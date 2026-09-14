# Computational Resources Stage 3 Progress

Date: 2026-09-14
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S300`
- Latest completed resource: `CR000351`
- Latest completed aggregate batch: `SOB033` - **PASS (10/10)**
- Current batch: `SOB034` - **8/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000352`
- Exact next checkpoint: `Stage3-S301`

## Cumulative counts through S300 / RC09

- Resources: **348**
- Experiments: **361**
- Configurations: **651**
- Technical-evidence records: **3418**
- Reproducibility assessments: **348**
- Unresolved findings: **1622**
- Explicit conflicts: **158**
- Independently extractable resources remaining: **15**

## S300

`CR000351` preserves final Stage-2 identity as the canonical ImageNet portal and all three verified relationships (`PRL000271`, `PRL000274`, `PRL000279`) for Atlas papers 761, 763 and 765. Provider documentation establishes the full database hierarchy and the 1,000-class ILSVRC classification/localization subset with 1,281,167 training, 50,000 validation and 100,000 test images. Current access routes remain separated from historical paper provenance. ImageNet's explicit non-commercial research and educational terms are preserved as non-SPDX conditions. Paper-specific releases, archive snapshots, preprocessing and evaluation protocols remain unresolved. CR000351 is assessed at `R2`; no image archive, label file or synset list was downloaded or opened and no scientific workload was executed.

## Count-neutral authority readback correction

Post-S298 readback corrected S297/CR000348 to the final Stage-2 authority: `PRL000330` links the SDC3a Foregrounds resource to Atlas paper **853** with relationship `paper_dataset_mention`. Stage 2 also preserves SKAO's explicit statement that data-challenge usage is unrestricted while leaving the SPDX licence identifier unresolved. S297 counts, IDs, batch membership and R2 classification are unchanged.

## Aggregate batch QA

`SOB033` remains **PASS (10/10)**. `SOB034` is now **8/10** with `CR000344`, `CR000345`, `CR000346`, `CR000347`, `CR000348`, `CR000349`, `CR000350` and `CR000351`.

## Report-state synchronization

The lowercase Stage3-SO-D01 control reports and uppercase compatibility counterparts remain synchronized at S300, including the count-neutral S297 authority readback correction.

## Continuation

Continue with `Stage3-S301` at `CR000352`.
