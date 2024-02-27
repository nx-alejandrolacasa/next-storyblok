import { StoryblokStory } from '@storyblok/react/rsc'
import { fetchStoriesBySlug } from '@/utils/storyblok'

export default async function Home() {
  const { data } = await fetchStoriesBySlug({
    slug: 'home',
    // fetchOptions: { next: { revalidate: 3600 } },
    // params: { resolve_relations: 'team.teamMembers' },
  })
  return <StoryblokStory story={data.story} bridgeOptions={{}} />
}
