const resource = [
  /* --- CSS --- */
  '/resources/assets/css/jekyll-theme-chirpy.css',

  /* --- PWA --- */
  '/resources/app.js',
  '/resources/sw.js',

  /* --- HTML --- */
  '/resources/index.html',
  '/resources/404.html',

  
    '/resources/categories/',
  
    '/resources/tags/',
  
    '/resources/archives/',
  
    '/resources/about/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/resources/assets/img/favicons/android-chrome-192x192.png',
    '/resources/assets/img/favicons/android-chrome-512x512.png',
    '/resources/assets/img/favicons/apple-touch-icon.png',
    '/resources/assets/img/favicons/favicon-16x16.png',
    '/resources/assets/img/favicons/favicon-32x32.png',
    '/resources/assets/img/favicons/favicon.ico',
    '/resources/assets/img/favicons/mstile-150x150.png',
    '/resources/assets/js/dist/categories.min.js',
    '/resources/assets/js/dist/commons.min.js',
    '/resources/assets/js/dist/home.min.js',
    '/resources/assets/js/dist/misc.min.js',
    '/resources/assets/js/dist/page.min.js',
    '/resources/assets/js/dist/post.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [];

