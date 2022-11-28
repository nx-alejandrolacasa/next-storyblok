import { SbBlokData, storyblokEditable } from '@storyblok/react'
import Link from 'next/link'

interface ButtonBlok extends SbBlokData {
  label: string
  link?: {
    cached_url: string
    linktype: 'url' | 'story'
  }
  submit?: boolean
  type: 'primary' | 'secondary'
}

type ButtonProps = { blok: ButtonBlok }

export function Button({ blok }: ButtonProps) {
  const className = `p-2 border-2 border-gray-100 rounded-xl text-center ${
    blok.type === 'primary' ? 'bg-rose-400' : 'bg-indigo-400 text-white'
  }`

  const linkButton = (
    <a
      href={blok.link?.cached_url}
      className={className}
      {...storyblokEditable(blok)}
    >
      {blok.label}
    </a>
  )

  if (blok.submit) {
    return (
      <button type="submit" className={className} {...storyblokEditable(blok)}>
        {blok.label}
      </button>
    )
  }

  return blok.link?.linktype === 'story' ? (
    <Link href={blok.link?.cached_url} legacyBehavior>
      {linkButton}
    </Link>
  ) : (
    linkButton
  )
}
