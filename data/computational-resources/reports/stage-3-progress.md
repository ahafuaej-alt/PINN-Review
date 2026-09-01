# Computational Resources Stage 3 — Progress

Status date: 2026-09-01

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S023 |
| Next scale-out checkpoint | Stage3-S024 |
| Last completed resource | CR000030 |
| Next resource | CR000031 |
| Next planned checkpoint resources | CR000031 |
| Current scale-out batch | SOB003 |
| Completed Stage-3 resource count | 37 |
| Remaining Stage-3 registry resource count | 327 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 64 |
| Completed configuration count | 167 |
| Technical evidence records | 439 |
| Static reproducibility assessments | 37 |
| Current QA status | PASS |
| Current unresolved technical item count | 143 |
| Next unresolved ID | S3U-0144 |
| Current conflicting-evidence finding count | 40 |
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

## Second scale-out batch

`SOB002` contains:

`CR000013`, `CR000014`, `CR000015`, `CR000016`, `CR000017`, `CR000018`, `CR000019`, `CR000020`, `CR000022`, `CR000023`.

Completed checkpoints:

- `Stage3-S007`: `CR000013`
- `Stage3-S008`: `CR000014`
- `Stage3-S009`: `CR000015`
- `Stage3-S010`: `CR000016`
- `Stage3-S011`: `CR000017`
- `Stage3-S012`: `CR000018`
- `Stage3-S013`: `CR000019`
- `Stage3-S014`: `CR000020`
- `Stage3-S015`: `CR000022`
- `Stage3-S016`: `CR000023`

The resource order remained fixed; all ten technically complex resources were isolated as adaptive single-resource checkpoints. Aggregate QA for `SOB002` is complete and passed.

## Third scale-out batch

`SOB003` begins with `CR000024`.

Completed checkpoints:

- `Stage3-S017`: `CR000024`
- `Stage3-S018`: `CR000025`
- `Stage3-S019`: `CR000026`
- `Stage3-S020`: `CR000027`
- `Stage3-S021`: `CR000028`
- `Stage3-S022`: `CR000029`
- `Stage3-S023`: `CR000030`

The batch remains open; the exact next resource is `CR000031`.

## Continuation rule

Every continuation must read the progress report, scale-out plan, unresolved register, and latest checkpoint QA; verify the current branch head; resume from the exact `Next resource`; resolve the final authoritative Stage-2 state first; use pinned Stage-2 repository snapshots where available; preserve source scope; perform no execution; validate all schemas/cross-references; update counts and the exact next resource; commit only after QA passes; and verify the post-commit diff before advancing.

## Unresolved-register rule

The unresolved register remains an audit trail. Existing `S3U-0001`–`S3U-0143` are preserved and the next ID is `S3U-0144`. Normal technical gaps and configuration-scoped conflicts do not stop scale-out when they can be scientifically bounded; they instead lower field confidence/status or reproducibility level as appropriate. Hard stops are limited to ontology/schema insufficiency, a material Stage-2 identity contradiction that prevents a defensible bounded record, unrecoverable cumulative reference-integrity failure, or a QA requirement that cannot be satisfied without violating the static-only boundary.

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
- `Stage3-S015`: `CR000022` — QA PASS; adaptive single-resource DOI-archive checkpoint with 1 integrated experiment, 4 configurations, 16 evidence records, and 1 reproducibility assessment.
- `Stage3-S016`: `CR000023` — QA PASS; adaptive single-resource DOI-archive checkpoint with 1 integrated experiment, 4 configurations, 15 evidence records, and 1 reproducibility assessment. Aggregate QA for ten-resource batch `SOB002` also passed.
- `Stage3-S017`: `CR000024` — QA PASS; adaptive single-resource paper-implementation checkpoint with 2 experiment groups, 6 configurations, 17 evidence records, and 1 reproducibility assessment.
- `Stage3-S018`: `CR000025` — QA PASS; adaptive single-resource repository-implementation checkpoint with 1 experiment, 1 configuration, 14 evidence records, and 1 reproducibility assessment.
- `Stage3-S019`: `CR000026` — QA PASS; adaptive single-resource supporting-library checkpoint with no artificial experiments/configurations, 11 evidence records, and 1 reproducibility assessment.
- `Stage3-S020`: `CR000027` — QA PASS; adaptive single-resource official paper-implementation checkpoint with 2 experiments, 2 configurations, 12 evidence records, and 1 reproducibility assessment.
- `Stage3-S021`: `CR000028` — QA PASS; adaptive single-resource unavailable-repository checkpoint with 3 paper-reported comparison experiments, 6 configurations, 13 evidence records, and 1 reproducibility assessment.
- `Stage3-S022`: `CR000029` — QA PASS; adaptive single-resource official PI-GGN checkpoint with 3 PDE-family experiments, 6 configurations, 15 evidence records, and 1 reproducibility assessment.
- `Stage3-S023`: `CR000030` — QA PASS; adaptive single-resource official elastodynamics checkpoint with 4 source-folder experiments, 4 configurations, 16 evidence records, and 1 reproducibility assessment.

## Exact next action

Start **`Stage3-S024`** with **`CR000031`**.
