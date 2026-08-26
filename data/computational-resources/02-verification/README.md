# Computational Resource Verification Overlay

This directory is the Stage 2 verification overlay for the mandatory 13-resource pilot. It does not replace or rewrite the accepted Stage 1 inventory.

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
- Every repository record is pinned to the default-branch commit observed on 2026-08-26.

## Review categories

The review report separates bounded scientific-review questions from verified limitations and Stage-3 deferred extraction. The latter do not block acceptance of the Stage 2 pilot methodology.
