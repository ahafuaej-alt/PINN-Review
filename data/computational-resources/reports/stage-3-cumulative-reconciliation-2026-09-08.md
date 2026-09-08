# Stage 3 cumulative schema and integrity reconciliation

Date: 2026-09-08
Reconciliation: `Stage3-RC02`
Branch: `data/computational-resources-stage3`
Parent: `ee70af66fa2a302a9333a147b2f7477930ba4f84`

## Decision and scope

Repair the published Stage-3 schema and reference defects and apply the accepted reproducibility gates consistently. This is a count-neutral reconciliation of existing records, not a new extraction checkpoint. The original Git history, resource identities, experiment/configuration identities, evidence identities, scientific values and Stage-2 authority remain intact. Accepted schemas and methodology are unchanged.

The initial cumulative audit found 89 invalid records across 54 files. That count represents invalid records, not all invalid fields: validation reported the first failing constraint per record. Repair exposed additional invalid fields within those same records. All 89 now validate. Additional review corrected 14 earlier R2 assessments with the same gate inconsistency found in CR000126, giving 15 assessment-level corrections in total.

The exact JSONL changes comprise 123 records in 88 files, with 374 field-level changes, including removal of 97 accidental character-index properties. Checkpoint QA annotations, batch revalidation annotations and current control reports provide the corresponding audit trail. The [field-by-field change log](../03-technical/batch-qa/cumulative-reconciliation-2026-09-08-changes.json) preserves every original and corrected JSONL field with its record, line, JSON pointer and rationale.

## Schema and source-scope corrections

