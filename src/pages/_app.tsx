import { Auth0Provider } from '@auth0/auth0-react'
import { AppProps } from 'next/app'
import { FC } from 'react'
import { SWRConfig } from 'swr'

import 'common/styles/reset.css'
import 'antd/dist/antd.dark.css'
import 'common/styles/font.scss'
import { AppHead, RootLayout } from 'common/components'

const App: FC<AppProps<CommonPageProps>> = (props) => {
  const { title } = props.pageProps

  return (
    <Auth0Provider clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID} domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}>
      <SWRConfig
        value={{
          refreshInterval: 5000,
          fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
        }}
      >
        <AppHead title={title} />
        <RootLayout {...props} />
      </SWRConfig>
    </Auth0Provider>
  )
}

export default App
