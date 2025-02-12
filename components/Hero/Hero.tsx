import { Button } from '@/components/Button/Button'
import { RichText } from '@/components/RichText/RichText'
import type { HeroStoryblok } from '@/types/sb-types'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

type HeroProps = {
  blok: HeroStoryblok
}

export async function Hero({ blok }: HeroProps) {
  const t = await getTranslations()

  return (
    <section className="relative isolate mb-10 overflow-hidden">
      <Image
        fill
        sizes="100vw"
        alt={blok.image.alt}
        src={`${blok.image.filename}/m/`}
        className="-z-10 absolute inset-0 size-full object-cover object-center brightness-25"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          {blok.announcement_text && (
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-gray-300 text-sm/6 ring-1 ring-white/10 hover:ring-white/20">
                {blok.announcement_text}
                {blok.announcement_link.cached_url && (
                  <a
                    href={blok.announcement_link.cached_url}
                    className="ml-4 font-semibold text-white"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    {t('read-more')} <span aria-hidden="true">&rarr;</span>
                  </a>
                )}
              </div>
            </div>
          )}
          <div className="text-center">
            <h1 className="text-balance font-semibold text-5xl text-white tracking-tight sm:text-7xl">
              {blok.title}
            </h1>
            {blok.subtitle && (
              <RichText
                className="mt-8 text-pretty font-medium text-amber-100 text-lg sm:text-xl/8"
                text={blok.subtitle}
              />
            )}
            {!!blok.cta?.length && (
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button blok={blok.cta[0]} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
