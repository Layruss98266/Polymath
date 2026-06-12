import { describe, it, expect } from "vitest";
import { tickStreak, todayKey } from "@/lib/streak";
import { defaultState } from "@/lib/migrations";

function dayKey(year: number, month: number, day: number): string {
 return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

describe("todayKey", () => {
 it("produces a YYYY-MM-DD string", () => {
  expect(todayKey(new Date(2026, 5, 12))).toBe("2026-06-12");
  expect(todayKey(new Date(2026, 0, 1))).toBe("2026-01-01");
 });
});

describe("tickStreak", () => {
 const base = defaultState();

 it("starts a streak at 1 on the first call", () => {
  const next = tickStreak(base, dayKey(2026, 6, 12));
  expect(next.currentStreak).toBe(1);
  expect(next.longestStreak).toBeGreaterThanOrEqual(1);
  expect(next.lastActiveDay).toBe("2026-06-12");
 });

 it("is idempotent within the same day", () => {
  const a = tickStreak(base, dayKey(2026, 6, 12));
  const b = tickStreak(a, dayKey(2026, 6, 12));
  expect(b).toBe(a);
 });

 it("increments on a one-day gap", () => {
  const a = tickStreak(base, dayKey(2026, 6, 12));
  const b = tickStreak(a, dayKey(2026, 6, 13));
  expect(b.currentStreak).toBe(2);
 });

 it("uses weekly grace on a two-day gap", () => {
  const a = tickStreak(base, dayKey(2026, 6, 8));
  const b = tickStreak(a, dayKey(2026, 6, 10));
  expect(b.currentStreak).toBe(2);
  expect(b.graceUsedOn).toBe("2026-06-10");
 });

 it("breaks the streak after two two-day gaps in the same week", () => {
  const a = tickStreak(base, dayKey(2026, 6, 8));
  const b = tickStreak(a, dayKey(2026, 6, 10));
  const c = tickStreak(b, dayKey(2026, 6, 12));
  expect(c.currentStreak).toBe(1);
 });

 it("breaks the streak on a 3+ day gap", () => {
  const a = tickStreak(base, dayKey(2026, 6, 12));
  const b = tickStreak(a, dayKey(2026, 6, 16));
  expect(b.currentStreak).toBe(1);
 });

 it("longestStreak only ratchets up", () => {
  let s = base;
  s = tickStreak(s, dayKey(2026, 6, 8));
  s = tickStreak(s, dayKey(2026, 6, 9));
  s = tickStreak(s, dayKey(2026, 6, 10));
  expect(s.longestStreak).toBe(3);
  s = tickStreak(s, dayKey(2026, 6, 20));
  expect(s.currentStreak).toBe(1);
  expect(s.longestStreak).toBe(3);
 });
});
