self.addEventListener('install', e => {
  e.waitUntil(caches.open('heads-up-cache').then(cache =>
    cache.addAll(['/Headsup/', '/Headsup/index.html', '/Headsup/icons/icon-192.png'])
  ));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});