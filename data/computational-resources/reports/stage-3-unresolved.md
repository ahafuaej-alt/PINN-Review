# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-07  
Current checkpoint: `Stage3-S102`  
Current batch: `SOB011` (8/10)  
Current unresolved count: **755**  
Next unresolved ID: `S3U-0756`  
Explicit conflict count: **103**

## Stage3-S102 additions — CR000115

- `S3U-0746` — No repository license was identified at the authoritative pinned LESnets snapshot.
- `S3U-0747` — No dependency manifest is present; the README specifies Python 3.9.13 and PyTorch 1.12.1+cu116 but leaves NumPy unpinned.
- `S3U-0748` — No explicit installation procedure is identified; under the gated reproducibility model this blocks advancement to R2.
- `S3U-0749` — Repository YAML configurations embed provider-local absolute `/work/mae-zhaosn/...` data paths, so the externally documented dataset requires manual path remapping.
- `S3U-0750` — The training entrypoint generates a random seed when `--seed` is omitted; no stable repository-default seed is provided.
- `S3U-0751` — Runtime hardware provenance and a reconstructable acceptance environment are not documented.
- `S3U-0752` — Provider-bundled trained checkpoints or an equivalent acceptance package were not established in the bounded pinned repository surface.
- `S3U-0753` — The README-cited SGS-coefficient-learning configuration uses only 31 total iterations whereas the principal DHIT physics-informed configuration uses 30001; the short setting is not explained.
- `S3U-0754` — **Explicit conflict:** `config/TML/PI_FNO_L20_W150_M12_data2000_g0_gp0.yaml` is named as an FNO configuration but internally declares `model.name: IFNO`.
- `S3U-0755` — **Explicit conflict:** `train_pino.py` selects CPU when CUDA is unavailable but then unconditionally calls `torch.cuda.get_device_properties(device)`, making the advertised CPU fallback internally inconsistent.

S102 adds **2 explicit conflicts**. Cumulative explicit conflict count is **103**.

## Batch status

`SOB011` is 8/10 after S102. Aggregate batch QA is not yet due.

## Continuation

Continue from `S3U-0756` only if a later checkpoint generates a genuinely new unresolved finding. Preserve the cumulative unresolved/conflict counts above.
