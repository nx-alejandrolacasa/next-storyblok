import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { PageStoryblok } from '@/types/sb-types'

type PageProps = { blok: PageStoryblok }

export default function Page({ blok }: PageProps) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  )
}
