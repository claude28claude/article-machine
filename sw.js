/* The Article Machine — service worker.

   The whole Constitution is precached on install, so the site works with no
   network at all. Two different strategies, because they answer two different
   questions:

   - Navigations (the page shell) use network-first. A plain cache-first shell
     goes stale the moment anything is republished, and the reader has no way
     to force it: they get an old index.html that loads scripts which no longer
     exist. Network-first means an update lands on the next online visit, and
     the cached shell is still there when there is no network.

   - Everything else uses stale-while-revalidate: serve the cached copy at
     once, fetch a fresh one in the background, and use that next time. Fast on
     every visit, and never more than one visit behind.  */

var CACHE = 'article-machine-v16';
var ASSETS = [
  './', './index.html', './styles.css', './app.js',
  './data-articles.js', './data-amendments.js', './data-schedules.js',
  './data-cases.js', './data-highyield.js',
  './data-history.js', './data-history-hy.js',
  './data-economy.js', './data-gk.js',
  './data-assembly.js', './data-biology.js',
  './data-treaties.js', './data-artmap.js',
  './data-plain-1.js', './data-plain-2.js', './data-plain-3.js',
  './data-plain-4.js', './data-plain-5.js',
  './fonts/literata-400.woff2', './fonts/literata-600.woff2',
  './fonts/literata-italic-400.woff2',
  './fonts/inter-400.woff2', './fonts/inter-600.woff2',
  './fonts/plexmono-400.woff2', './fonts/plexmono-500.woff2',
  './manifest.webmanifest',
  './icon-192.png', './icon-512.png', './icon-maskable-512.png', './icon-180.png'
];

/* cache.addAll() goes through the browser's own HTTP cache, and GitHub Pages
   serves these files with max-age=600. So a service worker installing within
   ten minutes of a deploy can precache the PREVIOUS version's bytes and then
   go on serving them as if they were current — which is exactly what happened
   when a fix shipped and the page kept showing the old behaviour, with the
   right file sitting on the server the whole time.

   `cache: 'reload'` forces every precache request past the HTTP cache to the
   network. A failure still aborts the install, so the precache stays
   all-or-nothing and the previous worker keeps serving. */
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return Promise.all(ASSETS.map(function (url) {
        return fetch(new Request(url, { cache: 'reload' })).then(function (res) {
          if (!res || !res.ok) throw new Error('precache failed: ' + url);
          return c.put(url, res);
        });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k === CACHE ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

function keep(req, res) {
  if (res && res.status === 200 && res.type === 'basic') {
    var copy = res.clone();
    caches.open(CACHE).then(function (c) { c.put(req, copy); });
  }
  return res;
}

/* index.html, app.js and styles.css are one thing, not three: a new page that
   loads an old script gives you markup nothing is wired to. They are fetched
   network-first together so they can never be a version apart. The data files
   are not in this set — they are large, they change rarely, and being one
   visit behind on them costs nothing. */
function isShell(url) {
  return /\/(app\.js|styles\.css|index\.html)$/.test(url.pathname) ||
         url.pathname.replace(/\/+$/, '') === new URL('./', self.location).pathname.replace(/\/+$/, '');
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  var url;
  try { url = new URL(req.url); } catch (err) { return; }
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;

  if (req.mode === 'navigate' || isShell(url)) {
    e.respondWith(
      fetch(req).then(function (res) { return keep(req, res); })
                .catch(function () {
                  return caches.match(req).then(function (hit) {
                    if (hit) return hit;
                    /* Only a navigation may fall back to the page itself.
                       Answering a script request with HTML would be worse
                       than failing it. */
                    return req.mode === 'navigate' ? caches.match('./index.html') : undefined;
                  });
                })
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(function (hit) {
      var net = fetch(req).then(function (res) { return keep(req, res); })
                          .catch(function () { return hit; });
      return hit || net;
    })
  );
});
