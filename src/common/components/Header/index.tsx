import Link from 'next/link'
import { FC } from 'react'

import Container from '../Container'

const Header: FC = () => {
  return (
    <header className="py-6">
      <Container>
        <nav className="flex space-x-4">
          <Link href="/">
            <a>홈으로</a>
          </Link>
          <Link href="/posts">
            <a>글보기</a>
          </Link>
          <Link href="/book">
            <a>예약하기</a>
          </Link>
        </nav>
      </Container>
    </header>
  )
}

export default Header
