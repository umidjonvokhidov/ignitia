import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Turbopack config (Next.js 14+)
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  // Webpack fallback config (for non-Turbopack environments)
  webpack(config: any) {
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Keep SVG?url working for static assets
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Use SVGR for React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
              svgoConfig: {
                plugins: [
                  {
                    name: "removeAttrs",
                    params: { attrs: "(fill|stroke)" }, // 🧹 remove hardcoded colors
                  },
                ],
              },
            },
          },
        ],
      }
    );

    // Exclude SVG from default file loader
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
