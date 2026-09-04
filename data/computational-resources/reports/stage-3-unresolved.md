# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-05  
Current checkpoint: `Stage3-S079`  
Current batch: `SOB009` (4/10)  
Current unresolved count: **615**  
Next unresolved ID: `S3U-0616`  
Explicit conflict count: **98**

## Stage3-S079 additions — CR000090

- `S3U-0609` — Repository-level installation documentation is minimal despite the explicit Conda package manifest.
- `S3U-0610` — Exact hardware provenance is not documented by the bounded static inspection.
- `S3U-0611` — The archived result/checkpoint surface lacks a single explicit paper-to-entrypoint-to-artifact result crosswalk.
- `S3U-0612` — The pinned explicit environment is Linux-64/Python 3.7; portability to other platforms is not documented.
- `S3U-0613` — Archived checkpoints and NPZ result artifacts are present, but canonical expected-result targets are not uniformly documented for every configuration.
- `S3U-0614` — Final Stage-2 authority did not inventory the pinned `DAE-PINNs-req.txt`; Stage 3 preserves Stage-2 authority while recording the manifest as pinned-source evidence rather than retroactively changing Stage 2.
- `S3U-0615` — Repository documentation is too sparse to establish a complete provenance map for every analysis script and archived log variant beyond the bounded principal workflows.

One new explicit conflict is recorded: CLI `--no-cuda` controls coexist with forced CUDA/device-selection logic in inspected entrypoints. Both source-scoped claims are preserved.

## Continuation

No Stage-3 hard stop is active. Exact next independently extractable resource: `CR000091`.
