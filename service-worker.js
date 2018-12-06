importScripts("/precache-manifest.df0b8c64c5dd9d828a39e2fb9bdc4ad2.js", "/workbox-v3.6.3/workbox-sw.js");
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

