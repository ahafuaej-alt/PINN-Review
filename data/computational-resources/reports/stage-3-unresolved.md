# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-12
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S224`

## Current totals

- Unresolved findings: **1406**
- Explicit conflicts: **146**
- Next unresolved ID: `S3U-1407`

## New findings in S224

- `S3U-1404` — CR000260 / component_dependency_versions_not_fully_pinned / medium: LIBSVM documents component-specific toolchains and dependencies, but several critical environment elements remain unversioned or only loosely specified across interfaces, including the root compiler/toolchain, SciPy, gnuplot, MATLAB/Octave and optional GUI libraries.
- `S3U-1405` — CR000260 / stochastic_seed_control_not_documented / low: The documented cross-validation and subset-selection utilities use randomized splitting/selection, but the inspected user-facing guidance does not document an explicit reference seed or seed-control procedure.
- `S3U-1406` — CR000260 / reference_expected_outputs_incomplete / low: The repository provides executable-use examples and some illustrative metric output, but no canonical expected-output set is documented across the supported CLI, Python, Java and MATLAB/Octave workflows.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
