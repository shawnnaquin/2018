importScripts("./precache-manifest.507f9c3869c719a3fc49bb63d4a5d472.js", "./workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/workbox-v3.6.3"});
if (workbox) {
    console.log(`Workbox is loaded`);
    // workbox.precaching.precacheAndRoute(self.__precacheManifest);
    // self.__precacheManifest = [].concat(self.__precacheManifest || []);
    workbox.routing.registerNavigationRoute('/index.html');
    workbox.precaching.suppressWarnings();
    workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
}

else {

    console.log(`Workbox didn't load`);

}

self.addEventListener("message", (e)=>{

    if (e.data.action=='skipWaiting') {
    	self.skipWaiting()
    }

	console.log('message', e.data.action );

});

