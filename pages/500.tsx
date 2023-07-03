import { NextPage } from 'next'
import { Error } from '@/components/Error/Error'
import Head from 'next/head'

const Error500Page: NextPage<{
  preview?: boolean
}> = () => {
  return (
    <>
      <Head>
        <title>Error 500</title>
        <meta name="description" content="Error 500" />
      </Head>
      <Error statusCode={500} />
    </>
  )
}

export { getErrorPagesStaticProps as getStaticProps } from '@/utils/next'

export default Error500Page
