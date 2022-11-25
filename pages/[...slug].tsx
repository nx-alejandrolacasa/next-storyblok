import Head from 'next/head'
import styles from '@styles/Home.module.css'
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
    <div className={styles.container}>
      <Head>
        <title>{story ? story.name : 'Default title'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>{story ? story.name : 'My Site'}</h1>
      </header>

      <StoryblokComponent blok={story.content} />
    </div>
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
