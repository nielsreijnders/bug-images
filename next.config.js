/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["admin.zuiderhaven-alkmaar.nl"],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  }
  
}
