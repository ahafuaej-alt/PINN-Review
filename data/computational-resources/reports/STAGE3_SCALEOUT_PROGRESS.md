# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S285`
- Latest completed resource: `CR000336`
- Latest completed aggregate batch: `SOB032` - **PASS (10/10)**
- Current batch: `SOB033` - **3/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000337`
- Exact next checkpoint: `Stage3-S286`

## Cumulative counts through S285 / RC09

- Resources: **333**
- Experiments: **358**
- Configurations: **637**
- Technical-evidence records: **3271**
- Reproducibility assessments: **333**
- Unresolved findings: **1576**
- Explicit conflicts: **158**
- Independently extractable resources remaining: **30**

## S285

`CR000336` preserves the North Temperate Lakes LTER data portal and verified `PRL000245` relationship for Atlas paper 716. Current provider documentation establishes an EDI-backed catalogue of more than 300 packages, broad dataset categories, package-level access and formal citation guidance. The portal states CC-BY use with attribution but does not specify a version, so no SPDX version is inferred. Exact paper-used lake, EDI package, fields, time range, package version and preprocessing remain unresolved. The resource is assessed at `R1`; no payload was opened.

## Aggregate batch QA

`SOB032` remains **PASS (10/10)**. `SOB033` is now **3/10** with `CR000334–CR000336`.

## Continuation

Continue with `Stage3-S286` at `CR000337`.
