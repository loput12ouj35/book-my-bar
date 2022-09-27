import 'tailwindcss/tailwind.css'

import Head from 'next/head'
import Header from '../components/header'
import { Auth0Provider } from '@auth0/auth0-react'
import { SWRConfig } from 'swr'

export default function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    >
      <SWRConfig value={{refreshInterval: 3000, fetcher: (resource, init) => fetch(resource, init).then(res => res.json())}}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>My awesome blog</title>
        </Head>

        <Header />

        <main className="py-14">
          <Component {...pageProps} />
        </main>
      </SWRConfig>
    </Auth0Provider>
  )
}
