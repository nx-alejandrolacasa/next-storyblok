import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/requests.ts')

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
  // redirects: async () => {
  //   return [
  //     {
  //       source: '/home',
  //       destination: '/',
  //       permanent: true,
  //     },
  //   ]
  // },
  output: 'standalone',
  reactStrictMode: true,
}

export default withNextIntl(nextConfig)

// Only initialize OpenNext Cloudflare for local development
// This prevents conflicts when deploying to Vercel, Fly.io, or other platforms
if (process.env.NODE_ENV === 'development') {
  try {
    const { initOpenNextCloudflareForDev } = await import(
      '@opennextjs/cloudflare'
    )
    initOpenNextCloudflareForDev()
  } catch (error) {
    // Silently fail if @opennextjs/cloudflare is not installed
    // This allows the config to work even without Cloudflare dependencies
  }
}
