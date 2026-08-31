# Stage 1 computational-resource inventory

Stage 1 converts the supplied resource notes into a normalized, deduplicated inventory. It does **not** claim that URLs, repository identity, paper associations, PINN relevance, licenses, dependencies, or technical properties have been live-verified yet.

## Final counts

- Source lines: **648**
- URL observations: **394**
- Unique canonical resources: **357**
- Paper-resource relationships after redundant-repeat consolidation: **331**
- Unique Atlas reference IDs mapped: **212**
- Repeated-resource groups: **32**
- Possible alias groups deliberately not merged: **13**
- Items queued for Stage 2 verification: **163**
- Schema validation: **passed against final table rows**

## Provenance rule

Internal citation numbers are not Atlas IDs. `Supplementary code ... [32] from [701]` maps to Atlas **701** only; `[32]` remains source text. Secondary-source forms such as `referenced in [100] from [367]` map to Atlas **367** until Stage 2 independently reconciles the internal citation.

## Relationship semantics

Stage 1 avoids claims of official authorship. A resource appearing with a paper is stored as `paper_resource_mention` unless the supplied context specifically identifies a dataset, secondary-review mention, software mention, or non-PINN resource. Stage 2 determines official/author-associated/third-party/dependency relationships.
