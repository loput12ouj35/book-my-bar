import { Space, Typography } from 'antd'
import Image from 'next/image'
import { FC } from 'react'

const HomePage: FC = () => {
  return (
    <Space size='large' direction="vertical">
      <Typography.Title level={3}>술 ㄱ_ㄱ</Typography.Title>
      <Typography.Text>예약은 너굴맨이 구했으니/처리했으니 안심하라구!</Typography.Text>
      <Image src="/NeoGulMan.jpeg" alt="너굴맨" width={600} height={300} />
      <Typography.Title level={3}>찾아오는 길</Typography.Title>
      <Typography.Text>알아서 잘 찾아오라구!</Typography.Text>
    </Space>
  )
}

export default HomePage
