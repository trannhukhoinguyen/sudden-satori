self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('tst-v1').then(cache =>
            cache.addAll([
                '/',
                '/audio/',
                '/styles.css'
            ])
        )
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(r => r || fetch(e.request))
    );
});
