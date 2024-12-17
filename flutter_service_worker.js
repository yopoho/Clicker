'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3860c85d107939931fbb32f0fde87676",
"assets/AssetManifest.bin.json": "bbe85b5573211456f23e6116173a1ec2",
"assets/AssetManifest.json": "02fec731e0c8d6ce581542dba5259b12",
"assets/assets/audio_bullshit.mp3": "a8e744f7d4ef70cd8e21a5ab44841b0f",
"assets/assets/audio_difichento.mp3": "0e626f24b9738c46fa6ea00b745329cf",
"assets/assets/audio_rot_kazino.mp3": "d90af331654be24d9f7a50d682e82fec",
"assets/assets/audio_ti_bredish.mp3": "b687fb029e6f10e4441efd0122b21981",
"assets/assets/audio_tvoi_rot.mp3": "8e4fe67c5580fa32c90499078e5d4602",
"assets/assets/images/background_hd4.jpg": "77acb4c3ec375b421f800bfc5e13d48e",
"assets/assets/images/bomb.png": "83db04d59038fec7e8e2113eacf4d7b5",
"assets/assets/images/game_background.jpg": "9078594f054f94170ad27b90750d6ff5",
"assets/assets/images/gold.png": "b09df02260efe681bba4819e6bfbd0ec",
"assets/assets/images/icon_promo_code.png": "2b3b0e944e4c629b82813b904d0e62d7",
"assets/assets/images/icon_roulette_rb.png": "ed3140d0af8f3d3d3e5715ad1e5f1d3c",
"assets/assets/images/leaderboard.png": "da3e3e3bf6d90641dbe59d21f21d751e",
"assets/assets/images/main_button.png": "b7c59d63f2505bbf22c28051586b8503",
"assets/assets/images/rb_pointer2.png": "1a2bf6f4869e49b8fdd75427073451ac",
"assets/assets/images/rb_roulette.png": "3ddfe6caab1f21dfbd9a78577271efb6",
"assets/assets/images/rb_roulette_border.png": "f98ba49bfd296caec9d67050253bf356",
"assets/assets/images/roulette100.png": "4a000a56fb931a2ec838c2c110de0a21",
"assets/assets/images/roulette1M.png": "fa9be5fbccd86d18dbf5645f47c99233",
"assets/assets/images/roulette250.png": "fa74e4f238c27ca1374b5477f7cd57f7",
"assets/assets/images/roulette50.png": "3554fe73e7b13a5974d6fc50a4414460",
"assets/assets/images/roulette500.png": "31b01992e93333b2ae88a5067f5acc14",
"assets/assets/images/roulette_pointer2.png": "1659c8373a7ef8c73524c1318df238f7",
"assets/assets/images/the_island.jpg": "0966b13d166a887100181d3332256bc8",
"assets/assets/images/wheel_icon2.png": "dd7acfcf95b68e82f49917dae241bb07",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7ad08c2b0805de6cd4de5323e82bfa4f",
"assets/NOTICES": "9d67b3a7048ba1f2681ca05d50d83ef9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "7d8c798e78753a5de6f682de06f54a0a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2e6e6fdf468cff5e291058ea84b397c2",
"/": "2e6e6fdf468cff5e291058ea84b397c2",
"main.dart.js": "ed20e1fe75b0d23cef6130eedb402778",
"manifest.json": "5a3d09a5e47b3d8995641a700ed3e891",
"version.json": "674a4f3f8aec59a92bd96deefa8bf801"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
