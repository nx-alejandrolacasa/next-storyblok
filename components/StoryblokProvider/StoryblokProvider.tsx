'use client'

import { getStoryblokApi } from '@/lib/storyblok'
import { type ReactNode, useEffect } from 'react'

export default function StoryblokProvider({
  children,
}: {
  children: ReactNode
}) {
  getStoryblokApi()

  useEffect(() => {
    if (window.self !== window.top) {
      document.body.classList.add('is-storyblok-editor')
    }
  }, [])

  return children
}
