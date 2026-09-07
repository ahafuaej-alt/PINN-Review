# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-07  
Current checkpoint: `Stage3-S108`  
Latest completed batch: `SOB011` — **PASS**  
Current batch: `SOB012` (4/10)  
Current unresolved count: **794**  
Next unresolved ID: `S3U-0795`  
Explicit conflict count: **107**

## Stage3-S108 additions — CR000121

- `S3U-0787` — No repository license was identified at the authoritative Stage-2 TF-Net snapshot.
- `S3U-0788` — The README's `pip install -r requirements.txt` instruction is not statically reconstructable because the manifest mixes package and environment-manager/runtime entries.
- `S3U-0789` — The README prose names `data_prep.py`, while its executable command and pinned root tree use `data_gen.py`; `data_prep.py` is absent.
- `S3U-0790` — The RBC dataset is external and was not downloaded or inspected under the static-only boundary.
- `S3U-0791` — No released trained checkpoint was verified for the bounded TF-Net workflow.
- `S3U-0792` — No fixed machine-readable numerical acceptance target was verified for the bounded TF-Net workflow.
- `S3U-0793` — Hardware is only partially specified through CUDA-oriented dependencies and source behavior; no complete reproducible hardware profile is documented.
- `S3U-0794` — The requirements manifest names `pytorch==1.11.0` while the source imports `torch`; combined with non-pip entries, this prevents treating the manifest as a verified pip environment specification.

S108 adds **2 explicit conflicts**, corresponding to the preprocessing-filename mismatch and installation-manifest inconsistency. Cumulative explicit conflict count is **107**.

## Batch status

`SOB012` is **4/10** after CR000121. Aggregate QA is not yet due; `SOB011` remains the latest completed aggregate batch with **PASS** status.

## Continuation

Continue from `S3U-0795` only if a later checkpoint generates a genuinely new unresolved finding. Exact next resource is `CR000122` for `Stage3-S109`.
