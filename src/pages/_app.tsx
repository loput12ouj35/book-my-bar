import { Auth0Provider } from '@auth0/auth0-react'
import { AppProps } from 'next/app'
import { FC } from 'react'
import { SWRConfig } from 'swr'

import { AppHead, RootLayout } from 'client/common/components'

import 'antd/dist/antd.dark.css'
import 'client/common/styles/reset.css'
import 'client/common/styles/font.scss'

const App: FC<AppProps<CommonPageProps>> = (props) => {
  const { title } = props.pageProps

  return (
    <Auth0Provider clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID} domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}>
      <SWRConfig>
        <AppHead title={title} />
        <RootLayout {...props} />
      </SWRConfig>
    </Auth0Provider>
  )
}

export default App
