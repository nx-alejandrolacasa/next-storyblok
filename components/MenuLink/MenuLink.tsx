import { SbBlokData, storyblokEditable } from '@storyblok/react'
import Link from 'next/link'

interface MenuLinkBlok extends SbBlokData {
  link: {
    cached_url: string
  }
  name: string
}

type MenuLinkProps = { blok: MenuLinkBlok }

function MenuLink({ blok }: MenuLinkProps) {
  return (
    <Link
      href={blok.link.cached_url}
      {...storyblokEditable(blok)}
      className="text-base font-medium text-gray-500 hover:text-gray-900"
    >
      {blok.name}
    </Link>
  )
}
export default MenuLink
