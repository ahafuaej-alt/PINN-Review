# Computational Resources Stage 2 Pilot Acceptance Report

Verification date: 2026-08-26

## Decision

**Accepted for controlled Stage 2 scaling.**

The pilot methodology and verification overlay pass identity, provenance, relationship, state-model, identifier, and scope-isolation checks. Correctly bounded uncertainty is represented explicitly and is not treated as a failed verification.

## Acceptance checks

| Check | Result | Basis |
|---|---|---|
| Mandatory pilot coverage | Pass | 13 required resources are verified. |
| Profile-derived identity | Pass | CR000358 is a stable `profile_level_discovery`; no PRL is assigned. |
| Paper 778 relationship | Pass | PRL000303 remains `paper 778 → CR000145 profile`. |
| Relationship integrity | Pass | 17 verified relationships resolve to valid CR and Atlas IDs. |
| Stable identifiers | Pass | Existing CR/PRL IDs are preserved; CR000358 and PRL000332 are non-conflicting sequential additions. |
| Uncertainty representation | Pass | `verified`, `unavailable`, `unknown`, and `not_applicable` remain distinct. |
| Negative findings | Pass | Missing licenses are verified checked absences, not inferred values. |
| Qualified metadata | Pass | PyTorch remains `NOASSERTION` with separate BSD-style wording. |
| Deferred extraction | Pass | CR000117 archive internals are Stage-3 deferred without reopening identity or provenance. |
| Profile expansion | Pass | CR000174 discoveries are preserved; CR000024 is reused; no paper relationship is invented. |
| JSONL and referential QA | Pass | All pilot records parse and resolve without dangling identifiers. |
| Scope isolation | Pass | No public Atlas, application, navigation, dataset, or deployment path is modified. |

## Scale-safety assessment

The accepted model covers all eight Stage-1 resource types:

- GitHub repositories, profiles, and gists
- GitLab resources
- DOI and archive records
- data/model records
- general web resources

It also covers all five Stage-1 relationship types:

- `paper_resource_mention`
- `paper_dataset_mention`
- `paper_non_pinn_resource_mention`
- `paper_software_mention`
- `secondary_review_mention`

Relationship refinements such as `official`, `supporting_dependency`, `supplementary_code`, and `author_associated` remain evidence-backed sub-classifications within the existing overlay. No new database schema, relationship class, or identifier rule is required for expansion.

Conflicting or incomplete evidence can be preserved with evidence records, confidence, and `requires_manual_review` while processing continues. Therefore ordinary ambiguous resources do not block a batch.

## Expansion plan

- Stage-1 resources: 357
- Mandatory pilot resources already processed: 13
- Additional promoted pilot identity: CR000358
- Remaining Stage-1 resources: 344
- Controlled batches: 14
- Target batch size: 25 resources
- Final batch size: 19 resources

## Gate outcome

The pilot is accepted and Stage 2 registry expansion is authorized. Stage 3 remains blocked until all batches, the global Stage-2 integrity audit, and the final Stage-2 Acceptance Report are complete.
