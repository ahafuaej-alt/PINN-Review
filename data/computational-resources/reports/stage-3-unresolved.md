# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-11
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S185`

## Current totals

- Unresolved findings: **1258**
- Explicit conflicts: **141**
- Next unresolved ID: `S3U-1259`

## New findings in S185

- `S3U-1254` — CR000207 / license / high: No repository license is identified at the pinned commit.
- `S3U-1255` — CR000207 / data / high: No data, model checkpoint, or result file is bundled in the complete 38-file pinned snapshot; representative training scripts reference local problem-data paths.
- `S3U-1256` — CR000207 / environment / medium: `requirements.txt` pins a large JAX/CUDA environment and README provides installation, but exact environment recreation is not tested within the static-execution boundary.
- `S3U-1257` — CR000207 / hardware / medium: Hardware provenance is not documented; CUDA-pinned packages do not establish actual execution hardware.
- `S3U-1258` — CR000207 / relationship / medium: The repository provides DOI `10.1016/j.cma.2026.118917` as project citation metadata, while final Stage-2 authority records no Atlas-paper relationship; none is inferred.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
