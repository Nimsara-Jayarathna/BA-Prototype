self.addEventListener('install', e => {
  e.waitUntil(caches.open('heads-up-cache').then(cache =>
    cache.addAll(['/BA-Prototype/', 'BA-Prototype/index.html', '/BA-Prototype/icons/icon-192.png'])
  ));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
