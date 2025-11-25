import { storyblokEditable } from '@storyblok/react'
import clsx from 'clsx'
import Link from 'next/link'
import type { SbMenuLink } from '@/types/sb-types'
import { getHrefFromLink } from '@/utils/links'

type MenuLinkProps = {
  blok: SbMenuLink
  className?: string
}

export function MenuLink({ blok, className }: MenuLinkProps) {
  const href = getHrefFromLink(blok.link)

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
