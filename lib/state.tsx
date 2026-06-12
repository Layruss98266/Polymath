// Tiny store + React hooks. No global state framework needed.
"use client";
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useSyncExternalStore } from "react";
import type { UserState, DomainProgress, ConceptProgress, CardSR, Achievement } from "./types";
import { defaultState } from "./migrations";
import { loadState, saveState } from "./db";
import { tickStreak, todayKey } from "./streak";
import { XP, levelOf } from "./xp";
import { ACHIEVEMENTS } from "@/data/achievements";
import { Sound } from "./sound";

// Fire confetti and an optional chord on level up. Both gated on prefers-reduced-motion;
// chord additionally gated on the user's mute toggle.
function celebrate(mute: boolean) {
 if (typeof window === "undefined") return;
 if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
 import("canvas-confetti").then((m) => {
  try { m.default({ particleCount: 90, spread: 70, origin: { y: 0.6 } }); } catch {}
 }).catch(() => {});
 Sound.levelUp(mute);
}

// Auto-award any achievement whose condition is now satisfied. Pure on state.
function applyAchievements(s: UserState): UserState {
 const have = new Set(s.achievements.map((a) => a.id));
 const fresh: Achievement[] = [];
 for (const def of ACHIEVEMENTS) {
  if (have.has(def.id)) continue;
  if (def.check(s)) fresh.push({ id: def.id, name: def.name, desc: def.desc, unlockedAt: Date.now() });
 }
 return fresh.length ? { ...s, achievements: [...s.achievements, ...fresh] } : s;
}

type Listener = () => void;

class Store {
 private state: UserState = defaultState();
 private listeners = new Set<Listener>();
 private dirty = false;
 private hydrated = false;
 private saveTimer: ReturnType<typeof setTimeout> | null = null;

 get(): UserState { return this.state; }
 isHydrated(): boolean { return this.hydrated; }

 subscribe(l: Listener): () => void { this.listeners.add(l); return () => this.listeners.delete(l); }

 async hydrate() {
  const s = await loadState();
  this.state = tickStreak(s);
  this.hydrated = true;
  this.emit();
  this.scheduleSave();
 }

 set(next: UserState) {
  const prevLevel = levelOf(this.state.xp);
  const prevXp = this.state.xp;
  // Log per-day XP delta. Bookkeeping for the streak heatmap.
  let xpLogged: UserState = next;
  if (next.xp > prevXp && this.hydrated) {
   const day = todayKey();
   const xpByDay = { ...(next.xpByDay ?? {}) };
   xpByDay[day] = (xpByDay[day] ?? 0) + (next.xp - prevXp);
   // Trim to the last ~400 keys to keep state small.
   const keys = Object.keys(xpByDay).sort();
   while (keys.length > 400) { delete xpByDay[keys.shift() as string]; }
   xpLogged = { ...next, xpByDay };
  }
  // Auto award any achievements that now satisfy their condition.
  const enriched = applyAchievements(xpLogged);
  const nextLevel = levelOf(enriched.xp);
  this.state = enriched;
  this.emit();
  this.scheduleSave();
  if (this.hydrated && nextLevel > prevLevel) celebrate(!!enriched.muteSound);
 }

 patch(fn: (s: UserState) => UserState) { this.set(fn(this.state)); }

 private emit() { this.listeners.forEach((l) => l()); }

 private scheduleSave() {
  if (!this.hydrated) return;
  this.dirty = true;
  if (this.saveTimer) clearTimeout(this.saveTimer);
  this.saveTimer = setTimeout(async () => {
   if (!this.dirty) return;
   this.dirty = false;
   await saveState(this.state);
  }, 300);
 }
}

const StoreCtx = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
 const ref = useRef<Store | null>(null);
 if (!ref.current) ref.current = new Store();
 useEffect(() => { ref.current?.hydrate(); }, []);
 return <StoreCtx.Provider value={ref.current}>{children}</StoreCtx.Provider>;
}

function useStore(): Store {
 const s = useContext(StoreCtx);
 if (!s) throw new Error("StoreProvider missing");
 return s;
}

export function useUserState(): UserState {
 const store = useStore();
 return useSyncExternalStore(
  (l) => store.subscribe(l),
  () => store.get(),
  () => defaultState()
 );
}

export function useHydrated(): boolean {
 const store = useStore();
 return useSyncExternalStore(
  (l) => store.subscribe(l),
  () => store.isHydrated(),
  () => false
 );
}

// ------- Mutations -------

