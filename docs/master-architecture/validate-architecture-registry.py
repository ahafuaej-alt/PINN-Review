#!/usr/bin/env python3
"""Task 2.6: validate shared PINN Review Atlas architecture metadata.

Read-only validation. This file defines no scientific meaning and modifies no data.
Python standard library only.
"""
from __future__ import annotations
import argparse, json, re, sys
from collections import Counter
from pathlib import Path

def die(msg): raise AssertionError(msg)
def load(path):
    try: return json.loads(path.read_text(encoding="utf-8"))
    except Exception as e: die(f"cannot parse {path}: {e}")

def node_ids(text): return set(re.findall(r"(?m)^\s*([A-Za-z][A-Za-z0-9_]*)\s*\[", text))
def subgraph_ids(text): return set(re.findall(r"(?m)^\s*subgraph\s+([A-Za-z][A-Za-z0-9_]*)\s*\[", text))
def table_names(text): return re.findall(r"(?m)^\s*Table\s+([A-Za-z_][A-Za-z0-9_]*)\s*\{", text)
def refs(text): return re.findall(r"(?m)^\s*Ref:\s+.+$", text)

def stable_ids(r):
    out=[]
    for lid,_,_,_,comps in r["levels"]:
        out.append(lid); out += [c[0] for c in comps]
    out += [g[0] for g in r["governance"]]
    out += [x[0] for x in r["relations"]]
    out += [x[0] for x in r["surfaces"]]
    out += [r["future_surface"][0]]
    out += [x[0] for x in r["bounded_external"]]
    return out

def endpoint(stable_id,r):
    for lid,_,_,anchor,comps in r["levels"]:
        if stable_id==lid: return anchor
        for sid,_,mid in comps:
            if stable_id==sid: return mid
    for sid,_,_,anchor,_,_,_ in r["bounded_external"]:
        if stable_id==sid: return anchor
    die(f"no Mermaid binding for {stable_id}")

def validate_registry(r):
    checks=[]
    assert r["meta"]["scientific_authority"] is False
    assert r["meta"]["may_define_scientific_meaning"] is False
    checks.append("authority boundary")
    assert [len(x[4]) for x in r["levels"]]==[4,5,7,20,7,6,8,9]
    assert len(r["governance"])==14
    ids=stable_ids(r); assert len(ids)==len(set(ids)), [k for k,v in Counter(ids).items() if v>1]
    checks += ["L1-L8/G1-G14 counts","stable ID uniqueness"]
    c=r["contracts"]
    assert (c["R"],c["X"],c["H"],c["requirements"],c["orphans"])==(48,9,11,111,0)
    checks.append("R/X/H/111 contract")
    assert len(r["surfaces"])==26 and c["current_routes"]==26
    assert all(x[2]=="current_baseline" and x[4] is False for x in r["surfaces"])
    assert c["route_ceiling"] is False and c["final_ia"] is False and c["task9"] is True
    checks.append("26-route/future-page safeguard")
    cr=r["bounded_external"][0]
    assert cr[0]=="EXT-CR" and cr[2]=="L8-U9" and cr[4] is False and cr[5] is False
    checks.append("CR bounded boundary")
    all_tables=[t for _,_,_,ts in r["technical"]["families"] for t in ts]
    assert len(all_tables)==108==r["technical"]["tables"]
    assert len(all_tables)==len(set(all_tables))
    checks.append("108 technical tables classified once")
    return checks

def validate_mermaid(r,text):
    checks=[]; nodes=node_ids(text); subs=subgraph_ids(text)
    for lid,_,_,anchor,comps in r["levels"]:
        assert lid in subs, f"missing subgraph {lid}"
        assert anchor in nodes, f"missing anchor {anchor}"
        for sid,_,mid in comps: assert mid in nodes, f"missing {sid}/{mid}"
    assert "GOV" in subs and "CR" in subs and "CRH" in nodes
    for gid,_,mid in r["governance"]: assert mid in nodes, f"missing {gid}"
    checks.append("Mermaid bindings")
    for rid,src,tgt,_,label in r["relations"]:
        assert endpoint(src,r) in text and endpoint(tgt,r) in text, f"missing endpoints {rid}"
        assert label in text, f"missing relation label {rid}"
    checks.append("Mermaid core relations")
    return checks

def validate_viewer(mmd,html):
    m=re.search(r'<script\s+id=["\']mermaid-source["\']\s+type=["\']text/plain["\']>(.*?)</script>',html,re.S)
    assert m, "viewer lacks embedded Mermaid source"
    assert m.group(1).strip()==mmd.strip(), "viewer embedded source drifted from .mmd"
    return ["viewer snapshot equals Mermaid source"]

def validate_dbml(r,text):
    ts=table_names(text); rs=refs(text)
    assert len(ts)==r["technical"]["tables"]==108, len(ts)
    assert len(rs)==r["technical"]["refs"]==151, len(rs)
    assert len(ts)==len(set(ts)), "duplicate DBML tables"
    registered={t for _,_,_,xs in r["technical"]["families"] for t in xs}
    assert set(ts)==registered, f"table registry drift: missing={sorted(registered-set(ts))}; unregistered={sorted(set(ts)-registered)}"
    assert len({f"T::{t}" for t in ts})==108
    return ["DBML 108-table inventory","DBML 151 refs","one family + deterministic table ID"]

def validate_status(r,text):
    assert "atlas-architecture-registry.json" in text
    assert re.search(r"\|\s*2\.6\b.*\*\*PASS\s*[—-]\s*COMPLETE\*\*",text)
    return ["Task 2.6 status binding"]

def main():
    p=argparse.ArgumentParser(); p.add_argument("--root",default="."); a=p.parse_args()
    base=Path(a.root).resolve()/"docs"/"master-architecture"
    r=load(base/"atlas-architecture-registry.json")
    mmd=(base/"atlas-conceptual-architecture.mmd").read_text(encoding="utf-8")
    dbml=(base/"atlas-technical-erd.dbml").read_text(encoding="utf-8")
    html=(base/"atlas-conceptual-architecture.html").read_text(encoding="utf-8")
    status=(base/"TASK-2-STATUS.md").read_text(encoding="utf-8")
    checks=[]
    checks+=validate_registry(r); checks+=validate_mermaid(r,mmd); checks+=validate_viewer(mmd,html)
    checks+=validate_dbml(r,dbml); checks+=validate_status(r,status)
    print(f"PASS: {len(checks)} architecture drift checks")
    for x in checks: print(" -",x)
    return 0

if __name__=="__main__":
    try: raise SystemExit(main())
    except AssertionError as e:
        print("FAIL:",e,file=sys.stderr); raise SystemExit(1)
