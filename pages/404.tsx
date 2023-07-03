import { NextPage } from 'next'
import { Error } from '@/components/Error/Error'
import Head from 'next/head'

const Error404Page: NextPage<{
  preview?: boolean
}> = () => {
  return (
    <>
      <Head>
        <title>Error 404</title>
        <meta name="description" content="Error 404" />
      </Head>
      <Error statusCode={404} />
    </>
  )
}

export { getErrorPagesStaticProps as getStaticProps } from '@/utils/next'

export default Error404Page
