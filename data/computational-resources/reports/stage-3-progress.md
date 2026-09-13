# Computational Resources Stage 3 Progress

Date: 2026-09-13
Branch: `data/computational-resources-stage3`

## Current authoritative state

- Latest completed checkpoint: `Stage3-S270`
- Latest completed resource: `CR000319`
- Latest completed aggregate batch: `SOB030` - **PASS (10/10)**
- Current batch: `SOB031` - **6/10**
- Checkpoint QA: **PASS**
- Latest reconciliation: `Stage3-RC09` - **PASS (count-neutral reproducibility-schema repair)**
- Exact next independently extractable resource: `CR000320`
- Exact next checkpoint: `Stage3-S271`

## Cumulative counts through S270 / RC09

- Resources: **316**
- Experiments: **358**
- Configurations: **637**
- Technical-evidence records: **3088**
- Reproducibility assessments: **316**
- Unresolved findings: **1524**
- Explicit conflicts: **155**
- Independently extractable resources remaining: **47**

## S270

`CR000319` preserves the exact Zenodo DOI `10.5281/zenodo.5206676` and verified `PRL000191` relationship for Atlas paper 603. The DOI archive remains authoritative; a paper-linked GitHub snapshot at commit `469cfc23fd34ff4ed8673281ec213a6d0f35920b` from 15 August 2021 is used only as supporting static evidence and is not asserted to be byte-equivalent to the Zenodo ZIP. The snapshot exposes five numerical-study families—antiderivative, diffusion-reaction, advection, Burgers and Eikonal—and nine materially distinct notebook configurations, including data-driven baselines, physics-informed variants and an antiderivative Fourier-feature variant. The notebooks implement physics-informed DeepONets with automatic differentiation, problem-specific residual losses, explicit architecture/training settings, data generators and selected bundled trained-parameter/data artifacts. The historical snapshot has no dependency manifest with version pins or installation procedure, and no explicit licence was independently verified. No Zenodo ZIP, binary data/checkpoint or notebook was opened/executed. The resource is assessed at `R1`.

## Aggregate batch QA

`SOB030` remains **PASS (10/10)**. `SOB031` is now **6/10**.

## Continuation

Continue with `Stage3-S271` at `CR000320`.
