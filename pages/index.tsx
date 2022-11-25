import Head from 'next/head'
import styles from '@styles/Home.module.css'
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
    <div className={styles.container}>
      <Head>
        <title>🏠</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>{story ? story.name : 'My Site'}</h1>
      </header>

      <StoryblokComponent blok={story.content} />
    </div>
  )
}

export { getStaticProps } from '@lib/storyblok'
export default HomePage
