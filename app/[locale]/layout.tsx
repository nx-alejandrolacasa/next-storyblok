import StoryblokProvider from '@/components/StoryblokProvider/StoryblokProvider'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import '@/app/globals.css'
import { Header } from '@/components/Header/Header'
import { routing } from '@/i18n/routing'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

const font = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default async function RootLayout({
  children,
  params,
}: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  // biome-ignore lint/suspicious/noExplicitAny: no prob
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  setRequestLocale(locale)

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body
        className={`${font.className} relative flex min-h-screen flex-col justify-between`}
      >
        <StoryblokProvider>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main className="flex-1">{children}</main>
            <footer className="flex h-20 items-center justify-center bg-rose-50">
              <p className="text-amber-600 text-sm">
                Copyright &copy; {new Date().getFullYear()} &bull; nexum
              </p>
            </footer>
          </NextIntlClientProvider>
        </StoryblokProvider>
      </body>
    </html>
  )
}
