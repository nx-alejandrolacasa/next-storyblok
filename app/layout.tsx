import { ReactNode } from 'react'
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'
import { StoryblokProvider } from '@/components/StoryblokProvider/StoryblokProvider'
import { Metadata } from 'next'
import './globals.css'
import { Source_Sans_3 } from 'next/font/google'

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
})

export const metadata: Metadata = {
  title: '🏠',
  description: 'Storyblok with app folder',
}

const source = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source',
  weight: ['400', '700', '900'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={`${source.variable} font-source`}>{children}</body>
      </html>
    </StoryblokProvider>
  )
}
