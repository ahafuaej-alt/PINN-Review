# Computational Resources Stage 3 Progress

Date: 2026-09-14
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S306`
- Latest completed resource: `CR000357`
- Latest completed aggregate batch: `SOB034` - **PASS (10/10)**
- Current batch: `SOB035` - **4/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000358`
- Exact next checkpoint: `Stage3-S307`

## Cumulative counts through S306 / RC09

- Resources: **354**
- Experiments: **361**
- Configurations: **651**
- Technical-evidence records: **3466**
- Reproducibility assessments: **354**
- Unresolved findings: **1635**
- Explicit conflicts: **158**
- Independently extractable resources remaining: **9**

## S306

`CR000357` preserves final Stage-2 identity as Christopher Olah's educational tutorial *Understanding Convolutions*, dated 13 July 2014. The canonical post develops discrete and higher-dimensional convolution, its visual sliding interpretation, image-processing kernels and the shared local-weight structure of convolutional neural networks. Stage 1 assigned no Atlas reference ID or PRL assertion, so no paper relationship is created. Public access is preserved separately from the unresolved reusable-content licence. CR000357 is assessed at `R1`; no experiment/configuration identity was manufactured and no code or scientific workload was executed.

## Count-neutral authority readback correction

Post-S298 readback corrected S297/CR000348 to the final Stage-2 authority: `PRL000330` links the SDC3a Foregrounds resource to Atlas paper **853** with relationship `paper_dataset_mention`. Stage 2 also preserves SKAO's explicit statement that data-challenge usage is unrestricted while leaving the SPDX licence identifier unresolved. S297 counts, IDs, batch membership and R2 classification are unchanged.

## Aggregate batch QA

`SOB034` remains **PASS (10/10)**. `SOB035` is now **4/10** with `CR000354`, `CR000355`, `CR000356` and `CR000357`.

## Report-state synchronization

The lowercase Stage3-SO-D01 control reports and uppercase compatibility counterparts remain synchronized at S306, including SOB034 aggregate closure and the count-neutral S297 authority readback correction.

## Continuation

Continue with `Stage3-S307` at `CR000358`.
