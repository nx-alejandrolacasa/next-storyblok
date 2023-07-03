import { ConfigStoryblok } from '@/types/sb-types'

type SbColor = {
  _uid: string
  color: string
  plugin: string
}

export type ExtendedConfigStoryblok = ConfigStoryblok & {
  primary_1: SbColor
  primary_2: SbColor
  primary_3: SbColor
  secondary_1: SbColor
  secondary_2: SbColor
  secondary_3: SbColor
  tertiary_1: SbColor
  tertiary_2: SbColor
  tertiary_3: SbColor
  accent: SbColor
  light: SbColor
  dark: SbColor
}
