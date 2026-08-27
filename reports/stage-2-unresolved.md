# Computational Resources Stage 2 Unresolved and Deferred Register

Verification date: 2026-08-27

## Scientific-review items carried from pilot

| Resource | Question | Processing rule |
|---|---|---|
| CR000145 / CR000358 | Whether direct evidence establishes a paper-778 relationship for CR000358. | Keep CR000358 without a PRL; preserve PRL000303 on CR000145. |
| CR000174 | Which unpromoted profile discoveries merit stable resource identities. | Defer promotion decisions; reuse CR000024; do not infer paper relationships. |

These are bounded scientific-review questions, not verification failures, and do not block Stage-2 expansion.

## Expansion scientific-review items

No completed expansion batch has produced a scientifically consequential ambiguity requiring immediate review.

## Ordinary manual review

| Resource | Bounded question | Current representation | Processing rule |
|---|---|---|---|
| CR000001 | Whether to normalize the obsolete PINA documentation fragment to the live project documentation or repository. | Original URL retained with `url_status = not_found`; PINA project identity and MIT license verified separately; no Atlas-paper relationship exists. | `requires_manual_review = true`; preserve evidence and continue. |
| CR000038 | Whether any specific gist under the huidonghu profile is related to paper 431. | Gist-profile contents are unknown; PRL000114 is `not_verified`; paper 431 names other HFM software releases. | `requires_manual_review = true`; do not promote a paper relationship and continue. |
| CR000054 | Whether CR000054 is code for paper 476. | Repository exists and is pinned, but neither paper 476 nor the README establishes the relationship; PRL000136 is `not_verified`. | `requires_manual_review = true`; preserve evidence and continue. |

## Verified limitations and Stage-3-deferred work

| Resource | Result | Status |
|---|---|---|
| CR000117 | Archive internals not inspected. | Resolved for Stage 2; Stage-3 technical inspection deferred. |
| CR000049 | SPDX is `NOASSERTION`; repository wording is BSD-style. | Resolved qualified metadata. |
| CR000184, CR000044, CR000149, CR000154, CR000358 | No repository license identified at pinned commit. | Pilot verified negative findings. |
| CR000004, CR000005, CR000006, CR000007, CR000008, CR000012, CR000015, CR000017, CR000020, CR000024, CR000027 | No repository license identified at pinned commit. | Batch-001 verified negative findings. |
| CR000014 | No trial-software license metadata identified. | Bounded unknown; no license inferred. |
| CR000022, CR000023 | Archive-internal documentation and dependency inspection not performed. | Resolved for Stage 2; Stage-3 technical inspection deferred. |
| CR000028 | Paper-cited repository URL returns 404; repository contents and license cannot be inspected. | Verified unavailability; PRL000074 remains verified from paper 360. |
| CR000030, CR000031, CR000035, CR000039, CR000040, CR000041, CR000053, CR000054 | No repository license identified at pinned commit. | Batch-002 verified negative findings. |
| CR000052 | Repository API SPDX is `NOASSERTION`; exact pinned `LICENSE.txt` is the MIT License. | Resolved by independent exact-text verification; mapped to MIT. |
| CR000036, CR000042, CR000046, CR000052, CR000053 | External datasets or weights were identified but not unpacked. | Stage-2 provenance verified; Stage-3 technical inspection deferred. |

A verified absence, a bounded unavailable resource, or a Stage-3 extraction boundary is not an unresolved Stage-2 failure.
