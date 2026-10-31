/* InukSaiyan Game Picker v0.3 — cache-only offline support for this app's files. */
const CACHE = "inuksaiyan-game-picker-main-v03-ai-note-20261031";
const PRECACHE = ["./", "./index.html", "./manifest.webmanifest"];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", event => {
  event.waitUntil(Promise.all([
    caches.keys().then(keys => Promise.all(keys.filter(key =>
      key.startsWith("inuksaiyan-game-picker-main-v03-") && key !== CACHE
    ).map(key => caches.delete(key)))),
    self.clients.claim()
  ]));
});
self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  // Root worker must not hijack independent preview and archive pages.
  const root = new URL(self.registration.scope).pathname;
  if (!url.pathname.startsWith(root)) return;
  const relative = url.pathname.slice(root.length);
  if (!["", "index.html", "manifest.webmanifest"].includes(relative)) return;
  event.respondWith(fetch(request).then(response => {
    if (response.ok) {
      const copy = response.clone();
      event.waitUntil(caches.open(CACHE).then(cache => cache.put(request, copy)));
    }
    return response;
  }).catch(async () => {
    const cached = await caches.match(request);
    return cached || (request.mode === "navigate"
      ? await caches.match("./index.html") || Response.error()
      : Response.error());
  }));
});