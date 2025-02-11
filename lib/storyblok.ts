import { Button } from '@/components/Button/Button'
import { Config } from '@/components/Config/Config'
import { Feature } from '@/components/Feature/Feature'
import { Grid } from '@/components/Grid/Grid'
import { MenuLink } from '@/components/MenuLink/MenuLink'
import { Page } from '@/components/Page/Page'
import { Teaser } from '@/components/Teaser/Teaser'
import {
  type SbReactComponentsMap,
  apiPlugin,
  storyblokInit,
} from '@storyblok/react/rsc'

const components: SbReactComponentsMap = {
  button: Button,
  config: Config,
  feature: Feature,
  grid: Grid,
  menu_link: MenuLink,
  page: Page,
  teaser: Teaser,
}

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.PUBLIC_NEXT_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
})
