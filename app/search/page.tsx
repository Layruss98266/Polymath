import { SearchView } from "@/components/SearchView";

export const metadata = {
 title: "Search",
 description: "Find any domain, concept, or glossary term across the catalogue.",
 alternates: { canonical: "/search" }
};

export default function SearchPage() { return <SearchView />; }
