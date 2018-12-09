// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();
// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /img/,
    workbox.strategies.cacheFirst()
);

// third party files
// workbox.routing.registerRoute(
//     /^https?:\/\/cdn.staticfile.org/,
//     workbox.strategies.staleWhileRevalidate()
// );

workbox.routing.registerNavigationRoute("/index.html");

self.addEventListener('message', event => {
	event.waitUntil(
	  self.registration.showNotification( 'Shawn Naquin - Developer', {
	    body: event.data.msg
	  })
	);

});

self.addEventListener('push', function(event) {

  event.waitUntil(
    self.registration.showNotification( 'Shawn Naquin - Developer', {
      body: event.data.text()
    })
  );

});

self.addEventListener('notificationclick', function(event) {

  // console.log('On notification click: ', event.notification.tag);
  // Android doesn’t close the notification when you click on it
  // See: http://crbug.com/463146
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(clients.matchAll({
    type: 'window'
  }).then(function(clientList) {
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      if (client.url === '/' && 'focus' in client) {
        return client.focus();
      }
    }
    if (clients.openWindow) {
      return clients.openWindow('/');
    }
  }));

});