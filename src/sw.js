self.addEventListener('install', function(event) {

  event.waitUntil(
    caches.open('ChatAppCache').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/js/app.js',
        '/js/angular.min.js',
        '/js/angular-route.min.js',
        '/js/angular-resource.min.js',
        '/js/indexdb.js',
        '/css/bootstrap.min.css',
        '/controllers/chat.js',
        '/controllers/about.js',
        '/controllers/contact.js',
        '/tmpl/chat.html',
        '/tmpl/about.html',
        '/tmpl/contact.html'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {

  var requestUrl = new URL(event.request.url);

  if (requestUrl.origin === location.origin) {
    if (requestUrl.pathname === '/') {
      event.respondWith(caches.match('/index.html'));
      return;
    }
  }

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
