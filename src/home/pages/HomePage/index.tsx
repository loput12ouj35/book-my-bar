import { Typography } from 'antd'
import Image from 'next/image'
import { FC } from 'react'

import { CommonSection } from 'common/components'

const HomePage: FC = () => {
  return (
    <CommonSection>
      <Typography.Title level={2}>술 먹으려면 먼저 예약을 걸어보자구요</Typography.Title>
      <Typography.Text>예약은 너굴맨이 처리했으니 안심하라구!</Typography.Text>
      <Image src="/NeoGulMan.jpeg" alt="너굴맨" width={600} height={300} />
      <Typography.Title level={3}>찾아오는 길</Typography.Title>
      <Typography.Text>알아서 잘 찾아오라구!</Typography.Text>
    </CommonSection>
  )
}

export default HomePage
