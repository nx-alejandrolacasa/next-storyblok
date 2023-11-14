import { storyblokEditable } from '@storyblok/react'
import Link from 'next/link'
import { MenuLinkStoryblok } from '@/types/sb-types'
import clsx from 'clsx'

type MenuLinkProps = {
  blok: MenuLinkStoryblok
  className?: string
}

export function MenuLink({ blok, className }: MenuLinkProps) {
  const href = blok.link?.story?.url ?? blok.link?.url

  return (
    <Link
      href={href}
      className={clsx('text-base text-gray-700 hover:underline', className)}
      {...storyblokEditable(blok)}
    >
      {blok.name}
    </Link>
  )
}
