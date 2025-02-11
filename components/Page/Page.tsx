import type { PageStoryblok } from '@/types/sb-types'
import {
  StoryblokServerComponent,
  storyblokEditable,
} from '@storyblok/react/rsc'

type PageProps = { blok: PageStoryblok }

export function Page({ blok }: PageProps) {
  return (
    <div
      className="mx-auto max-w-7xl flex-1 px-4 sm:px-6"
      {...storyblokEditable(blok)}
    >
      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
}
