import {
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from '@storyblok/react'

interface PageBlok extends SbBlokData {
  body: SbBlokData[]
}

type PageProps = { blok: PageBlok }

export default function Page({ blok }: PageProps) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  )
}
