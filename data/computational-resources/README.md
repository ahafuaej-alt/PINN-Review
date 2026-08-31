# Computational Resources Registry

This directory is the evidence-preserving working data layer for PINN software, repositories, computational libraries, datasets, archives, simulators/solvers, useful profiles, and related resources. The live Atlas pages are intentionally untouched and decoupled from this registry.

## Pipeline

`00-source` → `01-inventory` → `02-verification` → `03-technical` → `04-evidence` → `05-curated` → Atlas views

Stage 1 is the normalized inventory layer. Later stages enrich records without overwriting the source snapshot or silently changing resource identity.

## Stage 1 files

- `00-source/original-resource-notes/` — line-preserving exact source snapshot with SHA-256 manifest.
- `01-inventory/resources/` — one computational-resource identity per Stage-1 normalization key.
- `01-inventory/paper-resource-links/` — many-to-many Atlas paper/resource relationships with source-line provenance.
- `01-inventory/duplicates.jsonl` — repeated mentions normalized to the same resource.
- `01-inventory/possible-aliases.jsonl` — similar resources deliberately kept separate pending identity verification.
- `01-inventory/unresolved-links/` — malformed/profile/ambiguous or otherwise unverified resources queued for Stage 2.
- `01-inventory/manual-review-decisions.jsonl` — authoritative post-inventory manual-review corrections and curation decisions. These act as an overlay on the preserved Stage-1 source-derived tables and must be applied when Stage 2 materializes verified identities.
- `01-inventory/profile-discoveries.jsonl` — useful repositories discovered through profile-level resources. Discovery does not create an Atlas-paper relationship unless separately verified.
- `reports/stage-1-summary.*` — inventory counts and rules.
- `reports/stage-1-acceptance.*` — structural integrity checks and representative acceptance sample.
- `reports/stage-1-user-review.md` — manual-review addendum following the structural acceptance pass.
- `schemas/` — row schemas matching the final sharded base tables.

## Identifier policy

`CR######` identifies a computational resource. `PRL######` identifies a paper-resource relationship. IDs from the preserved Stage-1 base inventory are not silently renumbered when a later manual review identifies an invalid alias; instead, the correction is recorded explicitly and Stage 2 applies the canonical identity decision.

## Evidence policy

`stage1_unverified` and `source_stated_unverified` mean a value comes from the supplied notes and deterministic syntactic normalization only. Stage 1 does not prove that a URL resolves, that a repository is official, or that a technical classification is scientifically correct. Manual-review overlays may confirm or correct specific identities, but no Stage-1 base record is publication-ready.

## Paper-mapping rule

Atlas paper IDs are separate from resource identities. Internal citation numbers inside a source paper are never automatically promoted to Atlas IDs. For example, `[32] from [701]` maps to Atlas paper `701`; `32` remains an internal reference number from that paper. The same rule applies to expressions such as `[100] from [367]`, `[123] from [367]`, and analogous `referenced in [n] from [Atlas-ID]` cases: the outer Atlas paper ID is retained and the inner citation number is provenance local to that paper.

## Relationship policy

A repository can have different relationships to different papers. Direct paper association, secondary-review mention, dataset presence, supporting software, and profile-level discovery are not interchangeable. Stage 2 must verify these relationships independently rather than assuming that every paper mentioning the same repository is its originating paper.

Non-PINN resources are not automatically excluded. Research code associated with Atlas papers and supporting libraries/frameworks may remain useful for PINN research, implementation, benchmarking, or development. These resources are classified explicitly rather than mislabeled as PINN implementations.

## Reserved future Atlas information architecture

No page implementation is part of Stage 1, but the preferred future organization is:

```text
Computational Resources
├── Code & Software
├── Datasets
├── Frameworks & Libraries
├── Simulators & Solvers
└── Reproducibility Explorer
```

The registry is intentionally broader than GitHub so these views can share one canonical resource identity and provenance model.
