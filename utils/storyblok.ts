import { draftMode } from 'next/headers'
import { getStoryblokApi } from '@storyblok/react/rsc'
import { ISbAlternateObject, ISbStoriesParams } from '@storyblok/react'

export function getPathsFromLinks(
  links: Record<string, ISbAlternateObject>,
  locales: string[]
) {
  return Object.keys(links)
    .map((key) => links[key])
    .filter((link) => !link.is_folder && link.slug !== 'home' && link.published)
    .flatMap((link) =>
      locales.map((locale) => ({
        params: { slug: link.slug.split('/') },
        locale,
      }))
    )
}

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

export async function fetchData(slug?: string) {
  const { isEnabled } = draftMode()
  let sbParams: ISbStoriesParams = {
    version: isEnabled ? 'draft' : 'published',
    cv: Date.now(),
  }

  const storyblokApi = getStoryblokApi()
  return storyblokApi.get(`cdn/stories/${slug ?? 'home'}`, sbParams)
}
