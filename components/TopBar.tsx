"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Flame, Zap, Trophy, Brain, MoonStar, Sun, Map, Bookmark } from "lucide-react";
import { useActions, useUserState, useHydrated } from "@/lib/state";
import { levelProgress, globalRank } from "@/lib/xp";
import { dueNow } from "@/lib/fsrs";
import { exportCode, importCode } from "@/lib/save";

export function TopBar() {
  const s = useUserState();
  const hydrated = useHydrated();
  const a = useActions();
  const [showSave, setShowSave] = useState(false);

  // Apply theme to <html>.
  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.dataset.theme = s.theme;
  }, [s.theme, hydrated]);

  const lp = useMemo(() => levelProgress(s.xp), [s.xp]);
  const rank = useMemo(() => globalRank(s.xp), [s.xp]);
  const due = useMemo(() => dueNow(s.cards).length, [s.cards]);

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-[color:var(--bg)]/80 border-b border-[color:var(--line)]">
      <div className="mx-auto max-w-6xl px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3">
        <Link href="/" className="font-display text-base sm:text-lg tracking-wide shrink-0">POLYMATH</Link>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm overflow-x-auto no-scrollbar">
          <span className="chip shrink-0" title="Total XP"><Zap size={14} className="hue" /> {s.xp} XP</span>
          <span className="chip shrink-0 hidden sm:inline-flex" title="Level + global rank"><Trophy size={14} className="hue" /> L{lp.current} · <span className="hidden md:inline">{rank.name}</span><span className="md:hidden">{rank.name.split(" ")[0]}</span></span>
          <span className="chip shrink-0 sm:hidden" title="Level"><Trophy size={14} className="hue" /> L{lp.current}</span>
          <span className="chip shrink-0" title="Streak"><Flame size={14} className="hue" /> {s.currentStreak}🔥</span>
          <Link href="/review" className="chip shrink-0" title="Spaced-repetition review">
            <Brain size={14} className="hue" /> <span className="hidden sm:inline">Review</span> {due > 0 && <span className="ml-0.5 inline-flex items-center justify-center min-w-[18px] h-[18px] text-[10px] font-bold rounded-full px-1" style={{ background: "var(--hue)", color: "#fff" }}>{due}</span>}
          </Link>
          <Link href="/skill-map" className="chip shrink-0 hidden md:inline-flex"><Map size={14} className="hue" /> Skill map</Link>
          <Link href="/my-list" className="chip shrink-0 hidden md:inline-flex"><Bookmark size={14} className="hue" /> My list</Link>
          <Link href="/skill-map" className="chip shrink-0 md:hidden" aria-label="Skill map"><Map size={14} className="hue" /></Link>
          <Link href="/my-list" className="chip shrink-0 md:hidden" aria-label="My list"><Bookmark size={14} className="hue" /></Link>
          <button className="btn shrink-0 !p-2" aria-label="Toggle theme" onClick={() => a.setTheme(s.theme === "dark" ? "light" : "dark")}>
            {s.theme === "dark" ? <Sun size={14} /> : <MoonStar size={14} />}
          </button>
          <button className="btn shrink-0 hidden sm:inline-flex" onClick={() => setShowSave(true)}>Save / Load</button>
        </div>
      </div>
      {/* Level progress bar */}
      <div className="mx-auto max-w-6xl px-4 pb-2">
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--line)" }}>
          <div className="h-full" style={{ width: `${Math.round(lp.pct * 100)}%`, background: "var(--hue)", transition: "width .3s" }} />
        </div>
      </div>

      {showSave && <SaveLoadModal onClose={() => setShowSave(false)} />}
    </header>
  );
}

function SaveLoadModal({ onClose }: { onClose: () => void }) {
  const s = useUserState();
  const a = useActions();
  const [code, setCode] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const exported = useMemo(() => exportCode(s), [s]);

  return (
    <div className="fixed inset-0 z-40 grid place-items-center p-4" style={{ background: "rgba(0,0,0,0.5)" }} onClick={onClose}>
      <div className="panel p-5 max-w-xl w-full space-y-3" onClick={(e) => e.stopPropagation()}>
        <h3 className="font-display text-xl">Save / Load progress</h3>
        <p className="dim text-sm">Your progress is auto-saved locally. To move it to another device or browser, copy this code and paste it on the other side.</p>
        <label className="text-sm">Your save code</label>
        <textarea className="w-full h-24 panel p-2 text-xs" readOnly value={exported} />
        <button className="btn" onClick={() => navigator.clipboard.writeText(exported)}>Copy code</button>
        <hr className="border-[color:var(--line)]" />
        <label className="text-sm">Paste a code to restore</label>
        <textarea className="w-full h-24 panel p-2 text-xs" value={code} onChange={(e) => setCode(e.target.value)} />
        {err && <p className="text-sm" style={{ color: "var(--bad)" }}>{err}</p>}
        <div className="flex gap-2">
          <button className="btn" onClick={() => {
            try { a.importState(importCode(code)); setErr(null); onClose(); }
            catch (e: any) { setErr(e.message ?? "Invalid code"); }
          }}>Restore</button>
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
