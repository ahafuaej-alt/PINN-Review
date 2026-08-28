# Stage 2 B009 Checkpoint 02 Deferred and Qualified Findings

Verification date: 2026-08-28

B009 checkpoint 02 produced no new scientifically consequential ambiguity and no new ordinary manual-review item. The sequence spans CR000218 through CR000222; mandatory-pilot CR000221 was already accepted and was not duplicated. The following findings are resolved for Stage 2 and remain bounded Stage-3 or future-reference work where noted.

| Resource | Result | Status |
|---|---|---|
| CR000218 | Physics-Based-Deep-Learning is a compact landing/link repository for the digital book and arXiv:2109.05237. It contains README documentation and three illustrations but no identified repository license, formal dependency manifest, or research dataset. | Stage-1 `uncertain` classification resolved to `paper_code_collection_or_tutorial`; external linked-material normalization is outside Stage 2. |
| CR000219 | The archived machine-learning-for-CFD repository is an MIT-licensed tutorial/example collection with publication DOI `10.1002/ceat.201900044`, README dependency guidance, notebooks, CFD cases, CSV/PKL data, and PyTorch model files. The README warns that most code is outdated. | Stage-2 identity/license/citation/dependency/data boundary verified without execution; environment recreation, model inspection, and reproducibility testing remain Stage 3 work. |
| CR000220 | awesome-pinns is a CC-BY-4.0 curated PINN/PIML project and bibliography index. Its parser manifests are maintenance tooling, and external paper entries are not project self-citation metadata. | Collection role and scoped license/dependency/citation/data boundaries verified; bibliography normalization and parser execution remain outside Stage 2. |
| CR000222 | The ScienceDirect PII identifies the 2026 *Results in Engineering* article DOI `10.1016/j.rineng.2026.110582`. The publisher labels it open access under a Creative Commons license, but accessible metadata does not expose the exact variant; direct automated retrieval was restricted and no separate code or dataset was established. | MRD000016 and PD000011 retain it as a MULTIPINN-related candidate for possible future Atlas reference review, not a current relationship. License SPDX remains `NOASSERTION`; no new review item is required for Stage 2. |

These qualified findings do not constitute Stage-2 verification failures. B009 remains in progress and the next resource is CR000223.
