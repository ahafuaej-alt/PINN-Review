# Computational Resources Stage 3 Progress

Date: 2026-09-14
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S305`
- Latest completed resource: `CR000356`
- Latest completed aggregate batch: `SOB034` - **PASS (10/10)**
- Current batch: `SOB035` - **3/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000357`
- Exact next checkpoint: `Stage3-S306`

## Cumulative counts through S305 / RC09

- Resources: **353**
- Experiments: **361**
- Configurations: **651**
- Technical-evidence records: **3456**
- Reproducibility assessments: **353**
- Unresolved findings: **1634**
- Explicit conflicts: **158**
- Independently extractable resources remaining: **10**

## S305

`CR000356` preserves final Stage-2 identity as Christopher Olah's educational tutorial *Understanding LSTM Networks*, dated 27 August 2015. The canonical post documents RNN sequence context, the long-term-dependency problem, LSTM cell state and gates, the forget/input/output workflow, and selected variants. Stage 1 assigned no Atlas reference ID or PRL assertion, so no paper relationship is created. Public access is preserved separately from the unresolved reusable-content licence. CR000356 is assessed at `R1`; no experiment/configuration identity was manufactured and no code or scientific workload was executed.

## Count-neutral authority readback correction

Post-S298 readback corrected S297/CR000348 to the final Stage-2 authority: `PRL000330` links the SDC3a Foregrounds resource to Atlas paper **853** with relationship `paper_dataset_mention`. Stage 2 also preserves SKAO's explicit statement that data-challenge usage is unrestricted while leaving the SPDX licence identifier unresolved. S297 counts, IDs, batch membership and R2 classification are unchanged.

## Aggregate batch QA

`SOB034` remains **PASS (10/10)**. `SOB035` is now **3/10** with `CR000354`, `CR000355` and `CR000356`.

## Report-state synchronization

The lowercase Stage3-SO-D01 control reports and uppercase compatibility counterparts remain synchronized at S305, including SOB034 aggregate closure and the count-neutral S297 authority readback correction.

## Continuation

Continue with `Stage3-S306` at `CR000357`.
