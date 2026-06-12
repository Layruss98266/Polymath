import type { Metadata } from "next";
import { DOMAIN_INDEX, loadDomain } from "@/data/domains";
import { GlossaryView } from "./GlossaryView";
import { conceptPath } from "@/lib/tabs";

export const metadata: Metadata = {
 title: "Glossary",
 description: "All key terms across 15+ domains, sorted A to Z with one-line definitions.",
 alternates: { canonical: "/glossary" }
};

export type GlossaryTerm = {
 term: string;
 short: string;
 domainName: string;
 domainId: string;
 domainIcon: string;
 conceptIndex: number;
 href: string;
};

async function buildGlossary(): Promise<GlossaryTerm[]> {
 const terms: GlossaryTerm[] = [];

 for (const entry of DOMAIN_INDEX) {
  let domain;
  try {
   domain = await loadDomain(entry.id);
  } catch {
   // domain not yet authored, skip gracefully
   continue;
  }

  domain.concepts.forEach((c, idx) => {
   if (!c.t || !c.short) return;
   terms.push({
    term: c.t,
    short: c.short,
    domainName: entry.name,
    domainId: entry.id,
    domainIcon: entry.icon,
    conceptIndex: idx,
    href: conceptPath(entry.id, idx)
   });
  });
 }

 return terms.sort((a, b) => a.term.localeCompare(b.term, "en", { sensitivity: "base" }));
}

export default async function GlossaryPage() {
 const terms = await buildGlossary();
 return <GlossaryView terms={terms} />;
}
