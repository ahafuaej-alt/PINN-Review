# Stage 3 report-state reconciliation — RC08

Date: 2026-09-13
Reconciliation: `Stage3-RC08`
Branch: `data/computational-resources-stage3`
Expected parent: `95df13a0d0f2758930622c410669d4b81b2ed0ed`

## Scope and decision

Pre-publication readback for S238 found a report-state discontinuity introduced at S234. The accepted S233 checkpoint records cumulative totals of 271 resources, 343 experiments, 622 configurations, 2728 technical-evidence records, 271 reproducibility assessments, 1431 unresolved findings and 147 explicit conflicts, with next unresolved ID `S3U-1432`. S234 then replaced those report totals with values from a different state while its own checkpoint QA recorded only two new resources, no experiments/configurations, 12 technical-evidence rows, two reproducibility assessments, two unresolved findings and no conflicts.

The same contaminated report baseline propagated through S237. Scientific checkpoint files for S234–S237 remain internally bounded to CR000275–CR000280 and their Stage-2 authorities; the discontinuity is confined to cumulative report values and report-only unresolved labels.

## Reconciliation

Applying the published S234–S237 deltas to the accepted S233 cumulative baseline gives:

- resources: 277;
- experiments: 343;
- configurations: 622;
- technical-evidence records: 2763;
- reproducibility assessments: 277;
- unresolved findings: 1437;
- explicit conflicts: 147.

The unresolved findings created by S234–S237 are relabeled sequentially as `S3U-1432` through `S3U-1437`, continuing from S233. The report-only labels `S3U-1572` through `S3U-1577` are superseded. No extraction-log record used those labels, so no scientific/evidence record reference is changed.

This reconciliation is count-neutral with respect to the actual published checkpoint deltas and changes no Stage-1 or historical Stage-2 file, accepted schema or methodology, resource/experiment/configuration/evidence/reproducibility record, public Atlas/site file, `05-curated/`, or `main`.

## Validation and continuation

Checkpoint-delta arithmetic from S233 through S237 passes; resource and evidence totals agree with the live reports where those reports remained continuous. Experiment/configuration totals remain unchanged because S234–S237 each record zero additions. Explicit conflicts remain 147 because S234–S237 each record zero additions. Unresolved continuity is restored from S233's next ID.

`SOB026` remains PASS (10/10). `SOB027` remains 7/10. Exact continuation is `CR000281 → Stage3-S238`.
