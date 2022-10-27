import { Menu, Typography } from 'antd'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './.module.scss'
import { GNB_NAV_LINKS, LINK_COMPONENTS } from './constants'

const GnbNav: FC = () => {
  const { pathname } = useRouter()
  const selectedKeys = pathname === '/' ? ['/'] : ['/posts', '/booking'].filter((path) => pathname.startsWith(path))

  const [, title, icon] = GNB_NAV_LINKS.find(([href]) => href === selectedKeys[0]) ?? []

  return (
    <nav className={styles.root}>
      <Menu
        mode="horizontal"
        className={styles.menu}
        items={LINK_COMPONENTS}
        selectedKeys={selectedKeys}
        theme="dark"
      />
      <Typography.Title className={styles.centerTitle} level={4}>
        {icon}
        {title}
      </Typography.Title>
    </nav>
  )
}

export default GnbNav
