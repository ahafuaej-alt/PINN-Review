# Computational Resources Stage 3 — Progress

Verification/extraction date: 2026-08-31

| Field | Value |
|---|---|
| Stage-3 phase | Approved pilot extraction in progress |
| Current batch | Pilot batch 005 |
| Current checkpoint | Stage3-P05 |
| Last completed resource | CR000217 |
| Next resource | CR000268 |
| Completed Stage-3 resource count | 8 |
| Remaining Stage-3 registry resource count | 356 |
| Approved pilot resources completed | 8 / 10 |
| Approved pilot resources remaining | 2 |
| Completed experiment count | 22 |
| Completed configuration count | 78 |
| Technical evidence records | 106 |
| Static reproducibility assessments | 8 |
| Current QA status | PASS |
| Current unresolved technical item count | 19 |
| Current conflicting-evidence finding count | 2 |
| Resources completed in this checkpoint | CR000217 |
| Last checkpoint commit | self — Git commit containing this report |

## Stage3-P05 result

The fifth pilot checkpoint extracted `CR000217` from the exact Stage-2 pinned JAX-Fluids snapshot and exercised the `simulator_solver` profile without creating an Atlas-paper relationship.

### CR000217

- Profile: `simulator_solver`
- Artifact form: `source_repository`
- Pinned commit: `819edcd2f496e1719d1f7db751d06b9fd9a1f3cc`
- License: `GPL-3.0-only`
- Package version at the pinned snapshot: `0.2.1`
- Experiments: 1 representative bounded solver experiment
- Configurations: 1 exact paired case/numerical configuration
- Static reproducibility: `R3`
- Atlas relationship: none; Stage 2 explicitly states that no Atlas relationship is present or inferred.
- JAX-Fluids is documented as a fully differentiable JAX CFD solver for compressible single- and two-phase flows, using finite-volume discretization of the Navier–Stokes equations on Cartesian grids.
- Repository-level capabilities include explicit Euler/RK2/RK3 integration, multiple WENO/TENO reconstructions, several approximate Riemann solvers, level-set and diffuse-interface multiphase methods, accelerator support, and end-to-end automatic differentiation.
- The pinned package metadata requires Python `>=3.11` and names runtime dependencies, but those runtime dependencies are not exact-pinned.
- Installation workflows for CPU and GPU/JAX environments are documented in the README.
- The full repository example corpus spans 1D, 2D, and 3D cases. Stage 3 does not convert every example into a pilot experiment.

### CR000217-E001 / CR000217-E001-C001

The representative experiment is the pinned one-dimensional Sod shock-tube example. The exact artifact set consists of `run.py`, `sod.json`, and `numerical_setup.json`.

The physical configuration uses a 200-cell unit interval, ideal-gas equation of state with specific-heat ratio 1.4, the standard left/right density and pressure discontinuity at `x=0.5`, zero initial velocity, end time 0.2, and density/velocity/pressure outputs.

The paired numerical configuration uses RK3 with CFL 0.5, a Godunov convective solver, HLLC Riemann solver, Einfeldt signal speed, WENO5-Z characteristic-primitive reconstruction, five halo cells, and double-precision compute/output. The entrypoint constructs the JAX-Fluids managers, runs the simulation, reloads the output fields, and generates a 1D animation and figure.

This case reaches **R3** because source, license, installation/environment guidance, case files, numerical configuration, and entrypoint are all statically present. **R4 is not assigned** because the inspected pinned sources do not establish quantified reference values, a regression artifact, or a validation tolerance for the representative Sod result. No textbook or externally computed solution is substituted.

## Cumulative pilot state

Eight heterogeneous resources are now complete. P05 confirms that Stage3-D01 can represent a differentiable numerical solver independently of PINN semantics and independently of Atlas-paper relationships.

The checkpoint also confirms that framework breadth and experiment identity should remain separate: JAX-Fluids exposes a large example corpus, but one well-evidenced representative solver case is sufficient for the pilot to test experiment/configuration and reproducibility semantics without artificial record proliferation.

## Stage boundaries

Stage 1 and Stage 2 remain unchanged and read-only. No public Atlas/site file or `05-curated/` output was modified. No CFD simulation, notebook cell, dependency installation, post-processing workflow, accelerator workload, or research dataset was executed.

## Next action

Continue the approved pilot with `CR000268`, preserving the same small-checkpoint extraction and QA process. Do not scale beyond the ten-resource pilot until pilot acceptance is scientifically reviewed.
