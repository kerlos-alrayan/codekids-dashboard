'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d576e82ddfc15807333caf0dc50a4fdb",
".git/config": "bd3ce5c8f14ab84bb80f6c64e9889284",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
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
".git/index": "f0f6055296622c5d1c3abc43f7b66b6a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "00b96dd00cb5f033a47580910eac7d30",
".git/logs/refs/heads/gh-pages": "00b96dd00cb5f033a47580910eac7d30",
".git/logs/refs/remotes/origin/gh-pages": "3f315b43e5bc9c8b5875a28e3096baa6",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/11/8855d339dc860f473fc937ba2ef89c0fcb19bc": "17ee945207e72393e51d9616498da69d",
".git/objects/19/b57d93cfe3effc43836c3187e5e096a12bd200": "9deea56e824584d49c59a50eb54db89e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/21/e17c0c4547e180b5748ae4c8e19aff0317ab61": "057526d233baa1118ed176732bb6c870",
".git/objects/24/e81000e3d1ca0ca82f441d82fdd4b502a81486": "fedb77c57f50d26df285a0750d4b6e48",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2a/1c6e97f4d6752439e48711f7a2b04e53fbbcc0": "f2f8ba13c8e4988d173a64c863db94a1",
".git/objects/34/a744e72ffd82a1381c6d3f8371f176265357ed": "43b75060a552d5bc9564ee5c77556861",
".git/objects/3f/5f4a83d604037e1b000bc2c2726cf71bb25a25": "dbe10d661e7976ace87c402fd7aad206",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/52/5d1b0b1047f95537f0c57d2074da5eb8fb03f3": "73659e8e490097f3d8371083aa3ce095",
".git/objects/57/718be8fd98efb216fd49f1d174fe4a89b222b6": "38a0dbbc2cf4a934e74582fe55ab0f63",
".git/objects/5c/1c40d906158b63336c775a220b2983c8c74f0d": "3bc93013c6847c4fa1eff0664814bc44",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/7337f6430b7e514796836351e5bdae0cffff47": "717ca9e613892680d40bfc0169cfb13c",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/72/3626d910ccdc071801b1f63d8add45310e2524": "5c3febd7c00734bf8dfd1d71dd0f6e1d",
".git/objects/72/4fb66ac4706720fe043e75230da1780b459123": "4f07461bd32c7566b33e4a1981607f8a",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/75/9b46e66599508f9930334ccf9e3c3229af8918": "e6c1465ea8f210c81f6b5594ebf4ff51",
".git/objects/7f/b0aa410d702ecb720c19ac427a15e8cc10984b": "236a1f6ee0f4b6006b853b687f1a68ed",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/6e06078b767c7caa59813636cb765641d7772f": "312a0b1660acfa99bc8a9d13b6762a4c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/97/89f39addaa2ed3b6c6665465b0c6f9b87d3fbf": "2849da855b4f506f1a52e72e6df8c6d6",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9c/82a860e007d965cd760043629e453e4e162f7c": "b5c5dcdfcd55f4f45795c994fa88786c",
".git/objects/9d/ac06ec9a6c924a5f1633ca49c10adae2248560": "af849dd9bcf1df2e116cb8373856149d",
".git/objects/a2/7db1470751ddc193f33dec673901712fb3a613": "b5a1737e64705dbb36b157295b7b903f",
".git/objects/a3/0523573750c496a3d818ac0202b7ec864b1e09": "a96b8fca98a50ce3b999938324af79c2",
".git/objects/a5/9d1e786f16afdbb9b169dcce6abab4ef1231ab": "cfb98ec20a926a9a973c95c109fb007f",
".git/objects/ae/0fb20a0db6d43f0f4db83a623c5ca5680468d4": "4ab83135fd86d334b43c49e8d059bba5",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b0/fa7956a65fa958a52b90bbd19aca13b7b72109": "31fea0b5b4d971183aabd26e3acdb180",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/ba1a2eac030a024b3f67aa6e0df3dc2928bbb4": "df626c0bd0a239556956eab16e94ca7a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/c3bba2dd617c63bea1246f16bbba067193eb2f": "f0707afad266a8eef1aa4dfb3d5742c2",
".git/objects/d5/1f09a213f12fa4a3e6ae9e18bc2224d0c4c43c": "bfb14f07fe2fda7d709eae830e99f2e1",
".git/objects/d6/1fc2387a076e35b3d9260efe040164e454fd40": "f3a13acbf99d901ff4b6af9acc577c9c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/261bb8f01c6af562cc096caca18f4bea7b42b9": "c49e9d5b130a91fa95ccf1e660aa1433",
".git/objects/e3/7e424bdb99497ff0fefe92d0a545c80cbca2e3": "991f5bc557be871952e40bf7e8ae9868",
".git/objects/e6/3e3828c87b92dab5ca9ff2e5951af2b5059635": "3e27b88f9c017fa1e871087c4c17a26d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/2b7739b42be4139a5988d3bd93364ee56e9c69": "ec5c577657441efc31180f40ebf64f51",
".git/refs/heads/gh-pages": "b0f0f0872d94cbeced258efb9ac53517",
".git/refs/remotes/origin/gh-pages": "b0f0f0872d94cbeced258efb9ac53517",
"assets/AssetManifest.bin": "18a4d40a753bd41ae61ff8f8190515a8",
"assets/AssetManifest.bin.json": "f6d3116146367e87bf2b480814ea86e5",
"assets/AssetManifest.json": "265f032db631aaf4b27723967b5e1206",
"assets/assets/images/icon_app.png": "695c26e750920af79c51c623b661cee5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6696ef708fc37f401c70999d24d4ac48",
"assets/NOTICES": "0a1d033967a0ce885a76f1899c3b1e90",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "9084660d8fb6e0b5ee82ed85bd8baee2",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "c2e190210778f504af2e48fc78bd36f8",
"icons/Icon-192.png": "b995461484c013379a1eb15af36d3650",
"icons/Icon-512.png": "cfed1986cab192d218178bddf147e105",
"icons/Icon-maskable-192.png": "b995461484c013379a1eb15af36d3650",
"icons/Icon-maskable-512.png": "cfed1986cab192d218178bddf147e105",
"index.html": "1492d7f3fe963d2243255893d6d2afc8",
"/": "1492d7f3fe963d2243255893d6d2afc8",
"main.dart.js": "b3e5fbf1333c9d2a05e927149562cc38",
"manifest.json": "28100d45466eadc2625eaaf8418588f0",
"version.json": "b214f9d812f879e2d57b45a063094bf6"};
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
