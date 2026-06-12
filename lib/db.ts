// Persistence. Dexie (IndexedDB) primary, localStorage fallback.
// Versioned via Dexie schema + our own schemaVersion migration (./migrations.ts).
"use client";
import Dexie, { type Table } from "dexie";
import type { UserState } from "./types";
import { defaultState, migrate } from "./migrations";

const LS_KEY = "polymath:state:v1";
const SINGLETON_ID = "user";

class PolymathDB extends Dexie {
 state!: Table<{ id: string; value: UserState }, string>;
 constructor() {
  super("polymath");
  this.version(1).stores({ state: "id" });
 }
}

let _db: PolymathDB | null = null;
let _useIDB = true;

function db(): PolymathDB {
 if (!_db) _db = new PolymathDB();
 return _db;
}

// Hardened load. Any one of these failure modes returns defaults so the app
// always boots: IndexedDB closed, browser blocks storage, value malformed,
// migration throws, JSON parse throws. We never crash on hydrate.
function safeMigrate(value: unknown): UserState | null {
 try { return migrate(value); } catch (e) {
  console.warn("[db] migration threw, falling back to defaults", e);
  return null;
 }
}

export async function loadState(): Promise<UserState> {
 if (typeof window === "undefined") return defaultState();
 try {
  const row = await db().state.get(SINGLETON_ID);
  if (row?.value) {
   const mig = safeMigrate(row.value);
   if (mig) return mig;
  }
 } catch (e) {
  _useIDB = false;
  console.warn("[db] IndexedDB unavailable, falling back to localStorage", e);
 }
 try {
  const raw = localStorage.getItem(LS_KEY);
  if (raw) {
   const parsed = JSON.parse(raw);
   const mig = safeMigrate(parsed);
   if (mig) return mig;
  }
 } catch (e) {
  console.warn("[db] localStorage parse failed", e);
 }
 return defaultState();
}

export async function saveState(s: UserState): Promise<void> {
 if (typeof window === "undefined") return;
 if (_useIDB) {
  try {
   await db().state.put({ id: SINGLETON_ID, value: s });
   // Mirror to localStorage as a cheap cross-tab/cross-build escape hatch.
   try { localStorage.setItem(LS_KEY, JSON.stringify(s)); } catch {}
   return;
  } catch (e) {
   _useIDB = false;
   console.warn("[db] IDB write failed, falling back", e);
  }
 }
 try { localStorage.setItem(LS_KEY, JSON.stringify(s)); } catch {}
}

export async function clearState(): Promise<void> {
 if (typeof window === "undefined") return;
 try { await db().state.delete(SINGLETON_ID); } catch {}
 try { localStorage.removeItem(LS_KEY); } catch {}
}
