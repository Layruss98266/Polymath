"use client";
import { useEffect } from "react";

// Bumped per build. The SW URL carries it as `?v=` so the browser treats a
// new build as a script update and reinstalls the SW. The SW itself parses
// the param and namespaces its caches by version.
const SW_VERSION = process.env.NEXT_PUBLIC_BUILD_ID || "dev";

// Register the service worker once on mount. Only in production so dev HMR
// is not interfered with. The SW is at /sw.js and we register at root scope.
export function ServiceWorkerRegister() {
 useEffect(() => {
  if (process.env.NODE_ENV !== "production") return;
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;
  const onLoad = () => {
   navigator.serviceWorker.register(`/sw.js?v=${encodeURIComponent(SW_VERSION)}`).catch((e) => {
    console.warn("[sw] register failed", e);
   });
  };
  if (document.readyState === "complete") onLoad();
  else window.addEventListener("load", onLoad, { once: true });
 }, []);
 return null;
}
