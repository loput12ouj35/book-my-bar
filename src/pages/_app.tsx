import { Auth0Provider } from '@auth0/auth0-react'
import Layout, { Content } from 'antd/lib/layout/layout'
import { AppProps } from 'next/app'
import { FC } from 'react'
import { SWRConfig } from 'swr'

import AppHead from 'common/components/AppHead'
import Header from 'common/components/Header'

import 'antd/dist/antd.css'

const App: FC<AppProps<CommonPageProps>> = (props) => {
  const { Component, pageProps } = props
  const { title } = pageProps

  return (
    <Auth0Provider clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID} domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}>
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
        }}
      >
        <AppHead title={title} />
        <Layout style={{ alignItems: 'center' }}>
          <Header />
          <Content
            style={{
              margin: '96px 0', // TODO: 반응형으로.
              padding: 32, // TODO: 반응형으로.
              minWidth: '50vw',
              minHeight: '100vh',
              maxWidth: 768,
              background: 'white',
              boxShadow: '0 2px 8px #C8CAC9',
              borderRadius: 4,
            }}
          >
            <Component {...pageProps} />
          </Content>
        </Layout>
      </SWRConfig>
    </Auth0Provider>
  )
}

export default App
