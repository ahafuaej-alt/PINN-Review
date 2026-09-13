# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S278`
- Latest completed resource: `CR000327`
- Latest completed aggregate batch: `SOB031` - **PASS (10/10)**
- Current batch: `SOB032` - **4/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000328`
- Exact next checkpoint: `Stage3-S279`

## Cumulative counts through S278 / RC09

- Resources: **324**
- Experiments: **358**
- Configurations: **637**
- Technical-evidence records: **3182**
- Reproducibility assessments: **324**
- Unresolved findings: **1546**
- Explicit conflicts: **156**
- Independently extractable resources remaining: **39**

## S278

`CR000327` preserves the Stage-2 correction that DOI `10.1016/j.ijnonlinmec.2024.104988` is Atlas paper 692 itself, not a dataset. Consequently, `PRL000225` remains not verified and the Stage-1 paper-dataset assertion is recorded as explicit conflicting evidence. The actual JHTDB data remain under `CR000307/PRL000224`; the separate DG-PINN repository is not conflated. The article licence is not transferred to data or software. No payload was opened and no scientific workflow was executed. The resource is assessed at `R0`.

## Aggregate batch QA

`SOB031` remains **PASS (10/10)**. `SOB032` is now **4/10** with `CR000324–CR000327`.

## Continuation

Continue with `Stage3-S279` at `CR000328`.
