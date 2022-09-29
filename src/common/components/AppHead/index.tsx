import Head from 'next/head'
import { FC } from 'react'

import { AppHeadProps } from './types'

const AppHead: FC<AppHeadProps> = (props) => {
  const { title } = props

  return <Head>{title && <title>{title}</title>}</Head>
}

export default AppHead
