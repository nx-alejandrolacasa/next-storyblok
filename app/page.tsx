import { fetchStoriesBySlug } from '@/utils/storyblok'
import { StoryblokStory } from '@storyblok/react/rsc'

export default async function Home() {
  const { data } = await fetchStoriesBySlug({
    slug: 'home',
  })
  return <StoryblokStory story={data.story} bridgeOptions={{}} />
}
