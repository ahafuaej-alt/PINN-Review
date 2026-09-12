# Computational Resources Stage 3 Quality Report

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S232`
Latest reconciliation: `Stage3-RC07`
Status: **PASS**

## Checkpoint S232

- Resources: **2** (`CR000272`, `CR000273`)
- Experiments: **0**
- Configurations: **0**
- Technical-evidence records: **16**
- Reproducibility assessments: **2**
- New unresolved findings: **4**
- New explicit conflicts: **0**
- Reproducibility: **CR000272 R2; CR000273 R2**

All required checkpoint validation gates pass. CR000272 preserves `VA000053`, `PRL000022`, immutable repository identity `635501712`, and the exact Stage-2 pin; successor MagNet services are retained only as documented successors and are not asserted equivalent to the historical Challenge 2023 payload. CR000273 preserves `PRL000023`, its exact pinned repository, bundled data-artifact names/sizes, and the documented BeltClip/Digimat-AM generation path without inferring unuploaded model contents or licensing.

The pre-checkpoint temporary-file incident is count-neutral: the temporary root file was removed before S232 scientific publication, and restoration commit `9028b16fae62e2a8dcd9ea73720be35330f39ce1` has the exact S231 tree SHA `87585ff1e3a465a38671d7a958ff40da5ed77ac2`.

## Aggregate batch QA

`SOB026` is **10/10 — PASS**. Membership reconciliation, cumulative counts, identifier uniqueness, orphan-reference checks, source-scope sampling, missing-value semantics, methodology/schema drift, stage boundaries, execution boundaries, provenance text, R5 exclusion, and Stage-2 authority readback all pass. `CR000268` is an authoritative pilot-complete exclusion and is not duplicated.

Stage3-RC02 through Stage3-RC07 remain authoritative and count-neutral for their accepted scopes.

Exact continuation: `CR000274 → Stage3-S233`.
