import Layout from '../components/layout/layout'
import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return <Layout>
    <Head>
      <title>hamidreza ghanbari profile</title>
      <meta name="description" content="hamidreza gahnbari profile and resume" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="keywords" content="hamidreza ghanbari, nextjs, react, pwa" />
      <meta name="author" content="Hamidreza ghanbari" />

      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#006eff" />
      <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
      <link href="/favicon.ico" rel="apple-touch-icon" />

    </Head>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
