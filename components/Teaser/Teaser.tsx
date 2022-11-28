import { SbBlokData, storyblokEditable } from '@storyblok/react'

interface TeaserBlok extends SbBlokData {
  headline: string
}

type TeaserProps = { blok: TeaserBlok }

const Teaser = ({ blok }: TeaserProps) => {
  return (
    <h2 className="text-2xl mb-10" {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  )
}

export default Teaser
