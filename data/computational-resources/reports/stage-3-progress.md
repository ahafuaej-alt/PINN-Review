# Computational Resources Stage 3 Progress

Date: 2026-09-11
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S196`
- Latest completed resource: `CR000220`
- Latest completed aggregate batch: `SOB021` — **PASS (10/10)**
- Current batch: `SOB022` — **0/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC05` — **PASS (count-neutral cumulative validation repair)**
- Exact next independently extractable resource: `CR000222`
- Exact next checkpoint: `Stage3-S197`

## Cumulative counts through S196 / RC05

- Resources: **220**
- Experiments: **339**
- Configurations: **609**
- Technical-evidence records: **2375**
- Reproducibility assessments: **220**
- Unresolved findings: **1321**
- Explicit conflicts: **145**
- Independently extractable resources remaining: **143**

## S196

`CR000220` preserves the Stage-2-authoritative `AI-in-Transportation-Lab/awesome-pinns` repository at pinned commit `346aad561e676983ef6d8c4118a1033a82cff7c5`. It remains a curated PINN/PIML bibliography and project index, with no paper-specific experiment or configuration promotion. Static reproducibility is `R1`.

The same pinned snapshot contains a consequential license discrepancy: the root LICENSE is CC-BY-4.0 while the README badge states MIT. The conflict is preserved explicitly rather than normalized.

`SOB021` is complete at 10/10 and aggregate QA passes. Its membership is `CR000210–CR000216`, `CR000218`, `CR000219`, and `CR000220`; `CR000217` is excluded because Stage3-SO-D01 marks it pilot-complete.

`CR000221` has no final authoritative Stage-2 resource record in the accepted registry sequence. The exact next independently extractable resource is therefore `CR000222`.

## Continuation

Continue with `Stage3-S197` at `CR000222`.