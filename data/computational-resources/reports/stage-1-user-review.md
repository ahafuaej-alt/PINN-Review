# Stage 1 user-review addendum

This addendum records the manual review supplied after the initial Stage 1 structural acceptance. It does not alter the preserved 648-line source snapshot. Confirmed corrections and curation decisions are stored in `01-inventory/manual-review-decisions.jsonl`; useful repositories discovered through GitHub profiles are stored in `01-inventory/profile-discoveries.jsonl`.

## Confirmed mapping rules

- Expressions such as `[32] from [701]`, `[100] from [367]`, `[123] from [367]`, and analogous forms use the outer number as the Atlas paper ID. The inner number is a reference number internal to that Atlas paper and must not be promoted to an Atlas ID.
- DeepXDE: Atlas `[234]` is a direct association; `[367]` and `[495]` are secondary-review mentions.
- `maziarraissi/PINNs`: the resource is mentioned across Atlas `[414,447,450,526]`, but the relationship type for each paper remains a Stage 2 paper-level verification task.

## Confirmed identity corrections

- Delta-PINNs: the source form `https://github.com/fashli/Delta-PINNs` is invalid. The correct repository for Atlas `[312]` is `https://github.com/fsahli/Delta-PINNs`. The invalid source observation remains preserved; Stage 2 must materialize `CR000184` as the canonical resource for paper 312 instead of `CR000021`.
- NeuroDiffEq: `https://github.com/NeuroDiffGym/neurodiffeq` is the correct repository for Atlas `[745]`. Other owner/name variants remain pending paper-level verification before consolidation.
- PIRBFNN `[804]`: canonical repository confirmed as `https://github.com/lsj1211/PIRBFNN-for-modeling-two-phase-mutil-well-Darcy-flow`.

## Curation decisions

- PI-MPN `[27]` legitimately has both code/resource and dataset contexts because the GitHub repository contains dataset material.
- Non-PINN code such as CNNforCFD `[459]` remains in the registry as adjacent research code because it is associated with an Atlas paper and can support PINN research or development.
- Supporting libraries such as PyTorch `[467]` remain in the registry and are eligible for the future `Frameworks & Libraries` view even though they are not PINN implementations.
- GitHub profiles are valid resource types when a paper explicitly provides only a profile-level code location. Paper `[778]` points to `https://github.com/JeongsLee/`; specific repositories under that profile are not attributed to `[778]` without Stage 2 evidence.
- `https://github.com/HamidrezaEiv` is retained as a useful profile-level resource without an invented Atlas-paper mapping.
- MULTIPINN (`CR000221`) is confirmed as a PINN framework/library. Its related ScienceDirect paper (`CR000222`) is a candidate for future Atlas consideration, not a current Atlas-paper relationship.

## Useful profile discoveries retained for Stage 2

### JeongsLee
- `https://github.com/JeongsLee/PINN-for-ExtremeMechanics`
- `https://github.com/JeongsLee/ADAF`
- `https://github.com/JeongsLee/NTO-ADA`
- `https://github.com/JeongsLee/MOTION`

### HamidrezaEiv
- `https://github.com/KTH-FlowAI/Enhancement-of-PIV-via-PINNs` — already present as `CR000024`, Atlas `[339]`
- `https://github.com/HamidrezaEiv/EquiNO`
- `https://github.com/KTH-Nek5000/9eqModel_KNFandLSTM`
- `https://github.com/HamidrezaEiv/KPCA-DeepONet`
- `https://github.com/HamidrezaEiv/DiffBatt`
- `https://github.com/HamidrezaEiv/FE2-Computations-With-Deep-Neural-Networks`

## Live GitHub identity checks performed during this addendum

Confirmed public repositories:
- `fsahli/Delta-PINNs`
- `NeuroDiffGym/neurodiffeq`
- `labadt/multipinn`
- `JeongsLee/PINN-for-ExtremeMechanics`
- `JeongsLee/ADAF`
- `JeongsLee/NTO-ADA`
- `JeongsLee/MOTION`
- `HamidrezaEiv/EquiNO`
- `KTH-FlowAI/Enhancement-of-PIV-via-PINNs`
- `lsj1211/PIRBFNN-for-modeling-two-phase-mutil-well-Darcy-flow`

Current GitHub checks returned not found for:
- `fashli/Delta-PINNs`
- `neurodiffeq/neurodiffeq`
- `NeuroDiffCym/neurodiffeq`

The latter two NeuroDiffEq variants remain provenance evidence from secondary sources; their paper-level meaning will be resolved in Stage 2 rather than silently deleted.
