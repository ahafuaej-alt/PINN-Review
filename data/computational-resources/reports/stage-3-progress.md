# Computational Resources Stage 3 — Progress

Status date: 2026-09-01

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S014 |
| Next scale-out checkpoint | Stage3-S015 |
| Last completed resource | CR000020 |
| Next resource | CR000022 |
| Next planned checkpoint resources | CR000022 |
| Current scale-out batch | SOB002 |
| Completed Stage-3 resource count | 28 |
| Remaining Stage-3 registry resource count | 336 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 47 |
| Completed configuration count | 134 |
| Technical evidence records | 310 |
| Static reproducibility assessments | 28 |
| Current QA status | PASS |
| Current unresolved technical item count | 83 |
| Next unresolved ID | S3U-0084 |
| Current conflicting-evidence finding count | 23 |
| Methodology status | Stage3-D01 accepted without schema change |
| Acceptance record | `reports/stage-3-pilot-acceptance.md` |
| Scale-out plan | `reports/stage-3-scale-out-plan.md` |
| Machine-readable scale-out plan | `03-technical/scale-out-plan.json` |

## Scale-out operating state

The Stage3-D01 methodology and existing schemas are scientifically accepted. Controlled scale-out began with QA-passed checkpoint `Stage3-S001`, covering `CR000001` and `CR000002`.

Resource ordering is deterministic ascending numeric `CR######` order after excluding the ten pilot-complete resources. Final authoritative Stage-2 overlays supersede older batch fields where explicitly recorded; historical Stage-2 records remain provenance.

The normal extraction unit is a checkpoint of **two resources maximum**. Complex resources become single-resource checkpoints. Ten resources form one scale-out batch for aggregate QA.

## First scale-out batch

`SOB001` contains:

`CR000001`, `CR000002`, `CR000004`, `CR000005`, `CR000006`, `CR000007`, `CR000008`, `CR000009`, `CR000011`, `CR000012`.

Completed checkpoints:

- `Stage3-S001`: `CR000001`, `CR000002`
- `Stage3-S002`: `CR000004`
- `Stage3-S003`: `CR000005`
- `Stage3-S004`: `CR000006`, `CR000007`
- `Stage3-S005`: `CR000008`, `CR000009`
- `Stage3-S006`: `CR000011`, `CR000012`

The resource order remained fixed; adaptive checkpoint sizing produced six checkpoints. Aggregate QA for `SOB001` is complete and passed.

## Continuation rule

Every continuation must read the progress report, scale-out plan, unresolved register, and latest checkpoint QA; verify the current branch head; resume from the exact `Next resource`; resolve the final authoritative Stage-2 state first; use pinned Stage-2 repository snapshots where available; preserve source scope; perform no execution; validate all schemas/cross-references; update counts and the exact next resource; commit only after QA passes; and verify the post-commit diff before advancing.

## Unresolved-register rule

The unresolved register remains an audit trail. Existing `S3U-0001`–`S3U-0083` are preserved and the next ID is `S3U-0084`. Normal technical gaps and configuration-scoped conflicts do not stop scale-out when they can be scientifically bounded; they instead lower field confidence/status or reproducibility level as appropriate. Hard stops are limited to ontology/schema insufficiency, a material Stage-2 identity contradiction that prevents a defensible bounded record, unrecoverable cumulative reference-integrity failure, or a QA requirement that cannot be satisfied without violating the static-only boundary.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. Stage 3 remains static-only: no scientific resource, environment, dependency, notebook, training process, inference workflow, solver, dataset payload, checkpoint, or model is executed. R5 remains prohibited.

## Completed scale-out checkpoints

- `Stage3-S001`: `CR000001`, `CR000002` — QA PASS; 2 resources, 1 experiment, 1 configuration, 15 evidence records, and 2 reproducibility assessments.
- `Stage3-S002`: `CR000004` — QA PASS; adaptive single-resource checkpoint with 3 experiments, 3 configurations, 10 evidence records, and 1 reproducibility assessment.
- `Stage3-S003`: `CR000005` — QA PASS; 1 appendix resource, no artificial experiments/configurations, 6 evidence records, and 1 reproducibility assessment.
- `Stage3-S004`: `CR000006`, `CR000007` — QA PASS; 2 resources, 3 experiments, 5 configurations, 18 evidence records, and 2 reproducibility assessments.
- `Stage3-S005`: `CR000008`, `CR000009` — QA PASS; 2 resources, 2 experiments, 2 configurations, 16 evidence records, and 2 reproducibility assessments.
- `Stage3-S006`: `CR000011`, `CR000012` — QA PASS; 2 resources, 2 experiments, 2 configurations, 16 evidence records, and 2 reproducibility assessments. Aggregate QA for ten-resource batch `SOB001` also passed.
- `Stage3-S007`: `CR000013` — QA PASS; adaptive single-resource checkpoint with 2 experiments, 3 configurations, 10 evidence records, and 1 reproducibility assessment.
- `Stage3-S008`: `CR000014` — QA PASS; adaptive single-resource checkpoint with 1 pretrained trial experiment, 2 configurations, 9 evidence records, and 1 reproducibility assessment.
- `Stage3-S009`: `CR000015` — QA PASS; adaptive single-resource checkpoint with 3 dataset-family experiments, 9 model configurations, 10 evidence records, and 1 reproducibility assessment.
- `Stage3-S010`: `CR000016` — QA PASS; adaptive single-resource framework checkpoint with no artificial experiments/configurations, 10 evidence records, and 1 reproducibility assessment.
- `Stage3-S011`: `CR000017` — QA PASS; adaptive single-resource checkpoint with 1 UIEB experiment, 5 model configurations, 12 evidence records, and 1 reproducibility assessment.
- `Stage3-S012`: `CR000018` — QA PASS; adaptive single-resource supporting-library checkpoint with no artificial experiments/configurations, 10 evidence records, and 1 reproducibility assessment.
- `Stage3-S013`: `CR000019` — QA PASS; adaptive single-resource paper-implementation checkpoint with 3 benchmark experiments, 12 configurations, 19 evidence records, and 1 reproducibility assessment.
- `Stage3-S014`: `CR000020` — QA PASS; adaptive single-resource paper-implementation checkpoint with 3 experiment families, 7 configurations, 18 evidence records, and 1 reproducibility assessment.

## Exact next action

Start **`Stage3-S015`** with **`CR000022`**; `CR000021` remains excluded because it is pilot-complete.
