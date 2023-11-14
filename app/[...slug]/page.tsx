// @ts-ignore
import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc'
import { fetchStoriesBySlug, getParamsFromLinks } from '@/utils/storyblok'

export async function generateStaticParams() {
  const storyblokApi = getStoryblokApi()
  const { data } = await storyblokApi.get('cdn/links/', {
    version: 'published',
  })

  return getParamsFromLinks(data.links)
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { data } = await fetchStoriesBySlug(params.slug)

  return <StoryblokStory story={data.story} bridgeOptions={{}} />
}
