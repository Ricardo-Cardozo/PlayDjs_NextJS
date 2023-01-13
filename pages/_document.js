import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <div id="side-drawer"></div>
        <div id="close"></div>
        <div id="backdrop"></div>
        <div id="wpp"></div>
      </body>
    </Html>
  )
}
