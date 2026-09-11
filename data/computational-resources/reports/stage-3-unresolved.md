# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-11
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S200`

## Current totals

- Unresolved findings: **1342**
- Explicit conflicts: **145**
- Next unresolved ID: `S3U-1343`

## New findings in S200

- `S3U-1337` — CR000226 / alias_availability / low: The historical analysis-bear/PyDEns path is unavailable and has no immutable alias snapshot; canonical technical identity is preserved through accepted resolution to CR000057.
- `S3U-1338` — CR000226 / relationship_scope / low: `PRL000082` remains attached to the alias identity with canonical-resource provenance and must not be interpreted as an independent second PyDEns implementation.
- `S3U-1339` — CR000228 / resource_role / low: ADCME supports physics-constrained learning but is broader automatic-differentiation and inverse-modeling infrastructure; PINN-specific framework semantics are not inferred.
- `S3U-1340` — CR000228 / environment_normalization / medium: Project.toml constrains Julia dependencies, while TensorFlow, system, build and custom-operator requirements are managed outside one exact environment lock; end-to-end dependency pinning remains incomplete.
- `S3U-1341` — CR000228 / accelerator_toolchain / low: Optional GPU/custom-operator use depends on external nvcc/system tooling whose exact versions and hardware state are not pinned in the assessed static scope.
- `S3U-1342` — CR000228 / example_scope / low: Repository tutorials/examples are capability demonstrations and are not promoted to standalone experiments or reusable datasets without an evidence-defined research case.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
