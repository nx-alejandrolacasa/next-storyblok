import StoryblokStory from '@storyblok/react/story'
import { Source_Sans_3 } from 'next/font/google'
import { Layout } from '@/components/Layout/Layout'
import { fetchStories } from '@/utils/storyblok'

const source = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source',
  weight: ['400', '700', '900'],
})

export default async function Page({ params }: { params: { slug: string } }) {
  const { story, config } = await fetchStories(params)

  return (
    <div className={`${source.variable} font-source`}>
      <Layout story={config}>
        <StoryblokStory story={story} />
      </Layout>
    </div>
  )
}
