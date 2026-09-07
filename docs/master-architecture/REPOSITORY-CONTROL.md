# Repository Control Register

**Repository:** `ahafuaej-alt/PINN-Review`  
**Register refreshed:** 2026-09-07  
**Purpose:** maintain the authoritative production, scientific-workstream, historical-provenance, release-governance, and branch-cleanup policy for the PINN Review Atlas.

## Current control baseline

- Production authority: `main`
- Audited production head: `0955a89cfad8c9ef91c27fe9d3dab7aabcd75280` — protected Atlas Reach integration from PR #380
- `main` protection: **ACTIVE** through repository ruleset `main-protection`
- Ruleset target: **only** `refs/heads/main`
- Pull-request integration: **required**
- Force/non-fast-forward updates: **blocked**
- Deletion of `main`: **blocked**
- Bypass actors: **none**
- Required approving reviews: **0**
- Required status checks: **none designated at this checkpoint** because the repository's production release paths do not all expose the same stable check contexts
- Authoritative/preserved branches: **5**
- One merged working branch remains as an ordinary cleanup candidate: `fix/pages-explicit-build-version`
- Obsolete/superseded refs already removed after reachability and provenance review: **97**
- Stage 3 was not modified by repository-governance cleanup or Issue #368 migration work.

Branch age or naming is never sufficient evidence for deletion. Cleanup requires Git reachability plus scientific/operational provenance review and explicit approval.

## Authoritative branch register

| Branch | Role | Status | Merge / retention policy | Next action |
| --- | --- | --- | --- | --- |
| `main` | Production authority | ACTIVE / LIVE / PROTECTED | Production changes must use pull-request integration. Force pushes and deletion are blocked. No broad automation bypass exists. | Maintain protection and observe release paths during genuine future mutations. |
| `data/computational-resources-stage3` | Computational Resources Stage 3 | ACTIVE SCIENTIFIC | Do not merge casually. Integrate only after Stage 3 scientific closure and dedicated integration QA. | Continue checkpointed Stage 3 work only. |
| `data/computational-resources-stage1` | Computational Resources Stage 1 | HISTORICAL / CLOSED | Preserve as scientific provenance even when fully represented in later history. | No active development. |
| `data/computational-resources-stage2` | Computational Resources Stage 2 | HISTORICAL / CLOSED | Preserve as scientific provenance; Stage 2 is scientifically closed. | No active development. |
| `docs/master-atlas-roadmap` | Atlas roadmap and repository-governance documentation | ACTIVE DOCUMENTATION | Maintain architecture, workstream, and repository-control records here until deliberate integration. | Keep this register synchronized with governance state. |

### Current non-authoritative cleanup candidate

`fix/pages-explicit-build-version` at `0293271dfe95f76100bf4057f69fe698a6484ad3` is the merged head of PR #379. It has no ongoing production or scientific role and may be removed through the normal deletion gate. Its presence does not change the five-branch authoritative register.

## Branch-cleanup closure

The repository was reduced from approximately 102 branches to the five authoritative/preserved branches through staged audits. In total **97 obsolete or superseded refs** were removed before the final Issue #368 protection verification.

Every deletion batch was gated by applicable checks: branch purpose and head, comparison with the relevant authority, unique-commit review, merged-PR provenance, open-PR dependencies, scientific-provenance requirements, workflow/documentation dependencies, explicit cleanup approval, and post-deletion verification.

Historical Stage 1 and Stage 2 branches are deliberately retained because scientific provenance value is independent of Git uniqueness.

## Issue #368 — protected production integration

Issue #368 migrated production mutation paths away from unrestricted direct writes and established protected `main` as the production authority.

### Production mutation surface re-audit

The original Issue #368 scope contained:

1. `.github/workflows/update-site-reach.yml`
2. `.github/workflows/update-dataset.yml`
3. `.github/workflows/accept-all-publisher-enrichment.yml`

PR #369 migrated the original continuing writers to controlled release-branch / pull-request integration and merged as `b7c562cd994c1a8eafd9719adc672977e8d23ce6`.

The publisher-metadata acceptance campaign subsequently completed. PR #374 removed `.github/workflows/accept-all-publisher-enrichment.yml` from the active production release surface and merged as `32bb2c7e7d4bf865f9cef6e993634aca0c8a6799`. Its scripts, datasets, audit history, and reproducibility evidence remain preserved.

The protection-readiness re-audit also found a fourth relevant path: `.github/workflows/dataset-update-request.yml`, the Dataset Manager owner/maintainer application workflow, still contained a direct `git push origin HEAD:main`. Enabling protection without repairing it would have broken a live production path.

PR #377, `Route Dataset Manager updates through controlled integration`, changed only that workflow and replaced the direct push with:

- a short-lived `ci/dataset-request-*` release branch;
- a pull request for the exact validated candidate SHA;
- exact-candidate merge through the pull-request API;
- verification that the merged SHA is reachable from `origin/main`;
- temporary release-branch cleanup;
- preservation of canonical and derived dataset validation, issue reporting, and batch-deployment behavior.

Both existing PR gates passed and PR #377 merged as `df27069ada4ed1d65cde2c7a208bfa0653cb662d`.

The active production mutation surface after the re-audit is therefore:

- `.github/workflows/update-site-reach.yml`;
- `.github/workflows/update-dataset.yml` while retained as an intentional manual writer;
- `.github/workflows/dataset-update-request.yml` for Dataset Manager owner/maintainer updates.

No broad Actions bypass is configured or required.

## `main` protection ruleset

Repository ruleset `main-protection` is active and targets only `refs/heads/main`.

Its enforced rules are:

