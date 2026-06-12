"use client";
import { useEffect, useRef, useState } from "react";
import { Timer, Play, Pause, RotateCcw, Save } from "lucide-react";
import { useUserState, useActions } from "@/lib/state";
import { todayKey } from "@/lib/streak";

// Tiny Pomodoro style focus timer. Optional, sits on the Home page.
// Logs focused minutes locally; no notifications, no sound, nothing manipulative.
// 25 minute default; user can flip to 5, 15, or 45.

const PRESETS = [5, 15, 25, 45];

export function FocusTimer() {
 const [target, setTarget] = useState(25 * 60);
 const [left, setLeft] = useState(25 * 60);
 const [running, setRunning] = useState(false);
 const tick = useRef<ReturnType<typeof setInterval> | null>(null);
 const s = useUserState();
 const { logFocusedSeconds } = useActions();
 const totalSecondsToday = (s.focusedSecondsByDay ?? {})[todayKey()] ?? 0;

 useEffect(() => {
  if (!running) return;
  tick.current = setInterval(() => {
   setLeft((l) => {
    if (l <= 1) {
     setRunning(false);
     logFocusedSeconds(target);
     return target;
    }
    return l - 1;
   });
  }, 1000);
  return () => { if (tick.current) clearInterval(tick.current); };
 }, [running, target, logFocusedSeconds]);

 const mins = Math.floor(left / 60);
 const secs = (left % 60).toString().padStart(2, "0");
 const pct = 1 - left / target;
 const pctRound = Math.round(pct * 100);
 const minsToday = Math.round(totalSecondsToday / 60);

 return (
  <div className="panel p-5">
   <div className="flex items-center gap-2 mb-4">
    <Timer size={16} className="hue" />
    <h3 className="font-display text-lg">Focus timer</h3>
    <span className="ml-auto inline-flex items-center gap-1.5 text-xs dim" title="Persisted locally for today">
     <Save size={11} className="hue" />
     {minsToday} min today
    </span>
   </div>

   {/* Big timer numeral with thin progress ring beneath */}
   <div className="flex items-baseline gap-3">
    <span className="font-display text-5xl sm:text-6xl tabular-nums leading-none" aria-live="polite">{mins}:{secs}</span>
    <span className="dim text-xs uppercase tracking-widest">{running ? "running" : left === target ? "ready" : "paused"}</span>
   </div>
   <div className="h-1.5 rounded-full overflow-hidden mt-3" style={{ background: "var(--line)" }} role="progressbar" aria-valuenow={pctRound} aria-valuemin={0} aria-valuemax={100} aria-label="Focus session progress">
    <div className="h-full" style={{ width: `${pctRound}%`, background: "var(--hue)", transition: "width 1s linear" }} />
   </div>

   {/* Preset chips */}
   <div className="flex flex-wrap items-center gap-2 mt-4">
    <span className="dim text-xs mr-1">Preset</span>
    {PRESETS.map((m) => (
     <button
      key={m}
      className={`chip ${target === m * 60 ? "ring-1" : ""}`}
      style={target === m * 60 ? { borderColor: "var(--hue)", color: "var(--hue)" } : {}}
      onClick={() => { setTarget(m * 60); setLeft(m * 60); setRunning(false); }}
      aria-pressed={target === m * 60}
     >{m}m</button>
    ))}
    <div className="ml-auto flex items-center gap-2">
     <button className="btn" onClick={() => setRunning(!running)} aria-label={running ? "Pause focus timer" : "Start focus timer"}>
      {running ? <><Pause size={14} /> Pause</> : <><Play size={14} /> Start</>}
     </button>
     <button className="btn" onClick={() => { setRunning(false); setLeft(target); }} aria-label="Reset focus timer"><RotateCcw size={14} /></button>
    </div>
   </div>

   <p className="dim text-xs mt-3">No notifications, no sound. The bar quietly fills. When it finishes, focused minutes save to today and the timer resets.</p>
  </div>
 );
}
