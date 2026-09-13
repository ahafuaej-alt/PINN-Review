# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S257`
Latest reconciliation: `Stage3-RC08` — PASS

## Current totals

- Unresolved findings: **1477**
- Explicit conflicts: **150**
- Next unresolved ID: `S3U-1478`

## New findings in S257

- `S3U-1474` — CR000306 / historical_generator_source_currently_unavailable / medium: The primary paper provides the exact Shapeset-3×2 generator URL and verifies its historical role, but the Stage-2/current access state is unavailable and no usable source artifact was recovered.
- `S3U-1475` — CR000306 / authoritative_generator_mirror_or_snapshot_not_identified / medium: A bounded Stage-3 search did not identify an authoritative maintained mirror or source snapshot that could replace the unavailable page without changing evidence provenance.
- `S3U-1476` — CR000306 / generator_license_and_dependency_environment_unavailable / low: No generator reuse licence, dependency manifest, environment versioning or source version/commit can be verified while the authoritative artifact is unavailable.
- `S3U-1477` — CR000306 / implementation_level_sampling_parameters_unavailable / medium: The paper documents Shapeset-3×2 concepts and constraints, but implementation-level random-sampling behavior and generator code cannot be inspected from the unavailable source.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
