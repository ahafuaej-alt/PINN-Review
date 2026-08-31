# Computational Resources Stage 3 — Quality Report

Verification/extraction date: 2026-08-31  
Checkpoint: Stage3-P04

## Structural QA

Status: **PASS**

- 1 resource record validated against `stage3-resource-technical.schema.json`.
- 3 experiment records validated against `stage3-experiment.schema.json`.
- 0 configuration records were warranted; no configuration record was fabricated.
- 12 evidence records validated against `stage3-technical-evidence.schema.json`.
- 1 static reproducibility assessment validated against `stage3-reproducibility.schema.json`.
- All P04 identifiers are unique.
- Every fact-level evidence reference resolves.
- All three experiment references resolve from `CR000163`; every experiment has an empty configuration list by design.
- Inferred evidence uses `inferred` / `inferred_from_evidence`; direct evidence does not.
- Reproducibility levels remain restricted to R0–R4; no R5 value is present.
- Stage-2 pinned commit `17371f1fe10aa362a11a510de8909c192d505b29` is preserved.
- No Stage 1 or Stage 2 path is modified.
- No public Atlas/site or `05-curated/` path is modified.
- No scientific workload was executed.
- Public-text provenance scan passed.

## Scientific extraction QA

Status: **PASS**

### CR000163

The resource remains correctly classified as `non_pinn_research_code`. The pinned repository consists of three article-oriented quantum-computation notebooks plus a CC0 license, with no PINN architecture, physics-informed loss, neural-network training workflow, or reusable research dataset identified.

The official Atlas relationship is narrow and well supported: paper 44, *Time-of-Flow Distributions in Discrete Quantum Systems: From Operational Protocols to Quantum Speed Limits* (`10.3390/e27100996`), identifies `Codes_for_TF_discrete_paper_arxiv_org_abs_2504_09571.ipynb` in its Data Availability Statement. Stage 3 therefore maps `PRL000007` to `CR000163-E001` without extending that relationship to the other two notebooks.

The remaining notebooks are independently meaningful repository experiments: one covers free-fall time-of-arrival/uncertainty calculations, and one covers time-energy uncertainty in a driven three-level system. They remain repository-only because no Atlas relationship is evidenced for them.

The repository has usable notebook entrypoints but no reproducible environment specification, dependency lock, README, or installation workflow. Observed imports are unversioned, so the resource is gated at **R1**.

## Pilot acceptance tests exercised cumulatively

| Acceptance test | Result |
|---|---|
| One resource → multiple experiments | PASS |
| One experiment → multiple configurations | PASS |
| Zero configurations when no stable configuration identity is evidenced | PASS |
| Framework/library can have zero experiments | PASS |
| Supporting library ≠ PINN | PASS |
| Non-PINN research code ≠ PINN | PASS |
| Operator learning ≠ classical PINN | PASS |
| Paper reporting ≠ repository implementation | PASS |
| Resource identity ≠ paper relationship | PASS |
| Official paper relationship can target one experiment within a multi-experiment repository | PASS |
| Bundled files ≠ standalone reusable dataset automatically | PASS |
| `unknown` ≠ `false` | PASS |
| `not_available` ≠ `not_applicable` | PASS |
| Unversioned imports ≠ exact environment | PASS |
| Pinned Stage-2 repository snapshots retained | PASS |
| Static R4 can be assigned without execution when end-to-end artifacts are complete | PASS |
| R5 cannot be assigned | PASS |
| Consequential conflicting evidence preserved | PASS |

## Current methodological observation

P04 confirms that the Stage3-D01 hierarchy handles non-PINN multi-article repositories without schema expansion. Experiment identity is useful even when configuration identity is not: the repository contains three scientifically distinct notebook studies, but only one carries the Atlas paper relationship and none warrants an artificial `C###` record.

No schema change is required at Stage3-P04.
