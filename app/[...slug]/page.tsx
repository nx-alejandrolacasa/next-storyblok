import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc'
import { fetchStoriesBySlug, getParamsFromLinks } from '@/utils/storyblok'

export async function generateStaticParams() {
  const storyblokApi = getStoryblokApi()
  const { data } = await storyblokApi.get('cdn/links/', {
    version: 'published',
    cv: Date.now(),
  })

  return getParamsFromLinks(data.links)
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { data } = await fetchStoriesBySlug(params.slug, {
    next: { revalidate: 3600 },
  })
  return <StoryblokStory story={data.story} bridgeOptions={{}} />
}
