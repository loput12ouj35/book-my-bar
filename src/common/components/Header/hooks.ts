import { useRouter } from 'next/router'

// TODO: 타입 지정
export const useHeader = () => {
  const { pathname } = useRouter()
  const selectedKeys = pathname === '/' ? ['/'] : ['/posts', '/booking'].filter((path) => pathname.startsWith(path))

  return {
    selectedKeys,
  }
}
