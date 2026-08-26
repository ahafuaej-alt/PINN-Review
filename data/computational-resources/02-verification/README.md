# Computational Resource Verification Overlay

This directory is the Stage 2 verification overlay for the mandatory 13-resource pilot. It does not replace the Stage 1 inventory.

## Record-state rules

Fields retain typed values where verified. A companion `status` or `field_status` records one of:

- `verified`: supported by the cited primary paper, canonical repository, profile, or archive metadata.
- `unavailable`: the field was checked and no value was identified.
- `unknown`: the available evidence does not establish a value.
- `not_applicable`: the field does not apply to the resource type.

`null` is used only with an explicit companion state. Missing licenses, citations, dependencies, and datasets are never inferred.

## Identity rules

- Stage 1 CR and PRL identifiers are preserved.
- PRL000332 is the single new relationship required to materialize paper 312 against canonical resource CR000184.
- Profile discoveries use PD identifiers and do not create Atlas resource identities.
- Paper-internal reference numbers are provenance, not Atlas paper IDs.
- Every repository record is pinned to the default-branch commit observed on 2026-08-26.

See the Stage 2 progress, unresolved, and quality reports for the review gate.
