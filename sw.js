const CACHE = 'vocab-v1';
const ASSETS = [
  '/vocab-tracker/',
  '/vocab-tracker/index.html',
  '/vocab-tracker/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Don't cache Supabase or Dictionary API calls
  if (e.request.url.includes('supabase.co') || e.request.url.includes('dictionaryapi.dev')) {
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).catch(() => caches.match('/vocab-tracker/index.html')))
  );
});
