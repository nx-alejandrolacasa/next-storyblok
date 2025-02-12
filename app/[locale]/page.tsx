import { fetchStoriesBySlug } from '@/utils/storyblok'
import { StoryblokStory } from '@storyblok/react/rsc'
import { setRequestLocale } from 'next-intl/server'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { slug, locale } = await params

  const { data } = await fetchStoriesBySlug({
    slug: slug ?? 'home',
    params: { language: locale },
  })

  return {
    title: data.story.content.seo?.title,
    description: data.story.content.seo?.description,
  }
}
export default async function Page({
  params,
}: { params: Promise<{ locale: string; slug: string }> }) {
  const { slug, locale } = await params

  setRequestLocale(locale)

  const { data } = await fetchStoriesBySlug({
    slug: slug ?? 'home',
    params: { language: locale },
  })

  return <StoryblokStory story={data.story} />
}
