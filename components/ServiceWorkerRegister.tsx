"use client";
import { useEffect } from "react";

// Register the service worker once on mount. Only in production so dev HMR
// is not interfered with. The SW is at /sw.js and we register at root scope.

export function ServiceWorkerRegister() {
 useEffect(() => {
  if (process.env.NODE_ENV !== "production") return;
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;
  const onLoad = () => {
   navigator.serviceWorker.register("/sw.js").catch((e) => {
    console.warn("[sw] register failed", e);
   });
  };
  if (document.readyState === "complete") onLoad();
  else window.addEventListener("load", onLoad, { once: true });
 }, []);
 return null;
}
