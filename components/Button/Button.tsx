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
      'rounded-elements p-3 text-center text-base font-semibold text-white transition-all',
      blok.type === 'primary' && 'bg-primary-1 hover:bg-primary-2',
      blok.type === 'secondary' && 'bg-secondary-1 hover:bg-secondary-2',
      blok.type === 'tertiary' && 'bg-tertiary-1 hover:bg-tertiary-2'
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
