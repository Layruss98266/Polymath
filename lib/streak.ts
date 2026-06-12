// Streak engine, w/ weekly grace-day. One missed day per week does not nuke
// a long streak. The grace refreshes every ISO week.
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

// ISO week number. Used to decide when the grace day refreshes.
function isoWeek(dayKey: string): string {
 const d = new Date(dayKey + "T00:00:00");
 const target = new Date(d.valueOf());
 const dayNr = (d.getDay() + 6) % 7;
 target.setDate(target.getDate() - dayNr + 3);
 const firstThursday = target.valueOf();
 target.setMonth(0, 1);
 if (target.getDay() !== 4) {
  target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
 }
 const wk = 1 + Math.ceil((firstThursday - target.valueOf()) / 604800000);
 return `${d.getFullYear()}-W${String(wk).padStart(2, "0")}`;
}

function canUseGrace(currentDay: string, graceUsedOn?: string): boolean {
 if (!graceUsedOn) return true;
 return isoWeek(currentDay) !== isoWeek(graceUsedOn);
}

/** Call once on app open + on every learning action. Returns updated state.
 * Logic:
 * - Same day as lastActiveDay → no change.
 * - 1 day gap → increment streak.
 * - 2 day gap & grace available this week → consume grace, keep streak.
 * - >2 day gap, or grace already used this week → reset streak to 1.
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
 else if (gap === 2 && canUseGrace(day, s.graceUsedOn)) { streak = s.currentStreak + 1; graceUsedOn = day; }
 else streak = 1;
 return {
  ...s,
  currentStreak: streak,
  longestStreak: Math.max(s.longestStreak, streak),
  lastActiveDay: day,
  graceUsedOn
 };
}
