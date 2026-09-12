# Computational Resources Stage 3 Quality Report

Date: 2026-09-12
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S228`
Latest reconciliation: `Stage3-RC07`
Status: **PASS**

## Checkpoint S228

- Resources: **2** (`CR000265`, `CR000266`)
- Experiments: **0**
- Configurations: **0**
- Technical-evidence records: **12**
- Reproducibility assessments: **2**
- New unresolved findings: **4**
- New explicit conflicts: **0**
- Reproducibility: **CR000265 R2; CR000266 R2**

All required checkpoint validation gates pass. `PRL000011` and `PRL000012` remain authoritative. Provider-level access, interface and licensing facts are retained without promoting provider-wide capabilities into paper-specific dataset claims. Exact ERA5/Sentinel-1 product identifiers, study requests and file payloads remain unresolved rather than inferred.

The pre-S228 scientific tree was verified byte-identical to S227 after removal of a transient empty root placeholder; the two count-neutral maintenance commits changed no Stage-3 scientific file. Resource-scoped checkpoint files are used because the connector rejected combined multi-resource blobs before publication; schemas and scientific identities are unchanged.

## Aggregate batch QA

`SOB025` remains **10/10 — PASS**. `SOB026` is **4/10**; aggregate QA is not yet due.

Stage3-RC02 through Stage3-RC07 remain authoritative and count-neutral for their accepted scopes. Cumulative schemas, identifiers, hierarchy, evidence references, inference labeling and R5 exclusion pass.

Exact continuation: `CR000267 → Stage3-S229`.
