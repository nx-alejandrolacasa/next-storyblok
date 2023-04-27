import {
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from '@storyblok/react'
import { GridStoryblok } from '@/types/sb-types'

type GridProps = { blok: GridStoryblok }

const Grid = ({ blok }: GridProps) => {
  return (
    <div className="grid grid-cols-3 gap-4" {...storyblokEditable(blok)}>
      {blok.columns?.map((nestedBlok: SbBlokData) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
}

export default Grid
