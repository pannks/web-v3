/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")({
    // Optionally provide remark and rehype plugins
    options: {
        // If you use remark-gfm, you'll need to use next.config.mjs
        // as the package is ESM only
        // https://github.com/remarkjs/remark-gfm#install
        remarkPlugins: [],
        rehypePlugins: [],
        // If you use `MDXProvider`, uncomment the following line.
        // providerImportSource: "@mdx-js/react",
    },
});

const nextConfig = {
    output: "export",
    distDir: "build",
    trailingSlash: true,
    images: {
        // loader: "custom",
        unoptimized: true,
    },
};

module.exports = withMDX(nextConfig);
