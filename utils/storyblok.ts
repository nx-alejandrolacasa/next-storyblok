import { ISbAlternateObject } from '@storyblok/react'

export function getPathsFromLinks(
  links: Record<string, ISbAlternateObject>,
  locales: string[]
) {
  return Object.keys(links)
    .map((key) => links[key])
    .filter((link) => !(link.is_folder || link.slug === 'home'))
    .flatMap((link) =>
      locales.flatMap((locale) => [
        { params: { slug: link.slug.split('/') }, locale },
      ])
    )
}
