# Computational Resources Stage 3 — Unresolved Technical Findings

Verification/extraction date: 2026-09-04  
Checkpoint: Stage3-S067  
Phase: controlled scale-out in progress

## Audit continuity

The append-only register through `Stage3-S056` remains preserved in `reports/stage-3-unresolved-through-s056.md` as `S3U-0001`–`S3U-0437`. `Stage3-S057`–`Stage3-S066` added `S3U-0438`–`S3U-0513`. This active register continues without renumbering or deletion.

## Stage3-S067 additions

| ID | Resource | Outcome | Severity | Finding | Effect |
|---|---|---|---|---|---|
| S3U-0514 | CR000076 | `repository_unavailable` | high | Final Stage-2 authority records `sjiang23/trapz-PiNN` as unavailable, and a fresh Stage3-S067 GitHub repository API check still returns 404. | No usable source/equivalent technical artifact is available; reproducibility is R0. |
| S3U-0515 | CR000076 | `immutable_revision_not_available` | high | Stage 2 could not resolve a default branch or immutable repository revision, and Stage 3 cannot resolve one while the repository is unavailable. | No pinned source snapshot exists for technical extraction. |
| S3U-0516 | CR000076 | `paper_relationship_not_verified` | medium | `PRL000168` to Atlas paper 543 remains `not_verified` and manual-review-required in final Stage-2 authority. | Stage 3 retains the candidate relationship without promotion. |
| S3U-0517 | CR000076 | `artifact_scope_not_available` | medium | Source files, dependency/environment files, data, checkpoints, documentation, and license evidence cannot be inspected from the unavailable repository. | Experiment/configuration records are not manufactured and technical fields remain unavailable/unknown as appropriate. |
| S3U-0518 | CR000077 | `conflicting_evidence` | high | Final Stage-2 authority marks `PRL000169` to Atlas paper 544 as verified and records a Zobeiry/Humayun 2021 README citation, while the authoritative pinned README instead cites Mavi–Bekar–Haghighat–Madenci 2022, arXiv:2210.12177. | Stage-2 authority is preserved, but the paper–repository citation evidence requires later adjudication. |
| S3U-0519 | CR000077 | `repository_license_unknown` | medium | Final Stage-2 license state is `unknown`, and the pinned recursive tree contains no license file. | License clarity remains unresolved. |
| S3U-0520 | CR000077 | `external_dataset_required` | high | The main pipeline requires `../Dataset/dataset.npy`, but the pinned tree contains no `Dataset` directory; README points to external data-generation repositories. | R3/R4 advancement is blocked and the reference workflow is not snapshot-self-contained. |
| S3U-0521 | CR000077 | `random_seed_not_reported` | medium | The inspected pipeline sets no explicit seed while NumPy/TensorFlow stochastic initializers and random comparison-point selection are used. | Exact stochastic replay is not controlled. |
| S3U-0522 | CR000077 | `pretrained_checkpoint_absent` | low | The source writes checkpoints during training, but no pretrained model checkpoint is bundled in the pinned tree. | Static result-level replay cannot start from an archived trained state. |
| S3U-0523 | CR000077 | `benchmark_scope_not_code_parameterized` | medium | README documents Burgers, lambda-omega reaction-diffusion, and Gray-Scott benchmarks, while the bounded inspected main pipeline/model procedure exposes one hard-coded vector advection-diffusion/Burgers-form PDDO residual. | Additional benchmark configurations are not synthesized without direct implementation evidence. |

## Current register state

- Current unresolved finding count: **523**.
- Next available unresolved ID: **`S3U-0524`**.
- Explicit `conflicting_evidence` finding count: **95**; S067 adds one explicit conflict.

## Source-scope handling

`CR000076` retains `not_available` repository semantics and `unknown` license semantics exactly; those states are not converted into `false` or `not_applicable`.

`CR000077` retains final Stage-2 relationship status while separately preserving the pinned README citation as conflicting repository evidence. README benchmark claims are retained as documentation; only the directly inspected reference pipeline is represented as implemented code.

## Escalation state

No Stage-2 file is modified and no Stage-2 relationship is silently re-adjudicated. The CR000077 citation mismatch is consequential but representable by accepted `conflicting_evidence` semantics, so it does not require a Stage-3 hard stop or schema/methodology change.

`SOB008` is in progress at **2 / 10**. Aggregate QA is not yet due. The exact next independently extractable resource is `CR000078`.
