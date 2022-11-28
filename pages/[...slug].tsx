import Head from 'next/head'
import {
  getStoryblokApi,
  StoryblokComponent,
  StoryData,
  useStoryblokState,
} from '@storyblok/react'
import { NextPage } from 'next'

const Page: NextPage<{ story: StoryData; preview?: boolean }> = ({
  story,
  preview,
}) => {
  story = useStoryblokState(story, {}, preview)

  return (
    <>
      <Head>
        <title>{story ? story.name : 'Default title'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StoryblokComponent blok={story.content} />
    </>
  )
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi()
  const { data } = await storyblokApi.get('cdn/links/')

  const paths = Object.keys(data.links)
    .map((key) => data.links[key])
    .filter((link) => !(link.is_folder || link.slug === 'home'))
    .map((link) => ({ params: { slug: link.slug.split('/') } }))

  return {
    paths,
    fallback: false,
  }
}

export { getStaticProps } from '@lib/storyblok'

export default Page
