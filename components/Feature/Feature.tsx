import { storyblokEditable } from '@storyblok/react'
import { FeatureStoryblok } from '@/types/sb-types'
import Image from 'next/image'

type FeatureProps = { blok: FeatureStoryblok }

export function Feature({ blok }: FeatureProps) {
  return (
    <div {...storyblokEditable(blok)}>
      <div className="p-6">
        <div className="h-36 lg:h-48">
          <Image
            alt="feature image"
            className="mb-8 h-full w-auto rounded object-center"
            height={533}
            src={`${blok.image.filename}/m/`}
            width={800}
          />
        </div>
        <h3 className="mx-auto my-4 text-3xl leading-none tracking-tighter text-slate-700">
          {blok.name}
        </h3>
        {blok.link && blok.link_label && (
          <div className="mt-4">
            <a
              href={`/${blok.link.cached_url}`}
              className="mt-4 inline-flex items-center text-slate-500 hover:underline lg:mb-0"
              title={blok.link_label}
            >
              {blok.link_label} &raquo;
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
