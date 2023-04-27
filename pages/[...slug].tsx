import Head from 'next/head'
import {
  getStoryblokApi,
  ISbStoryData,
  StoryblokComponent,
  useStoryblokState,
} from '@storyblok/react'
import { GetStaticPaths, NextPage } from 'next'
import { getPathsFromLinks } from '../utils/storyblok'

const Page: NextPage<{ story: ISbStoryData; preview?: boolean }> = ({
  story,
  preview,
}) => {
  story = useStoryblokState(story, {})

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

// @ts-ignore
export const getStaticPaths: GetStaticPaths = async ({ locales = ['en'] }) => {
  const storyblokApi = getStoryblokApi()
  const { data } = await storyblokApi.get('cdn/links/', {
    version: 'published',
  })

  return {
    paths: getPathsFromLinks(data.links, locales),
    fallback: false,
  }
}

export { getStaticProps } from '@lib/storyblok/index'

export default Page
