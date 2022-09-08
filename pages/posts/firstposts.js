import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title color={variable.primaryColor}>First Post Title</title>
      </Head>

      <h1>First Post</h1>
      <Link href="/">Turn Back Home</Link>
    </>
  )
}
