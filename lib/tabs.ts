// Single source of truth for the per-domain tab system.
// Used by route generation, the tab bar, the sitemap, the command palette,
// and the redirect from the old `?tab=` query string.

export type TabId =
 | "basics" | "concepts" | "quiz" | "flashcards"
 | "diagram" | "roadmap" | "resources" | "missions"
 | "cheatsheet" | "counter";

export type TabGroup = "discover" | "practice" | "reference";

export type TabDef = {
 id: TabId;
 // URL slug under /domain/[id]/. "basics" maps to the bare /domain/[id] page,
 // not /domain/[id]/basics, so the segment is intentionally empty there.
 segment: string;
 label: string;
 group: TabGroup;
 // Unlock predicate. m = mastery (0-1), opened = concept-open count for this
 // domain, total = concept count for this domain.
 unlock: (m: number, opened: number, total: number) => boolean;
};

export const TABS: TabDef[] = [
 { id: "basics",     segment: "",            label: "Basics",       group: "discover",  unlock: () => true },
 { id: "concepts",   segment: "concepts",    label: "Concepts",     group: "discover",  unlock: () => true },
 { id: "diagram",    segment: "diagram",     label: "Diagram",      group: "discover",  unlock: (m, o)    => o >= 1 || m >= 0.10 },
 { id: "quiz",       segment: "quiz",        label: "Quiz",         group: "practice",  unlock: (m, o)    => o >= 1 || m >= 0.05 },
 { id: "flashcards", segment: "flashcards",  label: "Flashcards",   group: "practice",  unlock: (m, o)    => o >= 2 || m >= 0.10 },
 { id: "missions",   segment: "missions",    label: "Missions",     group: "practice",  unlock: (m, o, t) => o >= Math.ceil(t * 0.3) || m >= 0.20 },
 { id: "roadmap",    segment: "roadmap",     label: "Roadmap",      group: "reference", unlock: () => true },
 { id: "resources",  segment: "resources",   label: "Resources",    group: "reference", unlock: () => true },
 { id: "cheatsheet", segment: "cheatsheet",  label: "Cheat sheet",  group: "reference", unlock: (m, o, t) => o >= Math.ceil(t * 0.5) || m >= 0.30 },
 { id: "counter",    segment: "counter",     label: "Counter view", group: "reference", unlock: (m, o, t) => o >= Math.ceil(t * 0.5) || m >= 0.30 }
];

// Reserved tab segments (everything under /domain/[id]/). Used to avoid
// collisions with subdomain ids when generating subdomain routes.
export const RESERVED_SEGMENTS = new Set<string>([
 ...TABS.map((t) => t.segment).filter(Boolean),
 "sub", "share"
]);

// Build the canonical path for a tab. Basics is the bare domain page; all
// other tabs sit one segment below.
export function tabPath(domainId: string, tabId: TabId): string {
 const t = TABS.find((x) => x.id === tabId);
 if (!t || !t.segment) return `/domain/${domainId}`;
 return `/domain/${domainId}/${t.segment}`;
}

export function conceptPath(domainId: string, conceptIdx: number): string {
 return `/domain/${domainId}/concepts/${conceptIdx}`;
}

export function subdomainPath(domainId: string, subdomainId: string): string {
 return `/domain/${domainId}/sub/${subdomainId}`;
}

// Map old `?tab=` query strings to the new canonical path. Returns null when
// the query is empty or invalid (caller stays on the bare domain page).
export function legacyTabRedirect(domainId: string, raw: string | null | undefined): string | null {
 if (!raw) return null;
 const t = TABS.find((x) => x.id === (raw.toLowerCase() as TabId));
 if (!t) return null;
 return tabPath(domainId, t.id);
}