1. deletion blocked;
2. non-fast-forward updates blocked, providing force-push protection;
3. pull-request integration required;
4. zero required approving reviews;
5. merge, squash, and rebase remain allowed merge methods;
6. no bypass actors;
7. no required status-check context at this checkpoint.

The absence of required checks is deliberate. Existing validation workflows are valuable evidence but are not universal across all production release PRs. A required context should be added only after it is proven stable and guaranteed for every applicable protected merge path.

## Protected release evidence

### Atlas Reach — genuine post-protection end-to-end proof

Workflow run `34098629851` was manually dispatched on protected `main` after the final Pages provenance correction had merged.

The update job:

- retrieved the live aggregate GoatCounter snapshot;
- passed Atlas Reach validation and unit tests;
- created candidate commit `4c59baeaf65f35cf45bd63838df886c561b140d3`;
- created short-lived branch `ci/atlas-reach-34098629851-1`;
- opened PR #380 against protected `main`;
- merged PR #380 as the integrated production commit `0955a89cfad8c9ef91c27fe9d3dab7aabcd75280`;
- verified the merge was reachable from `origin/main`;
- deleted the temporary release branch.

The reusable Pages job then received exactly:

`source_sha=0955a89cfad8c9ef91c27fe9d3dab7aabcd75280`

It checked out and verified that exact commit, passed canonical/generated dataset validation, static-site contracts, and the full browser QA suite, uploaded Pages artifact `10009669241`, and created the Pages deployment with explicit:

`pages_build_version=0955a89cfad8c9ef91c27fe9d3dab7aabcd75280`

The deployment completed successfully for that same exact SHA.

This is the required genuine protected-`main` release proof: **validated mutation → temporary release branch → pull request → protected merge → exact integrated production SHA → exact-SHA Pages deployment → successful live deployment**.

### Pages provenance correction

The first post-protection Atlas Reach test, run `34097233963`, successfully proved the protected PR/merge path but exposed that `actions/deploy-pages@v4` still registered the reusable-workflow caller SHA as `pages_build_version` even when the workflow checked out the intended integrated SHA.

PR #379, `Set explicit Pages deployment build version`, changed only `.github/workflows/pages.yml`. It preserved exact-source checkout and all existing validation, but replaced the final deployment action with the Pages deployment API so the validated source commit is supplied explicitly as `pages_build_version`. All five PR validation workflows passed. PR #379 merged as `4d09000cdd41f8b6f35ae4c93d2849eee85a7cfc`.

Run `34098629851` and PR #380 supplied the successful end-to-end runtime proof for that correction.

### Dataset release paths

The manual canonical dataset writer and the Dataset Manager owner/maintainer writer have protection-compatible controlled-integration designs. PR #377 removed the remaining direct-`main` Dataset Manager write before protection was enabled.

No unsupported or synthetic scientific mutation was manufactured merely to exercise these paths after protection. Their next genuine production mutations should be observed as operational regression evidence. This is a continuing monitoring responsibility, not a reason to keep Issue #368 open after the repository-level protected release boundary has been proven end to end.

## Issue #368 closure basis

The repository-level acceptance gate is satisfied because:

- all relevant production mutation paths were re-audited;
- the remaining direct Dataset Manager write was repaired before protection;
- publisher-metadata acceptance was retired cleanly;
- `main` is protected by an active branch ruleset with PR integration required, force pushes blocked, deletion blocked, and no bypass actors;
- a genuine Atlas Reach mutation successfully traversed the protected integration boundary;
- the exact integrated merge SHA was deployed through GitHub Pages;
- full canonical, static, and browser validation passed;
- temporary release-branch cleanup succeeded;
- Stage 3 remained isolated.

Future genuine Dataset Manager or manual dataset updates should be checked against the same boundary without inventing scientific changes for test purposes.

## Repository control rules

1. **`main` is the protected production authority.** No manual scientific or feature development is performed directly on it.
2. **Production mutation paths integrate through pull requests.** No broad automation bypass is configured.
3. **One clearly named active branch per major workstream.** Use conventional prefixes such as `data/`, `feat/`, `fix/`, `docs/`, `ci/`, `refactor/`, `test/`, or `chore/`.
4. **Active scientific branches are checkpointed and merged only after scientific closure and integration QA.**
5. **No branch deletion based on age, apparent inactivity, or naming.** Cleanup requires Git reachability plus provenance/supersession review.
6. **Branches with unique commits are preserved until their unique work is explicitly classified.**
7. **Historical scientific branches may be retained even when fully integrated.** Their provenance value is independent of Git uniqueness.
8. **Force-updating an established research branch is prohibited unless a specific recovery procedure explicitly requires it.**
9. **Required status checks are added to `main` only when their exact contexts are stable and universal for the protected merge paths to which they apply.**
10. **Update this register whenever an authoritative workstream changes state, is integrated, archived, or approved for deletion.**

## Deletion gate

A branch may be proposed for deletion only when all applicable conditions are true:

- `ahead_by == 0` relative to the relevant authoritative branch, or all unique commits are intentionally superseded/archived/recovered elsewhere;
- no active workflow depends on the branch;
- no open pull request depends on the branch;
- no scientific checkpoint/provenance requirement requires retention;
- no documentation or release procedure designates it as authoritative;
- deletion has explicit cleanup approval.

## Continuing operational observations

Issue #368 can close after the verified protected Atlas Reach release. The following are non-blocking operational observations for future genuine events:

1. observe the next genuine Dataset Manager owner/maintainer mutation through the PR #377 path;
2. observe the next genuine `.github/workflows/update-dataset.yml` mutation if that manual writer remains in use;
3. add mandatory status-check contexts only if later evidence shows that specific contexts are stable and universal for the relevant protected merge paths;
4. remove `fix/pages-explicit-build-version` through the normal deletion gate when convenient.
