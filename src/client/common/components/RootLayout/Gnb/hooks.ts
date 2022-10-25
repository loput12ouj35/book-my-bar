import { useRouter } from 'next/router'

import { UseGnb } from './types'

export const useGnb: UseGnb = () => {
  const { pathname } = useRouter()
  const selectedKeys = pathname === '/' ? ['/'] : ['/posts', '/booking'].filter((path) => pathname.startsWith(path))

  return {
    selectedKeys,
  }
}
