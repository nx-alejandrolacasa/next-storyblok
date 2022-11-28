import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { apiPlugin, storyblokInit } from '@storyblok/react'
import Teaser from '@components/Teaser/Teaser'
import Grid from '@components/Grid/Grid'
import Page from '@components/Page/Page'
import Feature from '@components/Feature/Feature'
import MenuLink from '@components/MenuLink/MenuLink'
import HeaderMenu from '@components/HeaderMenu/HeaderMenu'
import Layout from '@components/Layout/Layout'
import Config from '@components/Config/Config'
import { Button } from '@components/Button/Button'

const components = {
  feature: Feature,
  button: Button,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  config: Config,
  layout: Layout,
  header_menu: HeaderMenu,
  menu_link: MenuLink,
}

storyblokInit({
  accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
  components,
  use: [apiPlugin],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout story={pageProps.config}>
      <Component {...pageProps} />
    </Layout>
  )
}