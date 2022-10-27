import Head from 'next/head'
import { FC } from 'react'

import { AppHeadProps } from './types'

const AppHead: FC<AppHeadProps> = (props) => {
  const { title, ogImage, ogDescription } = props
  const _title = title ? `${title} | 너굴맨` : '타이틀이 없네.. | 너굴맨'

  return (
    <Head>
      {/** https://nextjs.org/docs/messages/no-document-viewport-meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>{_title}</title>
      <meta property="og:title" content={_title} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogDescription && <meta property="og:description" content={ogDescription} />}
    </Head>
  )
}

export default AppHead
