# Computational Resources Stage 3 — Quality Report

Status date: 2026-09-03  
Acceptance checkpoint: Stage3-A01  
Pilot extraction checkpoint: Stage3-P07  
Latest scale-out checkpoint: Stage3-S049

## Current QA status

Status: **PASS**

Stage3-D01 remains accepted without schema modification. The static-only boundary, Stage-2 authority, missing-value semantics, evidence-source semantics, identifier rules, resource → experiment → configuration ontology, and R0–R4 reproducibility ceiling remain unchanged.

The detailed quality report through `Stage3-S047` is preserved verbatim in `reports/stage-3-quality-report-through-s047.md`. Per-checkpoint machine-readable QA remains authoritative in `03-technical/batch-qa/scaleout-checkpoint-###-qa.json`.

## Stage3-S048 corrective checkpoint

Status: **PASS**

`CR000049` restored the PyTorch supporting-framework resource omitted by the historical S041→S042 transition. It remains resource-only, with ten evidence records, one R2 assessment, six bounded unresolved findings and no new conflict. The control reconciliation also closed canonical aggregate QA for SOB003–SOB005 without rewriting historical checkpoint IDs or Git history.

## Stage3-S049 checkpoint

Status: **PASS**

`CR000057` preserves the Stage-2-pinned `analysiscenter/pydens` repository at commit `748175c4e77d407a5dc593d2f104ce6edddc3126`, Apache-2.0 licensing, `PRL000095` secondary-review mention to Atlas paper 401, and `PRL000140` official relationship to the PyDEns framework paper (Atlas paper 492).

PyDEns is represented as a **PINN framework/library resource with zero experiments and zero configurations**. Ten technical-evidence records cover authoritative identity/relationship scope, package/license metadata, packaging generations, installation instructions, ODE/PDE/parametric/inverse capability, automatic differentiation and trainable-variable tokens, network/condition construction, optimizer/loss/sampling behavior, tutorial/test surface, relationship scope, and the static-only boundary.

The static reproducibility level is **R2**. Source, Apache licensing, package version 1.0.2, solver mathematics, configurable architecture, training API, installation routes, tutorials, examples, tests and citation relationships are inspectable. R3 is withheld because the snapshot contains incompatible-looking packaging generations with no complete transitive lock, the README's BatchFlow-submodule clone guidance does not match the empty `.gitmodules`, one README tutorial path is stale, and no tutorial/test/runtime workflow was executed.

Three explicit conflicts are bounded to CR000057:

1. `setup.py` versus `pyproject.toml` Python/dependency contracts;
2. README BatchFlow-submodule guidance versus the pinned repository tree;
3. README `tutorials/PDE_solving.ipynb` link versus the actual pinned tutorial path.

Checkpoint additions:

- resources: **1**
- experiments: **0**
- configurations: **0**
- technical-evidence records: **10**
- reproducibility assessments: **1**
- unresolved findings: **8**
- new conflicts: **3**

No package, dependency, notebook, tutorial, test, differential-equation solve, optimizer, prediction, training, inference, or benchmark workflow was executed.

## Aggregate batch state

Canonical aggregate QA remains complete and passing for `SOB001`–`SOB005`.

`SOB006` is **IN PROGRESS** with three independently extractable completed members:

- `CR000054` — Stage3-S046
- `CR000055` — Stage3-S047
- `CR000057` — Stage3-S049

`CR000056` is pilot-complete and is not reprocessed. Aggregate QA is not due until ten canonical SOB006 members are complete.

## Current cumulative totals

After `Stage3-S049`:

- technical resource records: **63**
- experiments: **112**
- configurations: **254**
- technical-evidence records: **846**
- static reproducibility assessments: **63**
- unresolved findings: **376**
- explicit conflicting-evidence findings: **84**

## Registry accounting

The Stage-2 closure registry contains 364 entries. `CR000021` is retained as provenance but canonically resolves to the independently extractable `CR000184` identity; therefore 363 independently extractable technical resource identities remain the current Stage-3 denominator. With 63 completed Stage-3 technical resource records, **300** remain.

## Continuation QA

The forward frontier is now `CR000057`. The exact next independently extractable resource is **`CR000058`**, to be processed as `Stage3-S050` within `SOB006`.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific workload execution occurred. R5 remains prohibited.
