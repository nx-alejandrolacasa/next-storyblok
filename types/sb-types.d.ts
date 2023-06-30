export type MultilinkStoryblok =
  | {
      cached_url?: string
      linktype?: string
      [k: string]: any
    }
  | {
      id?: string
      cached_url?: string
      anchor?: string
      linktype?: 'story'
      story?: {
        name: string
        created_at?: string
        published_at?: string
        id: number
        uuid: string
        content?: {
          [k: string]: any
        }
        slug: string
        full_slug: string
        sort_by_date?: null | string
        position?: number
        tag_list?: string[]
        is_startpage?: boolean
        parent_id?: null | number
        meta_data?: null | {
          [k: string]: any
        }
        group_id?: string
        first_published_at?: string
        release_id?: null | number
        lang?: string
        path?: null | string
        alternates?: any[]
        default_full_slug?: null | string
        translated_slugs?: null | any[]
        [k: string]: any
      }
      [k: string]: any
    }
  | {
      url?: string
      cached_url?: string
      anchor?: string
      linktype?: 'asset' | 'url'
      [k: string]: any
    }
  | {
      email?: string
      linktype?: 'email'
      [k: string]: any
    }

export interface ButtonStoryblok {
  label: string
  link?: MultilinkStoryblok
  type: 'primary' | 'secondary' | 'tertiary'
  _uid: string
  component: 'button'
  [k: string]: any
}

export interface ConfigStoryblok {
  header_menu?: MenuLinkStoryblok[]
  _uid: string
  component: 'config'
  [k: string]: any
}

export interface AssetStoryblok {
  alt?: string
  copyright?: string
  id: number
  filename: string
  name: string
  title?: string
  focus?: string
  [k: string]: any
}

export interface FeatureStoryblok {
  name?: string
  image: AssetStoryblok
  _uid: string
  component: 'feature'
  [k: string]: any
}

export interface GridStoryblok {
  columns?: any[]
  _uid: string
  component: 'grid'
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

export interface JobsListStoryblok {
  headline?: string
  description?: RichtextStoryblok
  _uid: string
  component: 'jobs_list'
  [k: string]: any
}

export interface MenuLinkStoryblok {
  name?: string
  link?: MultilinkStoryblok
  _uid: string
  component: 'menu_link'
  [k: string]: any
}

export interface PageStoryblok {
  body?: any[]
  _uid: string
  component: 'page'
  uuid?: string
  [k: string]: any
}

export interface TeaserStoryblok {
  headline?: string
  description?: RichtextStoryblok
  cta?: ButtonStoryblok[]
  asset?: AssetStoryblok
  _uid: string
  component: 'teaser'
  [k: string]: any
}
