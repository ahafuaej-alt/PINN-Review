# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-13
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S255`
Latest reconciliation: `Stage3-RC08` — PASS

## Current totals

- Unresolved findings: **1468**
- Explicit conflicts: **150**
- Next unresolved ID: `S3U-1469`

## New findings in S255

- `S3U-1465` — CR000303 / benchmark_payloads_not_opened / low: Five benchmark folders and their input files are verified from the pinned tree, but the large `.rea`, `.adr`, compressed archive, and other benchmark payloads were not opened or numerically inspected.
- `S3U-1466` — CR000303 / build_dependency_versions_not_fully_pinned / low: Compilation instructions require architecture-specific flags, MPI and math libraries such as LAPACK/BLAS/ACML/MKL; successful Intel Compilers 2018 use is documented, but exact dependency/compiler versions and paths are not fully pinned.
- `S3U-1467` — CR000303 / benchmark_specific_run_and_expected_output_mapping_incomplete / medium: A generic Nektar `mpirun` workflow is documented and benchmark inputs are present, but exact per-benchmark run commands, expected outputs, and evaluation/result mappings are not sufficiently normalized for R4.
- `S3U-1468` — CR000303 / davinci_external_nektar_plus_plus_version_unpinned / low: The DaVinci case is supplied as a Nektar++ XML input, while Nektar++ is an external package and the exact release needed for this case is not pinned in the HFM v1.0 software record.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
