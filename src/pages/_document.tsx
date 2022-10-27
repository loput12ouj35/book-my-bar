import NextDocument, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'

export default class Document extends NextDocument {
  static getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    return NextDocument.getInitialProps(ctx)
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="robots" content="nofollow, noindex" />
          <meta name="description" content={DESCRIPTION} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={HOST} />
          <meta property="og:image" content={DEFAULT_IMAGE} />
          <meta property="og:description" content={DESCRIPTION} />
          <meta property="og:site_name" content="너굴맨" />
          <meta property="og:locale" content="ko" />
          <link id="favicon" rel="shortcut icon mask-icon" href="/favicon.jpeg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Yeon+Sung&display=swap" rel="stylesheet" />
          <link rel="canonical" href={HOST} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

const HOST = 'https://neogulman.vercel.app'
const DESCRIPTION = '그냥 술 말고 맛있는 술이 먹고싶당.... 리얼루'
const DEFAULT_IMAGE = '/NeoGulMan.jpeg'
