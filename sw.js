const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/ui.js',
    '/js/materialize.min.js',
    '/css/styles.css',
    '/css/materialize.min.css',
    '/img/dish.png',
    'https://fonts.googleapis.com/icon?family=Material+Icons'
];

// install service worker
self.addEventListener('install', evt => {
    //console.log('service worker has been installed')
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('catching shell assets')
            cache.addAll(assets)
        })
    )
});

// activate service worker
self.addEventListener('activate', evt => {
    console.log('service workers has been activated')
});

// fetch event
self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt)
});



