# Computational Resources Stage 3 — Unresolved Technical Findings

Verification/extraction date: 2026-09-04  
Checkpoint: Stage3-S065  
Phase: controlled scale-out in progress

## Audit continuity

The append-only register through `Stage3-S056` remains preserved in `reports/stage-3-unresolved-through-s056.md` as `S3U-0001`–`S3U-0437`. `Stage3-S057` added `S3U-0438`–`S3U-0445`; `Stage3-S058` added `S3U-0446`–`S3U-0451`; `Stage3-S059` added `S3U-0452`–`S3U-0458`; `Stage3-S060` added `S3U-0459`–`S3U-0465`; `Stage3-S061` added `S3U-0466`–`S3U-0473`; `Stage3-S062` added `S3U-0474`–`S3U-0482`; `Stage3-S063` added `S3U-0483`–`S3U-0490`; `Stage3-S064` added `S3U-0491`–`S3U-0498`. This active register continues without renumbering or deletion.

## Stage3-S065 additions

| ID | Resource | Outcome | Severity | Finding | Effect |
|---|---|---|---|---|---|
| S3U-0499 | CR000074 | `atlas_relationship_not_verified` | medium | Final Stage-2 authority retains PRL000163 to Atlas paper 536 as not_verified because the paper cites Adam D. Cobb's HMC work but does not identify hamiltorch or the corrected repository URL. | The paper relationship remains manual-review evidence and is not promoted to scientific provenance. |
| S3U-0500 | CR000074 | `dependency_versions_partially_unpinned` | medium | `setup.py` requires `torch>=1.6.0` but leaves NumPy and termcolor unpinned. | Exact environment reconstruction is not established. |
| S3U-0501 | CR000074 | `exact_environment_lock_absent` | medium | No lockfile or complete immutable environment specification is present at the pinned snapshot. | Static reproducibility remains R1. |
| S3U-0502 | CR000074 | `installation_target_mutable` | low | The README installation command installs directly from the repository default rather than an immutable commit/tag. | Following documentation at a later date may resolve a different code state than the Stage-2 pin. |
| S3U-0503 | CR000074 | `runtime_platform_provenance_incomplete` | medium | Notebook metadata records Python 3.8.8, but exact PyTorch/NumPy/matplotlib, OS, and multiprocessing runtime versions are not captured. | Runtime-level replay remains under-specified. |
| S3U-0504 | CR000074 | `hardware_provenance_incomplete` | low | The notebook states that shown timings are from a Mac but gives no exact CPU, memory, or machine specification. | Machine-specific timing reproduction is not established. |
| S3U-0505 | CR000074 | `archived_timing_not_benchmark_provenance` | low | Serial/parallel wall times and a separate Linux speed-up observation are archived notebook observations without controlled benchmark provenance. | Timing values are retained only as source-scoped notebook evidence, not generalized performance claims. |

## Current register state

- Current unresolved finding count: **505**.
- Next available unresolved ID: **`S3U-0506`**.
- Explicit `conflicting_evidence` finding count: **93**; S065 adds no explicit conflicts.

## Source-scope handling

`CR000074` preserves final Stage-2 authority for `https://github.com/AdamCobb/hamiltorch`, pinned commit `19b627b2aabc77c1b4b78db0f860372eb1bf9778`, BSD-2-Clause license, and PRL000163 to Atlas paper 536 as `not_verified` with manual review required.

The resource is represented as **supporting probabilistic-inference software**. Its HMC/RMHMC/NUTS and Bayesian-neural-network capability is taken from the pinned repository itself; no PINN/PDE implementation claim is inferred from Atlas paper 536.

## Escalation state

No Stage-2 identity or relationship change is required. No schema or methodology change is required. The relationship uncertainty and reproducibility gaps are representable by accepted Stage-3 semantics and do not satisfy a hard-stop criterion.

`SOB007` now has **9 / 10** canonical members complete; aggregate batch QA is not yet due. The exact next independently extractable resource is `CR000075`.
