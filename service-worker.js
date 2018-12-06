importScripts("/precache-manifest.a1d50acea6c58a9075768d1ca501f587.js", "/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/workbox-v3.6.3"});
workbox.routing.registerNavigationRoute('/index.html');
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
self.__precacheManifest = [].concat(self.__precacheManifest || []);

