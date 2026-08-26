# Stage 1 computational-resource inventory

Stage 1 converts the supplied resource notes into a normalized, deduplicated inventory. It does **not** claim live repository verification.

## Counts

- Source lines: **648**
- URL observations parsed: **394**
- Unique canonical resources: **357**
- GitHub repository identities: **218**
- Paper-resource relationship records: **333**
- Unique Atlas reference IDs mapped from the supplied notes: **212**
- Repeated/canonical duplicate resource groups: **32**
- Possible alias groups deliberately not merged: **13**
- Unresolved URL/identity items: **163**
- Schema validation of logical Stage 1 records: **passed**

## Provenance rule

A bracket appearing inside a secondary source is not automatically treated as an Atlas ID. For `Supplementary code ... [32] from [701]`, Stage 1 maps the resource to Atlas paper **701**; the internal citation `[32]` remains only in the preserved source text. Likewise, `referenced in [100] from [367]` maps to Atlas paper **367** until the internal citation is independently reconciled with Atlas metadata.

## Classification rule

Stage 1 classifications are intentionally provisional. Explicit `NOT PINN` statements are preserved, while repository-name/context heuristics are marked unverified. Supporting libraries, operator-learning repositories, datasets, and PINN implementations are not collapsed into a binary PINN/non-PINN field.

## Important limitation

Canonicalization is syntactic only. Live status, official authorship, redirects, licenses, citations, dependency files, architecture, mathematical formulation, training strategy, dataset availability, and reproducibility belong to Stage 2 and Stage 3.
