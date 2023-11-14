'use client'

import Link from 'next/link'
import { storyblokEditable } from '@storyblok/react'
import { AnchorHTMLAttributes } from 'react'
import { ButtonStoryblok } from '@/types/sb-types'
import clsx from 'clsx'

type ButtonProps = {
  blok: ButtonStoryblok
  className?: string
}

export function Button({ blok }: ButtonProps) {
  const props = {
    className: clsx(
      'rounded-md px-5 py-3 text-center text-base font-semibold text-white transition-all',
      blok.type === 'primary' && 'bg-sky-500 hover:bg-sky-600',
      blok.type === 'secondary' && 'bg-amber-500 hover:bg-amber-600',
      blok.type === 'tertiary' && 'bg-rose-500 hover:bg-rose-600'
    ),
  }

  const LinkButton =
    blok.link?.linktype === 'story'
      ? Link
      : (props: AnchorHTMLAttributes<any>) => <a {...props}></a>

  if (blok.submit) {
    return (
      <button type="submit" {...props} {...storyblokEditable(blok)}>
        {blok.label}
      </button>
    )
  }

  return (
    <LinkButton
      role="button"
      href={blok.link?.cached_url ?? '#'}
      {...props}
      {...storyblokEditable(blok)}
    >
      {blok.label}
    </LinkButton>
  )
}
