/** @type {import('next').NextConfig} */
const createMDX = require('@next/mdx');

const withMDX = createMDX({

});

const withPWA = require("@ducanh2912/next-pwa").default({
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    dest: "public",
    fallbacks: {
      //image: "/static/images/fallback.png",
      document: "/offline", // if you want to fallback to a custom page rather than /_offline
      // font: '/static/font/fallback.woff2',
      // audio: ...,
      // video: ...,
    },
    workboxOptions: {
      disableDevLogs: true,
    },
    // ... other options you like
  });

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    output: "export",
    distDir: "build",
    trailingSlash: true,
    images: {
        // loader: "custom",
        unoptimized: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    }
};

module.exports = withMDX(withPWA(nextConfig));
