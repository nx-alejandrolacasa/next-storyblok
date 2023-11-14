import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import StoryblokProvider from '@/components/StoryblokProvider/StoryblokProvider'
import '@/app/globals.css'
import Link from 'next/link'
import { Metadata } from 'next'

const font = Inter({
  subsets: ['latin'],
  weight: '400',
})

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
})

export const metadata: Metadata = {
  title: '▲ Next.js 14 + Storyblok',
  description: 'Next.js 14 application using Storyblok as CMS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body
          className={`${font.className} flex min-h-screen flex-col justify-between`}
        >
          <header className="h-20 bg-gradient-to-b from-slate-300">
            <nav className="container mx-auto flex h-full items-center justify-end gap-4">
              <Link className="text-slate-800 hover:underline" href="/">
                Home
              </Link>
              <Link className="text-slate-800 hover:underline" href="/about-us">
                About us
              </Link>
              <Link className="text-slate-800 hover:underline" href="/services">
                Services
              </Link>
              <Link
                className="text-slate-800 hover:underline"
                href="/career/work-with-us"
              >
                Work with us
              </Link>
            </nav>
          </header>
          {children}
          <footer className="h-20 bg-gradient-to-t from-slate-300"></footer>
        </body>
      </html>
    </StoryblokProvider>
  )
}
