import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { PageStoryblok } from '@/types/sb-types'

type PageProps = { blok: PageStoryblok }

export function Page({ blok }: PageProps) {
  return (
    <div
      className="mx-auto mb-8 px-8 lg:container"
      {...storyblokEditable(blok)}
    >
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
}
