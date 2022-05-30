/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = withPlugins([
  {
  reactStrictMode: true,
  },
  [optimizedImages, {
    /* config for next-optimized-images */
  }],
])

module.exports = nextConfig
