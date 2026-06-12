// Mastery % per domain. One weighting, used everywhere.
import type { Domain, DomainProgress } from "./types";

const W = {
 concepts: 0.20,
 missions: 0.20,
 quiz: 0.20,
 flashcards: 0.25,
 capstone: 0.15
};

export function masteryPct(domain: Domain, p?: DomainProgress): number {
 if (!p) return 0;
 const concepts = clamp01(p.conceptsOpened / Math.max(1, domain.concepts.length));
 const missions = clamp01(p.missionsDone.length / Math.max(1, domain.missions.length));
 const quiz = p.quizAnswered > 0 ? clamp01(p.quizCorrect / p.quizAnswered) * clamp01(p.quizAnswered / domain.quiz.length) : 0;
 const flashcards = clamp01(p.flashcardsGraduated / Math.max(1, domain.flashcards.length));
 const capstone = p.capstoneDone ? 1 : 0;
 return (
  concepts * W.concepts +
  missions * W.missions +
  quiz * W.quiz +
  flashcards * W.flashcards +
  capstone * W.capstone
 );
}

function clamp01(n: number): number { return Math.max(0, Math.min(1, n)); }
