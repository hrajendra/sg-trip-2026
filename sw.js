const CACHE = 'sg-trip-v11';
const ASSETS = [
  './',
  './index.html',
  './full.html',
  './gp-en.html',
  './gp-te.html',
  './build.html',
  './dishes.js',
  './prompt.js',
  './weather.js',
  './guide.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
];

// Pre-cache all assets on install — guaranteed offline from first visit
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Remove old caches when new version activates, then tell all pages to reload
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => {
      // Tell all open pages: new version is live, please reload
      return self.clients.matchAll({ type: 'window' }).then(clients => {
        clients.forEach(client => client.postMessage({ type: 'SW_UPDATED' }));
      });
    })
  );
  self.clients.claim();
});

// Cache-first for app assets, network-first for everything else (fonts, maps)
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const isAppAsset = url.origin === self.location.origin;

  if (isAppAsset) {
    // Cache-first: serve instantly from cache, update in background
    e.respondWith(
      caches.match(e.request).then(cached => {
        const networkFetch = fetch(e.request).then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        });
        return cached || networkFetch;
      })
    );
  } else {
    // Network-first for external resources (Google Fonts, map links)
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    );
  }
});
