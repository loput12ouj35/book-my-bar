import { CalendarOutlined } from '@ant-design/icons'
import { Button, Calendar, Space, Typography } from 'antd'
import { FC } from 'react'

import { useCalendarPage } from './hookst'

const CalendarPage: FC = () => {
  const { date, handleSelect } = useCalendarPage()

  return (
    <Space size="large" direction="vertical">
      <Typography.Title level={2}>언제 오실래요?</Typography.Title>
      <Calendar value={date} onSelect={handleSelect} />
      <div style={{ display: 'flex', justifyContent: 'right' }}>
        <Button icon={<CalendarOutlined />} size="large" type="primary">
          <b> {date.format('YYYY-MM-DD')} </b>에 갈게요
        </Button>
      </div>
    </Space>
  )
}

export default CalendarPage
