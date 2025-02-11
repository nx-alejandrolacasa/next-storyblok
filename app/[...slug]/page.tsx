import { fetchStoriesBySlug, getParamsFromLinks } from '@/utils/storyblok'
import { StoryblokStory, getStoryblokApi } from '@storyblok/react/rsc'

export async function generateStaticParams() {
  const storyblokApi = getStoryblokApi()
  const { data } = await storyblokApi.get('cdn/links/', {
    version: 'published',
    cv: Date.now(),
  })

  return getParamsFromLinks(data.links)
}

export default async function Page({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { data } = await fetchStoriesBySlug({ slug })
  return <StoryblokStory story={data.story} />
}
