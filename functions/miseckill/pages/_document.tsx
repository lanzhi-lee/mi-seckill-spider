/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import Document, { Html, Head, Main, NextScript } from 'next/document'

const isProd = process.env.NODE_ENV === 'production'
const normalizeCSS = 'https://cdn.bootcdn.net/ajax/libs/normalize/8.0.1/normalize.min.css'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Mi SecKill Plus</title>
          <meta name='description' content='小米秒杀加强版' />

          <link rel='icon' href='./favicon.ico' />
          <link rel='icon' type='image/x-icon' href='./favicon.ico' />

          <link href={normalizeCSS} rel='stylesheet' />
          <link href={`./index.min.css`} rel='stylesheet' />
          {isProd && <script src='./redirect.js'></script>}
          {
            // 未使用css-in-js方案，取巧式的自动更新
            // process.env.NODE_ENV === 'development' && <meta http-equiv='refresh' content='5'></meta>
          }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
