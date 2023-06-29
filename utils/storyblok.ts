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

export async function fetchStories(params: { slug?: string }, language = 'en') {
  const { slug } = params
  const storyblokApi = getStoryblokApi()

  const sbParams: ISbStoriesParams = {
    version: 'draft', // preview ? 'draft' : 'published',
    language,
  }

  const { data } = await storyblokApi.get(`cdn/stories/${slug ?? 'home'}`, {
    ...sbParams,
    resolve_links: 'url',
  })

  if (!data?.story) {
    throw Error('Story not found')
  }

  const { data: config } = await storyblokApi.get('cdn/stories/config', {
    ...sbParams,
    resolve_links: 'story',
  })

  return {
    config: config?.story ?? false,
    story: data?.story ?? false,
  }
}
