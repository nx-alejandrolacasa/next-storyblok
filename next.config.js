/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
