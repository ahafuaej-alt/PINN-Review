# Computational Resources Stage 3 — Progress

Status date: 2026-08-31

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S004 |
| Next scale-out checkpoint | Stage3-S005 |
| Last completed resource | CR000007 |
| Next resource | CR000008 |
| Next planned checkpoint resources | CR000008, CR000009 |
| Current scale-out batch | SOB001 |
| Completed Stage-3 resource count | 16 |
| Remaining Stage-3 registry resource count | 348 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 30 |
| Completed configuration count | 92 |
| Technical evidence records | 180 |
| Static reproducibility assessments | 16 |
| Current QA status | PASS |
| Current unresolved technical item count | 41 |
| Next unresolved ID | S3U-0042 |
| Current conflicting-evidence finding count | 11 |
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

Planned checkpoints:

- `Stage3-S001`: `CR000001`, `CR000002`
- `Stage3-S002`: `CR000004`, `CR000005`
- `Stage3-S003`: `CR000006`, `CR000007`
- `Stage3-S004`: `CR000008`, `CR000009`
- `Stage3-S005`: `CR000011`, `CR000012`

The resource order is fixed; checkpoint pairing may shrink to one resource if complexity requires it.

## Continuation rule

Every continuation must read the progress report, scale-out plan, unresolved register, and latest checkpoint QA; verify the current branch head; resume from the exact `Next resource`; resolve the final authoritative Stage-2 state first; use pinned Stage-2 repository snapshots where available; preserve source scope; perform no execution; validate all schemas/cross-references; update counts and the exact next resource; commit only after QA passes; and verify the post-commit diff before advancing.

## Unresolved-register rule

The unresolved register remains an audit trail. Existing `S3U-0001`–`S3U-0023` are preserved and the next ID is `S3U-0024`. Normal technical gaps and configuration-scoped conflicts do not stop scale-out when they can be scientifically bounded; they instead lower field confidence/status or reproducibility level as appropriate. Hard stops are limited to ontology/schema insufficiency, a material Stage-2 identity contradiction that prevents a defensible bounded record, unrecoverable cumulative reference-integrity failure, or a QA requirement that cannot be satisfied without violating the static-only boundary.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. Stage 3 remains static-only: no scientific resource, environment, dependency, notebook, training process, inference workflow, solver, dataset payload, checkpoint, or model is executed. R5 remains prohibited.

## Completed scale-out checkpoints

- `Stage3-S001`: `CR000001`, `CR000002` — QA PASS; 2 resources, 1 experiment, 1 configuration, 15 evidence records, and 2 reproducibility assessments.
- `Stage3-S002`: `CR000004` — QA PASS; adaptive single-resource checkpoint with 3 experiments, 3 configurations, 10 evidence records, and 1 reproducibility assessment.
- `Stage3-S003`: `CR000005` — QA PASS; 1 appendix resource, no artificial experiments/configurations, 6 evidence records, and 1 reproducibility assessment.
- `Stage3-S004`: `CR000006`, `CR000007` — QA PASS; 2 resources, 3 experiments, 5 configurations, 18 evidence records, and 2 reproducibility assessments.

## Exact next action

Start **`Stage3-S005`** with **`CR000008`**, then `CR000009` if `CR000008` remains suitable for a paired checkpoint.
