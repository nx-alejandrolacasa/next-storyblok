import StoryblokProvider from '@/components/StoryblokProvider/StoryblokProvider'
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'
import { Metadata } from 'next'
import { Link } from 'next-view-transitions'
import { ViewTransitions } from 'next-view-transitions'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import '@/app/globals.css'

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
    <ViewTransitions>
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
                <Link
                  className="text-slate-800 hover:underline"
                  href="/about-us"
                >
                  About us
                </Link>
                <Link
                  className="text-slate-800 hover:underline"
                  href="/services"
                >
                  Services
                </Link>
                <Link
                  className="text-slate-800 hover:underline"
                  href="/career/work-with-us"
                >
                  Work with us
                </Link>
                <Link className="text-slate-800 hover:underline" href="/login">
                  Login
                </Link>
              </nav>
            </header>
            <main className="flex-1 py-8">{children}</main>
            <footer className="flex h-10 justify-center bg-gradient-to-t from-slate-300 px-8">
              <p className="text-sm text-slate-500">
                Copyright &copy; {new Date().getFullYear()} &bull; Alejandro G.
                Lacasa
              </p>
            </footer>
          </body>
        </html>
      </StoryblokProvider>
    </ViewTransitions>
  )
}
