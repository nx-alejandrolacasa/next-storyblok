import { draftMode } from 'next/headers'
import { ISbCustomFetch } from '@/types/types'
import { getStoryblokApi } from '@storyblok/react/rsc'
import { ISbAlternateObject, ISbStoriesParams } from '@storyblok/react'

export function getParamsFromLinks(links: Record<string, ISbAlternateObject>) {
  return Object.keys(links)
    .map((key) => links[key])
    .filter(
      (link) =>
        !link.is_folder &&
        link.slug !== 'home' &&
        link.slug !== 'config' &&
        link.published
    )
    .map((link) => ({ slug: link.slug.split('/') }))
}

export async function fetchStoriesBySlug({
  fetchOptions,
  slug,
  params,
}: {
  slug?: string | string[]
  fetchOptions?: ISbCustomFetch
  params?: ISbStoriesParams
}) {
  const { isEnabled } = draftMode()

  const sbParams: ISbStoriesParams = {
    version: isEnabled ? 'draft' : 'published',
    cv: Date.now(),
    ...params,
  }

  const storyblokApi = getStoryblokApi()
  return storyblokApi.get(
    `cdn/stories/${Array.isArray(slug) ? slug.join('/') : slug ?? 'home'}`,
    sbParams,
    fetchOptions
  )
}
