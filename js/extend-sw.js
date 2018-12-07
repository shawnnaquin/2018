workbox.routing.registerNavigationRoute("/index.html");

self.addEventListener('message', event => {
  sendDesktopNotification(event.data.msg);
});