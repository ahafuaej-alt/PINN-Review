# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S257`
- Latest completed resource: `CR000306`
- Latest completed aggregate batch: `SOB029` — **PASS (10/10)**
- Current batch: `SOB030` — **3/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC08` — **PASS (count-neutral report-state continuity repair)**
- Exact next independently extractable resource: `CR000307`
- Exact next checkpoint: `Stage3-S258`

## Cumulative counts through S257 / RC08

- Resources: **303**
- Experiments: **349**
- Configurations: **628**
- Technical-evidence records: **2940**
- Reproducibility assessments: **303**
- Unresolved findings: **1477**
- Explicit conflicts: **150**
- Independently extractable resources remaining: **60**

## S257

`CR000306` preserves the exact historical Shapeset-3×2 generator/online-data-source identity and verified `PRL000133` relationship for Atlas paper 474. The primary paper directly gives the Montreal generator URL and documents an online synthetic-image dataset from which arbitrarily many examples can be sampled: images contain one or two objects drawn from triangle, parallelogram and ellipse categories with randomized geometry, scaling, rotation, translation and grey-scale; the second object may overlap the first by at most 50%, yielding nine unordered shape-presence classes. The paper uses 32×32 examples although Figure 1 displays 64×64 images. The historical generator page is currently unavailable, and no authoritative maintained mirror/source snapshot was identified in the bounded Stage-3 search. Licence, dependency environment, source version/commit and implementation-level sampling details therefore remain unavailable. No generator code or generated image was downloaded, opened or executed. The resource is assessed at `R0`.

## Aggregate batch QA

`SOB029` remains **PASS (10/10)**. `SOB030` is now **3/10**.

## Continuation

Continue with `Stage3-S258` at `CR000307`.
