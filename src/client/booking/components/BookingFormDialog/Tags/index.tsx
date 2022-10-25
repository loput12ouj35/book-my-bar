import { CalendarOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { useAuth0 } from '@auth0/auth0-react'
import { Space, Tag, Typography } from 'antd'
import { FC } from 'react'

import styles from './.module.scss'
import { TagsProps } from './types'

const Tags: FC<TagsProps> = ({ dateString }) => {
  const { user = {} } = useAuth0()
  const { name = '', email = '' } = user

  return (
    <Space direction="vertical">
      <Space className={styles.row}>
        <Tag icon={<CalendarOutlined />} color="processing">
          {dateString}
        </Tag>
        <Tag icon={<UserOutlined />} color="processing">
          {name}
        </Tag>
        <Tag icon={<MailOutlined />} color="processing">
          {email}
        </Tag>
      </Space>
      <Typography.Text type="danger">* 이메일은 안 보내줌 </Typography.Text>
    </Space>
  )
}

export default Tags
