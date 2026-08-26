# Computational Resources Registry

This directory is the evidence-preserving working data layer for PINN software, repositories, computational libraries, datasets, archives, simulators/solvers, and related resources. The live Atlas pages are intentionally untouched and decoupled from this registry.

## Pipeline

`00-source` → `01-inventory` → `02-verification` → `03-technical` → `04-evidence` → `05-curated` → Atlas views

Only Stage 1 is implemented here. Later stages enrich records without overwriting the source snapshot or silently changing resource identity.

## Stage 1 files

- `00-source/original-resource-notes/` — line-preserving exact source snapshot with SHA-256 manifest.
- `01-inventory/resources/` — one canonical computational-resource identity per Stage-1 deduplication key.
- `01-inventory/paper-resource-links/` — many-to-many Atlas paper/resource relationships with source-line provenance.
- `01-inventory/duplicates.jsonl` — repeated mentions normalized to the same canonical resource.
- `01-inventory/possible-aliases.jsonl` — similar resources deliberately kept separate pending live verification.
- `01-inventory/unresolved-links/` — malformed/profile/ambiguous or otherwise unverified resources queued for Stage 2.
- `reports/stage-1-summary.*` — inventory counts and rules.
- `reports/stage-1-acceptance.*` — integrity checks and representative acceptance sample.
- `schemas/` — row schemas matching the final sharded tables.

## Identifier policy

`CR######` identifies a computational resource. `PRL######` identifies a paper-resource relationship. These IDs are intended to remain stable after Stage 1 is merged.

## Evidence policy

`stage1_unverified` and `source_stated_unverified` mean a value comes from the supplied notes and deterministic syntactic normalization only. Stage 1 does not prove that a URL resolves, that a repository is official, or that a technical classification is scientifically correct. No Stage-1 record is publication-ready.

## Paper-mapping rule

Atlas paper IDs are separate from resource identities. Internal citation numbers inside a source paper are never automatically promoted to Atlas IDs. In particular, `[32] from [701]` maps to Atlas paper `701`; `32` remains an internal reference number from that paper.

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
