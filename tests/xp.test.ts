import { describe, it, expect } from "vitest";
import { levelOf, levelProgress, globalRank, domainRank, XP_PER_LEVEL, XP } from "@/lib/xp";

describe("levelOf", () => {
 it("starts at level 1 with 0 XP", () => {
  expect(levelOf(0)).toBe(1);
 });
 it("clamps negative XP to level 1", () => {
  expect(levelOf(-100)).toBe(1);
 });
 it("levels up at the boundary", () => {
  expect(levelOf(XP_PER_LEVEL - 1)).toBe(1);
  expect(levelOf(XP_PER_LEVEL)).toBe(2);
  expect(levelOf(XP_PER_LEVEL * 5)).toBe(6);
 });
});

describe("levelProgress", () => {
 it("reports 0 progress at the start of a level", () => {
  const p = levelProgress(XP_PER_LEVEL);
  expect(p.current).toBe(2);
  expect(p.into).toBe(0);
  expect(p.pct).toBe(0);
 });
 it("reports clamped progress when over the level", () => {
  const p = levelProgress(XP_PER_LEVEL * 2 - 1);
  expect(p.current).toBe(2);
  expect(p.pct).toBeLessThanOrEqual(1);
 });
});

describe("globalRank", () => {
 it("returns the lowest rank at level 1", () => {
  expect(globalRank(0).name).toBe("Curious Newcomer");
 });
 it("walks up the ladder", () => {
  expect(globalRank(XP_PER_LEVEL * 3).name).toBe("Eager Apprentice");
  expect(globalRank(XP_PER_LEVEL * 32).name).toBe("Certified Polymath");
 });
 it("nextName is undefined at the top", () => {
  expect(globalRank(XP_PER_LEVEL * 50).nextName).toBeUndefined();
 });
});

describe("domainRank", () => {
 it("returns Novice for zero mastery", () => {
  expect(domainRank(0)).toBe("Novice");
 });
 it("returns Grandmaster at the top", () => {
  expect(domainRank(0.98)).toBe("Grandmaster");
 });
 it("requires 0.90+ for Master, not less", () => {
  expect(domainRank(0.89)).toBe("Expert");
  expect(domainRank(0.90)).toBe("Master");
 });
 it("does not award Practitioner at 0.34", () => {
  expect(domainRank(0.34)).toBe("Apprentice");
 });
 it("returns boundary values", () => {
  expect(domainRank(0.22)).toBe("Apprentice");
  expect(domainRank(0.21)).toBe("Novice");
 });
});

describe("XP table", () => {
 it("has the expected rewards", () => {
  expect(XP.reflectionWritten).toBeGreaterThan(0);
  expect(XP.quizCorrectFirstTry).toBeGreaterThan(XP.conceptOpenedFirstTime);
  expect(XP.capstone).toBeGreaterThan(XP.missionDone);
 });
});
