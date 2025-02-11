import StoryblokProvider from '@/components/StoryblokProvider/StoryblokProvider'
import type { Metadata } from 'next'
import { Link } from 'next-view-transitions'
import { ViewTransitions } from 'next-view-transitions'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import '@/app/globals.css'
import Image from 'next/image'

const font = Inter({
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: '▲ Next.js 15 + Storyblok',
  description: 'Next.js 15 application using Storyblok as CMS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ViewTransitions>
      <StoryblokProvider>
        <html lang="en">
          <body
            className={`${font.className} flex min-h-screen flex-col justify-between`}
          >
            <header className="mx-auto flex h-20 w-screen max-w-screen-xl items-center justify-between px-8">
              <a href="/" className="flex items-center gap-4">
                <Image
                  src="/solina_logo.png"
                  alt="Solina logo"
                  width={200}
                  height={200}
                />
              </a>
              <nav className="container mx-auto flex h-full items-center justify-end gap-4">
                <Link className="text-black hover:underline" href="/about-us">
                  Who we are
                </Link>
                <Link className="text-black hover:underline" href="/services">
                  What we offer
                </Link>
                <Link
                  className="text-black hover:underline"
                  href="/career/work-with-us"
                >
                  How we work
                </Link>
                <Link className="text-black hover:underline" href="/contact">
                  Contact us
                </Link>
              </nav>
            </header>
            <main className="flex-1 py-8">{children}</main>
            <footer className="flex h-10 justify-center bg-gradient-to-t from-slate-300 px-8">
              <p className="text-slate-500 text-sm">
                Copyright &copy; {new Date().getFullYear()} &bull; nexum
              </p>
            </footer>
          </body>
        </html>
      </StoryblokProvider>
    </ViewTransitions>
  )
}
