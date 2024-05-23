import { StoryblokStory } from 'storyblok-generate-ts'

export type MultilinkStoryblok =
  | {
      id?: string
      cached_url?: string
      anchor?: string
      linktype?: 'story'
      target?: '_self' | '_blank'
      [k: string]: any
    }
  | {
      url?: string
      cached_url?: string
      anchor?: string
      linktype?: 'asset' | 'url'
      target?: '_self' | '_blank'
      [k: string]: any
    }
  | {
      email?: string
      linktype?: 'email'
      target?: '_self' | '_blank'
      [k: string]: any
    }

export interface ButtonStoryblok {
  label: string
  link?: Exclude<
    MultilinkStoryblok,
    { linktype?: 'email' } | { linktype?: 'asset' }
  >
  submit?: boolean
  type: 'primary' | 'secondary' | 'tertiary'
  _uid: string
  component: 'button'
  [k: string]: any
}

export interface ConfigStoryblok {
  header_menu?: MenuLinkStoryblok[]
  footer_menu?: MenuLinkStoryblok[]
  _uid: string
  component: 'config'
  [k: string]: any
}

export interface AssetStoryblok {
  _uid?: string
  id: number
  alt?: string
  name: string
  focus?: string
  source?: string
  title?: string
  filename: string
  copyright?: string
  fieldtype?: string
  meta_data?: null | {
    [k: string]: any
  }
  is_external_url?: boolean
  [k: string]: any
}

export interface FeatureStoryblok {
  name?: string
  image: AssetStoryblok
  link_label?: string
  link?: Exclude<
    MultilinkStoryblok,
    { linktype?: 'email' } | { linktype?: 'asset' }
  >
  _uid: string
  component: 'feature'
  [k: string]: any
}

export interface GridStoryblok {
  columns?: (
    | ButtonStoryblok
    | ConfigStoryblok
    | FeatureStoryblok
    | GridStoryblok
    | MenuLinkStoryblok
    | PageStoryblok
    | TeaserStoryblok
  )[]
  _uid: string
  component: 'grid'
  [k: string]: any
}

export interface MenuLinkStoryblok {
  name?: string
  link?: Exclude<
    MultilinkStoryblok,
    { linktype?: 'email' } | { linktype?: 'asset' }
  >
  _uid: string
  component: 'menu_link'
  [k: string]: any
}

export interface PageStoryblok {
  body?: (
    | ButtonStoryblok
    | ConfigStoryblok
    | FeatureStoryblok
    | GridStoryblok
    | MenuLinkStoryblok
    | PageStoryblok
    | TeaserStoryblok
  )[]
  _uid: string
  component: 'page'
  uuid?: string
  [k: string]: any
}

export interface RichtextStoryblok {
  type: string
  content?: RichtextStoryblok[]
  marks?: RichtextStoryblok[]
  attrs?: any
  text?: string
  [k: string]: any
}

export interface TeaserStoryblok {
  headline?: string
  cta?: ButtonStoryblok[]
  description?: RichtextStoryblok
  _uid: string
  component: 'teaser'
  [k: string]: any
}
