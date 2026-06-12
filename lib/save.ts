// Export / import base64 save code, survives across devices/browsers.
import type { UserState } from "./types";
import { migrate } from "./migrations";

// UTF-8 base64 round-trip helpers. Replaces the older `unescape(encode...)`
// pair which uses the deprecated `escape` / `unescape` globals.
export function utf8ToBase64(s: string): string {
 if (typeof window === "undefined") return Buffer.from(s, "utf-8").toString("base64");
 const bytes = new TextEncoder().encode(s);
 let binary = "";
 for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
 return btoa(binary);
}
export function base64ToUtf8(s: string): string {
 if (typeof window === "undefined") return Buffer.from(s, "base64").toString("utf-8");
 const binary = atob(s.trim());
 const bytes = new Uint8Array(binary.length);
 for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
 return new TextDecoder().decode(bytes);
}

export function exportCode(s: UserState): string {
 return utf8ToBase64(JSON.stringify(s));
}

export function importCode(code: string): UserState {
 let json: string;
 try { json = base64ToUtf8(code); } catch (e) {
  throw new Error("Invalid save code");
 }
 let parsed: unknown;
 try { parsed = JSON.parse(json); } catch { throw new Error("Save code does not contain valid data"); }
 if (!parsed || typeof parsed !== "object") throw new Error("Save code is not a state object");
 return migrate(parsed);
}
