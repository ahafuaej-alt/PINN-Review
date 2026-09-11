# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-11
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S193`

## Current totals

- Unresolved findings: **1302**
- Explicit conflicts: **143**
- Next unresolved ID: `S3U-1303`

## New findings in S193

- `S3U-1298` — CR000215 / aggregate_target / medium: The Stage-2 resource is an aggregate SciML ecosystem website and does not provide one immutable implementation commit suitable as a universal reproduction target.
- `S3U-1299` — CR000215 / license_scope / medium: The MIT license in the pinned `SciML/sciml.ai` website-source repository applies to the website source and must not be propagated as an aggregate SciML ecosystem or component-package license.
- `S3U-1300` — CR000215 / environment_scope / medium: The Franklin dependency in the website `Project.toml` describes the website build environment and does not define a common SciML software runtime or dependency environment.
- `S3U-1301` — CR000215 / citation_scope / low: Provider guidance is component-specific; no single aggregate SciML software DOI is established for the ecosystem resource.
- `S3U-1302` — CR000215 / component_normalization / low: Component packages have independent versions, licenses, environments and workflows; they are not collapsed into synthetic Stage-3 experiments or configurations for this aggregate resource.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused and no new explicit conflict is introduced.