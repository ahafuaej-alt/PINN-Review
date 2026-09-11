# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-11
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S188`

## Current totals

- Unresolved findings: **1275**
- Explicit conflicts: **141**
- Next unresolved ID: `S3U-1276`

## New findings in S188

- `S3U-1271` — CR000210 / versioning / medium: The Stage-2 resource is an aggregate project website with no single immutable source commit or site snapshot suitable as a universal reproduction target.
- `S3U-1272` — CR000210 / environment / medium: FEniCSx is componentized and no single site-level dependency/environment manifest applies across the aggregate project; concrete reproduction requires component/version selection.
- `S3U-1273` — CR000210 / paper_relationship / medium: Verified relationships to Atlas papers 752 and 836 establish software use only; the Stage-2 relationship evidence does not establish one shared paper-specific FEniCS configuration.
- `S3U-1274` — CR000210 / license / low: A single aggregate-project SPDX license is not applicable at the website-resource level; component-level licensing remains the correct normalization scope.
- `S3U-1275` — CR000210 / reproducibility / low: Current provider component versions are documented, but they must not be retroactively attributed to Atlas papers 752 or 836 without paper-specific evidence.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
