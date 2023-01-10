import {
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from '@storyblok/react'
import Link from 'next/link'

export interface ConfigBlok extends SbBlokData {
  header_menu: SbBlokData[]
}

type ConfigProps = { blok: ConfigBlok }

function Config({ blok }: ConfigProps) {
  if (!blok) {
    return null
  }

  return (
    <div
      className="relative bg-white border-b-2 border-gray-100"
      {...storyblokEditable(blok)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">Storyblok logo</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-20 w-auto sm:h-10"
                src="https://a.storyblok.com/f/88751/92x106/835caf912a/storyblok-logo.png"
                alt="Stoyblok"
              />
            </Link>
          </div>
          {blok.header_menu.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Config
