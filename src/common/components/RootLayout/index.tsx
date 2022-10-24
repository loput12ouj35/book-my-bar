import Layout, { Content, Header } from 'antd/lib/layout/layout'
import { FC } from 'react'

import styles from './.module.scss'
import Gnb from './Gnb'
import { RootLayoutProps } from './types'

const RootLayout: FC<RootLayoutProps> = ({ Component, pageProps }) => (
  <Layout className={styles.root}>
    <Header className={styles.header}>
      <Gnb />
    </Header>
    <Content className={styles.content}>
      <Component {...pageProps} />
    </Content>
  </Layout>
)

export default RootLayout
