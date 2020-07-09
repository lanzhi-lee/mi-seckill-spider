/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import Document, { Html, Head, Main, NextScript } from 'next/document'

const normalizeCSS = 'https://cdn.bootcdn.net/ajax/libs/normalize/8.0.1/normalize.min.css'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href={normalizeCSS} rel='stylesheet' />
          <link href='./index.min.css' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
