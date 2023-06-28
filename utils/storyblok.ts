import { ISbAlternateObject, ISbStoriesParams } from '@storyblok/react'
import { getStoryblokApi } from '@storyblok/react/rsc'

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

export async function fetchStories(params: { slug?: string }) {
  const storyblokApi = getStoryblokApi()

  const { slug } = params

  const sbParams: ISbStoriesParams = {
    version: 'draft', // preview ? 'draft' : 'published',
    language: 'en', // locale,
  }

  const { data } = await storyblokApi.get(`cdn/stories/${slug ?? 'home'}`, {
    ...sbParams,
    resolve_links: 'url',
  })

  const { data: config } = await storyblokApi.get('cdn/stories/config', {
    ...sbParams,
    resolve_links: 'story',
  })

  return {
    config: config?.story ?? false,
    key: data?.story?.id ?? false,
    story: data?.story ?? false,
    // preview: preview ?? false,
  }
}
