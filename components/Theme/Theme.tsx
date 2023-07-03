import { Source_Sans_3 } from 'next/font/google'
import { ExtendedConfigStoryblok } from '@/types/extended-sb-types'

const source = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source',
  weight: ['400', '700', '900'],
})

type ConfigProps = {
  blok: ExtendedConfigStoryblok
}

export function Theme({ blok }: ConfigProps) {
  if (!blok) {
    return null
  }

  return (
    <style jsx global>{`
      :root {
        --font-source: ${source.style.fontFamily};
        --primary-1: ${blok.primary_1?.color ?? '#0284c7'};
        --primary-2: ${blok.primary_2?.color ?? '#38bdf8'};
        --primary-3: ${blok.primary_3?.color ?? '#bae6fd'};
        --secondary-1: ${blok.secondary_1?.color ?? '#fb7185'};
        --secondary-2: ${blok.secondary_2?.color ?? '#fecdd3'};
        --secondary-3: ${blok.secondary_3?.color ?? '#fff1f2'};
        --tertiary-1: ${blok.tertiary_1?.color ?? '#4b5563'};
        --tertiary-2: ${blok.tertiary_2?.color ?? '#9ca3af'};
        --tertiary-3: ${blok.tertiary_3?.color ?? '#e5e7eb'};
        --accent: ${blok.accent?.color ?? '#fbbf24'};
        --light: ${blok.light?.color ?? '#f1f5f9'};
        --dark: ${blok.dark?.color ?? '#1e293b'};
        --border-radius-elements: ${blok.border_radius ?? '0.25rem'};
      }
    `}</style>
  )
}
