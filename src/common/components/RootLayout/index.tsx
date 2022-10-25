import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout'
import { FC } from 'react'

import styles from './.module.scss'
import Gnb from './Gnb'
import { RootLayoutProps } from './types'

const RootLayout: FC<RootLayoutProps> = ({ Component, pageProps }) => (
  <Layout className={styles.root}>
    <Header className={styles.header}>
      <Gnb hasBigLogo={pageProps.hasBigLogo} />
    </Header>
    <Content className={styles.content}>
      <Component {...pageProps} />
    </Content>
    <Footer className={styles.footer}>(푸터에 뭐 넣지...)</Footer>
  </Layout>
)

export default RootLayout
