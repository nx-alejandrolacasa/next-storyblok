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
import { Source_Sans_3 } from 'next/font/google'
import { JobsList } from '@/components/JobsList/JobsList'

const source = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source',
  weight: ['400', '700', '900'],
})

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
      <Layout story={pageProps.config}>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>{`
        :root {
          --font-source: ${source.style.fontFamily};
        }
      `}</style>
    </>
  )
}
