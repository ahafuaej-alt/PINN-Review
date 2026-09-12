# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S230`
- Latest completed resource: `CR000270`
- Latest completed aggregate batch: `SOB025` — **PASS (10/10)**
- Current batch: `SOB026` — **7/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC07` — **PASS**
- Exact next independently extractable resource: `CR000271`
- Exact next checkpoint: `Stage3-S231`

## Cumulative counts through S230 / RC07

- Resources: **267**
- Experiments: **343**
- Configurations: **622**
- Technical-evidence records: **2696**
- Reproducibility assessments: **267**
- Unresolved findings: **1423**
- Explicit conflicts: **146**
- Independently extractable resources remaining: **96**

## S230

`CR000268` was not reprocessed: accepted `Stage3-SO-D01` and the accepted Stage-3 pilot record already classify it as pilot-complete. The stale S229 continuation pointer is therefore corrected using the same no-reprocessing control rule established by `Stage3-S048`.

`CR000269` preserves the Met Office EN4 identity and `PRL000009`. EN.4.2.2, provider format/access/licensing metadata, and the paper-specific SMAP collocation path are documented. Exact monthly profile files and the bias-adjustment ensemble member remain unresolved. Reproducibility is `R3`.

`CR000270` preserves the XJTU-SY dataset identity and `PRL000015`. The provider documents 15 complete run-to-failure bearings, three operating conditions, dual-channel 25.6 kHz acquisition, CSV structure and download mirrors; the paper documents its benchmark/preprocessing use. Explicit reusable dataset licensing and version identity remain unresolved. Reproducibility is `R2`.

## Aggregate batch QA

`SOB025` remains **10/10 — PASS**. `SOB026` is now **7/10**; aggregate QA is not yet due. The pilot-complete CR000268 skip does not consume a new SOB026 slot.

## Continuation

Stage3-RC02 through Stage3-RC07 remain authoritative and count-neutral for their accepted scopes. The count-neutral pre-S228 placeholder correction remains documented in S228 QA and changed no scientific file.

Continue with `Stage3-S231` at `CR000271`.
