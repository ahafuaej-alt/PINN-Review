# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S288`
- Latest completed resource: `CR000339`
- Latest completed aggregate batch: `SOB032` - **PASS (10/10)**
- Current batch: `SOB033` - **6/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000340`
- Exact next checkpoint: `Stage3-S289`

## Cumulative counts through S288 / RC09

- Resources: **336**
- Experiments: **358**
- Configurations: **637**
- Technical-evidence records: **3303**
- Reproducibility assessments: **336**
- Unresolved findings: **1586**
- Explicit conflicts: **158**
- Independently extractable resources remaining: **27**

## S288

`CR000339` preserves the official ImageNet project and corrected `PRL000251` secondary-review relationship for Atlas paper 721. The paper uses ImageNet only as an analogy for a desired PINN benchmark library, not as experimental data. Current portal evidence records its WordNet hierarchy, 14,197,122 indexed images, 21,841 synsets, controlled data access, non-commercial research/education terms and formal citation. The generic portal does not pin one release or complete per-image rights lineage. CR000339 is assessed at `R1`; no image or archive was downloaded.

## Aggregate batch QA

`SOB032` remains **PASS (10/10)**. `SOB033` is now **6/10** with `CR000334–CR000339`.

## Continuation

Continue with `Stage3-S289` at `CR000340`.
