# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-11
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S198`

## Current totals

- Unresolved findings: **1332**
- Explicit conflicts: **145**
- Next unresolved ID: `S3U-1333`

## New findings in S198

- `S3U-1327` — CR000223 / framework_scope / medium: The current PhysicsNeMo framework is substantially broader than the historical PINN-toolbox scope associated with Atlas review paper 367; Stage 3 preserves that scope distinction.
- `S3U-1328` — CR000223 / source_snapshot / low: The product web resource has no immutable commit SHA; technical source claims are bounded to the Stage-2-authoritative linked repository snapshot.
- `S3U-1329` — CR000223 / environment / medium: The package supports multiple CUDA and optional-dependency variants, so the root manifest does not define one universal runtime for every component.
- `S3U-1330` — CR000223 / example_dependencies / medium: Example-specific requirement files and optional feature groups are not normalized into a single environment specification.
- `S3U-1331` — CR000223 / data_assets / medium: Examples, tests, reference values, normalization files, model/test assets, and external dataset workflows are heterogeneous support materials and cannot be represented as one standalone dataset.
- `S3U-1332` — CR000223 / reproducibility_scope / medium: No framework-wide experiment, hyperparameter set, seed, expected-result target, or benchmark execution is established by the bounded static assessment.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
