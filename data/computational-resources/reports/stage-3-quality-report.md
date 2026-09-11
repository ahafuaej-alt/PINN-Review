# Computational Resources Stage 3 Quality Report

Date: 2026-09-11
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S201`
Status: **PASS**

## Checkpoint S201

- Resources: **1** (`CR000229`)
- Experiments: **0**
- Configurations: **0**
- Technical-evidence records: **8**
- Reproducibility assessments: **1**
- New unresolved findings: **4**
- New explicit conflicts: **0**
- Reproducibility: **CR000229 R2**

All required checkpoint validation gates pass. Final Stage-2 identity repair and pinned-source authority are preserved. Nangs remains a PINN/neural-PDE framework, while tutorials/examples remain documentation rather than synthetic experiments. Package metadata and installation claims remain source-scoped; unpinned PyTorch and incomplete transitive locking remain explicit reproducibility gaps. Static-only boundaries remain intact.

## Aggregate batch QA

`SOB021` remains **10/10 — PASS**. `SOB022` advances to **7/10**; aggregate batch QA is not yet triggered.

Stage3-RC02 through Stage3-RC05 remain authoritative and count-neutral for their accepted scopes.

Exact continuation: `CR000230 → Stage3-S202`.
