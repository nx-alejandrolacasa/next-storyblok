import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { apiPlugin, storyblokInit } from '@storyblok/react'
import Teaser from '@components/Teaser/Teaser'
import Grid from '@components/Grid/Grid'
import Page from '@components/Page/Page'
import Feature from '@components/Feature/Feature'

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
}

storyblokInit({
  accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
  components,
  use: [apiPlugin],
})

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
