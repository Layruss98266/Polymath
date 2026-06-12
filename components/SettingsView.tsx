"use client";
import { useMemo, useState } from "react";
import { useUserState, useActions } from "@/lib/state";
import { exportCode, importCode, utf8ToBase64 } from "@/lib/save";
import { defaultState } from "@/lib/migrations";
import { clearState } from "@/lib/db";
import { rankIndexFromProgress, SHARE_RANK_DEFAULT_TOTALS } from "@/lib/shareRank";
import { Download, Upload, Trash2, RotateCcw, MoonStar, Sun, Volume2, VolumeX, Palette, Accessibility, Database, Info, Share2, Settings as SettingsIcon } from "lucide-react";
import { ShareCard } from "./ShareCard";

// Central place to manage local preferences and progress.
// Reset clears progress but keeps preferences. Wipe removes everything.

type TabId = "appearance" | "a11y" | "data" | "about";

const TABS: { id: TabId; label: string; icon: React.ReactNode }[] = [
 { id: "appearance", label: "Appearance", icon: <Palette size={14} /> },
 { id: "a11y", label: "Motion + a11y", icon: <Accessibility size={14} /> },
 { id: "data", label: "Data", icon: <Database size={14} /> },
 { id: "about", label: "About", icon: <Info size={14} /> }
];

