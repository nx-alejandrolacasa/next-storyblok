import { storyblokEditable } from '@storyblok/react'
import Link from 'next/link'
import { MenuLinkStoryblok } from '@/types/sb-types'

type MenuLinkProps = { blok: MenuLinkStoryblok }

export function MenuLink({ blok }: MenuLinkProps) {
  return (
    <Link
      className="text-base font-bold text-dark hover:underline"
      href={blok.link?.story?.path ?? blok.link?.cached_url}
      {...storyblokEditable(blok)}
    >
      {blok.name}
    </Link>
  )
}
