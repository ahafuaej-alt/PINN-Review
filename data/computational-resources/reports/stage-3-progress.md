# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S232`
- Latest completed resource: `CR000273`
- Latest completed aggregate batch: `SOB026` — **PASS (10/10)**
- Current batch: `SOB027` — **0/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC07` — **PASS**
- Exact next independently extractable resource: `CR000274`
- Exact next checkpoint: `Stage3-S233`

## Cumulative counts through S232 / RC07

- Resources: **270**
- Experiments: **343**
- Configurations: **622**
- Technical-evidence records: **2720**
- Reproducibility assessments: **270**
- Unresolved findings: **1429**
- Explicit conflicts: **147**
- Independently extractable resources remaining: **93**

## S232

`CR000272` preserves `VA000053`, the transferred MagNet Challenge 2023 repository identity, the exact Stage-2 pin `740fe6bbdb1cf7dffc5a4398f760d08fc26cd10e`, and `PRL000022` to Atlas reference 118. The pinned repository documents challenge evaluation material, final-evaluation metrics, submitted models/reports, and the post-challenge reorganization into successor MagNet resources. Those successors are not promoted as exact historical-payload replacements. Reproducibility is `R2`.

`CR000273` preserves the pinned `Tariku88/AM-dataset` snapshot `cb060543ddea2f9b49e306399d008da6d983be99` and `PRL000023` to Atlas reference 119. The pinned tree verifies the bundled Digimat-AM spreadsheet and two warpage archives; the README documents the BeltClip STL → Cura/G-code → Digimat-AM → virtual-printing/warpage workflow and paper use. The repository does not establish a reusable licence and states that corresponding Digimat-AM models are too large to upload and available by request. Reproducibility is `R2`.

## Aggregate batch QA

`SOB026` is **10/10 — PASS**. Membership is `CR000263`, `CR000264`, `CR000265`, `CR000266`, `CR000267`, `CR000269`, `CR000270`, `CR000271`, `CR000272`, `CR000273`. `CR000268` is excluded with authority because it is accepted pilot-complete under `Stage3-SO-D01`; it is not reprocessed or counted as a new SOB026 extraction.

Aggregate deltas: **10 resources, 0 experiments, 0 configurations, 72 technical-evidence records, 10 reproducibility assessments, 18 unresolved findings, 1 explicit conflict**. All aggregate QA checks pass.

## Continuation

Stage3-RC02 through Stage3-RC07 remain authoritative and count-neutral for their accepted scopes. Two pre-S232 maintenance commits introduced and removed a temporary root file; restoration commit `9028b16fae62e2a8dcd9ea73720be35330f39ce1` has tree SHA `87585ff1e3a465a38671d7a958ff40da5ed77ac2`, byte-identical to Stage3-S231, and changed no scientific or protected file.

Continue with `Stage3-S233` at `CR000274`.
