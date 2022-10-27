import { ArrowLeftOutlined, CalendarOutlined, FileTextOutlined, HomeOutlined } from '@ant-design/icons'
import { Button, Menu, Typography } from 'antd'
import Link from 'next/link'
import { FC } from 'react'

import SignInButton from '../SignInButton'
import styles from './.module.scss'
import { useGnb } from './hooks'

const Gnb: FC<CommonPageProps> = ({ hasBackButtonOnHeader = false }) => {
  const { selectedKeys, back } = useGnb()

  const [, title, icon] = LINK_ITEMS.find(([href]) => href === selectedKeys[0]) ?? []

  return (
    <div className={styles.root}>
      <div className={styles.leftWrapper}>
        {hasBackButtonOnHeader ? (
          <Button className={styles.backButton} type="text" size="large" icon={<ArrowLeftOutlined />} onClick={back}>
            뒤로
          </Button>
        ) : (
          <Link href="/">
            <a className={styles.temp}>대충 로고</a>
          </Link>
        )}
      </div>
      <div className={styles.centerWrapper}>
        <Menu mode="horizontal" className={styles.menu} items={LINKS} selectedKeys={selectedKeys} theme="dark" />
        <Typography.Title className={styles.centerTitle} level={4}>
          {icon}
          {title}
        </Typography.Title>
      </div>
      <div className={styles.rightWrapper}>
        <SignInButton />
      </div>
    </div>
  )
}

export default Gnb

const LINK_ITEMS = [
  ['/', '홈', <HomeOutlined key="icon" />],
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
