import { getStoryblokApi, ISbStoriesParams } from '@storyblok/react'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async ({
  locale,
  params,
  preview,
}) => {
  const slug = Array.isArray(params?.slug)
    ? params?.slug.join('/')
    : params?.slug

  if (slug === 'config' && !preview) {
    return {
      notFound: true,
    }
  }

  const storyblokApi = getStoryblokApi()

  const sbParams: ISbStoriesParams = {
    language: locale,
    version: preview ? 'draft' : 'published',
  }

  const { data } = await storyblokApi.get(
    `cdn/stories/${slug && slug !== 'config' ? slug : 'home'}`,
    {
      ...sbParams,
      resolve_links: 'url',
    }
  )

  const { data: config } = await storyblokApi.get('cdn/stories/config', {
    ...sbParams,
    resolve_links: 'story',
  })

  if (!data?.story || !config?.story) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      config: config?.story ?? false,
      isConfig: slug === 'config',
      preview: preview ?? false,
      story: data?.story ?? false,
    },
    revalidate: 3600,
  }
}

export const getErrorPagesStaticProps: GetStaticProps = async ({
  locale,
  preview,
}) => {
  const storyblokApi = getStoryblokApi()

  const sbParams: ISbStoriesParams = {
    language: locale,
    resolve_links: 'url',
    version: preview ? 'draft' : 'published',
  }

  const { data: config } = await storyblokApi.get(
    'cdn/stories/config',
    sbParams
  )

  if (!config?.story) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      config: config?.story ?? false,
      preview: preview ?? false,
    },
    revalidate: 3600,
  }
}
