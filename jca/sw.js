/* The Rule Book - service worker.

   Everything the site needs is precached on install, including the files it
   borrows from the Article Machine one level up (the stylesheet, the fonts
   and the Constitution's text), so it works with no network at all. The two
   strategies are the Article Machine's, for the same reasons:

   - the page shell (index.html, app.js, the two stylesheets) is fetched
     network-first, so a new version lands on the next online visit and the
     shell can never be a version apart from itself;

   - everything else is stale-while-revalidate: the cached copy at once, a
     fresh one fetched behind it for next time.

   This worker's scope is ./ (the jca folder), which is more specific than the
   Article Machine's, so inside this folder it is this worker that answers. */

var CACHE = 'rule-book-v1';
var ASSETS = [
  './', './index.html', './app.js', './jca.css',
  './data-judiciary.js', './data-scr.js', './data-osr.js',
  './manifest.webmanifest',
  './icon-192.png', './icon-512.png', './icon-maskable-512.png', './icon-180.png',
  '../styles.css',
  '../data-articles.js', '../data-cases.js',
  '../data-plain-1.js', '../data-plain-2.js', '../data-plain-3.js', '../data-plain-5.js',
  '../fonts/literata-400.woff2', '../fonts/literata-600.woff2', '../fonts/literata-italic-400.woff2',
  '../fonts/inter-400.woff2', '../fonts/inter-600.woff2',
  '../fonts/plexmono-400.woff2', '../fonts/plexmono-500.woff2'
];

/* `cache: 'reload'` sends every precache request past the HTTP cache, which
   GitHub Pages fills with max-age=600: without it, a worker installed within
   ten minutes of a deploy can precache the previous version's bytes. */
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

/* Only this site's own old caches are deleted; the Article Machine's are not
   ours to touch. */
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return (k.indexOf('rule-book-') === 0 && k !== CACHE) ? caches.delete(k) : null;
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

function isShell(url) {
  return /\/jca\/(app\.js|jca\.css|index\.html)$/.test(url.pathname) ||
         /\/styles\.css$/.test(url.pathname) ||
         url.pathname.replace(/\/+$/, '') === new URL('./', self.location).pathname.replace(/\/+$/, '');
}

self.addEventListener('fetch', function (e) {
  var req = e.request, url;
  try { url = new URL(req.url); } catch (err) { return; }
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;

  if (req.mode === 'navigate' || isShell(url)) {
    e.respondWith(
      fetch(req).then(function (res) { return keep(req, res); })
        .catch(function () {
          return caches.match(req).then(function (hit) {
            if (hit) return hit;
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