export function useActions() {
 const store = useStore();

 const addXP = useCallback((amount: number, _reason?: string) => {
  if (amount <= 0) return;
  store.patch((s) => {
   const before = levelOf(s.xp);
   const xp = s.xp + amount;
   const after = levelOf(xp);
   const ach: Achievement[] = [...s.achievements];
   if (after > before) {
    if (!ach.find((a) => a.id === "first_level")) {
     ach.push({ id: "first_level", name: "First Level Up", desc: "Reached level 2.", unlockedAt: Date.now() });
    }
   }
   return { ...s, xp, achievements: ach };
  });
 }, [store]);

 const startDomain = useCallback((domainId: string) => {
  store.patch((s) => {
   if (s.startedDomains.includes(domainId)) return s;
   const startedDomains = [...s.startedDomains, domainId];
   const dp: DomainProgress = s.domainProgress[domainId] ?? {
    domainId,
    conceptsOpened: 0,
    missionsDone: [],
    quizAnswered: 0,
    quizCorrect: 0,
    capstoneDone: false,
    flashcardsGraduated: 0,
    unlockedRank: "Novice"
   };
   const ach = s.achievements.find((a) => a.id === "first_blood") ? s.achievements : [
    ...s.achievements,
    { id: "first_blood", name: "First Blood", desc: "Started your first domain.", unlockedAt: Date.now() }
   ];
   const polyglot = startedDomains.length >= 10 && !s.achievements.find((a) => a.id === "polyglot")
    ? [...ach, { id: "polyglot", name: "Polyglot of Domains", desc: "Touched 10 domains.", unlockedAt: Date.now() }]
    : ach;
   return {
    ...s,
    startedDomains,
    domainProgress: { ...s.domainProgress, [domainId]: dp },
    achievements: polyglot
   };
  });
 }, [store]);

 const openConcept = useCallback((domainId: string, conceptIndex: number) => {
  store.patch((s) => {
   const existing = s.conceptProgress.find((c) => c.domainId === domainId && c.conceptIndex === conceptIndex);
   if (existing?.opened) return s;
   const conceptProgress = existing
    ? s.conceptProgress.map((c) => (c === existing ? { ...c, opened: true } : c))
    : [...s.conceptProgress, { domainId, conceptIndex, opened: true }];
   const dp = s.domainProgress[domainId];
   const domainProgress = dp
    ? { ...s.domainProgress, [domainId]: { ...dp, conceptsOpened: dp.conceptsOpened + 1 } }
    : s.domainProgress;
   return { ...s, conceptProgress, domainProgress, xp: s.xp + XP.conceptOpenedFirstTime };
  });
 }, [store]);

 const saveReflection = useCallback((domainId: string, conceptIndex: number, answer: string) => {
  store.patch((s) => {
   const key = `${domainId}:${conceptIndex}:reflect`;
   const existing = s.conceptProgress.find((c) => c.domainId === domainId && c.conceptIndex === conceptIndex);
   const conceptProgress = existing
    ? s.conceptProgress.map((c) => (c === existing ? { ...c, reflectAnswer: answer } : c))
    : [...s.conceptProgress, { domainId, conceptIndex, opened: true, reflectAnswer: answer }];
   // Award reflection XP only on the first save that crosses the 20-char
   // threshold. Subsequent edits keep the note but do not pay out again,
   // otherwise a focus/blur loop farms XP forever.
   const alreadyPaid = (s.reflectionSeen ?? []).includes(key);
   const earnsXp = !alreadyPaid && answer.trim().length > 20;
   return {
    ...s,
    conceptProgress,
    notes: { ...s.notes, [key]: answer },
    xp: s.xp + (earnsXp ? XP.reflectionWritten : 0),
    reflectionSeen: earnsXp ? [...(s.reflectionSeen ?? []), key] : s.reflectionSeen
   };
  });
 }, [store]);

 const completeMission = useCallback((domainId: string, missionIndex: number, xpReward: number) => {
  store.patch((s) => {
   const dp = s.domainProgress[domainId];
   if (!dp || dp.missionsDone.includes(missionIndex)) return s;
   return {
    ...s,
    domainProgress: { ...s.domainProgress, [domainId]: { ...dp, missionsDone: [...dp.missionsDone, missionIndex] } },
    xp: s.xp + xpReward
   };
  });
 }, [store]);

 const recordQuizAnswer = useCallback((domainId: string, correct: boolean, calibrated: boolean, conceptIndex?: number, quizKey?: string) => {
  store.patch((s) => {
   const dp = s.domainProgress[domainId];
   if (!dp) return s;
   // Dedupe by stable key. If the same quiz item has been scored before, the
   // counter still increments (so the weakest-queue stays accurate) but no XP
   // is awarded a second time and no double-count of correct/answered.
   const key = quizKey ?? (typeof conceptIndex === "number" ? `${domainId}:concept:${conceptIndex}` : undefined);
   const seen = key ? (s.quizSeen ?? []).includes(key) : false;
   const xpGain = seen ? 0 : (correct ? (XP.quizCorrectFirstTry + (calibrated ? XP.quizCorrectCalibrated : 0)) : 0);
   const calibDelta = calibrated ? 1 : -1;
   const calibrationScore = clamp(((s.calibrationScore ?? 0) * 0.9) + (calibDelta * 0.1), -1, 1);

   // If we know which concept this was for, track per concept accuracy for
   // the weakest concepts queue.
   let conceptProgress = s.conceptProgress;
   if (typeof conceptIndex === "number") {
    const existing = conceptProgress.find((c) => c.domainId === domainId && c.conceptIndex === conceptIndex);
    if (existing) {
     const attempts = (existing.attempts ?? 0) + 1;
     const right = Math.round((existing.accuracy ?? 0) * (existing.attempts ?? 0)) + (correct ? 1 : 0);
     conceptProgress = conceptProgress.map((c) => c === existing ? { ...c, attempts, accuracy: right / attempts } : c);
    } else {
     conceptProgress = [...conceptProgress, { domainId, conceptIndex, opened: true, attempts: 1, accuracy: correct ? 1 : 0 }];
    }
   }

   return {
    ...s,
    domainProgress: seen
     ? s.domainProgress
     : { ...s.domainProgress, [domainId]: { ...dp, quizAnswered: dp.quizAnswered + 1, quizCorrect: dp.quizCorrect + (correct ? 1 : 0) } },
    conceptProgress,
    xp: s.xp + xpGain,
    calibrationScore,
    quizSeen: key && !seen ? [...(s.quizSeen ?? []), key] : s.quizSeen
   };
  });
 }, [store]);

 const upsertCard = useCallback((card: CardSR) => {
  store.patch((s) => {
   const idx = s.cards.findIndex((c) => c.cardKey === card.cardKey);
   const cards = idx >= 0
    ? s.cards.map((c, i) => (i === idx ? card : c))
    : [...s.cards, card];
   return { ...s, cards };
  });
 }, [store]);

 const completeCapstone = useCallback((domainId: string) => {
  store.patch((s) => {
   const dp = s.domainProgress[domainId];
   if (!dp || dp.capstoneDone) return s;
   return {
    ...s,
    domainProgress: { ...s.domainProgress, [domainId]: { ...dp, capstoneDone: true, unlockedRank: "Grandmaster" } },
    xp: s.xp + XP.capstone
   };
  });
 }, [store]);

 const toggleBookmark = useCallback((key: string) => {
  store.patch((s) => ({
   ...s,
   bookmarks: s.bookmarks.includes(key) ? s.bookmarks.filter((b) => b !== key) : [...s.bookmarks, key]
  }));
 }, [store]);

 const setNote = useCallback((key: string, value: string) => {
  store.patch((s) => ({ ...s, notes: { ...s.notes, [key]: value } }));
 }, [store]);

 const completeOnboarding = useCallback((goals: string[]) => {
  store.patch((s) => ({ ...s, onboarded: true, goals }));
 }, [store]);

 const skipOnboarding = useCallback(() => {
  store.patch((s) => ({ ...s, onboarded: true }));
 }, [store]);

 const setTheme = useCallback((theme: "dark" | "light") => {
  store.patch((s) => ({ ...s, theme }));
 }, [store]);

 const toggleMute = useCallback(() => {
  store.patch((s) => ({ ...s, muteSound: !s.muteSound }));
 }, [store]);

 const setFontScale = useCallback((scale: 0.9 | 1 | 1.1 | 1.25) => {
  store.patch((s) => ({ ...s, fontScale: scale }));
 }, [store]);

 const toggleDyslexicFont = useCallback(() => {
  store.patch((s) => ({ ...s, dyslexicFont: !s.dyslexicFont }));
 }, [store]);

 const setReducedMotion = useCallback((on: boolean | undefined) => {
  store.patch((s) => ({ ...s, reducedMotionOverride: on }));
 }, [store]);

 const refreshDailyQuest = useCallback((quest: NonNullable<UserState["dailyQuest"]>) => {
  store.patch((s) => (s.dailyQuest?.day === quest.day ? s : { ...s, dailyQuest: quest }));
 }, [store]);

 const completeDailyQuest = useCallback(() => {
  store.patch((s) => {
   if (!s.dailyQuest || s.dailyQuest.done) return s;
   return { ...s, dailyQuest: { ...s.dailyQuest, done: true }, xp: s.xp + XP.dailyQuestDone };
  });
 }, [store]);

 const importState = useCallback((next: UserState) => { store.set(next); }, [store]);

 return useMemo(() => ({
  addXP, startDomain, openConcept, saveReflection, completeMission,
  recordQuizAnswer, upsertCard, completeCapstone, toggleBookmark, setNote,
  setTheme, toggleMute, setFontScale, toggleDyslexicFont, setReducedMotion,
  refreshDailyQuest, completeDailyQuest, importState,
  completeOnboarding, skipOnboarding
 }), [addXP, startDomain, openConcept, saveReflection, completeMission, recordQuizAnswer, upsertCard, completeCapstone, toggleBookmark, setNote, setTheme, toggleMute, setFontScale, toggleDyslexicFont, setReducedMotion, refreshDailyQuest, completeDailyQuest, importState, completeOnboarding, skipOnboarding]);
}

function clamp(n: number, lo: number, hi: number) { return Math.max(lo, Math.min(hi, n)); }

// SSR-safe today key for the daily quest (deterministic on first paint, real after hydration).
export function useTodayKey(): string {
 const [k, setK] = React.useState("");
 useEffect(() => { setK(todayKey()); }, []);
 return k;
}
