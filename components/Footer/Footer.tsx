import { ConfigStoryblok } from '@/types/sb-types'
import { Facebook } from '@/components/Icons/Facebook'
import { Instagram } from '@/components/Icons/Instagram'
import { Twitter } from '@/components/Icons/Twitter'
import { GitHub } from '@/components/Icons/GitHub'
import { StoryblokComponent } from '@storyblok/react'

type ConfigProps = { blok: ConfigStoryblok }

export function Footer({ blok }: ConfigProps) {
  if (!blok) {
    return null
  }

  return (
    <footer
      className="block w-full bg-tertiary-2"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl p-12 lg:px-20 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8">
          {blok.footer_menu.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
      <div className="mx-auto bg-tertiary-3 px-5 py-6 sm:px-6 md:flex md:items-center md:justify-between lg:px-20">
        <div className="mb-8 flex justify-center space-x-6 md:order-last md:mb-0">
          {blok.facebook && (
            <a href={blok.facebook.url} className="text-dark">
              <span className="sr-only">Facebook</span>
              <Facebook />
            </a>
          )}
          {blok.instagram && (
            <a href={blok.instagram.url} className="text-dark">
              <span className="sr-only">Instagram</span>
              <Instagram />
            </a>
          )}
          {blok.twitter && (
            <a href={blok.twitter.url} className="text-dark">
              <span className="sr-only">Twitter</span>
              <Twitter />
            </a>
          )}
          {blok.github && (
            <a href={blok.github.url} className="text-dark">
              <span className="sr-only">GitHub</span>
              <GitHub />
            </a>
          )}
        </div>
        <div className="mt-8 text-center md:order-1 md:mt-0 md:text-left">
          <span className="mt-2 text-base font-light text-dark">
            Copyright © {blok.company_long} {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  )
}
