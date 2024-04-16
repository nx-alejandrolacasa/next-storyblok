/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
      },
    ],
  },
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
}

export default nextConfig;
