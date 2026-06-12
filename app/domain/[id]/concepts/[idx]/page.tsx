import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadDomain, findEntry, DOMAIN_INDEX } from "@/data/domains";
import { ConceptDeepPage } from "@/components/domain/ConceptDeepPage";

export async function generateStaticParams() {
 const out: { id: string; idx: string }[] = [];
 for (const meta of DOMAIN_INDEX) {
  try {
   const d = await loadDomain(meta.id);
   d.concepts.forEach((_, i) => out.push({ id: meta.id, idx: String(i) }));
  } catch {}
 }
 return out;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string; idx: string }> }): Promise<Metadata> {
 const { id, idx } = await params;
 const entry = findEntry(id);
 try {
  const d = await loadDomain(id);
  const concept = d.concepts[Number(idx)];
  if (!concept || !entry) return { title: "Concept not found" };
  const title = `${concept.t}. ${entry.name}`;
  const description = concept.definition ?? concept.short;
  return {
   title,
   description,
   alternates: { canonical: `/domain/${id}/concepts/${idx}` },
   openGraph: { title, description, type: "article", url: `/domain/${id}/concepts/${idx}` },
   twitter: { card: "summary_large_image", title, description }
  };
 } catch {
  return { title: "Concept not found" };
 }
}

export default async function ConceptPage({ params }: { params: Promise<{ id: string; idx: string }> }) {
 const { id, idx } = await params;
 const n = Number(idx);
 if (!Number.isInteger(n) || n < 0) notFound();
 try {
  const domain = await loadDomain(id);
  if (n >= domain.concepts.length) notFound();
  const concept = domain.concepts[n];
  // LearningResource JSON-LD for SEO + assistive tech discovery.
  const jsonLd = {
   "@context": "https://schema.org",
   "@type": "LearningResource",
   name: concept.t,
   description: concept.definition ?? concept.short,
   inLanguage: "en",
   isPartOf: { "@type": "Course", name: domain.name }
  };
  return (
   <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <ConceptDeepPage domain={domain} conceptIdx={n} />
   </>
  );
 } catch { notFound(); }
}
