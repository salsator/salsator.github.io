'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "00a66503bbe369d9f04992e550a0ed99",
"index.html": "0f50f8deb04b166b07e2f8839d2e9bf1",
"/": "0f50f8deb04b166b07e2f8839d2e9bf1",
"main.dart.js": "ec5a793fa245bac07cdc6d94872ca334",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4678bacace593d770b1fe59ec45e096f",
".git/ORIG_HEAD": "b678d059adb841859b982c3a6f08a34d",
".git/config": "39021808d85abcd8e270ec562035c44c",
".git/objects/50/753fd1969c851a9c0ea8af6f0e91449f2652fc": "3c9639f20670a4714f79cbf3d23e0121",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/b0c9a305e31ece3c99f0e0a95884f49065b67e": "17e5470461c5135101cc150a9beed2b2",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/6a/6a67a7d9b09b83cae7deda2b8452ca0f3ff4fd": "1f06d2895eaf39210c74490c5ee7d0ee",
".git/objects/32/dda51c22d2acfb09eb07b34e3c096699723f60": "62e66b39409a58805d6d7c0690fad4bf",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/02/02a94dda95eb9cc623841bb9e9ac8a4e65d53a": "866158668140766711c533e088ab26e1",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/8c41eb6641829c58f94885ca2ba8ae7262e4ec": "8cdb7fe000b068f0746d5a25b8a29f4a",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/a2/30f76d3d6ea352073b0152dca60f7b49014705": "bf9f1c34b28c72a52cd5ebee449939bb",
".git/objects/d6/33e67c48e559f12ba917fccbcd931395a0b567": "4a537a75c4660d044d4adb47cf95f57f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/3cffd0c73b3043d8291d7237a6ce8d1b39b79e": "bf6d49e1e9a1a0300cf0818974b8bfcc",
".git/objects/ae/1a1dd0a368874944b4c36c09a4fe151bf03f79": "ba19e5c920c1c76776a7ad3a8696c0c5",
".git/objects/ae/7765f36771292cd16c1c6c55322e13ee4a7c93": "37cfd793252a621b33c1657cdf219f10",
".git/objects/d8/f2197589eb8b327cdfb1193ef512381807af0e": "ddd56b048e3395991e44ea4d5b4b61a3",
".git/objects/f3/a0ea8661f03a5cfb38e5ea39d29569f337cdd2": "4d64bb8d3e0ae83e8c7da26332383bab",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/a9bb5374c022b4915baf9d9189edaa886ddaf2": "a919712740cb4c497a33a0f26c745cb9",
".git/objects/4e/3545aeb7e29d30f6e20c32a6945122ee8ef6e6": "548d030d72b3ff0d83059f4aa125c33a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/db263dbdc958f63f14c4904cb7e2124c766ecc": "f8de7758db8b931ae09f803f670ed09a",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/80/cfb9b4bb90ffae1a180ca1ae23b6cd0d642319": "48be3d35504169a77b84f93a1f1776cb",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/c70006cbc5064bc40a17c4b2434086ed227e71": "e41fc319b1e798ee3735be7eceda1ba2",
".git/objects/8a/0dfee3d4141351e6fb52fa53b6fba432c4cfc5": "b2b55889b36b3d9d1a4f02b67ffee931",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/e7f5e42f1a961bc2720ac448fd8a5d21cd4268": "9dd15cc2a0acfa50ce3113c142670240",
".git/objects/4d/c934fa41d761d6e77850b175c400034168cdfd": "7040bc9ca6471794d830dc1640c4239a",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/70e58a56de72064d76121ae37dc5bf6612be0b": "a8fa89e71d4fd3a27e74d1b5fd46c65e",
".git/objects/07/68021f7fa85d6f466dc7fff77de9032a5cb68c": "2c7f9f2593ba092df8fca7b9cb2c40e7",
".git/objects/00/0d2ab06087523f66f40d9eaef230ff78089a65": "1c275014bba298145cf1552d03fbc512",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/09/25e57b65f01c94de96f438cb04582594103e0a": "a12c123dd264dd643c2b65cb9b887ac5",
".git/objects/31/4447e385219f26e10dc94209033e39d5b7d18d": "8494d5bd62c61fa6843e345aab2412c4",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/68ece6bec7f770d2da2ed8d7d038e5a8b78773": "44757aa2dd268310d6d34c04431ef874",
".git/objects/5b/4e60a6e8120fb492f98c92e36c046f1ebeed24": "42ca6e04597e573eaf14ea31650d1c7f",
".git/objects/97/d42227a95141267b48cae8b9bcdda1d618781a": "bf17effe275c950110edbc2472c8bb32",
".git/objects/0f/d172e50a529b01749aa57fac652914b6b4459e": "8aa65333db7bc49080790fa4d9e070bf",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/dc/435bde05615db490722826e85ab2a1fbada972": "194648583ae92453f9327e6e77604a6f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6d4af727a9998888ac0760d14e49700ff87fc6": "250557f0a472e14369ceffc83f0ba752",
".git/objects/b0/c85f1ee516e46272121c813a007db9725c3a3f": "9e6fa6420f1e7253911c20fbcd61502c",
".git/objects/b0/7144aa4f00a5cf3adbd18fe53b4869aa6aae4f": "0657bbdea6707b010b8e17ee98b6bbdf",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/dec6cd0c838b416653a10b752114134adc0870": "69083afa6ab3d99d164304bcddc1df2c",
".git/objects/ea/8fefea64b73448ff0b00728b5325d7bbf65356": "753e260e809e27ebd089140143c85b0a",
".git/objects/cc/747e610c5934c12670983020990c70abaf381a": "9d9eb6ed0a8b608c3d290004d08df0b4",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f8/a6b6e1d5e3f51caba0cbb1843388959568646a": "f9891996d829ace4ed3b7542f630216b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ef002f09dd9858ca8bbd7c94bd0d5dfb1ee3db": "9e08827e501736aba515a1566ee13a83",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/85/d8321e4cb9bd454ca8ec6ba1b6c9c5dd1a7099": "6d5f75dceea8d8325ae13727a2f4a254",
".git/objects/1d/a421fe2848eb8e3cb6efbafc0f91cd7054295c": "2ad2e65efc3b1fe09ceba79380b9a61a",
".git/objects/1d/a7c96873ce2aac64e23b14613ff5d0f49348ec": "d982730d89b0825c4988a8553d3f2899",
".git/objects/76/c2a6fbf89924ab20874c5c3ca15b032f2d8386": "4da0fe334be55200ec1be72fc28892f9",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0d5477a4793bf1030e511ac254d66f75",
".git/logs/refs/heads/main": "c6266873bf3eee9c673f03529d2ea922",
".git/logs/refs/remotes/origin/main": "7a6b80c912367451658d491588a6771f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "5e73db53beb837598754766ed645038f",
".git/refs/remotes/origin/main": "5e73db53beb837598754766ed645038f",
".git/index": "4114abba673618e8ca2e738cbb3be089",
".git/COMMIT_EDITMSG": "322ffced516ae4db87302126f8905203",
".git/FETCH_HEAD": "4c7ca8f4630306ba964ebc03c46f340d",
"assets/AssetManifest.json": "d70a31ca24b1a6c3a6f3d35188eba321",
"assets/NOTICES": "877a16a6a490343ca8d71014ea47449c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "532e5fa30b3f8c8429a0ccc092c298bc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/simple_barcode_scanner/assets/barcode.html": "7a1c45aca573208e15c71b378fdbe027",
"assets/packages/simple_barcode_scanner/assets/html5-qrcode.min.js": "d88d3200cb547c9e86ee972975561dcd",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "0aaff9aa9cda4767b86514d3d6bc0ebd",
"assets/fonts/MaterialIcons-Regular.otf": "908ecf26ed7c2c9866b71b82cfd4e270",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
