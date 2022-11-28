import {
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from '@storyblok/react'

interface GridBlok extends SbBlokData {
  columns: SbBlokData[]
}

type GridProps = { blok: GridBlok }

const Grid = ({ blok }: GridProps) => {
  return (
    <div className="grid grid-cols-3 gap-4" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok: SbBlokData) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
}

export default Grid
