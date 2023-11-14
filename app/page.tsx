import { StoryblokStory } from '@storyblok/react/rsc'
import { fetchData } from '@/utils/storyblok'

export default async function Home() {
  const { data } = await fetchData()
  return <StoryblokStory story={data.story} bridgeOptions={{}} />
}
