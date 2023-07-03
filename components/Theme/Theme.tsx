import { Source_Sans_3 } from 'next/font/google'
import { ExtendedConfigStoryblok } from '@/types/extended-sb-types'
import { colord, extend } from 'colord'
import a11yPlugin from 'colord/plugins/a11y'

const source = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source',
  weight: ['400', '700', '900'],
})

type ConfigProps = {
  blok: ExtendedConfigStoryblok
}

extend([a11yPlugin])

export function Theme({ blok }: ConfigProps) {
  if (!blok) {
    return null
  }

  const primary1 = blok.primary_1?.color || '#0284c7'
  const primary2 = blok.primary_2?.color || '#38bdf8'
  const primary3 = blok.primary_3?.color || '#bae6fd'

  const secondary1 = blok.secondary_1?.color || '#fb7185'
  const secondary2 = blok.secondary_2?.color || '#fecdd3'
  const secondary3 = blok.secondary_3?.color || '#fff1f2'

  const tertiary1 = blok.tertiary_1?.color || '#4b5563'
  const tertiary2 = blok.tertiary_2?.color || '#9ca3af'
  const tertiary3 = blok.tertiary_3?.color || '#e5e7eb'

  const dark = blok.dark?.color || '#1e293b'
  const light = blok.light?.color || '#f1f5f9'
  const accent = blok.accent?.color || '#fbbf24'

  const primaryText = colord(primary1).isReadable(light) ? light : dark
  const secondaryText = colord(secondary1).isReadable(light) ? light : dark
  const tertiaryText = colord(tertiary1).isReadable(light) ? light : dark

  return (
    <style jsx global>{`
      :root {
        --font-source: ${source.style.fontFamily};
        --primary-1: ${primary1};
        --primary-2: ${primary2};
        --primary-3: ${primary3};
        --primary-text: ${primaryText};
        --secondary-1: ${secondary1};
        --secondary-2: ${secondary2};
        --secondary-3: ${secondary3};
        --secondary-text: ${secondaryText};
        --tertiary-1: ${tertiary1};
        --tertiary-2: ${tertiary2};
        --tertiary-3: ${tertiary3};
        --tertiary-text: ${tertiaryText};
        --dark: ${dark};
        --light: ${light};
        --accent: ${accent};
        --border-radius-elements: ${blok.border_radius ?? '0.25rem'};
      }
    `}</style>
  )
}
