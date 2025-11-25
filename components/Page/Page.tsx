import {
  StoryblokServerComponent,
  storyblokEditable,
} from '@storyblok/react/rsc'
import type { SbPage } from '@/types/sb-types'

type PageProps = { blok: SbPage }

export function Page({ blok }: PageProps) {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
}
