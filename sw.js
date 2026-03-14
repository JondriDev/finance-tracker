const CACHE = 'finance-v2';
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./index.html', './manifest.json']))));
