import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { apiPlugin, storyblokInit } from '@storyblok/react'
import Teaser from '@/components/Teaser/Teaser'
import Grid from '@/components/Grid/Grid'
import Page from '@/components/Page/Page'
import Feature from '@/components/Feature/Feature'
import MenuLink from '@/components/MenuLink/MenuLink'
import Layout from '@/components/Layout/Layout'
import { Button } from '@/components/Button/Button'
import { JobsList } from '@/components/JobsList/JobsList'
import { Theme } from '@/components/Theme/Theme'
import { Config } from '@/components/Config/Config'

const components = {
  button: Button,
  config: () => null,
  feature: Feature,
  grid: Grid,
  jobs_list: JobsList,
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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Theme blok={pageProps.config?.content} />
      <Layout story={pageProps.config}>
        {pageProps.isConfig ? <Config /> : <Component {...pageProps} />}
      </Layout>
    </>
  )
}
