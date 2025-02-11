'use client'
import { Button } from '@/components/Button/Button'
import { Config } from '@/components/Config/Config'
import { Feature } from '@/components/Feature/Feature'
import { Grid } from '@/components/Grid/Grid'
import { MenuLink } from '@/components/MenuLink/MenuLink'
import { Page } from '@/components/Page/Page'
import { Teaser } from '@/components/Teaser/Teaser'
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'
import { ReactNode } from 'react'

const components = {
  button: Button,
  config: Config,
  feature: Feature,
  grid: Grid,
  menu_link: MenuLink,
  page: Page,
  teaser: Teaser,
}

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
})

export default function StoryblokProvider({
  children,
}: {
  children: ReactNode
}) {
  return children
}
