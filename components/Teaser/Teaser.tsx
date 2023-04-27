import { storyblokEditable } from '@storyblok/react'
import { TeaserStoryblok } from '@/types/sb-types'

type TeaserProps = { blok: TeaserStoryblok }

const Teaser = ({ blok }: TeaserProps) => {
  return (
    <h2 className="text-2xl mb-10" {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  )
}

export default Teaser
