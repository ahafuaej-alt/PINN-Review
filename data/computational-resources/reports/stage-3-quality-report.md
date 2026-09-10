# Computational Resources Stage 3 Quality Report

Date: 2026-09-10
Branch: `data/computational-resources-stage3`

## Latest checkpoint

- Checkpoint: `Stage3-S176`
- Resources: CR000198
- Latest completed aggregate batch: `SOB018` — **PASS (10/10)**
- Current batch: `SOB019` — **9/10**
- Checkpoint QA: **PASS**

All required schema, cumulative uniqueness, evidence-reference, resource→experiment→configuration, evidence-use, Stage-2 authority, source-scope, missing-value, inference, reproducibility, R5-exclusion, execution-boundary, write-boundary, provenance-text, branch-head-stability and repository-scope checks pass.

## Checkpoint counts

- Resources: **1**
- Experiments: **4**
- Configurations: **4**
- Technical-evidence records: **12**
- Reproducibility assessments: **1**
- New unresolved findings: **5**
- New explicit conflicts: **0**

## Cumulative counts

- Resources: **199**
- Experiments: **292**
- Configurations: **513**
- Technical-evidence records: **2164**
- Reproducibility assessments: **199**
- Unresolved findings: **1204**
- Explicit conflicts: **137**

## Scientific boundary

Stage-2 authority, the pinned repository tree, README, environment manifest and four course notebook source surfaces were inspected statically. Bundled NPY arrays were identified by path and notebook use only and were not loaded. Stored notebook outputs were treated as historical repository evidence. No scientific software, environment, dependency installation, training, inference, prediction, evaluation, test, dataset workload, notebook execution, container, accelerator or scientific workload was executed.

## Continuation

Exact next resource: `CR000199`. Exact next checkpoint: `Stage3-S177`. Independently extractable resources remaining: **164**.
