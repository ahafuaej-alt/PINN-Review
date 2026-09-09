# Computational Resources Stage 3 Progress

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S164`
- Latest completed resource: `CR000183`
- Latest completed aggregate batch: `SOB017` — **PASS (10/10)**
- Current batch: `SOB018` — **5/10**
- Checkpoint QA: **PASS**
- Exact next independently extractable resource: `CR000185`
- Exact next checkpoint: `Stage3-S165`

## Cumulative counts through S164

- Resources: **185**
- Experiments: **270**
- Configurations: **479**
- Technical-evidence records: **2035**
- Reproducibility assessments: **185**
- Unresolved findings: **1137**
- Explicit conflicts: **124**
- Independently extractable resources remaining: **178**

## S164

CR000183 preserves the Stage-2-authoritative `frank1010111/pywaterflood` repository at pinned SHA `01fe02789b5f3c1e9b3d469941265a2dae083c27`, its BSD-2-Clause license, JOSS citation and no-Atlas-relationship boundary. It is physics-inspired capacitance-resistance modeling software, not a PINN implementation.

Bounded static extraction maps one documented injector-producer connectivity fit and forecast, the Python/Rust implementation, exact CRM controls, locked Python and Rust environments, bundled CSV fixtures and prediction tests. This supports **R3**; the unexecuted native-build boundary blocks R4. SOB018 advances to 5/10.

No scientific workload was executed.

## Reconciled baseline

Stage3-RC02 remains authoritative for repaired pre-S123 metadata/reproducibility records. Stage3-RC03 remains authoritative for repaired S129/S132 enum labels. Accepted methodology and schemas are unchanged.

## Continuation

CR000184 was completed in the Stage-3 pilot and is skipped without reprocessing. Continue with `Stage3-S165` at `CR000185` after published-head and checkpoint-QA readback.
