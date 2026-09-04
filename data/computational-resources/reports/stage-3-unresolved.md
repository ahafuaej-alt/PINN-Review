# Computational Resources Stage 3 — Unresolved Findings

**Status:** active controlled register  
**Current checkpoint:** `Stage3-S073`  
**Current batch:** `SOB008`  
**Current unresolved count:** **572**  
**Next unresolved ID:** `S3U-0573`

## Register continuity

Historical findings `S3U-0001` through `S3U-0566` remain unchanged. S073 adds `S3U-0567` through `S3U-0572` for `CR000083`.

## Stage3-S073 additions

| ID | Resource | Finding | Confidence | Consequence |
|---|---|---|---|---|
| S3U-0567 | CR000083 | `paper_specific_case_configuration_not_available` | high | Exact Atlas-591 CFD case reconstruction is not supported by this generic solver source snapshot. |
| S3U-0568 | CR000083 | `build_runtime_dependency_versions_not_pinned` | high | Exact compilation/runtime environment is under-specified; R4 is blocked. |
| S3U-0569 | CR000083 | `installation_instructions_external` | medium | Installation guidance is documented only by historical external links rather than a self-contained environment recipe. |
| S3U-0570 | CR000083 | `hardware_provenance_not_reported` | high | Runtime/performance reproduction remains under-specified. |
| S3U-0571 | CR000083 | `paper_specific_expected_results_not_available` | high | No canonical paper-specific solver result target is available in this repository for validation. |
| S3U-0572 | CR000083 | `paper_mesh_boundary_initial_data_not_available` | high | Paper-specific mesh, boundary/initial conditions and case dictionaries cannot be inferred from generic OpenFOAM source. |

## Current register state

- Current unresolved finding count: **572**.
- Next available unresolved ID: **`S3U-0573`**.
- Explicit `conflicting_evidence` finding count: **97**; S073 adds **0**.

CR000083 preserves final Stage-2 identity, GPL-3.0-or-later license, pinned SHA and verified `paper_software_mention` relationship to Atlas 591. Stage 3 keeps generic OpenFOAM solver capability distinct from paper-specific case configuration.

No hard-stop condition is present. `SOB008` is **8 / 10**; aggregate QA is not yet due. Exact next resource: `CR000084`.
