import { Typography } from 'antd'
import Image from 'next/image'
import { FC } from 'react'

import styles from './.module.scss'

import { CommonSection } from 'common/components'

const MapCard: FC = () => (
  <CommonSection className={styles.map}>
    <Typography.Title level={3}>찾아오는 길</Typography.Title>
    <Typography.Text>알아서 잘 찾아오라구!</Typography.Text>
    <Image src="/NeoGulMan.jpeg" alt="너굴맨" layout="intrinsic" width={600} height={300} />
  </CommonSection>
)

export default MapCard
