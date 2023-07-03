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
      'rounded-elements px-5 py-3 text-center text-base font-semibold transition-all',
      blok.type === 'primary' &&
        'bg-primary-1 text-primary-text hover:bg-primary-2',
      blok.type === 'secondary' &&
        'bg-secondary-1 text-secondary-text hover:bg-secondary-2',
      blok.type === 'tertiary' &&
        'bg-tertiary-1 text-tertiary-text hover:bg-tertiary-2'
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
