import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadDomain, findEntry, DOMAIN_INDEX } from "@/data/domains";
import { SubdomainPage } from "@/components/domain/SubdomainPage";

export async function generateStaticParams() {
 const out: { id: string; subdomain: string }[] = [];
 for (const meta of DOMAIN_INDEX) {
  try {
   const d = await loadDomain(meta.id);
   (d.subdomains ?? []).forEach((sd) => out.push({ id: meta.id, subdomain: sd.id }));
  } catch {}
 }
 return out;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string; subdomain: string }> }): Promise<Metadata> {
 const { id, subdomain } = await params;
 const entry = findEntry(id);
 try {
  const d = await loadDomain(id);
  const sd = d.subdomains?.find((x) => x.id === subdomain);
  if (!sd || !entry) return { title: "Subdomain not found" };
  const title = `${sd.name}. ${entry.name}`;
  const description = sd.intro ?? `${sd.name} concepts inside ${entry.name}.`;
  return {
   title,
   description,
   alternates: { canonical: `/domain/${id}/sub/${subdomain}` },
   openGraph: { title, description, type: "article", url: `/domain/${id}/sub/${subdomain}` }
  };
 } catch { return { title: "Subdomain not found" }; }
}

export default async function SubdomainRoute({ params }: { params: Promise<{ id: string; subdomain: string }> }) {
 const { id, subdomain } = await params;
 try {
  const d = await loadDomain(id);
  if (!d.subdomains?.some((sd) => sd.id === subdomain)) notFound();
  return <SubdomainPage domain={d} subdomainId={subdomain} />;
 } catch { notFound(); }
}
