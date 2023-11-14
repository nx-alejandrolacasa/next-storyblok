import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import { ReactNode } from 'react'
import StoryblokProvider from '@/components/StoryblokProvider/StoryblokProvider'
import '@/app/globals.css'

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoryblokProvider>
  )
}
