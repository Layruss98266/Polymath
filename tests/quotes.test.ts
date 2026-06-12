import { describe, it, expect } from "vitest";
import { QUOTES } from "@/data/quotes";

describe("QUOTES", () => {
 it("has at least 100 entries", () => {
  expect(QUOTES.length).toBeGreaterThanOrEqual(100);
 });

 it("has no duplicate text entries", () => {
  const seen = new Map<string, number>();
  const dupes: string[] = [];
  for (const q of QUOTES) {
   const key = q.text.trim().toLowerCase();
   const n = (seen.get(key) ?? 0) + 1;
   seen.set(key, n);
   if (n === 2) dupes.push(q.text);
  }
  expect(dupes, `duplicate quote text found: ${dupes.join(" | ")}`).toEqual([]);
 });

 it("every quote has non-empty text and by", () => {
  for (const q of QUOTES) {
   expect(typeof q.text === "string" && q.text.trim().length > 0).toBe(true);
   expect(typeof q.by === "string" && q.by.trim().length > 0).toBe(true);
  }
 });
});
