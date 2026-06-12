"use client";
import { useEffect, useRef, useState } from "react";
import { Timer, Play, Pause, RotateCcw } from "lucide-react";
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

 return (
  <div className="panel p-4">
   <div className="flex items-center gap-2 mb-3">
    <Timer size={16} className="hue" />
    <h3 className="font-display text-lg">Focus timer</h3>
    <span className="dim text-xs ml-auto">{Math.round(totalSecondsToday / 60)} min focused so far</span>
   </div>
   <div className="grid grid-cols-[auto_1fr] items-center gap-4">
    <span className="font-display text-3xl tabular-nums" aria-live="polite">{mins}:{secs}</span>
    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--line)" }}>
     <div className="h-full" style={{ width: `${Math.round(pct * 100)}%`, background: "var(--hue)", transition: "width 1s linear" }} />
    </div>
   </div>
   <div className="flex flex-wrap gap-2 mt-3 text-xs">
    {PRESETS.map((m) => (
     <button
      key={m}
      className={`chip ${target === m * 60 ? "ring-1" : ""}`}
      onClick={() => { setTarget(m * 60); setLeft(m * 60); setRunning(false); }}
     >{m} min</button>
    ))}
    <button className="btn ml-auto" onClick={() => setRunning(!running)}>
     {running ? <><Pause size={14} /> Pause</> : <><Play size={14} /> Start</>}
    </button>
    <button className="btn" onClick={() => { setRunning(false); setLeft(target); }}><RotateCcw size={14} /></button>
   </div>
   <p className="dim text-xs mt-2">No notifications, no sound. The bar quietly fills. When it finishes, the timer resets.</p>
  </div>
 );
}
