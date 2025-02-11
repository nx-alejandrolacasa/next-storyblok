import { getStoryblokApi } from '@/lib/storyblok'
import type { ISbCustomFetch } from '@/types/types'
import type { ISbAlternateObject, ISbStoriesParams } from '@storyblok/react'
import { draftMode } from 'next/headers'

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
  const draft = await draftMode()

  const sbParams: ISbStoriesParams = {
    version: draft.isEnabled ? 'draft' : 'published',
    cv: Date.now(),
    ...params,
  }

  const storyblokApi = getStoryblokApi()
  return storyblokApi.get(
    `cdn/stories/${Array.isArray(slug) ? slug.join('/') : (slug ?? 'home')}`,
    sbParams,
    fetchOptions
  )
}
