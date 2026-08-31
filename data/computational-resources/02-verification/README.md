# Computational Resource Verification Overlay

This directory is the Stage 2 verification overlay for the accepted pilot, controlled registry expansion, corrective relationship resolution, and user-report discovery reconciliation. It does not replace or rewrite the accepted Stage 1 inventory.

## Record-state rules

Fields retain typed values where verified. A companion `status` or `field_status` records one of `verified`, `unavailable`, `unknown`, or `not_applicable`. `null` is used only with an explicit companion state. Checked absence is a verified negative finding rather than an unresolved verification failure.

## Identity rules

- The 13 mandatory pilot resources retain their Stage 1 CR identifiers.
- `CR000358` is the profile-derived pilot resource promoted during pilot closure (`JeongsLee/PINN-for-ExtremeMechanics`).
- `PRL000332` is the verified pilot-added relationship for Atlas paper 312 and canonical resource `CR000184`.
- `CR000359–CR000362` are additive identities discovered during `Stage2-URR01` after the Stage-1 expansion was complete.
- `PRL000333` is the verified user-report reconciliation relationship between `CR000359` and Atlas paper 431.
- Paper-internal reference numbers remain provenance and are never promoted to Atlas IDs without reconciliation.
- Versioned archives, historical URL variants, profile/umbrella pages and exact duplicate identities are represented through alias/evidence records rather than duplicate CR identities.
- Every verified GitHub repository record is pinned to the default-branch commit observed on its Stage-2 verification date.

## Corrective and discovery overlays

Historical batch records are immutable audit evidence. Later primary evidence may supersede selected fields through named overlays without deleting historical records.

`stage-2-relationship-resolution-01` is authoritative for the 13 historical Stage-2 relationship findings that were previously `not_verified`. Its final disposition is **325 verified Stage-1 PRL assertions, 6 resolved-invalid Stage-1 assertions, 0 active unresolved Stage-1 assertions**.

`stage-2-user-report-reconciliation-01` is the additive discovery overlay for the user-supplied resource report. It accounts for 30 unique literal URLs plus four named repository candidates: 15 already registered, 4 aliases, 10 evidence-only, 4 legitimate new resources and 1 unsupported/malformed candidate. There are 0 unresolved user-report discovery candidates.

## Review categories

Bounded scientific-review questions, ordinary manual-review records, verified limitations and Stage-3 deferred extraction are kept separate. A retained review flag does not by itself invalidate the resource identity or relationship and does not automatically block Stage 3.

## Expansion and closure status

Batches `B001–B014` are complete and passed QA. All Stage-1 resources `CR000001–CR000357` have been processed. `CR000358` is separately accounted for as the promoted pilot discovery; `CR000359–CR000362` are separately accounted for as user-report discoveries. Stage2-R01 resolved all historical unresolved Stage-1 relationship assertions. Stage2-URR01 reconciled every user-report candidate and added only justified resource identities/relationships.

Current authoritative state is maintained in `reports/stage-2-progress.md`, `reports/stage-2-unresolved.md`, the relevant named overlay reports, and their QA records.
