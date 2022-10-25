import { User } from '@auth0/auth0-react'

import fetcher from 'common/utils/fetcher'

const getUser = async (token: string): Promise<User> =>
  fetcher.get(`https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/userinfo`, {
    headers: { Authorization: `Bearer ${token}` },
  })

export default getUser
