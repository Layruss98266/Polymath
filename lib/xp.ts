// XP, levels, ranks. Single source of truth.
// Ethical-XP rule (spec §11C): XP for *real learning actions only*, recall, missions, reflections, calibrated answers.

export const XP_PER_LEVEL = 250;

export const XP = {
 conceptOpenedFirstTime: 5,    // tiny, opening != learning
 reflectionWritten: 15,      // applied recall
 quizCorrectFirstTry: 20,
 quizCorrectCalibrated: 8,     // bonus for calibrated confidence (right + sure, or wrong + unsure)
 missionDone: 30,         // overridden by mission.xp if provided
 flashcardGraduated: 25,
 flashcardReviewed: 4,       // small per-review
 capstone: 200,
 streakDay: 10,
 dailyQuestDone: 25,
 testOutProven: 12         // pre-assessment, less than learning it the long way
} as const;

export function levelOf(xp: number): number {
 return Math.floor(Math.max(0, xp) / XP_PER_LEVEL) + 1;
}

export function levelProgress(xp: number): { current: number; into: number; nextAt: number; pct: number } {
 const lvl = levelOf(xp);
 const base = (lvl - 1) * XP_PER_LEVEL;
 const into = xp - base;
 return { current: lvl, into, nextAt: XP_PER_LEVEL, pct: Math.min(1, into / XP_PER_LEVEL) };
}

// Global rank ladder (playful, climbing). Index by level brackets.
const RANK_LADDER: { name: string; minLevel: number }[] = [
 { name: "Curious Newcomer", minLevel: 1 },
 { name: "Eager Apprentice", minLevel: 3 },
 { name: "Field Explorer", minLevel: 6 },
 { name: "Cross-Discipline Thinker", minLevel: 10 },
 { name: "Synthesist", minLevel: 15 },
 { name: "Renaissance Mind", minLevel: 22 },
 { name: "Certified Polymath", minLevel: 32 }
];

export function globalRank(xp: number): { name: string; nextName?: string; nextAtLevel?: number } {
 const lvl = levelOf(xp);
 let i = RANK_LADDER.length - 1;
 while (i > 0 && RANK_LADDER[i].minLevel > lvl) i--;
 const next = RANK_LADDER[i + 1];
 return { name: RANK_LADDER[i].name, nextName: next?.name, nextAtLevel: next?.minLevel };
}

export const DOMAIN_RANKS = [
 "Novice", "Apprentice", "Practitioner", "Specialist", "Expert", "Master", "Grandmaster"
] as const;

export type DomainRank = typeof DOMAIN_RANKS[number];

// Per-domain rank from mastery %.
// Thresholds raised so titles like Master and Grandmaster are not awarded for
// shallow click-throughs. Paired with the rewritten masteryPct in lib/mastery
// which separates "opened" from "proven" (opened + reflected + quizzed).
export function domainRank(masteryPct: number): DomainRank {
 if (masteryPct >= 0.97) return "Grandmaster";
 if (masteryPct >= 0.90) return "Master";
 if (masteryPct >= 0.78) return "Expert";
 if (masteryPct >= 0.60) return "Specialist";
 if (masteryPct >= 0.42) return "Practitioner";
 if (masteryPct >= 0.22) return "Apprentice";
 return "Novice";
}
