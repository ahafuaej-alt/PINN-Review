# Computational Resources Stage 3 — Progress

**Status:** active — controlled scale-out  
**Methodology:** Stage3-D01 accepted without modification  
**Current checkpoint:** `Stage3-S073`  
**Current scale-out batch:** `SOB008`  
**Last completed resource:** `CR000083`  
**Next resource:** `CR000084`  
**Next checkpoint:** `Stage3-S074`  
**Checkpoint QA:** PASS  
**Latest aggregate batch QA:** `SOB007` PASS  
**Aggregate QA due:** when `SOB008` reaches 10/10 independently extractable resources

## Stage-3 cumulative state

- Completed Stage-3 resources: **88**
- Completed experiments: **152**
- Completed configurations: **314**
- Technical evidence records: **1144**
- Reproducibility assessments: **88**
- Unresolved findings: **572**
- Explicit conflicts: **97**
- Independently extractable resources remaining: **275**

## Current batch

`SOB008`: **8 / 10** independently extractable resources completed.

Completed members: `CR000076`, `CR000077`, `CR000078`, `CR000079`, `CR000080`, `CR000081`, `CR000082`, `CR000083`.

Aggregate batch QA is **not yet due**.

## Stage3-S073 checkpoint summary

Processed exactly one resource because `CR000083` is the full OpenFOAM 2.1.x CFD solver distribution and therefore meets the accepted single-resource large-framework/library complexity rule.

### CR000083 — OpenFOAM/OpenFOAM-2.1.x

- Final Stage-2 classification: `supporting_software_or_library`
- Authoritative pinned SHA: `ccbaf836072aeff5696c682572b442b7588e3d1f`
- License: `GPL-3.0-or-later`
- Verified relationship: `PRL000184 → Atlas 591`, strictly `paper_software_mention`
- Stage-3 profile: `simulator_solver`
- Experiments: **1**; configurations: **1**; evidence: **10**; reproducibility: **R1**
- New unresolved findings: **6**; new explicit conflicts: **0**

The bounded extraction centers on the exact `buoyantPimpleFoam` path identified by the Stage-2 paper evidence. Static source establishes a transient buoyant compressible heat-transfer solver with runtime-selectable RAS/LES turbulence and PIMPLE pressure-velocity coupling. The solver's momentum and enthalpy equations and executable build target are represented without promoting generic OpenFOAM capabilities to paper-specific settings.

R1 is retained because the source/version/license/build target are inspectable, but the generic solver repository does not provide a self-contained Atlas-591 case with mesh, case dictionaries, boundary/initial conditions, exact run controls, pinned system/build dependencies, hardware provenance, or canonical expected numerical results.

## Scope protection

S073 modifies only Stage-3 technical/evidence/report paths. Stage 1, Stage 2, public Atlas/site files, `05-curated/`, methodology and schemas remain unchanged. No scientific workload was executed.

## Exact continuation

Resume at `CR000084` for `Stage3-S074`.
