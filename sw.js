// Service Worker for Once Upon A Time In Arabia PWA
// Handles caching for offline functionality

const CACHE_NAME = 'arabia-v2';

const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './sections_data.js',
  './images/icon-192.png',
  './images/icon-512.png',
  './images/filler_city.jpg',
  './images/filler_start.jpg',
  './images/filler_begins.jpg',
  './images/filler_omar.jpg',
  './images/filler_prologue.jpg',
  './images/filler_triumph.jpg',
  './images/map1.jpg',
  './images/mapTOF.jpg',
  './images/025_illo.jpg',
  './images/050_illo.jpg',
  './images/075_illo.jpg',
  './images/100_illo.jpg',
  './images/125_illo.jpg',
  './images/150_illo.jpg',
  './images/175_illo.jpg',
  './images/200_illo.jpg',
  './images/225_illo.jpg',
  './images/250_illo.jpg',
  './images/300_illo.jpg',
  './images/325_illo.jpg',
  './images/350_illo.jpg',
  './images/375_illo.jpg',
  './images/400_illo.jpg',
  './images/425_illo.jpg',
  './images/450_illo.jpg',
  './sounds/click.wav',
  './sounds/money.wav',
  './sounds/damage.mp3',
  './sounds/map.wav'
];

// Install event - cache core files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(response => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(() => {
          // Network failed and no cache - return offline fallback for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});

// Activate event - clean up old caches and claim clients
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});
