# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-07  
Current checkpoint: `Stage3-S104`  
Latest completed batch: `SOB011` — **PASS**  
Current batch: `SOB012` (0/10)  
Current unresolved count: **767**  
Next unresolved ID: `S3U-0768`  
Explicit conflict count: **103**

## Stage3-S104 additions — CR000117

- `S3U-0762` — Archive-internal file inventory and source-text payload for DOI `10.5281/zenodo.8014136` were not directly inspectable through the bounded interface.
- `S3U-0763` — No reconstructable software environment or pinned dependency manifest is established by the inspected Stage-2 and primary-paper evidence.
- `S3U-0764` — Installation procedure, executable entry point, and invocation commands for the archived supplementary code remain unknown.
- `S3U-0765` — Random-seed and stochastic-control provenance for the released code remain unknown.
- `S3U-0766` — Trained artifacts and machine-readable expected-output files were not established through the bounded evidence.
- `S3U-0767` — The paper documents the scientific workflow and separate data DOI, but exact source-to-paper parameter correspondence and code-level data-loading/preprocessing wiring remain unverified.

S104 adds **0 explicit conflicts**. Cumulative explicit conflict count remains **103**.

## SOB011 closure

`SOB011` completed `CR000108–CR000117` with aggregate QA **PASS**. Batch additions reconcile to 10 resources, 5 experiments, 10 configurations, 80 evidence records, 10 reproducibility assessments, 58 unresolved findings, and 2 explicit conflicts.

## Continuation

Continue from `S3U-0768` only if a later checkpoint generates a genuinely new unresolved finding. Preserve the cumulative unresolved/conflict counts above. Exact next resource is `CR000118` for `Stage3-S105`.
