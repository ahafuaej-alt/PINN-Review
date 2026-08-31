# Computational Resources Stage 3 — Quality Report

Verification/extraction date: 2026-08-31  
Checkpoint: Stage3-D01

## Structural QA

Status: **PASS**

- Stage 3 is additive under `03-technical/`, `04-evidence/`, `schemas/`, and Stage-3 report paths.
- Existing `CR######` and `PRL######` identity formats are preserved.
- Experiment identifiers are constrained to `CR######-E###`.
- Configuration identifiers are constrained to `CR######-E###-C###`.
- Technical-evidence identifiers are constrained to `TE-CR######-####`.
- JSON Schemas validate as Draft 2020-12 schemas.
- Cross-schema references were exercised with representative design-only sample records.
- `R5` is excluded from the reproducibility schema.
- Field states distinguish `verified`, `documented`, `partially_verified`, `unknown`, `not_available`, `not_applicable`, and `conflicting_evidence`.
- Inferred evidence must be labeled `inferred` / `inferred_from_evidence`.
- Resource scientific role and artifact delivery form are represented separately.
- The design can represent one resource with multiple experiments and one experiment with multiple configurations.
- Technical facts support one or more evidence IDs.
- Paper and repository claims can be recorded as separate source-scoped facts.
- Dataset/resource boundaries are type-specific and do not classify arbitrary files as reusable datasets.
- Supporting libraries and operator-learning resources have distinct profiles.
- Static reproducibility is gated and evidence-based rather than an averaged score.
- No Stage 1 or Stage 2 record was modified.
- No public Atlas/site file, deployment workflow, or curated output was modified.
- No repository software, notebook, model, container, binary, or research dataset was executed.

## Pilot coverage QA

Status: **PASS**

The proposed pilot covers:

- conventional PINN implementation;
- multi-experiment/sampling-focused PINN code;
- reusable PINN framework/library;
- physics-informed operator learning;
- bundled benchmark data and trained artifacts;
- supporting scientific-ML library;
- non-PINN paper research code;
- simulator/solver;
- standalone research data product;
- DOI/archive resource;
- strong documentation cases;
- weak/incomplete documentation.

## Methodological concern

The chief design risk is uncontrolled schema proliferation if every scientific field is given its own storage tree. Stage3-D01 therefore uses a compact record hierarchy plus namespaced `technical_field` values and one evidence model. Domain-specific value constraints can be tightened after the pilot demonstrates which structures recur without losing scientifically important heterogeneity.
