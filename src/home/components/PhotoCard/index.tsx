import { Space, Typography } from 'antd'
import Image from 'next/image'
import { FC } from 'react'

import styles from './.module.scss'
import { PhotoCardProps } from './types'

const PhotoCard: FC<PhotoCardProps> = ({ reversed, img, title, descriptions, children }) => {
  return (
    <div className={styles.card + (reversed ? ` ${styles.reversed}` : '')}>
      <div className={styles.img}>
        <Image src={img} alt={img} layout="intrinsic" width={480} height={640} />
      </div>
      <Space className={styles.content} size="large" direction="vertical">
        <Typography.Title level={2}>{title}</Typography.Title>
        <p className={styles.description}>
          {descriptions.map((e, i) => (
            <Typography.Text key={i}>{e}</Typography.Text>
          ))}
        </p>
        {children}
      </Space>
    </div>
  )
}

export default PhotoCard
