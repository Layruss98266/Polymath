import { describe, it, expect } from "vitest";
import { exportCode, importCode } from "@/lib/save";
import { defaultState } from "@/lib/migrations";

describe("save codec", () => {
 it("round-trips the default state", () => {
  const s = defaultState();
  const code = exportCode(s);
  expect(code.length).toBeGreaterThan(0);
  const back = importCode(code);
  expect(back.xp).toBe(s.xp);
  expect(back.currentStreak).toBe(s.currentStreak);
  expect(back.theme).toBe(s.theme);
 });

 it("round-trips state with XP and notes", () => {
  const s = { ...defaultState(), xp: 1234, notes: { "psychology:0:reflect": "test note" } };
  const back = importCode(exportCode(s));
  expect(back.xp).toBe(1234);
  expect(back.notes["psychology:0:reflect"]).toBe("test note");
 });

 it("rejects garbage input", () => {
  expect(() => importCode("not a valid base64 ::: payload")).toThrow();
 });

 it("rejects non-object payloads", () => {
  // Valid base64 of valid JSON but not an object
  const code = exportCode([] as any);
  // This is technically invalid for migrate; just ensure it throws on bad shapes
  expect(() => importCode(Buffer.from("123", "utf-8").toString("base64"))).toThrow();
 });
});
