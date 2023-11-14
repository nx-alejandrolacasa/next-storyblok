// @ts-ignore
import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc'
import { fetchData, getParamsFromLinks } from '@/utils/storyblok'

export async function generateStaticParams() {
  const storyblokApi = getStoryblokApi()
  const { data } = await storyblokApi.get('cdn/links/', {
    version: 'published',
  })

  return getParamsFromLinks(data.links)
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { data } = await fetchData(params.slug)

  return <StoryblokStory story={data.story} bridgeOptions={{}} />
}
