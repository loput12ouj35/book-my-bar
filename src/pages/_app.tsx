import 'tailwindcss/tailwind.css'

import { Auth0Provider } from '@auth0/auth0-react'
import { AppProps } from 'next/app'
import { FC } from 'react'
import { SWRConfig } from 'swr'

import AppHead from 'common/components/AppHead'
import Header from 'common/components/Header'

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
        <Header />
        <main className="py-14">
          <Component {...pageProps} />
        </main>
      </SWRConfig>
    </Auth0Provider>
  )
}

export default App
