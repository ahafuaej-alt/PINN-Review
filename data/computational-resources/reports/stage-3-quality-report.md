# Computational Resources Stage 3 — Quality Report

Status date: 2026-09-03  
Acceptance checkpoint: Stage3-A01  
Pilot extraction checkpoint: Stage3-P07  
Latest scale-out checkpoint: Stage3-S051

## Current QA status

Status: **PASS**

Stage3-D01 remains accepted without schema modification. The static-only boundary, Stage-2 authority, missing-value semantics, evidence-source semantics, identifier rules, resource → experiment → configuration ontology, and R0–R4 reproducibility ceiling remain unchanged.

The detailed quality report through `Stage3-S047` is preserved verbatim in `reports/stage-3-quality-report-through-s047.md`. Per-checkpoint machine-readable QA remains authoritative in `03-technical/batch-qa/scaleout-checkpoint-###-qa.json`.

## Stage3-S048 corrective checkpoint

Status: **PASS**

`CR000049` restored the omitted PyTorch supporting-framework record and the control reconciliation closed canonical aggregate QA for SOB003–SOB005 without rewriting historical checkpoint IDs or Git history.

## Stage3-S049 checkpoint

Status: **PASS**

`CR000057` records the PyDEns framework at resource scope with zero experiments/configurations, ten evidence records, R2 reproducibility, eight bounded unresolved findings, and three explicit conflicts.

## Stage3-S050 checkpoint

Status: **PASS**

`CR000058` records the hp-VPINNs paper implementation with four repository-defined experiments, four active default configurations, sixteen evidence records, R2 reproducibility, ten bounded unresolved findings, and zero new conflicts. The preserved S050 pre-QA draft-commit deviation remains documented in S050 QA.

## Stage3-S051 checkpoint

Status: **PASS**

`CR000060` preserves the Stage-2-pinned `Teoroo-CMC/PiNN` repository at commit `d511275a59e9a23330a7038977bf52b1f5485302`, BSD-3-Clause licensing, `PRL000148` as the official relationship to Atlas paper 511, and `PRL000263` as the official relationship to Atlas paper 744.

The key scientific classification is an acronym/scope distinction: **PiNN means Pair-wise Interaction Neural Network**. It is a TensorFlow-based atomic/equivariant neural-network library for molecules, materials and electrochemical systems, not a physics-informed neural-network/PDE PINN implementation. Stage 3 therefore assigns the `supporting_scientific_ml_library` profile and preserves PINN-specific PDE fields as inapplicable rather than forcing a false physics-informed interpretation.

The repository is represented at **resource scope with zero experiments and zero configurations**. Twelve technical-evidence records cover authoritative identity and both paper relationships, Pair-wise Interaction Neural Network scope, package version/license/CLI metadata, conda/pip dependency contracts, CPU/GPU container routes, dataset-loader capabilities, network and property-model registries, CLI conversion/training/evaluation behavior, legacy repository-transfer URL provenance, and the static-only boundary.

The static reproducibility level is **R2**. Source, BSD licensing, Python/TensorFlow support ranges, conda and editable-pip installation, CPU/GPU container recipes, the `pinn` CLI, YAML parameter workflow, model/network registries, generic data conversion/preprocessing, TensorFlow Estimator training/evaluation, and test infrastructure are statically inspectable. R3 is not assigned because this is a reusable library rather than one selected paper/application experiment and no exact transitive lock, immutable container digest, canonical application dataset/configuration, checkpoint, or expected numeric result is fixed at resource scope.

Six bounded unresolved findings are retained for the absent transitive lock, missing immutable container digests, application-scoped datasets, non-applicable paper-specific experiment bundle, unexecuted tests, and unexecuted container workflows. No new explicit conflict is introduced. The legacy `yqshao/pinn` URL in `setup.py` is provider-redirected to the current repository identity and is treated as transfer provenance, not conflicting evidence.

Checkpoint additions:

- resources: **1**
- experiments: **0**
- configurations: **0**
- technical-evidence records: **12**
- reproducibility assessments: **1**
- unresolved findings: **6**
- new explicit conflicts: **0**

No dependency, environment, container, test, dataset conversion, training, evaluation or inference workflow was executed.

## Stage3-S051 control-policy deviation

The normal policy requires one completed checkpoint commit after QA. During S051 staging, two unintended pre-QA commits occurred: `124b8ae4c36a394ec60e988146b9a0f529c75276` added an empty root path `SHOULD_NOT_USE`, and `214d072b2eb7b2b20ea2a2a57559860bb844f7ed` added placeholder `TEMP` content at the intended S051 resource path. The S051 completion tree removes the unintended path and replaces the placeholder with the validated resource record. History is preserved without force push, rebase, squash or rewrite. The final S050→S051 net tree is restricted to legitimate Stage-3 checkpoint paths, so the deviation has no scientific, ontology, source-authority, count, or final-scope effect.

## Aggregate batch state

Canonical aggregate QA remains complete and passing for `SOB001`–`SOB005`.

`SOB006` is **IN PROGRESS** with five independently extractable completed members:

- `CR000054` — Stage3-S046
- `CR000055` — Stage3-S047
- `CR000057` — Stage3-S049
- `CR000058` — Stage3-S050
- `CR000060` — Stage3-S051

`CR000056` and `CR000059` are pilot-complete and are not reprocessed. Aggregate QA is not due until ten canonical SOB006 members are complete.

## Current cumulative totals

After `Stage3-S051`:

- technical resource records: **65**
- experiments: **116**
- configurations: **258**
- technical-evidence records: **874**
- static reproducibility assessments: **65**
- unresolved findings: **392**
- explicit conflicting-evidence findings: **84**

## Registry accounting

The Stage-2 closure registry contains 364 entries. `CR000021` remains provenance for a non-independent identity canonically resolved to `CR000184`, leaving 363 independently extractable technical identities. With 65 completed Stage-3 resource records, **298** remain.

## Continuation QA

The forward frontier is now `CR000060`. The exact next independently extractable resource is **`CR000061`**, to be processed as `Stage3-S052` within `SOB006`.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific workload execution occurred. R5 remains prohibited.
