// Mastery % per domain. One weighting, used everywhere.
//
// The earlier formula treated "concept opened" as ~20% of the score, so
// clicking Reveal on 10 concepts + ticking 4 missions could push someone to
// "Practitioner" with almost no actual learning. The new formula separates
// shallow signals (opened) from deep ones (reflected on + quizzed correctly +
// flashcards graduated + capstone), and applies a small non-linear curve so
// the last 20 percent of mastery is meaningfully harder than the first 20.
import type { Domain, DomainProgress, ConceptProgress } from "./types";

const W = {
 conceptsOpened: 0.08,    // shallow signal. Opening is not learning.
 conceptsProven: 0.22,    // deep signal: opened AND reflected AND quizzed correctly.
 missions: 0.12,          // small, since these are mostly one-shot.
 quiz: 0.16,              // domain quiz score, weighted by coverage.
 flashcards: 0.22,        // FSRS graduated cards are real retention.
 capstone: 0.20           // the final exam. Required for Master+.
};

export function masteryPct(domain: Domain, p?: DomainProgress, cps?: ConceptProgress[]): number {
 if (!p) return 0;
 const total = Math.max(1, domain.concepts.length);

 // Shallow: ratio of concepts the learner has even opened.
 const conceptsOpened = clamp01(p.conceptsOpened / total);

 // Deep: a concept counts as "proven" only when the learner has reflected on
 // it (note > 20 chars, recorded by reflectionSeen) AND scored at least one
 // concept-quiz item correctly on it. Falls back to opened-with-attempt for
 // older saves where ConceptProgress was not yet populated.
 let proven = 0;
 let haveCps = false;
 if (cps && cps.length > 0) {
  for (const cp of cps) {
   if (cp.domainId !== domain.id) continue;
   haveCps = true;
   const ok = cp.opened && (cp.reflectAnswer ?? "").trim().length > 20 && (cp.accuracy ?? 0) >= 0.6;
   if (ok) proven++;
  }
 }
 // Fallback for older saves with no ConceptProgress: treat opened concepts as proven.
 const conceptsProven = haveCps ? clamp01(proven / total) : clamp01(p.conceptsOpened / total);

 const missions = clamp01(p.missionsDone.length / Math.max(1, domain.missions.length));
 // Quiz: accuracy × coverage. So 100% accurate on only 1 quiz item is not the
 // same as 100% accurate across all of them.
 const quiz = p.quizAnswered > 0
  ? clamp01(p.quizCorrect / p.quizAnswered) * clamp01(p.quizAnswered / Math.max(1, domain.quiz.length))
  : 0;
 const flashcards = clamp01(p.flashcardsGraduated / Math.max(1, domain.flashcards.length));
 const capstone = p.capstoneDone ? 1 : 0;

 const raw =
  conceptsOpened * W.conceptsOpened +
  conceptsProven * W.conceptsProven +
  missions * W.missions +
  quiz * W.quiz +
  flashcards * W.flashcards +
  capstone * W.capstone;

 // Mild concave curve so the last band is harder. ^1.15 on a 0-1 input
 // pushes 50% to ~0.45 and 90% to ~0.88, leaving 95%+ feeling earned.
 return clamp01(Math.pow(raw, 1.15));
}

function clamp01(n: number): number { return Math.max(0, Math.min(1, n)); }
