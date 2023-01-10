import { getStoryblokApi, ISbStoriesParams } from '@storyblok/react'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async ({
  locale,
  params,
  preview,
}) => {
  const storyblokApi = getStoryblokApi()
  const slug = Array.isArray(params?.slug)
    ? params?.slug.join('/')
    : params?.slug

  const sbParams: ISbStoriesParams = {
    version: preview ? 'draft' : 'published',
    language: locale,
  }

  const { data } = await storyblokApi.get(`cdn/stories/${slug ?? 'home'}`, {
    ...sbParams,
    resolve_links: 'url',
  })

  const { data: config } = await storyblokApi.get('cdn/stories/config', {
    ...sbParams,
    resolve_links: 'story',
  })

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
