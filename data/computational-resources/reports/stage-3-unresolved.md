# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-05  
Current checkpoint: `Stage3-S084`  
Current batch: `SOB009` (9/10)  
Current unresolved count: **645**  
Next unresolved ID: `S3U-0646`  
Explicit conflict count: **100**

## Stage3-S084 additions — CR000096

- `S3U-0640` — No repository license is present at the final Stage-2 pinned snapshot.
- `S3U-0641` — No dependency/environment manifest or package-version specification is present, so the Python/PyTorch/SciPy/SymPy/h5py runtime stack cannot be reconstructed exactly from the repository.
- `S3U-0642` — No installation procedure or hardware provenance is documented.
- `S3U-0643` — The Burgers workflow loads external `burgers_shock.mat`; the file is not bundled in the four-file pinned tree and is only linked by a source-code comment to the external `maziarraissi/PINNs` data directory.
- `S3U-0644` — **Explicit conflict:** `main.py`, `BB.py`, and `BB4.py` expose a configurable `--device` control, but the gate-network pretraining paths in `BB.py` and `BB4.py` directly construct tensors with `.cuda()`, so those APINN paths are not device-agnostic as the CLI surface suggests.
- `S3U-0645` — Canonical trained checkpoints and expected-result artifacts are not present in the pinned four-file repository tree.

One new explicit conflict is recorded (`S3U-0644`).

## Continuation

No Stage-3 hard stop is active. Exact next independently extractable resource: `CR000097`.
