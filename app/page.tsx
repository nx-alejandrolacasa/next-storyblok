import StoryblokStory from '@storyblok/react/story'
import { Layout } from '@/components/Layout/Layout'
import { fetchStories } from '@/utils/storyblok'

export default async function Home({ params }: { params: { slug: string } }) {
  const { story, config } = await fetchStories(params)

  return (
    <Layout story={config}>
      <StoryblokStory story={story} />
    </Layout>
  )
}
