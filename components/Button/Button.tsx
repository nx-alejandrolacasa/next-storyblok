import clsx from 'clsx'
import Link from 'next/link'
import { storyblokEditable } from '@storyblok/react'
import { AnchorHTMLAttributes } from 'react'
import { ButtonStoryblok } from '@/types/sb-types'

type ButtonProps = { blok: ButtonStoryblok }

export function Button({ blok }: ButtonProps) {
  const props = {
    className: clsx(
      'p-2 border-2 border-gray-100 rounded-xl text-center text-white text-cta',
      blok.type === 'primary' && 'bg-blue-1',
      blok.type === 'secondary' && 'bg-green-1'
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
