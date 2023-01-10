import { ReactNode } from 'react'
import Footer from '@components/Footer/Footer'
import Config, { ConfigBlok } from '@components/Config/Config'
import { ISbStoryData } from '@storyblok/react'

type LayoutProps = {
  children: ReactNode
  story: ISbStoryData<ConfigBlok>
}

const Layout = ({ children, story }: LayoutProps) => (
  <>
    <Config blok={story?.content} />
    <div className="p-8">{children}</div>
    <Footer />
  </>
)

export default Layout
