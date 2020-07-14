import { AppProps } from 'next/app'
import Head from 'next/head'

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <>
      <Head>
        <title>Mi SecKill Plus</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
