let version = "v30";
const addResourcesToCache = async (resources) => {
  const cache = await caches.open(version);
  await cache.addAll(resources);
};

const putInCache = async (request, response) => {
  const cache = await caches.open(version);
  await cache.put(request, response);
};
const deleteOldCaches = async () => {
  console.log("Deleting old caches...");
  const cacheKeepList = [version];
  const keyList = await caches.keys();
  const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));

  await Promise.all(
    cachesToDelete.map(async (key) => {
      await caches.delete(key);
      console.log(`Cache ${key} deleted.`);
    })
  );
  console.log("Old caches deleted.");
};

const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
  // First try to get the resource from the cache
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // Next try to use (and cache) the preloaded response, if it's there
  const preloadResponse = await preloadResponsePromise;
  if (preloadResponse) {
    console.info("using preload response", preloadResponse);
    putInCache(request, preloadResponse.clone());
    return preloadResponse;
  }

  // Next try to get the resource from the network
  try {
    const responseFromNetwork = await fetch(request);
    // response may be used only once
    // we need to save clone to put one copy in cache
    // and serve second one
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    // when even the fallback response is not available,
    // there is nothing we can do, but we must always
    // return a Response object
    return new Response("Network error happened", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

// Enable navigation preload
const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    try {
      await self.registration.navigationPreload.enable();
      console.log("Navigation preload enabled successfully.");
    } catch (error) {
      console.error("Error enabling navigation preload:", error);
    }
  }
};

self.addEventListener("activate", (event) => {
  event.waitUntil(Promise.all([enableNavigationPreload(), deleteOldCaches()]));
});

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/PolGla-Latin-Glagolitic-Translator/",
      "/PolGla-Latin-Glagolitic-Translator/index.html",
      "/PolGla-Latin-Glagolitic-Translator/css/style.css",
      "/PolGla-Latin-Glagolitic-Translator/css/main.min.css",
      "/PolGla-Latin-Glagolitic-Translator/css/mobile.css",
      "/PolGla-Latin-Glagolitic-Translator/js/script.js",
      "/PolGla-Latin-Glagolitic-Translator/js/jquery-3.7.1.min.js",
      "/PolGla-Latin-Glagolitic-Translator/languages/en.json",
      "/PolGla-Latin-Glagolitic-Translator/languages/pl.json",
      "/PolGla-Latin-Glagolitic-Translator/favicon.ico",
      "/PolGla-Latin-Glagolitic-Translator/font/Pacifico-Regular.ttf",
      "/PolGla-Latin-Glagolitic-Translator/manifest.webmanifest",
      "/PolGla-Latin-Glagolitic-Translator/img/icon-48x48.png",
      "/PolGla-Latin-Glagolitic-Translator/img/icon-144x144.png",
      "/PolGla-Latin-Glagolitic-Translator/img/icon-192x192.png",
      "/PolGla-Latin-Glagolitic-Translator/img/icon-256x256.png",
      "/PolGla-Latin-Glagolitic-Translator/img/icon-320x320.png",
      "/PolGla-Latin-Glagolitic-Translator/img/icon-384x384.png",
      "/PolGla-Latin-Glagolitic-Translator/img/icon-512x512.png",
      "/PolGla-Latin-Glagolitic-Translator/img/key-100.webp",
      "/PolGla-Latin-Glagolitic-Translator/img/key-200.webp",
    ])
  );
  skipWaiting();
});

self.addEventListener("fetch", (event) => {
  // Cache-First Strategy
  const request = event.request;
  const urlWithoutParams = new URL(request.url).pathname;

  event.respondWith(
    caches.match(urlWithoutParams).then((cached) => {
      if (cached) {
        return cached;
      }

      // Otherwise, fetch from the network
      return fetch(request).then((response) => {
        // Cache the response
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(version).then((cache) => {
            cache.put(urlWithoutParams, responseToCache);
          });
        }

        return response;
      });
    })
  );
});
