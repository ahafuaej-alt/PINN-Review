# Computational Resources Stage 3 Quality Report

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S263`
Latest reconciliation: `Stage3-RC09`
Status: **PASS**

## Reconciliation RC09

- Scope: reproducibility records from `Stage3-S234` through `Stage3-S263`
- Affected files: **30**
- Affected records: **38** (`CR000275–CR000312`)
- R-level changes: **0**
- Evidence-ID changes: **0**
- Count changes: **0**
- Methodology/schema changes: **0**

All affected records are normalized to the accepted reproducibility structure with `components`, `reproducibility_gaps`, `assessment_evidence_ids`, and `assessment_status`. Published R-levels and evidence links are preserved. Existing scientific gaps remain explicit, R5 remains excluded, and no scientific workload was executed. Historical S234–S263 checkpoint QA records remain historical publication records; RC09 supersedes only their affected reproducibility-schema PASS assertions.

## Checkpoint S263

- Resources: **1** (`CR000312`)
- Experiments: **0**
- Configurations: **0**
- Technical-evidence records: **14**
- Reproducibility assessments: **1**
- New unresolved findings: **5**
- New explicit conflicts: **1**
- Reproducibility: **CR000312 R2**

The exact historical ATL03 Version-5 identity remains preserved. The NSIDC geolocation advisory is checked against the paper's reported study dates and does not overlap them. Provider retirement timing and the paper's later stated URL-access date remain source-scoped conflicting evidence. Exact granule identifiers, current access to the retired V5 payload, item-level reuse terms and the derived bathymetric-label payload remain bounded gaps.

## Aggregate batch QA

`SOB029` remains **10/10 — PASS**. `SOB030` is **9/10**.

Stage3-RC02 through Stage3-RC09 remain authoritative and count-neutral for their accepted scopes.

Exact continuation: `CR000313 → Stage3-S264`.
