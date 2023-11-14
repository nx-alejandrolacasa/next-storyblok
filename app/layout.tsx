import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import StoryblokProvider from '@/components/StoryblokProvider/StoryblokProvider'
import '@/app/globals.css'
import Link from 'next/link'

const font = Inter({
  subsets: ['latin'],
  weight: '400',
})

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body
          className={`${font.className} flex min-h-screen flex-col justify-between`}
        >
          <header>
            <nav className="container mx-auto flex h-10 items-center justify-end gap-4">
              <Link className="hover:underline" href="/">
                Home
              </Link>
              <Link className="hover:underline" href="/about-us">
                About us
              </Link>
              <Link className="hover:underline" href="/services">
                Services
              </Link>
              <Link className="hover:underline" href="/career/work-with-us">
                Work with us
              </Link>
            </nav>
          </header>
          {children}
        </body>
      </html>
    </StoryblokProvider>
  )
}
