module.exports = {
  globDirectory: "dist/",
  globPatterns: ["**/*.{html,js,css,json,png,jpg,svg}"],
  swDest: "dist/sw.js",
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "images",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    },
    {
      urlPattern: /\/$/,
      handler: "NetworkFirst",
      options: {
        cacheName: "html-cache",
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 24 * 60 * 60,
        },
      },
    },
  ],
};
