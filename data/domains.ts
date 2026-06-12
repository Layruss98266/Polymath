// Domain registry. Authored progressively per Appendix C.
// Each domain is its own dynamic-imported chunk (§9 lazy-load).

import type { Domain } from "@/lib/types";
import { validateDomain } from "@/lib/schema";

export type DomainEntry = {
 id: string;
 name: string;
 category: string;
 icon: string;
 hue: string;
 tagline: string;
 core: boolean;    // §3 Core 15
 loader: () => Promise<{ default: Domain }>;
};

// As of Phase 1b , 3 fully-authored, schema-validated reference domains.
// Phase 1c expands this to all Core 15. Adding an entry here automatically
// surfaces it on Home + Skill Map + Review.
export const DOMAIN_INDEX: DomainEntry[] = [
 // Mind & Self
 { id: "psychology",    name: "Human Psychology",     category: "Mind & Self",  icon: "🧠", hue: "#a78bfa", tagline: "Why people do what they do",             core: true, loader: () => import("./domains/psychology") },
 { id: "learning",     name: "Learning How to Learn",  category: "Mind & Self",  icon: "📚", hue: "#34d399", tagline: "The meta-skill that compounds",            core: true, loader: () => import("./domains/learning") },
 { id: "mental_models",  name: "Mental Models & Famous Laws", category: "Mind & Self", icon: "🧩", hue: "#f472b6", tagline: "A latticework for clearer thinking",        core: true, loader: () => import("./domains/mental_models") },
 // Body & Health
 { id: "health",      name: "Health, Longevity & How the Body Works", category: "Body & Health", icon: "🫀", hue: "#f87171", tagline: "Live longer, feel better , what's solid", core: true, loader: () => import("./domains/health") },
 { id: "nutrition",    name: "Nutrition & Food Science", category: "Body & Health", icon: "🥗", hue: "#86efac", tagline: "Eat well without the noise",             core: true, loader: () => import("./domains/nutrition") },
 // People & Influence
 { id: "communication",  name: "Communication & Storytelling", category: "People & Influence", icon: "🎤", hue: "#fbbf24", tagline: "Make ideas land , and stick",        core: true, loader: () => import("./domains/communication") },
 { id: "negotiation",   name: "Negotiation & Persuasion", category: "People & Influence", icon: "🤝", hue: "#fb7185", tagline: "Reach agreement without losing yourself",     core: true, loader: () => import("./domains/negotiation") },
 // Money & Work
 { id: "marketing",    name: "Marketing",        category: "Money & Work", icon: "📣", hue: "#ff6b5e", tagline: "Make people want things , ethically",         core: true, loader: () => import("./domains/marketing") },
 { id: "personal_finance", name: "Personal Finance",     category: "Money & Work", icon: "💰", hue: "#facc15", tagline: "Spend less than you earn, invest the rest",     core: true, loader: () => import("./domains/personal_finance") },
 { id: "investing",    name: "Investing & Markets",   category: "Money & Work", icon: "📈", hue: "#22c55e", tagline: "Own assets that compound",              core: true, loader: () => import("./domains/investing") },
 { id: "entrepreneurship", name: "Entrepreneurship & Startups", category: "Money & Work", icon: "🚀", hue: "#60a5fa", tagline: "Find a real problem and solve it",         core: true, loader: () => import("./domains/entrepreneurship") },
 // Tech & Future
 { id: "tech",       name: "Tech & Programming",    category: "Tech & Future", icon: "💻", hue: "#38bdf8", tagline: "Speak to machines, build things",          core: true, loader: () => import("./domains/tech") },
 { id: "ai_ml",      name: "AI & Machine Learning",  category: "Tech & Future", icon: "🤖", hue: "#6db5ff", tagline: "Understand the machines rewriting everything",    core: true, loader: () => import("./domains/ai_ml") },
 // World & Knowledge
 { id: "famous_laws",   name: "Famous Scientific Laws",  category: "World & Knowledge", icon: "⚛️", hue: "#c084fc", tagline: "The rules of reality, in plain words",     core: true, loader: () => import("./domains/famous_laws") },
 { id: "law",       name: "Law & Legal Basics",    category: "World & Knowledge", icon: "⚖️", hue: "#fcd34d", tagline: "How rules work, so they don't surprise you",  core: true, loader: () => import("./domains/law") }
];

export function findEntry(id: string): DomainEntry | undefined {
 return DOMAIN_INDEX.find((d) => d.id === id);
}

export async function loadDomain(id: string): Promise<Domain> {
 const e = findEntry(id);
 if (!e) throw new Error(`Unknown domain ${id}`);
 const mod = await e.loader();
 return validateDomain(mod.default, id);
}
