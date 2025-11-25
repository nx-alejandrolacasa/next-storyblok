'use client'

import { type ReactNode, useEffect } from 'react'
import { getStoryblokApi } from '@/lib/storyblok'

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
