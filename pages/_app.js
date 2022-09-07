import '../styles/globals.css'
import '../styles/nprogress.css'

import Head from 'next/head'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import dynamic from 'next/dynamic'
import Loader from '../components/loader/loader'
const PageComponent = dynamic(() => import('./page.component'),
  { loading: () => <Loader /> })

import NProgress from 'nprogress'
import Router from 'next/router'

import { store, persistor } from "../lib/redux/store";
import { PersistGate } from "redux-persist/integration/react";


NProgress.configure({ showSpinner: true });

Router.onRouteChangeStart = () => {
  // console.log('onRouteChangeStart triggered');
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  // console.log('onRouteChangeComplete triggered');
  NProgress.done()
}

Router.onRouteChangeError = () => {
  // console.log('onRouteChangeError triggered');
  NProgress.done()
}




function MyApp({ Component, pageProps }) {

  return <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <Head>
          <title>Hamidreza Ghanbari profile</title>
          <meta name="description" content="Hamidreza Ghanbari profile and resume" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="keywords" content="Hamidreza Ghanbari, nextjs, react, pwa" />
          <meta name="author" content="Hamidreza ghanbari" />

          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#00FFA2" />
          <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
          <link href="/favicon.ico" rel="apple-touch-icon" />

        </Head>


        <PageComponent Component={Component} pageProps={pageProps} />
        

      </PersistGate>
    </Provider>
  </StrictMode>
}




export default MyApp
