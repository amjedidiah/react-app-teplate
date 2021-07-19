/* eslint-disable no-restricted-globals */
const filesToCache = [
  './',
  'css/vendor/animate.min.css',
  'css/vendor/bootstrap.min.css',
  'css/vendor/bootstrap.min.css.map',
  'css/app.css',
  'css/app.min.css',
  'css/main.css',
  'css/main.min.css',
  'images/logo192.png',
  'images/logo512.png',
  'js/vendor/bootstrap.bundle.min.js',
  'js/vendor/bootstrap.bundle.min.js.map',
  'js/vendor/fontawesome.min.js',
  'js/vendor/free-v4-shims.min.js',
  'js/vendor/free.min.js',
  'js/vendor/plugins.min.js',
  'js/main.js',
  'js/main.min.js',
  'js/store.js',
  'js/store.min.js',
  'js/toast.js',
  'js/toast.min.js',
  'js/utils.js',
  'js/utils.min.js',
];
const vNum = Math.floor(Math.random() * 1000000000000) + 1;
const staticCacheName = `canada-cache-v${vNum}`;

self.addEventListener('install', (event) => {
  event.waitUntil(
      caches.open(staticCacheName).then((cache) => {
        return cache.addAll(filesToCache);
      }),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }),
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [staticCacheName];

  event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
            cacheNames.map(
                (cN) => cacheWhitelist.indexOf(cN) === -1 && caches.delete(cN),
            ),
        );
      }),
  );
});
