import Head from 'next/head'
import { NextPage } from 'next'
import {
  StoryblokComponent,
  StoryData,
  useStoryblokState,
} from '@storyblok/react'

const HomePage: NextPage<{ story: StoryData; preview?: boolean }> = ({
  story,
  preview,
}) => {
  story = useStoryblokState(story, {}, preview)

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

export { getStaticProps } from '@lib/storyblok'

export default HomePage
