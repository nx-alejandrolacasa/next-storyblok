import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import Link from 'next/link'
import { ConfigStoryblok } from '@/types/sb-types'

type ConfigProps = { blok: ConfigStoryblok }

export function Header({ blok }: ConfigProps) {
  if (!blok) {
    return null
  }

  return (
    <header
      className="relative border-b-2 border-tertiary-3 bg-white"
      {...storyblokEditable(blok)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center py-6 md:justify-start">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">nexum logo</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={blok.logo.filename} alt={blok.logo.alt} />
            </Link>
          </div>
          <nav
            className="flex flex-1 items-center justify-end gap-5 md:gap-10 lg:w-0"
            {...storyblokEditable(blok)}
          >
            {blok.header_menu?.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
