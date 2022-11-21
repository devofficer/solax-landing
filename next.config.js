/** @type {import('next').NextConfig} */

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

if (process.env.STATIC === 'true') {
  nextConfig.images.loader = 'custom';
  nextConfig.images.loaderFile = './custom_loader';
  nextConfig.images.unoptimized = true;
}

module.exports = nextConfig;
