// Achievement definitions. Awarded automatically by the state store based on
// the user's running totals (see lib/state.tsx). Keep the conditions simple,
// observable, and never time-on-screen based.

import type { UserState } from "@/lib/types";

export type AchievementDef = {
 id: string;
 name: string;
 desc: string;
 icon: string;
 check: (s: UserState) => boolean;
};

export const ACHIEVEMENTS: AchievementDef[] = [
 { id: "first_blood",       name: "First Blood",          desc: "Started your first domain.",                       icon: "🩸", check: (s) => s.startedDomains.length >= 1 },
 { id: "first_concept",     name: "First Concept",        desc: "Opened your first concept.",                       icon: "💡", check: (s) => s.conceptProgress.filter((c) => c.opened).length >= 1 },
 { id: "first_reflection",  name: "First Reflection",     desc: "Wrote your first apply-to-your-life reflection.",  icon: "📝", check: (s) => Object.entries(s.notes).filter(([k, v]) => k.endsWith(":reflect") && (v ?? "").trim().length > 20).length >= 1 },
 { id: "first_mission",     name: "First Mission",        desc: "Completed your first real-world mission.",         icon: "🎯", check: (s) => Object.values(s.domainProgress).some((d) => d.missionsDone.length >= 1) },
 { id: "streak_3",          name: "On a Roll",            desc: "Three day streak.",                                icon: "🔥", check: (s) => s.longestStreak >= 3 },
 { id: "streak_7",          name: "One Week Strong",      desc: "Seven day streak.",                                icon: "🔥", check: (s) => s.longestStreak >= 7 },
 { id: "streak_30",         name: "One Month Strong",     desc: "Thirty day streak.",                               icon: "🔥", check: (s) => s.longestStreak >= 30 },
 { id: "streak_100",        name: "Centurion",            desc: "Hundred day streak.",                              icon: "🔥", check: (s) => s.longestStreak >= 100 },
 { id: "polyglot_5",        name: "Curious",              desc: "Touched five domains.",                            icon: "🧭", check: (s) => s.startedDomains.length >= 5 },
 { id: "polyglot_10",       name: "Polyglot of Domains",  desc: "Touched ten domains.",                             icon: "🌍", check: (s) => s.startedDomains.length >= 10 },
 { id: "polyglot_15",       name: "Polymath Apprentice",  desc: "Touched all fifteen Core domains.",                icon: "🌟", check: (s) => s.startedDomains.length >= 15 },
 { id: "cards_50",          name: "50 Cards Reviewed",    desc: "Reviewed fifty flashcards.",                       icon: "🃏", check: (s) => s.cards.reduce((sum, c) => sum + c.reps, 0) >= 50 },
 { id: "cards_100",         name: "100 Cards Reviewed",   desc: "Reviewed one hundred flashcards.",                 icon: "🃏", check: (s) => s.cards.reduce((sum, c) => sum + c.reps, 0) >= 100 },
 { id: "cards_500",         name: "500 Cards Reviewed",   desc: "Reviewed five hundred flashcards. Compounding.",    icon: "🎴", check: (s) => s.cards.reduce((sum, c) => sum + c.reps, 0) >= 500 },
 { id: "quiz_slayer",       name: "Quiz Slayer",          desc: "Got 90% accuracy across at least 20 quiz attempts.", icon: "⚔️", check: (s) => { const total = Object.values(s.domainProgress).reduce((sum, d) => sum + d.quizAnswered, 0); const right = Object.values(s.domainProgress).reduce((sum, d) => sum + d.quizCorrect, 0); return total >= 20 && right / total >= 0.9; } },
 { id: "capstone_1",        name: "Boss Beaten",          desc: "Completed your first domain capstone.",            icon: "🏆", check: (s) => Object.values(s.domainProgress).some((d) => d.capstoneDone) },
 { id: "capstone_3",        name: "Three Bosses Down",    desc: "Completed three domain capstones.",                icon: "🏆", check: (s) => Object.values(s.domainProgress).filter((d) => d.capstoneDone).length >= 3 },
 { id: "reflection_10",     name: "Thoughtful",           desc: "Saved ten reflections.",                           icon: "📓", check: (s) => Object.entries(s.notes).filter(([k, v]) => k.endsWith(":reflect") && (v ?? "").trim().length > 20).length >= 10 },
 { id: "missions_10",       name: "Real World",           desc: "Completed ten real-world missions.",               icon: "🌐", check: (s) => Object.values(s.domainProgress).reduce((sum, d) => sum + d.missionsDone.length, 0) >= 10 },
 { id: "calibrated",        name: "Well Calibrated",      desc: "Reached a strong calibration score.",              icon: "🎚️", check: (s) => (s.calibrationScore ?? 0) >= 0.4 },
 { id: "level_10",          name: "Double Digits",        desc: "Reached level 10.",                                icon: "⭐", check: (s) => s.xp >= 10 * 250 }
];

export function newlyEarned(prev: string[], state: import("@/lib/types").UserState): { id: string; name: string; desc: string }[] {
 const earned: { id: string; name: string; desc: string }[] = [];
 for (const a of ACHIEVEMENTS) {
  if (prev.includes(a.id)) continue;
  if (a.check(state)) earned.push({ id: a.id, name: a.name, desc: a.desc });
 }
 return earned;
}
