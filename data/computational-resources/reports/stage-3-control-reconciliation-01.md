# Stage 3 Control Reconciliation 01

Date: 2026-09-03  
Reconciliation checkpoint: `Stage3-S048`  
Branch: `data/computational-resources-stage3`  
Pre-reconciliation head: `8c7237d5be9f14a89f99505f696076aab9ec40b7`

## Purpose

This reconciliation repairs control-state drift discovered after `Stage3-S047` without rewriting existing commits, checkpoint IDs, or accepted scientific extraction records.

## Findings and dispositions

### 1. CR000049 was genuinely omitted — repaired

`Stage3-S041` completed `CR000048` and recorded `CR000049` as the next resource. Historical `Stage3-S042` instead processed `CR000050`. Final Stage-2 authority confirms that `CR000049` is a real supporting-software resource: the PyTorch repository at pinned commit `8e386332abed96515b823073c931e691d69ff921`, with `PRL000130` to Atlas paper 467 strictly as a `paper_software_mention`.

Disposition: `Stage3-S048` adds the missing bounded CR000049 framework record, 10 evidence records, one R2 assessment, six unresolved findings, zero experiments/configurations, and zero new conflicts. The checkpoint is late in Git history by design; its canonical resource position is between CR000048 and CR000050.

### 2. CR000021 is not an independent technical extraction — no duplicate record

Final Stage-2 relationship authority preserves the broken `fashli/Delta-PINNs` provenance but resolves the canonical technical resource to `CR000184` (`https://github.com/fsahli/Delta-PINNs`) through `PRL000332`.

Disposition: Stage 3 does not copy CR000184 technical facts into a duplicate CR000021 record. CR000021 remains a resolved registry-provenance identity; CR000184 will receive the canonical technical extraction at its normal numeric position. This disposition does not create a Stage-3 unresolved finding.

### 3. Historical batch labels drifted — repaired by canonical aggregate QA

The accepted plan requires ten independently extractable resources per normal batch and aggregate QA before advancement. Historical extraction continued after S026 while later checkpoint QA retained the `SOB003` label.

Canonical batch membership is now:

- `SOB003`: CR000024–CR000033 (`Stage3-S017`–`Stage3-S026`).
- `SOB004`: CR000034–CR000043 (`Stage3-S027`–`Stage3-S036`).
- `SOB005`: CR000044, CR000045, CR000046, CR000047, CR000048, CR000049, CR000050, CR000051, CR000052, CR000053 (`Stage3-S037`–`Stage3-S045` plus corrective `Stage3-S048`).
- `SOB006`: CR000054 and CR000055 are already complete; CR000056 is pilot-complete; next member is CR000057.

Disposition: publish retrospective aggregate QA for `SOB003`, `SOB004`, and `SOB005`. Historical checkpoint files remain unchanged and continue to serve as immutable audit records.

### 4. S047 next-resource pointer was wrong — corrected

`Stage3-S047` recorded `CR000056` as next. The accepted Stage-3 pilot list explicitly includes `CR000056`, so reprocessing it would violate the pilot exclusion rule.

Disposition: current exact next resource is `CR000057`; next checkpoint is `Stage3-S049`.

### 5. Primary cumulative counts were sound — preserved

S026 cumulative totals were 40 resources, 73 experiments, 177 configurations, 487 technical-evidence records, and 40 reproducibility assessments. S027–S047 added exactly 21 resources, 39 experiments, 77 configurations, 339 evidence records, and 21 assessments, giving the recorded S047 totals of 61 / 112 / 254 / 826 / 61.

Disposition: no historical count is rewritten. S048 adds exactly 1 / 0 / 0 / 10 / 1, yielding current totals 62 / 112 / 254 / 836 / 62.

### 6. Unresolved-register continuity — preserved

The historical unresolved register through S047 contains `S3U-0001`–`S3U-0362` and 81 explicit conflicts. It is preserved verbatim as `reports/stage-3-unresolved-through-s047.md`.

Disposition: the active register continues with `S3U-0363`–`S3U-0368` for CR000049. Current unresolved count is 368; next ID is `S3U-0369`; conflict count remains 81.

### 7. Report staleness — repaired without loss of history

The S047 progress report contained stale batch text, stale unresolved-ID narrative, an incorrect remaining count, and the invalid CR000056 continuation pointer. The quality report header still identified S037 despite containing later checkpoint sections.

Disposition: preserve the pre-reconciliation progress, quality, and unresolved reports verbatim as `*-through-s047.md` snapshots, and replace the active reports with compact current authoritative versions.

## Batch count reconciliation

| Batch | Resources | Experiments | Configurations | Evidence | Repro assessments | New unresolved | New conflicts |
|---|---:|---:|---:|---:|---:|---:|---:|
| SOB003 | 10 | 24 | 35 | 146 | 10 | 71 | 19 |
| SOB004 | 10 | 23 | 40 | 175 | 10 | 94 | 19 |
| SOB005 | 10 | 11 | 31 | 138 | 10 | 87 | 13 |

SOB005's batch-boundary cumulative counts, with CR000049 inserted at its canonical position, are 60 resources, 107 experiments, 248 configurations, 800 evidence records, 60 reproducibility assessments, 350 unresolved findings, and 79 conflicts. CR000054 and CR000055 were already completed after that canonical boundary; therefore repository-wide post-reconciliation totals are higher.

## Current authoritative state

- Latest completed checkpoint: `Stage3-S048`.
- Latest checkpoint resource: `CR000049` corrective recovery.
- Forward frontier: `CR000055`.
- Active batch: `SOB006`.
- Active batch completed members: `CR000054`, `CR000055`.
- Pilot-complete next numeric ID: `CR000056` — do not reprocess.
- Exact next independently extractable resource: `CR000057`.
- Next checkpoint: `Stage3-S049`.
- Technical resource records: 62.
- Experiments: 112.
- Configurations: 254.
- Technical-evidence records: 836.
- Static reproducibility assessments: 62.
- Unresolved findings: 368.
- Next unresolved ID: `S3U-0369`.
- Explicit conflicts: 81.
- Independently extractable resources remaining on current canonical accounting: 301.

## Repository-safety result

Reconciliation is restricted to Stage-3 technical/evidence/report paths. Stage 1, Stage 2, public Atlas/site files, and `05-curated/` remain unchanged. No schema is modified. No scientific workload is executed. No branch history is rebased, squashed, force-pushed, or rewritten. No PR, merge, or deployment is created.

## Continuation

Continue with `Stage3-S049` at `CR000057` only after reading the current progress report, active unresolved register, accepted scale-out plan, latest checkpoint QA, and this reconciliation record.
