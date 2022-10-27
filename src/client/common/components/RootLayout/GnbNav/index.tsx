import { CalendarOutlined, FileTextOutlined, HomeOutlined } from '@ant-design/icons'
import { Menu, Typography } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './.module.scss'

const GnbNav: FC = () => {
  const { pathname } = useRouter()
  const selectedKeys = pathname === '/' ? ['/'] : ['/posts', '/booking'].filter((path) => pathname.startsWith(path))

  const [, title, icon] = LINK_ITEMS.find(([href]) => href === selectedKeys[0]) ?? []

  return (
    <nav className={styles.root}>
      <Menu mode="horizontal" className={styles.menu} items={LINKS} selectedKeys={selectedKeys} theme="dark" />
      <Typography.Title className={styles.centerTitle} level={4}>
        {icon}
        {title}
      </Typography.Title>
    </nav>
  )
}

export default GnbNav

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
