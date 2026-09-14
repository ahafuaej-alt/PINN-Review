# Computational Resources Stage 3 Progress

Date: 2026-09-14
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S303`
- Latest completed resource: `CR000354`
- Latest completed aggregate batch: `SOB034` - **PASS (10/10)**
- Current batch: `SOB035` - **1/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000355`
- Exact next checkpoint: `Stage3-S304`

## Cumulative counts through S303 / RC09

- Resources: **351**
- Experiments: **361**
- Configurations: **651**
- Technical-evidence records: **3439**
- Reproducibility assessments: **351**
- Unresolved findings: **1630**
- Explicit conflicts: **158**
- Independently extractable resources remaining: **12**

## S303

`CR000354` preserves the corrected PlotNeuralNet repository identity, Stage-2 pinned SHA `e96bc852189c2089dd500527a0a01a5a36e8977e` and verified `PRL000331` software relationship for Atlas paper 853. The repository documents LaTeX and Python/TikZ interfaces, platform-specific TeX dependencies, an executable shell workflow, MIT licensing and DOI citation metadata. PlotNeuralNet remains supporting visualization software, not a PINN implementation or dataset. The paper-specific revision, modifications and invocation remain unresolved. CR000354 is assessed at `R2`; no repository clone, Python, shell, LaTeX or figure-generation workflow was executed.

## Count-neutral authority readback correction

Post-S298 readback corrected S297/CR000348 to the final Stage-2 authority: `PRL000330` links the SDC3a Foregrounds resource to Atlas paper **853** with relationship `paper_dataset_mention`. Stage 2 also preserves SKAO's explicit statement that data-challenge usage is unrestricted while leaving the SPDX licence identifier unresolved. S297 counts, IDs, batch membership and R2 classification are unchanged.

## Aggregate batch QA

`SOB034` remains **PASS (10/10)**. `SOB035` is now **1/10** with `CR000354`.

## Report-state synchronization

The lowercase Stage3-SO-D01 control reports and uppercase compatibility counterparts remain synchronized at S303, including SOB034 aggregate closure and the count-neutral S297 authority readback correction.

## Continuation

Continue with `Stage3-S304` at `CR000355`.
