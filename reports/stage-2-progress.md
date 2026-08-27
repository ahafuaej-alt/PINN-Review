# Computational Resources Stage 2 Progress

Verification date: 2026-08-27

## Current state

| Measure | Count |
|---|---:|
| Stage-1 registry resources | 357 |
| Mandatory pilot resources verified | 13 |
| Promoted profile-derived resources | 1 |
| Remaining Stage-1 resources assigned to expansion | 344 |
| Planned controlled batches | 14 |
| Completed expansion batches | 5 |
| Expansion resources processed | 133 |
| Expansion relationships verified | 130 |
| Expansion Stage-1 relationships accounted through existing canonical links | 1 |
| Expansion resources requiring manual review | 10 |
| Pending expansion resources | 211 |

Pilot acceptance status: **passed; safe to scale**.

Latest persistence checkpoint: **B006-C01 passed**. B006 remains in progress; no stop condition was triggered.

## Resume checkpoint

| Field | Value |
|---|---|
| Current logical batch | B006 (checkpoint 01 complete; 8/25 resources) |
| Last completed resource | CR000140 |
| Last completed logical batch | B005 |
| Last persistence checkpoint | B006-C01 |
| Next resource | CR000141 |
| Completed Stage-1 resource count | 146 |
| Completed promoted-resource count | 1 (CR000358) |
| Remaining Stage-1 resource count | 211 |
| Completed CR IDs/ranges | CR000001–CR000140; CR000145; CR000149; CR000154; CR000174; CR000184; CR000221; promoted CR000358 |
| Pending CR IDs/ranges | CR000141–CR000144; CR000146–CR000148; CR000150–CR000153; CR000155–CR000173; CR000175–CR000183; CR000185–CR000220; CR000222–CR000357 |
| Completed Stage-1 PRL assertions | 155 |
| Pending Stage-1 PRL assertions | 176 |
| Verified relationship records | 147 |
| Explicitly `not_verified` relationship records | 8 |
| Completed batches | B001–B005 |
| Pending batches | B006–B014 |
| Resources completed in current checkpoint | CR000132, CR000133, CR000134, CR000135, CR000136, CR000138, CR000139, CR000140 |
| Resources remaining in current batch | 17 |
| Current QA status | checkpoint passed |
| Current scientific-review items | 2 |
| Current ordinary manual-review resources | 10 |
| Last checkpoint commit | pending branch-head assignment for B006-C01 |
| Authoritative checkpoint | branch head of `data/computational-resources-stage2` |

The pilot set (13 Stage-1 resources plus promoted CR000358), B001–B005, and B006 checkpoint resources CR000132–CR000136 plus CR000138–CR000140 must not be reprocessed. Resume at CR000141.

The structured batch manifest was reconciled at this checkpoint because its top-level summary had remained at B003 even though the committed B004/B005 records and QA files were complete. The verification records and QA files were authoritative; no resource or relationship was re-verified during this metadata repair.

## Batch register

| Batch | Resources | First ID | Last ID | Status | QA |
|---|---:|---|---|---|---|
| B001 | 25 | CR000001 | CR000027 | completed | passed |
| B002 | 25 | CR000028 | CR000054 | completed | passed |
| B003 | 25 | CR000055 | CR000080 | completed | passed |
| B004 | 25 | CR000081 | CR000105 | completed | passed |
| B005 | 25 | CR000106 | CR000131 | completed | passed |
| B006 | 25 | CR000132 | CR000160 | in progress (8/25) | checkpoint passed |
| B007 | 25 | CR000161 | CR000187 | pending | pending |
| B008 | 25 | CR000188 | CR000212 | pending | pending |
| B009 | 25 | CR000213 | CR000238 | pending | pending |
| B010 | 25 | CR000239 | CR000263 | pending | pending |
| B011 | 25 | CR000264 | CR000288 | pending | pending |
| B012 | 25 | CR000289 | CR000313 | pending | pending |
| B013 | 25 | CR000314 | CR000338 | pending | pending |
| B014 | 19 | CR000339 | CR000357 | pending | pending |

## Batch 001 summary

