'use client'

import type { ButtonStoryblok } from '@/types/sb-types'
import { storyblokEditable } from '@storyblok/react'
import { cva } from 'class-variance-authority'
import Link from 'next/link'
import type { AnchorHTMLAttributes } from 'react'

type ButtonProps = {
  blok: ButtonStoryblok
  className?: string
}

const buttonVariants = cva(
  'rounded-md px-5 py-3 text-center text-base font-semibold transition-all',
  {
    variants: {
      variant: {
        primary: 'text-white bg-amber-500 hover:bg-amber-500/90',
        secondary:
          'text-amber-500 border border-amber-500 hover:text-amber-500/90 hover:border-amber-500/90',
        tertiary:
          'text-amber-500 bg-rose-50 hover:bg-rose-50/90 hover:text-amber-500/90',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

export function Button({ blok }: ButtonProps) {
  const LinkButton =
    blok.link?.linktype === 'story'
      ? Link
      : (props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />

  if (blok.submit) {
    return (
      <button
        type="submit"
        className={buttonVariants({ variant: blok.type })}
        {...storyblokEditable(blok)}
      >
        {blok.label}
      </button>
    )
  }

  return (
    <LinkButton
      href={blok.link?.cached_url ?? '#'}
      className={buttonVariants({ variant: blok.type })}
      {...storyblokEditable(blok)}
    >
      {blok.label}
    </LinkButton>
  )
}
