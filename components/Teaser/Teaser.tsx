import { storyblokEditable } from '@storyblok/react'
import { TeaserStoryblok } from '@/types/sb-types'

type TeaserProps = { blok: TeaserStoryblok }

const Teaser = ({ blok }: TeaserProps) => {
  return (
    <h2
      className="my-5 w-full text-center text-4xl text-dark"
      {...storyblokEditable(blok)}
    >
      {blok.headline}
    </h2>
  )
}

export default Teaser
