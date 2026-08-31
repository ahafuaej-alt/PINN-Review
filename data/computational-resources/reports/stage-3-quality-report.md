# Computational Resources Stage 3 — Quality Report

Verification/extraction date: 2026-08-31  
Checkpoint: Stage3-P02

## Structural QA

Status: **PASS**

- 4 cumulative resource records are present across pilot checkpoints; 2 new resource records were validated for P02.
- 13 cumulative experiment records are present; P02 adds 4 experiment records for `CR000087` and deliberately adds none for framework-level `CR000227`.
- 71 cumulative configuration records are present; P02 adds 7 configuration records.
- 58 cumulative technical-evidence records are present; P02 adds 24 evidence records.
- 4 cumulative static reproducibility assessments are present; P02 adds 2.
- All new `CR######-E###`, `CR######-E###-C###`, and `TE-CR######-####` identifiers are unique.
- Every P02 fact-level evidence reference resolves to a P02 technical-evidence record.
- Every P02 resource experiment/configuration reference resolves to a P02 record.
- Inferred evidence uses `inferred` / `inferred_from_evidence`; direct evidence does not.
- Reproducibility levels remain restricted to R0–R4; no R5 value is present.
- Stage-2 pinned commits are preserved for all repository implementation evidence.
- No Stage 1 or Stage 2 path is modified.
- No public Atlas/site or `05-curated/` path is modified.
- No repository software or scientific workload was executed.
- Public repository text was checked for prohibited authorship/tool attribution.

## Scientific extraction QA

Status: **PASS**

### CR000227

The framework/library profile is preserved without forcing a paper-style experiment hierarchy. Repository documentation and package metadata support the solver scope, symbolic PDE interface, training strategies, installation method, package version, dependency compatibility constraints, license, and citation. Documentation examples/tests remain framework-support evidence. Static reproducibility is gated at **R2** because the package is installable and substantially specified but no complete root environment lock or canonical experiment reproduction target is asserted.

### CR000087

The operator-learning profile remains distinct from classical PINN semantics. The primary paper supports three solution-operator benchmarks, while the pinned repository supports those paired conventional/separable entrypoints plus a fourth repository-only Poisson/CNN-branch example. The separable architecture is implemented with factorized coordinate trunk subnetworks, rank-wise contraction, and forward-mode derivative computation.

The environment is exactly pinned in `requirements.txt`, but required problem data are absent from the pinned tree, blocking R3. A static PRNG-key index defect in the Poisson entrypoint is recorded rather than hidden. Static reproducibility is gated at **R2**.

## Pilot acceptance tests exercised

| Acceptance test | Result |
|---|---|
| One resource → multiple experiments | PASS |
| One experiment → multiple configurations | PASS |
| One fact → one or more evidence records | PASS |
| Paper reporting ≠ repository implementation | PASS |
| Resource identity ≠ paper relationship | PASS |
| Bundled/required files ≠ standalone reusable dataset automatically | PASS |
| Framework/library ≠ forced experiment collection | PASS |
| Operator learning ≠ classical PINN | PASS |
| Repository-only experiment ≠ paper-reported experiment | PASS |
| `unknown` ≠ `false` | PASS |
| `not_available` ≠ `not_applicable` | PASS |
| Pinned Stage-2 repository snapshots retained | PASS |
| R5 cannot be assigned | PASS |
| Consequential static defects preserved | PASS |

## Current methodological observation

Stage3-D01 continues to hold without schema proliferation. `CR000227` demonstrates that a framework can be represented richly with zero experiment/configuration records, while `CR000087` demonstrates source-scoped operator-learning experiments and configurations, including a repository-only extension beyond the paper.

No schema change is required at Stage3-P02.
