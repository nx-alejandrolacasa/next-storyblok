import {
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from '@storyblok/react'

interface HeaderMenuBlok extends SbBlokData {
  links: SbBlokData[]
}

type HeaderMenuProps = { blok: HeaderMenuBlok }

function HeaderMenu({ blok }: HeaderMenuProps) {
  return (
    <div
      className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-10"
      {...storyblokEditable(blok)}
    >
      {blok.links.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
}
export default HeaderMenu
