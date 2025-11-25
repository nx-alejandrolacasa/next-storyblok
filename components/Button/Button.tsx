'use client'

import { storyblokEditable } from '@storyblok/react'
import { cva } from 'class-variance-authority'
import Link from 'next/link'
import type { AnchorHTMLAttributes } from 'react'
import type { SbButton } from '@/types/sb-types'

type ButtonProps = {
  blok: SbButton
  className?: string
}

const buttonVariants = cva(
  'rounded-md px-5 py-3 text-center font-semibold text-base transition-all',
  {
    variants: {
      variant: {
        primary: 'bg-sky-500 text-white hover:bg-sky-500/90',
        secondary:
          'border border-sky-500 text-sky-500 hover:border-sky-500/90 hover:text-sky-500/90',
        tertiary:
          'bg-rose-50 text-sky-500 hover:bg-rose-50/90 hover:text-sky-500/90',
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
