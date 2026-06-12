"use client";
import { useMemo, useState } from "react";
import { useUserState, useActions } from "@/lib/state";
import { exportCode, importCode } from "@/lib/save";
import { defaultState } from "@/lib/migrations";
import { clearState } from "@/lib/db";
import { Download, Upload, Trash2, RotateCcw, MoonStar, Sun, Volume2, VolumeX } from "lucide-react";
import { ShareCard } from "./ShareCard";

// Central place to manage local preferences and progress.
// Reset clears progress but keeps preferences. Wipe removes everything.

export function SettingsView() {
 const s = useUserState();
 const a = useActions();
 const [code, setCode] = useState("");
 const [err, setErr] = useState<string | null>(null);
 const [confirmReset, setConfirmReset] = useState(false);
 const [confirmWipe, setConfirmWipe] = useState(false);
 const exported = useMemo(() => exportCode(s), [s]);

 const cardsReviewed = s.cards.reduce((sum, c) => sum + c.reps, 0);
 const reflectionCount = Object.entries(s.notes).filter(([k, v]) => k.endsWith(":reflect") && (v ?? "").trim().length > 0).length;

 const downloadJson = () => {
  const blob = new Blob([JSON.stringify(s, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `polymath-progress-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
 };

 // CSV exports: bookmarks, reflections, cards. Useful for analysis or notes
 // outside the app. UTF-8 BOM so Excel handles it correctly.
 const downloadCsv = (rows: string[][], name: string) => {
  const csv = "﻿" + rows.map((r) => r.map((c) => `"${(c ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `polymath-${name}-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
 };

 const exportBookmarksCsv = () => {
  const rows = [["domain", "concept_index"]];
  for (const b of s.bookmarks) {
   const [domain, idx] = b.split(":");
   rows.push([domain, idx]);
  }
  downloadCsv(rows, "bookmarks");
 };

 const exportReflectionsCsv = () => {
  const rows = [["domain", "concept_index", "reflection"]];
  for (const [k, v] of Object.entries(s.notes)) {
   if (!k.endsWith(":reflect")) continue;
   if (!(v ?? "").trim()) continue;
   const [domain, idx] = k.split(":");
   rows.push([domain, idx, v]);
  }
  downloadCsv(rows, "reflections");
 };

 const exportCardsCsv = () => {
  const rows = [["card_key", "domain", "due_iso", "stability", "difficulty", "reps", "lapses", "state"]];
  for (const c of s.cards) {
   rows.push([c.cardKey, c.domainId, new Date(c.due).toISOString(), String(c.stability), String(c.difficulty), String(c.reps), String(c.lapses), String(c.state)]);
  }
  downloadCsv(rows, "cards");
 };

 const uploadJson = (file: File) => {
  const reader = new FileReader();
  reader.onload = () => {
   try {
    const parsed = JSON.parse(String(reader.result));
    a.importState(parsed);
    setErr(null);
   } catch (e: any) { setErr(e.message ?? "Invalid file"); }
  };
  reader.readAsText(file);
 };

 const doReset = () => {
  a.importState({ ...defaultState(), theme: s.theme, muteSound: s.muteSound, onboarded: s.onboarded });
  setConfirmReset(false);
 };

 const doWipe = async () => {
  await clearState();
  a.importState(defaultState());
  setConfirmWipe(false);
  setTimeout(() => location.reload(), 100);
 };

 return (
  <div className="space-y-6 max-w-2xl">
   <h1 className="font-display text-3xl">Settings</h1>

   <section className="panel p-5 space-y-3">
    <h2 className="font-display text-lg">Appearance</h2>
    <div className="flex flex-wrap gap-2">
     <button className={`btn ${s.theme === "dark" ? "ring-1" : ""}`} onClick={() => a.setTheme("dark")}><MoonStar size={14} /> Dark</button>
     <button className={`btn ${s.theme === "light" ? "ring-1" : ""}`} onClick={() => a.setTheme("light")}><Sun size={14} /> Light</button>
    </div>
   </section>

   <section className="panel p-5 space-y-3">
    <h2 className="font-display text-lg">Sound</h2>
    <p className="dim text-sm">Optional Web Audio chord on level up. Off by default for most users; honours <em>prefers-reduced-motion</em>.</p>
    <button className="btn" onClick={a.toggleMute}>
     {s.muteSound ? <><VolumeX size={14} /> Sounds off</> : <><Volume2 size={14} /> Sounds on</>}
    </button>
   </section>

   <section className="panel p-5 space-y-3">
    <h2 className="font-display text-lg">Your numbers</h2>
    <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-sm">
     <li className="panel p-3"><span className="font-display text-2xl block">{s.xp}</span><span className="dim text-xs">XP</span></li>
     <li className="panel p-3"><span className="font-display text-2xl block">{s.startedDomains.length}</span><span className="dim text-xs">Domains touched</span></li>
     <li className="panel p-3"><span className="font-display text-2xl block">{cardsReviewed}</span><span className="dim text-xs">Cards reviewed</span></li>
     <li className="panel p-3"><span className="font-display text-2xl block">{reflectionCount}</span><span className="dim text-xs">Reflections saved</span></li>
    </ul>
   </section>

   <section className="panel p-5 space-y-3">
    <h2 className="font-display text-lg">Save and load</h2>
    <p className="dim text-sm">Your progress is stored locally in this browser. Use one of the formats below to move it.</p>

    <div className="space-y-2">
     <label className="text-sm">Compact base64 code (copy paste)</label>
     <textarea readOnly value={exported} className="w-full h-20 panel p-2 text-xs" aria-label="Save code" />
     <button className="btn" onClick={() => navigator.clipboard.writeText(exported)}>Copy code</button>
    </div>

    <div className="space-y-2 pt-2">
     <label className="text-sm">JSON file (download / upload)</label>
     <div className="flex flex-wrap gap-2">
      <button className="btn" onClick={downloadJson}><Download size={14} /> Download JSON</button>
      <label className="btn cursor-pointer">
       <Upload size={14} /> Upload JSON
       <input type="file" accept="application/json" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadJson(f); }} />
      </label>
     </div>
    </div>

    <div className="space-y-2 pt-2">
     <label className="text-sm">CSV exports for analysis or notes</label>
     <p className="dim text-xs">Excel-friendly UTF-8 with BOM.</p>
     <div className="flex flex-wrap gap-2">
      <button className="btn" onClick={exportBookmarksCsv}><Download size={14} /> Bookmarks ({s.bookmarks.length})</button>
      <button className="btn" onClick={exportReflectionsCsv}><Download size={14} /> Reflections ({reflectionCount})</button>
      <button className="btn" onClick={exportCardsCsv}><Download size={14} /> Cards ({s.cards.length})</button>
     </div>
    </div>

    <ShareCard />

    <div className="space-y-2 pt-2">
     <label className="text-sm">Restore from a code</label>
     <textarea value={code} onChange={(e) => setCode(e.target.value)} className="w-full h-20 panel p-2 text-xs" aria-label="Paste code" />
     {err && <p className="text-sm" style={{ color: "var(--bad)" }}>{err}</p>}
     <button className="btn" onClick={() => { try { a.importState(importCode(code)); setErr(null); setCode(""); } catch (e: any) { setErr(e.message ?? "Invalid code"); } }}>Restore</button>
    </div>
   </section>

   <section className="panel p-5 space-y-3" style={{ borderColor: "var(--bad)" }}>
    <h2 className="font-display text-lg">Danger zone</h2>
    <p className="dim text-sm">These cannot be undone. Export your progress first if you might want it back.</p>

    {!confirmReset ? (
     <button className="btn" onClick={() => setConfirmReset(true)}><RotateCcw size={14} /> Reset progress (keep theme + sound)</button>
    ) : (
     <div className="flex flex-wrap gap-2 items-center">
      <span className="text-sm">Reset all XP, cards, achievements, notes?</span>
      <button className="btn" onClick={doReset} style={{ borderColor: "var(--bad)", color: "var(--bad)" }}>Yes, reset</button>
      <button className="btn" onClick={() => setConfirmReset(false)}>Cancel</button>
     </div>
    )}

    {!confirmWipe ? (
     <button className="btn" onClick={() => setConfirmWipe(true)}><Trash2 size={14} /> Wipe everything</button>
    ) : (
     <div className="flex flex-wrap gap-2 items-center">
      <span className="text-sm">Wipe local storage entirely?</span>
      <button className="btn" onClick={doWipe} style={{ borderColor: "var(--bad)", color: "var(--bad)" }}>Yes, wipe</button>
      <button className="btn" onClick={() => setConfirmWipe(false)}>Cancel</button>
     </div>
    )}
   </section>
  </div>
 );
}
