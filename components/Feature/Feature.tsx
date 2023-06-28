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
            className="mb-8 h-full w-auto rounded-xl object-center"
            height={533}
            src={`${blok.image.filename}/m/`}
            width={800}
          />
        </div>
        <h3 className="mx-auto my-4 text-3xl leading-none tracking-tighter text-dark">
          {blok.name}
        </h3>
        <div className="mt-4">
          <a
            href="#"
            className="mt-4 inline-flex items-center text-primary-1 hover:underline lg:mb-0"
            title="read more"
          >
            Read More &raquo;
          </a>
        </div>
      </div>
    </div>
  )
}
