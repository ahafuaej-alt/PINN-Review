# Computational Resources Stage 3 Unresolved Register

Date: 2026-09-12
Branch: `data/computational-resources-stage3`
Latest checkpoint: `Stage3-S221`

## Current totals

- Unresolved findings: **1400**
- Explicit conflicts: **146**
- Next unresolved ID: `S3U-1401`

## New findings in S221

- `S3U-1396` — CR000256 / archive_level_software_and_bundled_data_licenses_unknown / medium: Neither archive states an archive-level license for the ARTL/JDA method source or bundled MAT data; ARTL's LIBLINEAR copyright notice applies only to that third-party component.
- `S3U-1397` — CR000256 / matlab_environment_and_installation_unspecified / medium: The archives identify MATLAB source but provide no MATLAB version, required toolbox list, complete dependency manifest, or top-level installation procedure.
- `S3U-1398` — CR000256 / jda_referenced_liblinear_path_absent / medium: `JDA.m` adds `../liblinear/matlab` to the path, but that directory is absent from the JDA archive; the inspected active JDA paths do not otherwise call LIBLINEAR directly.
- `S3U-1399` — CR000256 / reference_expected_results_unreported / low: The ARTL and JDA drivers compute or write target accuracies, but neither archive supplies reference expected results for the active configurations.
- `S3U-1400` — CR000256 / artl_reported_statistic_label_ambiguous / low: ARTL `run.m` assigns `std(Accs)` to a variable named `stderr`, so the source label implies standard error while the implemented statistic is standard deviation.

Existing findings and conflicts remain preserved; no historical unresolved ID is reused.
