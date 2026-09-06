# Repository Control Register

**Repository:** `ahafuaej-alt/PINN-Review`  
**Register refreshed:** 2026-09-07  
**Purpose:** maintain the authoritative production, scientific-workstream, historical-provenance, release-governance, and branch-cleanup policy for the PINN Review Atlas.

## Current control baseline

- Production authority: `main`
- Audited production head: `00aaccc75f2657a60d346da5290425683bbf149c` — `Keep Dataset Manager derived data synchronized`
- Current branch count: **5**
- Open pull requests at the final branch-cleanup checkpoint: **0**
- `main` protection: **not yet enabled**
- Repository rulesets: **none at the pre-protection checkpoint**
- Obsolete/superseded branch refs removed after reachability and provenance review: **97**
- Stage 3 was not modified by repository-governance cleanup or Issue #368 migration work.

Branch age or naming is never sufficient evidence for deletion. Cleanup requires Git reachability plus scientific/operational provenance review and explicit approval.

## Authoritative branch register

| Branch | Role | Status | Merge / retention policy | Next action |
| --- | --- | --- | --- | --- |
| `main` | Production authority | ACTIVE / LIVE | Production changes must use controlled integration; no uncontrolled scientific or feature development directly on `main`. | Complete Issue #368 protection and protected-release verification. |
| `data/computational-resources-stage3` | Computational Resources Stage 3 | ACTIVE SCIENTIFIC | Do not merge casually. Integrate only after Stage 3 scientific closure and dedicated integration QA. | Continue checkpointed Stage 3 work only. |
| `data/computational-resources-stage1` | Computational Resources Stage 1 | HISTORICAL / CLOSED | Preserve as scientific provenance even when fully represented in later history. | No active development. |
| `data/computational-resources-stage2` | Computational Resources Stage 2 | HISTORICAL / CLOSED | Preserve as scientific provenance; Stage 2 is scientifically closed. | No active development. |
| `docs/master-atlas-roadmap` | Atlas roadmap and repository-governance documentation | ACTIVE DOCUMENTATION | Maintain architecture, workstream, and repository-control records here until deliberate integration. | Keep this register synchronized with governance state. |

At the final cleanup checkpoint, no legacy `agent/*`, superseded `feat/*`/`fix/*`, temporary `chore/*`, obsolete `ci/*`, or other non-authoritative working branches remained.

## Branch-cleanup closure

The repository was reduced from approximately 102 branches to the five branches above through staged audits. In total **97 obsolete or superseded refs** were removed.

Every deletion batch was gated by applicable checks:

- branch purpose and current head identified;
- comparison against the relevant authoritative branch;
- unique commits reviewed for merge/squash equivalence or intentional obsolescence;
- merged pull-request provenance checked where applicable;
- open pull-request dependencies checked;
- scientific provenance requirements checked;
- workflow/documentation dependencies checked where relevant;
- explicit cleanup approval obtained;
- post-deletion branch inventory and `main`/Stage 3 heads verified.

Historical Stage 1 and Stage 2 branches were deliberately retained despite their closed status because scientific provenance value is independent of Git uniqueness.

## Issue #368 — protected production integration

Issue #368 governs migration from unrestricted direct writes to a protected `main` production authority.

### Original three mutating workflows

The original scope contained:

1. `.github/workflows/update-site-reach.yml`
2. `.github/workflows/update-dataset.yml`
3. `.github/workflows/accept-all-publisher-enrichment.yml`

PR #369 migrated the three original direct-`main` writers to controlled release-branch / pull-request integration and merged as `b7c562cd994c1a8eafd9719adc672977e8d23ce6` after migration validation passed.

The publisher-metadata acceptance campaign subsequently completed. PR #374 removed `.github/workflows/accept-all-publisher-enrichment.yml` from the active production release surface and merged as `32bb2c7e7d4bf865f9cef6e993634aca0c8a6799`. Its underlying scripts, datasets, audit history, and reproducibility evidence remain preserved. No artificial metadata mutation is required solely for governance testing.

Therefore the continuing production writers in Issue #368 are:

- `.github/workflows/update-site-reach.yml`
- `.github/workflows/update-dataset.yml`

Current source inspection confirms these workflows publish candidate commits to short-lived conventional `ci/*` branches, create pull requests, merge the exact candidate SHA, verify the merge SHA is reachable from `origin/main`, remove the temporary release branch when possible, and pass the integrated SHA into the reusable Pages deployment workflow. A current default-branch search found no remaining literal `git push origin HEAD:main` publication path.

### Genuine release evidence

#### Atlas Reach

A genuine mutating re-run of workflow run `33851670491` retrieved **313 visits across 12 countries**, passed validation, created `ci/atlas-reach-33851670491-2`, opened PR #372 through `github-actions[bot]`, and merged into `main` as `ea7fddeec515328a0021f24d3163f65971977d28`. The temporary release branch was removed.

