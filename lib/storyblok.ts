import { getStoryblokApi } from '@storyblok/react'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  const slug = Array.isArray(params?.slug)
    ? params?.slug.join('/')
    : params?.slug

  const sbParams = {
    version: preview ? 'draft' : 'published',
  }

  const storyblokApi = getStoryblokApi()
  let { data } = await storyblokApi.get(
    `cdn/stories/${slug ?? 'home'}`,
    sbParams
  )

  return {
    props: {
      story: data?.story ?? false,
      key: data?.story?.id ?? false,
      preview: preview ?? false,
    },
    revalidate: 3600,
  }
}