export function SettingsView() {
 const s = useUserState();
 const a = useActions();
 const [code, setCode] = useState("");
 const [err, setErr] = useState<string | null>(null);
 const [confirmReset, setConfirmReset] = useState(false);
 const [confirmWipe, setConfirmWipe] = useState(false);
 const [tab, setTab] = useState<TabId>("appearance");
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

 const exportReflectionsMarkdown = () => {
  const byDomain: Record<string, { idx: number; text: string }[]> = {};
  for (const [k, v] of Object.entries(s.notes)) {
   if (!k.endsWith(":reflect")) continue;
   const text = (v ?? "").trim();
   if (!text) continue;
   const [domain, idx] = k.split(":");
   (byDomain[domain] ??= []).push({ idx: Number(idx), text });
  }
  const today = new Date().toISOString().slice(0, 10);
  const total = Object.values(byDomain).reduce((n, arr) => n + arr.length, 0);
  let md = `# Polymath reflections\n\nExported ${today}. ${total} reflections across ${Object.keys(byDomain).length} domains.\n\n`;
  for (const [domain, entries] of Object.entries(byDomain).sort(([a], [b]) => a.localeCompare(b))) {
   md += `## ${domain.replace(/_/g, " ")}\n\n`;
   for (const { idx, text } of entries.sort((a, b) => a.idx - b.idx)) {
    md += `**Concept #${idx + 1}**\n\n${text}\n\n`;
   }
  }
  const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `polymath-reflections-${today}.md`;
  link.click();
  URL.revokeObjectURL(url);
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
  a.importState({
   ...defaultState(),
   theme: s.theme,
   muteSound: s.muteSound,
   onboarded: s.onboarded,
   fontScale: s.fontScale,
   dyslexicFont: s.dyslexicFont,
   reducedMotionOverride: s.reducedMotionOverride
  });
  setConfirmReset(false);
 };

 const doWipe = async () => {
  await clearState();
  a.importState(defaultState());
  setConfirmWipe(false);
  setTimeout(() => location.reload(), 100);
 };

 return (
  <div className="space-y-6 max-w-3xl">
   <header className="space-y-2">
    <div className="flex items-center gap-2">
     <span className="grid place-items-center w-9 h-9 rounded-xl" style={{ background: "color-mix(in oklab, var(--hue) 18%, transparent)", color: "var(--hue)" }}>
      <SettingsIcon size={18} />
     </span>
     <p className="dim text-xs uppercase tracking-widest">Local preferences</p>
    </div>
    <h1 className="font-display text-3xl sm:text-4xl">Settings</h1>
    <p className="dim">Everything here lives in your browser. Nothing is sent anywhere.</p>
   </header>

   {/* Tabs */}
   <div role="tablist" aria-label="Settings sections" className="panel p-1.5 inline-flex flex-wrap gap-1 sticky top-2 z-10" style={{ background: "color-mix(in oklab, var(--panel) 92%, transparent)", backdropFilter: "blur(8px)" }}>
    {TABS.map((t) => (
     <button
      key={t.id}
      role="tab"
      aria-selected={tab === t.id}
      aria-controls={`settings-panel-${t.id}`}
      id={`settings-tab-${t.id}`}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors"
      style={tab === t.id ? { background: "color-mix(in oklab, var(--hue) 16%, transparent)", color: "var(--hue)" } : { color: "var(--dim)" }}
      onClick={() => setTab(t.id)}
     >
      {t.icon} {t.label}
     </button>
    ))}
   </div>

   {/* Appearance */}
   {tab === "appearance" && (
    <div id="settings-panel-appearance" role="tabpanel" aria-labelledby="settings-tab-appearance" className="space-y-6">
     <section className="panel p-5 space-y-3">
      <div className="flex items-center gap-2">
       <Palette size={14} className="hue" />
       <h2 className="font-display text-lg">Theme</h2>
      </div>
      <p className="dim text-sm">Polymath is built for both. Light reads well in daylight; dark suits long sessions.</p>
      <div className="flex flex-wrap gap-2">
       <button className={`btn ${s.theme === "dark" ? "ring-1" : ""}`} onClick={() => a.setTheme("dark")} aria-pressed={s.theme === "dark"}><MoonStar size={14} /> Dark</button>
       <button className={`btn ${s.theme === "light" ? "ring-1" : ""}`} onClick={() => a.setTheme("light")} aria-pressed={s.theme === "light"}><Sun size={14} /> Light</button>
      </div>
     </section>

     <section className="panel p-5 space-y-3">
      <div className="flex items-center gap-2">
       {s.muteSound ? <VolumeX size={14} className="hue" /> : <Volume2 size={14} className="hue" />}
       <h2 className="font-display text-lg">Sound</h2>
      </div>
      <p className="dim text-sm">Optional Web Audio chord on level up. Off by default for most users. Honours <em>prefers-reduced-motion</em>.</p>
      <button className="btn" onClick={a.toggleMute} aria-pressed={!s.muteSound}>
       {s.muteSound ? <><VolumeX size={14} /> Sounds off</> : <><Volume2 size={14} /> Sounds on</>}
      </button>
     </section>
    </div>
   )}

   {/* Motion + a11y */}
   {tab === "a11y" && (
    <div id="settings-panel-a11y" role="tabpanel" aria-labelledby="settings-tab-a11y" className="space-y-6">
     <section className="panel p-5 space-y-4">
      <div className="flex items-center gap-2">
       <Accessibility size={14} className="hue" />
       <h2 className="font-display text-lg">Accessibility</h2>
      </div>
      <p className="dim text-sm">Local controls. All preferences live in your browser.</p>

      <div className="space-y-2">
       <p id="settings-text-size-label" className="text-sm font-medium">Text size</p>
       <div role="group" aria-labelledby="settings-text-size-label" className="flex flex-wrap gap-2">
        {([0.9, 1, 1.1, 1.25] as const).map((scale) => (
         <button
          key={scale}
          className={`btn ${(s.fontScale ?? 1) === scale ? "ring-1" : ""}`}
          onClick={() => a.setFontScale(scale)}
          aria-pressed={(s.fontScale ?? 1) === scale}
          style={(s.fontScale ?? 1) === scale ? { borderColor: "var(--hue)" } : {}}
         >
          {scale === 0.9 ? "Small" : scale === 1 ? "Default" : scale === 1.1 ? "Large" : "Extra large"}
         </button>
        ))}
       </div>
      </div>

      <div className="space-y-2 pt-2">
       <p id="settings-motion-label" className="text-sm font-medium">Motion</p>
       <p className="dim text-xs">By default Polymath honours your system <em>prefers-reduced-motion</em>. Override here.</p>
       <div role="group" aria-labelledby="settings-motion-label" className="flex flex-wrap gap-2">
        <button className={`btn ${s.reducedMotionOverride === undefined ? "ring-1" : ""}`} onClick={() => a.setReducedMotion(undefined)} aria-pressed={s.reducedMotionOverride === undefined}>System default</button>
        <button className={`btn ${s.reducedMotionOverride === true ? "ring-1" : ""}`} onClick={() => a.setReducedMotion(true)} aria-pressed={s.reducedMotionOverride === true}>Reduce motion</button>
        <button className={`btn ${s.reducedMotionOverride === false ? "ring-1" : ""}`} onClick={() => a.setReducedMotion(false)} aria-pressed={s.reducedMotionOverride === false}>Allow motion</button>
       </div>
      </div>

      <div className="space-y-2 pt-2">
       <p id="settings-dyslexic-label" className="text-sm font-medium">Dyslexia-friendly font</p>
       <p className="dim text-xs">Switches body text to a higher-readability fallback stack (OpenDyslexic when installed, otherwise Comic Sans MS) with looser tracking.</p>
       <button className="btn" onClick={a.toggleDyslexicFont} aria-pressed={!!s.dyslexicFont} aria-labelledby="settings-dyslexic-label">
        {s.dyslexicFont ? "On" : "Off"}
       </button>
      </div>
     </section>
    </div>
   )}

   {/* Data */}
   {tab === "data" && (
    <div id="settings-panel-data" role="tabpanel" aria-labelledby="settings-tab-data" className="space-y-6">
     <section className="panel p-5 space-y-3">
      <h2 className="font-display text-lg">Your numbers</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-sm">
       <li className="panel p-3"><span className="font-display text-2xl block tabular-nums">{s.xp}</span><span className="dim text-xs">XP</span></li>
       <li className="panel p-3"><span className="font-display text-2xl block tabular-nums">{s.startedDomains.length}</span><span className="dim text-xs">Domains touched</span></li>
       <li className="panel p-3"><span className="font-display text-2xl block tabular-nums">{cardsReviewed}</span><span className="dim text-xs">Cards reviewed</span></li>
       <li className="panel p-3"><span className="font-display text-2xl block tabular-nums">{reflectionCount}</span><span className="dim text-xs">Reflections saved</span></li>
      </ul>
     </section>

     <section className="panel p-5 space-y-4">
      <div className="flex items-center gap-2">
       <Database size={14} className="hue" />
       <h2 className="font-display text-lg">Save and load</h2>
      </div>
      <p className="dim text-sm">Your progress is stored locally. Use one of the formats below to move it.</p>

      <div className="space-y-2">
       <label htmlFor="settings-save-code" className="text-sm font-medium">Compact base64 code</label>
       <textarea id="settings-save-code" readOnly value={exported} className="w-full h-20 panel p-2 text-xs font-mono" />
       <button className="btn" onClick={() => navigator.clipboard.writeText(exported)}>Copy code</button>
      </div>

      <div className="space-y-2 pt-2 border-t border-[color:var(--line)]">
       <div className="flex items-center gap-2 pt-3">
        <Share2 size={14} className="hue" />
        <p id="settings-share-link-label" className="text-sm font-medium">Public profile share link</p>
       </div>
       <p className="dim text-xs">A read-only snapshot. XP and per-domain rank only, no notes or reflections.</p>
       <button className="btn" onClick={() => {
        const ri: Record<string, number> = {};
        for (const id of s.startedDomains) {
         const dp = s.domainProgress[id];
         if (!dp) continue;
         ri[id] = rankIndexFromProgress(dp, SHARE_RANK_DEFAULT_TOTALS);
        }
        const payload = { xp: s.xp, r: ri };
        const code = utf8ToBase64(JSON.stringify(payload));
        const url = `${window.location.origin}/share?d=${encodeURIComponent(code)}`;
        navigator.clipboard.writeText(url);
       }} aria-labelledby="settings-share-link-label"><Share2 size={14} /> Copy public share link</button>
      </div>

      <div className="space-y-2 pt-2 border-t border-[color:var(--line)]">
       <p id="settings-json-label" className="text-sm font-medium pt-3">JSON file</p>
       <div role="group" aria-labelledby="settings-json-label" className="flex flex-wrap gap-2">
        <button className="btn" onClick={downloadJson}><Download size={14} /> Download JSON</button>
        <label className="btn cursor-pointer">
         <Upload size={14} /> Upload JSON
         <input type="file" accept="application/json" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadJson(f); }} />
        </label>
       </div>
      </div>

      <div className="space-y-2 pt-2 border-t border-[color:var(--line)]">
       <p id="settings-csv-label" className="text-sm font-medium pt-3">CSV exports</p>
       <p className="dim text-xs">Excel-friendly UTF-8 with BOM.</p>
       <div role="group" aria-labelledby="settings-csv-label" className="flex flex-wrap gap-2">
        <button className="btn" onClick={exportBookmarksCsv}><Download size={14} /> Bookmarks ({s.bookmarks.length})</button>
        <button className="btn" onClick={exportReflectionsCsv}><Download size={14} /> Reflections CSV ({reflectionCount})</button>
        <button className="btn" onClick={exportReflectionsMarkdown}><Download size={14} /> Reflections MD ({reflectionCount})</button>
        <button className="btn" onClick={exportCardsCsv}><Download size={14} /> Cards ({s.cards.length})</button>
       </div>
      </div>

      <div className="pt-2 border-t border-[color:var(--line)]">
       <div className="pt-3">
        <ShareCard />
       </div>
      </div>

      <div className="space-y-2 pt-2 border-t border-[color:var(--line)]">
       <label htmlFor="settings-restore-code" className="text-sm font-medium pt-3 block">Restore from a code</label>
       <textarea id="settings-restore-code" value={code} onChange={(e) => setCode(e.target.value)} className="w-full h-20 panel p-2 text-xs font-mono" placeholder="Paste a base64 code here" />
       {err && <p role="alert" className="text-sm" style={{ color: "var(--bad)" }}>{err}</p>}
       <button className="btn" onClick={() => { try { a.importState(importCode(code)); setErr(null); setCode(""); } catch (e: any) { setErr(e.message ?? "Invalid code"); } }}>Restore</button>
      </div>
     </section>

     <section className="panel p-5 space-y-3" style={{ borderColor: "color-mix(in oklab, var(--bad) 50%, var(--line))" }}>
      <div className="flex items-center gap-2">
       <Trash2 size={14} style={{ color: "var(--bad)" }} />
       <h2 className="font-display text-lg" style={{ color: "var(--bad)" }}>Danger zone</h2>
      </div>
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
   )}

   {/* About */}
   {tab === "about" && (
    <div id="settings-panel-about" role="tabpanel" aria-labelledby="settings-tab-about" className="space-y-6">
     <section className="panel p-5 space-y-3">
      <div className="flex items-center gap-2">
       <Info size={14} className="hue" />
       <h2 className="font-display text-lg">About this build</h2>
      </div>
      <p className="dim text-sm">Polymath is a static, offline-friendly learning surface. No login, no analytics, no tracking. Everything is local to this browser.</p>
      <ul className="text-sm space-y-1.5">
       <li className="flex gap-2"><span className="hue">.</span> Spaced repetition uses an FSRS-style scheduler.</li>
       <li className="flex gap-2"><span className="hue">.</span> Calibration scoring goes live at n=20 quizzes.</li>
       <li className="flex gap-2"><span className="hue">.</span> Streak and focus data bucket by local calendar day.</li>
      </ul>
     </section>
    </div>
   )}
  </div>
 );
}
