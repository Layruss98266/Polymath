import type { Metadata } from "next";
import Link from "next/link";
import { DOMAIN_INDEX } from "@/data/domains";

export const metadata: Metadata = {
 title: "Learning Paths",
 description: "Curated multi-domain bundles to take you from zero to capable on a real life goal.",
 alternates: { canonical: "/paths" }
};

type LearningPath = {
 id: string;
 title: string;
 emoji: string;
 tagline: string;
 domains: string[];
 estimatedWeeks: number;
};

const PATHS: LearningPath[] = [
 {
  id: "financially-literate",
  title: "Get financially literate",
  emoji: "💰",
  tagline: "Build a money system that works for you, from first salary to first investment.",
  domains: ["personal_finance", "investing", "negotiation"],
  estimatedWeeks: 6
 },
 {
  id: "better-communicator",
  title: "Become a better communicator",
  emoji: "🎤",
  tagline: "Say what you mean. Have people actually hear it.",
  domains: ["communication", "negotiation", "psychology"],
  estimatedWeeks: 5
 },
 {
  id: "ai-ready-career",
  title: "Build an AI-ready career",
  emoji: "🤖",
  tagline: "Understand the tools reshaping work so you lead the change, not get caught by it.",
  domains: ["ai_ml", "tech", "learning"],
  estimatedWeeks: 8
 },
 {
  id: "think-like-a-strategist",
  title: "Think like a strategist",
  emoji: "🧩",
  tagline: "Upgrade your default thinking toolkit with models that hold up under pressure.",
  domains: ["mental_models", "psychology", "marketing"],
  estimatedWeeks: 5
 },
 {
  id: "lead-a-team",
  title: "Lead a team",
  emoji: "🤝",
  tagline: "Move from doing the work to enabling others to do their best work.",
  domains: ["communication", "negotiation", "psychology"],
  estimatedWeeks: 6
 },
 {
  id: "launch-a-product",
  title: "Launch a product",
  emoji: "🚀",
  tagline: "Turn an idea into something real that people actually want to buy.",
  domains: ["entrepreneurship", "marketing", "mental_models"],
  estimatedWeeks: 8
 },
 {
  id: "healthy-desk-job",
  title: "Stay healthy in a desk job",
  emoji: "🫀",
  tagline: "Practical, evidence-based habits for when you sit all day and have a life to protect.",
  domains: ["health", "nutrition", "psychology"],
  estimatedWeeks: 4
 },
 {
  id: "personal-finance-india",
  title: "Master personal finance India",
  emoji: "📈",
  tagline: "SEBI, NPS, ELSS, PPF, Section 80C. Build wealth the India-smart way.",
  domains: ["personal_finance", "investing", "law"],
  estimatedWeeks: 7
 }
];

function getDomainMeta(id: string) {
 return DOMAIN_INDEX.find((d) => d.id === id);
}

export default function PathsPage() {
 return (
  <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">
   <header className="space-y-2">
    <h1 className="text-3xl font-bold">Learning Paths</h1>
    <p className="dim text-base max-w-2xl">
     Curated bundles that combine 2 to 3 domains around a real goal. Pick one, work through
     the domains in order, and you will come out the other side with something concrete.
    </p>
   </header>

   <div className="grid gap-5 sm:grid-cols-2">
    {PATHS.map((path) => {
     const entry = getDomainMeta(path.domains[0]);
     const href = entry ? `/domain/${path.domains[0]}` : "/domains";
     return (
      <Link
       key={path.id}
       href={href}
       className="panel lift p-5 flex flex-col gap-4 no-underline"
       aria-label={`Start path: ${path.title}`}
      >
       <div className="flex items-start gap-3">
        <span className="text-3xl" role="img" aria-hidden="true">{path.emoji}</span>
        <div className="flex-1 min-w-0">
         <h2 className="text-base font-semibold leading-snug">{path.title}</h2>
         <p className="dim text-sm mt-1 leading-relaxed">{path.tagline}</p>
        </div>
       </div>

       <div className="flex flex-wrap gap-2">
        {path.domains.map((dId) => {
         const meta = getDomainMeta(dId);
         if (!meta) return null;
         return (
          <span key={dId} className="chip" style={{ borderColor: meta.hue, color: meta.hue }}>
           {meta.icon} {meta.name}
          </span>
         );
        })}
       </div>

       <div className="flex items-center justify-between mt-auto pt-2 border-t" style={{ borderColor: "var(--line)" }}>
        <span className="dim text-xs">{path.estimatedWeeks} weeks estimated</span>
        <span className="btn text-sm" aria-hidden="true">Start path</span>
       </div>
      </Link>
     );
    })}
   </div>

   <section className="panel p-5 space-y-2">
    <h2 className="font-semibold">How paths work</h2>
    <p className="dim text-sm leading-relaxed">
     Each path links to the first domain. Work through that domain at your own pace using
     the Concepts, Quiz, and Flashcards tabs. Then move to the next domain in the list.
     The order matters: later domains assume you have the earlier ones.
    </p>
    <p className="dim text-sm leading-relaxed">
     There are no locks, no deadlines, and no accounts. Your progress lives in your browser.
    </p>
   </section>
  </main>
 );
}
