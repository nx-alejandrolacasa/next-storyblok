import { Button } from '@/components/Button/Button'
import { RichText } from '@/components/RichText/RichText'
import { TeaserStoryblok } from '@/types/sb-types'
import { storyblokEditable } from '@storyblok/react'

type TeaserProps = { blok: TeaserStoryblok }

export const Teaser = ({ blok }: TeaserProps) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h2 className="my-5 w-full text-center text-4xl text-slate-700">
        {blok.headline}
      </h2>
      {blok.description && (
        <RichText
          className="text-center text-base text-slate-700"
          text={blok.description}
        />
      )}
      {!!blok.cta?.length && (
        <div className="flex w-full justify-center py-4">
          <Button blok={blok.cta[0]} />
        </div>
      )}
    </div>
  )
}
