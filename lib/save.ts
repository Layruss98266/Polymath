// Export / import base64 save code, survives across devices/browsers.
import type { UserState } from "./types";
import { migrate } from "./migrations";

export function exportCode(s: UserState): string {
 const json = JSON.stringify(s);
 return typeof window === "undefined"
  ? Buffer.from(json, "utf-8").toString("base64")
  : btoa(unescape(encodeURIComponent(json)));
}

export function importCode(code: string): UserState {
 let json: string;
 try {
  json = typeof window === "undefined"
   ? Buffer.from(code, "base64").toString("utf-8")
   : decodeURIComponent(escape(atob(code.trim())));
 } catch (e) {
  throw new Error("Invalid save code");
 }
 let parsed: unknown;
 try { parsed = JSON.parse(json); } catch { throw new Error("Save code does not contain valid data"); }
 if (!parsed || typeof parsed !== "object") throw new Error("Save code is not a state object");
 return migrate(parsed);
}
