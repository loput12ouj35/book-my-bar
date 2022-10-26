import { useRouter } from 'next/router'

import { UseGnb } from './types'

export const useGnb: UseGnb = () => {
  const { pathname } = useRouter()
  const selectedKeys = pathname === '/' ? ['/'] : ['/posts', '/booking'].filter((path) => pathname.startsWith(path))

  const back = (): void => {
    if (window.history.length > 0) return window.history.back()
    location.pathname = '/'
  }

  return {
    selectedKeys,
    back,
  }
}
