import {
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from '@storyblok/react'
import { GridStoryblok } from '@/types/sb-types'

type GridProps = { blok: GridStoryblok }

const Grid = ({ blok }: GridProps) => {
  return (
    <div
      className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:grid-cols-3"
      {...storyblokEditable(blok)}
    >
      {blok.columns?.map((nestedBlok: SbBlokData) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
}

export default Grid
