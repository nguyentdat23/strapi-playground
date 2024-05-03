export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "http://127.0.0.1:9000/"],
          "media-src": ["'self'", "data:", "blob:", "http://127.0.0.1:9000/"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
