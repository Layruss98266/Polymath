// Single rank-index calculator used by all surfaces that produce a snapshot
// without a loaded `Domain` payload (share link generation, ShareCard PNG).
// Replaces three earlier ad-hoc formulas that disagreed about who was a
// Specialist vs an Expert.
//
// The real `masteryPct` in `lib/mastery.ts` needs the full Domain object plus
// ConceptProgress to evaluate the "proven" signal. Surfaces that only have
// DomainProgress fall back to this approximation. Tuned to be 1:1 with
// `masteryPct` for a learner who has not yet reflected (i.e. only the
// shallow signals contribute).

import type { DomainProgress } from "./types";

// Sensible defaults so callers without a loaded Domain payload still get a
// reasonable estimate. These match the medians across the current 15
// authored domains (concepts: 13, missions: 7, quiz: 5, flashcards: 8).
export const SHARE_RANK_DEFAULT_TOTALS = { concepts: 13, missions: 7, quiz: 5, flashcards: 8 } as const;

const W = {
 conceptsOpened: 0.30,
 missions: 0.20,
 quizAccuracy: 0.20,
 flashcards: 0.30
};

export function shallowMasteryPct(p: DomainProgress | undefined, totals: {
 concepts: number;
 missions: number;
 quiz: number;
 flashcards: number;
}): number {
 if (!p) return 0;
 const concepts = clamp01(p.conceptsOpened / Math.max(1, totals.concepts));
 const missions = clamp01(p.missionsDone.length / Math.max(1, totals.missions));
 const quiz = p.quizAnswered > 0
  ? clamp01(p.quizCorrect / p.quizAnswered) * clamp01(p.quizAnswered / Math.max(1, totals.quiz))
  : 0;
 const flashcards = clamp01(p.flashcardsGraduated / Math.max(1, totals.flashcards));
 const raw = concepts * W.conceptsOpened + missions * W.missions + quiz * W.quizAccuracy + flashcards * W.flashcards;
 return clamp01(Math.pow(raw, 1.15));
}

// Returns the rank index 0-6 (Novice...Grandmaster) for a domain when only
// `DomainProgress` is available. Matches the thresholds in `lib/xp.ts`
// `domainRank`.
export function rankIndexFromProgress(p: DomainProgress | undefined, totals: {
 concepts: number;
 missions: number;
 quiz: number;
 flashcards: number;
}): number {
 const m = shallowMasteryPct(p, totals);
 if (m >= 0.97) return 6;
 if (m >= 0.90) return 5;
 if (m >= 0.78) return 4;
 if (m >= 0.60) return 3;
 if (m >= 0.42) return 2;
 if (m >= 0.22) return 1;
 return 0;
}

function clamp01(n: number): number { return Math.max(0, Math.min(1, n)); }
