# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-05  
Current checkpoint: `Stage3-S083`  
Current batch: `SOB009` (8/10)  
Current unresolved count: **639**  
Next unresolved ID: `S3U-0640`  
Explicit conflict count: **99**

## Stage3-S083 additions — CR000095

- `S3U-0636` — **Explicit conflict:** the pinned README states that all experiments used a single NVIDIA GeForce A6000 GPU, while `scripts/run.sh` explicitly assigns the six documented configurations across `cuda:0`, `cuda:1`, `cuda:2`, and `cuda:3`; the source-scoped hardware/device-control inconsistency is preserved without reconciliation.
- `S3U-0637` — The extensive `pinnhash.yml` environment pins many packages but leaves several pip dependencies, including `torch`, `torchvision`, `torchaudio`, `ptflops`, and `pyyaml`, without explicit versions.
- `S3U-0638` — The documented 16-Hz Gabor command does not explicitly set a random seed, whereas the other 4-Hz and 16-Hz commands set seeds 9999 or 3407.
- `S3U-0639` — `scripts/run.sh` contains user-editable absolute placeholders for `tb_root`, `run_root`, and `data_root`, so the archived command surface is not path-complete without local configuration.

One new explicit conflict is recorded (`S3U-0636`).

## Continuation

No Stage-3 hard stop is active. Exact next independently extractable resource: `CR000096`.
