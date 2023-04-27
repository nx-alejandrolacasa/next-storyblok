import Link from 'next/link'
import { storyblokEditable } from '@storyblok/react'
import { AnchorHTMLAttributes } from 'react'
import { ButtonStoryblok } from '@/types/sb-types'

type ButtonProps = { blok: ButtonStoryblok }

export function Button({ blok }: ButtonProps) {
  const className = `p-2 border-2 border-gray-100 rounded-xl text-center ${
    blok.type === 'primary' ? 'bg-rose-400' : 'bg-indigo-400 text-white'
  }`

  const LinkButton =
    blok.link?.linktype === 'story'
      ? Link
      : (props: AnchorHTMLAttributes<any>) => <a {...props}></a>

  if (blok.submit) {
    return (
      <button type="submit" className={className} {...storyblokEditable(blok)}>
        {blok.label}
      </button>
    )
  }

  return (
    <LinkButton
      role="button"
      href={blok.link?.cached_url ?? '#'}
      className={className}
      {...storyblokEditable(blok)}
    >
      {blok.label}
    </LinkButton>
  )
}
