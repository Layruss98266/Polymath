import { z } from "zod";

const Mentor = z.object({
 name: z.string().min(1),
 for: z.string().min(1),
 work: z.string().min(1),
 quote: z.string().optional()
});

const Diagram = z.object({
 kind: z.enum([
  "funnel", "pyramid", "cycle", "flow", "curve", "quadrant",
  "spectrum", "venn", "tree", "network", "bars", "timeline",
  "sequence", "gauge", "labelled"
 ]),
 title: z.string(),
 caption: z.string(),
 data: z.record(z.string(), z.unknown())
});

const Synthesis = z.object({
 concept: z.string(),
 linksTo: z.string(),
 note: z.string()
});

const QuizOption = z.union([
 z.object({ text: z.string(), correct: z.literal(true) }),
 z.object({ text: z.string(), correct: z.literal(false).optional(), misconception: z.string() })
]);

const QuizQuestion = z.object({
 q: z.string(),
 options: z.array(QuizOption).min(2),
 why: z.string(),
 testOut: z.boolean().optional()
});

const ConceptTask = z.object({
 level: z.enum(["basic", "easy", "advanced"]),
 t: z.string(),
 d: z.string(),
 xp: z.number().int().positive()
});

const Concept = z.object({
 t: z.string(),
 short: z.string(),
 deep: z.string(),
 status: z.enum(["settled", "debated", "framework"]),
 reflect: z.string(),
 fullForm: z.string().optional(),
 definition: z.string().optional(),
 subdomain: z.string().optional(),
 prereqs: z.array(z.string()).optional(),
 generic: z.string().optional(),
 expert: z.string().optional(),
 conceptQuiz: z.array(QuizQuestion).optional(),
 conceptTasks: z.array(ConceptTask).optional()
});

const RoadmapStage = z.object({
 rank: z.enum(["Novice", "Apprentice", "Practitioner", "Specialist", "Expert", "Master", "Grandmaster"]),
 focus: z.string(),
 do: z.string(),
 milestone: z.string(),
 time: z.string()
});

const Resource = z.object({
 name: z.string(),
 what: z.string(),
 url: z.string(),
 kind: z.enum(["article", "video", "course", "book", "podcast", "tool"]).optional(),
 price: z.string().optional(),
 verify: z.boolean().optional(),
 lastVerified: z.string().optional()
});

const Mission = z.object({ t: z.string(), d: z.string(), xp: z.number().int().positive() });

const Flashcard = z.object({ front: z.string(), back: z.string() });
const GlossaryItem = z.object({ term: z.string(), def: z.string() });

export const DomainSchema = z.object({
 id: z.string().regex(/^[a-z0-9_]+$/),
 icon: z.string(),
 hue: z.string(),
 category: z.string(),
 name: z.string(),
 tagline: z.string(),

 basics: z.string(),
 whyItMatters: z.array(z.string()).min(2),
 realWorldExample: z.string(),

 mentors: z.array(Mentor).optional(),
 diagrams: z.array(Diagram).min(2),
 synthesis: z.array(Synthesis).min(2),

 concepts: z.array(Concept).min(8),
 counterView: z.string().min(20),
 capabilities: z.array(z.string()).min(5),
 cheatsheet: z.array(z.string()).min(3),

 roadmap: z.array(RoadmapStage).length(7),
 resources: z.object({ free: z.array(Resource).min(1), paid: z.array(Resource).min(1) }),
 missions: z.array(Mission).min(5),
 quiz: z.array(QuizQuestion).min(5),
 flashcards: z.array(Flashcard).min(8),
 glossary: z.array(GlossaryItem).min(8),

 subdomains: z.array(z.object({ id: z.string(), name: z.string() })).optional(),
 capstone: z.object({ t: z.string(), d: z.string(), xp: z.number().int().positive() }).optional(),
 safetyNote: z.string().optional()
});

export type DomainParsed = z.infer<typeof DomainSchema>;

export function validateDomain(d: unknown, ctx = ""): DomainParsed {
 const r = DomainSchema.safeParse(d);
 if (!r.success) {
  // In dev, loud failure. In prod, return a best-effort parse so the app doesn't crash.
  if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
   console.error(`[domain schema] ${ctx} failed validation`, r.error.flatten());
  }
  throw new Error(`Domain validation failed (${ctx}): ${r.error.message}`);
 }
 return r.data;
}
