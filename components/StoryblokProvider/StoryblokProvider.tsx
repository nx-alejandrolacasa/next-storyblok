'use client'
import { ReactNode } from 'react'
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'
import { Button } from '@/components/Button/Button'
import { Feature } from '@/components/Feature/Feature'
import { Grid } from '@/components/Grid/Grid'
import { Layout } from '@/components/Layout/Layout'
import { MenuLink } from '@/components/MenuLink/MenuLink'
import { Page } from '@/components/Page/Page'
import { Teaser } from '@/components/Teaser/Teaser'

const components = {
  button: Button,
  config: () => null,
  feature: Feature,
  grid: Grid,
  layout: Layout,
  menu_link: MenuLink,
  page: Page,
  teaser: Teaser,
}

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  components,
  use: [apiPlugin],
})

export function StoryblokProvider({ children }: { children: ReactNode }) {
  return children
}
