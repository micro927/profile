/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "plus.unsplash.com",
      // },
    ],
  },
};

// const nextConfig = {};

module.exports = nextConfig;
