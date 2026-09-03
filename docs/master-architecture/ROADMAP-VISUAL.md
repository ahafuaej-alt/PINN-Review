# PINN Review Atlas — Master Roadmap Visual

This page is the visual companion to [`CONTROLLED-ROADMAP.md`](./CONTROLLED-ROADMAP.md). It is documentation-only and does not authorize production changes.

```mermaid
flowchart TD

  subgraph A[Phase A — Foundation / Specification — Tasks 0–10]
    T0[Task 0<br/>Preserve authority & memory]
    T1[Task 1<br/>Formal Master Plan]
    T2[Task 2<br/>Permanent Architecture]
    T3[Task 3<br/>Complete Paper Profile]
    T4[Task 4<br/>PINN Type Taxonomy]
    T5[Task 5<br/>Methodological Extensibility]
    T6[Task 6<br/>Cross-Paper Intelligence]
    T7[Task 7<br/>Frameworks + 98-cell Matrix]
    T8[Task 8<br/>Framework Builder Idea]
    T9[Task 9<br/>Audit Existing Atlas Pages]
    T10[Task 10<br/>Metadata History & Propagation]
  end

  subgraph B[Phase B — Infrastructure — Tasks 11–13]
    T11[Task 11<br/>Choose Database Platform]
    T12[Task 12<br/>PostgreSQL Relational Model]
    T13[Task 13<br/>Non-production DB Prototype]
  end

  subgraph C[Phase C — Tool / UI Prototypes — Tasks 14–18]
    T14[Task 14<br/>Paper Ingestion / Extraction / Review]
    T15[Task 15<br/>Architecture & Data Map]
    T16[Task 16<br/>Paper Profile Prototype]
    T17[Task 17<br/>Synthesis Explorer Prototype]
    T18[Task 18<br/>Reconcile with Existing Atlas]
  end

  subgraph D[Phase D — Production Scale-Out — Tasks 19–21]
    T19[Task 19<br/>Production Migration Plan]
    T20[Task 20<br/>36-paper Production Pilot]
    T21[Task 21<br/>Full 853-paper Extraction]
  end

  subgraph E[Phase E — Continuous Lifecycle]
    T22[Task 22<br/>Ongoing Atlas Lifecycle]
  end

  T0 --> T1
  T1 --> T2
  T1 --> T3
  T1 --> T4
  T1 --> T5
  T1 --> T6
  T1 --> T7
  T1 --> T8
  T1 --> T9
  T1 --> T10

  T2 --> T3
  T2 --> T6
  T2 --> T7
  T2 --> T9
  T9 --> T10

  T1 --> T11
  T9 --> T11
  T10 --> T11
  T3 --> T12
  T4 --> T12
  T5 --> T12
  T6 --> T12
  T7 --> T12
  T11 --> T12
  T12 --> T13

  T13 --> T14
  T13 --> T15
  T13 --> T16
  T13 --> T17
  T14 --> T18
  T15 --> T18
  T16 --> T18
  T17 --> T18

  T18 --> T19
  T19 --> T20
  T20 --> T21
  T21 --> T22

  T8 -. optional/post-v1 .-> T15
  T8 -. optional/post-v1 .-> T17
```

## How to read this

1. **Task 1 is the current next substantive task.**
2. Tasks 2–10 develop and audit the scientific/architectural contract before infrastructure is selected.
3. Tasks 11–13 select and prove the database architecture in isolation.
4. Tasks 14–18 build controlled tools and UI prototypes and reconcile them against the existing Atlas.
5. Tasks 19–21 govern production migration and scientific scale-out.
6. Task 22 is permanent lifecycle work.

## Detailed hierarchy

For every Task N and Task N.x instruction, use [`CONTROLLED-ROADMAP.md`](./CONTROLLED-ROADMAP.md). The raw Mermaid source is also retained in [`roadmap-flow.mmd`](./roadmap-flow.mmd) so other tooling can reuse it.
