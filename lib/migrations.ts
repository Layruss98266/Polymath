// Versioned save migrations, a new build never wipes old progress (§9 v5).
import type { UserState } from "./types";

export const CURRENT_SCHEMA_VERSION = 1;

type Migrator = (s: any) => any;

const migrators: Record<number, Migrator> = {
 // 0 -> 1: initial, nothing to do.
 0: (s) => ({ ...s, schemaVersion: 1 })
};

export function migrate(stored: any): UserState {
 let s = stored ?? defaultState();
 let v = s.schemaVersion ?? 0;
 while (v < CURRENT_SCHEMA_VERSION) {
  const m = migrators[v];
  if (!m) break;
  s = m(s);
  v = s.schemaVersion;
 }
 // Backfill any newly-introduced fields.
 return { ...defaultState(), ...s, schemaVersion: CURRENT_SCHEMA_VERSION };
}

export function defaultState(): UserState {
 return {
  schemaVersion: CURRENT_SCHEMA_VERSION,
  xp: 0,
  longestStreak: 0,
  currentStreak: 0,
  lastActiveDay: "",
  theme: "dark",
  muteSound: false,
  bookmarks: [],
  notes: {},
  domainProgress: {},
  conceptProgress: [],
  cards: [],
  achievements: [],
  capabilityLog: [],
  startedDomains: []
 };
}
