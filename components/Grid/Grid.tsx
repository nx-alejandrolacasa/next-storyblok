import type { GridStoryblok } from '@/types/sb-types'
import {
  type SbBlokData,
  StoryblokServerComponent,
  storyblokEditable,
} from '@storyblok/react/rsc'

type GridProps = { blok: GridStoryblok }

export const Grid = ({ blok }: GridProps) => {
  return (
    <div
      className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:grid-cols-3"
      {...storyblokEditable(blok)}
    >
      {blok.columns?.map((nestedBlok: SbBlokData) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
}
