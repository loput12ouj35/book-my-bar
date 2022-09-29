import { User } from '@auth0/auth0-react'

const getUser = async (token: string): Promise<User> => {
  const response = await fetch(`https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/userinfo`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
  return await response.json()
}

export default getUser
