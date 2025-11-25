import type { SbConfig } from '@/types/sb-types'

type ConfigProps = {
  blok: SbConfig
}

export function Config({ blok }: ConfigProps) {
  return <pre>{JSON.stringify(blok, null, 2)}</pre>
}
