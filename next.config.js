/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  experimental: {
    newNextLinkBehavior: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  serverRuntimeConfig: {
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  },
  swcMinify: true,
};

module.exports = nextConfig;
