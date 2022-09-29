import { Menu } from 'antd'
import { Header as AntdHeader } from 'antd/lib/layout/layout'
import Link from 'next/link'
import { FC } from 'react'

import SignInButton from '../SignInButton'
import { useHeader } from './hooks'

// TODO: 스크롤 이벤트 리스너에 헤더 감추는 것 달기
const Header: FC = () => {
  const { selectedKeys } = useHeader()

  return (
    <AntdHeader
      style={{
        position: 'fixed',
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        zIndex: 800,
        width: '100%',
        background: 'white',
        boxShadow: '0 2px 8px #C8CAC9',
        padding: '0 5vw',
      }}
    >
      <Menu mode="horizontal" items={LINKS} selectedKeys={selectedKeys} style={{ minWidth: 320 }} />
      <SignInButton />
    </AntdHeader>
  )
}

export default Header

const LINKS = [
  ['/', '홈으로'],
  ['/posts', '글보기'],
  ['/booking', '예약하기'],
].map(([href, label]) => ({
  label: (
    <Link href={href}>
      <a>{label}</a>
    </Link>
  ),
  key: href,
}))
