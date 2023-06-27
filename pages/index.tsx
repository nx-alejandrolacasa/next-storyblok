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
  const sbState = useStoryblokState(story, {})

  return (
    <>
      <Head>
        <title>🏠</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StoryblokComponent blok={sbState?.content} />
    </>
  )
}

export { getStaticProps } from '@/lib/storyblok'

export default HomePage
