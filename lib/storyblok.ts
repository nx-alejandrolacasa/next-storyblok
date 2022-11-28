import { getStoryblokApi } from '@storyblok/react'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  const slug = Array.isArray(params?.slug)
    ? params?.slug.join('/')
    : params?.slug

  const sbParams = {
    version: preview ? 'draft' : 'published',
    resolve_links: 'url',
  }

  const storyblokApi = getStoryblokApi()
  const { data } = await storyblokApi.get(
    `cdn/stories/${slug ?? 'home'}`,
    sbParams
  )
  const { data: config } = await storyblokApi.get(
    'cdn/stories/config',
    sbParams
  )

  return {
    props: {
      config: config?.story ?? false,
      key: data?.story?.id ?? false,
      preview: preview ?? false,
      story: data?.story ?? false,
    },
    revalidate: 3600,
  }
}
