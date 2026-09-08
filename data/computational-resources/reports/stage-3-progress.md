# Computational Resources Stage 3 Progress

Date: 2026-09-08
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S128`
- Latest completed resource: `CR000144`
- Latest completed aggregate batch: `SOB013` — **PASS (10/10)**
- Current batch: `SOB014` — **7/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000145`
- Exact next checkpoint: `Stage3-S129`

## Cumulative counts through S128

- Resources: **147**
- Experiments: **235**
- Configurations: **434**
- Technical-evidence records: **1670**
- Reproducibility assessments: **147**
- Unresolved findings: **937**
- Explicit conflicts: **115**
- Independently extractable resources remaining: **216**

## S128

CR000144 preserves the Stage-2 Zenodo DOI archive identity, CC-BY-4.0 licensing and verified `PRL000302 → Atlas 778` supplementary-code relationship. The approximately 650 MB code/data/results archive is represented as a PINN implementation delivered as a DOI archive; archive internals were not downloaded or unpacked under the accepted bounded static archive policy.

The matching IEEE paper documents spectral-bias mitigation for the frequency-domain acoustic wave equation using multiscale Fourier feature mapping, frequency transferring, revised neuron splitting and denser sampling. These remain paper-scoped because archive-internal implementation mapping is not verified. Static reproducibility is **R1**.

A new explicit metadata conflict is retained: the frozen Stage-2 relationship record gives DOI `10.1109/TGRS.2024.3436985`, while the IEEE publisher record for the matching paper gives `10.1109/TGRS.2024.3440471`. Stage 2 is not rewritten; publisher DOI is used only for paper-scoped Stage-3 evidence.

No scientific workload was executed.

## Reconciled baseline

The count-neutral [Stage3-RC02 reconciliation](stage-3-cumulative-reconciliation-2026-09-08.md) remains authoritative for repaired pre-S123 metadata and reproducibility assessments. Accepted methodology and schemas are unchanged.

## Continuation

Continue with `Stage3-S129` at `CR000145` after published-head and checkpoint-QA readback.
