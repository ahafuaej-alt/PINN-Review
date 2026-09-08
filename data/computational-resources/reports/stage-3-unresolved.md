# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-08
Current checkpoint: `Stage3-S139`
Latest completed batch: **SOB014 PASS**
Current batch: `SOB015` (9/10)
Current unresolved count: **1003**
Next unresolved ID: `S3U-1004`
Explicit conflict count: **117**

## Stage3-S139 additions

- `S3U-0999` — CR000156; resource; medium: Runtime dependency versions are not pinned in `setup.py`, including JAX, jaxlib and the scientific/solver stack.
- `S3U-1000` — CR000156; resource; medium: The repository states that FEM development moved to JAX-FEM and the retained JAX-AM FEM implementation will not receive future updates.
- `S3U-1001` — CR000156; resource; low: The pinned installation documentation still uses the historical `tianjuxue/jax-am` clone URL while Stage 2 verifies the same repository identity at the redirected `CMSL-HKUST/jax-am` location.
- `S3U-1002` — CR000156; resource; medium: Installation has a documented petsc4py platform sensitivity and no pinned compatible PETSc, petsc4py, JAX and accelerator environment is supplied.
- `S3U-1003` — CR000156; configuration; medium: No bundled numerical reference result or explicit acceptance threshold was identified for the bounded FEM demo.

This checkpoint adds **0 explicit conflicts**. Structured scope, severity and evidence links are retained in `04-evidence/extraction-log/scaleout-checkpoint-139-extraction-log.jsonl`.

## Audit continuity

Prior findings through S122 are retained in the S122 register snapshot and historical checkpoint records. S123 onward stores each new finding and identifier in its immutable checkpoint extraction log. No earlier ID is reused or silently removed. Stage3-RC02 and Stage3-RC03 remain authoritative for prior count-neutral reconciliations.

## Continuation

Exact next resource: `CR000157`. Exact next checkpoint: `Stage3-S140`.
