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
        primary: 'text-white bg-sky-500 hover:bg-sky-500/90',
        secondary:
          'text-sky-500 border border-sky-500 hover:text-sky-500/90 hover:border-sky-500/90',
        tertiary:
          'text-sky-500 bg-rose-50 hover:bg-rose-50/90 hover:text-sky-500/90',
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
