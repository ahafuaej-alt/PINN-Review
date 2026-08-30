# Computational Resource Verification Overlay

This directory is the Stage 2 verification overlay for the accepted pilot and controlled registry expansion. It does not replace or rewrite the accepted Stage 1 inventory.

## Record-state rules

Fields retain typed values where verified. A companion `status` or `field_status` records one of:

- `verified`: supported by the cited primary paper, canonical repository, profile, or archive metadata.
- `unavailable`: the field was checked and no value was identified.
- `unknown`: the available evidence does not establish a value.
- `not_applicable`: the field does not apply to the resource type.

`null` is used only with an explicit companion state. A checked absence, such as no repository license at a pinned commit, is a verified negative finding rather than an unresolved verification failure.

## Identity rules

- The 13 mandatory pilot resources retain their Stage 1 CR identifiers.
- CR000358 is the single profile-derived resource promoted during pilot closure. It represents `JeongsLee/PINN-for-ExtremeMechanics` as a verified `profile_level_discovery`.
- CR000358 has no Atlas-paper relationship. PRL000303 remains the verified association between paper 778 and profile CR000145.
- PRL000332 remains the single relationship added during the pilot, for paper 312 and canonical resource CR000184.
- CR000024 is reused for `KTH-FlowAI/Enhancement-of-PIV-via-PINNs`; no duplicate identity is created.
- Unpromoted profile discoveries retain PD identifiers and do not create Atlas resource identities.
- Paper-internal reference numbers are provenance, not Atlas paper IDs.
- Every verified repository record is pinned to the default-branch commit observed on its Stage-2 verification date.
- Expansion batches reuse the pilot schema and evidence-state rules. Batch-specific artifacts and QA records are cumulative.

## Corrective-resolution overlays

Historical batch records are immutable audit evidence. When later primary evidence resolves an earlier Stage-2 finding, a named corrective overlay may supersede selected fields for the same PRL or CR identifier without deleting the historical record.

`stage-2-relationship-resolution-01` is the first such overlay. For the 13 historical relationship records previously marked `not_verified`, its relationship records are authoritative. Its resource records are field-level corrective overlays: only fields present in the corrective record supersede the corresponding earlier resource fields; omitted fields retain their prior verified state.

The resolution distinguishes two final states:

- `verified`: the relationship is positively supported.
- `resolved_invalid_stage1_assertion`: the historical Stage-1 assertion is conclusively invalid and is closed rather than retained as unresolved.

After Stage2-R01, the 331 Stage-1 PRL assertions have the authoritative disposition **325 verified, 6 resolved-invalid, 0 active unresolved**. Historical `not_verified` records remain present for auditability and must not be recounted as active unresolved assertions.

## Review categories

The review report separates bounded scientific-review questions from verified limitations and Stage-3 deferred extraction. The latter do not block acceptance of the Stage 2 methodology.

## Expansion status

Batches B001–B014 are complete and passed QA. All Stage-1 resources `CR000001–CR000357` have been processed; promoted CR000358 remains separately accounted for. Stage2-R01 subsequently resolved all 13 historical `not_verified` relationship findings. Current authoritative progress and unresolved status are maintained in `reports/stage-2-progress.md` and `reports/stage-2-unresolved.md`.
