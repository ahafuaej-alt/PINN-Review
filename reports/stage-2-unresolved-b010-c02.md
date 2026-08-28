# Stage 2 B010 Checkpoint 02 Deferred and Qualified Findings

Verification date: 2026-08-28

B010 checkpoint 02 produced no new scientifically consequential ambiguity and no new ordinary manual-review item. PRL000105, PRL000275, PRL000277, PRL000283, and PRL000284 are verified. The following identity, scope, and extraction boundaries are resolved for Stage 2.

| Resource | Result | Status |
|---|---|---|
| CR000244 | TensorFlow is a live project/documentation site with an exact linked official source snapshot; external dataset catalogs and loaders are part of its ecosystem. | PRL000105 verified. Apache-2.0, citation, and manifest evidence are scoped to the pinned official source; component normalization is deferred to Stage 3. |
| CR000245 | The Arcade Learning Environment repository transferred from `mgbellemare` to `Farama-Foundation` under the same immutable GitHub repository ID. | VA000048 preserves CR000245 and verifies PRL000275. ROM/test/documentation assets are bounded as support material and were not executed. |
| CR000246 | The Mish paper names CSP-DarkNet-53 but links separate official Mish code. Darknet's project site and pinned source identify the supporting framework. | PRL000277 verified as supporting software, not paper code. The custom public-domain dedication is preserved without an inferred SPDX ID. |
| CR000247 | Bolt is a live but legacy repository with BSD-3-Clause licensing, `setup.py`, and documentation; no project self-citation metadata or bundled research dataset was found. | PRL000283 verified from the primary survey. Compatibility and dependency normalization are deferred to Stage 3. |
| CR000248 | The historical profile URL redirects to Yin Zhu's current HKUST page, which identifies the surveyed paper and links `htl4ic.zip`. | VA000049 and PRL000284 verified. The archive was not downloaded or unpacked, so internal license and dependencies remain bounded unknowns deferred to Stage 3. |

These qualified findings do not constitute Stage-2 verification failures. B010 remains in progress and the next resource is CR000249.
