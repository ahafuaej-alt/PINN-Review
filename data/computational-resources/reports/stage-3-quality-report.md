# Computational Resources Stage 3 Quality Report

Date: 2026-09-14
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S310`
Latest reconciliation: `Stage3-RC09`
Status: **PASS**

## Checkpoint S310

- Resources: **2** (`CR000361`, `CR000362`)
- Experiments: **0**
- Configurations: **0**
- Technical-evidence records: **16**
- Reproducibility assessments: **2**
- New unresolved findings: **4**
- New explicit conflicts: **0**
- Reproducibility: **CR000361 R2; CR000362 R2**

All required gates pass. Final Stage-2 identities for the two Power Grid Lib benchmark repositories are preserved without creating an Atlas relationship and specifically without linking either sibling repository to Atlas paper 721. CR000361 resolves a pinned HVDC optimal-power-flow benchmark surface with six case files, an explicit nonlinear AC/DC formulation and a documented external PowerModelsACDC usage path. CR000362 resolves pinned unit-commitment JSON case families and an explicit MILP formulation with documented external EGRET/psst reference implementations. External solver versions and full source-to-case provenance remain explicit gaps. No scientific workload was executed.

## Count-neutral S297 authority readback correction

Final Stage-2 readback establishes CR000348/`PRL000330` as the SDC3a Foregrounds dataset relationship for Atlas paper **853**, with relationship `paper_dataset_mention`. SKAO's explicit unrestricted data-challenge usage statement is preserved while SPDX licensing remains unresolved. The S297 resource, evidence, extraction and reproducibility records are corrected accordingly; counts, IDs, checkpoint membership, SOB034 membership and R2 classification are unchanged.

The lowercase Stage3-SO-D01 control reports and uppercase compatibility report family remain synchronized at S310, including SOB034 aggregate closure and this count-neutral correction.

## Aggregate batch QA

`SOB034` remains **PASS (10/10)**. `SOB035` is **9/10** with `CR000354` through `CR000362`.

Stage3-RC02 through Stage3-RC09 remain authoritative and count-neutral for their accepted scopes.

Exact continuation: `CR000363 → Stage3-S311`.
