import { storyblokEditable } from '@storyblok/react'
import { FeatureStoryblok } from '@/types/sb-types'
import Image from 'next/image'

type FeatureProps = { blok: FeatureStoryblok }

function Feature({ blok }: FeatureProps) {
  return (
    <div {...storyblokEditable(blok)}>
      <div className="p-6">
        <div className="h-36 lg:h-48">
          <Image
            alt="feature"
            className="mb-8 h-auto w-full rounded-xl object-center"
            height={533}
            src={`${blok.image.filename}/m/`}
            width={800}
          />
        </div>
        <h3 className="mx-auto mb-8 text-h3 leading-none tracking-tighter text-blue-3 lg:text-foreground">
          {blok.name}
        </h3>
        <div className="mt-4">
          <a
            href="#"
            className="mt-4 inline-flex items-center text-blue-2 hover:text-gray-1 lg:mb-0"
            title="read more"
          >
            Read More &raquo;
          </a>
        </div>
      </div>
    </div>
  )
}

export default Feature
