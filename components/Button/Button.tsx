import Link from 'next/link'
import { storyblokEditable } from '@storyblok/react'
import { AnchorHTMLAttributes } from 'react'
import { ButtonStoryblok } from '@/types/sb-types'
import clsx from 'clsx'

type ButtonProps = { blok: ButtonStoryblok }

export function Button({ blok }: ButtonProps) {
  const props = {
    className: clsx(
      'rounded-xl p-2 text-center text-cta text-white transition-all',
      blok.type === 'primary' && 'bg-blue-1 hover:bg-blue-2',
      blok.type === 'secondary' && 'bg-red-1 hover:bg-red-2'
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
