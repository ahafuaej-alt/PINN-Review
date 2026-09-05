# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-06  
Current checkpoint: `Stage3-S086`  
Current batch: `SOB010` (1/10)  
Current unresolved count: **657**  
Next unresolved ID: `S3U-0658`  
Explicit conflict count: **100**

## Stage3-S086 additions — CR000098

- `S3U-0652` — No repository license is present at the final Stage-2 pinned snapshot.
- `S3U-0653` — `PINN/requirements.txt` pins the deterministic PINN stack, but it does not specify the complete Bayesian PINN, PyMC3/Theano, or SA-PINN dependency environments, so the repository does not provide one reconstructable software stack for all four workflows.
- `S3U-0654` — No installation procedure or top-level workflow documentation is present at the pinned snapshot.
- `S3U-0655` — Hardware provenance is not documented; the B-PINN and SA-PINN entrypoints explicitly force CPU execution, but the hardware used to produce the bundled study results is not stated.
- `S3U-0656` — Deterministic seeds are explicit for SA-PINN but are not consistently documented across the deterministic PINN, B-PINN/HMC, and analytical Bayesian workflows.
- `S3U-0657` — Bundled result artifacts exist, but canonical command-to-artifact provenance and trained checkpoints are not documented.

No new explicit conflict is recorded in S086. The analytical Bayesian workflow is preserved as a source-scoped non-PINN comparator rather than treated as contradictory evidence.

## Continuation

No Stage-3 hard stop is active. Exact next independently extractable resource: `CR000099`.
