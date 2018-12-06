importScripts("/precache-manifest.4969283300292d6ed22104b532599fd8.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");


workbox.routing.registerNavigationRoute('/index.html');
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener("message", (e)=>{

    if (e.data.action=='skipWaiting') {
    	self.skipWaiting()
    }

	console.log('message', e.data.action );

});

