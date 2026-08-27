# Computational Resources Stage 2 Progress

Verification date: 2026-08-26

Checkpoint updated: 2026-08-27

## Current state

| Measure | Count |
|---|---:|
| Stage-1 registry resources | 357 |
| Mandatory pilot resources verified | 13 |
| Promoted profile-derived resources | 1 |
| Remaining Stage-1 resources | 344 |
| Planned controlled batches | 14 |
| Completed expansion batches | 1 |
| Expansion resources verified | 25 |
| Expansion relationships verified | 23 |
| Expansion Stage-1 relationships accounted through existing canonical links | 1 |
| Expansion resources requiring manual review | 1 |

Pilot acceptance status: **passed; safe to scale**.

Latest batch status: **B001 passed**. No stop condition was triggered.


## Resume checkpoint

| Field | Value |
|---|---|
| Last completed resource | CR000027 |
| Last completed batch | B001 |
| Next resource | CR000028 |
| Completed expansion resources | 25 |
| Pending expansion resources | 319 |
| Completed batches | B001 |
| Pending batches | B002–B014 |
| Current QA status | passed |
| Authoritative checkpoint commit | `27011d5ae1edf6acde8eea01676bfd7515321806` |

The pilot set (13 Stage-1 resources plus promoted CR000358) and B001 must not be reprocessed. Resume at CR000028.


## Batch register

| Batch | Resources | First ID | Last ID | Status | QA |
|---|---:|---|---|---|---|
| B001 | 25 | CR000001 | CR000027 | completed | passed |
| B002 | 25 | CR000028 | CR000054 | pending | pending |
| B003 | 25 | CR000055 | CR000080 | pending | pending |
| B004 | 25 | CR000081 | CR000105 | pending | pending |
| B005 | 25 | CR000106 | CR000131 | pending | pending |
| B006 | 25 | CR000132 | CR000160 | pending | pending |
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

## Stop conditions

Routine ambiguity is recorded with `requires_manual_review = true` and does not stop the batch. Expansion pauses only for an unrepresentable schema conflict, a required new relationship type, a stable-ID policy change, conflicting evidence that cannot be encoded, or a scientifically consequential ambiguity requiring immediate review.
