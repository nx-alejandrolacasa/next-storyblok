import { ReactNode } from 'react'
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'
import { StoryblokProvider } from '@/components/StoryblokProvider/StoryblokProvider'
import { Metadata } from 'next'
import './globals.css'

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
})

export const metadata: Metadata = {
  title: '🏠',
  description: 'Storyblok with app folder',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoryblokProvider>
  )
}
