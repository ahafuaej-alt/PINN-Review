# Computational Resources Stage 3 — Quality Report

Status date: 2026-09-04  
Acceptance checkpoint: Stage3-A01  
Pilot extraction checkpoint: Stage3-P07  
Latest scale-out checkpoint: Stage3-S067

## Current QA status

Status: **PASS**

Stage3-D01 remains accepted without schema modification. Static-only execution boundaries, Stage-2 authority, source-scope semantics, missing-value semantics, identifier continuity, resource → experiment → configuration ontology, type-specific profiles, and the R0–R4 ceiling remain unchanged.

## Stage3-S067 checkpoint

`CR000076` preserves final Stage-2 authority for `sjiang23/trapz-PiNN`: the repository remains unavailable, no immutable revision can be resolved, license remains unknown, and `PRL000168` to Atlas paper 543 remains not verified/manual-review-required. A fresh static GitHub API check again returned 404. No experiment or configuration is synthesized from unavailable source, and reproducibility is **R0**.

`CR000077` preserves final Stage-2 identity for `ardamavi/PI-rCNN` at pinned commit `e78dc0f61eae0644d4384d1fd7d9509a0f98f39c`. The bounded extraction records one executable reference experiment and one default configuration: a 128×128 two-channel encoder–ConvLSTM–decoder with PDDO physical/latent residuals, RMSprop optimization, 2000 epochs, 100-step temporal batches over 1000 dataset steps, and learning rate 1e-3.

One explicit high-confidence conflict is retained. Final Stage-2 authority marks `PRL000169` to Atlas paper 544 as a verified official relationship and records a Zobeiry/Humayun 2021 README citation, while the pinned README at the authoritative SHA instead cites Mavi, Bekar, Haghighat, and Madenci (2022), arXiv:2210.12177. Stage 3 does not rewrite Stage 2; both source-scoped claims are preserved.

Static reproducibility for `CR000077` is **R2**. README and requirements specify CentOS/Python/Conda/CUDA/CuDNN/Cudatoolkit plus exact Python-package versions, installation command, entrypoint and hardware. Advancement is blocked because `../Dataset/dataset.npy` is not bundled, no explicit seed is set despite stochastic initializers, no pretrained checkpoint is present, and the citation conflict remains unresolved.

Checkpoint additions: **2 resources, 1 experiment, 1 configuration, 14 technical-evidence records, 2 reproducibility assessments, 10 unresolved findings, 1 explicit conflict**.

No dependency installation, dataset acquisition/generation, model loading, training, inference, evaluation, test, benchmark, container, accelerator workload, or external service was executed.

## Aggregate batch state

Canonical aggregate QA is **PASS for SOB001–SOB007**. `SOB008` is in progress at **2 / 10** with `CR000076` and `CR000077` complete. Aggregate SOB008 QA is not yet due.

## Current cumulative totals

After `Stage3-S067`: **82 resources, 142 experiments, 299 configurations, 1074 technical-evidence records, 82 reproducibility assessments, 523 unresolved findings, 95 explicit conflicts**.

## Registry accounting

With 363 independently extractable technical identities and 82 completed Stage-3 technical records, **281** remain.

## Continuation QA

`Stage3-S067` QA is PASS. The latest applicable aggregate QA remains `SOB007` PASS. The exact next independently extractable resource is **`CR000078`**, to be processed as `Stage3-S068`.

## Stage boundaries

Stage 1 and Stage 2 remain closed and read-only. Public Atlas/site files and `05-curated/` remain unchanged. No scientific workload execution occurred. R5 remains prohibited.
