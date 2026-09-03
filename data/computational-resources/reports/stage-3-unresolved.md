# Computational Resources Stage 3 — Unresolved Technical Findings

Verification/extraction date: 2026-09-03  
Checkpoint: Stage3-S048  
Phase: controlled scale-out in progress

## Audit continuity

The complete append-only register through `Stage3-S047` is preserved verbatim in `reports/stage-3-unresolved-through-s047.md` and contains `S3U-0001`–`S3U-0362`. This active register continues that identifier sequence; historical findings are not renumbered, deleted, or reinterpreted.

## Stage3-S048 additions

| ID | Resource | Outcome | Severity | Finding | Effect |
|---|---|---|---|---|---|
| S3U-0363 | CR000049 | `transitive_dependency_lock_unavailable` | medium | PyTorch declares build and development dependencies with a mixture of lower bounds and unversioned requirements, but no single complete transitive lock covers all supported build/runtime variants. | Exact environment resolution remains variant-dependent. |
| S3U-0364 | CR000049 | `platform_accelerator_matrix_partial` | medium | Source-build documentation supports CPU, NVIDIA CUDA, AMD ROCm, and Intel GPU paths that depend on external compiler, driver, accelerator, and compatibility selections. | One exact cross-platform hardware/runtime matrix cannot be reconstructed from the repository alone. |
| S3U-0365 | CR000049 | `build_variant_selection_unfixed` | medium | The framework intentionally exposes multiple valid source-build and binary-install contracts rather than one canonical paper/application environment. | Framework-level R2 is supportable, but a unique application environment is not implied. |
| S3U-0366 | CR000049 | `example_execution_unverified` | low | Framework examples and documentation were inspected only as capability evidence and were not executed under the Stage-3 static-only boundary. | Example runtime behavior remains unverified here. |
| S3U-0367 | CR000049 | `test_execution_unverified` | low | The repository contains broad test/CI infrastructure, but no test suite was executed in Stage 3. | Runtime regression status remains unverified here. |
| S3U-0368 | CR000049 | `paper_result_bundle_not_applicable` | low | PRL000130 is a software-mention relationship from an automatic-differentiation survey; CR000049 does not deposit a paper-specific dataset, checkpoint, or generated result bundle for Atlas paper 467. | The relationship remains framework/software context rather than reproduced paper results. |

## Current register state

- Historical findings preserved: **362** (`S3U-0001`–`S3U-0362`).
- New Stage3-S048 findings: **6** (`S3U-0363`–`S3U-0368`).
- Current unresolved finding count: **368**.
- Next available unresolved ID: **`S3U-0369`**.
- Explicit `conflicting_evidence` finding count: **81**; Stage3-S048 adds no new conflict.

## Source-scope handling

`CR000049` remains the Stage-2-pinned PyTorch supporting-software identity at commit `8e386332abed96515b823073c931e691d69ff921`. `PRL000130` remains strictly a `paper_software_mention` to Atlas paper 467. Framework capabilities, installation metadata, automatic differentiation, licensing, and citation information are therefore recorded at resource scope; no paper-specific experiment or configuration is manufactured.

`CR000021` remains Stage-2 provenance for a broken `fashli/Delta-PINNs` source identity that was canonically resolved to `CR000184` / `fsahli/Delta-PINNs` through `PRL000332`. It is not independently re-extracted in Stage 3 because that would duplicate the canonical CR000184 technical resource. This is a resolved Stage-2 identity disposition, not an unresolved Stage-3 scientific finding.

## Conflict handling

Eighty-one explicit `conflicting_evidence` findings exist through `Stage3-S048`. The CR000049 limitations are environment/platform scope and static-verification gaps; none requires a new consequential source conflict.

## Escalation state

No Stage-2 identity or relationship change is required. Stage 1 and Stage 2 remain closed and unchanged. `Stage3-S048` repairs the omitted CR000049 extraction and reconciles overdue aggregate QA for `SOB003`, `SOB004`, and `SOB005` without rewriting historical checkpoint files or Git history.

The active batch is `SOB006`, whose already completed members are `CR000054` and `CR000055`. `CR000056` is pilot-complete and must not be reprocessed. The exact next independently extractable resource is `CR000057`. No unresolved item requires scientific workload execution within Stage 3; runtime, external-payload, binary, build, test, training, inference, or benchmark execution remains outside the static-only boundary.
