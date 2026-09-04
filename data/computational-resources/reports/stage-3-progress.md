# Computational Resources Stage 3 — Progress

Status date: 2026-09-04

| Field | Value |
|---|---|
| Stage-3 phase | Controlled scale-out in progress |
| Current planning checkpoint | Stage3-SO-D01 |
| Pilot extraction checkpoint | Stage3-P07 |
| Pilot acceptance checkpoint | Stage3-A01 |
| Last completed scale-out checkpoint | Stage3-S067 |
| Next scale-out checkpoint | Stage3-S068 |
| Latest checkpoint resource | CR000077 |
| Forward frontier resource | CR000077 |
| Next resource | CR000078 |
| Next planned checkpoint resources | CR000078 |
| Current scale-out batch | SOB008 |
| Current batch completed members | CR000076–CR000077 — 2 / 10 |
| Completed Stage-3 technical resource records | 82 |
| Resolved non-independent registry identity encountered | CR000021 → CR000184 |
| Remaining independently extractable registry resources | 281 |
| Approved pilot resources completed | 10 / 10 |
| Completed experiment count | 142 |
| Completed configuration count | 299 |
| Technical evidence records | 1074 |
| Static reproducibility assessments | 82 |
| Current QA status | PASS |
| Current unresolved technical item count | 523 |
| Next unresolved ID | S3U-0524 |
| Current conflicting-evidence finding count | 95 |
| Aggregate batch QA | SOB001–SOB007 PASS; SOB008 in progress 2 / 10 |
| Methodology status | Stage3-D01 accepted without schema change |
| Control reconciliation | `reports/stage-3-control-reconciliation-01.md` |

## Current continuation state

`Stage3-S067` completes `CR000076` and `CR000077`.

`CR000076` preserves final Stage-2 authority for `https://github.com/sjiang23/trapz-PiNN`: repository availability remains `unavailable`, repository revision remains `not_available`, license remains `unknown`, and `PRL000168` to Atlas paper 543 remains `not_verified` with manual review required. The live GitHub repository endpoint still returns 404, so no experiment or configuration is manufactured and static reproducibility is R0.

`CR000077` preserves the Stage-2 pinned commit `e78dc0f61eae0644d4384d1fd7d9509a0f98f39c`. Bounded extraction represents the executable PI-rCNN reference pipeline: a 128×128 two-channel encoder–ConvLSTM–decoder architecture, PDDO-based physical and latent residuals, RMSprop training, explicit environment/package versions, and an external `Dataset/dataset.npy` requirement. The final Stage-2 verified relationship `PRL000169` to Atlas paper 544 is retained unchanged, while a high-confidence conflict records that the pinned README instead cites the 2022 Mavi–Bekar–Haghighat–Madenci arXiv work.

Static reproducibility is R2 for `CR000077`: environment, installation, entrypoint, architecture, physics residual, training procedure, and hardware are substantially specified, but the required dataset is absent from the pinned tree, no explicit random seed is set, no pretrained checkpoint is bundled, and the citation conflict blocks higher classification.

`SOB008` is now 2/10. Aggregate batch QA is not yet due. The exact next independently extractable resource is **`CR000078`**.

The Stage-2 registry contains 364 entries. `CR000021` remains a resolved non-independent identity canonically mapped to `CR000184`, leaving 363 independently extractable technical identities. With 82 Stage-3 resource records complete, **281** remain.

## Current cumulative totals

After `Stage3-S067`: **82 resources, 142 experiments, 299 configurations, 1074 technical-evidence records, 82 reproducibility assessments, 523 unresolved findings, 95 explicit conflicts**.

## Continuation rule

Every continuation must verify the live branch head, read this report, the accepted scale-out plan, active unresolved register, latest checkpoint QA, latest applicable aggregate QA, and control reconciliation; resume from the exact `Next resource`; preserve final Stage-2 authority and source scope; stay static-only; validate schemas and cross-references; and publish only after QA passes.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific resource, dependency, environment, model, dataset, training, inference, evaluation, test, benchmark, or external service is executed. R5 remains prohibited.

## Exact next action

Start **`Stage3-S068`** with **`CR000078`**.
