import { MenuGroupStoryblok } from '@/types/sb-types'
import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import Link from 'next/link'

type MenuGroupProps = { blok: MenuGroupStoryblok }

export function MenuGroup({ blok }: MenuGroupProps) {
  const href = blok.link?.story?.url ?? blok.link?.url

  const title = (
    <h3 className="text-3xl font-semibold uppercase tracking-wider text-dark">
      {blok.name}
    </h3>
  )

  return (
    <div className="mt-12 md:mt-0" {...storyblokEditable(blok)}>
      {href ? <Link href={href}>{title}</Link> : title}
      <ul role="list" className="mt-4 space-y-4">
        {blok.sublinks.map((nestedBlok) => (
          <li key={nestedBlok._uid}>
            <StoryblokComponent blok={nestedBlok} />
          </li>
        ))}
      </ul>
    </div>
  )
}
