import { Space, Typography } from 'antd'
import Image from 'next/image'
import { FC } from 'react'

import styles from './.module.scss'

const CupCard: FC = () => (
  <Space className={styles.cupCard} size="large" direction="vertical">
    <div className={styles.cups}>
      <div className={styles.cup1}>
        <Image src="/cups.jpg" alt="cup1.jpg" layout="fixed" width={400} height={300} />
      </div>
      <div className={styles.cup2}>
        <Image src="/cups.jpg" alt="cup2.jpg" layout="fixed" width={400} height={300} />
      </div>
      <div className={styles.cup3}>
        <Image src="/mizuwari.jpg" alt="mizuwari.jpg" layout="fixed" width={400} height={400} />
      </div>
    </div>
    <Typography.Title>잔이 예쁨</Typography.Title>
    <Typography.Text>미즈와리도 해줌</Typography.Text>
  </Space>
)

export default CupCard
