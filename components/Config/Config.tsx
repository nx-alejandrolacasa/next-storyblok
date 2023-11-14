import { ConfigStoryblok } from '@/types/sb-types'

type ConfigProps = {
  blok: ConfigStoryblok
}

export function Config({ blok }: ConfigProps) {
  return <pre>{JSON.stringify(blok, null, 2)}</pre>
}
