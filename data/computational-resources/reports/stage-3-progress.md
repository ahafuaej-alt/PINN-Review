# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S248`
- Latest completed resource: `CR000295`
- Latest completed aggregate batch: `SOB028` — **PASS (10/10)**
- Current batch: `SOB029` — **2/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC08` — **PASS (count-neutral report-state continuity repair)**
- Exact next independently extractable resource: `CR000296`
- Exact next checkpoint: `Stage3-S249`

## Cumulative counts through S248 / RC08

- Resources: **292**
- Experiments: **343**
- Configurations: **622**
- Technical-evidence records: **2854**
- Reproducibility assessments: **292**
- Unresolved findings: **1452**
- Explicit conflicts: **148**
- Independently extractable resources remaining: **71**

## S248

`CR000295` preserves the Stage-2 dataset-repository identity, `PRL000061`, Atlas paper 305, and pinned commit `1d4fe8d37a238a9329da2e43e13f9bdecec14d32`. The pinned README documents two-dimensional instantaneous velocity contours in the X–Y plane for open-channel flow at turbulent Re = 11200 and states that 50 instants were used for convolutional-network training. The same pinned Git tree contains 51 PNG files, `f.0000.png` through `f.0050.png`. The 50-versus-51 discrepancy is retained as explicit conflicting evidence and remains unresolved; no PNG payload was downloaded or opened. The resource is assessed at `R2`.

## Aggregate batch QA

`SOB028` remains **PASS (10/10)**. `SOB029` is now **2/10**.

## Continuation

Continue with `Stage3-S249` at `CR000296`.
