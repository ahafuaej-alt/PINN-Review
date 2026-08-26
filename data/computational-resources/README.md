# Computational Resources Registry

This directory is the evidence-preserving working data layer for PINN software, repositories, computational libraries, datasets, archives, and related resources. The live Atlas `/software/` and `/datasets/` pages are intentionally untouched and decoupled from this registry.

## Pipeline

`00-source` → `01-inventory` → `02-verification` → `03-technical` → `04-evidence` → `05-curated` → Atlas views

Only Stage 1 is implemented here. Later stages must enrich records without overwriting the original source snapshot or silently changing resource identity.

## Stage 1 files

- `00-source/original-resource-notes.txt` — exact supplied source snapshot.
- `01-inventory/resources/` — one canonical computational-resource identity per Stage 1 deduplication key.
- `01-inventory/paper-resource-links/` — many-to-many Atlas paper/resource relationships with source-line provenance.
- `01-inventory/duplicates.jsonl` — repeated mentions that normalize to the same canonical resource.
- `01-inventory/possible-aliases.jsonl` — similar resources deliberately kept separate pending live verification.
- `01-inventory/unresolved-links/` — malformed/profile/ambiguous URLs and named resources that need identity resolution.
- `reports/stage-1-summary.*` — counts, rules, and limitations.
- `scripts/resource-registry/build_stage1_inventory.py` — reproducible Stage 1 parser/normalizer used to produce the inventory.

The sharded `table-v1` JSON format stores typed row arrays with per-directory manifests. Sharding keeps records compact and makes large inventories easier to review and update without changing resource IDs.

## Identifier policy

`CR######` identifies a computational resource. `PRL######` identifies a paper-resource relationship. Stage 1 IDs are intended to remain stable after merge; later stages should enrich rather than renumber them.

## Evidence policy

`stage1_unverified` and `source_stated_unverified` mean that a value comes from the supplied notes and deterministic syntactic normalization only. Stage 1 does not prove that a URL currently resolves, that a repository is official, or that a technical classification is scientifically correct. No Stage 1 record is marked ready for public Atlas publication.

## Paper-mapping rule

Atlas paper IDs are separate from resource identities because one resource can support multiple papers and one paper can expose multiple computational resources. Secondary-review mentions are distinguished from primary/supplementary-code relationships. Internal citation numbers inside a secondary source are not automatically promoted to Atlas IDs.
