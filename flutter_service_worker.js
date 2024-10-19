'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c760591f5cbc08f59ca823a5e6c40e96",
".git/config": "b54821844823733876d960c9cd91e1e5",
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
".git/index": "0740620a63cb4f55e392d443a5cc98ed",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "51bd23e827d2330993ed9b65ea3757bb",
".git/logs/refs/heads/main": "1b46e03a7fd1a677f9d889bd9ba0447a",
".git/logs/refs/remotes/origin/main": "6f65327360c88d9ffc9388afe538b343",
".git/objects/00/19ff3026584933d705390c0f991506e461c607": "6d4fdaa5f64676cfa7e5c1c2a726ebbb",
".git/objects/00/baa4dbade10cc7116c663a834b96f4e8df02ce": "804b1a50aeb42cbbb36dd3a35388bf45",
".git/objects/01/1dad45552d55aae8589d5aa93a41ed3ba3e137": "179a7ae437e8a8413482cbd00088d4f9",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/ae9c909892f3e4e920bc71d00474743ad34ec0": "9df1fd0f3a4f0ce9072e350a929d4630",
".git/objects/09/f46d75a1702d72845b6bc579ee4cae993adc88": "f0c03577dc1281252d21a4e622cdb400",
".git/objects/17/fa36ca0247a84546c7517b50bf57572d84f5aa": "f6aa762ae1b5bd6bbc153a783f2e77cd",
".git/objects/18/9215cc859101b130dc823d399689422ab9087a": "7d527de7af20574237ecafb25ba150df",
".git/objects/1a/c1f74e47aa944479adddd8e45e82b0e675b988": "d8a379fb57758a8879e27bd4acdfff71",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2a/2608785ebd9168e9ed30ba15942bcac5bc1910": "3369c07902dd69ebf9ae642abec681a0",
".git/objects/2d/ca79d5036431ebc2bd0ce5b4560e60b4acc29b": "692eaee2be569470fd33d0a381862db6",
".git/objects/32/3ec36128c302a3c8d3cd0b436bd76ed2a26f8b": "ea6610e21f0e79e330ff876bf3fe0e47",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/34/6490d82887c99955bb1ef79e7f8aee6c8a477b": "a9d84f2ae357b48cab9795236db25b4c",
".git/objects/38/466cf91631b43b625936a3cd7fe256394c494d": "09715373d529f6688a834939544a5ad8",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/9736b36b6e59fa21a1d2e78860b96b8a349acd": "5099c89d3b5e1c1fef542233213546ea",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/0fc97c678dd116d8fc5de77f4ae13c3a3e7c1a": "9b76a462905a763a07fb2b7d37676d99",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/d18728117c168d75c63ec84fef3f547c1421cf": "8a228d367478e26c1b5439bb6e31ce47",
".git/objects/4b/428c6ec4b8855f5c2879bdf4720ab0d2d2089d": "5d1d2d8324c977119cb9d9114c71dff6",
".git/objects/4f/595d9557d67554db481dfe28f0dec97f97cb72": "742d1bea58f2c7a964529619454ef860",
".git/objects/50/2eddaae2f21b11ced882bbd4b88ab357f3fc60": "1c8649bd28dab47b0cf12e8faff02f66",
".git/objects/50/740af7520dbd79037e578e88ba558524c4ca0e": "42279811e6fdedd2edf0471e7c3f70c7",
".git/objects/53/12ebb897efb4da2564d1137edaf6962c514ec3": "41794d67e5654b16f3e19513b6d58693",
".git/objects/55/7532593866471aa5cbbd4d7b7b87eceed7ca89": "b1a3ecde6f6c2ee3580136241785fa83",
".git/objects/5b/2a6a7991783710ade2c68599866a8435f502d8": "789f39d099031520fb734ca7c91128d2",
".git/objects/5c/74310d6e39f1a967a367f45b80f759c8980eef": "06b38011f15690e8bf553e5432f46c29",
".git/objects/64/88e47d9ebd9c76b162e9d87eac65bbbf0fbdce": "ec03f2985b904108911a0562a81a4376",
".git/objects/65/ae2e682ea1fdf6558812c8d82f338c0a92fe78": "5f52f03d72a1e88dfea1f6f8279e8be5",
".git/objects/68/5b2274a844862768ef0034a39445a546b74899": "7160722931e1717a54d0f132b2d59322",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/f39100434bfc2a738186903fadad7723b918f3": "5f8baffb6947bea7f17c8ce78748635a",
".git/objects/71/83b3e121257bda948db1fc52151c3870d76824": "db90c4ffb13dc3282c901b3b62498add",
".git/objects/76/f7f51af9811df3cf6589a73e071b36e512b1e7": "35fe7e59c7d641c9bbc316363e9012e6",
".git/objects/79/123a4ff55297f85223270fb42598c6c873127d": "d96f69c70c8a2ce3db9389e76e96ed2b",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7e/552d67b17fe04f68657fde91354b091139a7a2": "ddb1df5aa4de07ecd1a3094d2a0a52b4",
".git/objects/7e/c3843017d8e5df76f5b3be3bd8dd11bf823d4d": "05cdd07ef145d12ed3460dce126f0cbb",
".git/objects/7f/04110a42dc87c1ff8a19b1b4dc3916129ddfed": "15a246e76a3f580cda70307f696f0342",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/0a6e8d2044f539f6f8b17b4e048500e9111246": "03862032530f70dff822e2c940580688",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/a6571aa7e1ca5173628bd93772cc6dbb8cd8d0": "67ad59df5e8794d0086596e9d04e3e4d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/b6099e634965ea606bda12949947d643508104": "6a1937a0e40962e2901b6c3ce2050ac3",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/97/3e54797759b8ff6462bd056d288c09ddda5fc3": "6c316b934778910a3748593979e5db55",
".git/objects/97/66b288aaed6708eee759a2b48b4b593bce49e2": "9269cc99100dfd90b0a1e9f244e0806f",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9f/32e535bf24fd77e7b9ed3e67b7c9e7895ec650": "2d6b28bf53fc14273c3c95b7d67e5729",
".git/objects/9f/dc420e9d34afb7c73efc2d95606bc533174e6b": "132ad53846115a6d6e0267133dfe83f6",
".git/objects/a1/40d4cd9cd8831846be29aabf751262d53259a9": "92d5094fe57f5be43c687bc614f955f4",
".git/objects/a2/54158cfa2eb0de927afcd5dd68e556ff9139c6": "c2cc881cedcad42e7fd2abb977fcbdbf",
".git/objects/ad/99f8b526b6d38237fd29bc189455c1abdcedb8": "4113d204fd226ce1cdc0cf8bb7ab2471",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b6/7171e12261fc0054f7c567a2c69215e00b4373": "0e58ff9641c64a3db156d99d62249ad6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/5461eb3d48db28f62482480412d891db4ac969": "f6d85744ce118d0ec33834fc5996581d",
".git/objects/bb/8edfadbe92f848a46ae4c6d45a9a82e19e5b6c": "903fe0ec7cfc47c1434e11d70a29582b",
".git/objects/be/e472cbbbe1a82cc6e65bf600feba5719b89989": "5d9890d1a4dcc83600ae2108f7ba3e61",
".git/objects/bf/92229c57cbb0205ec0ed37a08ba150b499485c": "c0c42a801419c6423dfefffaa1d819c7",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cc/8d8b35d363b83a372b6fdae3bb35bd8db5b4b8": "7d4e8d7a79162fb27e69f0a6c886452a",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/1ed97463f886af372521c5c59339b61e60566b": "f0d647a3342bb4310d2890fce762e866",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/eab1babfc9f3ac11ffa4a6d469d310c4a28524": "f56d2e7d312991411c2d87c607a61218",
".git/objects/da/760a27a57e10a356094e51ef84ea5800304ce3": "bfdee96e49059c6cdcf7e51723f67a07",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/4d2d7a3f9a927fb564311d0a34c30ac2190332": "8ad150fa819b4c22c0dcdbca30c1c10b",
".git/objects/dc/f62f7661b71faafd4499be4e00564d9116da95": "1e76171af4d35d6a61c7fc71928f0b15",
".git/objects/de/34f4f10c20ceaf5b40817c9ecccad582da1b12": "651aa983ec137049dc839ccffbbfc5a5",
".git/objects/df/b3cf11a0610d34afd530cd34b510e618213886": "2ba6f8fa56e8437203df11103db8700d",
".git/objects/e0/ff1c31af66d21dfc57ff8859ca1f903f6d18da": "f156fe75d6ddbd27a44a0188efc22949",
".git/objects/e4/dbf65c0c0d4bb4f42fcba65a356b1dc189a943": "588584e5eb7691c273ddb9d7e01ea8e0",
".git/objects/e7/7d48aea452ed34e37fe40bb9f7dbcdacb8ff29": "46d2147f8adec71bbe0a6294588cddf8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/e85e4389bdc2b9142bfe0e94cbd5e76c76b4ee": "e8cd9767284bbfbb7136fce3036329f6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/ddbc3c82eac8d77279fc4f595b52ec690c1f97": "032f4a5f26cb88460ba9eb9516afb6f1",
".git/objects/fc/fedb2deed45d3420f7aca69eb4d277bba947a1": "1cc4f7f4d978b3a0c4b7b11a7ea9d6af",
".git/objects/fe/dac4b20eecacdf6e4b7eb3c8a5ffb77edfceb6": "662e8ab7fe34e4aa1de318f2bbb20275",
".git/refs/heads/main": "aaf3ece3d7ee430296c024dcecf7771c",
".git/refs/remotes/origin/main": "aaf3ece3d7ee430296c024dcecf7771c",
"assets/AssetManifest.bin": "89c826cbd4a9feeccc76e99f6aba91c3",
"assets/AssetManifest.bin.json": "d139219fb191e2e2f5586bbdf20742e1",
"assets/AssetManifest.json": "232967c4c45dde00e21087cc890f490d",
"assets/assets/images/background.jpg": "8085ea4b800f4bf068f2bede461edf05",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "a2f06b9a7e4bdcbdeb4209fe60c00809",
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
"flutter_bootstrap.js": "a2fcd054c2b002c5896af74f47d8143b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3954469d511f46e580e7a97389974040",
"/": "3954469d511f46e580e7a97389974040",
"main.dart.js": "d2877142c407630d7a9373fe546b0324",
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
