import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Link from 'next/link'
import { FC } from 'react'

import GnbMenuButton from '../GnbMenuButton'
import GnbNav from '../GnbNav'
import SignInButton from '../SignInButton'
import styles from './.module.scss'
import { useGnb } from './hooks'

const Gnb: FC<CommonPageProps> = ({ hasBackButtonOnHeader = false }) => {
  const { back } = useGnb()

  return (
    <div className={styles.root}>
      <nav className={styles.leftWrapper}>
        {hasBackButtonOnHeader ? (
          <Button className={styles.backButton} type="text" size="large" icon={<ArrowLeftOutlined />} onClick={back}>
            뒤로
          </Button>
        ) : (
          <Link href="/">
            <a className={styles.temp}>대충 로고</a>
          </Link>
        )}
      </nav>
      <GnbNav />
      <div className={styles.rightWrapper}>
        <GnbMenuButton className={styles.menuButton} />
        <SignInButton className={styles.signinButton} />
      </div>
    </div>
  )
}

export default Gnb
