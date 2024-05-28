import { StoryblokStory } from '@storyblok/react/rsc'
import { fetchStoriesBySlug } from '@/utils/storyblok'

export default async function Home() {
  const { data } = await fetchStoriesBySlug({
    slug: 'home',
  })
  return <StoryblokStory story={data.story} bridgeOptions={{}} />
}
