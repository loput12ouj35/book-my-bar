import { CalendarOutlined } from '@ant-design/icons'
import { Button, Calendar, Typography } from 'antd'
import { FC } from 'react'

import styles from './.module.scss'
import { useCalendarPage } from './hooks'

import { CommonSection } from 'client/common/components'

const CalendarPage: FC = () => {
  const { date, handleSelect } = useCalendarPage()

  return (
    <CommonSection>
      <Typography.Title level={2}>언제 오실래요?</Typography.Title>
      <Calendar value={date} onSelect={handleSelect} />
      <div className={styles.buttonWrapper}>
        <Button icon={<CalendarOutlined />} size="large" type="primary">
          <b> {date.format('YYYY-MM-DD')} </b>에 갈게요
        </Button>
      </div>
    </CommonSection>
  )
}

export default CalendarPage
