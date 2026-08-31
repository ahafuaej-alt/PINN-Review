# Computational Resources Stage 3 — Quality Report

Verification/extraction date: 2026-08-31  
Checkpoint: Stage3-P03

## Structural QA

Status: **PASS**

- 2 resource records validated against `stage3-resource-technical.schema.json`.
- 5 experiment records validated against `stage3-experiment.schema.json`.
- 6 configuration records validated against `stage3-configuration.schema.json`.
- 24 evidence records validated against `stage3-technical-evidence.schema.json`.
- 2 static reproducibility assessments validated against `stage3-reproducibility.schema.json`.
- All P03 identifiers are unique.
- Every fact-level evidence reference resolves.
- Every resource experiment/configuration reference resolves.
- Inferred evidence uses `inferred` / `inferred_from_evidence`; direct evidence does not.
- Reproducibility levels remain restricted to R0–R4; no R5 value is present.
- Stage-2 pinned commits are preserved.
- No Stage 1 or Stage 2 path is modified.
- No public Atlas/site or `05-curated/` path is modified.
- No scientific workload was executed.
- Public-text provenance scan passed.

## Scientific extraction QA

Status: **PASS**

### CR000010

The resource demonstrates a strong paper-versus-upgraded-repository source-scope case. The primary paper's four core application classes are preserved, while repository-only B2 is represented separately and exploratory B6 is not promoted. Five experiment identities and six configurations are supported without ontology expansion.

The validated B3 configuration reaches **R4 static reproducibility** because the pinned snapshot specifies an exact environment, environment build path, exact runner/default option/seed, physics, decomposition, optimizer and convergence protocol, reference solver, evaluation procedure, and expected results. This is a static completeness classification only; no execution occurred.

### CR000059

The resource demonstrates the supporting-library profile. Neural Tangents remains a kernel/infinite-network scientific-ML dependency with zero PINN experiment/configuration records. Installation and capabilities are well documented, but lower-bound dependencies prevent an exact environment lock; static reproducibility is gated at **R2**.

## Pilot acceptance tests exercised cumulatively

| Acceptance test | Result |
|---|---|
| One resource → multiple experiments | PASS |
| One experiment → multiple configurations | PASS |
| Framework/library can have zero experiments | PASS |
| Supporting library ≠ PINN | PASS |
| Operator learning ≠ classical PINN | PASS |
| Paper reporting ≠ repository implementation | PASS |
| Repository-only experiment remains source-scoped | PASS |
| Bundled files ≠ standalone reusable dataset automatically | PASS |
| `unknown` ≠ `false` | PASS |
| `not_available` ≠ `not_applicable` | PASS |
| Pinned Stage-2 repository snapshots retained | PASS |
| Static R4 can be assigned without execution when end-to-end artifacts are complete | PASS |
| R5 cannot be assigned | PASS |
| Consequential conflicting evidence preserved | PASS |

## Current methodological observation

The Stage3-D01 hierarchy remains adequate. P03 adds two important stress tests without schema proliferation: an upgraded implementation whose repository architecture must remain distinct from its paper architecture, and a supporting library that must not be forced into PINN experiment semantics.

No schema change is required at Stage3-P03.
