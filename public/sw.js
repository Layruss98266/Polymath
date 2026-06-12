/* Polymath service worker. Cache-first for static assets, network-first for
   navigation requests so users always get fresh content but can still browse
   offline once visited. Versioned cache name so we can roll forward cleanly. */

// Cache namespace is derived from the `?v=` query the registrar passes.
// New build → new version → new cache key → old caches are pruned in activate.
const VERSION = "polymath-" + (new URL(self.location.href).searchParams.get("v") || "v1");
const STATIC_CACHE = `${VERSION}-static`;
const RUNTIME_CACHE = `${VERSION}-runtime`;
// Public surfaces only. Icons removed because the PNG files are not in
// `public/` and `addAll` rejects atomically on any 404 — that was killing
// the whole install. Add icon paths back once the images exist on disk.
const APP_SHELL = [
 "/", "/about",
 "/manifest.webmanifest"
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

 // Cache first for hashed assets. If both cache and network fail we return
 // a Response.error() — `as any` was invalid JS and broke the whole worker.
 event.respondWith(
  caches.match(req).then((cached) => {
   if (cached) return cached;
   return fetch(req).then((res) => {
    const copy = res.clone();
    caches.open(RUNTIME_CACHE).then((c) => c.put(req, copy)).catch(() => {});
    return res;
   }).catch(() => Response.error());
  })
 );
});
