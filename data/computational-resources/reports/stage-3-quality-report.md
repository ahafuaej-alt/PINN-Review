# Computational Resources Stage 3 — Quality Report

Verification/extraction date: 2026-08-31  
Checkpoint: Stage3-P01

## Structural QA

Status: **PASS**

- 2 resource records validated against `stage3-resource-technical.schema.json`.
- 9 experiment records validated against `stage3-experiment.schema.json`.
- 64 configuration records validated against `stage3-configuration.schema.json`.
- 34 evidence records validated against `stage3-technical-evidence.schema.json`.
- 2 static reproducibility assessments validated against `stage3-reproducibility.schema.json`.
- All `CR######-E###`, `CR######-E###-C###`, and `TE-CR######-####` identifiers are unique.
- Every fact-level evidence reference resolves to a technical-evidence record in this checkpoint.
- Every resource experiment/configuration reference resolves to a committed checkpoint record.
- Inferred evidence uses `inferred` / `inferred_from_evidence`; direct evidence does not.
- Reproducibility levels remain restricted to R0–R4; no R5 value is present.
- Stage-2 pinned commits are preserved for all repository implementation evidence.
- No Stage 1 or Stage 2 path is modified.
- No public Atlas/site or `05-curated/` path is modified.
- No repository software or scientific workload was executed.

## Scientific extraction QA

Status: **PASS**

### CR000003

The resource demonstrates the required separation between repository implementation, repository documentation/configuration, and paper-reported settings. Two consequential documentation/runtime inconsistencies are retained explicitly rather than reconciled. The dynamic-fracture code path also demonstrates an evidence-supported missing-artifact finding. Static reproducibility is gated at **R2**.

### CR000056

The resource demonstrates one-resource-to-many-experiments and one-experiment-to-many-configurations:

- 6 evidence-supported PDE experiment identities;
- 10 distinct sampling configurations per experiment;
- 60 configuration records in total.

The sampling taxonomy follows the primary paper, while the entrypoint mapping is tied to the Stage-2 pinned repository tree. Bundled reference files are represented as experiment data rather than automatically classified as standalone datasets. Static reproducibility is gated at **R1** because the environment/install prerequisite is materially incomplete.

## Pilot acceptance tests exercised

| Acceptance test | Result |
|---|---|
| One resource → multiple experiments | PASS |
| One experiment → multiple configurations | PASS |
| One fact → one or more evidence records | PASS |
| Paper reporting ≠ repository implementation | PASS |
| Resource identity ≠ paper relationship | PASS |
| Bundled files ≠ standalone reusable dataset automatically | PASS |
| `unknown` ≠ `false` | PASS |
| `not_available` ≠ `not_applicable` | PASS |
| Pinned Stage-2 repository snapshots retained | PASS |
| R5 cannot be assigned | PASS |
| Consequential conflicting evidence preserved | PASS |

## Current methodological observation

The compact Stage3-D01 hierarchy is holding under the first high-heterogeneity extraction. `CR000056` can represent 60 sampling configurations without adding a new schema family, while `CR000003` can retain paper/repository/default-runtime disagreements as source-scoped evidence. No schema change is required at Stage3-P01.

The bounded detail remaining for five `CR000056` adaptive-script sets is a depth-of-extraction issue, not an ontology failure.
