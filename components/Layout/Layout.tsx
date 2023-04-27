import { ReactNode } from 'react'
import Footer from '@/components/Footer/Footer'
import Config from '@/components/Config/Config'
import { ISbStoryData } from '@storyblok/react'
import { ConfigStoryblok } from '@/types/sb-types'

type LayoutProps = {
  children: ReactNode
  story: ISbStoryData<ConfigStoryblok>
}

const Layout = ({ children, story }: LayoutProps) => (
  <>
    <Config blok={story?.content} />
    <div className="p-8">{children}</div>
    <Footer />
  </>
)

export default Layout
