/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const repo = "profile";
const assetPrefix = isProd ? `/${repo}/` : undefined;
const basePath = isProd ? `/${repo}` : undefined;

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: assetPrefix,
  basePath: basePath,
};

// const nextConfig = {};

module.exports = nextConfig;