- 25 resources processed.
- 20 live GitHub repositories pinned to verified commits.
- 23 new paper–resource relationships verified.
- One Stage-1 relationship was accounted through the existing CR000021 alias resolution and canonical PRL000332.
- Five moved, renamed, case-normalized, or corrected URLs were preserved as aliases without changing CR identity.
- Eleven repositories have the verified negative finding: `No repository license identified at verified commit`.
- CR000022 and CR000023 archive internals remain deferred to Stage 3.
- CR000001 carries a routine manual-review flag and does not block continuation.

## Batch 002 summary

- 25 resources processed and 23 live GitHub repositories pinned to verified commits.
- 24 of 26 Stage-1 relationship assertions were verified.
- PRL000114 (CR000038 ↔ paper 431) and PRL000136 (CR000054 ↔ paper 476) remain explicitly `not_verified` with routine manual-review flags.
- CR000028 is unavailable at the exact URL cited by paper 360; the relationship remains verified from the paper.
- CR000045 and CR000046 were resolved to moved repositories by immutable GitHub repository IDs without changing CR identity.
- Eight repositories have the verified negative finding: `No repository license identified at verified commit`.
- CR000052 was independently mapped to MIT from its exact pinned license text despite repository API `NOASSERTION`.
- No external archive or dataset was unpacked; Stage 3 has not begun.

## Batch 003 summary

- 25 resources processed: 23 GitHub repositories pinned, one live GitLab project verified with an explicit unknown commit SHA, and one unavailable GitHub repository.
- 29 of 31 Stage-1 relationship assertions were verified.
- PRL000163 (CR000074 ↔ paper 536) and PRL000167 (CR000076 ↔ paper 549) remain `not_verified` with routine manual-review flags.
- Four moved, case-normalized, or corrected URLs retain their existing CR identities.
- Ten repositories have the verified negative finding: `No repository license identified at verified commit`.
- CR000062 is mapped to MIT from exact license text while its conflicting Apache-2.0 README badge is preserved.
- No external dataset was unpacked; Stage 3 has not begun.

## Batch 004 summary

- 25 resources processed: 22 live GitHub repositories pinned, two persistent DOI records verified, and one unavailable GitHub repository.
- 24 of 25 Stage-1 relationship assertions were verified; PRL000189 (CR000088 ↔ paper 600) remains `not_verified` with a routine manual-review flag.
- Three corrected or moved URLs retain their existing CR identities.
- Fifteen repositories have the verified negative finding: `No repository license identified at verified commit`.
- CR000083 is mapped to `GPL-3.0-or-later` from exact pinned license text despite repository API `NOASSERTION`.
- CR000091 and CR000092 archive identities and paper roles are verified; archive internals remain deferred to Stage 3.
- No stop condition was triggered.

## Batch 005 summary

- 25 resources processed: 15 GitHub repositories pinned, one additional GitHub identity and four other public resources verified, and five repository URLs unavailable.
- 22 of 25 Stage-1 relationship assertions were verified; PRL000218, PRL000223, and PRL000250 remain `not_verified` with routine manual-review flags.
- Paper 716's archived data-accessibility statement directly verifies seven resource links, including two repositories now unavailable.
- Three source URL repairs retain their existing CR identities.
- Nine pinned repositories have the verified negative finding: `No repository license identified at verified commit`.
- CR000108, CR000116, and CR000127 archive internals remain deferred to Stage 3.
- No stop condition was triggered.

## Batch 006 checkpoint 01 summary

- Eight resources were processed: CR000132–CR000136 and CR000138–CR000140.
- Seven GitHub repositories and one GitLab project were pinned to exact default-branch commits.
- All eight Stage-1 paper-resource assertions were verified as official resources.
- Six licenses were positively verified; CR000134 and CR000138 have verified negative license findings.
- CR000136 is mapped to `CC-BY-NC-SA-4.0` from exact pinned license text while GitHub API `NOASSERTION` is preserved.
- No new alias, manual-review item, schema issue, or stop condition was produced.
- B006 remains in progress and resumes at CR000141.

## Stop conditions

Routine ambiguity is recorded with `requires_manual_review = true` and does not stop the batch. Expansion pauses only for an unrepresentable schema conflict, a required new relationship type, a stable-ID policy change, conflicting evidence that cannot be encoded, or a scientifically consequential ambiguity requiring immediate review.
