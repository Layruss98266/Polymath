// Canonical types, mirrored 1:1 by Zod schema in ./schema.ts.

export type EpistemicStatus = "settled" | "debated" | "framework";

export type Mentor = {
 name: string;
 for: string;
 work: string;
 quote?: string;
};

export type DiagramKind =
 | "funnel" | "pyramid" | "cycle" | "flow" | "curve" | "quadrant"
 | "spectrum" | "venn" | "tree" | "network" | "bars" | "timeline"
 | "sequence" | "gauge" | "labelled";

export type Diagram = {
 kind: DiagramKind;
 title: string;
 caption: string;
 data: Record<string, unknown>;
};

export type Synthesis = { concept: string; linksTo: string; note: string };

export type ConceptTask = {
 level: "basic" | "easy" | "advanced";
 t: string;
 d: string;
 xp: number;
};

export type Concept = {
 t: string;
 short: string;
 deep: string;
 status: EpistemicStatus;
 reflect: string;
 // Phase 5c additions, all optional so existing domains keep working
 fullForm?: string;            // expansion of any acronym in the concept name
 definition?: string;          // one-line dictionary style
 subdomain?: string;           // optional grouping inside the domain
 prereqs?: string[];           // titles of prior concepts that help
 generic?: string;             // explanation for someone with zero background
 expert?: string;              // explanation for someone with domain knowledge
 conceptQuiz?: QuizQuestion[]; // 3 to 5 quiz items tied to this concept
 conceptTasks?: ConceptTask[]; // basic, easy, advanced tasks tied to this concept
};

export type RoadmapStage = {
 rank: "Novice" | "Apprentice" | "Practitioner" | "Specialist" | "Expert" | "Master" | "Grandmaster";
 focus: string;
 do: string;
 milestone: string;
 time: string;
};

export type ResourceKind = "article" | "video" | "course" | "book" | "podcast" | "tool";

export type Resource = {
 name: string;
 what: string;
 url: string;
 kind?: ResourceKind;
 price?: string;
 verify?: boolean;
 lastVerified?: string;
};

export type Mission = { t: string; d: string; xp: number };

export type QuizOption =
 | { text: string; correct: true }
 | { text: string; correct?: false; misconception: string };

export type QuizQuestion = {
 q: string;
 options: QuizOption[];
 why: string;
 testOut?: boolean;
};

export type Flashcard = { front: string; back: string };
export type GlossaryItem = { term: string; def: string };

export type Domain = {
 id: string;
 icon: string;
 hue: string;
 category: string;
 name: string;
 tagline: string;

 basics: string;
 whyItMatters: string[];
 realWorldExample: string;

 mentors?: Mentor[];
 diagrams: Diagram[];
 synthesis: Synthesis[];

 concepts: Concept[];
 counterView: string;
 capabilities: string[];
 cheatsheet: string[];

 roadmap: RoadmapStage[];
 resources: { free: Resource[]; paid: Resource[] };
 missions: Mission[];
 quiz: QuizQuestion[];
 flashcards: Flashcard[];
 glossary: GlossaryItem[];

 subdomains?: { id: string; name: string }[];
 capstone?: { t: string; d: string; xp: number };
 safetyNote?: string;
};

// -------- Persisted user state --------

export type CardSR = {
 cardKey: string;    // `${domainId}:${index}`
 domainId: string;
 due: number;      // epoch ms
 stability: number;
 difficulty: number;
 elapsedDays: number;
 scheduledDays: number;
 reps: number;
 lapses: number;
 state: 0 | 1 | 2 | 3;  // FSRS State: New | Learning | Review | Relearning
 lastReview?: number;
};

export type ConceptProgress = {
 domainId: string;
 conceptIndex: number;
 opened: boolean;
 reflectAnswer?: string;
 testOutProven?: boolean;
 accuracy?: number;   // 0..1, for weakest-concepts queue
 attempts?: number;
};

export type DomainProgress = {
 domainId: string;
 conceptsOpened: number;
 missionsDone: number[];
 quizAnswered: number;
 quizCorrect: number;
 capstoneDone: boolean;
 flashcardsGraduated: number;
 unlockedRank: RoadmapStage["rank"];
};

export type Achievement = {
 id: string;
 name: string;
 desc: string;
 unlockedAt?: number;
};

export type UserState = {
 schemaVersion: number;
 xp: number;
 longestStreak: number;
 currentStreak: number;
 lastActiveDay: string;     // YYYY-MM-DD
 graceUsedOn?: string;      // YYYY-MM-DD
 theme: "dark" | "light";
 muteSound: boolean;
 reducedMotionOverride?: boolean;
 onboarded?: boolean;
 goals?: string[];
 bookmarks: string[];      // concept refs `${domainId}:${index}` or `${domainId}:res:${i}`
 notes: Record<string, string>; // same key shape
 dailyQuest?: { day: string; domainId: string; kind: "read" | "mission" | "quiz" | "review"; done: boolean };
 calibrationScore?: number;   // -1..1
 domainProgress: Record<string, DomainProgress>;
 conceptProgress: ConceptProgress[];
 cards: CardSR[];
 achievements: Achievement[];
 capabilityLog: { domainId: string; statement: string; at: number }[];
 startedDomains: string[];
 // Per-day XP gained, keyed by YYYY-MM-DD. Only the last 400 days are kept.
 xpByDay?: Record<string, number>;
};
