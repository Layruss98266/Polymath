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
  core: boolean;       // §3 Core 15
  loader: () => Promise<{ default: Domain }>;
};

// As of Phase 1b — 3 fully-authored, schema-validated reference domains.
// Phase 1c expands this to all Core 15. Adding an entry here automatically
// surfaces it on Home + Skill Map + Review.
export const DOMAIN_INDEX: DomainEntry[] = [
  { id: "marketing",        name: "Marketing",                category: "Money & Work", icon: "📣", hue: "#ff6b5e", tagline: "Make people want things — ethically",                 core: true, loader: () => import("./domains/marketing") },
  { id: "ai_ml",            name: "AI & Machine Learning",    category: "Tech & Future", icon: "🤖", hue: "#6db5ff", tagline: "Understand the machines rewriting everything",        core: true, loader: () => import("./domains/ai_ml") },
  { id: "personal_finance", name: "Personal Finance",         category: "Money & Work", icon: "💰", hue: "#facc15", tagline: "Spend less than you earn, invest the rest",          core: true, loader: () => import("./domains/personal_finance") }
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
