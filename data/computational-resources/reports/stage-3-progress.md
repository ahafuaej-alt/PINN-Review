# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S274`
- Latest completed resource: `CR000323`
- Latest completed aggregate batch: `SOB031` - **PASS (10/10)**
- Current batch: `SOB032` - **0/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000324`
- Exact next checkpoint: `Stage3-S275`

## Cumulative counts through S274 / RC09

- Resources: **320**
- Experiments: **358**
- Configurations: **637**
- Technical-evidence records: **3135**
- Reproducibility assessments: **320**
- Unresolved findings: **1536**
- Explicit conflicts: **155**
- Independently extractable resources remaining: **43**

## S274

`CR000323` preserves the exact Figshare `Defect design` collection identity and verified `PRL000211` relationship for Atlas paper 657. The primary paper explicitly states that its structure graphs and defect structures are available at the collection and documents the upstream C2DB screening, defect generation, DFT protocol and graph-generation context. The same paper separately places trained graph-network models and an example Jupyter notebook in a GitHub repository; that software is not conflated with the Figshare dataset resource. The Figshare collection landing remains access-limited to the verifier, so exact collection item identifiers, versions, filenames, formats, checksums and collection/item licence remain unresolved. No collection payload or item was opened and no scientific workflow was executed. The resource is assessed at `R1`.

## Aggregate batch QA

`SOB031` is **PASS (10/10)** for `CR000314` through `CR000323`. Aggregate reconciliation includes the accepted S273 alternate technical-evidence filename `scaleout-checkpoint-273-evidence.jsonl`; no S273 evidence is omitted by filename convention. `SOB032` is now **0/10**.

## Continuation

Continue with `Stage3-S275` at `CR000324`.
