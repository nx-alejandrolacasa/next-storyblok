import { storyblokEditable } from '@storyblok/react'
import Link from 'next/link'
import { MenuLinkStoryblok } from '@/types/sb-types'

type MenuLinkProps = { blok: MenuLinkStoryblok }

function MenuLink({ blok }: MenuLinkProps) {
  return (
    <Link
      href={blok.link?.cached_url}
      {...storyblokEditable(blok)}
      className="text-base font-bold text-dark hover:underline"
    >
      {blok.name}
    </Link>
  )
}
export default MenuLink