That run proved the controlled release-branch → workflow-created PR → merge path. It also exposed a Pages provenance defect: although the artifact was built from the intended integrated SHA, `actions/deploy-pages@v4` initially registered the reusable-workflow caller SHA as `pages_build_version`.

PR #373 corrected the reusable Pages workflow by asserting checkout provenance and setting the deployment step's `GITHUB_SHA` to the requested `source_sha`; it merged as `2bd57d0e8864114ddb9d9171d513c75ccb93830f`.

A fresh Atlas Reach mutation using that corrected Pages revision remains the cleanest path-specific runtime proof for the Atlas Reach acceptance item if no later mutating Reach run has already supplied it.

#### Canonical dataset / synchronized deployment

Paper 810 was applied as canonical dataset version **2.3.1** at commit `fbf2a224961031771b750d6fd0f9e2fa53ec4f2a`. Its first batch deployment exposed a stale derived Atlas-overview condition. PR #376 repaired deterministic derived-data synchronization and merged as current production commit `00aaccc75f2657a60d346da5290425683bbf149c`.

Verified deployment run `34058677903` then deployed the synchronized Atlas successfully. Runtime logs prove:

- reusable `pages.yml` received `source_sha=00aaccc75f2657a60d346da5290425683bbf149c`;
- checkout `HEAD` equaled that exact SHA;
- canonical/generated dataset validation and full static/browser QA passed;
- `actions/deploy-pages@v4` ran with `GITHUB_SHA=00aaccc75f2657a60d346da5290425683bbf149c`;
- the Pages API payload registered `pages_build_version=00aaccc75f2657a60d346da5290425683bbf149c`;
- the deployment for that exact SHA reported success.

This is strong post-PR-#373 proof that the reusable Pages exact-SHA provenance mechanism works. It does **not by itself prove** that `.github/workflows/update-dataset.yml` completed its own controlled `ci/dataset-release-*` → workflow-created PR → merge path, because the Paper 810 application used the Dataset Manager owner-automation/batch-deployment route. That distinction must remain explicit until a genuine mutation through the migrated canonical writer is verified or the active writer architecture is deliberately revised.

## Target `main` protection policy

Protection should enforce the following without a broad workflow bypass:

1. require pull-request integration into `main`;
2. block force pushes;
3. block deletion of `main`;
4. prevent uncontrolled direct development pushes;
5. allow GitHub Actions to create release pull requests, but do not grant a blanket bypass around `main` protection;
6. require status checks only when their exact contexts are stable and guaranteed to run for every protected merge path.

At this register refresh, no required status-check context is designated. The repository has multiple workflow types and some checks are PR- or path-specific; unreliable or non-universal contexts must not be made blocking merely for appearance of strictness.

## Repository control rules

1. **`main` is production authority.** No manual scientific or feature development is performed directly on it.
2. **One clearly named active branch per major workstream.** Use conventional prefixes such as `data/`, `feat/`, `fix/`, `docs/`, `ci/`, `refactor/`, `test/`, or `chore/`.
3. **Active scientific branches are checkpointed and merged only after scientific closure and integration QA.**
4. **No branch deletion based on age, apparent inactivity, or naming.** Cleanup requires Git reachability plus provenance/supersession review.
5. **Branches with unique commits are preserved until their unique work is explicitly classified.**
6. **Historical scientific branches may be retained even when fully integrated.** Their provenance value is independent of Git uniqueness.
7. **Force-updating an established research branch is prohibited unless a specific recovery procedure explicitly requires it.**
8. **Update this register whenever an authoritative workstream changes state, is integrated, archived, or approved for deletion.**
9. **No broad Actions bypass for protected `main`.** Automation should use the same governed integration boundary as other production changes wherever practical.

## Deletion gate

A branch may be proposed for deletion only when all applicable conditions are true:

- `ahead_by == 0` relative to the relevant authoritative branch, or all unique commits are intentionally superseded/archived/recovered elsewhere;
- no active workflow depends on the branch;
- no open pull request depends on the branch;
- no scientific checkpoint/provenance requirement requires retention;
- no documentation or release procedure designates it as authoritative;
- deletion has explicit cleanup approval.

## Remaining Issue #368 gates

Before Issue #368 is closed:

1. enable the target protection/ruleset on `main`;
2. verify force pushes and branch deletion are blocked;
3. verify a continuing production release path can still create a controlled release PR and integrate under protected `main`;
4. verify Pages deploys the resulting exact integrated production SHA;
5. obtain a genuine controlled-path runtime proof for the canonical dataset writer if `.github/workflows/update-dataset.yml` remains an active production writer;
6. update this register again with the actual protection/ruleset state and protected-release evidence;
7. close Issue #368 only after all applicable gates pass.

Until those gates pass, the repository has a clean branch topology and protection-compatible workflow design, but `main` must not be described as protected.