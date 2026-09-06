# Computational Resources Stage 3 Progress

Date: 2026-09-07  
Branch: `data/computational-resources-stage3`  
Status: active controlled scale-out  
Methodology: `Stage3-D01` accepted without modification

## Current authoritative state

- Latest completed checkpoint: `Stage3-S101`.
- Current canonical batch: `SOB011`.
- Current batch status: **7/10 independently extractable members complete**.
- Latest completed resources: `CR000113`, `CR000114`.
- Checkpoint QA: **PASS**.
- Latest completed aggregate batch QA: `SOB010` — **PASS**.
- Exact next independently extractable resource: `CR000115`.
- Next checkpoint: `Stage3-S102`.
- Pilot-complete resources remain excluded and must not be reprocessed.

## Cumulative Stage-3 counts

- Technical resource records: **117**
- Experiments: **203**
- Configurations: **397**
- Technical-evidence records: **1394**
- Static reproducibility assessments: **117**
- Unresolved findings: **745**
- Explicit conflicts: **101**
- Independently extractable resources remaining: **246**

## Latest checkpoint

`Stage3-S101` completed `CR000113` and `CR000114`.

`CR000113` preserves final Stage-2 commit `a571839e55154f8bd7f5626487ebe43ed8100bca` and verified official `PRL000220 → Atlas 686`. The pinned TSA-PINN repository exposes one cylinder-wake Navier-Stokes comparison family with a standard PINN baseline and three TSA-PINN initial-frequency variants (`0.1`, `1.0`, `3.0`). Four explicit YAML configurations, bundled cylinder-wake data, source modules, requirements, MIT license and provider output artifacts are recorded. R1 is required because explicit installation documentation is absent and dependency specifications are lower bounds rather than exact pins.

`CR000114` preserves the final Stage-2 unavailable-repository state and `PRL000223 → Atlas 692` as `paper_resource_mention / not_verified`. No Stage-3 PINN implementation profile, experiment or configuration is manufactured without an inspectable source snapshot. It remains R0.

S101 records two resources, one experiment, four configurations, fifteen technical-evidence records, two reproducibility assessments and ten new unresolved findings, with no new explicit conflict.

No scientific software, model, dataset, notebook, test, environment, dependency or benchmark workload was executed.

## Continuation

Resume only from `CR000115` for `Stage3-S102` as the eighth independently extractable member of `SOB011`.
