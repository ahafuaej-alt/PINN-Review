# Computational Resources Stage 3 — Quality Report

Verification/extraction date: 2026-08-31  
Checkpoint: Stage3-P05

## Structural QA

Status: **PASS**

- 1 resource record validated against `stage3-resource-technical.schema.json`.
- 1 experiment record validated against `stage3-experiment.schema.json`.
- 1 configuration record validated against `stage3-configuration.schema.json`.
- 12 evidence records validated against `stage3-technical-evidence.schema.json`.
- 1 static reproducibility assessment validated against `stage3-reproducibility.schema.json`.
- All P05 identifiers are unique.
- Every fact-level evidence reference resolves.
- `CR000217-E001` resolves from the resource and `CR000217-E001-C001` resolves from both the resource and experiment.
- Inferred evidence uses `inferred` / `inferred_from_evidence`; direct evidence does not.
- Reproducibility levels remain restricted to R0–R4; no R5 value is present.
- Stage-2 pinned commit `819edcd2f496e1719d1f7db751d06b9fd9a1f3cc` is preserved.
- No Stage 1 or Stage 2 path is modified.
- No public Atlas/site or `05-curated/` path is modified.
- No scientific workload was executed.
- Public-text provenance scan passed.

## Scientific extraction QA

Status: **PASS**

### CR000217

The resource is correctly represented as `simulator_solver`, not as a PINN implementation. The pinned JAX-Fluids snapshot documents a fully differentiable JAX finite-volume CFD solver for compressible single- and two-phase flows, with explicit numerical-method, installation, accelerator, and citation metadata.

No Atlas-paper relationship is created. The repository's two framework-paper DOIs are retained as framework citation metadata only, consistent with the Stage-2 conclusion that CR000217 has no Atlas relationship.

The repository contains a broad 1D/2D/3D example corpus. P05 deliberately avoids converting every example into an experiment. Instead, one representative exact solver workflow is materialized: `CR000217-E001`, the 1D Sod shock tube, with paired configuration `CR000217-E001-C001` backed by `sod.json` and `numerical_setup.json`.

The representative configuration is technically well specified: 200 spatial cells, ideal-gas discontinuity data, RK3/CFL 0.5, Godunov/HLLC/Einfeldt flux treatment, WENO5-Z characteristic-primitive reconstruction, and double precision. Its `run.py` statically identifies the manager sequence, simulation call, output quantities, animation, and figure generation.

The workflow reaches **R3 static reproducibility**. Source, license, installation guidance, environment declaration, entrypoint, and exact case/numerical inputs are present. Runtime dependencies are not exact-pinned, and no quantified static result target or regression tolerance was established for the selected Sod workflow; therefore **R4 is correctly withheld**. No external analytical or textbook Sod result is substituted for missing repository evidence.

## Pilot acceptance tests exercised cumulatively

| Acceptance test | Result |
|---|---|
| One resource → multiple experiments | PASS |
| One experiment → multiple configurations | PASS |
| Zero configurations when no stable configuration identity is evidenced | PASS |
| Framework/library can have zero experiments | PASS |
| Supporting library ≠ PINN | PASS |
| Non-PINN research code ≠ PINN | PASS |
| Simulator/solver ≠ PINN | PASS |
| Operator learning ≠ classical PINN | PASS |
| Paper reporting ≠ repository implementation | PASS |
| Resource identity ≠ paper relationship | PASS |
| Resource can have no Atlas relationship | PASS |
| Framework citations ≠ Atlas relationships | PASS |
| Representative example can form an experiment/configuration pair | PASS |
| Large example corpus need not be expanded exhaustively in the pilot | PASS |
| Bundled files ≠ standalone reusable dataset automatically | PASS |
| `unknown` ≠ `false` | PASS |
| `not_available` ≠ `not_applicable` | PASS |
| Unversioned imports/dependencies ≠ exact environment | PASS |
| Pinned Stage-2 repository snapshots retained | PASS |
| R3 can be assigned with complete static inputs/workflow even when exact versions are unavailable | PASS |
| R4 withheld when quantified expected-result evidence is absent | PASS |
| Static R4 can be assigned without execution when end-to-end artifacts are complete | PASS |
| R5 cannot be assigned | PASS |
| Consequential conflicting evidence preserved | PASS |

## Current methodological observation

P05 confirms that the Stage3-D01 hierarchy handles differentiable simulators without conflating differentiability with PINN methodology. It also demonstrates a practical bounded-extraction rule: repository-level capability breadth can coexist with one representative experiment/configuration record when exhaustive example enumeration would add volume without testing new ontology semantics.

The static reproducibility gates remain discriminating: explicit case and numerical configuration are sufficient for R3, while absence of a repository-backed expected numerical target prevents R4.

No schema change is required at Stage3-P05.
