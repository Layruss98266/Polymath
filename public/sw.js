/* Polymath service worker. Cache-first for static assets, network-first for
   navigation requests so users always get fresh content but can still browse
   offline once visited. Versioned cache name so we can roll forward cleanly. */

// Cache namespace is derived from the `?v=` query the registrar passes.
// New build → new version → new cache key → old caches are pruned in activate.
const VERSION = "polymath-" + (new URL(self.location.href).searchParams.get("v") || "v1");
const STATIC_CACHE = `${VERSION}-static`;
const RUNTIME_CACHE = `${VERSION}-runtime`;
const APP_SHELL = [
 "/", "/about", "/search", "/review", "/dashboard", "/skill-map", "/my-list", "/settings",
 "/manifest.webmanifest", "/icon-192.png", "/icon-512.png"
];

self.addEventListener("install", (event) => {
 self.skipWaiting();
 event.waitUntil(caches.open(STATIC_CACHE).then((c) => c.addAll(APP_SHELL)).catch(() => {}));
});

self.addEventListener("activate", (event) => {
 event.waitUntil(
  caches.keys().then((keys) => Promise.all(
   keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k))
  )).then(() => self.clients.claim())
 );
});

self.addEventListener("fetch", (event) => {
 const req = event.request;
 if (req.method !== "GET") return;
 const url = new URL(req.url);
 // Skip non-same-origin and analytics-style endpoints (none expected here)
 if (url.origin !== self.location.origin) return;

 if (req.mode === "navigate") {
  // Network first for HTML, fall back to cached version
  event.respondWith(
   fetch(req).then((res) => {
    const copy = res.clone();
    caches.open(RUNTIME_CACHE).then((c) => c.put(req, copy)).catch(() => {});
    return res;
   }).catch(() => caches.match(req).then((r) => r || caches.match("/")))
  );
  return;
 }

 // Cache first for hashed assets
 event.respondWith(
  caches.match(req).then((cached) => cached || fetch(req).then((res) => {
   const copy = res.clone();
   caches.open(RUNTIME_CACHE).then((c) => c.put(req, copy)).catch(() => {});
   return res;
  }).catch(() => cached as any))
 );
});
