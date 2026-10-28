/* The JCA section was its own app at this address for its first day, with a
   service worker of its own. It now lives inside the Article Machine at
   #/jca. A browser that installed the old worker keeps checking this file
   for updates, so this is the update: it deletes the cache the old worker
   made, unregisters itself, and reloads any page it was controlling, which
   then forwards to the new address. Nothing in this folder is served stale
   again. */

self.addEventListener('install', function () { self.skipWaiting(); });

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k.indexOf('rule-book-') === 0; })
        .map(function (k) { return caches.delete(k); }));
    }).then(function () {
      return self.registration.unregister();
    }).then(function () {
      return self.clients.matchAll({ type: 'window' });
    }).then(function (clients) {
      clients.forEach(function (c) { if (c.navigate) c.navigate(c.url); });
    })
  );
});
