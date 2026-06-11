// Streak engine — w/ grace-day (§11C). One missed day doesn't nuke a long streak.
import type { UserState } from "./types";

export function todayKey(d = new Date()): string {
  const yy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yy}-${mm}-${dd}`;
}

function daysBetween(aKey: string, bKey: string): number {
  const a = new Date(aKey + "T00:00:00").getTime();
  const b = new Date(bKey + "T00:00:00").getTime();
  return Math.round((b - a) / 86400000);
}

/** Call once on app open + on every learning action. Returns updated state.
 *  Logic:
 *  - Same day as lastActiveDay → no change.
 *  - 1 day gap → increment streak.
 *  - 2 day gap & grace not yet used → consume grace, keep streak, mark today as "grace consumed".
 *  - >2 day gap, or grace already used → reset streak to 1.
 */
export function tickStreak(s: UserState, day = todayKey()): UserState {
  if (s.lastActiveDay === day) return s;
  if (!s.lastActiveDay) {
    return { ...s, lastActiveDay: day, currentStreak: 1, longestStreak: Math.max(1, s.longestStreak) };
  }
  const gap = daysBetween(s.lastActiveDay, day);
  let streak = s.currentStreak;
  let graceUsedOn = s.graceUsedOn;
  if (gap <= 0) return { ...s, lastActiveDay: day }; // clock skew safety
  if (gap === 1) streak = s.currentStreak + 1;
  else if (gap === 2 && !s.graceUsedOn) { streak = s.currentStreak + 1; graceUsedOn = day; }
  else streak = 1;
  return {
    ...s,
    currentStreak: streak,
    longestStreak: Math.max(s.longestStreak, streak),
    lastActiveDay: day,
    graceUsedOn
  };
}
