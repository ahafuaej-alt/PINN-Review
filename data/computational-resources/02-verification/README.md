# Computational Resource Verification Overlay

This directory is the Stage 2 verification overlay for the accepted pilot, controlled registry expansion, corrective relationship resolution, user-report discovery reconciliation, and final review closure. It does not replace or rewrite the accepted Stage 1 inventory.

## Record-state rules

Fields retain typed values where verified. A companion `status` or `field_status` records one of `verified`, `unavailable`, `unknown`, or `not_applicable`. `null` is used only with an explicit companion state. Checked absence is a verified negative finding rather than an unresolved verification failure.

## Identity rules

- The 13 mandatory pilot resources retain their Stage 1 CR identifiers.
- `CR000358` is the profile-derived pilot resource promoted during pilot closure.
- `CR000359–CR000362` are additive identities from `Stage2-URR01`.
- `CR000363–CR000364` are in-scope profile discoveries promoted by `Stage2-RC01`.
- `PRL000332` and `PRL000333` are the only relationships added after the 331 Stage-1 PRL assertions.
- Paper-internal reference numbers remain provenance and are never promoted to Atlas IDs without reconciliation.
- Versioned archives, historical URL variants, profile/umbrella pages and exact duplicate identities are represented through alias/evidence records rather than duplicate CR identities.
- Every verified GitHub repository record is pinned to the default-branch commit observed on its Stage-2 verification date.

## Overlay precedence

Historical batch and pilot records are immutable audit evidence. Later named overlays supersede only repeated fields for the same CR, PRL, profile discovery or alias identity.

- `stage-2-relationship-resolution-01`: final disposition of the 13 historical `not_verified` Stage-1 relationship findings.
- `stage-2-user-report-reconciliation-01`: complete accounting of the user-supplied resource report.
- `stage-2-review-closure-01`: final disposition of both scientific-review questions, all seven ordinary manual-review resources and the deferred profile discoveries.

After `Stage2-RC01`, final Stage-1 relationship totals are **325 verified, 6 resolved-invalid, 0 active unresolved**. Current review totals are **0 scientific-review items and 0 ordinary manual-review resources**.

## Final negative findings

A final `unavailable` or bounded-`unknown` value records what the evidence supports at closure. It is not an instruction to keep a manual-review checkpoint open. Such a field may be revisited only if new authoritative evidence appears.

## Authoritative checkpoint

Batches `B001–B014`, `Stage2-R01`, `Stage2-URR01` and `Stage2-RC01` are complete and passed QA. The current registry spans `CR000001–CR000364`.

Authoritative state is maintained in:

- `data/computational-resources/reports/stage-2-progress.md`
- `data/computational-resources/reports/stage-2-unresolved.md`
- `data/computational-resources/02-verification/batch-qa/stage-2-closure-manifest.json`

The root `reports/stage-2-progress.md` and `reports/stage-2-unresolved.md` paths are compatibility pointers only and must not be used as independent checkpoints.
