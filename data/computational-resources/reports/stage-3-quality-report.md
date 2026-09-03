# Computational Resources Stage 3 — Quality Report

Status date: 2026-09-03  
Acceptance checkpoint: Stage3-A01  
Pilot extraction checkpoint: Stage3-P07  
Latest scale-out checkpoint: Stage3-S050

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

`CR000058` preserves the Stage-2-pinned `ehsankharazmi/hp-VPINNs` repository at commit `1b9773567a7d00d38583f6fb89d5a9ba9d900ae7`, MIT licensing, and `PRL000141` as the official relationship to Atlas paper 493.

The repository contains four materially distinct paper-related scientific cases, represented as four experiments and four active default configurations:

1. **1D Poisson hp-VPINN** — one-element variational run, sinusoidal network activation, 60 test functions and 80 quadrature points.
2. **2D Poisson VPINN** — active VPINN scheme on a 4×4 domain decomposition with tanh network and first integration-by-parts form.
3. **L-shaped 2D Poisson hp-VPINN** — active three-element L-shaped decomposition with bundled reference NPY arrays.
4. **Advection-diffusion coefficient identification** — inverse identification of trainable diffusion coefficient `epsilon` using sparse interior observations and a synthetic Fourier-series reference solution.

Inactive `PINNs`/`VPINNs` switches, alternative variational forms, and alternative L-shaped element counts are retained as code option space and are not inflated into configurations.

Sixteen evidence records cover identity/relationship scope, README paper scope, repository/environment surface, all four case methods and active configurations, bundled result/data metadata, L-shaped masking behavior, advection-diffusion synthetic observation generation, result-path provenance, and the static-only boundary.

Static reproducibility is **R2**. Source, license, entrypoints, mathematics, architectures, optimization settings, seeds, quadrature/test-function settings, synthetic data generation, and result/data artifact presence are recoverable. R3 is withheld because there is no dependency/environment manifest, imported package versions are unpinned, installation is undocumented, hardware specification is case-partial, bundled results lack an exact run manifest, no model checkpoints are identified, and binary NPY/MAT payloads remain unopened.

Checkpoint additions:

- resources: **1**
- experiments: **4**
- configurations: **4**
- technical-evidence records: **16**
- reproducibility assessments: **1**
- unresolved findings: **10**
- new explicit conflicts: **0**

No dependency, TensorFlow session, training, prediction, quadrature workflow, binary NPY/MAT payload, result regeneration, test, or benchmark was executed.

## Stage3-S050 control-policy deviation

The normal policy requires one completed checkpoint commit after QA. S050 contains a preserved isolated pre-QA draft commit (`d12157f74aa8397b9e6e867aa8947548df9dfb2e`) that introduced only the resource record before final checkpoint assembly. The completion commit adds the remaining S050 artifacts and report updates. No force push, rebase, squash, or history rewrite is used. The deviation has **no scientific-count, ontology, source-authority, or path-scope effect** and is explicitly recorded in machine-readable S050 QA.

## Aggregate batch state

Canonical aggregate QA remains complete and passing for `SOB001`–`SOB005`.

`SOB006` is **IN PROGRESS** with four independently extractable completed members:

- `CR000054` — Stage3-S046
- `CR000055` — Stage3-S047
- `CR000057` — Stage3-S049
- `CR000058` — Stage3-S050

`CR000056` and `CR000059` are pilot-complete and are not reprocessed. Aggregate QA is not due until ten canonical SOB006 members are complete.

## Current cumulative totals

After `Stage3-S050`:

- technical resource records: **64**
- experiments: **116**
- configurations: **258**
- technical-evidence records: **862**
- static reproducibility assessments: **64**
- unresolved findings: **386**
- explicit conflicting-evidence findings: **84**

## Registry accounting

The Stage-2 closure registry contains 364 entries. `CR000021` remains provenance for a non-independent identity canonically resolved to `CR000184`, leaving 363 independently extractable technical identities. With 64 completed Stage-3 resource records, **299** remain.

## Continuation QA

The forward frontier is `CR000058`. `CR000059` is already pilot-complete. The exact next independently extractable resource is therefore **`CR000060`**, to be processed as `Stage3-S051` within `SOB006`.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific workload execution occurred. R5 remains prohibited.
