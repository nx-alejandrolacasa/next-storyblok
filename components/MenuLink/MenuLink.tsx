import clsx from 'clsx'
import { Link } from 'next-view-transitions'
import { storyblokEditable } from '@storyblok/react'
import { MenuLinkStoryblok } from '@/types/sb-types'

type MenuLinkProps = {
  blok: MenuLinkStoryblok
  className?: string
}

export function MenuLink({ blok, className }: MenuLinkProps) {
  const href = blok.link?.story?.url ?? blok.link?.url

  return (
    <Link
      href={href}
      className={clsx('text-base text-slate-700 hover:underline', className)}
      {...storyblokEditable(blok)}
    >
      {blok.name}
    </Link>
  )
}
