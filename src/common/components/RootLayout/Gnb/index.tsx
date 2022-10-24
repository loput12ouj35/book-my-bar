import { Menu } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import SignInButton from '../SignInButton'
import styles from './.module.scss'
import { useGnb } from './hooks'

// TODO: 스크롤 이벤트 리스너에 헤더 감추는 것 달기
const Gnb: FC = () => {
  const { selectedKeys } = useGnb()

  return (
    <div className={styles.gnb}>
      <Link href="/">
        <a className={styles.logo}>
          <Image src="/NeoGulMan.jpeg" alt="너굴맨" layout="fixed" width={200} height={100} />
        </a>
      </Link>
      <Menu mode="horizontal" className={styles.menu} items={LINKS} selectedKeys={selectedKeys} />
      <SignInButton />
    </div>
  )
}

export default Gnb

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
