import { describe, it, expect } from "vitest";
import { masteryPct } from "@/lib/mastery";
import type { Domain, DomainProgress } from "@/lib/types";

const mockDomain = {
 concepts: new Array(10).fill({}),
 missions: new Array(5).fill({}),
 quiz: new Array(5).fill({}),
 flashcards: new Array(8).fill({})
} as unknown as Domain;

const zeroProgress: DomainProgress = {
 domainId: "x",
 conceptsOpened: 0,
 missionsDone: [],
 quizAnswered: 0,
 quizCorrect: 0,
 capstoneDone: false,
 flashcardsGraduated: 0,
 unlockedRank: "Novice"
};

describe("masteryPct", () => {
 it("returns 0 when there is no progress entry", () => {
  expect(masteryPct(mockDomain, undefined)).toBe(0);
 });
 it("returns 0 on a fresh progress entry", () => {
  expect(masteryPct(mockDomain, zeroProgress)).toBe(0);
 });
 it("returns 1 when everything is maxed", () => {
  const p: DomainProgress = {
   ...zeroProgress,
   conceptsOpened: 10,
   missionsDone: [0, 1, 2, 3, 4],
   quizAnswered: 5,
   quizCorrect: 5,
   flashcardsGraduated: 8,
   capstoneDone: true
  };
  expect(masteryPct(mockDomain, p)).toBeCloseTo(1, 5);
 });
 it("is monotonic. more opened never decreases mastery", () => {
  const a: DomainProgress = { ...zeroProgress, conceptsOpened: 2 };
  const b: DomainProgress = { ...zeroProgress, conceptsOpened: 5 };
  expect(masteryPct(mockDomain, b)).toBeGreaterThanOrEqual(masteryPct(mockDomain, a));
 });
 it("clamps when counters exceed the available items", () => {
  const p: DomainProgress = { ...zeroProgress, conceptsOpened: 9999 };
  expect(masteryPct(mockDomain, p)).toBeLessThanOrEqual(1);
 });
});
