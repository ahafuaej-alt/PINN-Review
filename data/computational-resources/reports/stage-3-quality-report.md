# Computational Resources Stage 3 Quality Report

Date: 2026-09-09
Branch: `data/computational-resources-stage3`

## Latest checkpoint

- Checkpoint: `Stage3-S154`
- Resources: CR000172
- Latest completed aggregate batch: `SOB016` — **PASS (10/10)**
- Current batch: `SOB017` — **4/10**
- Checkpoint QA: **PASS**

All schema, cross-reference, evidence-use, identifier-uniqueness, Stage-2 authority, missing-value, inference-labeling, execution-boundary and repository-scope checks pass. CR000172 remains a classical non-PINN constitutive solver; the linked paper's neural-network implementation is not inferred into this resource.

## Checkpoint counts

- Resources: **1**
- Experiments: **1**
- Configurations: **1**
- Technical-evidence records: **13**
- Reproducibility assessments: **1**
- New unresolved findings: **6**
- New explicit conflicts: **0**

## Cumulative counts

- Resources: **174**
- Experiments: **260**
- Configurations: **465**
- Technical-evidence records: **1925**
- Reproducibility assessments: **174**
- Unresolved findings: **1077**
- Explicit conflicts: **123**

## Scientific boundary

The exact pinned seven-file source tree was inspected statically. No module was imported, environment created, data generated or serialized output loaded. One source-defined active configuration is recorded without asserting that it reproduces the linked paper's complete synthetic-data campaign.

## Continuation

Exact next resource: `CR000173`. Exact next checkpoint: `Stage3-S155`. Independently extractable resources remaining: **189**.
