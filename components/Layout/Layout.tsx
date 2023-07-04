import { ReactNode } from 'react'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { ISbStoryData } from '@storyblok/react'
import { ConfigStoryblok } from '@/types/sb-types'

type LayoutProps = {
  children: ReactNode
  story: ISbStoryData<ConfigStoryblok>
}

const Layout = ({ children, story }: LayoutProps) => (
  <div className="flex min-h-screen flex-col justify-between font-source">
    <Header blok={story?.content} />
    <main className="relative">{children}</main>
    <Footer blok={story?.content} />
  </div>
)

export default Layout