- Replace nonstandard profile labels with the accepted roles supported by the existing scientific facts. Supporting libraries and non-PINN research code remain distinct from PINN implementations.
- CR000136 uses `non_pinn_research_code` for its data-driven DeepONet operator-learning workflow. Direct static readback of [the pinned training source](https://github.com/lululxvi/deeponet/blob/8d62345afd39e1df9c2c8c8d0e7c41882b06a9bf/src/deeponet_pde.py) establishes generated input/output labels and `OpDataSet` training. The Stage-2 umbrella classification is preserved; operator learning is not promoted to a PDE-residual PINN.
- Replace CR000128's nonstandard `unavailable_repository` artifact form with `source_repository`. Its explicit unavailable-source facts and R0 assessment are preserved.
- Map dependency/environment manifests to `environment_file`; notebook source/output labels to `notebook`; repository metadata and license text to `repository_documented`; README claims to `README`; code-based conflicts to `source_code`. Original source locations distinguish mixed-source claims.
- Preserve existing `inferred_from_evidence` relations and pair them with `evidence_type: inferred`. No inferred claim is promoted to direct implementation evidence.
- Replace `conflicting` with `conflicting_evidence` and normalize nonstandard paper/repository source-relation labels. Both competing scientific values remain intact.
- Remove accidental numeric properties from TE-CR000046-0003/0004/0005 and TE-CR000048-0004. Their character values spell source-relation strings; the restored relations distinguish repository documentation from implementation. TE-CR000046-0005 retains primary-paper scope with a null repository-SHA field, as required for paper evidence; its former SHA remains in the change log.

## Configuration-reference repair

TE-CR000046-0009 incorrectly declared experiment `CR000046-E002` and nonexistent configuration `CR000046-E004`. It now references `CR000046-E001` and the existing `CR000046-E001-C003`.

The existing configuration already cites this evidence and identifies `graph-neural-operator/UAI8_kernel.py`. Direct static readback of [that file at the retained Stage-2 SHA](https://github.com/neuraloperator/graph-pde/blob/c28220a6558554a193303975adb60d8857d48c0c/graph-neural-operator/UAI8_kernel.py) confirms `KernelNN3`, 100 training cases, 100 test cases, depth 6, 200 epochs and radius 0.25. No experiment, configuration, evidence ID or scientific value was created or renumbered.

The evidence-use audit also found 11 existing evidence records with no incoming fact or assessment reference. TE-CR000013-0010 is now linked as an unchanged fact to synthetic experiment CR000013-E002; it is not attached to the separate LOGO-CV assessment. The remaining ten records support the existing resource-level citation/method scope, framework evaluation capabilities or reproducibility limitations of CR000045, CR000046, CR000047, CR000048, CR000050 and CR000055, and are linked to those assessments. No level or component is increased. Every evidence record now has an incoming fact or assessment reference.

## Reproducibility corrections

Component booleans are not valid field-status strings. Each replacement preserves the source and missing-value meaning:

- Positive static evidence becomes `verified`; paper/README claims become `documented` when implementation is not established.
- Missing license, dependency specifications, installation instructions, confidential data and absent checkpoints remain `not_available`, with the original negative values retained in the change log and existing evidence/gaps.
- Unreported seed and hardware information remains `unknown`; it does not become false scientific data.
- CR000129 seed control is `partially_verified` because the recorded HeatEquation sampling implementation ignores the configured seed argument.
- CR000132's mathematics, architecture, training, hyperparameters, hardware and results are explicitly paper-documented components, not verified repository implementation.
- CR000133's bounded README/tree evidence does not establish complete input availability or evaluation procedures: input availability is `unknown`, evaluation is `partially_verified`, and method/architecture/training claims are `documented`.
- CR000126's external data access is `documented`, not independently verified payload availability.

The following existing resource-level assessments change from **R2 to R1**:

| Resources | Existing prerequisite limitation |
|---|---|
| CR000009, CR000058, CR000064, CR000085, CR000086, CR000089, CR000093, CR000094, CR000096, CR000098, CR000099, CR000107, CR000126 | The recorded assessment and cited static evidence do not establish a substantially specified environment-and-installation workflow. |
| CR000062, CR000063 | Framework-wide runtime compatibility remains `conflicting_evidence`; no single compatible source-scoped runtime was selected for the assessment. Installation commands alone do not resolve that prerequisite. |

For CR000126, the [pinned README](https://github.com/Aalto-QuML/ClimODE/blob/e729d23e8799ce0e075699e76d60227d848d8d0c/README.md) was read again: it lists prerequisites and use/evaluation commands, but does not provide an installation procedure. This agrees with the existing assessment gap. The other corrections follow the already-recorded component statuses, source evidence and explicit gaps; they do not infer new source observations.

Exact version locking is not mandatory for R2. These corrections concern missing installation/use-environment prerequisites or an unresolved compatibility scope, rather than the mere absence of a lock file. More source files, models or archived outputs cannot bypass the gate. Extraction-log levels and checkpoint QA explanations are aligned where those records explicitly store the affected level. Historical report snapshots remain historical; this reconciliation supersedes their affected rating interpretations.

Type-specific cases were reviewed without blanket downgrades. CR000014 retains R3 at its explicit use-level scope: the equivalent artifact is a self-contained executable with pretrained configurations and documented interaction steps, even though source and training are unavailable. CR000020 and CR000034 retain their existing R3 assessments: paper/log/source training conflicts remain source- and configuration-scoped; the inspected repository workflow controls are recorded separately. No R4 or R5 claim is introduced.

## Cumulative and batch QA

The [cumulative QA record](../03-technical/batch-qa/cumulative-reconciliation-2026-09-08-qa.json) records validation of all five record families against the unchanged accepted schemas, identifier uniqueness, reciprocal resource/experiment/configuration membership, evidence ownership/reference resolution, inference pairing and R5 exclusion. PowerShell's installed JSON Schema validator resolves the common definitions through an equivalent in-memory embedding; no package installation or scientific execution is involved.

All SOB001–SOB013 memberships and counts were recomputed from resource identities, including pilot exclusions and the CR000021-to-CR000184 non-independent identity rule. SOB009's planned list includes its two explicitly recorded pilot skips; removing those skips gives exactly its ten independently extractable completed members. This is retained, not treated as duplicate extraction.

| Cumulative quantity | Revalidated total |
|---|---:|
| Resources | 140 |
| Experiments | 227 |
| Configurations | 424 |
| Technical-evidence records | 1,585 |
| Reproducibility assessments | 140 |
| Unresolved findings, reconciled from pilot and batch increments | 887 |
| Explicit conflicts, reconciled from pilot and batch increments | 112 |

The scientific gaps underlying the level corrections were already recorded. The reconciliation creates no new unresolved or conflict IDs and does not erase existing findings. The current next unresolved ID remains `S3U-0888`.

QA is a cumulative structural and classification-consistency revalidation with focused source readback, not a fresh scientific re-extraction of all 140 resources or verification of historical execution claims. Revalidation annotations distinguish the repaired current state from the earlier unsupported PASS statements.

## Publication and continuation

Publish this reconciliation as one atomic fast-forward commit on the existing Stage-3 branch after parent-head and changed-path checks. Re-read the published reports and compare the exact intended paths afterward. No PR, merge, deployment, force push or history rewrite is part of this reconciliation.

Latest extraction remains **Stage3-S122 / CR000137**. Completed aggregate batch remains **SOB013, PASS (10/10)**. Current batch remains **SOB014, 0/10**. The exact next extraction is **Stage3-S123 / CR000138**, with **223** independently extractable resources remaining. Re-read the live branch and current reports before beginning that extraction.

No scientific workload was executed. Stage 1, Stage 2, accepted methodology/schemas, public Atlas/site files, `05-curated/` and `main` are unchanged.
