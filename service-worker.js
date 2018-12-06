importScripts("/precache-manifest.8942af2c3f3c64f73b807138403ea45a.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

if (workbox) {
    console.log(`Workbox is loaded`);
    // workbox.precaching.precacheAndRoute(self.__precacheManifest);
    // self.__precacheManifest = [].concat(self.__precacheManifest || []);
    workbox.precaching.suppressWarnings();
    workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
}
else {
    console.log(`Workbox didn't load`);
}

self.addEventListener("message", (e)=>{
    if (e.data.action=='skipWaiting') self.skipWaiting()
    	console.log('message');
})
