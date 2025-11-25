import {
  type SbBlokData,
  StoryblokServerComponent,
  storyblokEditable,
} from '@storyblok/react/rsc'
import type { SbGrid } from '@/types/sb-types'

type GridProps = { blok: SbGrid }

export const Grid = ({ blok }: GridProps) => {
  return (
    <section
      className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6"
      {...storyblokEditable(blok)}
    >
      <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
        {blok.columns?.map((nestedBlok: SbBlokData) => (
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </section>
  )
}
