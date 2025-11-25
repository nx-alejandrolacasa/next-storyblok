'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'

// biome-ignore lint/suspicious/noShadowRestrictedNames: Error name required
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="font-semibold text-base text-sky-500">500</p>
        <h1 className="mt-4 text-balance font-semibold text-5xl text-gray-900 tracking-tight sm:text-7xl">
          There was an error
        </h1>
        <p className="mt-6 text-pretty font-medium text-gray-500 text-lg sm:text-xl/8">
          Oops! Something went wrong. The page you requested cannot be found.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button
            onClick={reset}
            className="rounded-md bg-sky-500 px-3.5 py-2.5 font-semibold text-sm text-white shadow-xs hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-sky-500 focus-visible:outline-offset-2"
          >
            Try again
          </Button>
          <Link href="/contact" className="font-semibold text-gray-900 text-sm">
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
