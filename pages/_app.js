import Layout from '../components/layout/layout'
import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return <Layout>
    <Head>
      <meta name="viewport" content="width=device-width" />
      <title>hamidreza ghanbari profile</title>
      <meta name="description" content="hamidreza gahnbari profile and resume" />
    </Head>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
