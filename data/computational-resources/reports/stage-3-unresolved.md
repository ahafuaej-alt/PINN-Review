# Computational Resources Stage 3 — Unresolved Findings

**Status:** active controlled register  
**Current checkpoint:** `Stage3-S075`  
**Current batch:** `SOB008` — COMPLETE  
**Current unresolved count:** **586**  
**Next unresolved ID:** `S3U-0587`

## Register continuity

Historical findings `S3U-0001` through `S3U-0578` remain unchanged. S075 adds `S3U-0579` through `S3U-0586` for `CR000085`.

## Stage3-S075 additions

| ID | Resource | Finding | Confidence | Consequence |
|---|---|---|---|---|
| S3U-0579 | CR000085 | `dependency_environment_manifest_not_available` | high | A portable runtime cannot be reconstructed from repository metadata alone. |
| S3U-0580 | CR000085 | `package_versions_not_pinned` | high | TensorFlow/scientific-stack compatibility remains unconstrained. |
| S3U-0581 | CR000085 | `repository_license_not_available` | medium | Reuse/legal terms are not established by the pinned snapshot. |
| S3U-0582 | CR000085 | `installation_instructions_not_available` | medium | Environment setup requires external reconstruction. |
| S3U-0583 | CR000085 | `random_seed_provenance_not_available` | medium | Stochastic data generation/training cannot be reproduced exactly. |
| S3U-0584 | CR000085 | `canonical_pretrained_checkpoints_not_available` | medium | Model-state reproduction requires retraining. |
| S3U-0585 | CR000085 | `hardware_trace_source_scoped_to_archived_notebook_output` | low | Observed NVIDIA T400 output does not establish hardware requirements for all workflows. |
| S3U-0586 | CR000085 | `expected_results_only_partially_archived` | medium | Notebook outputs provide partial targets but no canonical cross-workflow result manifest. |

## Current register state

- Current unresolved finding count: **586**.
- Next available unresolved ID: **`S3U-0587`**.
- Explicit `conflicting_evidence` finding count: **97**; S075 adds **0**.

CR000085 preserves final Stage-2 identity, pinned SHA and verified official relationship to Atlas 597. The repository supports a bounded static extraction of its principal operator-learning workflows, while environment/version/install/seed/checkpoint gaps remain open.

No hard-stop condition is present. `SOB008` is **10 / 10** and aggregate QA is **PASS**. Exact next resource: `CR000086`.
