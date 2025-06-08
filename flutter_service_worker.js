'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "abdb5a71949e6dd24a0b286137dc3e43",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "34bbf06f32c7506eacfd968f20000e14",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
"assets/AssetManifest.bin": "a59bff94db5b1734f9079c1416260ab2",
"assets/AssetManifest.bin.json": "3c206abc14acc4d2a0db9fab74325901",
"assets/AssetManifest.json": "195ec120d7461a4da28586f55852a8c7",
"assets/assets/audio/adpcm_slots_win_jackpot.m4a": "52993d615fd706176c7adc710a883540",
"assets/assets/audio/adpcm_slots_win_med.m4a": "439615497a282c072bd36d3d4ba06fd4",
"assets/assets/audio/adpcm_slots_win_small.m4a": "1f154ae27f8bf658a331b23755cdf85a",
"assets/assets/audio/audio_bullshit.mp3": "a8e744f7d4ef70cd8e21a5ab44841b0f",
"assets/assets/audio/audio_difichento.mp3": "0e626f24b9738c46fa6ea00b745329cf",
"assets/assets/audio/audio_jingle_bells.mp3": "7e7c8728e923a8fad954c3e91cdb2467",
"assets/assets/audio/audio_rot_kazino.mp3": "d90af331654be24d9f7a50d682e82fec",
"assets/assets/audio/audio_ti_bredish.mp3": "b687fb029e6f10e4441efd0122b21981",
"assets/assets/audio/audio_ti_kto_takoi.mp3": "4237c9bb245b759ca4aa52c7c9b84ae4",
"assets/assets/audio/audio_tvoi_rot.mp3": "8e4fe67c5580fa32c90499078e5d4602",
"assets/assets/audio/audio_v_drugom_poradke.mp3": "54a9b50a138f14a8ea85ba767a3f93c6",
"assets/assets/audio/slots_spinning.wav": "dd42627f54af692a787d76da2f1979ad",
"assets/assets/fonts/medals_and_others.ttf": "4169e9dfcd05fa4b31eb2cfed25bc77d",
"assets/assets/images/ain_dubai.jpg": "5152236aaf452c8fe60b32a0efb94641",
"assets/assets/images/background3.jpg": "659184b83b63e55d1aa3ff938bc12570",
"assets/assets/images/background_evening5.jpg": "37b1bda7dee1cabaa74277ece71e5c22",
"assets/assets/images/background_wheel2.jpg": "84cdb06b63f96eee2bcb9b698a5fb79d",
"assets/assets/images/bank2.webp": "996848bdbd8ed8ff627ce8788e8a0053",
"assets/assets/images/bellagio.jpg": "a6a1d33e5d1f19cac13084bd8a857b4f",
"assets/assets/images/bomb.png": "83db04d59038fec7e8e2113eacf4d7b5",
"assets/assets/images/bomb_vegas2.webp": "7a5baeff4b97b37ba852b3cc0fc8c391",
"assets/assets/images/caesar_palace.jpg": "77c211be89cf8840ca3f876da7d6bc02",
"assets/assets/images/car1_2.jpg": "01448b3f6e6a0a2778a369763da6861f",
"assets/assets/images/car2_.jpg": "b7430da6f242e44dd6de8b4c799d6083",
"assets/assets/images/car3_2.jpg": "79771ce60400537cd34251e9c8d372ea",
"assets/assets/images/car4_.jpg": "d59223f9cc0f904e84e8cc1da5b9e32c",
"assets/assets/images/car5_.jpg": "abe411372503d9026c721d07ee51e8c1",
"assets/assets/images/chip_1.webp": "9e1cfa2153df45fc28245f5e05249183",
"assets/assets/images/chip_100.webp": "8ade801e2293f658446ce373e0f18032",
"assets/assets/images/chip_25.webp": "37c6e16782efc805aa56fca83fb1ff37",
"assets/assets/images/chip_5.webp": "8770885dd6f5c49f9942150991154767",
"assets/assets/images/dubai_bank.jpg": "0ce012095878bd7309cf4de8f7e39a85",
"assets/assets/images/dubai_mall.jpg": "76cfe8b0e65fa665ff57855590a2445d",
"assets/assets/images/dubai_tree.jpg": "3b1066683a0a395445104574516d63ca",
"assets/assets/images/dubai_yacht.jpg": "a3f73466f6cdfdb9b2be18f1d5110071",
"assets/assets/images/frog.webp": "f9c7478c6dd9caee1330d47644a91a02",
"assets/assets/images/game_background_.jpg": "d8b5205f12ed5792f5842007d30b8299",
"assets/assets/images/home1.jpg": "9d0e30caf70931d292301e280a2c90c6",
"assets/assets/images/home2.jpg": "9fa74f3cc2ee55bbe06b1f4bb0c1c745",
"assets/assets/images/home3.jpg": "2ede4d0a7a8c617d06bb93bb23457d4e",
"assets/assets/images/icon_invest_.png": "a7ff3ef33611be66726da7d4834054c2",
"assets/assets/images/icon_leaderboard_2.png": "7352cd6aa5dbbada544549b9c36394bf",
"assets/assets/images/icon_promo_code_2.png": "e831ab951494dd41a62a8c2a629495ac",
"assets/assets/images/icon_roulette_rb.png": "ed3140d0af8f3d3d3e5715ad1e5f1d3c",
"assets/assets/images/luxor_las_vegas.jpg": "7c14a5da6f4cf453a673cec9e41e1d47",
"assets/assets/images/main_background_3.webp": "dbefd2198e1140890b204a754d39d77e",
"assets/assets/images/main_button_.png": "cd266a253eb88b019a4b1e86ec418f5e",
"assets/assets/images/mandalay.jpg": "3e7a3912b1bc65bcc3e75d562874b55f",
"assets/assets/images/oil_derricks_small.jpeg": "4990cbb8b0d805475e3ba5b9761471ae",
"assets/assets/images/oil_derrick_sea.jpeg": "d2d18808170c43b15caa2cbe23f0c095",
"assets/assets/images/palm_jumeirah.jpg": "5962798cc37a957e8eda0cfb26418913",
"assets/assets/images/paris_las_vegas.jpg": "220883232a6e1b762f674a9bb122f6ef",
"assets/assets/images/rb_background_2.jpg": "f2992f4768847645ad72448c7c27feba",
"assets/assets/images/rb_investment.jpg": "d1a8b71b6e4f182599b1a27c29d442c9",
"assets/assets/images/rb_pointer2.png": "1a2bf6f4869e49b8fdd75427073451ac",
"assets/assets/images/rb_roulette.png": "3ddfe6caab1f21dfbd9a78577271efb6",
"assets/assets/images/rb_roulette_border.png": "f98ba49bfd296caec9d67050253bf356",
"assets/assets/images/restaurant1_.jpg": "d50e2f81de764399cd2e2e86dc942452",
"assets/assets/images/restaurant2_.jpg": "3cc0827bdb5f674b9f1942060fe5506f",
"assets/assets/images/restaurant3_.jpg": "0010cd721ad5b1d37afac4c8cd3e69da",
"assets/assets/images/roulette100M.png": "2cb81129f397c886705b0991b37b106c",
"assets/assets/images/roulette100_2.png": "7c019401669214f4a0326e9e8bde4da9",
"assets/assets/images/roulette10B.png": "f14361c7229ab399cb91413d049f5102",
"assets/assets/images/roulette10M_.png": "79ca010434c7227333635b6f7b3edb98",
"assets/assets/images/roulette1B.png": "197cfc9dadd8346c54366e0883a82b50",
"assets/assets/images/roulette1M.png": "17526ffa0d53e7ec5353c3581cf7ef1d",
"assets/assets/images/roulette250.png": "9b27d728416142ae32d4cdc6d2d9e59b",
"assets/assets/images/roulette500.png": "4c733f08a1a84bdde480ad038c093308",
"assets/assets/images/roulette50_.png": "0c3ffd8cb54de105349c072afa89aa0b",
"assets/assets/images/roulette_pointer2.png": "1659c8373a7ef8c73524c1318df238f7",
"assets/assets/images/slots_icon3.webp": "b3b9d7ff47db9367207d211a4742e611",
"assets/assets/images/slot_base.webp": "a0ac99e2b2472d0fd56c3f74fe343919",
"assets/assets/images/the_strat.webp": "db8140dc2ac4aa577d4f0c2f3fe07221",
"assets/assets/images/venetian_and_palazzo.jpg": "038dc669117cc11e73d22663394e8e58",
"assets/assets/images/wheel.webp": "829bf71193077d586c9ffd2c6ed12bc5",
"assets/assets/images/wheel_background2.webp": "8f59b7c8eb0796a66a5d38dbe1c30fd9",
"assets/assets/images/wheel_icon2.png": "1af799b0776ef689b1b4fcdc20b6586c",
"assets/FontManifest.json": "552de2b23268c47854d28632b106f96a",
"assets/fonts/MaterialIcons-Regular.otf": "6ab8ad88ab6bf5d19c6d2cd3e065dda4",
"assets/NOTICES": "2b780f04740cd78fe7c107fe18460540",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "bedaae048c5a7e47f8b28756d1d92625",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2e6e6fdf468cff5e291058ea84b397c2",
"/": "2e6e6fdf468cff5e291058ea84b397c2",
"main.dart.js": "d2b4afd5a2d501acf568e7212194905f",
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
