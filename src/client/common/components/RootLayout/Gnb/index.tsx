import { ArrowLeftOutlined, CalendarOutlined, FileTextOutlined, HomeOutlined } from '@ant-design/icons'
import { Button, Menu } from 'antd'
import Link from 'next/link'
import { FC } from 'react'

import SignInButton from '../SignInButton'
import styles from './.module.scss'
import { useGnb } from './hooks'

const Gnb: FC<CommonPageProps> = ({ hasBackButtonOnHeader = false }) => {
  const { selectedKeys, back } = useGnb()

  return (
    <div className={styles.root}>
      <div className={styles.leftWrapper}>
        {hasBackButtonOnHeader ? (
          <Button type="text" size="large" className={styles.backButton} onClick={back}>
            <ArrowLeftOutlined />
          </Button>
        ) : (
          <>대충 로고</>
        )}
      </div>
      <div className={styles.centerWrapper}>
        <Menu mode="horizontal" className={styles.menu} items={LINKS} selectedKeys={selectedKeys} theme="dark" />
      </div>
      <div className={styles.rightWrapper}>
        <SignInButton />
      </div>
    </div>
  )
}

export default Gnb

const LINK_ITEMS = [
  ['/', '홈으로', <HomeOutlined key="icon" />],
  ['/booking', '예약하기', <CalendarOutlined key="icon" />],
  ['/posts', '글보기', <FileTextOutlined key="icon" />],
] as const

const LINKS = LINK_ITEMS.map(([href, label, icon]) => ({
  icon,
  label: (
    <Link href={href}>
      <a>{label}</a>
    </Link>
  ),
  key: href,
}))
