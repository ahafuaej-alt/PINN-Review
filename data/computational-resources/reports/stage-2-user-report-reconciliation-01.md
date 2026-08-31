# Computational Resources Stage 2 — User-Report Resource Discovery Reconciliation 01

Verification date: 2026-08-31

## Purpose

This pass reconciles every computational-resource candidate in the user-supplied report after completion of the Stage-1 resource expansion and Stage2-R01 relationship-resolution pass. It is an additive Stage-2 discovery overlay: historical Stage-1 and batch records remain immutable.

## Complete candidate accounting

The report contains 30 unique literal URL strings plus four named repository candidates that were mentioned without a complete literal URL. All 34 candidates receive exactly one disposition.

| Disposition | Count |
|---|---:|
| Already registered | 15 |
| Alias | 4 |
| Evidence/provenance only | 10 |
| Legitimate new resource | 4 |
| Unsupported/malformed | 1 |
| **Total** | **34** |

The authoritative URL-by-URL disposition ledger is `02-verification/verification-log/stage-2-user-report-reconciliation-01-url-audit.jsonl`.

## Legitimate new resources

- `CR000359` — `https://github.com/alirezayazdani1/HFM`: distinct HFM synthetic-data-generator/source-code project explicitly identified by Atlas paper 431 reference 19. New verified relationship `PRL000333` records this as `supplementary_code` for Atlas 431.
- `CR000360` — `https://github.com/Scien42/NSFnet`: distinct public NSFnet/ev-NSFnet PINN implementation. It is retained without an Atlas-paper relationship because the reconciliation evidence does not establish it as paper 476's implementation.
- `CR000361` — `https://github.com/power-grid-lib/pglib-opf-hvdc`: distinct Power Grid Lib AC-OPF/HVDC benchmark repository. It is retained without a paper-721 relationship because paper 721's cited benchmark is PGLib-OPF.
- `CR000362` — `https://github.com/power-grid-lib/pglib-uc`: distinct Power Grid Lib unit-commitment benchmark repository. It is retained without a paper-721 relationship for the same provenance reason.

## Aliases and duplicate-control decisions

- `VA000044` preserves `https://doi.org/10.5281/zenodo.3566161` as the versioned archive of existing `CR000036` (`maziarraissi/HFM`).
- `VA000045` preserves `https://doi.org/10.5281/zenodo.3567215` as the versioned archive of new `CR000359` (`alirezayazdani1/HFM`).
- `VA000046` maps historical `http://image-net.org/` to existing `CR000351` at the current HTTPS ImageNet host.
- `VA000047` maps historical `http://turbulence.pha.jhu.edu` to existing `CR000307` at the current HTTPS JHTDB portal.

Author profiles, project umbrella pages, announcement/publication pages, line-wrap fragments and fork-lineage discoveries are preserved as evidence-only or unsupported rather than promoted into duplicate CR identities.

## Paper-relationship policy

One new Atlas-paper relationship is justified:

- `PRL000333` / `CR000359` / Atlas 431 — `supplementary_code`, verified from the primary paper's data-and-materials statement and reference 19.

No relationship is created for `CR000360–CR000362`; organizational proximity, topical similarity or fork lineage is not treated as paper provenance.

## Licensing and static-verification boundary

`CR000359` and `CR000360` have verified GPL-3.0 repository licenses. `CR000361` and `CR000362` preserve mixed repository terms (CC-BY-4.0 for data and MIT for software) without collapsing them into a single SPDX value.

No software, repository, model, notebook, archive or dataset payload was installed or executed. No dataset archive was downloaded or unpacked. Exact dependencies, environment versions, training procedures, benchmark execution and data-generation internals remain Stage-3 work.

## QA conclusion

`Stage2-URR01` passes. Every user-report URL/candidate is reconciled, four legitimate missing resources are registered, one missing paper relationship is added, four aliases preserve duplicate/historical identities, and no unsupported relationship is promoted.
