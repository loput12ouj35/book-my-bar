import { Space, Typography } from 'antd'
import Image from 'next/image'
import { FC } from 'react'

import styles from './.module.scss'

const EventCard: FC = () => (
  <div className={styles.root}>
    <Image src="/tokaji.jpg" alt="tokaji.jpg" layout="intrinsic" width={2000} height={1500} />
    <div className={styles.descriptionWrapper}>
      <Space className={styles.description} size="large" direction="vertical">
        <Typography.Title level={2}>토카이 와인...</Typography.Title>
        <Typography.Text>그냥 자랑하려고 올려봄</Typography.Text>
      </Space>
    </div>
  </div>
)

export default EventCard
