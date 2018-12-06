try {
  importScripts("/precache-manifest.63ff4a34cadf7d6fc67b2f40efae4fcd.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");
  if (workbox) {
      console.log(`Workbox is loaded`);
      // workbox.precaching.precacheAndRoute(self.__precacheManifest);
      // self.__precacheManifest = [].concat(self.__precacheManifest || []);
      workbox.precaching.suppressWarnings();
      workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
  }
}
catch(error) {
    console.log(`Workbox didn't load`);
  // expected output: SyntaxError: unterminated string literal
  // Note - error messages will vary depending on browser
}

self.addEventListener("message", (e)=>{

    if (e.data.action=='skipWaiting') {
    	self.skipWaiting()
    }

	console.log('message', e.data.action );

});

