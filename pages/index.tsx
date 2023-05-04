import Head from 'next/head'
import { NextPage } from 'next'
import {
  ISbStoryData,
  StoryblokComponent,
  useStoryblokState,
} from '@storyblok/react'

const HomePage: NextPage<{ story: ISbStoryData; preview?: boolean }> = ({
  story,
  preview,
}) => {
  story = useStoryblokState(story, {})

  return (
    <>
      <Head>
        <title>🏠</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StoryblokComponent blok={story.content} />
    </>
  )
}

export { getStaticProps } from '@/lib/storyblok/index'

export default HomePage
