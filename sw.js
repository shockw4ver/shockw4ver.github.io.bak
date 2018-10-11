/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-375f0477fa95abcf98d3.js"
  },
  {
    "url": "app.8278bc6d79821e136657.css"
  },
  {
    "url": "app-3a964e6188a7044b9b29.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-186a699f25c8e7b0bb2d.js"
  },
  {
    "url": "index.html",
    "revision": "027b3519bb42f1164bc4c150b8e51564"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "79eca54f35d2831a4ca1eeaa0f3baeda"
  },
  {
    "url": "component---src-pages-index-jsx.dc94d1776ae3500c16d5.css"
  },
  {
    "url": "0-3cc3c1ba6ffb910fdd40.js"
  },
  {
    "url": "component---src-pages-index-jsx-9e20fb3afb6991fafc21.js"
  },
  {
    "url": "static/d/265/path---index-6a9-0FbjtvvCjzlG1cGYeFbIoE8Pa3M.json",
    "revision": "136aebb92304e17d448eda846f0c5cf6"
  },
  {
    "url": "component---src-pages-404-jsx-b3a517d02e914f9881de.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "6a33b2eca3381df6dfb56c8aa878501c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});