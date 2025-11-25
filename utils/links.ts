import type { StoryblokMultilink } from '@/types/sb-types'

export function getHrefFromLink(link: StoryblokMultilink): string {
  // Priority order: fresh resolved data > cached data > fallback
  if (link?.story) {
    if ('url' in link.story && link.story.url) {
      return link.story.url
    }
    if ('full_slug' in link.story && link.story.full_slug) {
      return link.story.full_slug
    }
  }

  return link?.cached_url || link?.url || '#'
}
