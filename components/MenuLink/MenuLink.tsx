import { storyblokEditable } from '@storyblok/react'
import Link from 'next/link'
import { MenuLinkStoryblok } from '@/types/sb-types'

type MenuLinkProps = { blok: MenuLinkStoryblok }

function MenuLink({ blok }: MenuLinkProps) {
  return (
    <Link
      href={blok.link?.cached_url}
      {...storyblokEditable(blok)}
      className="text-regular font-medium text-gray-1 hover:text-foreground"
    >
      {blok.name}
    </Link>
  )
}
export default MenuLink
