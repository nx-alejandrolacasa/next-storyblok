import type { FeatureStoryblok } from '@/types/sb-types'
import { storyblokEditable } from '@storyblok/react'
import Image from 'next/image'

type FeatureProps = { blok: FeatureStoryblok }

export function Feature({ blok }: FeatureProps) {
  return (
    <div {...storyblokEditable(blok)}>
      <div className="p-6">
        <div className="w-full">
          <Image
            alt="feature image"
            className="mb-8 h-full w-auto rounded object-center"
            src={`${blok.image.filename}/m/800x533`}
            height={533}
            width={800}
          />
        </div>
        <h3 className="mx-auto my-4 text-3xl text-slate-700 leading-none tracking-tighter">
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
