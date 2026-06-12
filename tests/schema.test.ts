import { describe, it, expect } from "vitest";
import { validateDomain } from "@/lib/schema";

import ai_ml from "@/data/domains/ai_ml";
import communication from "@/data/domains/communication";
import entrepreneurship from "@/data/domains/entrepreneurship";
import famous_laws from "@/data/domains/famous_laws";
import health from "@/data/domains/health";
import investing from "@/data/domains/investing";
import law from "@/data/domains/law";
import learning from "@/data/domains/learning";
import marketing from "@/data/domains/marketing";
import mental_models from "@/data/domains/mental_models";
import negotiation from "@/data/domains/negotiation";
import nutrition from "@/data/domains/nutrition";
import personal_finance from "@/data/domains/personal_finance";
import psychology from "@/data/domains/psychology";
import tech from "@/data/domains/tech";

import type { Domain } from "@/lib/types";

const ALL_DOMAINS: Domain[] = [
 ai_ml, communication, entrepreneurship, famous_laws, health, investing,
 law, learning, marketing, mental_models, negotiation, nutrition,
 personal_finance, psychology, tech
];

const STATUS_ENUM = new Set(["settled", "debated", "framework"]);

describe("domain schema validation across all 15 domains", () => {
 it("loads exactly 15 domains", () => {
  expect(ALL_DOMAINS).toHaveLength(15);
 });

 for (const d of ALL_DOMAINS) {
  describe(`domain: ${d.id}`, () => {
   it("passes Zod schema validation", () => {
    expect(() => validateDomain(d, d.id)).not.toThrow();
   });

   it("every conceptQuiz option is exactly one of correct or misconception", () => {
    for (const c of d.concepts) {
     if (!c.conceptQuiz) continue;
     for (const q of c.conceptQuiz) {
      for (const opt of q.options) {
       const hasCorrectTrue = (opt as { correct?: boolean }).correct === true;
       const hasMis = typeof (opt as { misconception?: string }).misconception === "string"
        && (opt as { misconception?: string }).misconception!.length > 0;
       expect(
        hasCorrectTrue !== hasMis,
        `domain ${d.id} concept "${c.t}" option "${opt.text}" must have exactly one of correct:true or misconception:string`
       ).toBe(true);
      }
     }
    }
   });

   it("every concept has non-empty t and a valid status", () => {
    for (const c of d.concepts) {
     expect(typeof c.t === "string" && c.t.trim().length > 0, `empty t in ${d.id}`).toBe(true);
     expect(STATUS_ENUM.has(c.status), `bad status "${c.status}" in ${d.id} / ${c.t}`).toBe(true);
    }
   });

   it("every concept.subdomain references an existing subdomain id", () => {
    const subIds = new Set((d.subdomains ?? []).map(s => s.id));
    for (const c of d.concepts) {
     if (c.subdomain === undefined) continue;
     expect(
      subIds.has(c.subdomain),
      `domain ${d.id} concept "${c.t}" references unknown subdomain "${c.subdomain}"`
     ).toBe(true);
    }
   });

   it("rejects half-enriched conceptQuiz without conceptTasks", () => {
    const sample = d.concepts.find(c => c.conceptQuiz && c.conceptTasks);
    if (!sample) return; // domain has no enriched concept; skip
    const broken = { ...d, concepts: [{ ...sample, conceptTasks: undefined }, ...d.concepts.filter(x => x !== sample)] };
    expect(() => validateDomain(broken, `${d.id}-broken`)).toThrow();
   });

   it("rejects half-enriched generic without expert", () => {
    const sample = d.concepts.find(c => c.generic && c.expert);
    if (!sample) return;
    const broken = { ...d, concepts: [{ ...sample, expert: undefined }, ...d.concepts.filter(x => x !== sample)] };
    expect(() => validateDomain(broken, `${d.id}-broken`)).toThrow();
   });
  });
 }
});
