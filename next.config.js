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

  serverRuntimeConfig: {
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    recaptchaPrivKey: process.env.RECAPTCHA_PRIV_KEY,
  },
  swcMinify: true,
};

module.exports = nextConfig;
